import{j as a,b as n,c as s,aa as p}from"./chunks/framework.BrJMe4p_.js";const m=JSON.parse('{"title":"Go语言之unsafe","description":"","frontmatter":{},"headers":[],"relativePath":"Go/Go语言之unsafe.md","filePath":"Go/Go语言之unsafe.md","lastUpdated":1711094318000}'),e={name:"Go/Go语言之unsafe.md"},t=p(`<h1 id="go语言之unsafe" tabindex="-1">Go语言之unsafe <a class="header-anchor" href="#go语言之unsafe" aria-label="Permalink to &quot;Go语言之unsafe&quot;">​</a></h1><h2 id="go指针和unsafe-pointer有什么区别" tabindex="-1">Go指针和unsafe.Pointer有什么区别？ <a class="header-anchor" href="#go指针和unsafe-pointer有什么区别" aria-label="Permalink to &quot;Go指针和unsafe.Pointer有什么区别？&quot;">​</a></h2><h3 id="限制1" tabindex="-1">限制1 <a class="header-anchor" href="#限制1" aria-label="Permalink to &quot;限制1&quot;">​</a></h3><p>Go语言的指针不能够进行数学运算</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>a := 5</span></span>
<span class="line"><span>p := &amp;a</span></span>
<span class="line"><span></span></span>
<span class="line"><span>p++ // 错误</span></span>
<span class="line"><span>p = &amp;a + 3 // 错误</span></span></code></pre></div><h3 id="限制2" tabindex="-1">限制2 <a class="header-anchor" href="#限制2" aria-label="Permalink to &quot;限制2&quot;">​</a></h3><p>不同类型的指针不能互相转换</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>	a := int(100)</span></span>
<span class="line"><span>	var f *float64</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	f = &amp;a</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 编译错误</span></span></code></pre></div><h3 id="限制3" tabindex="-1">限制3 <a class="header-anchor" href="#限制3" aria-label="Permalink to &quot;限制3&quot;">​</a></h3><p>不同类型的指针不能使用==或者!=比较</p><p>只有在两个指针类型相同或者可以相互转换的情况下，才可以对两者进行比较。另外，指针可以通过 <code>==</code> 和 <code>!=</code> 直接和 <code>nil</code> 作比较。</p><h3 id="限制4" tabindex="-1">限制4 <a class="header-anchor" href="#限制4" aria-label="Permalink to &quot;限制4&quot;">​</a></h3><p>不同类型的指针不能够相互赋值</p><p>unsafe.Pointer 在 unsafe 包中:</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type ArbitraryType int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Pointer *ArbitraryType</span></span></code></pre></div><p>从命名来看，<code>Arbitrary</code> 是任意的意思，也就是说 Pointer 可以指向任意类型，实际上它类似于 C 语言里的 <code>void*</code>。</p><p>unsafe 包提供了 2 点重要的能力：</p><ol><li>任何类型的指针和 unsafe.Pointer 可以相互转换。</li><li>uintptr 类型和 unsafe.Pointer 可以相互转换。</li></ol><p><img src="https://s2.loli.net/2023/12/26/3Zbsx1IJQfoc5Am.png" alt="type pointer uintptr"></p><p><strong>pointer 不能直接进行数学运算，但可以把它转换成 uintptr，对 uintptr 类型进行数学运算，再转换成 pointer 类型。</strong></p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// uintptr 是一个整数类型，它足够大，可以存储</span></span>
<span class="line"><span>type uintptr uintptr</span></span></code></pre></div><p>还有一点要注意的是，uintptr 并没有指针的语义，意思就是 uintptr 所指向的对象会被 gc 无情地回收。而 unsafe.Pointer 有指针语义，可以保护它所指向的对象在“有用”的时候不会被垃圾回收。</p><h2 id="如何利用unsafe获取slice-map的长度" tabindex="-1">如何利用unsafe获取slice &amp; map的长度 <a class="header-anchor" href="#如何利用unsafe获取slice-map的长度" aria-label="Permalink to &quot;如何利用unsafe获取slice &amp; map的长度&quot;">​</a></h2><h3 id="获取slice长度" tabindex="-1">获取slice长度 <a class="header-anchor" href="#获取slice长度" aria-label="Permalink to &quot;获取slice长度&quot;">​</a></h3><p>通过前面关于 slice 的文章，我们知道了 slice header 的结构体定义：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// runtime/slice.go</span></span>
<span class="line"><span>type slice struct {</span></span>
<span class="line"><span>    array unsafe.Pointer // 元素指针</span></span>
<span class="line"><span>    len   int // 长度 </span></span>
<span class="line"><span>    cap   int // 容量</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>调用 make 函数新建一个 slice，底层调用的是 makeslice 函数，返回的是 slice 结构体：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func makeslice(et *_type, len, cap int) slice</span></span></code></pre></div><p>因此我们可以通过 unsafe.Pointer 和 uintptr 进行转换，得到 slice 的字段值。</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>	s := make([]int, 9, 20)</span></span>
<span class="line"><span>	var Len = *(*int)(unsafe.Pointer(uintptr(unsafe.Pointer(&amp;s)) + uintptr(8)))</span></span>
<span class="line"><span>	fmt.Println(Len, len(s)) // 9 9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var Cap = *(*int)(unsafe.Pointer(uintptr(unsafe.Pointer(&amp;s)) + uintptr(16)))</span></span>
<span class="line"><span>	fmt.Println(Cap, cap(s)) // 20 20</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Len: &amp;s =&gt; pointer =&gt; uintptr =&gt; pointer =&gt; *int =&gt; int</span></span>
<span class="line"><span>Cap: &amp;s =&gt; pointer =&gt; uintptr =&gt; pointer =&gt; *int =&gt; int</span></span></code></pre></div><h3 id="获取map长度" tabindex="-1">获取map长度 <a class="header-anchor" href="#获取map长度" aria-label="Permalink to &quot;获取map长度&quot;">​</a></h3><p>再来看一下上篇文章我们讲到的 map：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type hmap struct {</span></span>
<span class="line"><span>	count     int</span></span>
<span class="line"><span>	flags     uint8</span></span>
<span class="line"><span>	B         uint8</span></span>
<span class="line"><span>	noverflow uint16</span></span>
<span class="line"><span>	hash0     uint32</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	buckets    unsafe.Pointer</span></span>
<span class="line"><span>	oldbuckets unsafe.Pointer</span></span>
<span class="line"><span>	nevacuate  uintptr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	extra *mapextra</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>和 slice 不同的是，makemap 函数返回的是 hmap 的指针，注意是指针：</p><p>我们依然能通过 unsafe.Pointer 和 uintptr 进行转换，得到 hamp 字段的值，只不过，现在 count 变成二级指针了：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>	mp := make(map[string]int)</span></span>
<span class="line"><span>	mp[&quot;qcrao&quot;] = 100</span></span>
<span class="line"><span>	mp[&quot;stefno&quot;] = 18</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	count := **(**int)(unsafe.Pointer(&amp;mp))</span></span>
<span class="line"><span>	fmt.Println(count, len(mp)) // 2 2</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>转换过程</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&amp;mp =&gt; pointer =&gt; **int =&gt; int</span></span></code></pre></div><h2 id="如何利用unsafe包修改私有成员" tabindex="-1">如何利用unsafe包修改私有成员 <a class="header-anchor" href="#如何利用unsafe包修改私有成员" aria-label="Permalink to &quot;如何利用unsafe包修改私有成员&quot;">​</a></h2><p>对于一个结构体，通过 offset 函数可以获取结构体成员的偏移量，进而获取成员的地址，读写该地址的内存，就可以达到改变成员值的目的。</p><p>这里有一个内存分配相关的事实：结构体会被分配一块连续的内存，结构体的地址也代表了第一个成员的地址。</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;fmt&quot;</span></span>
<span class="line"><span>	&quot;unsafe&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Programmer struct {</span></span>
<span class="line"><span>	name string</span></span>
<span class="line"><span>	language string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	p := Programmer{&quot;stefno&quot;, &quot;go&quot;}</span></span>
<span class="line"><span>	fmt.Println(p)</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	name := (*string)(unsafe.Pointer(&amp;p))</span></span>
<span class="line"><span>	*name = &quot;qcrao&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	lang := (*string)(unsafe.Pointer(uintptr(unsafe.Pointer(&amp;p)) + unsafe.Offsetof(p.language)))</span></span>
<span class="line"><span>	*lang = &quot;Golang&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	fmt.Println(p)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 输出</span></span>
<span class="line"><span>{stefno go}</span></span>
<span class="line"><span>{qcrao Golang}</span></span></code></pre></div><ul><li><code>unsafe.Offsetof</code> 是 Go 语言中 <code>unsafe</code> 包提供的一个函数，用于获取结构体中某个字段相对于结构体起始地址的偏移量。</li></ul><h3 id="复杂例子" tabindex="-1">复杂例子 <a class="header-anchor" href="#复杂例子" aria-label="Permalink to &quot;复杂例子&quot;">​</a></h3><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type Programmer struct {</span></span>
<span class="line"><span>	name string</span></span>
<span class="line"><span>	age int</span></span>
<span class="line"><span>	language string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//并且放在其他包，这样在 main 函数中，它的三个字段都是私有成员变量，不能直接修改。但我通过 unsafe.Sizeof() 函数可以获取成员大小，进而计算出成员的地址，直接修改内存。</span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	p := Programmer{&quot;stefno&quot;, 18, &quot;go&quot;}</span></span>
<span class="line"><span>	fmt.Println(p)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	lang := (*string)(unsafe.Pointer(uintptr(unsafe.Pointer(&amp;p)) + unsafe.Sizeof(int(0)) + unsafe.Sizeof(string(&quot;&quot;))))</span></span>
<span class="line"><span>	*lang = &quot;Golang&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	fmt.Println(p)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 输出</span></span>
<span class="line"><span>{stefno 18 go}</span></span>
<span class="line"><span>{stefno 18 Golang}</span></span></code></pre></div><h2 id="如何实现字符串和byte切片的零拷贝转换" tabindex="-1">如何实现字符串和byte切片的零拷贝转换 <a class="header-anchor" href="#如何实现字符串和byte切片的零拷贝转换" aria-label="Permalink to &quot;如何实现字符串和byte切片的零拷贝转换&quot;">​</a></h2><p>这是一个非常精典的例子。实现字符串和 bytes 切片之间的转换，要求是 <code>zero-copy</code>。想一下，一般的做法，都需要遍历字符串或 bytes 切片，再挨个赋值。</p><p>完成这个任务，我们需要了解 slice 和 string 的底层数据结构：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type StringHeader struct {</span></span>
<span class="line"><span>	Data uintptr</span></span>
<span class="line"><span>	Len  int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type SliceHeader struct {</span></span>
<span class="line"><span>	Data uintptr</span></span>
<span class="line"><span>	Len  int</span></span>
<span class="line"><span>	Cap  int</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面是反射包下的结构体，路径：src/reflect/value.go。只需要共享底层 Data 和 Len 就可以实现 <code>zero-copy</code>。</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func string2bytes(s string) []byte {</span></span>
<span class="line"><span>	return *(*[]byte)(unsafe.Pointer(&amp;s))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func bytes2string(b []byte) string{</span></span>
<span class="line"><span>	return *(*string)(unsafe.Pointer(&amp;b))</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>获取某个对象的指针，然后强转即可；</p>`,53),l=[t];function i(o,c,r,u,g,d){return n(),s("div",null,l)}const f=a(e,[["render",i]]);export{m as __pageData,f as default};
