# Go语言中的通道

## 什么是CSP？

CSP 全称是 “Communicating Sequential Processes”



## Channel的底层数据结构是什么？

```golang
type hchan struct {
	// chan 里元素数量
	qcount   uint
	// chan 底层循环数组的长度
	dataqsiz uint
	// 指向底层循环数组的指针
	// 只针对有缓冲的 channel
	buf      unsafe.Pointer
	// chan 中元素大小
	elemsize uint16
	// chan 是否被关闭的标志
	closed   uint32
	// chan 中元素类型
	elemtype *_type // element type
	// 已发送元素在循环数组中的索引
	sendx    uint   // send index
	// 已接收元素在循环数组中的索引
	recvx    uint   // receive index
	// 等待接收的 goroutine 队列
	recvq    waitq  // list of recv waiters
	// 等待发送的 goroutine 队列
	sendq    waitq  // list of send waiters

	// 保护 hchan 中所有字段
	lock mutex
}

```

### 解释

1. sendq，recvq分别表示被阻塞的goroutine，这些goroutine由于尝试读取channel或向channel发送数据而堵塞.

   

`waitq` 是 `sudog` 的一个双向链表，而 `sudog` 实际上是对 goroutine 的一个封装：

```golang
type waitq struct {
	first *sudog
	last  *sudog
}
```



创建一个容量为6，元素为int型的channel数据结构如下:

![chan data structure](https://s2.loli.net/2023/12/26/9UBlXY3nAiEZTPI.png)



新建一个 chan 后，内存在堆上分配，大概长这样：

![make chan](https://s2.loli.net/2023/12/26/7QPj2F3d9OmaiRh.png)

## 向channel发送数据的过程是什么样子的？

直接说主流程，然后介绍一个列子即可；

主流程:

1. 如果检测到channel是空的，当前goroutine会被挂起；
2. 对于不阻塞的发送操作，如果channel未关闭并且没有多余的缓冲空间(说明：a.channel是非缓冲型的，且等待队列里没有goroutine；b.channel是缓冲型的，但是循环数组已经装满了元素)；
3. 如果检测到channel已经关闭，直接panic；
4. 如果能从等待接收队列recvq里出队一个sudog(代表goroutine)，说明此时channel是空的，没有元素，所以才会有等待接收者。这是会调用send函数将元素直接从发送者的栈拷贝到接收者的栈，关键操作由sendDirect函数完成。
5. 如果 `c.qcount < c.dataqsiz`，说明缓冲区可用（肯定是缓冲型的 channel）。先通过函数取出待发送元素应该去到的位置：

```golang
qp := chanbuf(c, c.sendx)

// 返回循环队列里第 i 个元素的地址处
func chanbuf(c *hchan, i uint) unsafe.Pointer {
	return add(c.buf, uintptr(i)*uintptr(c.elemsize))
}
```

`c.sendx` 指向下一个待发送元素在循环数组中的位置，然后调用 `typedmemmove` 函数将其拷贝到循环数组中。之后 `c.sendx` 加 1，元素总量加 1 ：`c.qcount++`，最后，解锁并返回。

6. 如果没有命中以上条件的，说明 channel 已经满了。不管这个 channel 是缓冲型的还是非缓冲型的，都要将这个 sender “关起来”（goroutine 被阻塞）。如果 block 为 false，直接解锁，返回 false。
7. 最后就是真的需要被阻塞的情况。先构造一个 sudog，将其入队（channel 的 sendq 字段）。然后调用 `goparkunlock` 将当前 goroutine 挂起，并解锁，等待合适的时机再唤醒。

### 举个栗子

```golang
func goroutineA(a <-chan int) {
	val := <- a
	fmt.Println("goroutine A received data: ", val)
	return
}

func goroutineB(b <-chan int) {
	val := <- b
	fmt.Println("goroutine B received data: ", val)
	return
}

func main() {
	ch := make(chan int)
	go goroutineA(ch)
	go goroutineB(ch)
	ch <- 3
	time.Sleep(time.Second)

	ch1 := make(chan struct{})
}
```

在发送小节里我们说到 G1 和 G2 现在被挂起来了，等待 sender 的解救。在第 17 行，主协程向 ch 发送了一个元素 3，来看下接下来会发生什么。

根据前面源码分析的结果，我们知道，sender 发现 ch 的 recvq 里有 receiver 在等待着接收，就会出队一个 sudog，把 recvq 里 first 指针的 sudo “推举”出来了，并将其加入到 P 的可运行 goroutine 队列中。

然后，sender 把发送元素拷贝到 sudog 的 elem 地址处，最后会调用 goready 将 G1 唤醒，状态变为 runnable。

![G1 runnable](https://s2.loli.net/2023/12/26/UIEcYeVyHC4pg6d.png)

当调度器光顾 G1 时，将 G1 变成 running 状态，执行 goroutineA 接下来的代码。G 表示其他可能有的 goroutine。

这里其实涉及到一个协程写另一个协程栈的操作。有两个 receiver 在 channel 的一边虎视眈眈地等着，这时 channel 另一边来了一个 sender 准备向 channel 发送数据，为了高效，用不着通过 channel 的 buf “中转”一次，直接从源地址把数据 copy 到目的地址就可以了，效率高啊！

![send direct](https://s2.loli.net/2023/12/26/I5KM8yfdCsQiohz.png)

上图是一个示意图，`3` 会被拷贝到 G1 栈上的某个位置，也就是 val 的地址处，保存在 elem 字段。



## 从channel接收数据的过程是怎么样的？







