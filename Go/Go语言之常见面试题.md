# Go语言之常见面试题



## 基础语法

- = 和 := 的区别

  - := 是声明加赋值，=是仅赋值

- 指针的作用?

  - 用来保存变量的地址

- Go允许多个返回值吗？

  - 允许，不过对于不同类型的返回值要进行类型区分

- Go有异常类型吗？

  - Go没有异常类型，只有错误类型(Error)，通常使用返回值来表示异常状态

- 什么是协程？

  - Goroutine 是与其他函数或者方法同时运行的函数或者方法。 Goroutine可以被认为是轻量级的线程。与线程相比，创建Goroutine的开销很小。Go应用程序同时运行数千个Goroutine是非常常见的做法。

- 如何高效的拼接字符串？

  - Go语言中，字符串是只读的，也就意味着每次修改操作都会创建一个新的字符串。如果需要拼接多次，应该使用 $strings.Builder$，最小化内存拷贝次数。

    ```go
    var str strings.Builder
    for i := 0; i < 1000; i++ {
        str.WriteString("a")
    }
    fmt.Println(str.String())
    ```

- 什么是rune类型？

  - ASCII 码只需要 7 bit 就可以完整地表示，但只能表示英文字母在内的128个字符，为了表示世界上大部分的文字系统，发明了 Unicode， 它是ASCII的超集，包含世界上书写系统中存在的所有字符，并为每个代码分配一个标准编号（称为Unicode CodePoint），在 Go 语言中称之为 rune，是 int32 类型的别名。Go 语言中，字符串的底层表示是 byte (8 bit) 序列，而非 rune (32 bit) 序列。例如下面的例子中 `语` 和 `言` 使用 UTF-8 编码后各占 3 个 byte，因此 `len("Go语言")` 等于 8，当然我们也可以将字符串转换为 rune 序列。

    ```go
    fmt.Println(len("Go语言")) // 8
    fmt.Println(len([]rune("Go语言"))) // 4
    ```



- 如何判断map中是否包含某个key？

  - `dict["foo"]` 有 2 个返回值，val 和 ok，如果 ok 等于 `true`，则说明 dict 包含 key `"foo"`，val 将被赋予 `"foo"` 对应的值。

    ```go
    if val, ok := dict["foo"]; ok {
        //do something here
    }
    ```

  1. `fmt.Println(len("Go语言")) // 8`

     这里的字符串 `"Go语言"` 包含两个中文字符，每个中文字符由三个字节组成（UTF-8 编码）。此外，还有两个英文字符 "G" 和 "o"，每个英文字符占用一个字节。因此，总的字节数为 2 * 3 + 2 * 1 = 8。

  2. `fmt.Println(len([]rune("Go语言"))) // 4`

     这里使用了 `[]rune` 转换，将字符串转换为 Unicode 字符（rune）的切片。每个 Unicode 字符都被视为一个元素。由于字符串中有两个中文字符和两个英文字符，所以转换后的切片长度为 4。

     总结起来，字符串的长度是根据字节数计算的，而使用 `[]rune` 转换后的切片长度是根据字符数计算的。在处理包含非 ASCII 字符的字符串时，需要注意这两者之间的区别。

     

- Go支持默认参数或可选参数吗？

  - Go 语言不支持可选参数（python 支持），也不支持方法重载（java支持）。

- defer的执行顺序

  - 多个 defer 语句，遵从后进先出(Last In First Out，LIFO)的原则，最后声明的 defer 语句，最先得到执行。
  - defer 在 return 语句之后执行，但在函数退出之前，defer 可以修改返回值。

  例如：

  ```go
  func test() int {
  	i := 0
  	defer func() {
  		fmt.Println("defer1")
  	}()
  	defer func() {
  		i += 1
  		fmt.Println("defer2")
  	}()
  	return i
  }
  
  func main() {
  	fmt.Println("return", test())
  }
  // defer2
  // defer1
  // return 0
  ```

  这个例子中，可以看到 defer 的执行顺序：后进先出。但是返回值并没有被修改，这是由于 Go 的返回机制决定的，执行 return 语句后，Go 会创建一个临时变量保存返回值，因此，defer 语句修改了局部变量 i，并没有修改返回值。那如果是有名的返回值呢？

  ```go
  func test() (i int) {
  	i = 0
  	defer func() {
  		i += 1
  		fmt.Println("defer2")
  	}()
  	return i
  }
  
  func main() {
  	fmt.Println("return", test())
  }
  // defer2
  // return 1
  ```

  这个例子中，返回值被修改了。对于有名返回值的函数，执行 return 语句时，并不会再创建临时变量保存，因此，defer 语句修改了 i，即对返回值产生了影响。

