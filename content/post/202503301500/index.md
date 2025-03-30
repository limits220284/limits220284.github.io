---
title: Testing concurrent code with testing/synctest
# summary: Easily manage your projects - create ideation mind maps, Gantt charts, todo lists, and more!
date: 2025-03-28
authors:
  - admin
tags:
  - 随笔
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com)'
---



# 使用testing/synctest测试并发代码

Go 的一个标志性特性是对并发的内建支持。Goroutine 和 channel 是用于编写并发程序的简单而有效的原语。

然而，测试并发程序可能是困难且容易出错的。

在 Go 1.24 中，我们引入了一个新的实验性包 `testing/synctest`，用于支持并发代码的测试。本文将解释该实验背后的动机，演示如何使用 `synctest` 包，并讨论其未来的潜力。

> 💡 `testing/synctest` 是实验性的，不受 Go 兼容性承诺的约束。  
> 默认情况下不可见。要使用它，请在环境中设置：  
> `GOEXPERIMENT=synctest`

---

## 并发程序的测试很难

让我们从一个简单的例子开始。

`context.AfterFunc` 函数会安排在 context 被取消后调用一个函数，该函数会在自己的 goroutine 中执行。下面是一个可能用于测试 `AfterFunc` 的例子：

```go
func TestAfterFunc(t *testing.T) {
    ctx, cancel := context.WithCancel(context.Background())

    calledCh := make(chan struct{}) // AfterFunc 被调用时关闭
    context.AfterFunc(ctx, func() {
        close(calledCh)
    })

    // TODO: 断言 AfterFunc 尚未被调用

    cancel()

    // TODO: 断言 AfterFunc 已经被调用
}
```

我们希望在这个测试中检查两个条件：

1. `context` 被取消前函数未被调用；
2. `context` 被取消后函数被调用。

在并发系统中检查一个“未发生的事件”是困难的。我们可以很容易地检查函数是否已经被调用，但要如何确认它还没被调用呢？

一种常见做法是等待一段时间，然后再断定某个事件没有发生。让我们试着在测试中引入一个辅助函数来实现这一点：

```go
// funcCalled 报告函数是否被调用
funcCalled := func() bool {
    select {
    case <-calledCh:
        return true
    case <-time.After(10 * time.Millisecond):
        return false
    }
}

if funcCalled() {
    t.Fatalf("context 被取消前 AfterFunc 就被调用了")
}

cancel()

if !funcCalled() {
    t.Fatalf("context 被取消后 AfterFunc 没有被调用")
}
```

这个测试：

- ❌ 很慢：10 毫秒虽短，但在大量测试中会显著拖慢运行速度；
- ❌ 不稳定：10 毫秒对快机器来说已足够，但在 CI 等环境中可能不够，导致测试失败；
- ❌ 两难选择：等待时间长一些可减少不稳定性但会变慢，反之亦然。

---

## 引入 `testing/synctest` 包

`synctest` 包解决了这个问题。它允许我们将测试重写为简单、快速且可靠的形式，而无需修改被测试的代码。

该包只包含两个函数：

- `Run`：在一个新的 goroutine 中调用一个函数，进入称为 “bubble” 的隔离环境；
- `Wait`：等待 bubble 中的所有 goroutine 都阻塞在另一个 goroutine 上。

让我们用 `synctest` 包重写上面的测试：

```go
func TestAfterFunc(t *testing.T) {
    synctest.Run(func() {
        ctx, cancel := context.WithCancel(context.Background())

        funcCalled := false
        context.AfterFunc(ctx, func() {
            funcCalled = true
        })

        synctest.Wait()
        if funcCalled {
            t.Fatalf("context 被取消前 AfterFunc 就被调用了")
        }

        cancel()

        synctest.Wait()
        if !funcCalled {
            t.Fatalf("context 被取消后 AfterFunc 没有被调用")
        }
    })
}
```

优势：

- ✅ 测试既快速又可靠；
- ✅ 代码更简洁：布尔变量替代 channel；
- ✅ 无竞态：`Wait` 提供同步，`-race` 也不会报错；
- ✅ 更安全：移除第二次 `Wait` 将触发竞态错误，说明检测生效。

---

## 时间相关的测试

并发代码常与时间有关。

使用真实时间进行测试会导致：

- 慢；
- 不稳定；
- 难以预测。

使用虚拟时间的传统方式通常要求你不用 `time` 包，而是自己实现时钟接口，非常繁琐。

`synctest` 中的虚拟时钟让你无需更改被测代码即可测试时间逻辑：

- 在 bubble 中，`time.Sleep`、`WithTimeout` 等使用虚拟时间；
- 时间只在所有 goroutine 都阻塞时推进。

