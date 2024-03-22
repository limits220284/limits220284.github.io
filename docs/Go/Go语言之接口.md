# Go语言中的接口

## 鸭子类型

如果某个东西长得像鸭子，像鸭子一样游泳，像鸭子一样嘎嘎叫，那它就可以被看成是一只鸭子。

`Duck Typing`，鸭子类型，是动态编程语言的一种对象推断策略，它更关注对象能如何被使用，而不是对象的类型本身。Go 语言作为一门静态语言，它通过通过接口的方式完美支持鸭子类型。

例如，在动态语言 python 中，定义一个这样的函数：

```python
def hello_world(coder):
    coder.say_hello()
```

当调用此函数的时候，可以传入任意类型，只要它实现了 `say_hello()` 函数就可以。如果没有实现，运行过程中会出现错误。

而在静态语言如 Java, C++ 中，必须要显示地声明实现了某个接口，之后，才能用在任何需要这个接口的地方。如果你在程序中调用 `hello_world` 函数，却传入了一个根本就没有实现 `say_hello()` 的类型，那在编译阶段就不会通过。这也是静态语言比动态语言更安全的原因。

动态语言和静态语言的差别在此就有所体现。静态语言在编译期间就能发现类型不匹配的错误，不像动态语言，必须要运行到那一行代码才会报错。插一句，这也是我不喜欢用 `python` 的一个原因。当然，静态语言要求程序员在编码阶段就要按照规定来编写程序，为每个变量规定数据类型，这在某种程度上，加大了工作量，也加长了代码量。动态语言则没有这些要求，可以让人更专注在业务上，代码也更短，写起来更快，这一点，写 python 的同学比较清楚。

Go 语言作为一门现代静态语言，是有后发优势的。它引入了动态语言的便利，同时又会进行静态语言的类型检查，写起来是非常 Happy 的。Go 采用了折中的做法：不要求类型显示地声明实现了某个接口，只要实现了相关的方法即可，编译器就能检测到。

来看个例子：

先定义一个接口，和使用此接口作为参数的函数：

```golang
type IGreeting interface {
	sayHello()
}

func sayHello(i IGreeting) {
	i.sayHello()
}

type Go struct {}
func (g Go) sayHello() {
	fmt.Println("Hi, I am GO!")
}

type PHP struct {}
func (p PHP) sayHello() {
	fmt.Println("Hi, I am PHP!")
}

func main() {
	golang := Go{}
	php := PHP{}

	sayHello(golang)
	sayHello(php)
}
// 输出
Hi, I am GO!
Hi, I am PHP!
```

在 main 函数中，调用调用 sayHello() 函数时，传入了 `golang, php` 对象，它们并没有显式地声明实现了 IGreeting 类型，只是实现了接口所规定的 sayHello() 函数。实际上，编译器在调用 sayHello() 函数时，会隐式地将 `golang, php` 对象转换成 IGreeting 类型，这也是静态语言的类型检查功能。

顺带再提一下动态语言的特点：

> 变量绑定的类型是不确定的，在运行期间才能确定 函数和方法可以接收任何类型的参数，且调用时不检查参数类型 不需要实现接口

总结一下，鸭子类型是一种动态语言的风格，在这种风格中，一个对象有效的语义，不是由继承自特定的类或实现特定的接口，而是由它"当前方法和属性的集合"决定。Go 作为一种静态语言，通过接口实现了 `鸭子类型`，实际上是 Go 的编译器在其中作了隐匿的转换工作。



## 值接收者和指针接收者的区别

方法能给用户自定义的类型添加新的行为。它和函数的区别在于方法有一个接收者，给一个函数添加一个接收者，那么它就变成了方法。接收者可以是`值接收者`，也可以是`指针接收者`。

在调用方法的时候，值类型既可以调用`值接收者`的方法，也可以调用`指针接收者`的方法；指针类型既可以调用`指针接收者`的方法，也可以调用`值接收者`的方法。

也就是说，不管方法的接收者是什么类型，该类型的值和指针都可以调用，不必严格符合接收者的类型。？？？？

```golang
package main
import "fmt"

type Person struct {
	age int
}

func (p Person) howOld() int {
	return p.age
}

func (p *Person) growUp() {
	p.age += 1
}

func main() {
	// qcrao 是值类型
	qcrao := Person{age: 18}
	// 值类型 调用接收者也是值类型的方法
	fmt.Println(qcrao.howOld())
	// 值类型 调用接收者是指针类型的方法
	qcrao.growUp()
	fmt.Println(qcrao.howOld())
	// ----------------------
	// stefno 是指针类型
	stefno := &Person{age: 100}
	// 指针类型 调用接收者是值类型的方法
	fmt.Println(stefno.howOld())
	// 指针类型 调用接收者也是指针类型的方法
	stefno.growUp()
	fmt.Println(stefno.howOld())
}
// 输出
18
19
100
101
```