- Go语言tag的用处？

  - tag可以理解为 struct 字段的注解，可以用来定义字段的一个或者多个属性。框架/工具可以通过反射获取到某个字段定义的属性，采取相应的处理方式。tag丰富了代码的语义，增强了灵活性。

    例如：

    ```go
    package main
    
    import "fmt"
    import "encoding/json"
    
    type Stu struct {
    	Name string `json:"stu_name"`
    	ID   string `json:"stu_id"`
    	Age  int    `json:"-"`
    }
    
    func main() {
    	buf, _ := json.Marshal(Stu{"Tom", "t001", 18})
    	fmt.Printf("%s\n", buf)
    }
    ```

​			这个例子使用 tag 定义了结构体字段与 json 字段的转换关系，Name -> `stu_name`, ID -> `stu_id`，忽略 Age 字段。很方便地实现了 Go 结构体与不同规范			的 json 文本之间的转换。

- 字符串打印时，`%v`和`%+v`的区别?

  - `%v` 和 `%+v` 都可以用来打印 struct 的值，区别在于 `%v` 仅打印各个字段的值，`%+v` 还会打印各个字段的名称。

    ```go
    type Stu struct {
    	Name string
    }
    
    func main() {
    	fmt.Printf("%v\n", Stu{"Tom"}) // {Tom}
    	fmt.Printf("%+v\n", Stu{"Tom"}) // {Name:Tom}
    }
    ```

    但如果结构体定义了 `String()` 方法，`%v` 和 `%+v` 都会调用 `String()` 覆盖默认值。

- Go语言中如何表示枚举值(enums)

  - 通常使用常量(const) 来表示枚举值。

    ```go
    type StuType int32
    
    const (
    	Type1 StuType = iota
    	Type2
    	Type3
    	Type4
    )
    
    func main() {
    	fmt.Println(Type1, Type2, Type3, Type4) // 0, 1, 2, 3
    }
    ```

  - `iota` 是一个在 `const` 声明中隐式递增的常量生成器

- 空 struct{}的用途

  - 使用空结构体 struct{} 可以节省内存，一般作为占位符使用，表明这里并不需要一个值。

    ```go
    fmt.Println(unsafe.Sizeof(struct{}{})) // 0
    ```

    比如使用 map 表示集合时，只关注 key，value 可以使用 struct{} 作为占位符。如果使用其他类型作为占位符，例如 int，bool，不仅浪费了内存，而且容易引起歧义。

    ```go
    type Set map[string]struct{}
    
    func main() {
    	set := make(Set)
    
    	for _, item := range []string{"A", "A", "B", "C"} {
    		set[item] = struct{}{}
    	}
    	fmt.Println(len(set)) // 3
    	if _, ok := set["A"]; ok {
    		fmt.Println("A exists") // A exists
    	}
    }
    ```

    再比如，使用信道(channel)控制并发时，我们只是需要一个信号，但并不需要传递值，这个时候，也可以使用 struct{} 代替。

    ```go
    func main() {
    	ch := make(chan struct{}, 1)
    	go func() {
    		<-ch
    		// do something
    	}()
    	ch <- struct{}{}
    	// ...
    }
    ```

    再比如，声明只包含方法的结构体。

    ```go
    type Lamp struct{}
    
    func (l Lamp) On() {
            println("On")
    
    }
    func (l Lamp) Off() {
            println("Off")
    }
    ```

## 实现原理

### init()函数是什么时候执行的？

init()函数是Go程序初始化的一部分。Go程序初始化先于main函数，由routime初始化每个导入的包，初始化顺序不是按照从上到下的导入顺序，而是按照解析的依赖关系，没有依赖的包最先初始化。

每个包首先初始化包作用域的常量和变量(常量优先于变量)，然后执行包的`init()` 函数。同一个包，甚至是同一个源文件可以有多个`init()`函数。`init()`函数没有入参和返回值，不能被其他函数调用，同一个包内多个`init()`函数的执行顺序不做保证。

一句话总结 $import -> const -> var -> init() -> main$

### Go语言的局部变量分配在栈上还是在堆上？

