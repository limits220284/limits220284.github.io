---
title: From unique to cleanups and weak new low-level tools for efficiency
# summary: Easily manage your projects - create ideation mind maps, Gantt charts, todo lists, and more!
date: 2025-03-28
authors:
  - admin
tags:
  - 随笔
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com)'
---

## 📌 背景与动机

在过去，Go 语言提供了 `runtime.SetFinalizer` 方法来处理对象被垃圾回收时的清理操作（Finalizer）。  
但 Finalizer 存在一些固有问题：

- 如果对象之间有循环引用，Finalizer 可能永远不会被调用，导致内存泄漏。
- Finalizer 会延迟对象的回收，至少需要两个垃圾回收周期才能彻底清除对象。
- Finalizer 有可能让对象“复活”（Resurrection），导致原本应被释放的对象意外存活下来，造成内存浪费。

因此，Go 在 1.24 版本推出了两个新功能：

- **`runtime.AddCleanup`**：更安全的对象清理方法。
- **`weak.Pointer`**：弱引用指针类型，可以引用对象但不会阻止对象被回收。

这两个功能结合使用，能有效解决传统 Finalizer 的问题，并构建更高效、更安全的数据结构，比如缓存或去重机制。

---

## 📌 一、`runtime.AddCleanup`（安全清理函数）

`runtime.AddCleanup` 允许给一个对象附加一个“清理函数”，当该对象变得不可达（即垃圾回收后）时，清理函数将被执行。

示例：使用内存映射文件（memory-mapped file）

```go
package main

import (
 "os"
 "runtime"
 "syscall"
)

// MemoryMappedFile 表示一个内存映射文件对象
// 通过该对象可直接访问文件内容，无需反复读取磁盘
// 当对象不再使用时，会自动释放内存映射资源
type MemoryMappedFile struct {
    data []byte // 文件内容的内存映射区域
}

// NewMemoryMappedFile 创建一个内存映射文件对象
// filename: 需要被映射的文件路径
func NewMemoryMappedFile(filename string) (*MemoryMappedFile, error) {
    // 打开指定文件
    f, err := os.Open(filename)
    if err != nil {
        return nil, err
    }
    // 确保函数结束时自动关闭文件句柄
    defer f.Close()

    // 获取文件信息（主要是为了获取文件大小）
    fi, err := f.Stat()
    if err != nil {
        return nil, err
    }

    // 获取底层系统的文件描述符（file descriptor）
    conn, err := f.SyscallConn()
    if err != nil {
        return nil, err
    }

    var data []byte
    // 使用conn.Control安全地拿到文件描述符并执行内存映射操作
    connErr := conn.Control(func(fd uintptr) {
    // syscall.Mmap 将文件内容映射到内存
    data, err = syscall.Mmap(
        int(fd),            // 文件描述符
        0,                  // 映射的起始位置，从文件头开始
        int(fi.Size()),     // 映射的长度为文件的大小
        syscall.PROT_READ,  // 映射区域权限：只读
        syscall.MAP_SHARED, // 共享模式，可被多个进程访问
    )
    })

    // 检查映射过程中是否发生错误
    if connErr != nil || err != nil {
        return nil, err
    }

    // 创建内存映射文件对象
    mf := &MemoryMappedFile{data: data}

    // 定义清理函数，用于释放内存映射资源
    cleanup := func(data []byte) {
        syscall.Munmap(data) // 当对象被垃圾回收时，自动解除内存映射
    }

    // 添加清理函数，当 mf 对象不再被引用时，自动调用 cleanup
    runtime.AddCleanup(mf, cleanup, data)

    return mf, nil
}
```

### 为什么比传统 Finalizer 更安全？

- 传统 Finalizer 的问题：清理函数的参数必须是原对象本身，会导致对象复活，延迟释放。
- `AddCleanup` 改进：清理函数**不再直接接收原对象**，而是另外的独立参数，从而避免了对象复活问题，可以立即释放内存。

---

## 📌 二、`weak.Pointer`（弱引用指针）

弱引用指针允许引用一个对象，但这种引用不会阻止对象被垃圾回收。当对象被回收后，弱引用自动变成 `nil`。

