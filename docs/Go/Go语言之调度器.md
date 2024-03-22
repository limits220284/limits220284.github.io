# Go语言之调度器

## 1、goroutine和线程的区别？

### 内存消耗

- 创建一个goroutine的栈内存消耗为2kb，实际运行过程中如果栈不够用，会自动进行扩容；
- 创建一个thread需要消耗1MB内存，而且还需要一个被称为"a guard page"的区域用于和其他thread的栈空间进行隔离；

### 创建与销毁

- Thread创建和销毁都会有巨大的消耗，因为要和操作系统打交道，是内核级的，通常解决办法是线程池；
- goroutine因为是由Go runtime负责管理的，创建和销毁的消耗都非常小，是用户级别的；

### 切换

- threads切换的时候，需要保存各种寄存器，以便将来恢复
- 而goroutines切换只需要保存三个寄存器：program Counter，Stack Pointer and BP
- 一般而言，线程切换会消耗1000-1500纳秒，一纳秒平均可以执行12-18条指令
- Goroutine的切换为200纳秒，减少5-7倍左右

## 2、什么是scheduler？

Go程序的执行由两层组成：Go Program，Runtime，即用户程序和运行时。它们之间通过函数调用来实现内存管理、channel通信、goroutines创建等功能；

用户程序进行的系统调用都会被Runtime拦截，以此来帮助它进行调度以及垃圾回收相关工作。