由编译器决定。Go语言编译器会自动决定把一个变量放在栈上还是堆上，编译器会做逃逸分析(escape analysis)，当发现变量的作用域没有超出函数范围，就可以在栈上，反之必须分配在堆上。

```go
    func foo() *int {
        v := 11
        return &v
    }

    func main() {
        m := foo()
        println(*m) // 11
    }
```
`foo()` 函数中，如果 v 分配在栈上，foo 函数返回时，`&v` 就不存在了，但是这段函数是能够正常运行的。Go 编译器发现 v 的引用脱离了 foo 的作用域，会将其分配在堆上。因此，main 函数中仍能够正常访问该值。

### 两个interface{}可以比较吗

Go语言中，interface的内部实现包含了两个字段，类型`T`和`V`,interface可以使用 `==` 或者 `!=` 比较。两个interface相等有以下两种情况

1. 两个interface都等于 nil(此时V和T都处于uset状态)

2. 类型T相同，对应的值V相等

   ```go
   type Stu struct {
   	Name string
   }
   
   type StuInt interface{}
   
   func main() {
   	var stu1, stu2 StuInt = &Stu{"Tom"}, &Stu{"Tom"}
   	var stu3, stu4 StuInt = Stu{"Tom"}, Stu{"Tom"}
   	fmt.Println(stu1 == stu2) // false
   	fmt.Println(stu3 == stu4) // true
   }
   ```

第一个为false是因为，两个接口类型虽然都是指针类型，但是值是地址，地址不同

第二个为true原因是因为，两个接口的类型都是结构体，值都是Tom，所以相同

### 两个nil可能不相等吗

**可能**，接口(interface)是对于非接口值（例如指针，struct）的封装，内部实现包含两个字段，类型T和值V，一个接口等于nil，当且仅当T和V都处于uset的状态

- 两个接口比较时候，会先比较T再比较V
- 接口值与非接口值比较时，会先将非接口值尝试转换成接口值，再比较。

```go
func main() {
	var p *int = nil
	var i interface{} = p
	fmt.Println(i == p) // true
	fmt.Println(p == nil) // true
	fmt.Println(i == nil) // false
}
```



第一个比较相等是因为，将p赋值给i，会先将p转成接口类型，再赋值给i，此时i也是一个类型为*int，值为nil的接口，两者相比，一定相等

第二个比较相等是因为直接比较的是值，p的值是nil，所以两者相等。

第三个比较不相等是因为，接口值与非接口值比较时，会先将非接口值尝试转换成接口值，也就是nil现在变成了interface{T= nil, V = nil}，但是i是

interface{T = *int, V = nil}，其中类型不同，所以两者不相同。

### 简述Go语言GC(垃圾回收)的工作原理

最常见的垃圾回收算法有标记清除(Mark-Sweep)和引用计数(Reference Count), Go语言采用的是标记清除法。并在此基础上使用了三色标记法和写屏障技术，提高了效率。

标记清除收集器是跟踪式垃圾收集器，其执行过程可以分成标记和清除两个阶段：

- 标记阶段-从根对象出发查找并标记堆中所有存活的对象
- 清除阶段-遍历堆中的全部对象，回收未被标记的垃圾对象并将回收的内存加入空闲链表

标记清除算法的一大问题是在于标记期间，需要暂停程序(stop the world, STW), 标记结束之后，用户程序才可以继续执行。为了能够异步执行，减少STW的时间，Go语言采用了三色标记法。

三色标记法将程序中的对象分为白色，黑色和灰色三类。

- 白色：不确定对象
- 灰色：存活对象，子对象待处理
- 黑色：存活对象

标记开始时候，所有对象加入白色集合，这个过程需要(STW)。首先将根对象标记为灰色，加入灰色集合，垃圾收集器取出一个灰色对象，将其标记为黑色，并将其指向的对象标记为灰色，加入灰色集合。重复这个过程，直到灰色集合为空为止，标记阶段结束。那么白色对象即可需要清理的对象，而黑色对象均为根可达的对象，不能被处理。

三色标记法因为多了一个白色的状态来存放不确定对象，所以后续的标记阶段可以并发的执行。当然并发执行的代价是可能会造成一些遗漏，因为那些早先被标记为黑色的对象可能目前已经是不可达的了。所以三色标记法是一个false negative （假阴性）的算法。



三色标记法并发执行仍然存在一个问题，即在GC过程中，对象指针发生了改变。比如下面这个样子：

```tex
A (黑) -> B (灰) -> C (白) -> D (白)
```

