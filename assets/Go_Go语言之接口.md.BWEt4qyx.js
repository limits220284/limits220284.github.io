import{j as s,b as n,c as a,aa as p}from"./chunks/framework.Bxf40uRC.js";const u=JSON.parse('{"title":"Go语言中的接口","description":"","frontmatter":{},"headers":[],"relativePath":"Go/Go语言之接口.md","filePath":"Go/Go语言之接口.md","lastUpdated":1711094318000}'),i={name:"Go/Go语言之接口.md"},l=p(`<h1 id="go语言中的接口" tabindex="-1">Go语言中的接口 <a class="header-anchor" href="#go语言中的接口" aria-label="Permalink to &quot;Go语言中的接口&quot;">​</a></h1><h2 id="鸭子类型" tabindex="-1">鸭子类型 <a class="header-anchor" href="#鸭子类型" aria-label="Permalink to &quot;鸭子类型&quot;">​</a></h2><p>如果某个东西长得像鸭子，像鸭子一样游泳，像鸭子一样嘎嘎叫，那它就可以被看成是一只鸭子。</p><p><code>Duck Typing</code>，鸭子类型，是动态编程语言的一种对象推断策略，它更关注对象能如何被使用，而不是对象的类型本身。Go 语言作为一门静态语言，它通过通过接口的方式完美支持鸭子类型。</p><p>例如，在动态语言 python 中，定义一个这样的函数：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hello_world</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(coder):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    coder.say_hello()</span></span></code></pre></div><p>当调用此函数的时候，可以传入任意类型，只要它实现了 <code>say_hello()</code> 函数就可以。如果没有实现，运行过程中会出现错误。</p><p>而在静态语言如 Java, C++ 中，必须要显示地声明实现了某个接口，之后，才能用在任何需要这个接口的地方。如果你在程序中调用 <code>hello_world</code> 函数，却传入了一个根本就没有实现 <code>say_hello()</code> 的类型，那在编译阶段就不会通过。这也是静态语言比动态语言更安全的原因。</p><p>动态语言和静态语言的差别在此就有所体现。静态语言在编译期间就能发现类型不匹配的错误，不像动态语言，必须要运行到那一行代码才会报错。插一句，这也是我不喜欢用 <code>python</code> 的一个原因。当然，静态语言要求程序员在编码阶段就要按照规定来编写程序，为每个变量规定数据类型，这在某种程度上，加大了工作量，也加长了代码量。动态语言则没有这些要求，可以让人更专注在业务上，代码也更短，写起来更快，这一点，写 python 的同学比较清楚。</p><p>Go 语言作为一门现代静态语言，是有后发优势的。它引入了动态语言的便利，同时又会进行静态语言的类型检查，写起来是非常 Happy 的。Go 采用了折中的做法：不要求类型显示地声明实现了某个接口，只要实现了相关的方法即可，编译器就能检测到。</p><p>来看个例子：</p><p>先定义一个接口，和使用此接口作为参数的函数：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type IGreeting interface {</span></span>
<span class="line"><span>	sayHello()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func sayHello(i IGreeting) {</span></span>
<span class="line"><span>	i.sayHello()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Go struct {}</span></span>
<span class="line"><span>func (g Go) sayHello() {</span></span>
<span class="line"><span>	fmt.Println(&quot;Hi, I am GO!&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type PHP struct {}</span></span>
<span class="line"><span>func (p PHP) sayHello() {</span></span>
<span class="line"><span>	fmt.Println(&quot;Hi, I am PHP!&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	golang := Go{}</span></span>
<span class="line"><span>	php := PHP{}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	sayHello(golang)</span></span>
<span class="line"><span>	sayHello(php)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 输出</span></span>
<span class="line"><span>Hi, I am GO!</span></span>
<span class="line"><span>Hi, I am PHP!</span></span></code></pre></div><p>在 main 函数中，调用调用 sayHello() 函数时，传入了 <code>golang, php</code> 对象，它们并没有显式地声明实现了 IGreeting 类型，只是实现了接口所规定的 sayHello() 函数。实际上，编译器在调用 sayHello() 函数时，会隐式地将 <code>golang, php</code> 对象转换成 IGreeting 类型，这也是静态语言的类型检查功能。</p><p>顺带再提一下动态语言的特点：</p><blockquote><p>变量绑定的类型是不确定的，在运行期间才能确定 函数和方法可以接收任何类型的参数，且调用时不检查参数类型 不需要实现接口</p></blockquote><p>总结一下，鸭子类型是一种动态语言的风格，在这种风格中，一个对象有效的语义，不是由继承自特定的类或实现特定的接口，而是由它&quot;当前方法和属性的集合&quot;决定。Go 作为一种静态语言，通过接口实现了 <code>鸭子类型</code>，实际上是 Go 的编译器在其中作了隐匿的转换工作。</p><h2 id="值接收者和指针接收者的区别" tabindex="-1">值接收者和指针接收者的区别 <a class="header-anchor" href="#值接收者和指针接收者的区别" aria-label="Permalink to &quot;值接收者和指针接收者的区别&quot;">​</a></h2><p>方法能给用户自定义的类型添加新的行为。它和函数的区别在于方法有一个接收者，给一个函数添加一个接收者，那么它就变成了方法。接收者可以是<code>值接收者</code>，也可以是<code>指针接收者</code>。</p><p>在调用方法的时候，值类型既可以调用<code>值接收者</code>的方法，也可以调用<code>指针接收者</code>的方法；指针类型既可以调用<code>指针接收者</code>的方法，也可以调用<code>值接收者</code>的方法。</p><p>也就是说，不管方法的接收者是什么类型，该类型的值和指针都可以调用，不必严格符合接收者的类型。？？？？</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>package main</span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Person struct {</span></span>
<span class="line"><span>	age int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (p Person) howOld() int {</span></span>
<span class="line"><span>	return p.age</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (p *Person) growUp() {</span></span>
<span class="line"><span>	p.age += 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	// qcrao 是值类型</span></span>
<span class="line"><span>	qcrao := Person{age: 18}</span></span>
<span class="line"><span>	// 值类型 调用接收者也是值类型的方法</span></span>
<span class="line"><span>	fmt.Println(qcrao.howOld())</span></span>
<span class="line"><span>	// 值类型 调用接收者是指针类型的方法</span></span>
<span class="line"><span>	qcrao.growUp()</span></span>
<span class="line"><span>	fmt.Println(qcrao.howOld())</span></span>
<span class="line"><span>	// ----------------------</span></span>
<span class="line"><span>	// stefno 是指针类型</span></span>
<span class="line"><span>	stefno := &amp;Person{age: 100}</span></span>
<span class="line"><span>	// 指针类型 调用接收者是值类型的方法</span></span>
<span class="line"><span>	fmt.Println(stefno.howOld())</span></span>
<span class="line"><span>	// 指针类型 调用接收者也是指针类型的方法</span></span>
<span class="line"><span>	stefno.growUp()</span></span>
<span class="line"><span>	fmt.Println(stefno.howOld())</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 输出</span></span>
<span class="line"><span>18</span></span>
<span class="line"><span>19</span></span>
<span class="line"><span>100</span></span>
<span class="line"><span>101</span></span></code></pre></div><p>调用了 <code>growUp</code> 函数后，不管调用者是值类型还是指针类型，它的 <code>Age</code> 值都改变了。</p><p>实际上，当类型和方法的接收者类型不同时，其实是编译器在背后做了一些工作，用一个表格来呈现：</p><table><thead><tr><th>-</th><th>值接收者</th><th>指针接收者</th></tr></thead><tbody><tr><td>值类型调用者</td><td>方法会使用调用者的一个副本，类似于“传值”</td><td>使用值的引用来调用方法，上例中，<code>qcrao.growUp()</code> 实际上是 <code>(&amp;qcrao).growUp()</code></td></tr><tr><td>指针类型调用者</td><td>指针被解引用为值，上例中，<code>stefno.howOld()</code> 实际上是 <code>(*stefno).howOld()</code></td><td>实际上也是“传值”，方法里的操作会影响到调用者，类似于指针传参，拷贝了一份指针</td></tr></tbody></table><p>前面说过，不管接收者类型是值类型还是指针类型，都可以通过值类型或指针类型调用，这里面实际上通过语法糖起作用的。</p><p><strong>先说结论：实现了接收者是值类型的方法，相当于自动实现了接收者是指针类型的方法；而实现了接收者是指针类型的方法，不会自动生成对应接收者是值类型的方法</strong>；</p><h3 id="举个栗子" tabindex="-1">举个栗子 <a class="header-anchor" href="#举个栗子" aria-label="Permalink to &quot;举个栗子&quot;">​</a></h3><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type coder interface {</span></span>
<span class="line"><span>	code()</span></span>
<span class="line"><span>	debug()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Gopher struct {</span></span>
<span class="line"><span>	language string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (p Gopher) code() {</span></span>
<span class="line"><span>	fmt.Printf(&quot;I am coding %s language\\n&quot;, p.language)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (p *Gopher) debug() {</span></span>
<span class="line"><span>	fmt.Printf(&quot;I am debuging %s language\\n&quot;, p.language)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 可以全部通过</span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	var c coder = &amp;Gopher{&quot;Go&quot;}</span></span>
<span class="line"><span>	c.code()</span></span>
<span class="line"><span>	c.debug()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 无法debug</span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	var c coder = Gopher{&quot;Go&quot;}</span></span>
<span class="line"><span>	c.code()</span></span>
<span class="line"><span>	c.debug()</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>造成这种不一致是有原因的</p><ol><li>对于一个接口，在赋值的时候，编译器会自动做隐式类型转换</li><li>此接口无非包括值接收者或者是指针接收者，如果将指针对象传进去，对于值接收者，可以做解引用，不会影响到原来的真正对象值；但是如果将值对象进行隐式转换，对于值接收者当然没有问题，但是对于指针接收者我却无法获得其地址，所以无法影响到原本的对象。</li><li>其次从函数功能上考虑，如果是值接收者，我完全可以自动生成一个指针接收者，因为都可以做到不影响原来的值；但是如果只实现了指针接收者的方法，无法自动生成一个值类型，因为可能要对原来的对象进行更改操作。</li><li><strong>结构体指针变量能够隐式地获取指向的结构体的，但是结构体却无法获取其对应的指针，结构体指针变量一般都是先找到对应的结构体，然后再执行对应的方法。这种性质归类于，Go语言在传递参数的时候都是传值的。</strong></li></ol><h3 id="两者分别在什么时候使用" tabindex="-1">两者分别在什么时候使用？ <a class="header-anchor" href="#两者分别在什么时候使用" aria-label="Permalink to &quot;两者分别在什么时候使用？&quot;">​</a></h3><ul><li>当我不想修改原来的值，就用值接收者</li><li>当我想修改原来的值，就用指针接收者</li></ul><h2 id="iface和eface的区别是什么" tabindex="-1">iface和eface的区别是什么？ <a class="header-anchor" href="#iface和eface的区别是什么" aria-label="Permalink to &quot;iface和eface的区别是什么？&quot;">​</a></h2><h4 id="iface" tabindex="-1">iface <a class="header-anchor" href="#iface" aria-label="Permalink to &quot;iface&quot;">​</a></h4><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type iface struct {</span></span>
<span class="line"><span>	tab  *itab</span></span>
<span class="line"><span>	data unsafe.Pointer</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type itab struct {</span></span>
<span class="line"><span>	inter  *interfacetype</span></span>
<span class="line"><span>	_type  *_type</span></span>
<span class="line"><span>	link   *itab</span></span>
<span class="line"><span>	hash   uint32 // copy of _type.hash. Used for type switches.</span></span>
<span class="line"><span>	bad    bool   // type does not implement interface</span></span>
<span class="line"><span>	inhash bool   // has this itab been added to hash?</span></span>
<span class="line"><span>	unused [2]byte</span></span>
<span class="line"><span>	fun    [1]uintptr // variable sized</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>iface内部维护两个指针，一个指向堆内存区域，表示实际的数据，另一个指向<strong>itab</strong>类型:</p><ol><li>inter描述了接口的类型</li><li>_type字段描述了实体的类型</li><li><code>fun</code> 字段放置和接口方法对应的具体数据类型的<strong>方法地址</strong>，实现接口调用方法的动态分派，一般在每次给接口赋值发生转换时会更新此表，或者直接拿缓存的 itab。</li></ol><p><strong>另外，你可能会觉得奇怪，为什么 <code>fun</code> 数组的大小为 1，要是接口定义了多个方法可怎么办？</strong></p><p>answer: 实际上，这里存储的是第一个方法的函数指针，如果有更多的方法，在它之后的内存空间里继续存储。从汇编角度来看，通过增加地址就能获取到这些函数指针，没什么影响。<strong>顺便提一句，这些方法是按照函数名称的字典序进行排列的</strong>。</p><p>再看一下 <code>interfacetype</code> 类型，它描述的是接口的类型：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type interfacetype struct {</span></span>
<span class="line"><span>	typ     _type</span></span>
<span class="line"><span>	pkgpath name</span></span>
<span class="line"><span>	mhdr    []imethod</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol><li>_type实际上是Go语言中描述各种数据类型的结构体</li><li>mhdr，表示接口所定义的函数列表</li><li>pkgpath 记录定义了接口的包名</li></ol><p><img src="https://s2.loli.net/2023/12/26/y1hrRmXxCULQszq.png" alt="iface 结构体全景"></p><h4 id="eface" tabindex="-1">eface <a class="header-anchor" href="#eface" aria-label="Permalink to &quot;eface&quot;">​</a></h4><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type eface struct {</span></span>
<span class="line"><span>    _type *_type</span></span>
<span class="line"><span>    data  unsafe.Pointer</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>只维护了指向数据的指针和数据类型</p><h5 id="举个栗子-1" tabindex="-1">举个栗子 <a class="header-anchor" href="#举个栗子-1" aria-label="Permalink to &quot;举个栗子&quot;">​</a></h5><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	x := 200</span></span>
<span class="line"><span>	var any interface{} = x</span></span>
<span class="line"><span>	fmt.Println(any)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	g := Gopher{&quot;Go&quot;}</span></span>
<span class="line"><span>	var c coder = g</span></span>
<span class="line"><span>	fmt.Println(c)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type coder interface {</span></span>
<span class="line"><span>	code()</span></span>
<span class="line"><span>	debug()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Gopher struct {</span></span>
<span class="line"><span>	language string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (p Gopher) code() {</span></span>
<span class="line"><span>	fmt.Printf(&quot;I am coding %s language\\n&quot;, p.language)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (p Gopher) debug() {</span></span>
<span class="line"><span>	fmt.Printf(&quot;I am debuging %s language\\n&quot;, p.language)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 输出</span></span>
<span class="line"><span>200</span></span>
<span class="line"><span>{Go}</span></span></code></pre></div><p>前者使用eface，后者使用iface，主要区别在于接口是否真正的存在具体的函数。</p><h2 id="接口的动态类型和动态值" tabindex="-1">接口的动态类型和动态值 <a class="header-anchor" href="#接口的动态类型和动态值" aria-label="Permalink to &quot;接口的动态类型和动态值&quot;">​</a></h2><p>从源码里可以看到：<code>iface</code>包含两个字段：<code>tab</code> 是接口表指针，指向类型信息；<code>data</code> 是数据指针，则指向具体的数据。它们分别被称为<code>动态类型</code>和<code>动态值</code>。而接口值包括<code>动态类型</code>和<code>动态值</code>。</p><h3 id="引申1-接口类型和nil作比较" tabindex="-1">引申1 接口类型和nil作比较 <a class="header-anchor" href="#引申1-接口类型和nil作比较" aria-label="Permalink to &quot;引申1 接口类型和nil作比较&quot;">​</a></h3><p>接口值得零值指的是<strong>动态类型</strong>和<strong>动态值</strong>都是nil</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Coder interface {</span></span>
<span class="line"><span>	code()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Gopher struct {</span></span>
<span class="line"><span>	name string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (g Gopher) code() {</span></span>
<span class="line"><span>	fmt.Printf(&quot;%s is coding\\n&quot;, g.name)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	var c Coder</span></span>
<span class="line"><span>	fmt.Println(c == nil)</span></span>
<span class="line"><span>	fmt.Printf(&quot;c: %T, %v\\n&quot;, c, c)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var g *Gopher</span></span>
<span class="line"><span>	fmt.Println(g == nil)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	c = g</span></span>
<span class="line"><span>	fmt.Println(c == nil)</span></span>
<span class="line"><span>	fmt.Printf(&quot;c: %T, %v\\n&quot;, c, c)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 输出</span></span>
<span class="line"><span>true</span></span>
<span class="line"><span>c: &lt;nil&gt;, &lt;nil&gt;</span></span>
<span class="line"><span>true</span></span>
<span class="line"><span>false</span></span>
<span class="line"><span>c: *main.Gopher, &lt;nil&gt;</span></span></code></pre></div><p>最后一个为false，原因是将g赋值给c，那么c就具有了动态类型，所以不是nil了</p><h3 id="如何打印出接口的动态类型和值" tabindex="-1">如何打印出接口的动态类型和值？ <a class="header-anchor" href="#如何打印出接口的动态类型和值" aria-label="Permalink to &quot;如何打印出接口的动态类型和值？&quot;">​</a></h3><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;unsafe&quot;</span></span>
<span class="line"><span>	&quot;fmt&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type iface struct {</span></span>
<span class="line"><span>	itab, data uintptr</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	var a interface{} = nil</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var b interface{} = (*int)(nil)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	x := 5</span></span>
<span class="line"><span>	var c interface{} = (*int)(&amp;x)</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	ia := *(*iface)(unsafe.Pointer(&amp;a))</span></span>
<span class="line"><span>	ib := *(*iface)(unsafe.Pointer(&amp;b))</span></span>
<span class="line"><span>	ic := *(*iface)(unsafe.Pointer(&amp;c))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	fmt.Println(ia, ib, ic)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	fmt.Println(*(*int)(unsafe.Pointer(ic.data)))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 输出</span></span>
<span class="line"><span>{0 0} {17426912 0} {17426912 842350714568}</span></span>
<span class="line"><span>5</span></span></code></pre></div><p>代码里直接定义了一个 <code>iface</code> 结构体，用两个指针来描述 <code>itab</code> 和 <code>data</code>，之后将 a, b, c 在内存中的内容强制解释成我们自定义的 <code>iface</code>。最后就可以打印出动态类型和动态值的地址。</p><p>a 的动态类型和动态值的地址均为 0，也就是 nil；b 的动态类型和 c 的动态类型一致，都是 <code>*int</code>；最后，c 的动态值为 5。</p><h2 id="编译器自动检测类型是否实现接口" tabindex="-1">编译器自动检测类型是否实现接口 <a class="header-anchor" href="#编译器自动检测类型是否实现接口" aria-label="Permalink to &quot;编译器自动检测类型是否实现接口&quot;">​</a></h2><p>经常看到一些开源库里会有一些类似下面这种奇怪的用法：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var _ io.Writer = (*myWriter)(nil)</span></span></code></pre></div><p>这时候会有点懵，不知道作者想要干什么，实际上这就是此问题的答案。编译器会由此检查 <code>*myWriter</code> 类型是否实现了 <code>io.Writer</code> 接口。io.Writer本身是一个接口，将一个类型赋值给某个接口，编译器会检查该类型是否完全实现该接口的所有函数.</p><h2 id="接口的构造过程是什么样的" tabindex="-1">接口的构造过程是什么样的？ <a class="header-anchor" href="#接口的构造过程是什么样的" aria-label="Permalink to &quot;接口的构造过程是什么样的？&quot;">​</a></h2><p>// TODO</p><p>不会，再说吧，太底层了。。。</p><h2 id="类型转换和断言的区别" tabindex="-1">类型转换和断言的区别？ <a class="header-anchor" href="#类型转换和断言的区别" aria-label="Permalink to &quot;类型转换和断言的区别？&quot;">​</a></h2><p>我们知道，Go语言中不允许隐式类型转换，也就是<code>=</code>两边，不允许出现类型不相同的变量。</p><p><code>类型转换</code>，<code>类型断言</code>本质都是把一个类型转换成另一个类型。不同之处在于，<strong>类型断言是对接口变量进行的操作！</strong></p><h3 id="类型转换" tabindex="-1">类型转换 <a class="header-anchor" href="#类型转换" aria-label="Permalink to &quot;类型转换&quot;">​</a></h3><p>对于<code>类型转换</code>而言，转换前后的两个类型要相互兼容才行。类型转换的语法为：</p><p>&lt;结果类型&gt; := &lt;目标类型&gt; ( &lt;表达式&gt; )</p><h3 id="类型断言" tabindex="-1">类型断言 <a class="header-anchor" href="#类型断言" aria-label="Permalink to &quot;类型断言&quot;">​</a></h3><p>因为空接口没有实现任何函数，那么Go语言中的所有数据类型都相当于实现了空接口。当一个函数的形参是 <strong>interface{}</strong>，那么在函数中，需要对形参进行断言，从而得到它的真实类型。</p><p>断言的语法为:</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">目标类型的值</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">布尔参数</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">表达式</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.( 目标类型 ) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 安全类型断言 </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">目标类型的值</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">表达式</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.( 目标类型 )　　</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//非安全类型断言</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fmt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Student</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	Name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	Age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Student</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	s </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i.(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Student</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// panic: interface conversion: interface {} is *main.Student, not main.Student</span></span></code></pre></div><p>直接 <code>panic</code> 了，这是因为 <code>i</code> 是 <code>*Student</code> 类型，并非 <code>Student</code> 类型，断言失败。这里直接发生了 <code>panic</code>，线上代码可能并不适合这样做，可以采用“安全断言”的语法：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>	var i interface{} = new(Student)</span></span>
<span class="line"><span>	s, ok := i.(Student)</span></span>
<span class="line"><span>	if ok {</span></span>
<span class="line"><span>		fmt.Println(s)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这样就算断言失败，也不会触发panic</p><h2 id="接口转换的原理" tabindex="-1">接口转换的原理 <a class="header-anchor" href="#接口转换的原理" aria-label="Permalink to &quot;接口转换的原理&quot;">​</a></h2><ol><li>当判定一种类型是否满足某个接口时，Go 使用类型的方法集和接口所需要的方法集进行匹配，如果类型的方法集完全包含接口的方法集，则可认为该类型实现了该接口。</li><li>例如某类型有 <code>m</code> 个方法，某接口有 <code>n</code> 个方法，则很容易知道这种判定的时间复杂度为 <code>O(mn)</code>，Go 会对方法集的函数按照函数名的字典序进行排序，所以实际的时间复杂度为 <code>O(m+n)</code>。</li></ol><p>// TODO 接口如何进行转换？</p><h2 id="如何用接口是实现多态" tabindex="-1">如何用接口是实现多态？ <a class="header-anchor" href="#如何用接口是实现多态" aria-label="Permalink to &quot;如何用接口是实现多态？&quot;">​</a></h2><p>什么是多态?</p><ol><li>一种类型具有多种类型的能力</li><li>允许不同的对象对同一消息做出灵活的反应</li><li>以一种通用的方式对待使用的对象</li><li>非动态语言必须通过继承和接口的方式来实现</li></ol><h3 id="举个栗子-2" tabindex="-1">举个栗子 <a class="header-anchor" href="#举个栗子-2" aria-label="Permalink to &quot;举个栗子&quot;">​</a></h3><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func whatJob(p Person) {</span></span>
<span class="line"><span>	p.job()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func growUp(p Person) {</span></span>
<span class="line"><span>	p.growUp()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Person interface {</span></span>
<span class="line"><span>	job()</span></span>
<span class="line"><span>	growUp()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Student struct {</span></span>
<span class="line"><span>	age int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (p Student) job() {</span></span>
<span class="line"><span>	fmt.Println(&quot;I am a student.&quot;)</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (p *Student) growUp() {</span></span>
<span class="line"><span>	p.age += 1</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Programmer struct {</span></span>
<span class="line"><span>	age int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (p Programmer) job() {</span></span>
<span class="line"><span>	fmt.Println(&quot;I am a programmer.&quot;)</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (p Programmer) growUp() {</span></span>
<span class="line"><span>	// 程序员老得太快 ^_^</span></span>
<span class="line"><span>	p.age += 10</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	qcrao := Student{age: 18}</span></span>
<span class="line"><span>	whatJob(&amp;qcrao)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	growUp(&amp;qcrao)</span></span>
<span class="line"><span>	fmt.Println(qcrao)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	stefno := Programmer{age: 100}</span></span>
<span class="line"><span>	whatJob(stefno)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	growUp(stefno)</span></span>
<span class="line"><span>	fmt.Println(stefno)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Student和Programmer都实现了Person接口，因为它俩实现了Person接口的所有函数，再将它们分别传入whatJob 和 growUp函数中，各自调用接口函数，实际执行的时候看最终传入的是什么类型，调用的就是实体类型实现的函数，所以不同对象对同一消息就有不同的表现了，这就叫做<strong>多态</strong>.</p><p>更深入一点来说的话，在函数 <code>whatJob()</code> 或者 <code>growUp()</code> 内部，接口 <code>person</code> 绑定了实体类型 <code>*Student</code> 或者 <code>Programmer</code>。根据前面分析的 <code>iface</code> 源码，这里会直接调用 <code>fun</code> 里保存的函数，类似于： <code>s.tab-&gt;fun[0]</code>，而因为 <code>fun</code> 数组里保存的是实体类型实现的函数，所以当函数传入不同的实体类型时，调用的实际上是不同的函数实现，从而实现多态。</p><h2 id="go接口与c-接口有何异同" tabindex="-1">Go接口与C++接口有何异同？ <a class="header-anchor" href="#go接口与c-接口有何异同" aria-label="Permalink to &quot;Go接口与C++接口有何异同？&quot;">​</a></h2><p>接口定义了一种规范，描述了类的行为和功能，而不做具体实现。</p><p>C++ 的接口是使用抽象类来实现的，如果类中至少有一个函数被声明为纯虚函数，则这个类就是抽象类。纯虚函数是通过在声明中使用 “= 0” 来指定的。例如：</p><div class="language-C++ vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C++</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Shape</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   public:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 纯虚函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      virtual</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> double</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getArea</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   private:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      string name;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>设计抽象类的目的，是为了给其他类提供一个可以继承的适当的基类。抽象类不能被用于实例化对象，它只能作为接口使用。</p><p>派生类需要明确地声明它继承自基类，并且需要实现基类中所有的纯虚函数。</p><p>C++ 定义接口的方式称为“侵入式”，而 Go 采用的是 “非侵入式”，不需要显式声明，只需要实现接口定义的函数，编译器自动会识别。</p><p>C++ 和 Go 在定义接口方式上的不同，也导致了底层实现上的不同。C++ 通过虚函数表来实现基类调用派生类的函数；而 Go 通过 <code>itab</code> 中的 <code>fun</code> 字段来实现接口变量调用实体类型的函数。C++ 中的虚函数表是在编译期生成的；而 Go 的 <code>itab</code> 中的 <code>fun</code> 字段是在运行期间动态生成的。原因在于，Go 中实体类型可能会无意中实现 N 多接口，很多接口并不是本来需要的，所以不能为类型实现的所有接口都生成一个 <code>itab</code>， 这也是“非侵入式”带来的影响；这在 C++ 中是不存在的，因为派生需要显示声明它继承自哪个基类。</p><p>总结:</p><ol><li>C++中抽象类中可以包含属性，Go不能</li><li>C++定义接口的方式是侵入式，Go是非侵入式，区别在于是否需要显示声明</li><li>C++的虚函数是在编译期间生成的，Go的<strong>itab</strong>中的<strong>fun</strong> 字段是在运行期间动态生成的</li></ol>`,100),e=[l];function t(c,o,h,d,r,g){return n(),a("div",null,e)}const f=s(i,[["render",t]]);export{u as __pageData,f as default};