### 示例：测试 `context.WithTimeout`

```go
func TestWithTimeout(t *testing.T) {
    synctest.Run(func() {
        const timeout = 5 * time.Second
        ctx, cancel := context.WithTimeout(context.Background(), timeout)
        defer cancel()

        // 等待比超时时间略短一点
        time.Sleep(timeout - time.Nanosecond)
        synctest.Wait()
        if err := ctx.Err(); err != nil {
            t.Fatalf("超时前 ctx.Err() = %v；预期 nil", err)
        }

        // 再等待剩余时间
        time.Sleep(time.Nanosecond)
        synctest.Wait()
        if err := ctx.Err(); err != context.DeadlineExceeded {
            t.Fatalf("超时后 ctx.Err() = %v；预期 DeadlineExceeded", err)
        }
    })
}
```

---

## 阻塞与 Bubble

`synctest` 的核心在于 bubble 必须进入“持久阻塞”（durably blocked）状态：

- 所有 goroutine 被阻塞；
- 且只能被 bubble 内部的 goroutine 唤醒。

此时：

- 若有 `Wait()` 调用，则返回；
- 若没有，则虚拟时间推进；
- 若仍无解，视为死锁，`Run` 会 panic。

### 造成“持久阻塞”的情况

- 在 `nil` channel 上发送/接收；
- 阻塞在 bubble 中创建的 channel；
- 所有分支都阻塞的 `select`；
- `time.Sleep`；
- `sync.Cond.Wait`；
- `sync.WaitGroup.Wait`。

---

## `sync.Mutex`

使用 `sync.Mutex` **不会导致持久阻塞**。

原因：mutex 可能在 bubble 外部被释放，不能确保同步安全。

---

## Channels

bubble 中创建的 channel：

- ✅ 可以安全参与持久阻塞；
- ❌ 若从 bubble 外访问这些 channel，会 panic；
- ✅ 设计保障只在 bubble 内 goroutine 间通信。

---

## I/O

外部 I/O（如网络）**不会**被视为持久阻塞：

- 网络读可能被系统内核、外部程序等唤醒；
- 即使通信双方都在 bubble 中，运行时也无法分辨；

✅ 推荐做法：使用 `net.Pipe` 创建内存中的连接替代真实网络。

---

## Bubble 生命周期

- `Run` 会一直运行，直到 bubble 中所有 goroutine 退出；
- 如果死锁或不可解除的阻塞，`Run` 会 panic；
- ✅ 所有后台 goroutine 必须在测试结束前退出。

---

## 测试网络代码：`Expect: 100-continue`

HTTP 客户端发送 PUT 请求时可带 `"Expect: 100-continue"`，告诉服务器：

> “我还有 body，要不要我继续发？”

服务器可返回：

- `100 Continue`：允许发；
- 其他状态码：不允许发。

我们要验证客户端行为是否符合预期。

### 测试结构

```go
synctest.Run(func() {
    srvConn, cliConn := net.Pipe()
    defer srvConn.Close()
    defer cliConn.Close()
    tr := &http.Transport{
        DialContext: func(ctx context.Context, network, address string) (net.Conn, error) {
            return cliConn, nil
        },
        ExpectContinueTimeout: 5 * time.Second,
    }
```

```go
    body := "request body"
    go func() {
        req, _ := http.NewRequest("PUT", "http://test.tld/", strings.NewReader(body))
        req.Header.Set("Expect", "100-continue")
        resp, err := tr.RoundTrip(req)
        if err != nil {
            t.Errorf("RoundTrip 出现错误：%v", err)
        } else {
            resp.Body.Close()
        }
    }()
```

```go
    req, err := http.ReadRequest(bufio.NewReader(srvConn))
    if err != nil {
        t.Fatalf("读取请求失败：%v", err)
    }

    var gotBody strings.Builder
    go io.Copy(&gotBody, req.Body)
    synctest.Wait()
    if got := gotBody.String(); got != "" {
        t.Fatalf("未收到 100 Continue 前已读到 body：%q", got)
    }

    srvConn.Write([]byte("HTTP/1.1 100 Continue\r\n\r\n"))
    synctest.Wait()
    if got := gotBody.String(); got != body {
        t.Fatalf("发送 100 Continue 后读取到的 body 为 %q，预期 %q", got, body)
    }

    srvConn.Write([]byte("HTTP/1.1 200 OK\r\n\r\n"))
})
```

这个测试还可扩展为：

- ✅ 未收到 100，不发送正文；
- ✅ 超时后才发送；
- ✅ 响应拒绝内容，不发送正文。

---

## 实验状态

> `testing/synctest` 是 **实验性包**，默认不可见。

### 使用方式

```bash
GOEXPERIMENT=synctest go test
```
