# Go语言之context

**一句话：context用来解决goroutine之间退出通知、元数据传递的功能。**

## context是什么？

Go1.7标准库引入context，中文译做上下文，**准确来说它是goroutine的上下文，包含goroutine的运行状态，环境，现场等信息**。

**context主要用来再goroutine之间传递上下文信息，包括:取消信号、超时时间、截止时间、k-v等**。

随着context包的引入，标准库中很多接口因此加上了context参数，例如database/sql包。context几乎成为了并发控制和超时控制的标准做法。

**context.Context类型的值可以协调多个goroutine中的代码执行”取消操作“，并且可以存储键值对。最重要的是它是并发安全的。**

与它协作的API都可以由外部控制执行”取消操作“, 例如:取消一个HTTP请求的执行。

## context有什么作用？

在 Go 的 server 里，通常每来一个请求都会启动若干个 goroutine 同时工作：有些去数据库拿数据，有些调用下游接口获取相关数据……

![request](https://s2.loli.net/2023/12/26/rCIAQnJTplVHt8W.png)

这些 goroutine 需要共享这个请求的基本数据，例如登陆的 token，处理请求的最大超时时间（如果超过此值再返回数据，请求方因为超时接收不到）等等。当请求被取消或是处理时间太长，这有可能是使用者关闭了浏览器或是已经超过了请求方规定的超时时间，请求方直接放弃了这次请求结果。**这时，所有正在为这个请求工作的 goroutine 需要快速退出，因为它们的“工作成果”不再被需要了。在相关联的 goroutine 都退出后，系统就可以回收相关的资源**。

再多说一点，Go 语言中的 server 实际上是一个“协程模型”，也就是说一个协程处理一个请求。例如在业务的高峰期，某个下游服务的响应变慢，而当前系统的请求又没有超时控制，或者超时时间设置地过大，那么等待下游服务返回数据的协程就会越来越多。而我们知道，协程是要消耗系统资源的，后果就是协程数激增，内存占用飙涨，甚至导致服务不可用。更严重的会导致雪崩效应，整个服务对外表现为不可用，这肯定是 P0 级别的事故。这时，肯定有人要背锅了。

其实前面描述的 P0 级别事故，通过设置“允许下游最长处理时间”就可以避免。例如，给下游设置的 timeout 是 50 ms，如果超过这个值还没有接收到返回数据，就直接向客户端返回一个默认值或者错误。例如，返回商品的一个默认库存数量。注意，这里设置的超时时间和创建一个 http client 设置的读写超时时间不一样，这里不详细展开。可以去看看参考资料`【Go 在今日头条的实践】`一文，有很精彩的论述。

**context 包就是为了解决上面所说的这些问题而开发的：在 一组 goroutine 之间传递共享的值、取消信号、deadline……**

![request with context](https://s2.loli.net/2023/12/26/canCTGxZEs5uYFW.png)

简练一点来说，在Go中，我们不能直接杀死协程，协程的关闭一般会用channel + select的方式来控制。但是在某些场景下，例如处理一个请求衍生了很多协程，这些协程之间是相互关联的：需要共享一些全局变量、由共同的deadline等，而且可以同时被关闭。再用channel + select会比较麻烦，这时可以通过context来实现。

**一句话：context用来解决goroutine之间退出通知、元数据传递的功能。**

### 引申1 举例说明context在实际项目中如何使用？

context使用起来非常方便，源码对外提供了一个创建根节点context的函数：

```go
func Background() Context
```

background是一个空的context，它不能被取消，没有值，也没有超时时间。

有了根节点context，又提供了四个函数创建子节点context：

```go
func WithCancel(parent Context) (ctx Context, cancel CancelFunc) // 传入父节点，返回ctx和取消函数
func WithDeadline(parent Context, deadline time.Time) (Context, CancelFunc) // 传入父节点和截止时间，返回子节点context，取消函数
func WithTimeout(parent Context, timeout time.Duration) (Context, CancelFunc) // 传入父节点和超时时间，返回子节点context，取消函数
func WithValue(parent Context, key, val interface{}) Context // 传入父节点，key，value，返回子节点
```

context会在函数传递间传递。只需要在适当的时间调用cancel函数向goroutines发出取消信号或者调用value函数取出context中的值。

### context的使用注意事项

1. 不要将 Context 塞到结构体里。直接将 Context 类型作为函数的第一参数，而且一般都命名为 ctx。
2. 不要向函数传入一个 nil 的 context，如果你实在不知道传什么，标准库给你准备好了一个 context：todo。
3. 不要把本应该作为函数参数的类型塞到 context 中，context 存储的应该是一些共同的数据。例如：登陆的 session、cookie 等。
4. 同一个 context 可能会被传递到多个 goroutine，别担心，context 是并发安全的。

### 传递共享数据

对于Web服务端开发，往往希望将一个请求处理的整个过程串起来，这就非常依赖ThreadLocal(对于Go理解为单个协程所独有)的变量，而在Go语言中并没有这个概念，因此需要在函数调用的时候传递context;

```go
package main

import (
 "context"
 "fmt"
)

func main() {
 ctx := context.Background()
 process(ctx)

 ctx = context.WithValue(ctx, "traceId", "qcrao-2019")
 process(ctx)
}

func process(ctx context.Context) {
 traceId, ok := ctx.Value("traceId").(string) 
 if ok {
  fmt.Printf("process over. trace_id=%s\n", traceId)
 } else {
  fmt.Printf("process over. no trace_id\n")
 }
}
// 输出
process over. no trace_id
process over. trace_id=qcrao-2019
****
// 真实业务场景
const requestIDKey int = 0
func WithRequestID(next http.Handler) http.Handler {
 return http.HandlerFunc(
  func(rw http.ResponseWriter, req *http.Request) {
   // 从 header 中提取 request-id
   reqID := req.Header.Get("X-Request-ID")
   // 创建 valueCtx。使用自定义的类型，不容易冲突
   ctx := context.WithValue(
    req.Context(), requestIDKey, reqID)
   
   // 创建新的请求
   req = req.WithContext(ctx)
   
   // 调用 HTTP 处理函数
   next.ServeHTTP(rw, req)
  }
 )
}

// 获取 request-id
func GetRequestID(ctx context.Context) string {
 ctx.Value(requestIDKey).(string)
}

func Handle(rw http.ResponseWriter, req *http.Request) {
 // 拿到 reqId，后面可以记录日志等等
 reqID := GetRequestID(req.Context())
 ...
}

func main() {
 handler := WithRequestID(http.HandlerFunc(Handle))
 http.ListenAndServe("/", handler)
}
```

### 取消goroutine

我们先来设想一个场景：打开外卖的订单页，地图上显示外卖小哥的位置，而且是每秒更新 1 次。app 端向后台发起 websocket 连接（现实中可能是轮询）请求后，后台启动一个协程，每隔 1 秒计算 1 次小哥的位置，并发送给端。如果用户退出此页面，则后台需要“取消”此过程，退出 goroutine，系统回收资源。

后端可能的实现如下：

```go
func Perform() {
    for {
        calculatePos()
        sendResult()
        time.Sleep(time.Second)
    }
}
// 朴素想法，传递一个bool变量用来控制
```

如果需要实现“取消”功能，并且在不了解 context 功能的前提下，可能会这样做：给函数增加一个指针型的 bool 变量，在 for 语句的开始处判断 bool 变量是发由 true 变为 false，如果改变，则退出循环。

上面给出的简单做法，可以实现想要的效果，没有问题，但是并不优雅，并且一旦协程数量多了之后，并且各种嵌套，就会很麻烦。优雅的做法，自然就要用到 context。

```go
func Perform(ctx context.Context) {
    for {
        calculatePos()
        sendResult()

        select {
        case <-ctx.Done():
            // 被取消，直接返回
            return
        case <-time.After(time.Second):
            // block 1 秒钟 
        }
    }
}
```

主流程可能是这样的：

```go
ctx, cancel := context.WithTimeout(context.Background(), time.Hour)
go Perform(ctx)

// ……
// app 端返回页面，调用cancel 函数
cancel()
```

注意一个细节，WithTimeOut 函数返回的 context 和 cancelFun 是分开的。context 本身并没有取消函数，这样做的原因是取消函数只能由外层函数调用，防止子节点 context 调用取消函数，从而严格控制信息的流向：由父节点 context 流向子节点 context。

### 防止goroutine泄露

前面那个例子里，goroutine 还是会自己执行完，最后返回，只不过会多浪费一些系统资源。这里改编一个“如果不用 context 取消，goroutine 就会泄漏的例子”，来自参考资料：`【避免协程泄漏】`。

```go
func gen() <-chan int {
 ch := make(chan int)
 go func() {
  var n int
  for {
   ch <- n
   n++
   time.Sleep(time.Second)
  }
 }()
 return ch
}

// 这是一个可以生成无限整数的协程，但如果我只需要它产生的前 5 个数，那么就会发生 goroutine 泄漏
func main() {
 for n := range gen() {
  fmt.Println(n)
  if n == 5 {
   break
  }
 }
 // ……
}
```

当n == 5的时候，直接break掉。那么gen函数的协程就会执行无限循环，永远不会停下来，发生了goroutine泄露。

用context改进这个栗子:

```go
func gen(ctx context.Context) <-chan int {
 ch := make(chan int)
 go func() {
  var n int
  for {
   select {
   case <-ctx.Done():
    return
   case ch <- n:
    n++
    time.Sleep(time.Second)
   }
  }
 }()
 return ch
}

func main() {
 ctx, cancel := context.WithCancel(context.Background())
 defer cancel() // 避免其他地方忘记 cancel，且重复调用不影响

 for n := range gen(ctx) {
  fmt.Println(n)
  if n == 5 {
   cancel()
   break
  }
 }
 // ……
}
```

增加一个 context，在 break 前调用 cancel 函数，取消 goroutine。gen 函数在接收到取消信号后，直接退出，系统回收资源。

## context.Value的查找过程是怎么样的?

```go
type valueCtx struct {
 Context
 key, val interface{}
}
```

它实现了两个方法:

```go
func (c *valueCtx) String() string {
 return fmt.Sprintf("%v.WithValue(%#v, %#v)", c.Context, c.key, c.val)
}

func (c *valueCtx) Value(key interface{}) interface{} {
 if c.key == key {
  return c.val
 }
 return c.Context.Value(key)
}
```

由于它直接将Context作为匿名字段，因此尽管它只实现了两个方法，其他方法继承自父context。但它仍然是一个Context，这是Go语言的一个特点。

创建valueCtx的函数:

```go
func WithValue(parent Context, key, val interface{}) Context {
 if key == nil {
  panic("nil key")
 }
 if !reflect.TypeOf(key).Comparable() {
  panic("key is not comparable")
 }
 return &valueCtx{parent, key, val}
}
```

对key的要求是可比较的，因为之后需要通过key取出context中的值，可比较是必须的。

通过层层传递context，最终会形成一棵这样的树:

![valueCtx](https://s2.loli.net/2023/12/26/Jbr6VfsqSaH5pvO.png)

和链表有点像，只是它的方向相反：Context 指向它的父节点，链表则指向下一个节点。通过 WithValue 函数，可以创建层层的 valueCtx，存储 goroutine 间可以共享的变量。

取值的过程，实际上是一个递归查找的过程：

```go
func (c *valueCtx) Value(key interface{}) interface{} {
 if c.key == key {
  return c.val
 }
 return c.Context.Value(key)
}
```

### context.Value的缺点

`WithValue` 创建 context 节点的过程实际上就是创建链表节点的过程。两个节点的 key 值是可以相等的，但它们是两个不同的 context 节点。查找的时候，会向上查找到最后一个挂载的 context 节点，也就是离得比较近的一个父节点 context。所以，整体上而言，用 `WithValue` 构造的其实是一个低效率的链表。

如果你接手过项目，肯定经历过这样的窘境：在一个处理过程中，有若干子函数、子协程。各种不同的地方会向 context 里塞入各种不同的 k-v 对，最后在某个地方使用。

你根本就不知道什么时候什么地方传了什么值？这些值会不会被“覆盖”（底层是两个不同的 context 节点，查找的时候，只会返回一个结果）？你肯定会崩溃的。

而这也是 `context.Value` 最受争议的地方。很多人建议尽量不要通过 context 传值。

## context如何被取消？

![classes](https://s2.loli.net/2023/12/26/dIRPKkAaUQo9mYp.png)

### 接口

#### context

```go
type Context interface {
 // 当 context 被取消或者到了 deadline，返回一个被关闭的 channel
 Done() <-chan struct{}

 // 在 channel Done 关闭后，返回 context 取消原因
 Err() error

 // 返回 context 是否会被取消以及自动取消时间（即 deadline）
 Deadline() (deadline time.Time, ok bool)

 // 获取 key 对应的 value
 Value(key interface{}) interface{}
}
```

`Context` 是一个接口，定义了 4 个方法，它们都是`幂等`的。也就是说连续多次调用同一个方法，得到的结果都是相同的。

1. `Done()` 返回一个 channel，可以表示 context 被取消的信号：当这个 channel 被关闭时，说明 context 被取消了。注意，这是一个只读的channel。 我们又知道，读一个关闭的 channel 会读出相应类型的零值。并且源码里没有地方会向这个 channel 里面塞入值。换句话说，这是一个 `receive-only` 的 channel。因此在子协程里读这个 channel，除非被关闭，否则读不出来任何东西。也正是利用了这一点，子协程从 channel 里读出了值（零值）后，就可以做一些收尾工作，尽快退出。
2. `Err()` 返回一个错误，表示 channel 被关闭的原因。例如是被取消，还是超时。
3. `Deadline()` 返回 context 的截止时间，通过此时间，函数就可以决定是否进行接下来的操作，如果时间太短，就可以不往下做了，否则浪费系统资源。当然，也可以用这个 deadline 来设置一个 I/O 操作的超时时间。
4. `Value()` 获取之前设置的 key 对应的 value。

#### canceler

```go
type canceler interface {
 cancel(removeFromParent bool, err error)
 Done() <-chan struct{}
}
```

实现了上面定义的两个方法的 Context，就表明该 Context 是可取消的。源码中有两个类型实现了 canceler 接口：`*cancelCtx` 和 `*timerCtx`。注意是加了 `*` 号的，是这两个结构体的指针实现了 canceler 接口。

### Context 接口设计成这个样子的原因

- “取消”操作应该是建议性，而非强制性
  - caller不应该去关心、干涉callee的情况，决定如何以及何时return是callee的责任。caller只需发送”取消“消息，callee根据收到的消息来做进一步的决策，因此接口并没有定义cancel方法
- 取消”操作应该可传递
  - ”取消“某个函数的时候，和它相关的其他函数也应该”取消“。因此，”Done()“方法返回一个只读的channel，所有相关函数监听此channel。一旦channel关闭，通过channel的”广播机制“，所有监听者都能接收到。

### 结构体

#### emptyCtx

源码定义了Context接口后，并且给出了一个实现：

```go
type emptyCtx int

func (*emptyCtx) Deadline() (deadline time.Time, ok bool) {
 return
}

func (*emptyCtx) Done() <-chan struct{} {
 return nil
}

func (*emptyCtx) Err() error {
 return nil
}

func (*emptyCtx) Value(key interface{}) interface{} {
 return nil
}
```

看这段源码，非常 happy。因为每个函数都实现的异常简单，要么是直接返回，要么是返回 nil。

所以，这实际上是一个空的 context，永远不会被 cancel，没有存储值，也没有 deadline。

它被包装成：

```go
var (
 background = new(emptyCtx)
 todo       = new(emptyCtx)
)
func Background() Context {
 return background
}

func TODO() Context {
 return todo
}
```

background 通常用在 main 函数中，作为所有 context 的根节点。

todo 通常用在并不知道传递什么 context的情形。例如，调用一个需要传递 context 参数的函数，你手头并没有其他 context 可以传递，这时就可以传递 todo。这常常发生在重构进行中，给一些函数添加了一个 Context 参数，但不知道要传什么，就用 todo “占个位子”，最终要换成其他 context。

#### cancelCtx

再看一个重要的context：

```go
type cancelCtx struct {
 Context

 // 保护之后的字段
 mu       sync.Mutex
 done     chan struct{}
 children map[canceler]struct{}
 err      error
}
```

这是一个可以取消的 Context，实现了 canceler 接口。它直接将接口 Context 作为它的一个匿名字段，这样，它就可以被看成一个 Context。

##### `Done()` 方法的实现

```go
func (c *cancelCtx) Done() <-chan struct{} {
 c.mu.Lock()
 if c.done == nil {
  c.done = make(chan struct{})
 }
 d := c.done
 c.mu.Unlock()
 return d
}
```

c.done()是”懒汉式“创建，只有调用了Done()方法的时候才会被创建。再次说明，函数返回的是一个只读的channel，而且没有地方向这个channel里面写数据。所以，直接调用读这个channel，协程会被block住。一般通过select来使用。一旦关闭，就会立即读出零值。

##### cancel()方法实现

```go
func (c *cancelCtx) cancel(removeFromParent bool, err error) {
    // 必须要传 err
 if err == nil {
  panic("context: internal error: missing cancel error")
 }
 c.mu.Lock()
 if c.err != nil {
  c.mu.Unlock()
  return // 已经被其他协程取消
 }
 // 给 err 字段赋值
 c.err = err
 // 关闭 channel，通知其他协程
 if c.done == nil {
  c.done = closedchan
 } else {
  close(c.done)
 }
 
 // 遍历它的所有子节点
 for child := range c.children {
     // 递归地取消所有子节点
  child.cancel(false, err)
 }
 // 将子节点置空
 c.children = nil
 c.mu.Unlock()

 if removeFromParent {
     // 从父节点中移除自己 
  removeChild(c.Context, c)
 }
}
```

总体来说，cancel()方法的功能就是关闭channel：c.done()；递归的取消它的所有子节点；从父节点删除自己。达到的效果是通过关闭channel，将取消信号传递给了它的所有子节点。goroutine接收到取消信号的方式就是select中的c.done()被选中。

那么如何创建一个可取消的Context方法呢？

```go
func WithCancel(parent Context) (ctx Context, cancel CancelFunc) {
 c := newCancelCtx(parent)
 propagateCancel(parent, &c) // 将c加入到parent中
 return &c, func() { c.cancel(true, Canceled) }
}

func newCancelCtx(parent Context) cancelCtx {
 return cancelCtx{Context: parent}
}
```

这是一个暴露给用户的方法，传入一个父 Context（这通常是一个 `background`，作为根节点），返回新建的 context，新 context 的 done channel 是新建的（前文讲过）。

当 WithCancel 函数返回的 CancelFunc 被调用或者是父节点的 done channel 被关闭（父节点的 CancelFunc 被调用），此 context（子节点） 的 done channel 也会被关闭。

注意传给 Cancel 方法的参数，前者是 true，也就是说取消的时候，需要将自己从父节点里删除。第二个参数则是一个固定的取消错误类型：

```go
var Canceled = errors.New("context canceled")
```

还注意到一点，调用子节点 cancel 方法的时候，传入的第一个参数 `removeFromParent` 是 false。

当 `removeFromParent` 为 true 时，会将当前节点的 context 从父节点 context 中删除：

```go
func removeChild(parent Context, child canceler) {
 p, ok := parentCancelCtx(parent)
 if !ok {
  return
 }
 p.mu.Lock()
 if p.children != nil {
  delete(p.children, child)
 }
 p.mu.Unlock()
}
// 最关键的一行：
delete(p.children, child)
```

**两个问题需要回答：1. 什么时候会传 true？2. 为什么有时传 true，有时传 false？**

1. 什么时候传true呢？
   - 什么时候会传true呢？**答案是调用WithCancel()方法的时候**，也就是新创建一个可取消的context节点的时候，返回的cancelFunc函数会传入true，这样做的结果是：当调用返回的cancelFunc()时，会将这个context从它的父节点里面除去，因为父节点可能有很多的子节点，你自己取消了，所以我要和你断绝关系，和其他人没有关系。
2. 什么时候传false？
   - cancel()方法，需要传递false，因为在递归的取消子节点的时候，会将c.children = nil，这就意味着c下面的所有子几点都和自己没有关系了，自然也没必要要求子节点从自身children集合中删除了；

**重点看 `propagateCancel()`：**

```go
func propagateCancel(parent Context, child canceler) {
 // 父节点是个空节点
 if parent.Done() == nil {
  return // parent is never canceled
 }
 // 找到可以取消的父 context
 if p, ok := parentCancelCtx(parent); ok {
  p.mu.Lock()
  if p.err != nil {
   // 父节点已经被取消了，本节点（子节点）也要取消
   child.cancel(false, p.err)
  } else {
   // 父节点未取消
   if p.children == nil {
    p.children = make(map[canceler]struct{})
   }
   // "挂到"父节点上
   p.children[child] = struct{}{}
  }
  p.mu.Unlock()
 } else {
  // 如果没有找到可取消的父 context。新启动一个协程监控父节点或子节点取消信号
  go func() {
   select {
   case <-parent.Done():
    child.cancel(false, parent.Err())
   case <-child.Done():
   }
  }()
 }
}
```

这个方法的作用就是向上寻找可以“挂靠”的“可取消”的 context，并且“挂靠”上去。这样，调用上层 cancel 方法的时候，就可以层层传递，将那些挂靠的子 context 同时“取消”。

这里着重解释下为什么会有 else 描述的情况发生。`else` 是指当前节点 context 没有向上找到可以取消的父节点，那么就要再启动一个协程监控父节点或者子节点的取消动作。

这里就有疑问了，既然没找到可以取消的父节点，那 `case <-parent.Done()` 这个 case 就永远不会发生，所以可以忽略这个 case；而 `case <-child.Done()` 这个 case 又啥事不干。那这个 `else` 不就多余了吗？

其实不然。我们来看 `parentCancelCtx` 的代码：

```go
func parentCancelCtx(parent Context) (*cancelCtx, bool) {
 for {
  switch c := parent.(type) {
  case *cancelCtx:
   return c, true
  case *timerCtx:
   return &c.cancelCtx, true
  case *valueCtx:
   parent = c.Context
  default:
   return nil, false
  }
 }
}
```

可以看出来在propagateCancel()函数中执行的这个parentCancelCtx()会寻找可以取消的父节点，如果不存在于这三种情况之一，就会走到default中，这个时候就会开启一个新的线程来监听。

```go
case <-parent.Done():
 child.cancel(false, parent.Err())
case <-child.Done():
```

第一个case表示如果parent结束，就会取消子节点

第二个表示子节点取消了，就退出这个select，但是如果没有这条语句，很可能父节点一直没有取消导致goroutine泄露。当然如果父节点取消了，就会重复让子节点取消，不过，影响不大。

#### timerCtx

timerCtx基于cancelCtx，只是多了一个time.Timer和一个deadline()。Timer会在deadline到来时，自动取消context。

```go
type timerCtx struct {
 cancelCtx
 timer *time.Timer // Under cancelCtx.mu.
 deadline time.Time
}
```

它首先是一个cancelCtx，所以它能取消。看下cancel()方法

```go
func (c *timerCtx) cancel(removeFromParent bool, err error) {
 // 直接调用 cancelCtx 的取消方法
 c.cancelCtx.cancel(false, err)
 if removeFromParent {
  // 从父节点中删除子节点
  removeChild(c.cancelCtx.Context, c)
 }
 c.mu.Lock()
 if c.timer != nil {
  // 关掉定时器，这样，在deadline 到来时，不会再次取消
  c.timer.Stop()
  c.timer = nil
 }
 c.mu.Unlock()
}
```

创建timerCtx的方法:

```go
func WithTimeout(parent Context, timeout time.Duration) (Context, CancelFunc) {
 return WithDeadline(parent, time.Now().Add(timeout))
}
```

`WithTimeout` 函数直接调用了 `WithDeadline`，传入的 deadline 是当前时间加上 timeout 的时间，也就是从现在开始再经过 timeout 时间就算超时。也就是说，`WithDeadline` 需要用的是绝对时间。重点来看它：

```go
func WithDeadline(parent Context, deadline time.Time) (Context, CancelFunc) {
 if cur, ok := parent.Deadline(); ok && cur.Before(deadline) {
  // 如果父节点 context 的 deadline 早于指定时间。直接构建一个可取消的 context。
  // 原因是一旦父节点超时，自动调用 cancel 函数，子节点也会随之取消。
  // 所以不用单独处理子节点的计时器时间到了之后，自动调用 cancel 函数
  return WithCancel(parent)
 }
 
 // 构建 timerCtx
 c := &timerCtx{
  cancelCtx: newCancelCtx(parent),
  deadline:  deadline,
 }
 // 挂靠到父节点上
 propagateCancel(parent, c)
 
 // 计算当前距离 deadline 的时间
 d := time.Until(deadline)
 if d <= 0 {
  // 直接取消
  c.cancel(true, DeadlineExceeded) // deadline has already passed
  return c, func() { c.cancel(true, Canceled) }
 }
 c.mu.Lock()
 defer c.mu.Unlock()
 if c.err == nil {
  // d 时间后，timer 会自动调用 cancel 函数。自动取消
  c.timer = time.AfterFunc(d, func() {
   c.cancel(true, DeadlineExceeded)
  })
 }
 return c, func() { c.cancel(true, Canceled) }
}
```

其中比较核心的一句话就是

```go
c.timer = time.AfterFunc(d, func() {
 c.cancel(true, DeadlineExceeded)
})
// 如果超时了，直接调用取消函数
var DeadlineExceeded error = deadlineExceededError{}

type deadlineExceededError struct{}

func (deadlineExceededError) Error() string   { return "context deadline exceeded" }
```