示例：内存映射文件缓存（防止重复加载同一文件）

```go
var cache sync.Map // 缓存文件映射: map[string]weak.Pointer[MemoryMappedFile]

func NewCachedMemoryMappedFile(filename string) (*MemoryMappedFile, error) {
    var newFile *MemoryMappedFile
    for {
        value, ok := cache.Load(filename)
        if !ok {
            if newFile == nil {
                var err error
                newFile, err = NewMemoryMappedFile(filename)
                if err != nil {
                    return nil, err
                }
            }

            wp := weak.Make(newFile)
            value, loaded := cache.LoadOrStore(filename, wp)
            if !loaded {
                runtime.AddCleanup(newFile, func(filename string) {
                    cache.CompareAndDelete(filename, wp)
                }, filename)
                return newFile, nil
            }
        }

        if mf := value.(weak.Pointer[MemoryMappedFile]).Value(); mf != nil {
            return mf, nil
        }

        cache.CompareAndDelete(filename, value)
    }
}
```

**优势：**

- 避免反复映射同一个文件，提升效率。
- 不需要手动确定何时移除缓存条目。当对象不再被使用，弱引用自动变为 nil，此时可以自动从缓存删除。

---

## 📌 三、组合使用与泛型扩展

利用泛型，`weak.Pointer` 和 `runtime.AddCleanup` 可用于构建通用缓存结构：

```go
type Cache[K comparable, V any] struct {
    create func(K) (*V, error)
    m      sync.Map
}

func (c *Cache[K, V]) Get(key K) (*V, error) {
    var newValue *V
    for {
        value, ok := c.m.Load(key)
        if !ok {
            if newValue == nil {
                var err error
                newValue, err = c.create(key)
                if err != nil {
                    return nil, err
                }
            }

            wp := weak.Make(newValue)
            value, loaded := c.m.LoadOrStore(key, wp)
            if !loaded {
                runtime.AddCleanup(newValue, func(key K) {
                    c.m.CompareAndDelete(key, wp)
                }, key)
                return newValue, nil
            }
        }

        if v := value.(weak.Pointer[V]).Value(); v != nil {
            return v, nil
        }

        c.m.CompareAndDelete(key, value)
    }
}
```

---

## 📌 四、注意事项与未来方向

尽管更安全，`runtime.AddCleanup` 和 `weak.Pointer` 仍属于高级功能：

- 不要让对象和其清理函数互相引用，否则清理函数可能永远不会执行。
- 弱引用指针用作 Map 的键时，其对应的值不应引用该对象本身，否则对象可能永远无法回收。
- 清理操作本质上是非确定性的，难以严格测试和控制，使用时需谨慎考虑。

未来改进方向：

- 引入 Ephemeron（弱键映射）进一步改善弱引用使用体验。
- 提供垃圾收集器直接管理资源（如内存映射）的可能。

---

## 📌 五、为何现在才推出？

弱引用指针在 Go 中早已被讨论，但长期未被优先考虑：

- 它复杂微妙，容易误用，可能引入语言复杂度。
- 但如今泛型支持、对 Finalizer 的长期经验总结，以及其他语言（如 Java、C#）的经验，让这些功能的设计和推出变得成熟和可行。

---

## 📌 六、总结（功能对比）

| 功能 | 优势 | 缺陷 | 推荐用法 |
|------|------|------|----------|
| **runtime.SetFinalizer** | 易用、简单 | 易造成内存泄漏或对象复活 | 不推荐，易误用 |
| ✅ **runtime.AddCleanup** | 不造成对象复活，立即回收 | 高级用法，注意引用关系 | 资源清理，内存映射 |
| ✅ **weak.Pointer** | 不影响垃圾回收，可实现自动缓存清理 | 非确定性，需谨慎使用 | 缓存、对象池、去重 |

---

综上所述，  
**Go 1.24 的新功能 `runtime.AddCleanup` 和 `weak.Pointer` 提供了更安全、高效的资源管理机制，避免了传统 Finalizer 的重大缺陷。但仍需谨慎合理使用，以避免引入新的复杂性。**
