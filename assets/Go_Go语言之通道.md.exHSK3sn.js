import{j as n,b as a,c as s,aa as e}from"./chunks/framework.Bxf40uRC.js";const m=JSON.parse('{"title":"Go语言中的通道","description":"","frontmatter":{},"headers":[],"relativePath":"Go/Go语言之通道.md","filePath":"Go/Go语言之通道.md","lastUpdated":1711094318000}'),p={name:"Go/Go语言之通道.md"},l=e(`<h1 id="go语言中的通道" tabindex="-1">Go语言中的通道 <a class="header-anchor" href="#go语言中的通道" aria-label="Permalink to &quot;Go语言中的通道&quot;">​</a></h1><h2 id="什么是csp" tabindex="-1">什么是CSP？ <a class="header-anchor" href="#什么是csp" aria-label="Permalink to &quot;什么是CSP？&quot;">​</a></h2><p>CSP 全称是 “Communicating Sequential Processes”</p><h2 id="channel的底层数据结构是什么" tabindex="-1">Channel的底层数据结构是什么？ <a class="header-anchor" href="#channel的底层数据结构是什么" aria-label="Permalink to &quot;Channel的底层数据结构是什么？&quot;">​</a></h2><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type hchan struct {</span></span>
<span class="line"><span>	// chan 里元素数量</span></span>
<span class="line"><span>	qcount   uint</span></span>
<span class="line"><span>	// chan 底层循环数组的长度</span></span>
<span class="line"><span>	dataqsiz uint</span></span>
<span class="line"><span>	// 指向底层循环数组的指针</span></span>
<span class="line"><span>	// 只针对有缓冲的 channel</span></span>
<span class="line"><span>	buf      unsafe.Pointer</span></span>
<span class="line"><span>	// chan 中元素大小</span></span>
<span class="line"><span>	elemsize uint16</span></span>
<span class="line"><span>	// chan 是否被关闭的标志</span></span>
<span class="line"><span>	closed   uint32</span></span>
<span class="line"><span>	// chan 中元素类型</span></span>
<span class="line"><span>	elemtype *_type // element type</span></span>
<span class="line"><span>	// 已发送元素在循环数组中的索引</span></span>
<span class="line"><span>	sendx    uint   // send index</span></span>
<span class="line"><span>	// 已接收元素在循环数组中的索引</span></span>
<span class="line"><span>	recvx    uint   // receive index</span></span>
<span class="line"><span>	// 等待接收的 goroutine 队列</span></span>
<span class="line"><span>	recvq    waitq  // list of recv waiters</span></span>
<span class="line"><span>	// 等待发送的 goroutine 队列</span></span>
<span class="line"><span>	sendq    waitq  // list of send waiters</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 保护 hchan 中所有字段</span></span>
<span class="line"><span>	lock mutex</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="解释" tabindex="-1">解释 <a class="header-anchor" href="#解释" aria-label="Permalink to &quot;解释&quot;">​</a></h3><ol><li>sendq，recvq分别表示被阻塞的goroutine，这些goroutine由于尝试读取channel或向channel发送数据而堵塞.</li></ol><p><code>waitq</code> 是 <code>sudog</code> 的一个双向链表，而 <code>sudog</code> 实际上是对 goroutine 的一个封装：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type waitq struct {</span></span>
<span class="line"><span>	first *sudog</span></span>
<span class="line"><span>	last  *sudog</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>创建一个容量为6，元素为int型的channel数据结构如下:</p><p><img src="https://s2.loli.net/2023/12/26/9UBlXY3nAiEZTPI.png" alt="chan data structure"></p><p>新建一个 chan 后，内存在堆上分配，大概长这样：</p><p><img src="https://s2.loli.net/2023/12/26/7QPj2F3d9OmaiRh.png" alt="make chan"></p><h2 id="向channel发送数据的过程是什么样子的" tabindex="-1">向channel发送数据的过程是什么样子的？ <a class="header-anchor" href="#向channel发送数据的过程是什么样子的" aria-label="Permalink to &quot;向channel发送数据的过程是什么样子的？&quot;">​</a></h2><p>直接说主流程，然后介绍一个列子即可；</p><p>主流程:</p><ol><li>如果检测到channel是空的，当前goroutine会被挂起；</li><li>对于不阻塞的发送操作，如果channel未关闭并且没有多余的缓冲空间(说明：a.channel是非缓冲型的，且等待队列里没有goroutine；b.channel是缓冲型的，但是循环数组已经装满了元素)；</li><li>如果检测到channel已经关闭，直接panic；</li><li>如果能从等待接收队列recvq里出队一个sudog(代表goroutine)，说明此时channel是空的，没有元素，所以才会有等待接收者。这是会调用send函数将元素直接从发送者的栈拷贝到接收者的栈，关键操作由sendDirect函数完成。</li><li>如果 <code>c.qcount &lt; c.dataqsiz</code>，说明缓冲区可用（肯定是缓冲型的 channel）。先通过函数取出待发送元素应该去到的位置：</li></ol><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>qp := chanbuf(c, c.sendx)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 返回循环队列里第 i 个元素的地址处</span></span>
<span class="line"><span>func chanbuf(c *hchan, i uint) unsafe.Pointer {</span></span>
<span class="line"><span>	return add(c.buf, uintptr(i)*uintptr(c.elemsize))</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>c.sendx</code> 指向下一个待发送元素在循环数组中的位置，然后调用 <code>typedmemmove</code> 函数将其拷贝到循环数组中。之后 <code>c.sendx</code> 加 1，元素总量加 1 ：<code>c.qcount++</code>，最后，解锁并返回。</p><ol start="6"><li>如果没有命中以上条件的，说明 channel 已经满了。不管这个 channel 是缓冲型的还是非缓冲型的，都要将这个 sender “关起来”（goroutine 被阻塞）。如果 block 为 false，直接解锁，返回 false。</li><li>最后就是真的需要被阻塞的情况。先构造一个 sudog，将其入队（channel 的 sendq 字段）。然后调用 <code>goparkunlock</code> 将当前 goroutine 挂起，并解锁，等待合适的时机再唤醒。</li></ol><h3 id="举个栗子" tabindex="-1">举个栗子 <a class="header-anchor" href="#举个栗子" aria-label="Permalink to &quot;举个栗子&quot;">​</a></h3><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func goroutineA(a &lt;-chan int) {</span></span>
<span class="line"><span>	val := &lt;- a</span></span>
<span class="line"><span>	fmt.Println(&quot;goroutine A received data: &quot;, val)</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func goroutineB(b &lt;-chan int) {</span></span>
<span class="line"><span>	val := &lt;- b</span></span>
<span class="line"><span>	fmt.Println(&quot;goroutine B received data: &quot;, val)</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	ch := make(chan int)</span></span>
<span class="line"><span>	go goroutineA(ch)</span></span>
<span class="line"><span>	go goroutineB(ch)</span></span>
<span class="line"><span>	ch &lt;- 3</span></span>
<span class="line"><span>	time.Sleep(time.Second)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ch1 := make(chan struct{})</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在发送小节里我们说到 G1 和 G2 现在被挂起来了，等待 sender 的解救。在第 17 行，主协程向 ch 发送了一个元素 3，来看下接下来会发生什么。</p><p>根据前面源码分析的结果，我们知道，sender 发现 ch 的 recvq 里有 receiver 在等待着接收，就会出队一个 sudog，把 recvq 里 first 指针的 sudo “推举”出来了，并将其加入到 P 的可运行 goroutine 队列中。</p><p>然后，sender 把发送元素拷贝到 sudog 的 elem 地址处，最后会调用 goready 将 G1 唤醒，状态变为 runnable。</p><p><img src="https://s2.loli.net/2023/12/26/UIEcYeVyHC4pg6d.png" alt="G1 runnable"></p><p>当调度器光顾 G1 时，将 G1 变成 running 状态，执行 goroutineA 接下来的代码。G 表示其他可能有的 goroutine。</p><p>这里其实涉及到一个协程写另一个协程栈的操作。有两个 receiver 在 channel 的一边虎视眈眈地等着，这时 channel 另一边来了一个 sender 准备向 channel 发送数据，为了高效，用不着通过 channel 的 buf “中转”一次，直接从源地址把数据 copy 到目的地址就可以了，效率高啊！</p><p><img src="https://s2.loli.net/2023/12/26/I5KM8yfdCsQiohz.png" alt="send direct"></p><p>上图是一个示意图，<code>3</code> 会被拷贝到 G1 栈上的某个位置，也就是 val 的地址处，保存在 elem 字段。</p><h2 id="从channel接收数据的过程是怎么样的" tabindex="-1">从channel接收数据的过程是怎么样的？ <a class="header-anchor" href="#从channel接收数据的过程是怎么样的" aria-label="Permalink to &quot;从channel接收数据的过程是怎么样的？&quot;">​</a></h2>`,31),t=[l];function c(i,o,r,d,h,u){return a(),s("div",null,t)}const b=n(p,[["render",c]]);export{m as __pageData,b as default};
