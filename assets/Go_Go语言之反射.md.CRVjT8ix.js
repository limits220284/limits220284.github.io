import{j as a,b as n,c as s,aa as p}from"./chunks/framework.BrJMe4p_.js";const f=JSON.parse('{"title":"Go语言之反射","description":"","frontmatter":{},"headers":[],"relativePath":"Go/Go语言之反射.md","filePath":"Go/Go语言之反射.md","lastUpdated":null}'),e={name:"Go/Go语言之反射.md"},l=p(`<h1 id="go语言之反射" tabindex="-1">Go语言之反射 <a class="header-anchor" href="#go语言之反射" aria-label="Permalink to &quot;Go语言之反射&quot;">​</a></h1><h2 id="_1、什么是反射" tabindex="-1">1、什么是反射？ <a class="header-anchor" href="#_1、什么是反射" aria-label="Permalink to &quot;1、什么是反射？&quot;">​</a></h2><h3 id="反射的定义" tabindex="-1">反射的定义 <a class="header-anchor" href="#反射的定义" aria-label="Permalink to &quot;反射的定义&quot;">​</a></h3><p>在计算机科学中，反射指的是计算机程序在运行时(Runtime) 可以访问，检测和修改它本身状态或行为的一种能力。用比喻来说，反射就是程序在运行的时候能够&quot;观察&quot;并且修改自己的行为。</p><h3 id="什么叫做访问、检测和修改它本身的状态和行为" tabindex="-1">什么叫做访问、检测和修改它本身的状态和行为？ <a class="header-anchor" href="#什么叫做访问、检测和修改它本身的状态和行为" aria-label="Permalink to &quot;什么叫做访问、检测和修改它本身的状态和行为？&quot;">​</a></h3><p>实际上它的本质是程序在运行期间探知对象的类型信息和内存结构。不用反射能行吗？也是可以的，需要使用汇编语言，直接和内层打交道，可以获取任何信息。但是当迁移到高级语言上来的时候，就不行了！只能通过反射达到此项功能。</p><p>在Go语言中，<strong>提供了一种机制在运行时更新变量和检查它们的值、调用它们的方法，但是在编译时并不知道这些变量的具体类型，这称为反射机制</strong></p><h2 id="_2、什么情况下需要使用反射" tabindex="-1">2、什么情况下需要使用反射？ <a class="header-anchor" href="#_2、什么情况下需要使用反射" aria-label="Permalink to &quot;2、什么情况下需要使用反射？&quot;">​</a></h2><ol><li>不能明确接口调用哪个函数，需要根据传入的参数在运行时决定。</li><li>不能明确传入函数的参数类型，需要在运行时处理任意对象。</li></ol><h3 id="不推荐使用反射的理由有哪些" tabindex="-1">不推荐使用反射的理由有哪些？ <a class="header-anchor" href="#不推荐使用反射的理由有哪些" aria-label="Permalink to &quot;不推荐使用反射的理由有哪些？&quot;">​</a></h3><ol><li>与反射有关的代码通常是难以阅读的。在软件工程中，代码可读性也是一个非常重要的指标。</li><li>Go语言作为一门静态语言，编码过程中，编译器提前能够发现一些类型错误，但是对于反射代码是无能为力的。所以包含反射的代码，很可能会运行很久，才会出错，这时候经常是直接panic，可能造成比较严重的后果</li><li>反射对于性能影响还是比较大的，比正常的代码速度慢到一到两个数量级。所以，对于一个项目中处于运行效率关键位置的代码，尽量避免使用反射特性。</li></ol><h2 id="_3、go语言如何实现反射" tabindex="-1">3、Go语言如何实现反射？ <a class="header-anchor" href="#_3、go语言如何实现反射" aria-label="Permalink to &quot;3、Go语言如何实现反射？&quot;">​</a></h2><p>interface{}，它是Go语言实现抽象的一个非常强大的工具。当向接口赋予一个实体类型的时候，接口会存储实体的类型信息，反射就是通过接口的类型信息实现的，反射建立在类型的基础上。</p><p>Go语言在reflect包里定义了各种类型，实现了反射的各种函数，通过它们可以在运行时检测类型的信息、改变类型的值。</p><h3 id="types和interface" tabindex="-1">types和interface <a class="header-anchor" href="#types和interface" aria-label="Permalink to &quot;types和interface&quot;">​</a></h3><p>Go语言中，每个变量都有一个静态类型，在编译阶段就确定了的，比如int，float64，[]int等等。<strong>注意，这个类型是声明时候的类型，不是底层数据结构。</strong></p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type iface struct {</span></span>
<span class="line"><span>	tab  *itab</span></span>
<span class="line"><span>	data unsafe.Pointer</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type itab struct {</span></span>
<span class="line"><span>	inter  *interfacetype</span></span>
<span class="line"><span>	_type  *_type</span></span>
<span class="line"><span>	link   *itab</span></span>
<span class="line"><span>	hash   uint32</span></span>
<span class="line"><span>	bad    bool</span></span>
<span class="line"><span>	inhash bool</span></span>
<span class="line"><span>	unused [2]byte</span></span>
<span class="line"><span>	fun    [1]uintptr</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>其中 <code>itab</code> 由具体类型 <code>_type</code> 以及 <code>interfacetype</code> 组成。<code>_type</code> 表示具体类型，而 <code>interfacetype</code> 则表示具体类型实现的接口类型。</p><p>先明确一点：<strong>接口变量可以存储任何实现了接口定义的所有方法的变量。</strong></p><p>Go 语言中最常见的就是 <code>Reader</code> 和 <code>Writer</code> 接口：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type Reader interface {</span></span>
<span class="line"><span>    Read(p []byte) (n int, err error)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Writer interface {</span></span>
<span class="line"><span>    Write(p []byte) (n int, err error)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>接下来，就是接口之间的各种转换和赋值了：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var r io.Reader</span></span>
<span class="line"><span>tty, err := os.OpenFile(&quot;/Users/qcrao/Desktop/test&quot;, os.O_RDWR, 0)</span></span>
<span class="line"><span>if err != nil {</span></span>
<span class="line"><span>    return nil, err</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>r = tty</span></span></code></pre></div><p>首先声明 <code>r</code> 的类型是 <code>io.Reader</code>，注意，这是 <code>r</code> 的静态类型，此时它的动态类型为 <code>nil</code>，并且它的动态值也是 <code>nil</code>。</p><p>之后，<code>r = tty</code> 这一语句，将 <code>r</code> 的动态类型变成 <code>*os.File</code>，动态值则变成非空，表示打开的文件对象。这时，r 可以用<code>&lt;value, type&gt;</code>对来表示为： <code>&lt;tty, *os.File&gt;</code>。</p><p><img src="https://s2.loli.net/2023/12/27/p2GjNhKDJsEFBUe.png" alt="r=tty"></p><p>注意看上图，此时虽然 <code>fun</code> 所指向的函数只有一个 <code>Read</code> 函数，其实 <code>*os.File</code> 还包含 <code>Write</code> 函数，也就是说 <code>*os.File</code> 其实还实现了 <code>io.Writer</code> 接口。因此下面的断言语句可以执行：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var w io.Writer</span></span>
<span class="line"><span>w = r.(io.Writer)</span></span></code></pre></div><p>之所以用断言，而不能直接赋值，是因为 <code>r</code> 的静态类型是 <code>io.Reader</code>，并没有实现 <code>io.Writer</code> 接口。断言能否成功，看 <code>r</code> 的动态类型是否符合要求。</p><p>这样，w 也可以表示成 <code>&lt;tty, *os.File&gt;</code>，仅管它和 <code>r</code> 一样，但是 w 可调用的函数取决于它的静态类型 <code>io.Writer</code>，也就是说它只能有这样的调用形式： <code>w.Write()</code> 。<code>w</code> 的内存形式如下图：</p><p><img src="https://golang.design/go-questions/stdlib/reflect/assets/3.png" alt="w = r.(io.Writer)"></p><p>最后，再来一个赋值：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var empty interface{}</span></span>
<span class="line"><span>empty = w</span></span></code></pre></div><p>由于 <code>empty</code> 是一个空接口，因此所有的类型都实现了它，w 可以直接赋给它，不需要执行断言操作。</p><p><img src="https://s2.loli.net/2023/12/27/1VS7ABkj3FQ6g8i.png" alt="empty=w"></p><h3 id="反射的基本函数" tabindex="-1">反射的基本函数 <a class="header-anchor" href="#反射的基本函数" aria-label="Permalink to &quot;反射的基本函数&quot;">​</a></h3><p>reflect包里定义了一个接口个和一个结构体，即reflect.Type 和reflect.Value，<strong>它们提供很多函数来获取存储在接口里的类型信息</strong>。</p><p>reflect.Type主要提供关于类型相关的信息，所以它和_type关联比较紧密；</p><p>reflect.Value则结合_type和data两者，因此程序员可以获取甚至改变类型的值；</p><p>reflect包中提供了两个基础的关于反射的函数来获取上述接口和结构体：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func TypeOf(i interface{}) Type </span></span>
<span class="line"><span>func ValueOf(i interface{}) Value</span></span></code></pre></div><h3 id="typeof函数" tabindex="-1">TypeOf函数 <a class="header-anchor" href="#typeof函数" aria-label="Permalink to &quot;TypeOf函数&quot;">​</a></h3><p><code>TypeOf</code> 函数用来提取一个接口中值的类型信息。由于它的输入参数是一个空的 <code>interface{}</code>，调用此函数时，实参会先被转化为 <code>interface{}</code>类型。这样，实参的类型信息、方法集、值信息都存储到 <code>interface{}</code> 变量里了。</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func TypeOf(i interface{}) Type {</span></span>
<span class="line"><span>	eface := *(*emptyInterface)(unsafe.Pointer(&amp;i))</span></span>
<span class="line"><span>	return toType(eface.typ)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type emptyInterface struct {</span></span>
<span class="line"><span>	typ  *rtype</span></span>
<span class="line"><span>	word unsafe.Pointer</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func toType(t *rtype) Type {</span></span>
<span class="line"><span>	if t == nil {</span></span>
<span class="line"><span>		return nil</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return t</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注意，返回值 <code>Type</code> 实际上是一个接口，定义了很多方法，用来获取类型相关的各种信息，而 <code>*rtype</code> 实现了 <code>Type</code> 接口。</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type Type interface {</span></span>
<span class="line"><span>    // 所有的类型都可以调用下面这些函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 此类型的变量对齐后所占用的字节数</span></span>
<span class="line"><span>	Align() int</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	// 如果是 struct 的字段，对齐后占用的字节数</span></span>
<span class="line"><span>	FieldAlign() int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 返回类型方法集里的第 \`i\` (传入的参数)个方法</span></span>
<span class="line"><span>	Method(int) Method</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 通过名称获取方法</span></span>
<span class="line"><span>	MethodByName(string) (Method, bool)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 获取类型方法集里导出的方法个数</span></span>
<span class="line"><span>	NumMethod() int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 类型名称</span></span>
<span class="line"><span>	Name() string</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 返回类型所在的路径，如：encoding/base64</span></span>
<span class="line"><span>	PkgPath() string</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 返回类型的大小，和 unsafe.Sizeof 功能类似</span></span>
<span class="line"><span>	Size() uintptr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 返回类型的字符串表示形式</span></span>
<span class="line"><span>	String() string</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 返回类型的类型值</span></span>
<span class="line"><span>	Kind() Kind</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 类型是否实现了接口 u</span></span>
<span class="line"><span>	Implements(u Type) bool</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 是否可以赋值给 u</span></span>
<span class="line"><span>	AssignableTo(u Type) bool</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 是否可以类型转换成 u</span></span>
<span class="line"><span>	ConvertibleTo(u Type) bool</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 类型是否可以比较</span></span>
<span class="line"><span>	Comparable() bool</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 下面这些函数只有特定类型可以调用</span></span>
<span class="line"><span>	// 如：Key, Elem 两个方法就只能是 Map 类型才能调用</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	// 类型所占据的位数</span></span>
<span class="line"><span>	Bits() int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 返回通道的方向，只能是 chan 类型调用</span></span>
<span class="line"><span>	ChanDir() ChanDir</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 返回类型是否是可变参数，只能是 func 类型调用</span></span>
<span class="line"><span>	// 比如 t 是类型 func(x int, y ... float64)</span></span>
<span class="line"><span>	// 那么 t.IsVariadic() == true</span></span>
<span class="line"><span>	IsVariadic() bool</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 返回内部子元素类型，只能由类型 Array, Chan, Map, Ptr, or Slice 调用</span></span>
<span class="line"><span>	Elem() Type</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 返回结构体类型的第 i 个字段，只能是结构体类型调用</span></span>
<span class="line"><span>	// 如果 i 超过了总字段数，就会 panic</span></span>
<span class="line"><span>	Field(i int) StructField</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 返回嵌套的结构体的字段</span></span>
<span class="line"><span>	FieldByIndex(index []int) StructField</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 通过字段名称获取字段</span></span>
<span class="line"><span>	FieldByName(name string) (StructField, bool)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// FieldByNameFunc returns the struct field with a name</span></span>
<span class="line"><span>	// 返回名称符合 func 函数的字段</span></span>
<span class="line"><span>	FieldByNameFunc(match func(string) bool) (StructField, bool)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 获取函数类型的第 i 个参数的类型</span></span>
<span class="line"><span>	In(i int) Type</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 返回 map 的 key 类型，只能由类型 map 调用</span></span>
<span class="line"><span>	Key() Type</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 返回 Array 的长度，只能由类型 Array 调用</span></span>
<span class="line"><span>	Len() int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 返回类型字段的数量，只能由类型 Struct 调用</span></span>
<span class="line"><span>	NumField() int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 返回函数类型的输入参数个数</span></span>
<span class="line"><span>	NumIn() int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 返回函数类型的返回值个数</span></span>
<span class="line"><span>	NumOut() int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 返回函数类型的第 i 个值的类型</span></span>
<span class="line"><span>	Out(i int) Type</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 返回类型结构体的相同部分</span></span>
<span class="line"><span>	common() *rtype</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	// 返回类型结构体的不同部分</span></span>
<span class="line"><span>	uncommon() *uncommonType</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注意到 <code>Type</code> 方法集的倒数第二个方法 <code>common</code> 返回的 <code>rtype</code>类型，它和上一篇文章讲到的 <code>_type</code> 是一回事，而且源代码里也注释了：两边要保持同步：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// rtype must be kept in sync with ../runtime/type.go:/^type._type.</span></span>
<span class="line"><span>type rtype struct {</span></span>
<span class="line"><span>	size       uintptr</span></span>
<span class="line"><span>	ptrdata    uintptr</span></span>
<span class="line"><span>	hash       uint32</span></span>
<span class="line"><span>	tflag      tflag</span></span>
<span class="line"><span>	align      uint8</span></span>
<span class="line"><span>	fieldAlign uint8</span></span>
<span class="line"><span>	kind       uint8</span></span>
<span class="line"><span>	alg        *typeAlg</span></span>
<span class="line"><span>	gcdata     *byte</span></span>
<span class="line"><span>	str        nameOff</span></span>
<span class="line"><span>	ptrToThis  typeOff</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>比如下面的 <code>arrayType</code> 和 <code>chanType</code> 都包含 <code>rytpe</code>，而前者还包含 slice，len 等和数组相关的信息；后者则包含 <code>dir</code> 表示通道方向的信息。</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// arrayType represents a fixed array type.</span></span>
<span class="line"><span>type arrayType struct {</span></span>
<span class="line"><span>	rtype \`reflect:&quot;array&quot;\`</span></span>
<span class="line"><span>	elem  *rtype // array element type</span></span>
<span class="line"><span>	slice *rtype // slice type</span></span>
<span class="line"><span>	len   uintptr</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// chanType represents a channel type.</span></span>
<span class="line"><span>type chanType struct {</span></span>
<span class="line"><span>	rtype \`reflect:&quot;chan&quot;\`</span></span>
<span class="line"><span>	elem  *rtype  // channel element type</span></span>
<span class="line"><span>	dir   uintptr // channel direction (ChanDir)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注意到，<code>Type</code> 接口实现了 <code>String()</code> 函数，满足 <code>fmt.Stringer</code> 接口，因此使用 <code>fmt.Println</code> 打印的时候，输出的是 <code>String()</code> 的结果。另外，<code>fmt.Printf()</code> 函数，如果使用 <code>%T</code> 来作为格式参数，输出的是 <code>reflect.TypeOf</code> 的结果，也就是动态类型。例如：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>fmt.Printf(&quot;%T&quot;, 3) // int</span></span></code></pre></div><h3 id="valueof函数" tabindex="-1">valueOf函数 <a class="header-anchor" href="#valueof函数" aria-label="Permalink to &quot;valueOf函数&quot;">​</a></h3><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func ValueOf(i interface{}) Value {</span></span>
<span class="line"><span>	if i == nil {</span></span>
<span class="line"><span>		return Value{}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>   // ……</span></span>
<span class="line"><span>	return unpackEface(i)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 分解 eface</span></span>
<span class="line"><span>func unpackEface(i interface{}) Value {</span></span>
<span class="line"><span>	e := (*emptyInterface)(unsafe.Pointer(&amp;i))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	t := e.typ</span></span>
<span class="line"><span>	if t == nil {</span></span>
<span class="line"><span>		return Value{}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	f := flag(t.Kind())</span></span>
<span class="line"><span>	if ifaceIndir(t) {</span></span>
<span class="line"><span>		f |= flagIndir</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return Value{t, e.word, f}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>ValueOf</code> 函数的返回值，包含类型结构体指针、真实数据的地址、标志位。</p><p>Value 结构体定义了很多方法，通过这些方法可以直接操作 Value 字段 ptr 所指向的实际数据：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 设置切片的 len 字段，如果类型不是切片，就会panic</span></span>
<span class="line"><span> func (v Value) SetLen(n int)</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> // 设置切片的 cap 字段</span></span>
<span class="line"><span> func (v Value) SetCap(n int)</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> // 设置字典的 kv</span></span>
<span class="line"><span> func (v Value) SetMapIndex(key, val Value)</span></span>
<span class="line"><span></span></span>
<span class="line"><span> // 返回切片、字符串、数组的索引 i 处的值</span></span>
<span class="line"><span> func (v Value) Index(i int) Value</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> // 根据名称获取结构体的内部字段值</span></span>
<span class="line"><span> func (v Value) FieldByName(name string) Value</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> // 用来获取 int 类型的值</span></span>
<span class="line"><span>func (v Value) Int() int64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 用来获取结构体字段（成员）数量</span></span>
<span class="line"><span>func (v Value) NumField() int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 尝试向通道发送数据（不会阻塞）</span></span>
<span class="line"><span>func (v Value) TrySend(x reflect.Value) bool</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 通过参数列表 in 调用 v 值所代表的函数（或方法</span></span>
<span class="line"><span>func (v Value) Call(in []Value) (r []Value) </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 调用变参长度可变的函数</span></span>
<span class="line"><span>func (v Value) CallSlice(in []Value) []Value</span></span></code></pre></div><p>另外，通过 <code>Type()</code> 方法和 <code>Interface()</code> 方法可以打通 <code>interface</code>、<code>Type</code>、<code>Value</code> 三者。Type() 方法也可以返回变量的类型信息，与 reflect.TypeOf() 函数等价。Interface() 方法可以将 Value 还原成原来的 interface;</p><p><img src="https://s2.loli.net/2023/12/27/POlwFGT7kJbWEcy.png" alt="三者关系"></p><p>总结:</p><ol><li>TypeOf()返回了一个接口，这个接口定义了一系列的方法，利用这些方法可以获取关于类型的所有的信息；</li><li>ValueOf()函数返回的是一个结构体变量，包含类型信息以及实际值；</li></ol><p>用一张图来串一下:</p><p><img src="https://s2.loli.net/2023/12/27/Jl7BbErGtMpSDXj.png" alt="value rtype"></p><p>上图中，<code>rtye</code> 实现了 <code>Type</code> 接口，是所有类型的公共部分。emptyface 结构体和 eface 其实是一个东西，而 rtype 其实和 _type 是一个东西，只是一些字段稍微有点差别，比如 emptyface 的 word 字段和 eface 的 data 字段名称不同，但是数据型是一样的。</p><h3 id="反射的三大定律" tabindex="-1">反射的三大定律 <a class="header-anchor" href="#反射的三大定律" aria-label="Permalink to &quot;反射的三大定律&quot;">​</a></h3><h4 id="第一定律" tabindex="-1">第一定律 <a class="header-anchor" href="#第一定律" aria-label="Permalink to &quot;第一定律&quot;">​</a></h4><ul><li><strong>反射是一种检测存储在interface中的类型和值 机制。这可以通过TypeOf函数和ValueOf函数得到；</strong></li></ul><h4 id="第二定律" tabindex="-1">第二定律 <a class="header-anchor" href="#第二定律" aria-label="Permalink to &quot;第二定律&quot;">​</a></h4><ul><li><strong>它将ValueOf的返回值通过Interface()函数反向转变成interface变量；</strong></li></ul><p>调用 <a href="https://draveness.me/golang/tree/reflect.Value.Interface" target="_blank" rel="noreferrer"><code>reflect.Value.Interface</code></a> 方法只能获得 <code>interface{}</code> 类型的变量，如果想要将其还原成最原始的状态还需要经过如下所示的显式类型转换：</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> reflect.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ValueOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>从反射对象到接口值的过程是从接口值到反射对象的镜面过程，两个过程都需要经历两次转换：</p><ul><li>从接口值到反射对象： <ul><li>从基本类型到接口类型的类型转换；</li><li>从接口类型到反射对象的转换；</li></ul></li><li>从反射对象到接口值： <ul><li>反射对象转换成接口类型；</li><li>通过显式类型转换变成原始类型；</li></ul></li></ul><p><img src="https://s2.loli.net/2023/11/27/pwyShRNKriZM9QF.png" alt="golang-bidirectional-reflection"></p><h4 id="第三定律" tabindex="-1">第三定律 <a class="header-anchor" href="#第三定律" aria-label="Permalink to &quot;第三定律&quot;">​</a></h4><ul><li>如果需要操作一个反射变量，那么它必须是可设置的。反射变量可设置的本质是它存储了原变量本身，这样对反射变量操作，就会反映到原变量本身；反之，如果反射变量不能代表原变量，那么操作了反射变量，不会对原变量产生任何影响，这会给读者带来疑惑；</li></ul><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var x float64 = 3.4</span></span>
<span class="line"><span>v := reflect.ValueOf(x)</span></span>
<span class="line"><span>v.SetFloat(7.1) // Error: will panic.</span></span></code></pre></div><p>上面的代码会产生panic，原因是反射变量v不能代表x本身，为什么？因为调用reflect.ValueOf(x)这一行代码的时候，传入的参数在函数的内部只是一个拷贝，是值传递，所以v代表的只是x的一个拷贝，因此对v进行操作是被禁止的；</p><p>可设置是反射变量 <code>Value</code> 的一个性质，但不是所有的 <code>Value</code> 都是可被设置的。就像在一般的函数里那样，当我们想改变传入的变量时，使用指针就可以解决了。</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var x float64 = 3.4</span></span>
<span class="line"><span>p := reflect.ValueOf(&amp;x) // 通过上面可以知道，ValueOf返回的是一个结构体，里面包含类型，源地址和标志位</span></span>
<span class="line"><span>fmt.Println(&quot;type of p:&quot;, p.Type())</span></span>
<span class="line"><span>fmt.Println(&quot;settability of p:&quot;, p.CanSet())</span></span>
<span class="line"><span>// 输出</span></span>
<span class="line"><span>type of p: *float64</span></span>
<span class="line"><span>settability of p: false</span></span>
<span class="line"><span>// 其中p并不是代表x，p.Elem() 才真正代表x，这样就可以操作x了</span></span>
<span class="line"><span>v := p.Elem()</span></span>
<span class="line"><span>v.SetFloat(7.1)</span></span>
<span class="line"><span>fmt.Println(v.Interface()) // 7.1</span></span>
<span class="line"><span>fmt.Println(x) // 7.1</span></span></code></pre></div><p>关于第三条，记住一句话：如果想要操作原变量，反射变量 <code>Value</code> 必须要 hold 住原变量的地址才行。</p><ol><li>调用 <a href="https://draveness.me/golang/tree/reflect.ValueOf" target="_blank" rel="noreferrer"><code>reflect.ValueOf</code></a> 获取变量指针；</li><li>调用 <a href="https://draveness.me/golang/tree/reflect.Value.Elem" target="_blank" rel="noreferrer"><code>reflect.Value.Elem</code></a> 获取指针指向的变量；</li><li>调用 <a href="https://draveness.me/golang/tree/reflect.Value.SetInt" target="_blank" rel="noreferrer"><code>reflect.Value.SetInt</code></a> 更新变量的值：</li></ol><h2 id="_4、go语言中反射有哪些应用" tabindex="-1">4、Go语言中反射有哪些应用？ <a class="header-anchor" href="#_4、go语言中反射有哪些应用" aria-label="Permalink to &quot;4、Go语言中反射有哪些应用？&quot;">​</a></h2><ol><li>IDE中的代码自动补全功能</li><li>对象序列化(encoding/json)</li><li>fmt相关函数的实现</li><li>ORM(Object Relational Mapping) 对象关系映射...</li></ol><h2 id="_5、如何比较两个对象完全相同" tabindex="-1">5、如何比较两个对象完全相同？ <a class="header-anchor" href="#_5、如何比较两个对象完全相同" aria-label="Permalink to &quot;5、如何比较两个对象完全相同？&quot;">​</a></h2><p>Go语言中提供了一个函数可以完成此功能:</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func DeepEqual(x, y interface{}) bool</span></span></code></pre></div><p>DeepEqual函数的参数是两个interface{}，实际上也就是可以输入任意类型，输出true或者false表示输入的两个变量是否是&quot;深度&quot;相等；</p><p>先明白一点，如果是不同的类型，即使是底层类型相同，相应的值也一样，那么两者也不是&quot;深度&quot;相等。</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type MyInt int</span></span>
<span class="line"><span>type YourInt int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	m := MyInt(1)</span></span>
<span class="line"><span>	y := YourInt(1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	fmt.Println(reflect.DeepEqual(m, y)) // false</span></span>
<span class="line"><span>}</span></span></code></pre></div><table><thead><tr><th>类型</th><th>深度相等情形</th></tr></thead><tbody><tr><td>Array</td><td>相同索引处的元素“深度”相等</td></tr><tr><td>Struct</td><td>相应字段，包含导出和不导出，“深度”相等</td></tr><tr><td>Func</td><td>只有两者都是 nil 时</td></tr><tr><td>Interface</td><td>两者存储的具体值“深度”相等</td></tr><tr><td>Map</td><td>1、都为 nil；2、非空、长度相等，指向同一个 map 实体对象，或者相应的 key 指向的 value “深度”相等</td></tr><tr><td>Pointer</td><td>1、使用 == 比较的结果相等；2、指向的实体“深度”相等</td></tr><tr><td>Slice</td><td>1、都为 nil；2、非空、长度相等，首元素指向同一个底层数组的相同元素，即 &amp;x[0] == &amp;y[0] 或者 相同索引处的元素“深度”相等</td></tr><tr><td>numbers, bools, strings, and channels</td><td>使用 == 比较的结果为真</td></tr></tbody></table><p>一般情况下，DeepEqual 的实现只需要递归地调用 == 就可以比较两个变量是否是真的“深度”相等。</p><ol><li><p>但是，有一些异常情况：比如 func 类型是不可比较的类型，只有在两个 func 类型都是 nil 的情况下，才是“深度”相等；float 类型，由于精度的原因，也是不能使用 == 比较的；包含 func 类型或者 float 类型的 struct， interface， array 等。</p></li><li><p>对于指针而言，当两个值相等的指针就是“深度”相等，因为两者指向的内容是相等的，即使两者指向的是 func 类型或者 float 类型，这种情况下不关心指针所指向的内容。</p></li><li><p>同样，对于指向相同 slice， map 的两个变量也是“深度”相等的，不关心 slice， map 具体的内容。</p></li><li><p>对于“有环”的类型，比如循环链表，比较两者是否“深度”相等的过程中，需要对已比较的内容作一个标记，一旦发现两个指针之前比较过，立即停止比较，并判定二者是深度相等的。这样做的原因是，及时停止比较，避免陷入无限循环。</p></li></ol><h3 id="deepequal" tabindex="-1">DeepEqual <a class="header-anchor" href="#deepequal" aria-label="Permalink to &quot;DeepEqual&quot;">​</a></h3><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func DeepEqual(x, y interface{}) bool {</span></span>
<span class="line"><span>	if x == nil || y == nil {</span></span>
<span class="line"><span>		return x == y</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	v1 := ValueOf(x)</span></span>
<span class="line"><span>	v2 := ValueOf(y)</span></span>
<span class="line"><span>	if v1.Type() != v2.Type() {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return deepValueEqual(v1, v2, make(map[visit]bool), 0)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="deepvalueequal" tabindex="-1">deepValueEqual <a class="header-anchor" href="#deepvalueequal" aria-label="Permalink to &quot;deepValueEqual&quot;">​</a></h3><p>代码比较长，思路却比较简单清晰：核心是一个 switch 语句，识别输入参数的不同类型，分别递归调用 deepValueEqual 函数，一直递归到最基本的数据类型，比较 int，string 等可以直接得出 true 或者 false，再一层层地返回，最终得到“深度”相等的比较结果。</p><p>实际上，各种类型的比较套路比较相似，这里就直接节选一个稍微复杂一点的 <code>map</code> 类型的比较：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// deepValueEqual 函数</span></span>
<span class="line"><span>// ……</span></span>
<span class="line"><span></span></span>
<span class="line"><span>case Map:</span></span>
<span class="line"><span>	if v1.IsNil() != v2.IsNil() {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if v1.Len() != v2.Len() {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if v1.Pointer() == v2.Pointer() {</span></span>
<span class="line"><span>		return true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, k := range v1.MapKeys() {</span></span>
<span class="line"><span>		val1 := v1.MapIndex(k)</span></span>
<span class="line"><span>		val2 := v2.MapIndex(k)</span></span>
<span class="line"><span>		if !val1.IsValid() || !val2.IsValid() || !deepValueEqual(v1.MapIndex(k), v2.MapIndex(k), visited, depth+1) {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>// ……</span></span></code></pre></div>`,99),t=[l];function i(c,o,r,d,u,h){return n(),s("div",null,t)}const y=a(e,[["render",i]]);export{f as __pageData,y as default};