![runtime overall](https://s2.loli.net/2023/12/28/X4MZtmbheoN5YlG.png)



### 为什么要scheduler？

Go scheduler 可以说是 Go 运行时的一个最重要的部分了。Runtime 维护所有的 goroutines，并通过 scheduler 来进行调度。Goroutines 和 threads 是独立的，但是 goroutines 要依赖 threads 才能执行。

Go 程序执行的高效和 scheduler 的调度是分不开的。

### scheduler底层原理

实际上在操作系统看来，所有的程序都是在执行多线程。将 goroutines 调度到线程上执行，仅仅是 runtime 层面的一个概念，在操作系统之上的层面。

有三个基础的结构体来实现goroutines的调度。g，m，p

- g: 表示一个goroutine，它包含：表示goroutine栈的一些字段，指示当前goroutine的状态，指示当前运行到的指令的地址，也就是PC值
- m：表示内核线程，包含正在运行的goroutine等字段
- p：代表一个虚拟的Processer，它维护一个处于Runnable状态的g队列，m需要获得p才能运行g
- 当然还有一个核心的结构体：sched，它总览全局



Go scheduler的核心思想是：

1. 重复利用线程
2. 限制同时运行(不包含阻塞)的线程数为N，N等于CPU核心数目
3. 线程私有的runqueues，并且可以从其他线程strealing goroutine来运行，线程阻塞后，可以将runqueues传递给其他线程

### 为什么需要P这个组件？直接把runqueues放到m不行吗？

当一个线程阻塞的时候，将和它绑定的P上的goroutines转移到其他线程，这样可以避免过长的等待。

Go scheduler 会启动一个后台线程sysmon，用来检测长时间(超过 10ms)运行的goroutine，将其调度到global runqueues。这是一个全局的runqueue，优先级比较低，以示惩罚。

### 总览

通常讲到 Go scheduler 都会提到 GPM 模型，我们来一个个地看。

下图是我使用的 mac 的硬件信息，只有 2 个核。

**![mac 硬件信息](https://golang.design/go-questions/sched/assets/8.png)**



但是配上 CPU 的超线程，1 个核可以变成 2 个，所以当我在 mac 上运行下面的程序时，会打印出 4。

```golang
func main() {
	// NumCPU 返回当前进程可以用到的逻辑核心数
	fmt.Println(runtime.NumCPU())
}
```

因为 NumCPU 返回的是逻辑核心数，而非物理核心数，所以最终结果是 4。

Go 程序启动后，会给每个逻辑核心分配一个 P（Logical Processor）；同时，会给每个 P 分配一个 M（Machine，表示内核线程），这些内核线程仍然由 OS scheduler 来调度。

**总结一下，当我在本地启动一个 Go 程序时，会得到 4 个系统线程去执行任务，每个线程会搭配一个 P。**

在初始化的时候，Go程序会有一个G(initial Goroutine)，执行指令的单位。G会在M上得到执行，内核线程是在CPU核心上调度，而G则是在M上进行调度。

***

还有两个比较重要的组件没有提到：全局可运行队列(GRQ)和本地可运行队列(LRQ)。LRQ存储本地(也就是具体的P)的可运行goroutine，GRQ存储全局的可运行goroutine，这些goroutine还没有分配到具体的P。

![GPM global review](https://s2.loli.net/2023/12/28/IrxRGoWNekbstzQ.png)

Go scheduler 是 Go runtime 的一部分，它内嵌在 Go 程序里，和 Go 程序一起运行。因此它运行在用户空间，在 kernel 的上一层。和 Os scheduler 抢占式调度（preemptive）不一样，Go scheduler 采用**协作式调度（cooperating）**。

**协作式调度一般会由用户设置调度点，例如 python 中的 yield 会告诉 Os scheduler 可以将我调度出去了。**



但是由于在 Go 语言里，goroutine 调度的事情是由 Go runtime 来做，并非由用户控制，所以我们依然可以将 Go scheduler 看成是抢占式调度，因为用户无法预测调度器下一步的动作是什么。

和线程类似，goroutine 的状态也是三种（简化版的）：

| 状态      | 解释                                                         |
| --------- | ------------------------------------------------------------ |
| Waiting   | 等待状态，goroutine 在等待某件事的发生。例如等待网络数据、硬盘；调用操作系统 API；等待内存同步访问条件 ready，如 atomic, mutexes |
| Runnable  | 就绪状态，只要给 M 我就可以运行                              |
| Executing | 运行状态。goroutine 在 M 上执行指令，这是我们想要的          |

下面这张 GPM 全局的运行示意图见得比较多，可以留着，看完后面的系列文章之后再回头来看，还是很有感触的：

![goroutine workflow](https://s2.loli.net/2023/12/28/NPFlWyhQrC64K9e.png)

### Go中程序执行流程

1. go创建一个goroutine
2. 新创建的g会被放到本地运行队列LRQ或者是GRQ
3. 一个M被唤醒或者被创建去执行一个g，循环调度，执行，退出g
4. 清空，重新开始调度循环



## 3、goroutine 调度时机有哪些？

在四种情形下，goroutine 可能会发生调度，但也并不一定会发生，只是说 Go scheduler 有机会进行调度。

| 情形            | 说明                                                         |
| --------------- | ------------------------------------------------------------ |
| 使用关键字 `go` | go 创建一个新的 goroutine，Go scheduler 会考虑调度           |
| GC              | 由于进行 GC 的 goroutine 也需要在 M 上运行，因此肯定会发生调度。当然，Go scheduler 还会做很多其他的调度，例如调度不涉及堆访问的 goroutine 来运行。**GC 不管栈上的内存，只会回收堆上的内存** |
| 系统调用        | 当 goroutine 进行系统调用时，会阻塞 M，所以它会被调度走，同时一个新的 goroutine 会被调度上来 |
| 内存同步访问    | atomic，mutex，channel 操作等会使 goroutine 阻塞，因此会被调度走。等条件满足后（例如其他 goroutine 解锁了）还会被调度上来继续运行 |

## 4、什么是M:N模型？

我们都知道，Go runtime会负责goroutine的生老病死，从创建到销毁，都一手包办。Runtime会在程序启动的时候，创建M个线程(CPU执行调度的单位)，之后创建的N个goroutine都会依附在这M个线程上执行。这就是M：N模型：

![M:N scheduling](https://golang.design/go-questions/sched/assets/11.png)

**在同一时刻，一个线程上只能跑一个 goroutine**。当 goroutine 发生阻塞（例如上篇文章提到的向一个 channel 发送数据，被阻塞）时，runtime 会把当前 goroutine 调度走，让其他 goroutine 来执行。目的就是不让一个线程闲着，榨干 CPU 的每一滴油水。

## 5、什么是工作窃取？

Go scheduler的职责就是将所有处于runnable的goroutines均匀分布到在P上运行的M。

当一个P发现自己的LRQ已经没有G时，会从其他P”偷“一些G来运行。自己的工作做完了，为了全局的利益，主动为别人分担。这被称为"Work-stealing"，Go从1.1开始实现。

Go scheduler 使用M:N模型，在任一时刻，M个goroutines(G)分配到N个内核线程(M)，这些M跑在个数最多为**GOMAXPROCS**的逻辑处理器上(P)。每个M必须依附一个P，每个P同一时刻只能运行一个M。如果P上的M阻塞了，那它就需要其他的M来运行P的LRQ里面的goroutines；

![GPM relatioship](https://golang.design/go-questions/sched/assets/12.png)

实际上，Go scheduler 每一轮调度要做的工作就是找到处于 runnable 的 goroutines，并执行它。找的顺序如下

```golang
runtime.schedule() {
    // only 1/61 of the time, check the global runnable queue for a G.
    // if not found, check the local queue.
    // if not found,
    //     try to steal from other Ps.
    //     if not, check the global runnable queue.
    //     if not found, poll network.
}
```

找到一个可执行的goroutine后，就会一直执行下去，直到被阻塞。

当 P2 上的一个 G 执行结束，它就会去 LRQ 获取下一个 G 来执行。如果 LRQ 已经空了，就是说本地可运行队列已经没有 G 需要执行，并且这时 GRQ 也没有 G 了。这时，P2 会随机选择一个 P（称为 P1），P2 会从 P1 的 LRQ “偷”过来一半的 G。

![Work Stealing](https://s2.loli.net/2023/12/28/vea8fQL1P34T5Vi.png)

这样做的好处就是，有更多的P可以一起工作，加速执行完所有的G。



## 6、GPM是什么？

### G

G、P、M是Go调度器的三个核心组件，各司其职。在它们精密的配合下，Go调度器得以高效运转，这也是Go天然支持高并发的内在动力。今天这篇我们来深入理解GPM模型。

**先看G，去goroutine的首字母，主要保存goroutine的一些状态信息以及cpu的一些寄存器的值，例如IP寄存器，以便在轮到goroutine执行时，CPU知道要从哪一条指令开始执行。**

>  当 goroutine 被调离 CPU 时，调度器负责把 CPU 寄存器的值保存在 g 对象的成员变量之中。

> 当 goroutine 被调度起来运行时，调度器又负责把 g 对象的成员变量所保存的寄存器值恢复到 CPU 的寄存器。



```golang
type g struct {

	// goroutine 使用的栈
	stack       stack   // offset known to runtime/cgo
	// 用于栈的扩张和收缩检查，抢占标志
	stackguard0 uintptr // offset known to liblink
	stackguard1 uintptr // offset known to liblink

	_panic         *_panic // innermost panic - offset known to liblink
	_defer         *_defer // innermost defer
	// 当前与 g 绑定的 m
	m              *m      // current m; offset known to arm liblink
	// goroutine 的运行现场
	sched          gobuf
	syscallsp      uintptr        // if status==Gsyscall, syscallsp = sched.sp to use during gc
	syscallpc      uintptr        // if status==Gsyscall, syscallpc = sched.pc to use during gc
	stktopsp       uintptr        // expected sp at top of stack, to check in traceback
	// wakeup 时传入的参数
	param          unsafe.Pointer // passed parameter on wakeup
	atomicstatus   uint32
	stackLock      uint32 // sigprof/scang lock; TODO: fold in to atomicstatus
	goid           int64
	// g 被阻塞之后的近似时间
	waitsince      int64  // approx time when the g become blocked
	// g 被阻塞的原因
	waitreason     string // if status==Gwaiting
	// 指向全局队列里下一个 g
	schedlink      guintptr
	// 抢占调度标志。这个为 true 时，stackguard0 等于 stackpreempt
	preempt        bool     // preemption signal, duplicates stackguard0 = stackpreempt
	paniconfault   bool     // panic (instead of crash) on unexpected fault address
	preemptscan    bool     // preempted g does scan for gc
	gcscandone     bool     // g has scanned stack; protected by _Gscan bit in status
	gcscanvalid    bool     // false at start of gc cycle, true if G has not run since last scan; TODO: remove?
	throwsplit     bool     // must not split stack
	raceignore     int8     // ignore race detection events
	sysblocktraced bool     // StartTrace has emitted EvGoInSyscall about this goroutine
	// syscall 返回之后的 cputicks，用来做 tracing
	sysexitticks   int64    // cputicks when syscall has returned (for tracing)
	traceseq       uint64   // trace event sequencer
	tracelastp     puintptr // last P emitted an event for this goroutine
	// 如果调用了 LockOsThread，那么这个 g 会绑定到某个 m 上
	lockedm        *m
	sig            uint32
	writebuf       []byte
	sigcode0       uintptr
	sigcode1       uintptr
	sigpc          uintptr
	// 创建该 goroutine 的语句的指令地址
	gopc           uintptr // pc of go statement that created this goroutine
	// goroutine 函数的指令地址
	startpc        uintptr // pc of goroutine function
	racectx        uintptr
	waiting        *sudog         // sudog structures this g is waiting on (that have a valid elem ptr); in lock order
	cgoCtxt        []uintptr      // cgo traceback context
	labels         unsafe.Pointer // profiler labels
	// time.Sleep 缓存的定时器
	timer          *timer         // cached timer for time.Sleep
	gcAssistBytes int64
}
```

`g` 结构体关联了两个比较简单的结构体，stack 表示 goroutine 运行时的栈：

```golang
// 描述栈的数据结构，栈的范围：[lo, hi)
type stack struct {
    // 栈顶，低地址
	lo uintptr
	// 栈底，高地址
	hi uintptr
}
```



Goroutine 运行时，光有栈还不行，至少还得包括 PC，SP 等寄存器，gobuf 就保存了这些值：

```golang
type gobuf struct {
	// 存储 rsp 寄存器的值
	sp   uintptr
	// 存储 rip 寄存器的值
	pc   uintptr
	// 指向 goroutine
	g    guintptr
	ctxt unsafe.Pointer // this has to be a pointer so that gc scans it
	// 保存系统调用的返回值
	ret  sys.Uintreg
	lr   uintptr
	bp   uintptr // for GOEXPERIMENT=framepointer
}
```

### M

**M(Machine)的首字母，它代表一个工作线程，或者说系统线程。G需要调度到M上才能运行，M是真正工作的人。结构体m就是我们常说的M，它保存了M自身使用的栈信息、当前正在M上执行的G信息】、与之绑定的P信息.....**

当M没有工作可做的时候，在它休眠之前，会“自旋”地来找工作：检查全局队列，查看network poller，试图执行gc任务，或者“偷”工作。

```golang
// m 代表工作线程，保存了自身使用的栈信息
type m struct {
	// 记录工作线程（也就是内核线程）使用的栈信息。在执行调度代码时需要使用
	// 执行用户 goroutine 代码时，使用用户 goroutine 自己的栈，因此调度时会发生栈的切换
	g0      *g     // goroutine with scheduling stack/
	morebuf gobuf  // gobuf arg to morestack
	divmod  uint32 // div/mod denominator for arm - known to liblink

	// Fields not known to debuggers.
	procid        uint64     // for debuggers, but offset not hard-coded
	gsignal       *g         // signal-handling g
	sigmask       sigset     // storage for saved signal mask
	// 通过 tls 结构体实现 m 与工作线程的绑定
	// 这里是线程本地存储
	tls           [6]uintptr // thread-local storage (for x86 extern register)
	mstartfn      func()
	// 指向正在运行的 goroutine 对象
	curg          *g       // current running goroutine
	caughtsig     guintptr // goroutine running during fatal signal
	// 当前工作线程绑定的 p
	p             puintptr // attached p for executing go code (nil if not executing go code)
	nextp         puintptr
	id            int32
	mallocing     int32
	throwing      int32
	// 该字段不等于空字符串的话，要保持 curg 始终在这个 m 上运行
	preemptoff    string // if != "", keep curg running on this m
	locks         int32
	softfloat     int32
	dying         int32
	profilehz     int32
	helpgc        int32
	// 为 true 时表示当前 m 处于自旋状态，正在从其他线程偷工作
	spinning      bool // m is out of work and is actively looking for work
	// m 正阻塞在 note 上
	blocked       bool // m is blocked on a note
	// m 正在执行 write barrier
	inwb          bool // m is executing a write barrier
	newSigstack   bool // minit on C thread called sigaltstack
	printlock     int8
	// 正在执行 cgo 调用
	incgo         bool // m is executing a cgo call
	fastrand      uint32
	// cgo 调用总计数
	ncgocall      uint64      // number of cgo calls in total
	ncgo          int32       // number of cgo calls currently in progress
	cgoCallersUse uint32      // if non-zero, cgoCallers in use temporarily
	cgoCallers    *cgoCallers // cgo traceback if crashing in cgo call
	// 没有 goroutine 需要运行时，工作线程睡眠在这个 park 成员上，
	// 其它线程通过这个 park 唤醒该工作线程
	park          note
	// 记录所有工作线程的链表
	alllink       *m // on allm
	schedlink     muintptr
	mcache        *mcache
	lockedg       *g
	createstack   [32]uintptr // stack that created this thread.
	freglo        [16]uint32  // d[i] lsb and f[i]
	freghi        [16]uint32  // d[i] msb and f[i+16]
	fflag         uint32      // floating point compare flags
	locked        uint32      // tracking for lockosthread
	// 正在等待锁的下一个 m
	nextwaitm     uintptr     // next m waiting for lock
	needextram    bool
	traceback     uint8
	waitunlockf   unsafe.Pointer // todo go func(*g, unsafe.pointer) bool
	waitlock      unsafe.Pointer
	waittraceev   byte
	waittraceskip int
	startingtrace bool
	syscalltick   uint32
	// 工作线程 id
	thread        uintptr // thread handle

	// these are here because they are too large to be on the stack
	// of low-level NOSPLIT functions.
	libcall   libcall
	libcallpc uintptr // for cpu profiler
	libcallsp uintptr
	libcallg  guintptr
	syscall   libcall // stores syscall parameters on windows

	mOS
}
```

### P

**P(Processer)，为M的执行提供"上下文"，保存M执行G时的一些资源，例如本地可运行G队列，memory cache等。**

一个M只有绑定P才能执行goroutine，当M被阻塞时，整个P会被传递给其他M，或者说整个P被接管。

```golang
type p struct {
	lock mutex

	// 在 allp 中的索引
	id          int32
	status      uint32 // one of pidle/prunning/...
	link        puintptr
	// 每次调用 schedule 时会加一
	schedtick   uint32
	// 每次系统调用时加一
	syscalltick uint32
	// 用于 sysmon 线程记录被监控 p 的系统调用时间和运行时间
	sysmontick  sysmontick // last tick observed by sysmon
	// 指向绑定的 m，如果 p 是 idle 的话，那这个指针是 nil
	m           muintptr   // back-link to associated m (nil if idle)
	mcache      *mcache
	racectx     uintptr

	deferpool    [5][]*_defer // pool of available defer structs of different sizes (see panic.go)
	deferpoolbuf [5][32]*_defer

	// Cache of goroutine ids, amortizes accesses to runtime·sched.goidgen.
	goidcache    uint64
	goidcacheend uint64

	// Queue of runnable goroutines. Accessed without lock.
	// 本地可运行的队列，不用通过锁即可访问
	runqhead uint32 // 队列头
	runqtail uint32 // 队列尾
	// 使用数组实现的循环队列
	runq     [256]guintptr
	
	// runnext 非空时，代表的是一个 runnable 状态的 G，
	// 这个 G 被 当前 G 修改为 ready 状态，相比 runq 中的 G 有更高的优先级。
	// 如果当前 G 还有剩余的可用时间，那么就应该运行这个 G
	// 运行之后，该 G 会继承当前 G 的剩余时间
	runnext guintptr

	// Available G's (status == Gdead)
	// 空闲的 g
	gfree    *g
	gfreecnt int32

	sudogcache []*sudog
	sudogbuf   [128]*sudog

	tracebuf traceBufPtr
	traceSwept, traceReclaimed uintptr

	palloc persistentAlloc // per-P to avoid mutex

	// Per-P GC state
	gcAssistTime     int64 // Nanoseconds in assistAlloc
	gcBgMarkWorker   guintptr
	gcMarkWorkerMode gcMarkWorkerMode
	runSafePointFn uint32 // if 1, run sched.safePointFn at next safe point

	pad [sys.CacheLineSize]byte
}
```



### GMP

GPM三足鼎立，共同成就Go scheduler。G需要在M上才能运行，M依赖P提供的资源，P则持有待运行的G。你中有我，我中有你。

![曹大 golang notes GPM 三者关系](https://s2.loli.net/2023/12/28/Adi1qpTmOLSkczB.png)



最后我们从宏观上总结一下 GPM，这篇文章尝试从它们的状态流转角度总结。

### G 的状态流转：

![G 的状态流转图](https://s2.loli.net/2023/12/28/HA6CSskVXL3yMgh.png)



### P的状态流转

![P 的状态流转图](https://golang.design/go-questions/sched/assets/16.png)

### M的状态变化

![M 的状态流转图](https://s2.loli.net/2023/12/28/FNzx4I25kqCueWb.png)





## 7、描述scheduler的初始化过程

// TODO 太硬核了



## 8、主goroutine怎么创建？

// TODO 太硬核了



## 9、g0栈和用户栈如何切换？

// TODO 太硬核了



## 10、schedule循环如何启动？

## 11、goroutine如何退出？

## 12、schedule循环如何运转？



## 13、M如何找工作？

## 14、sysmon后台监控线程做了什么？

## 15、一个调度相关的陷阱

>  注：这个陷阱已经在 Go 1.14 中基于信号实现了强制抢占而解决。

由于 Go 语言是协作式的调度，不会像线程那样，在时间片用完后，由 CPU 中断任务强行将其调度走。对于 Go 语言中运行时间过长的 goroutine，Go scheduler 有一个后台线程在持续监控，一旦发现 goroutine 运行超过 10 ms，**会设置 goroutine 的“抢占标志位”**，之后调度器会处理。**但是设置标志位的时机只有在函数“序言”部分，对于没有函数调用的就没有办法了**。

所以在某些极端情况下，会掉进一些陷阱。下面这个例子来自参考资料【scheduler 的陷阱】。

```golang
func main() {
    var x int
    threads := runtime.GOMAXPROCS(0)
    for i := 0; i < threads; i++ {
        go func() {
            for { x++ }
        }()
    }
    time.Sleep(time.Second)
    fmt.Println("x =", x)
}
```

运行结果是：在死循环里出不来，不会输出最后的那条打印语句。

为什么？上面的例子会启动和机器的 CPU 核心数相等的 goroutine，每个 goroutine 都会执行一个无限循环。

创建完这些 goroutines 后，main 函数里执行一条 `time.Sleep(time.Second)` 语句。Go scheduler 看到这条语句后，简直高兴坏了，要来活了。这是调度的好时机啊，于是主 goroutine 被调度走。先前创建的 `threads` 个 goroutines，刚好“一个萝卜一个坑”，把 M 和 P 都占满了。

在这些 goroutine 内部，又没有调用一些诸如 `channel`，`time.sleep` 这些会引发调度器工作的事情。麻烦了，只能任由这些无限循环执行下去了。



解决的办法也有

1. 把 threads 减小 1：
2. 还有一种解决办法是在 for 循环里加一句：

```golang
func main() {
    var x int
    threads := runtime.GOMAXPROCS(0) - 1
    for i := 0; i < threads; i++ {
        go func() {
            for { x++ }
        }()
    }
    time.Sleep(time.Second)
    fmt.Println("x =", x)
}
// 输出
x = 0
// 还有一种解决办法是在 for 循环里加一句：
go func() {
    time.Sleep(time.Second)
    for { x++ }
}()

```

1. 不难理解了吧，主 goroutine 休眠一秒后，被 go schduler 重新唤醒，调度到 M 上继续执行，打印一行语句后，退出。主 goroutine 退出后，其他所有的 goroutine 都必须跟着退出。所谓“覆巢之下 焉有完卵”，一损俱损；
2. 同样可以让main goroutine有机会调度执行；











