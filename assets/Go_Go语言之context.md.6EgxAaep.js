import{j as n,b as a,c as s,aa as p}from"./chunks/framework.BrJMe4p_.js";const x=JSON.parse('{"title":"Go语言之context","description":"","frontmatter":{},"headers":[],"relativePath":"Go/Go语言之context.md","filePath":"Go/Go语言之context.md","lastUpdated":null}'),e={name:"Go/Go语言之context.md"},t=p(`<h1 id="go语言之context" tabindex="-1">Go语言之context <a class="header-anchor" href="#go语言之context" aria-label="Permalink to &quot;Go语言之context&quot;">​</a></h1><p><strong>一句话：context用来解决goroutine之间退出通知、元数据传递的功能。</strong></p><h2 id="context是什么" tabindex="-1">context是什么？ <a class="header-anchor" href="#context是什么" aria-label="Permalink to &quot;context是什么？&quot;">​</a></h2><p>Go1.7标准库引入context，中文译做上下文，<strong>准确来说它是goroutine的上下文，包含goroutine的运行状态，环境，现场等信息</strong>。</p><p><strong>context主要用来再goroutine之间传递上下文信息，包括:取消信号、超时时间、截止时间、k-v等</strong>。</p><p>随着context包的引入，标准库中很多接口因此加上了context参数，例如database/sql包。context几乎成为了并发控制和超时控制的标准做法。</p><p><strong>context.Context类型的值可以协调多个goroutine中的代码执行”取消操作“，并且可以存储键值对。最重要的是它是并发安全的。</strong></p><p>与它协作的API都可以由外部控制执行”取消操作“, 例如:取消一个HTTP请求的执行。</p><h2 id="context有什么作用" tabindex="-1">context有什么作用？ <a class="header-anchor" href="#context有什么作用" aria-label="Permalink to &quot;context有什么作用？&quot;">​</a></h2><p>在 Go 的 server 里，通常每来一个请求都会启动若干个 goroutine 同时工作：有些去数据库拿数据，有些调用下游接口获取相关数据……</p><p><img src="https://s2.loli.net/2023/12/26/rCIAQnJTplVHt8W.png" alt="request"></p><p>这些 goroutine 需要共享这个请求的基本数据，例如登陆的 token，处理请求的最大超时时间（如果超过此值再返回数据，请求方因为超时接收不到）等等。当请求被取消或是处理时间太长，这有可能是使用者关闭了浏览器或是已经超过了请求方规定的超时时间，请求方直接放弃了这次请求结果。<strong>这时，所有正在为这个请求工作的 goroutine 需要快速退出，因为它们的“工作成果”不再被需要了。在相关联的 goroutine 都退出后，系统就可以回收相关的资源</strong>。</p><p>再多说一点，Go 语言中的 server 实际上是一个“协程模型”，也就是说一个协程处理一个请求。例如在业务的高峰期，某个下游服务的响应变慢，而当前系统的请求又没有超时控制，或者超时时间设置地过大，那么等待下游服务返回数据的协程就会越来越多。而我们知道，协程是要消耗系统资源的，后果就是协程数激增，内存占用飙涨，甚至导致服务不可用。更严重的会导致雪崩效应，整个服务对外表现为不可用，这肯定是 P0 级别的事故。这时，肯定有人要背锅了。</p><p>其实前面描述的 P0 级别事故，通过设置“允许下游最长处理时间”就可以避免。例如，给下游设置的 timeout 是 50 ms，如果超过这个值还没有接收到返回数据，就直接向客户端返回一个默认值或者错误。例如，返回商品的一个默认库存数量。注意，这里设置的超时时间和创建一个 http client 设置的读写超时时间不一样，这里不详细展开。可以去看看参考资料<code>【Go 在今日头条的实践】</code>一文，有很精彩的论述。</p><p><strong>context 包就是为了解决上面所说的这些问题而开发的：在 一组 goroutine 之间传递共享的值、取消信号、deadline……</strong></p><p><img src="https://s2.loli.net/2023/12/26/canCTGxZEs5uYFW.png" alt="request with context"></p><p>简练一点来说，在Go中，我们不能直接杀死协程，协程的关闭一般会用channel + select的方式来控制。但是在某些场景下，例如处理一个请求衍生了很多协程，这些协程之间是相互关联的：需要共享一些全局变量、由共同的deadline等，而且可以同时被关闭。再用channel + select会比较麻烦，这时可以通过context来实现。</p><p><strong>一句话：context用来解决goroutine之间退出通知、元数据传递的功能。</strong></p><h3 id="引申1-举例说明context在实际项目中如何使用" tabindex="-1">引申1 举例说明context在实际项目中如何使用？ <a class="header-anchor" href="#引申1-举例说明context在实际项目中如何使用" aria-label="Permalink to &quot;引申1 举例说明context在实际项目中如何使用？&quot;">​</a></h3><p>context使用起来非常方便，源码对外提供了一个创建根节点context的函数：</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Context</span></span></code></pre></div><p>background是一个空的context，它不能被取消，没有值，也没有超时时间。</p><p>有了根节点context，又提供了四个函数创建子节点context：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func WithCancel(parent Context) (ctx Context, cancel CancelFunc) // 传入父节点，返回ctx和取消函数</span></span>
<span class="line"><span>func WithDeadline(parent Context, deadline time.Time) (Context, CancelFunc) // 传入父节点和截止时间，返回子节点context，取消函数</span></span>
<span class="line"><span>func WithTimeout(parent Context, timeout time.Duration) (Context, CancelFunc) // 传入父节点和超时时间，返回子节点context，取消函数</span></span>
<span class="line"><span>func WithValue(parent Context, key, val interface{}) Context // 传入父节点，key，value，返回子节点</span></span></code></pre></div><p>context会在函数传递间传递。只需要在适当的时间调用cancel函数向goroutines发出取消信号或者调用value函数取出context中的值。</p><h3 id="context的使用注意事项" tabindex="-1">context的使用注意事项 <a class="header-anchor" href="#context的使用注意事项" aria-label="Permalink to &quot;context的使用注意事项&quot;">​</a></h3><ol><li>不要将 Context 塞到结构体里。直接将 Context 类型作为函数的第一参数，而且一般都命名为 ctx。</li><li>不要向函数传入一个 nil 的 context，如果你实在不知道传什么，标准库给你准备好了一个 context：todo。</li><li>不要把本应该作为函数参数的类型塞到 context 中，context 存储的应该是一些共同的数据。例如：登陆的 session、cookie 等。</li><li>同一个 context 可能会被传递到多个 goroutine，别担心，context 是并发安全的。</li></ol><h3 id="传递共享数据" tabindex="-1">传递共享数据 <a class="header-anchor" href="#传递共享数据" aria-label="Permalink to &quot;传递共享数据&quot;">​</a></h3><p>对于Web服务端开发，往往希望将一个请求处理的整个过程串起来，这就非常依赖ThreadLocal(对于Go理解为单个协程所独有)的变量，而在Go语言中并没有这个概念，因此需要在函数调用的时候传递context;</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;context&quot;</span></span>
<span class="line"><span>	&quot;fmt&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	ctx := context.Background()</span></span>
<span class="line"><span>	process(ctx)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ctx = context.WithValue(ctx, &quot;traceId&quot;, &quot;qcrao-2019&quot;)</span></span>
<span class="line"><span>	process(ctx)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func process(ctx context.Context) {</span></span>
<span class="line"><span>	traceId, ok := ctx.Value(&quot;traceId&quot;).(string) </span></span>
<span class="line"><span>	if ok {</span></span>
<span class="line"><span>		fmt.Printf(&quot;process over. trace_id=%s\\n&quot;, traceId)</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		fmt.Printf(&quot;process over. no trace_id\\n&quot;)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 输出</span></span>
<span class="line"><span>process over. no trace_id</span></span>
<span class="line"><span>process over. trace_id=qcrao-2019</span></span>
<span class="line"><span>****</span></span>
<span class="line"><span>// 真实业务场景</span></span>
<span class="line"><span>const requestIDKey int = 0</span></span>
<span class="line"><span>func WithRequestID(next http.Handler) http.Handler {</span></span>
<span class="line"><span>	return http.HandlerFunc(</span></span>
<span class="line"><span>		func(rw http.ResponseWriter, req *http.Request) {</span></span>
<span class="line"><span>			// 从 header 中提取 request-id</span></span>
<span class="line"><span>			reqID := req.Header.Get(&quot;X-Request-ID&quot;)</span></span>
<span class="line"><span>			// 创建 valueCtx。使用自定义的类型，不容易冲突</span></span>
<span class="line"><span>			ctx := context.WithValue(</span></span>
<span class="line"><span>				req.Context(), requestIDKey, reqID)</span></span>
<span class="line"><span>			</span></span>
<span class="line"><span>			// 创建新的请求</span></span>
<span class="line"><span>			req = req.WithContext(ctx)</span></span>
<span class="line"><span>			</span></span>
<span class="line"><span>			// 调用 HTTP 处理函数</span></span>
<span class="line"><span>			next.ServeHTTP(rw, req)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取 request-id</span></span>
<span class="line"><span>func GetRequestID(ctx context.Context) string {</span></span>
<span class="line"><span>	ctx.Value(requestIDKey).(string)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Handle(rw http.ResponseWriter, req *http.Request) {</span></span>
<span class="line"><span>	// 拿到 reqId，后面可以记录日志等等</span></span>
<span class="line"><span>	reqID := GetRequestID(req.Context())</span></span>
<span class="line"><span>	...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	handler := WithRequestID(http.HandlerFunc(Handle))</span></span>
<span class="line"><span>	http.ListenAndServe(&quot;/&quot;, handler)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="取消goroutine" tabindex="-1">取消goroutine <a class="header-anchor" href="#取消goroutine" aria-label="Permalink to &quot;取消goroutine&quot;">​</a></h3><p>我们先来设想一个场景：打开外卖的订单页，地图上显示外卖小哥的位置，而且是每秒更新 1 次。app 端向后台发起 websocket 连接（现实中可能是轮询）请求后，后台启动一个协程，每隔 1 秒计算 1 次小哥的位置，并发送给端。如果用户退出此页面，则后台需要“取消”此过程，退出 goroutine，系统回收资源。</p><p>后端可能的实现如下：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func Perform() {</span></span>
<span class="line"><span>    for {</span></span>
<span class="line"><span>        calculatePos()</span></span>
<span class="line"><span>        sendResult()</span></span>
<span class="line"><span>        time.Sleep(time.Second)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 朴素想法，传递一个bool变量用来控制</span></span></code></pre></div><p>如果需要实现“取消”功能，并且在不了解 context 功能的前提下，可能会这样做：给函数增加一个指针型的 bool 变量，在 for 语句的开始处判断 bool 变量是发由 true 变为 false，如果改变，则退出循环。</p><p>上面给出的简单做法，可以实现想要的效果，没有问题，但是并不优雅，并且一旦协程数量多了之后，并且各种嵌套，就会很麻烦。优雅的做法，自然就要用到 context。</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func Perform(ctx context.Context) {</span></span>
<span class="line"><span>    for {</span></span>
<span class="line"><span>        calculatePos()</span></span>
<span class="line"><span>        sendResult()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        select {</span></span>
<span class="line"><span>        case &lt;-ctx.Done():</span></span>
<span class="line"><span>            // 被取消，直接返回</span></span>
<span class="line"><span>            return</span></span>
<span class="line"><span>        case &lt;-time.After(time.Second):</span></span>
<span class="line"><span>            // block 1 秒钟 </span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>主流程可能是这样的：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ctx, cancel := context.WithTimeout(context.Background(), time.Hour)</span></span>
<span class="line"><span>go Perform(ctx)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ……</span></span>
<span class="line"><span>// app 端返回页面，调用cancel 函数</span></span>
<span class="line"><span>cancel()</span></span></code></pre></div><p>注意一个细节，WithTimeOut 函数返回的 context 和 cancelFun 是分开的。context 本身并没有取消函数，这样做的原因是取消函数只能由外层函数调用，防止子节点 context 调用取消函数，从而严格控制信息的流向：由父节点 context 流向子节点 context。</p><h3 id="防止goroutine泄露" tabindex="-1">防止goroutine泄露 <a class="header-anchor" href="#防止goroutine泄露" aria-label="Permalink to &quot;防止goroutine泄露&quot;">​</a></h3><p>前面那个例子里，goroutine 还是会自己执行完，最后返回，只不过会多浪费一些系统资源。这里改编一个“如果不用 context 取消，goroutine 就会泄漏的例子”，来自参考资料：<code>【避免协程泄漏】</code>。</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func gen() &lt;-chan int {</span></span>
<span class="line"><span>	ch := make(chan int)</span></span>
<span class="line"><span>	go func() {</span></span>
<span class="line"><span>		var n int</span></span>
<span class="line"><span>		for {</span></span>
<span class="line"><span>			ch &lt;- n</span></span>
<span class="line"><span>			n++</span></span>
<span class="line"><span>			time.Sleep(time.Second)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}()</span></span>
<span class="line"><span>	return ch</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这是一个可以生成无限整数的协程，但如果我只需要它产生的前 5 个数，那么就会发生 goroutine 泄漏</span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	for n := range gen() {</span></span>
<span class="line"><span>		fmt.Println(n)</span></span>
<span class="line"><span>		if n == 5 {</span></span>
<span class="line"><span>			break</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	// ……</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>当n == 5的时候，直接break掉。那么gen函数的协程就会执行无限循环，永远不会停下来，发生了goroutine泄露。</p><p>用context改进这个栗子:</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func gen(ctx context.Context) &lt;-chan int {</span></span>
<span class="line"><span>	ch := make(chan int)</span></span>
<span class="line"><span>	go func() {</span></span>
<span class="line"><span>		var n int</span></span>
<span class="line"><span>		for {</span></span>
<span class="line"><span>			select {</span></span>
<span class="line"><span>			case &lt;-ctx.Done():</span></span>
<span class="line"><span>				return</span></span>
<span class="line"><span>			case ch &lt;- n:</span></span>
<span class="line"><span>				n++</span></span>
<span class="line"><span>				time.Sleep(time.Second)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}()</span></span>
<span class="line"><span>	return ch</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	ctx, cancel := context.WithCancel(context.Background())</span></span>
<span class="line"><span>	defer cancel() // 避免其他地方忘记 cancel，且重复调用不影响</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for n := range gen(ctx) {</span></span>
<span class="line"><span>		fmt.Println(n)</span></span>
<span class="line"><span>		if n == 5 {</span></span>
<span class="line"><span>			cancel()</span></span>
<span class="line"><span>			break</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	// ……</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>增加一个 context，在 break 前调用 cancel 函数，取消 goroutine。gen 函数在接收到取消信号后，直接退出，系统回收资源。</p><h2 id="context-value的查找过程是怎么样的" tabindex="-1">context.Value的查找过程是怎么样的? <a class="header-anchor" href="#context-value的查找过程是怎么样的" aria-label="Permalink to &quot;context.Value的查找过程是怎么样的?&quot;">​</a></h2><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type valueCtx struct {</span></span>
<span class="line"><span>	Context</span></span>
<span class="line"><span>	key, val interface{}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>它实现了两个方法:</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func (c *valueCtx) String() string {</span></span>
<span class="line"><span>	return fmt.Sprintf(&quot;%v.WithValue(%#v, %#v)&quot;, c.Context, c.key, c.val)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (c *valueCtx) Value(key interface{}) interface{} {</span></span>
<span class="line"><span>	if c.key == key {</span></span>
<span class="line"><span>		return c.val</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return c.Context.Value(key)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>由于它直接将Context作为匿名字段，因此尽管它只实现了两个方法，其他方法继承自父context。但它仍然是一个Context，这是Go语言的一个特点。</p><p>创建valueCtx的函数:</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func WithValue(parent Context, key, val interface{}) Context {</span></span>
<span class="line"><span>	if key == nil {</span></span>
<span class="line"><span>		panic(&quot;nil key&quot;)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if !reflect.TypeOf(key).Comparable() {</span></span>
<span class="line"><span>		panic(&quot;key is not comparable&quot;)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return &amp;valueCtx{parent, key, val}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>对key的要求是可比较的，因为之后需要通过key取出context中的值，可比较是必须的。</p><p>通过层层传递context，最终会形成一棵这样的树:</p><p><img src="https://s2.loli.net/2023/12/26/Jbr6VfsqSaH5pvO.png" alt="valueCtx"></p><p>和链表有点像，只是它的方向相反：Context 指向它的父节点，链表则指向下一个节点。通过 WithValue 函数，可以创建层层的 valueCtx，存储 goroutine 间可以共享的变量。</p><p>取值的过程，实际上是一个递归查找的过程：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func (c *valueCtx) Value(key interface{}) interface{} {</span></span>
<span class="line"><span>	if c.key == key {</span></span>
<span class="line"><span>		return c.val</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return c.Context.Value(key)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="context-value的缺点" tabindex="-1">context.Value的缺点 <a class="header-anchor" href="#context-value的缺点" aria-label="Permalink to &quot;context.Value的缺点&quot;">​</a></h3><p><code>WithValue</code> 创建 context 节点的过程实际上就是创建链表节点的过程。两个节点的 key 值是可以相等的，但它们是两个不同的 context 节点。查找的时候，会向上查找到最后一个挂载的 context 节点，也就是离得比较近的一个父节点 context。所以，整体上而言，用 <code>WithValue</code> 构造的其实是一个低效率的链表。</p><p>如果你接手过项目，肯定经历过这样的窘境：在一个处理过程中，有若干子函数、子协程。各种不同的地方会向 context 里塞入各种不同的 k-v 对，最后在某个地方使用。</p><p>你根本就不知道什么时候什么地方传了什么值？这些值会不会被“覆盖”（底层是两个不同的 context 节点，查找的时候，只会返回一个结果）？你肯定会崩溃的。</p><p>而这也是 <code>context.Value</code> 最受争议的地方。很多人建议尽量不要通过 context 传值。</p><h2 id="context如何被取消" tabindex="-1">context如何被取消？ <a class="header-anchor" href="#context如何被取消" aria-label="Permalink to &quot;context如何被取消？&quot;">​</a></h2><p><img src="https://s2.loli.net/2023/12/26/dIRPKkAaUQo9mYp.png" alt="classes"></p><h3 id="接口" tabindex="-1">接口 <a class="header-anchor" href="#接口" aria-label="Permalink to &quot;接口&quot;">​</a></h3><h4 id="context" tabindex="-1">context <a class="header-anchor" href="#context" aria-label="Permalink to &quot;context&quot;">​</a></h4><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type Context interface {</span></span>
<span class="line"><span>	// 当 context 被取消或者到了 deadline，返回一个被关闭的 channel</span></span>
<span class="line"><span>	Done() &lt;-chan struct{}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 在 channel Done 关闭后，返回 context 取消原因</span></span>
<span class="line"><span>	Err() error</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 返回 context 是否会被取消以及自动取消时间（即 deadline）</span></span>
<span class="line"><span>	Deadline() (deadline time.Time, ok bool)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 获取 key 对应的 value</span></span>
<span class="line"><span>	Value(key interface{}) interface{}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>Context</code> 是一个接口，定义了 4 个方法，它们都是<code>幂等</code>的。也就是说连续多次调用同一个方法，得到的结果都是相同的。</p><ol><li><code>Done()</code> 返回一个 channel，可以表示 context 被取消的信号：当这个 channel 被关闭时，说明 context 被取消了。注意，这是一个只读的channel。 我们又知道，读一个关闭的 channel 会读出相应类型的零值。并且源码里没有地方会向这个 channel 里面塞入值。换句话说，这是一个 <code>receive-only</code> 的 channel。因此在子协程里读这个 channel，除非被关闭，否则读不出来任何东西。也正是利用了这一点，子协程从 channel 里读出了值（零值）后，就可以做一些收尾工作，尽快退出。</li><li><code>Err()</code> 返回一个错误，表示 channel 被关闭的原因。例如是被取消，还是超时。</li><li><code>Deadline()</code> 返回 context 的截止时间，通过此时间，函数就可以决定是否进行接下来的操作，如果时间太短，就可以不往下做了，否则浪费系统资源。当然，也可以用这个 deadline 来设置一个 I/O 操作的超时时间。</li><li><code>Value()</code> 获取之前设置的 key 对应的 value。</li></ol><h4 id="canceler" tabindex="-1">canceler <a class="header-anchor" href="#canceler" aria-label="Permalink to &quot;canceler&quot;">​</a></h4><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type canceler interface {</span></span>
<span class="line"><span>	cancel(removeFromParent bool, err error)</span></span>
<span class="line"><span>	Done() &lt;-chan struct{}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>实现了上面定义的两个方法的 Context，就表明该 Context 是可取消的。源码中有两个类型实现了 canceler 接口：<code>*cancelCtx</code> 和 <code>*timerCtx</code>。注意是加了 <code>*</code> 号的，是这两个结构体的指针实现了 canceler 接口。</p><h3 id="context-接口设计成这个样子的原因" tabindex="-1">Context 接口设计成这个样子的原因： <a class="header-anchor" href="#context-接口设计成这个样子的原因" aria-label="Permalink to &quot;Context 接口设计成这个样子的原因：&quot;">​</a></h3><ul><li>“取消”操作应该是建议性，而非强制性 <ul><li>caller不应该去关心、干涉callee的情况，决定如何以及何时return是callee的责任。caller只需发送”取消“消息，callee根据收到的消息来做进一步的决策，因此接口并没有定义cancel方法</li></ul></li><li>取消”操作应该可传递 <ul><li>”取消“某个函数的时候，和它相关的其他函数也应该”取消“。因此，”Done()“方法返回一个只读的channel，所有相关函数监听此channel。一旦channel关闭，通过channel的”广播机制“，所有监听者都能接收到。</li></ul></li></ul><h3 id="结构体" tabindex="-1">结构体 <a class="header-anchor" href="#结构体" aria-label="Permalink to &quot;结构体&quot;">​</a></h3><h4 id="emptyctx" tabindex="-1">emptyCtx <a class="header-anchor" href="#emptyctx" aria-label="Permalink to &quot;emptyCtx&quot;">​</a></h4><p>源码定义了Context接口后，并且给出了一个实现：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type emptyCtx int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (*emptyCtx) Deadline() (deadline time.Time, ok bool) {</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (*emptyCtx) Done() &lt;-chan struct{} {</span></span>
<span class="line"><span>	return nil</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (*emptyCtx) Err() error {</span></span>
<span class="line"><span>	return nil</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (*emptyCtx) Value(key interface{}) interface{} {</span></span>
<span class="line"><span>	return nil</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>看这段源码，非常 happy。因为每个函数都实现的异常简单，要么是直接返回，要么是返回 nil。</p><p>所以，这实际上是一个空的 context，永远不会被 cancel，没有存储值，也没有 deadline。</p><p>它被包装成：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var (</span></span>
<span class="line"><span>	background = new(emptyCtx)</span></span>
<span class="line"><span>	todo       = new(emptyCtx)</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>func Background() Context {</span></span>
<span class="line"><span>	return background</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func TODO() Context {</span></span>
<span class="line"><span>	return todo</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>background 通常用在 main 函数中，作为所有 context 的根节点。</p><p>todo 通常用在并不知道传递什么 context的情形。例如，调用一个需要传递 context 参数的函数，你手头并没有其他 context 可以传递，这时就可以传递 todo。这常常发生在重构进行中，给一些函数添加了一个 Context 参数，但不知道要传什么，就用 todo “占个位子”，最终要换成其他 context。</p><h4 id="cancelctx" tabindex="-1">cancelCtx <a class="header-anchor" href="#cancelctx" aria-label="Permalink to &quot;cancelCtx&quot;">​</a></h4><p>再看一个重要的context：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type cancelCtx struct {</span></span>
<span class="line"><span>	Context</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 保护之后的字段</span></span>
<span class="line"><span>	mu       sync.Mutex</span></span>
<span class="line"><span>	done     chan struct{}</span></span>
<span class="line"><span>	children map[canceler]struct{}</span></span>
<span class="line"><span>	err      error</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这是一个可以取消的 Context，实现了 canceler 接口。它直接将接口 Context 作为它的一个匿名字段，这样，它就可以被看成一个 Context。</p><h5 id="done-方法的实现" tabindex="-1"><code>Done()</code> 方法的实现： <a class="header-anchor" href="#done-方法的实现" aria-label="Permalink to &quot;\`Done()\` 方法的实现：&quot;">​</a></h5><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func (c *cancelCtx) Done() &lt;-chan struct{} {</span></span>
<span class="line"><span>	c.mu.Lock()</span></span>
<span class="line"><span>	if c.done == nil {</span></span>
<span class="line"><span>		c.done = make(chan struct{})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	d := c.done</span></span>
<span class="line"><span>	c.mu.Unlock()</span></span>
<span class="line"><span>	return d</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>c.done()是”懒汉式“创建，只有调用了Done()方法的时候才会被创建。再次说明，函数返回的是一个只读的channel，而且没有地方向这个channel里面写数据。所以，直接调用读这个channel，协程会被block住。一般通过select来使用。一旦关闭，就会立即读出零值。</p><h5 id="cancel-方法实现" tabindex="-1">cancel()方法实现 <a class="header-anchor" href="#cancel-方法实现" aria-label="Permalink to &quot;cancel()方法实现&quot;">​</a></h5><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func (c *cancelCtx) cancel(removeFromParent bool, err error) {</span></span>
<span class="line"><span>    // 必须要传 err</span></span>
<span class="line"><span>	if err == nil {</span></span>
<span class="line"><span>		panic(&quot;context: internal error: missing cancel error&quot;)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	c.mu.Lock()</span></span>
<span class="line"><span>	if c.err != nil {</span></span>
<span class="line"><span>		c.mu.Unlock()</span></span>
<span class="line"><span>		return // 已经被其他协程取消</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	// 给 err 字段赋值</span></span>
<span class="line"><span>	c.err = err</span></span>
<span class="line"><span>	// 关闭 channel，通知其他协程</span></span>
<span class="line"><span>	if c.done == nil {</span></span>
<span class="line"><span>		c.done = closedchan</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		close(c.done)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	// 遍历它的所有子节点</span></span>
<span class="line"><span>	for child := range c.children {</span></span>
<span class="line"><span>	    // 递归地取消所有子节点</span></span>
<span class="line"><span>		child.cancel(false, err)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	// 将子节点置空</span></span>
<span class="line"><span>	c.children = nil</span></span>
<span class="line"><span>	c.mu.Unlock()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if removeFromParent {</span></span>
<span class="line"><span>	    // 从父节点中移除自己 </span></span>
<span class="line"><span>		removeChild(c.Context, c)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>总体来说，cancel()方法的功能就是关闭channel：c.done()；递归的取消它的所有子节点；从父节点删除自己。达到的效果是通过关闭channel，将取消信号传递给了它的所有子节点。goroutine接收到取消信号的方式就是select中的c.done()被选中。</p><p>那么如何创建一个可取消的Context方法呢？</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func WithCancel(parent Context) (ctx Context, cancel CancelFunc) {</span></span>
<span class="line"><span>	c := newCancelCtx(parent)</span></span>
<span class="line"><span>	propagateCancel(parent, &amp;c) // 将c加入到parent中</span></span>
<span class="line"><span>	return &amp;c, func() { c.cancel(true, Canceled) }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func newCancelCtx(parent Context) cancelCtx {</span></span>
<span class="line"><span>	return cancelCtx{Context: parent}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这是一个暴露给用户的方法，传入一个父 Context（这通常是一个 <code>background</code>，作为根节点），返回新建的 context，新 context 的 done channel 是新建的（前文讲过）。</p><p>当 WithCancel 函数返回的 CancelFunc 被调用或者是父节点的 done channel 被关闭（父节点的 CancelFunc 被调用），此 context（子节点） 的 done channel 也会被关闭。</p><p>注意传给 Cancel 方法的参数，前者是 true，也就是说取消的时候，需要将自己从父节点里删除。第二个参数则是一个固定的取消错误类型：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var Canceled = errors.New(&quot;context canceled&quot;)</span></span></code></pre></div><p>还注意到一点，调用子节点 cancel 方法的时候，传入的第一个参数 <code>removeFromParent</code> 是 false。</p><p>当 <code>removeFromParent</code> 为 true 时，会将当前节点的 context 从父节点 context 中删除：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func removeChild(parent Context, child canceler) {</span></span>
<span class="line"><span>	p, ok := parentCancelCtx(parent)</span></span>
<span class="line"><span>	if !ok {</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	p.mu.Lock()</span></span>
<span class="line"><span>	if p.children != nil {</span></span>
<span class="line"><span>		delete(p.children, child)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	p.mu.Unlock()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 最关键的一行：</span></span>
<span class="line"><span>delete(p.children, child)</span></span></code></pre></div><p><strong>两个问题需要回答：1. 什么时候会传 true？2. 为什么有时传 true，有时传 false？</strong></p><ol><li>什么时候传true呢？ <ul><li>什么时候会传true呢？<strong>答案是调用WithCancel()方法的时候</strong>，也就是新创建一个可取消的context节点的时候，返回的cancelFunc函数会传入true，这样做的结果是：当调用返回的cancelFunc()时，会将这个context从它的父节点里面除去，因为父节点可能有很多的子节点，你自己取消了，所以我要和你断绝关系，和其他人没有关系。</li></ul></li><li>什么时候传false？ <ul><li>cancel()方法，需要传递false，因为在递归的取消子节点的时候，会将c.children = nil，这就意味着c下面的所有子几点都和自己没有关系了，自然也没必要要求子节点从自身children集合中删除了；</li></ul></li></ol><p><strong>重点看 <code>propagateCancel()</code>：</strong></p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func propagateCancel(parent Context, child canceler) {</span></span>
<span class="line"><span>	// 父节点是个空节点</span></span>
<span class="line"><span>	if parent.Done() == nil {</span></span>
<span class="line"><span>		return // parent is never canceled</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	// 找到可以取消的父 context</span></span>
<span class="line"><span>	if p, ok := parentCancelCtx(parent); ok {</span></span>
<span class="line"><span>		p.mu.Lock()</span></span>
<span class="line"><span>		if p.err != nil {</span></span>
<span class="line"><span>			// 父节点已经被取消了，本节点（子节点）也要取消</span></span>
<span class="line"><span>			child.cancel(false, p.err)</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			// 父节点未取消</span></span>
<span class="line"><span>			if p.children == nil {</span></span>
<span class="line"><span>				p.children = make(map[canceler]struct{})</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			// &quot;挂到&quot;父节点上</span></span>
<span class="line"><span>			p.children[child] = struct{}{}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		p.mu.Unlock()</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		// 如果没有找到可取消的父 context。新启动一个协程监控父节点或子节点取消信号</span></span>
<span class="line"><span>		go func() {</span></span>
<span class="line"><span>			select {</span></span>
<span class="line"><span>			case &lt;-parent.Done():</span></span>
<span class="line"><span>				child.cancel(false, parent.Err())</span></span>
<span class="line"><span>			case &lt;-child.Done():</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这个方法的作用就是向上寻找可以“挂靠”的“可取消”的 context，并且“挂靠”上去。这样，调用上层 cancel 方法的时候，就可以层层传递，将那些挂靠的子 context 同时“取消”。</p><p>这里着重解释下为什么会有 else 描述的情况发生。<code>else</code> 是指当前节点 context 没有向上找到可以取消的父节点，那么就要再启动一个协程监控父节点或者子节点的取消动作。</p><p>这里就有疑问了，既然没找到可以取消的父节点，那 <code>case &lt;-parent.Done()</code> 这个 case 就永远不会发生，所以可以忽略这个 case；而 <code>case &lt;-child.Done()</code> 这个 case 又啥事不干。那这个 <code>else</code> 不就多余了吗？</p><p>其实不然。我们来看 <code>parentCancelCtx</code> 的代码：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func parentCancelCtx(parent Context) (*cancelCtx, bool) {</span></span>
<span class="line"><span>	for {</span></span>
<span class="line"><span>		switch c := parent.(type) {</span></span>
<span class="line"><span>		case *cancelCtx:</span></span>
<span class="line"><span>			return c, true</span></span>
<span class="line"><span>		case *timerCtx:</span></span>
<span class="line"><span>			return &amp;c.cancelCtx, true</span></span>
<span class="line"><span>		case *valueCtx:</span></span>
<span class="line"><span>			parent = c.Context</span></span>
<span class="line"><span>		default:</span></span>
<span class="line"><span>			return nil, false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>可以看出来在propagateCancel()函数中执行的这个parentCancelCtx()会寻找可以取消的父节点，如果不存在于这三种情况之一，就会走到default中，这个时候就会开启一个新的线程来监听。</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">case</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">parent.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Done</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	child.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cancel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, parent.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">case</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">child.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Done</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span></code></pre></div><p>第一个case表示如果parent结束，就会取消子节点</p><p>第二个表示子节点取消了，就退出这个select，但是如果没有这条语句，很可能父节点一直没有取消导致goroutine泄露。当然如果父节点取消了，就会重复让子节点取消，不过，影响不大。</p><h4 id="timerctx" tabindex="-1">timerCtx <a class="header-anchor" href="#timerctx" aria-label="Permalink to &quot;timerCtx&quot;">​</a></h4><p>timerCtx基于cancelCtx，只是多了一个time.Timer和一个deadline()。Timer会在deadline到来时，自动取消context。</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type timerCtx struct {</span></span>
<span class="line"><span>	cancelCtx</span></span>
<span class="line"><span>	timer *time.Timer // Under cancelCtx.mu.</span></span>
<span class="line"><span>	deadline time.Time</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>它首先是一个cancelCtx，所以它能取消。看下cancel()方法</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func (c *timerCtx) cancel(removeFromParent bool, err error) {</span></span>
<span class="line"><span>	// 直接调用 cancelCtx 的取消方法</span></span>
<span class="line"><span>	c.cancelCtx.cancel(false, err)</span></span>
<span class="line"><span>	if removeFromParent {</span></span>
<span class="line"><span>		// 从父节点中删除子节点</span></span>
<span class="line"><span>		removeChild(c.cancelCtx.Context, c)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	c.mu.Lock()</span></span>
<span class="line"><span>	if c.timer != nil {</span></span>
<span class="line"><span>		// 关掉定时器，这样，在deadline 到来时，不会再次取消</span></span>
<span class="line"><span>		c.timer.Stop()</span></span>
<span class="line"><span>		c.timer = nil</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	c.mu.Unlock()</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>创建timerCtx的方法:</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func WithTimeout(parent Context, timeout time.Duration) (Context, CancelFunc) {</span></span>
<span class="line"><span>	return WithDeadline(parent, time.Now().Add(timeout))</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>WithTimeout</code> 函数直接调用了 <code>WithDeadline</code>，传入的 deadline 是当前时间加上 timeout 的时间，也就是从现在开始再经过 timeout 时间就算超时。也就是说，<code>WithDeadline</code> 需要用的是绝对时间。重点来看它：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func WithDeadline(parent Context, deadline time.Time) (Context, CancelFunc) {</span></span>
<span class="line"><span>	if cur, ok := parent.Deadline(); ok &amp;&amp; cur.Before(deadline) {</span></span>
<span class="line"><span>		// 如果父节点 context 的 deadline 早于指定时间。直接构建一个可取消的 context。</span></span>
<span class="line"><span>		// 原因是一旦父节点超时，自动调用 cancel 函数，子节点也会随之取消。</span></span>
<span class="line"><span>		// 所以不用单独处理子节点的计时器时间到了之后，自动调用 cancel 函数</span></span>
<span class="line"><span>		return WithCancel(parent)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	// 构建 timerCtx</span></span>
<span class="line"><span>	c := &amp;timerCtx{</span></span>
<span class="line"><span>		cancelCtx: newCancelCtx(parent),</span></span>
<span class="line"><span>		deadline:  deadline,</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	// 挂靠到父节点上</span></span>
<span class="line"><span>	propagateCancel(parent, c)</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	// 计算当前距离 deadline 的时间</span></span>
<span class="line"><span>	d := time.Until(deadline)</span></span>
<span class="line"><span>	if d &lt;= 0 {</span></span>
<span class="line"><span>		// 直接取消</span></span>
<span class="line"><span>		c.cancel(true, DeadlineExceeded) // deadline has already passed</span></span>
<span class="line"><span>		return c, func() { c.cancel(true, Canceled) }</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	c.mu.Lock()</span></span>
<span class="line"><span>	defer c.mu.Unlock()</span></span>
<span class="line"><span>	if c.err == nil {</span></span>
<span class="line"><span>		// d 时间后，timer 会自动调用 cancel 函数。自动取消</span></span>
<span class="line"><span>		c.timer = time.AfterFunc(d, func() {</span></span>
<span class="line"><span>			c.cancel(true, DeadlineExceeded)</span></span>
<span class="line"><span>		})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return c, func() { c.cancel(true, Canceled) }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>其中比较核心的一句话就是</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>c.timer = time.AfterFunc(d, func() {</span></span>
<span class="line"><span>	c.cancel(true, DeadlineExceeded)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// 如果超时了，直接调用取消函数</span></span>
<span class="line"><span>var DeadlineExceeded error = deadlineExceededError{}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type deadlineExceededError struct{}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (deadlineExceededError) Error() string   { return &quot;context deadline exceeded&quot; }</span></span></code></pre></div>`,130),l=[t];function c(i,o,r,d,h,u){return a(),s("div",null,l)}const k=n(e,[["render",c]]);export{x as __pageData,k as default};