正常情况下，D对象最终会被标记成黑色，不应被回收。但在标记和用户程序并发执行的过程中，用户程序删除了C对于D的引用，而A获得了D的引用。标记继续进行，D就没有机会被标记成黑色了(A已经处理过，这一轮不会再被处理)。

为了解决这个问题，Go使用了内存屏障技术，它是在用户程序读取对象、创建对象以及更新对象指针时执行的一段代码，类似于一个钩子。垃圾收集器使用了(Write Barrier) 技术，当对象新增或更新时，会将其着色为灰色。这样即使与用户程序并发执行，对象的引用发生改变时，垃圾收集器也能正确处理了。



一次完整的GC分为四个阶段:

1. 标记准备(Mark Setup，需要STW)，打开写屏障(Write Barrier)
2. 使用三色标记法标记(Marking, 并发)
3. 标记结束(Mark Termination, 需STW) ，关闭写屏障
4. 清理(Sweeping, 并发执行)

### 函数返回局部变量的指针是否安全？

这在Go中是安全的，Go编译器将会对每个局部变量进行逃逸分析。如果发现局部变量的作用域超过该函数，则不会将内存分配到栈上，而是分配到堆上。



### 非接口的任意类型T()都能够调用 *T的方法吗？反过来呢？

- 一个T类型的值可以调用*T类型声明的方法，但是仅当此T的值是可寻址（addressable）的情况下。编译器在调用指针属主方法前，会自动取此T值的地址。因为不是任何的T值都是可寻址的，所以并非任何T值都能够调用类型为 *T 声明的方法。

- 反过来，一个*T类型的值可以调用类型为T声明的方法，这是因为解引用指针总是合法的。事实上，你可以认为对于每一个为类型T声明的方法，编译器都会为类型 *T 自动隐式声明一个同名和同签名的方法。

哪些值是不可寻址的呢？

- 字符串中的字节
- map对象中的元素(slice对象中的元素是可以寻址的，slice的底层是数组)
- 常量
- 包级别的函数

举一个列子，定义类型T，并且为类型*T声明一个方法hello()，变量t1可以调用该方法，但是常量t2调用该方法时，会产生编译错误

```go
type T string

func (t *T) hello() {
	fmt.Println("hello")
}

func main() {
	var t1 T = "ABC"
	t1.hello() // hello
	const t2 T = "ABC"
	t2.hello() // error: cannot call pointer method on t
}
```



## 并发编程

### 无缓冲的channel和有缓冲的channel的区别？

对于无缓冲的channel，发送方将阻塞该信道，直到接收方从该信道接收到数据为止，而接收方也将阻塞该信道，直到发送方发送数据到该信道为止

对有缓冲的channel，发送方在没有空插槽(缓冲区使用完的情况下阻塞，而接收方在信道为空的情况下阻塞)



### 什么是协程泄露？

协程泄露是指协程创建后，长时间得不到释放，并且还在不断地创建新的协程，最终导致内存耗尽，程序崩溃。常见的导致协程泄露的场景有以下几种：

- 缺少接收器，导致发送阻塞
- 缺少发送器，导致接收阻塞
- 死锁
  - 两个或者两个以上的协程在执行的过程中，由于竞争资源或者由于彼此通信而造成阻塞，这种情况下，也会导致阻塞
- 无限循环
  - 如果某个协程为了请求服务器响应，采用了无限重试的方法，发送HTTP请求，直到获取数据。那如果服务器宕机，则永远不可达，导致协程不能退出，导致泄露

### Go可以限制运行时操作系统线程的数量吗？

可以使用环境变量 `GOMAXPROCS` 或 `runtime.GOMAXPROCS(num int)` 设置，例如：

```
runtime.GOMAXPROCS(1) // 限制同时执行Go代码的操作系统线程数为 1
```

从官方文档的解释可以看到，`GOMAXPROCS` 限制的是同时执行用户态 Go 代码的操作系统线程的数量，但是对于被系统调用阻塞的线程数量是没有限制的。`GOMAXPROCS` 的默认值等于 CPU 的逻辑核数，同一时间，一个核只能绑定一个线程，然后运行被调度的协程。因此对于 CPU 密集型的任务，若该值过大，例如设置为 CPU 逻辑核数的 2 倍，会增加线程切换的开销，降低性能。对于 I/O 密集型应用，适当地调大该值，可以提高 I/O 吞吐率。
