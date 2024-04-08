import{j as n,b as a,c as s,aa as p}from"./chunks/framework.Bxf40uRC.js";const m=JSON.parse('{"title":"Go语言中的channel","description":"","frontmatter":{},"headers":[],"relativePath":"Go/Go语言之通道.md","filePath":"Go/Go语言之通道.md","lastUpdated":1711094318000}'),l={name:"Go/Go语言之通道.md"},e=p(`<h1 id="go语言中的channel" tabindex="-1">Go语言中的channel <a class="header-anchor" href="#go语言中的channel" aria-label="Permalink to &quot;Go语言中的channel&quot;">​</a></h1><h2 id="什么是csp" tabindex="-1">什么是CSP？ <a class="header-anchor" href="#什么是csp" aria-label="Permalink to &quot;什么是CSP？&quot;">​</a></h2><p>CSP 全称是 “Communicating Sequential Processes”</p><h1 id="golang-channel-实现原理" tabindex="-1">Golang Channel 实现原理 <a class="header-anchor" href="#golang-channel-实现原理" aria-label="Permalink to &quot;Golang Channel 实现原理&quot;">​</a></h1><p><img src="https://s2.loli.net/2024/04/06/NrTViZ26k5HxCGh.webp" alt="图片"></p><p>用过 go 的都知道 channel，无需多言，直接开整！</p><h2 id="_1-核心数据结构" tabindex="-1">1 核心数据结构 <a class="header-anchor" href="#_1-核心数据结构" aria-label="Permalink to &quot;1 核心数据结构&quot;">​</a></h2><p><img src="https://s2.loli.net/2024/04/06/H7g6IfoRQYmrwbG.webp" alt="图片"></p><p>chan数据结构</p><h3 id="_1-1-hchan" tabindex="-1">1.1 hchan <a class="header-anchor" href="#_1-1-hchan" aria-label="Permalink to &quot;1.1 hchan&quot;">​</a></h3><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type hchan struct {</span></span>
<span class="line"><span>    qcount   uint           // total data in the queue</span></span>
<span class="line"><span>    dataqsiz uint           // size of the circular queue</span></span>
<span class="line"><span>    buf      unsafe.Pointer // points to an array of dataqsiz elements</span></span>
<span class="line"><span>    elemsize uint16</span></span>
<span class="line"><span>    closed   uint32</span></span>
<span class="line"><span>    elemtype *_type // element type</span></span>
<span class="line"><span>    sendx    uint   // send index</span></span>
<span class="line"><span>    recvx    uint   // receive index</span></span>
<span class="line"><span>    recvq    waitq  // list of recv waiters</span></span>
<span class="line"><span>    sendq    waitq  // list of send waiters</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    lock mutex</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>hchan：channel 数据结构</p><ul><li>qcount：当前 channel 中存在多少个元素；</li><li>dataqsize: 当前 channel 能存放的元素容量；</li><li>buf：channel 中用于存放元素的环形缓冲区；</li><li>elemsize：channel 元素类型的大小；</li><li>closed：标识 channel 是否关闭；</li><li>elemtype：channel 元素类型；</li><li>sendx：发送元素进入环形缓冲区的 index；</li><li>recvx：接收元素所处的环形缓冲区的 index；</li><li>recvq：因接收而陷入阻塞的协程队列；</li><li>sendq：因发送而陷入阻塞的协程队列；</li></ul><h3 id="_1-2-waitq" tabindex="-1">1.2 waitq <a class="header-anchor" href="#_1-2-waitq" aria-label="Permalink to &quot;1.2 waitq&quot;">​</a></h3><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type waitq struct {</span></span>
<span class="line"><span>    first *sudog</span></span>
<span class="line"><span>    last  *sudog</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>waitq：阻塞的协程队列</p><ul><li>first：队列头部</li><li>last：队列尾部</li></ul><h3 id="_1-3-sudog" tabindex="-1">1.3 sudog <a class="header-anchor" href="#_1-3-sudog" aria-label="Permalink to &quot;1.3 sudog&quot;">​</a></h3><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type sudog struct {</span></span>
<span class="line"><span>    g *g</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    next *sudog</span></span>
<span class="line"><span>    prev *sudog</span></span>
<span class="line"><span>    elem unsafe.Pointer // data element (may point to stack)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    isSelect bool</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    c        *hchan </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>sudog：用于包装协程的节点</p><ul><li>g：goroutine，协程；</li><li>next：队列中的下一个节点；</li><li>prev：队列中的前一个节点；</li><li>elem: 读取/写入 channel 的数据的容器;</li><li>isSelect：标识当前协程是否处在 select 多路复用的流程中；</li><li>c：标识与当前 sudog 交互的 chan.</li></ul><h2 id="_2-构造器函数" tabindex="-1">2 构造器函数 <a class="header-anchor" href="#_2-构造器函数" aria-label="Permalink to &quot;2 构造器函数&quot;">​</a></h2><p><img src="https://s2.loli.net/2024/04/06/VemulzZKYPErHtQ.webp" alt="图片"></p><p>几种类型的 channel</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func makechan(t *chantype, size int) *hchan {</span></span>
<span class="line"><span>    elem := t.elem</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>    mem, overflow := math.MulUintptr(elem.size, uintptr(size))</span></span>
<span class="line"><span>    if overflow || mem &gt; maxAlloc-hchanSize || size &lt; 0 {</span></span>
<span class="line"><span>        panic(plainError(&quot;makechan: size out of range&quot;))</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var c *hchan</span></span>
<span class="line"><span>    switch {</span></span>
<span class="line"><span>    case mem == 0:</span></span>
<span class="line"><span>        // Queue or element size is zero.</span></span>
<span class="line"><span>        c = (*hchan)(mallocgc(hchanSize, nil, true))</span></span>
<span class="line"><span>        // Race detector uses this location for synchronization.</span></span>
<span class="line"><span>        c.buf = c.raceaddr()</span></span>
<span class="line"><span>    case elem.ptrdata == 0:</span></span>
<span class="line"><span>        // Elements do not contain pointers.</span></span>
<span class="line"><span>        // Allocate hchan and buf in one call.</span></span>
<span class="line"><span>        c = (*hchan)(mallocgc(hchanSize+mem, nil, true))</span></span>
<span class="line"><span>        c.buf = add(unsafe.Pointer(c), hchanSize)</span></span>
<span class="line"><span>    default:</span></span>
<span class="line"><span>        // Elements contain pointers.</span></span>
<span class="line"><span>        c = new(hchan)</span></span>
<span class="line"><span>        c.buf = mallocgc(mem, elem, true)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    c.elemsize = uint16(elem.size)</span></span>
<span class="line"><span>    c.elemtype = elem</span></span>
<span class="line"><span>    c.dataqsiz = uint(size)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    lockInit(&amp;c.lock, lockRankHchan)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>判断申请内存空间大小是否越界，mem 大小为 element 类型大小与 element 个数相乘后得到，仅当无缓冲型 channel 时，因个数为 0 导致大小为 0；</li><li>根据类型，初始 channel，分为 无缓冲型、有缓冲元素为 struct 型、有缓冲元素为 pointer 型 channel;</li><li>倘若为无缓冲型，则仅申请一个大小为默认值 96 的空间；</li><li>如若有缓冲的 struct 型，则一次性分配好 96 + mem 大小的空间，并且调整 chan 的 buf 指向 mem 的起始位置；</li><li>倘若为有缓冲的 pointer 型，则分别申请 chan 和 buf 的空间，两者无需连续；</li><li>对 channel 的其余字段进行初始化，包括元素类型大小、元素类型、容量以及锁的初始化.</li></ul><h2 id="_3-写流程" tabindex="-1">3 写流程 <a class="header-anchor" href="#_3-写流程" aria-label="Permalink to &quot;3 写流程&quot;">​</a></h2><h3 id="_3-1-两类异常情况处理" tabindex="-1">3.1 两类异常情况处理 <a class="header-anchor" href="#_3-1-两类异常情况处理" aria-label="Permalink to &quot;3.1 两类异常情况处理&quot;">​</a></h3><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func chansend1(c *hchan, elem unsafe.Pointer) {</span></span>
<span class="line"><span>    chansend(c, elem, true, getcallerpc())</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func chansend(c *hchan, ep unsafe.Pointer, block bool, callerpc uintptr) bool {</span></span>
<span class="line"><span>    if c == nil {</span></span>
<span class="line"><span>        gopark(nil, nil, waitReasonChanSendNilChan, traceEvGoStop, 2)</span></span>
<span class="line"><span>        throw(&quot;unreachable&quot;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    lock(&amp;c.lock)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if c.closed != 0 {</span></span>
<span class="line"><span>        unlock(&amp;c.lock)</span></span>
<span class="line"><span>        panic(plainError(&quot;send on closed channel&quot;))</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // ...</span></span></code></pre></div><ul><li>对于未初始化的 chan，写入操作会引发死锁；</li><li>对于已关闭的 chan，写入操作会引发 panic.</li></ul><h3 id="_3-2-case1-写时存在阻塞读协程" tabindex="-1">3.2 case1：写时存在阻塞读协程 <a class="header-anchor" href="#_3-2-case1-写时存在阻塞读协程" aria-label="Permalink to &quot;3.2 case1：写时存在阻塞读协程&quot;">​</a></h3><p><img src="https://s2.loli.net/2024/04/06/F2mCkBpYrW9n45t.webp" alt="图片"></p><p>直接写入阻塞读协程</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func chansend(c *hchan, ep unsafe.Pointer, block bool, callerpc uintptr) bool {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    lock(&amp;c.lock)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if sg := c.recvq.dequeue(); sg != nil {</span></span>
<span class="line"><span>        // Found a waiting receiver. We pass the value we want to send</span></span>
<span class="line"><span>        // directly to the receiver, bypassing the channel buffer (if any).</span></span>
<span class="line"><span>        send(c, sg, ep, func() { unlock(&amp;c.lock) }, 3)</span></span>
<span class="line"><span>        return true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // ...</span></span></code></pre></div><ul><li>加锁；</li><li>从阻塞度协程队列中取出一个 goroutine 的封装对象 sudog；</li><li>在 send 方法中，会基于 memmove 方法，直接将元素拷贝交给 sudog 对应的 goroutine；</li><li>在 send 方法中会完成解锁动作.</li></ul><h3 id="_3-3-case2-写时无阻塞读协程但环形缓冲区仍有空间" tabindex="-1">3.3 case2：写时无阻塞读协程但环形缓冲区仍有空间 <a class="header-anchor" href="#_3-3-case2-写时无阻塞读协程但环形缓冲区仍有空间" aria-label="Permalink to &quot;3.3 case2：写时无阻塞读协程但环形缓冲区仍有空间&quot;">​</a></h3><p><img src="https://s2.loli.net/2024/04/06/hISvNTkalwbiUon.webp" alt="图片"></p><p>写入环形缓冲区</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func chansend(c *hchan, ep unsafe.Pointer, block bool, callerpc uintptr) bool {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>    lock(&amp;c.lock)</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>    if c.qcount &lt; c.dataqsiz {</span></span>
<span class="line"><span>        // Space is available in the channel buffer. Enqueue the element to send.</span></span>
<span class="line"><span>        qp := chanbuf(c, c.sendx)</span></span>
<span class="line"><span>        typedmemmove(c.elemtype, qp, ep)</span></span>
<span class="line"><span>        c.sendx++</span></span>
<span class="line"><span>        if c.sendx == c.dataqsiz {</span></span>
<span class="line"><span>            c.sendx = 0</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        c.qcount++</span></span>
<span class="line"><span>        unlock(&amp;c.lock)</span></span>
<span class="line"><span>        return true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>加锁；</li><li>将当前元素添加到环形缓冲区 sendx 对应的位置；</li><li>sendx++;</li><li>qcount++;</li><li>解锁，返回.</li></ul><h3 id="_3-4-case3-写时无阻塞读协程且环形缓冲区无空间" tabindex="-1">3.4 case3：写时无阻塞读协程且环形缓冲区无空间 <a class="header-anchor" href="#_3-4-case3-写时无阻塞读协程且环形缓冲区无空间" aria-label="Permalink to &quot;3.4 case3：写时无阻塞读协程且环形缓冲区无空间&quot;">​</a></h3><p><img src="https://s2.loli.net/2024/04/06/WfKs5PO6CMU3HpY.webp" alt="图片"></p><p>阻塞写协程</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func chansend(c *hchan, ep unsafe.Pointer, block bool, callerpc uintptr) bool {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>    lock(&amp;c.lock)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>    gp := getg()</span></span>
<span class="line"><span>    mysg := acquireSudog()</span></span>
<span class="line"><span>    mysg.elem = ep</span></span>
<span class="line"><span>    mysg.g = gp</span></span>
<span class="line"><span>    mysg.c = c</span></span>
<span class="line"><span>    gp.waiting = mysg</span></span>
<span class="line"><span>    c.sendq.enqueue(mysg)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    atomic.Store8(&amp;gp.parkingOnChan, 1)</span></span>
<span class="line"><span>    gopark(chanparkcommit, unsafe.Pointer(&amp;c.lock), waitReasonChanSend, traceEvGoBlockSend, 2)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    gp.waiting = nil</span></span>
<span class="line"><span>    closed := !mysg.success</span></span>
<span class="line"><span>    gp.param = nil</span></span>
<span class="line"><span>    mysg.c = nil</span></span>
<span class="line"><span>    releaseSudog(mysg)</span></span>
<span class="line"><span>    return true</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>加锁；</li><li>构造封装当前 goroutine 的 sudog 对象；</li><li>完成指针指向，建立 sudog、goroutine、channel 之间的指向关系；</li><li>把 sudog 添加到当前 channel 的阻塞写协程队列中；</li><li>park 当前协程；</li><li>倘若协程从 park 中被唤醒，则回收 sudog（sudog能被唤醒，其对应的元素必然已经被读协程取走）；</li><li>解锁，返回</li></ul><h3 id="_3-5-写流程整体串联" tabindex="-1">3.5 写流程整体串联 <a class="header-anchor" href="#_3-5-写流程整体串联" aria-label="Permalink to &quot;3.5 写流程整体串联&quot;">​</a></h3><p><img src="https://s2.loli.net/2024/04/06/LsgleqmEDn1dGa2.webp" alt="图片"></p><p>写流程串联</p><h2 id="_4-读流程" tabindex="-1">4 读流程 <a class="header-anchor" href="#_4-读流程" aria-label="Permalink to &quot;4 读流程&quot;">​</a></h2><h3 id="_4-1-异常-case1-读空-channel" tabindex="-1">4.1 异常 case1：读空 channel <a class="header-anchor" href="#_4-1-异常-case1-读空-channel" aria-label="Permalink to &quot;4.1 异常 case1：读空 channel&quot;">​</a></h3><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func chanrecv(c *hchan, ep unsafe.Pointer, block bool) (selected, received bool) {</span></span>
<span class="line"><span>    if c == nil {</span></span>
<span class="line"><span>        gopark(nil, nil, waitReasonChanReceiveNilChan, traceEvGoStop, 2)</span></span>
<span class="line"><span>        throw(&quot;unreachable&quot;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>park 挂起，引起死锁；</li></ul><h3 id="_4-2-异常-case2-channel-已关闭且内部无元素" tabindex="-1">4.2 异常 case2：channel 已关闭且内部无元素 <a class="header-anchor" href="#_4-2-异常-case2-channel-已关闭且内部无元素" aria-label="Permalink to &quot;4.2 异常 case2：channel 已关闭且内部无元素&quot;">​</a></h3><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func chanrecv(c *hchan, ep unsafe.Pointer, block bool) (selected, received bool) {</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    lock(&amp;c.lock)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if c.closed != 0 {</span></span>
<span class="line"><span>        if c.qcount == 0 {</span></span>
<span class="line"><span>            unlock(&amp;c.lock)</span></span>
<span class="line"><span>            if ep != nil {</span></span>
<span class="line"><span>                typedmemclr(c.elemtype, ep)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return true, false</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // The channel has been closed, but the channel&#39;s buffer have data.</span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // ...</span></span></code></pre></div><ul><li>直接解锁返回即可</li></ul><h3 id="_4-3-case3-读时有阻塞的写协程" tabindex="-1">4.3 case3：读时有阻塞的写协程 <a class="header-anchor" href="#_4-3-case3-读时有阻塞的写协程" aria-label="Permalink to &quot;4.3 case3：读时有阻塞的写协程&quot;">​</a></h3><p><img src="https://s2.loli.net/2024/04/06/bxR9FaIVBygtiEu.webp" alt="图片"></p><p>从阻塞写协程中读取</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func chanrecv(c *hchan, ep unsafe.Pointer, block bool) (selected, received bool) {</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    lock(&amp;c.lock)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if sg := c.sendq.dequeue(); sg != nil {</span></span>
<span class="line"><span>        recv(c, sg, ep, func() { unlock(&amp;c.lock) }, 3)</span></span>
<span class="line"><span>        return true, true</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>     // ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>加锁；</li><li>从阻塞写协程队列中获取到一个写协程；</li><li>倘若 channel 无缓冲区，则直接读取写协程元素，并唤醒写协程；</li><li>倘若 channel 有缓冲区，则读取缓冲区头部元素，并将写协程元素写入缓冲区尾部后唤醒写携程；</li><li>解锁，返回.</li></ul><h3 id="_4-4-case4-读时无阻塞写协程且缓冲区有元素" tabindex="-1">4.4 case4：读时无阻塞写协程且缓冲区有元素 <a class="header-anchor" href="#_4-4-case4-读时无阻塞写协程且缓冲区有元素" aria-label="Permalink to &quot;4.4 case4：读时无阻塞写协程且缓冲区有元素&quot;">​</a></h3><p><img src="https://s2.loli.net/2024/04/06/ZGo9RaW3v2BEVlS.webp" alt="图片"></p><p>从环形缓冲区读取</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func chanrecv(c *hchan, ep unsafe.Pointer, block bool) (selected, received bool) {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>    lock(&amp;c.lock)</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>    if c.qcount &gt; 0 {</span></span>
<span class="line"><span>        // Receive directly from queue</span></span>
<span class="line"><span>        qp := chanbuf(c, c.recvx)</span></span>
<span class="line"><span>        if ep != nil {</span></span>
<span class="line"><span>            typedmemmove(c.elemtype, ep, qp)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        typedmemclr(c.elemtype, qp)</span></span>
<span class="line"><span>        c.recvx++</span></span>
<span class="line"><span>        if c.recvx == c.dataqsiz {</span></span>
<span class="line"><span>            c.recvx = 0</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        c.qcount--</span></span>
<span class="line"><span>        unlock(&amp;c.lock)</span></span>
<span class="line"><span>        return true, true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // ...</span></span></code></pre></div><ul><li>加锁；</li><li>获取到 recvx 对应位置的元素；</li><li>recvx++</li><li>qcount--</li><li>解锁，返回</li></ul><h3 id="_4-5-case5-读时无阻塞写协程且缓冲区无元素" tabindex="-1">4.5 case5：读时无阻塞写协程且缓冲区无元素 <a class="header-anchor" href="#_4-5-case5-读时无阻塞写协程且缓冲区无元素" aria-label="Permalink to &quot;4.5 case5：读时无阻塞写协程且缓冲区无元素&quot;">​</a></h3><p><img src="https://s2.loli.net/2024/04/06/XS8Tp1CFV6odzU9.webp" alt="图片"></p><p>阻塞读协程</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func chanrecv(c *hchan, ep unsafe.Pointer, block bool) (selected, received bool) {</span></span>
<span class="line"><span>   // ...</span></span>
<span class="line"><span>   lock(&amp;c.lock)</span></span>
<span class="line"><span>   // ...</span></span>
<span class="line"><span>    gp := getg()</span></span>
<span class="line"><span>    mysg := acquireSudog()</span></span>
<span class="line"><span>    mysg.elem = ep</span></span>
<span class="line"><span>    gp.waiting = mysg</span></span>
<span class="line"><span>    mysg.g = gp</span></span>
<span class="line"><span>    mysg.c = c</span></span>
<span class="line"><span>    gp.param = nil</span></span>
<span class="line"><span>    c.recvq.enqueue(mysg)</span></span>
<span class="line"><span>    atomic.Store8(&amp;gp.parkingOnChan, 1)</span></span>
<span class="line"><span>    gopark(chanparkcommit, unsafe.Pointer(&amp;c.lock), waitReasonChanReceive, traceEvGoBlockRecv, 2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    gp.waiting = nil</span></span>
<span class="line"><span>    success := mysg.success</span></span>
<span class="line"><span>    gp.param = nil</span></span>
<span class="line"><span>    mysg.c = nil</span></span>
<span class="line"><span>    releaseSudog(mysg)</span></span>
<span class="line"><span>    return true, success</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>加锁；</li><li>构造封装当前 goroutine 的 sudog 对象；</li><li>完成指针指向，建立 sudog、goroutine、channel 之间的指向关系；</li><li>把 sudog 添加到当前 channel 的阻塞读协程队列中；</li><li>park 当前协程；</li><li>倘若协程从 park 中被唤醒，则回收 sudog（sudog能被唤醒，其对应的元素必然已经被写入）；</li><li>解锁，返回</li></ul><h3 id="_4-6-读流程整体串联" tabindex="-1">4.6 读流程整体串联 <a class="header-anchor" href="#_4-6-读流程整体串联" aria-label="Permalink to &quot;4.6 读流程整体串联&quot;">​</a></h3><p><img src="https://s2.loli.net/2024/04/06/CkHVDFYwz8tarcS.webp" alt="图片"></p><p>读流程串联</p><h2 id="_5-阻塞与非阻塞模式" tabindex="-1">5 阻塞与非阻塞模式 <a class="header-anchor" href="#_5-阻塞与非阻塞模式" aria-label="Permalink to &quot;5 阻塞与非阻塞模式&quot;">​</a></h2><p>在上述源码分析流程中，均是以阻塞模式为主线进行讲述，忽略非阻塞模式的有关处理逻辑. 此处阐明两个问题：</p><ul><li>非阻塞模式下，流程逻辑有何区别？</li><li>何时会进入非阻塞模式？</li></ul><h3 id="_5-1-非阻塞模式逻辑区别" tabindex="-1">5.1 非阻塞模式逻辑区别 <a class="header-anchor" href="#_5-1-非阻塞模式逻辑区别" aria-label="Permalink to &quot;5.1 非阻塞模式逻辑区别&quot;">​</a></h3><p>非阻塞模式下，读/写 channel 方法通过一个 bool 型的响应参数，用以标识是否读取/写入成功.</p><ul><li>所有需要使得当前 goroutine 被挂起的操作，在非阻塞模式下都会返回 false；</li><li>所有是的当前 goroutine 会进入死锁的操作，在非阻塞模式下都会返回 false；</li><li>所有能立即完成读取/写入操作的条件下，非阻塞模式下会返回 true.</li></ul><h3 id="_5-2-何时进入非阻塞模式" tabindex="-1">5.2 何时进入非阻塞模式 <a class="header-anchor" href="#_5-2-何时进入非阻塞模式" aria-label="Permalink to &quot;5.2 何时进入非阻塞模式&quot;">​</a></h3><p>默认情况下，读/写 channel 都是阻塞模式，只有在 select 语句组成的多路复用分支中，与 channel 的交互会变成非阻塞模式：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ch := make(chan int)</span></span>
<span class="line"><span>select{</span></span>
<span class="line"><span>  case &lt;- ch:</span></span>
<span class="line"><span>  default:</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_5-3-代码一览" tabindex="-1">5.3 代码一览 <a class="header-anchor" href="#_5-3-代码一览" aria-label="Permalink to &quot;5.3 代码一览&quot;">​</a></h3><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func selectnbsend(c *hchan, elem unsafe.Pointer) (selected bool) {</span></span>
<span class="line"><span>    return chansend(c, elem, false, getcallerpc())</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func selectnbrecv(elem unsafe.Pointer, c *hchan) (selected, received bool) {</span></span>
<span class="line"><span>    return chanrecv(c, elem, false)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在 select 语句包裹的多路复用分支中，读和写 channel 操作会被汇编为 selectnbrecv 和 selectnbsend 方法，底层同样复用 chanrecv 和 chansend 方法，但此时由于第三个入参 block 被设置为 false，导致后续会走进非阻塞的处理分支.</p><h2 id="_6-两种读-channel-的协议" tabindex="-1">6 两种读 channel 的协议 <a class="header-anchor" href="#_6-两种读-channel-的协议" aria-label="Permalink to &quot;6 两种读 channel 的协议&quot;">​</a></h2><p>读取 channel 时，可以根据第二个 bool 型的返回值用以判断当前 channel 是否已处于关闭状态：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ch := make(chan int, 2)</span></span>
<span class="line"><span>got1 := &lt;- ch</span></span>
<span class="line"><span>got2,ok := &lt;- ch</span></span></code></pre></div><p>实现上述功能的原因是，两种格式下，读 channel 操作会被汇编成不同的方法：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func chanrecv1(c *hchan, elem unsafe.Pointer) {</span></span>
<span class="line"><span>    chanrecv(c, elem, true)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//go:nosplit</span></span>
<span class="line"><span>func chanrecv2(c *hchan, elem unsafe.Pointer) (received bool) {</span></span>
<span class="line"><span>    _, received = chanrecv(c, elem, true)</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span></code></pre></div><h1 id="_7-关闭" tabindex="-1">7 关闭 <a class="header-anchor" href="#_7-关闭" aria-label="Permalink to &quot;7 关闭&quot;">​</a></h1><p><img src="https://s2.loli.net/2024/04/06/G6PYyvnsQJOxIc5.webp" alt="图片"></p><p>关闭 channel 流程</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func closechan(c *hchan) {</span></span>
<span class="line"><span>    if c == nil {</span></span>
<span class="line"><span>        panic(plainError(&quot;close of nil channel&quot;))</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    lock(&amp;c.lock)</span></span>
<span class="line"><span>    if c.closed != 0 {</span></span>
<span class="line"><span>        unlock(&amp;c.lock)</span></span>
<span class="line"><span>        panic(plainError(&quot;close of closed channel&quot;))</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    c.closed = 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var glist gList</span></span>
<span class="line"><span>    // release all readers</span></span>
<span class="line"><span>    for {</span></span>
<span class="line"><span>        sg := c.recvq.dequeue()</span></span>
<span class="line"><span>        if sg == nil {</span></span>
<span class="line"><span>            break</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if sg.elem != nil {</span></span>
<span class="line"><span>            typedmemclr(c.elemtype, sg.elem)</span></span>
<span class="line"><span>            sg.elem = nil</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        gp := sg.g</span></span>
<span class="line"><span>        gp.param = unsafe.Pointer(sg)</span></span>
<span class="line"><span>        sg.success = false</span></span>
<span class="line"><span>        glist.push(gp)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // release all writers (they will panic)</span></span>
<span class="line"><span>    for {</span></span>
<span class="line"><span>        sg := c.sendq.dequeue()</span></span>
<span class="line"><span>        if sg == nil {</span></span>
<span class="line"><span>            break</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        sg.elem = nil</span></span>
<span class="line"><span>        gp := sg.g</span></span>
<span class="line"><span>        gp.param = unsafe.Pointer(sg)</span></span>
<span class="line"><span>        sg.success = false</span></span>
<span class="line"><span>        glist.push(gp)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    unlock(&amp;c.lock)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Ready all Gs now that we&#39;ve dropped the channel lock.</span></span>
<span class="line"><span>    for !glist.empty() {</span></span>
<span class="line"><span>        gp := glist.pop()</span></span>
<span class="line"><span>        gp.schedlink = 0</span></span>
<span class="line"><span>        goready(gp, 3)</span></span></code></pre></div><ul><li>关闭未初始化过的 channel 会 panic；</li><li>加锁；</li><li>重复关闭 channel 会 panic；</li><li>将阻塞读协程队列中的协程节点统一添加到 glist；</li><li>将阻塞写协程队列中的协程节点统一添加到 glist；</li><li>唤醒 glist 当中的所有协程.</li></ul>`,95),c=[e];function i(t,o,h,r,u,d){return a(),s("div",null,c)}const b=n(l,[["render",i]]);export{m as __pageData,b as default};