调用了 `growUp` 函数后，不管调用者是值类型还是指针类型，它的 `Age` 值都改变了。

实际上，当类型和方法的接收者类型不同时，其实是编译器在背后做了一些工作，用一个表格来呈现：

| -              | 值接收者                                                     | 指针接收者                                                   |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 值类型调用者   | 方法会使用调用者的一个副本，类似于“传值”                     | 使用值的引用来调用方法，上例中，`qcrao.growUp()` 实际上是 `(&qcrao).growUp()` |
| 指针类型调用者 | 指针被解引用为值，上例中，`stefno.howOld()` 实际上是 `(*stefno).howOld()` | 实际上也是“传值”，方法里的操作会影响到调用者，类似于指针传参，拷贝了一份指针 |



前面说过，不管接收者类型是值类型还是指针类型，都可以通过值类型或指针类型调用，这里面实际上通过语法糖起作用的。

**先说结论：实现了接收者是值类型的方法，相当于自动实现了接收者是指针类型的方法；而实现了接收者是指针类型的方法，不会自动生成对应接收者是值类型的方法**；

### 举个栗子

```golang
package main

import "fmt"

type coder interface {
	code()
	debug()
}

type Gopher struct {
	language string
}

func (p Gopher) code() {
	fmt.Printf("I am coding %s language\n", p.language)
}

func (p *Gopher) debug() {
	fmt.Printf("I am debuging %s language\n", p.language)
}
// 可以全部通过
func main() {
	var c coder = &Gopher{"Go"}
	c.code()
	c.debug()
}
// 无法debug
func main() {
	var c coder = Gopher{"Go"}
	c.code()
	c.debug()
}

```



造成这种不一致是有原因的

1. 对于一个接口，在赋值的时候，编译器会自动做隐式类型转换
2. 此接口无非包括值接收者或者是指针接收者，如果将指针对象传进去，对于值接收者，可以做解引用，不会影响到原来的真正对象值；但是如果将值对象进行隐式转换，对于值接收者当然没有问题，但是对于指针接收者我却无法获得其地址，所以无法影响到原本的对象。
3. 其次从函数功能上考虑，如果是值接收者，我完全可以自动生成一个指针接收者，因为都可以做到不影响原来的值；但是如果只实现了指针接收者的方法，无法自动生成一个值类型，因为可能要对原来的对象进行更改操作。
4. **结构体指针变量能够隐式地获取指向的结构体的，但是结构体却无法获取其对应的指针，结构体指针变量一般都是先找到对应的结构体，然后再执行对应的方法。这种性质归类于，Go语言在传递参数的时候都是传值的。**



### 两者分别在什么时候使用？

- 当我不想修改原来的值，就用值接收者
- 当我想修改原来的值，就用指针接收者



## iface和eface的区别是什么？

#### iface

```golang
type iface struct {
	tab  *itab
	data unsafe.Pointer
}

type itab struct {
	inter  *interfacetype
	_type  *_type
	link   *itab
	hash   uint32 // copy of _type.hash. Used for type switches.
	bad    bool   // type does not implement interface
	inhash bool   // has this itab been added to hash?
	unused [2]byte
	fun    [1]uintptr // variable sized
}
```

iface内部维护两个指针，一个指向堆内存区域，表示实际的数据，另一个指向**itab**类型:

1. inter描述了接口的类型
2. _type字段描述了实体的类型
3. `fun` 字段放置和接口方法对应的具体数据类型的**方法地址**，实现接口调用方法的动态分派，一般在每次给接口赋值发生转换时会更新此表，或者直接拿缓存的 itab。

**另外，你可能会觉得奇怪，为什么 `fun` 数组的大小为 1，要是接口定义了多个方法可怎么办？**

answer: 实际上，这里存储的是第一个方法的函数指针，如果有更多的方法，在它之后的内存空间里继续存储。从汇编角度来看，通过增加地址就能获取到这些函数指针，没什么影响。**顺便提一句，这些方法是按照函数名称的字典序进行排列的**。



再看一下 `interfacetype` 类型，它描述的是接口的类型：

```golang
type interfacetype struct {
	typ     _type
	pkgpath name
	mhdr    []imethod
}
```

1. _type实际上是Go语言中描述各种数据类型的结构体
2. mhdr，表示接口所定义的函数列表
3. pkgpath 记录定义了接口的包名

