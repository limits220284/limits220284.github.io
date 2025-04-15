---
title: More predictable benchmarking with testing.B.Loop
date: 2025-04-15
authors:
  - admin
tags:
  - 随笔
---


# 在基准测试中实现更可预测的表现：`testing.B.Loop`  
作者：Junyang Shao  
发布日期：2025 年 4 月 2 日

Go 开发者在使用 `testing` 包编写基准测试时，可能会遇到各种陷阱。Go 1.24 引入了一种新的基准测试方式：`testing.B.Loop`。它与旧有方式一样易用，但更加健壮可靠。

---

## 传统方式：使用 b.N 的循环

在过去，Go 的基准测试通常使用从 0 到 `b.N` 的循环：

```go
func Benchmark(b *testing.B) {
  for range b.N {
    ... 要测量的代码 ...
  }
}
```

使用 `b.Loop()` 替代，仅需做出非常小的改动：

```go
func Benchmark(b *testing.B) {
  for b.Loop() {
    ... 要测量的代码 ...
  }
}
```

---

## `testing.B.Loop` 的优势

- ✅ 能防止基准循环中不期望的编译器优化；
- ✅ 自动将测试之外的 **准备（setup）和清理（cleanup）代码排除在计时之外**；
- ✅ 编写的测试代码无法依赖于迭代总数或当前的迭代次数（不再有 b.N）；

这些在以前的 `b.N` 风格中都是很容易出错的地方，一旦出错会**悄无声息地**导致测试结果无效。而 `b.Loop` 风格的基准测试甚至运行时间也更短！

---

## 让我们看看传统方式的坑有哪些

在 Go 1.24 之前，尽管 benchmark 的结构看起来很简单，但稍微复杂一点的基准测试就变得容易出错：

```go
func Benchmark(b *testing.B) {
  ... 前期准备 ...
  b.ResetTimer() // 如果准备过程较耗时
  for range b.N {
    ... 要测量的代码 ...
    ... 为了避免代码被优化掉需要使用 sink 或累加值 ...
  }
  b.StopTimer() // 如果清理或报告过程较耗时
  ... 清理工作 ...
  ... 输出报告 ...
}
```

### 问题在哪？

- 如果准备或清理过程比较耗时，开发者必须调用 `b.ResetTimer()` 或 `b.StopTimer()`。
- 这很容易忘记！而且即使记得，也很难判断这个“准备”到底“够不够贵”，是否值得排除计时。
- 如果没调用这些函数，整个 benchmark 函数都会被计时，包括准备和清理阶段，导致测试结果被污染（偏大）。

---

## 更隐蔽的陷阱：被优化掉的测试函数

来看一个真实示例：

```go
func isCond(b byte) bool {
  if b%3 == 1 && b%7 == 2 && b%17 == 11 && b%31 == 9 {
    return true
  }
  return false
}

func BenchmarkIsCondWrong(b *testing.B) {
  for range b.N {
    isCond(201)
  }
}
```

用户可能会看到这个函数执行的时间是**亚纳秒级**，可这在现实中根本不可能！

原因是：

- `isCond` 被内联（inlined）了；
- 而且函数的返回值并没有被使用；
- 因此整个调用被视为**死代码**，直接被编译器优化掉；
- 实际测试的根本不是函数性能，而是“什么都不做”的时间。

这个例子里结果异常显眼，但在更复杂的场景中可能就不会察觉到有问题。

---

## `testing.B.Loop` 如何解决这些问题？

与 `b.N` 不同，`testing.B.Loop` 能够追踪：

- benchmark 第一次调用时的时间点；
- 最后一次迭代结束时的时间点；

它内部自动包含 `b.ResetTimer()` 和 `b.StopTimer()`，因此你**不再需要手动管理计时逻辑**，也不会意外地将 setup/cleanup 包含在计时中。

### 编译器优化问题也解决了！

在 Go 1.24 中，只要循环条件是 `b.Loop()`，Go 编译器会阻止对该循环体中代码的内联优化，从而防止死代码被错误地移除。未来这个机制还会进一步增强。

---

## 更快完成 benchmark 的奥秘

`b.N` 风格的 benchmark 是这样做的：

- Go 测试框架会多次调用 benchmark 函数；
- 每次用不同的 `b.N`；
- 不断增加直到总测试时间达标（以获取更稳定的结果）；

而 `b.Loop()` 风格则优化为：

- 整个 benchmark 函数**只调用一次**；
- `b.Loop()` 内部通过测量时间动态决定循环次数；
- 调用者无需操心底层过程，性能更好，结构更清晰。

---

## 注意：并不是所有计时控制都能自动完成

某些操作，比如每轮都要填充新数据，就仍需手动控制计时器：

```go
func BenchmarkSortInts(b *testing.B) {
  ints := make([]int, N)
  for b.Loop() {
    b.StopTimer()
    fillRandomInts(ints)
    b.StartTimer()
    slices.Sort(ints)
  }
}
```

在这个例子中，我们测试 `slices.Sort` 的排序性能。但由于排序前必须填充随机数，为了不将数据生成过程纳入计时，仍需使用 `b.StopTimer()` 和 `b.StartTimer()`。

---

## 使用限制和要求

- ✅ 每个 benchmark 函数中只能有一个 `b.Loop()` 循环；
- ❌ 不可同时使用 `b.N` 和 `b.Loop()`；
- ✅ 循环内的每次迭代必须执行相同的操作；
- ✅ 如有每轮特殊逻辑（如数据重置），仍需手动控制计时器。

---

## 推荐用法（何时使用）

现在，推荐所有新的 benchmark 使用如下结构：

```go
func Benchmark(b *testing.B) {
  ... setup ...
  for b.Loop() {
    // 如有需要，可手动控制计时
    ... 要测试的代码 ...
  }
  ... cleanup ...
}
```

相比传统方式，`testing.B.Loop` 提供了：

- 更快的执行速度；
- 更准确的计时；
- 更不容易出错的结构；