![iface 结构体全景](https://s2.loli.net/2023/12/26/y1hrRmXxCULQszq.png)





#### eface

```golang
type eface struct {
    _type *_type
    data  unsafe.Pointer
}
```

只维护了指向数据的指针和数据类型

##### 举个栗子

```golang
package main

import "fmt"

func main() {
	x := 200
	var any interface{} = x
	fmt.Println(any)

	g := Gopher{"Go"}
	var c coder = g
	fmt.Println(c)
}

type coder interface {
	code()
	debug()
}

type Gopher struct {
	language string
}

func (p Gopher) code() {
	fmt.Printf("I am coding %s language\n", p.language)
}

func (p Gopher) debug() {
	fmt.Printf("I am debuging %s language\n", p.language)
}
// 输出
200
{Go}

```

前者使用eface，后者使用iface，主要区别在于接口是否真正的存在具体的函数。



## 接口的动态类型和动态值

从源码里可以看到：`iface`包含两个字段：`tab` 是接口表指针，指向类型信息；`data` 是数据指针，则指向具体的数据。它们分别被称为`动态类型`和`动态值`。而接口值包括`动态类型`和`动态值`。

### 引申1 接口类型和nil作比较

 接口值得零值指的是**动态类型**和**动态值**都是nil

```golang
package main

import "fmt"

type Coder interface {
	code()
}

type Gopher struct {
	name string
}

func (g Gopher) code() {
	fmt.Printf("%s is coding\n", g.name)
}

func main() {
	var c Coder
	fmt.Println(c == nil)
	fmt.Printf("c: %T, %v\n", c, c)

	var g *Gopher
	fmt.Println(g == nil)

	c = g
	fmt.Println(c == nil)
	fmt.Printf("c: %T, %v\n", c, c)
}
// 输出
true
c: <nil>, <nil>
true
false
c: *main.Gopher, <nil>

```

最后一个为false，原因是将g赋值给c，那么c就具有了动态类型，所以不是nil了



### 如何打印出接口的动态类型和值？

```golang
package main

import (
	"unsafe"
	"fmt"
)

type iface struct {
	itab, data uintptr
}

func main() {
	var a interface{} = nil

	var b interface{} = (*int)(nil)

	x := 5
	var c interface{} = (*int)(&x)
	
	ia := *(*iface)(unsafe.Pointer(&a))
	ib := *(*iface)(unsafe.Pointer(&b))
	ic := *(*iface)(unsafe.Pointer(&c))

	fmt.Println(ia, ib, ic)

	fmt.Println(*(*int)(unsafe.Pointer(ic.data)))
}
// 输出
{0 0} {17426912 0} {17426912 842350714568}
5
```

代码里直接定义了一个 `iface` 结构体，用两个指针来描述 `itab` 和 `data`，之后将 a, b, c 在内存中的内容强制解释成我们自定义的 `iface`。最后就可以打印出动态类型和动态值的地址。

a 的动态类型和动态值的地址均为 0，也就是 nil；b 的动态类型和 c 的动态类型一致，都是 `*int`；最后，c 的动态值为 5。

## 编译器自动检测类型是否实现接口

经常看到一些开源库里会有一些类似下面这种奇怪的用法：

```golang
var _ io.Writer = (*myWriter)(nil)
```

这时候会有点懵，不知道作者想要干什么，实际上这就是此问题的答案。编译器会由此检查 `*myWriter` 类型是否实现了 `io.Writer` 接口。io.Writer本身是一个接口，将一个类型赋值给某个接口，编译器会检查该类型是否完全实现该接口的所有函数.



## 接口的构造过程是什么样的？

// TODO

不会，再说吧，太底层了。。。



## 类型转换和断言的区别？

我们知道，Go语言中不允许隐式类型转换，也就是`=`两边，不允许出现类型不相同的变量。

`类型转换`，`类型断言`本质都是把一个类型转换成另一个类型。不同之处在于，**类型断言是对接口变量进行的操作！**



### 类型转换

对于`类型转换`而言，转换前后的两个类型要相互兼容才行。类型转换的语法为：

<结果类型> := <目标类型> ( <表达式> )





### 类型断言

因为空接口没有实现任何函数，那么Go语言中的所有数据类型都相当于实现了空接口。当一个函数的形参是 **interface{}**，那么在函数中，需要对形参进行断言，从而得到它的真实类型。

断言的语法为:

```go
<目标类型的值>，<布尔参数> := <表达式>.( 目标类型 ) // 安全类型断言 
<目标类型的值> := <表达式>.( 目标类型 )　　//非安全类型断言
package main

import "fmt"

type Student struct {
	Name string
	Age int
}

func main() {
	var i interface{} = new(Student)
	s := i.(Student)
	
	fmt.Println(s)
}
// panic: interface conversion: interface {} is *main.Student, not main.Student

```

直接 `panic` 了，这是因为 `i` 是 `*Student` 类型，并非 `Student` 类型，断言失败。这里直接发生了 `panic`，线上代码可能并不适合这样做，可以采用“安全断言”的语法：

```golang
func main() {
	var i interface{} = new(Student)
	s, ok := i.(Student)
	if ok {
		fmt.Println(s)
	}
}
```

这样就算断言失败，也不会触发panic



## 接口转换的原理

1. 当判定一种类型是否满足某个接口时，Go 使用类型的方法集和接口所需要的方法集进行匹配，如果类型的方法集完全包含接口的方法集，则可认为该类型实现了该接口。
2. 例如某类型有 `m` 个方法，某接口有 `n` 个方法，则很容易知道这种判定的时间复杂度为 `O(mn)`，Go 会对方法集的函数按照函数名的字典序进行排序，所以实际的时间复杂度为 `O(m+n)`。

// TODO 接口如何进行转换？



## 如何用接口是实现多态？

什么是多态?

1. 一种类型具有多种类型的能力
2. 允许不同的对象对同一消息做出灵活的反应
3. 以一种通用的方式对待使用的对象
4. 非动态语言必须通过继承和接口的方式来实现

### 举个栗子

```golang
package main

import "fmt"

func whatJob(p Person) {
	p.job()
}

func growUp(p Person) {
	p.growUp()
}

type Person interface {
	job()
	growUp()
}

type Student struct {
	age int
}

func (p Student) job() {
	fmt.Println("I am a student.")
	return
}

func (p *Student) growUp() {
	p.age += 1
	return
}

type Programmer struct {
	age int
}

func (p Programmer) job() {
	fmt.Println("I am a programmer.")
	return
}

func (p Programmer) growUp() {
	// 程序员老得太快 ^_^
	p.age += 10
	return
}

func main() {
	qcrao := Student{age: 18}
	whatJob(&qcrao)

	growUp(&qcrao)
	fmt.Println(qcrao)

	stefno := Programmer{age: 100}
	whatJob(stefno)

	growUp(stefno)
	fmt.Println(stefno)
}

```

Student和Programmer都实现了Person接口，因为它俩实现了Person接口的所有函数，再将它们分别传入whatJob 和 growUp函数中，各自调用接口函数，实际执行的时候看最终传入的是什么类型，调用的就是实体类型实现的函数，所以不同对象对同一消息就有不同的表现了，这就叫做**多态**.

更深入一点来说的话，在函数 `whatJob()` 或者 `growUp()` 内部，接口 `person` 绑定了实体类型 `*Student` 或者 `Programmer`。根据前面分析的 `iface` 源码，这里会直接调用 `fun` 里保存的函数，类似于： `s.tab->fun[0]`，而因为 `fun` 数组里保存的是实体类型实现的函数，所以当函数传入不同的实体类型时，调用的实际上是不同的函数实现，从而实现多态。



## Go接口与C++接口有何异同？

接口定义了一种规范，描述了类的行为和功能，而不做具体实现。

C++ 的接口是使用抽象类来实现的，如果类中至少有一个函数被声明为纯虚函数，则这个类就是抽象类。纯虚函数是通过在声明中使用 “= 0” 来指定的。例如：

```C++
class Shape
{
   public:
      // 纯虚函数
      virtual double getArea() = 0;
   private:
      string name;      // 名称
};
```



设计抽象类的目的，是为了给其他类提供一个可以继承的适当的基类。抽象类不能被用于实例化对象，它只能作为接口使用。

派生类需要明确地声明它继承自基类，并且需要实现基类中所有的纯虚函数。

C++ 定义接口的方式称为“侵入式”，而 Go 采用的是 “非侵入式”，不需要显式声明，只需要实现接口定义的函数，编译器自动会识别。

C++ 和 Go 在定义接口方式上的不同，也导致了底层实现上的不同。C++ 通过虚函数表来实现基类调用派生类的函数；而 Go 通过 `itab` 中的 `fun` 字段来实现接口变量调用实体类型的函数。C++ 中的虚函数表是在编译期生成的；而 Go 的 `itab` 中的 `fun` 字段是在运行期间动态生成的。原因在于，Go 中实体类型可能会无意中实现 N 多接口，很多接口并不是本来需要的，所以不能为类型实现的所有接口都生成一个 `itab`， 这也是“非侵入式”带来的影响；这在 C++ 中是不存在的，因为派生需要显示声明它继承自哪个基类。

总结:

1. C++中抽象类中可以包含属性，Go不能
2. C++定义接口的方式是侵入式，Go是非侵入式，区别在于是否需要显示声明
3. C++的虚函数是在编译期间生成的，Go的**itab**中的**fun** 字段是在运行期间动态生成的









