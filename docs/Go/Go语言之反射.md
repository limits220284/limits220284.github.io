# Go语言之反射

## 1、什么是反射？

### 反射的定义

在计算机科学中，反射指的是计算机程序在运行时(Runtime) 可以访问，检测和修改它本身状态或行为的一种能力。用比喻来说，反射就是程序在运行的时候能够"观察"并且修改自己的行为。

### 什么叫做访问、检测和修改它本身的状态和行为？

实际上它的本质是程序在运行期间探知对象的类型信息和内存结构。不用反射能行吗？也是可以的，需要使用汇编语言，直接和内层打交道，可以获取任何信息。但是当迁移到高级语言上来的时候，就不行了！只能通过反射达到此项功能。

在Go语言中，**提供了一种机制在运行时更新变量和检查它们的值、调用它们的方法，但是在编译时并不知道这些变量的具体类型，这称为反射机制**

## 2、什么情况下需要使用反射？

1. 不能明确接口调用哪个函数，需要根据传入的参数在运行时决定。
2. 不能明确传入函数的参数类型，需要在运行时处理任意对象。

### 不推荐使用反射的理由有哪些？

1. 与反射有关的代码通常是难以阅读的。在软件工程中，代码可读性也是一个非常重要的指标。
2. Go语言作为一门静态语言，编码过程中，编译器提前能够发现一些类型错误，但是对于反射代码是无能为力的。所以包含反射的代码，很可能会运行很久，才会出错，这时候经常是直接panic，可能造成比较严重的后果
3. 反射对于性能影响还是比较大的，比正常的代码速度慢到一到两个数量级。所以，对于一个项目中处于运行效率关键位置的代码，尽量避免使用反射特性。

## 3、Go语言如何实现反射？

interface{}，它是Go语言实现抽象的一个非常强大的工具。当向接口赋予一个实体类型的时候，接口会存储实体的类型信息，反射就是通过接口的类型信息实现的，反射建立在类型的基础上。

Go语言在reflect包里定义了各种类型，实现了反射的各种函数，通过它们可以在运行时检测类型的信息、改变类型的值。

### types和interface

Go语言中，每个变量都有一个静态类型，在编译阶段就确定了的，比如int，float64，[]int等等。**注意，这个类型是声明时候的类型，不是底层数据结构。**

```go
type iface struct {
 tab  *itab
 data unsafe.Pointer
}

type itab struct {
 inter  *interfacetype
 _type  *_type
 link   *itab
 hash   uint32
 bad    bool
 inhash bool
 unused [2]byte
 fun    [1]uintptr
}
```

其中 `itab` 由具体类型 `_type` 以及 `interfacetype` 组成。`_type` 表示具体类型，而 `interfacetype` 则表示具体类型实现的接口类型。

先明确一点：**接口变量可以存储任何实现了接口定义的所有方法的变量。**



### 反射的基本函数

 reflect包里定义了一个接口和一个结构体，即reflect.Type 和reflect.Value，**它们提供很多函数来获取存储在接口里的类型信息**。

reflect.Type主要提供关于类型相关的信息，所以它和_type关联比较紧密；

reflect.Value则结合_type和data两者，因此程序员可以获取甚至改变类型的值；

reflect包中提供了两个基础的关于反射的函数来获取上述接口和结构体：

```go
func TypeOf(i interface{}) Type 
func ValueOf(i interface{}) Value
```

### TypeOf函数

`TypeOf` 函数用来提取一个接口中值的类型信息。由于它的输入参数是一个空的 `interface{}`，调用此函数时，实参会先被转化为 `interface{}`类型。这样，实参的类型信息、方法集、值信息都存储到 `interface{}` 变量里了。

```go
func TypeOf(i interface{}) Type {
 eface := *(*emptyInterface)(unsafe.Pointer(&i))
 return toType(eface.typ)
}

type emptyInterface struct {
 typ  *rtype
 word unsafe.Pointer
}

func toType(t *rtype) Type {
 if t == nil {
  return nil
 }
 return t
}
```

注意，返回值 `Type` 实际上是一个接口，定义了很多方法，用来获取类型相关的各种信息，而 `*rtype` 实现了 `Type` 接口。

```go
type Type interface {
    // 所有的类型都可以调用下面这些函数

 // 此类型的变量对齐后所占用的字节数
 Align() int
 
 // 如果是 struct 的字段，对齐后占用的字节数
 FieldAlign() int

 // 返回类型方法集里的第 `i` (传入的参数)个方法
 Method(int) Method

 // 通过名称获取方法
 MethodByName(string) (Method, bool)

 // 获取类型方法集里导出的方法个数
 NumMethod() int

 // 类型名称
 Name() string

 // 返回类型所在的路径，如：encoding/base64
 PkgPath() string

 // 返回类型的大小，和 unsafe.Sizeof 功能类似
 Size() uintptr

 // 返回类型的字符串表示形式
 String() string

 // 返回类型的类型值
 Kind() Kind

 // 类型是否实现了接口 u
 Implements(u Type) bool

 // 是否可以赋值给 u
 AssignableTo(u Type) bool

 // 是否可以类型转换成 u
 ConvertibleTo(u Type) bool

 // 类型是否可以比较
 Comparable() bool

 // 下面这些函数只有特定类型可以调用
 // 如：Key, Elem 两个方法就只能是 Map 类型才能调用
 
 // 类型所占据的位数
 Bits() int

 // 返回通道的方向，只能是 chan 类型调用
 ChanDir() ChanDir

 // 返回类型是否是可变参数，只能是 func 类型调用
 // 比如 t 是类型 func(x int, y ... float64)
 // 那么 t.IsVariadic() == true
 IsVariadic() bool

 // 返回内部子元素类型，只能由类型 Array, Chan, Map, Ptr, or Slice 调用
 Elem() Type

 // 返回结构体类型的第 i 个字段，只能是结构体类型调用
 // 如果 i 超过了总字段数，就会 panic
 Field(i int) StructField

 // 返回嵌套的结构体的字段
 FieldByIndex(index []int) StructField

 // 通过字段名称获取字段
 FieldByName(name string) (StructField, bool)

 // FieldByNameFunc returns the struct field with a name
 // 返回名称符合 func 函数的字段
 FieldByNameFunc(match func(string) bool) (StructField, bool)

 // 获取函数类型的第 i 个参数的类型
 In(i int) Type

 // 返回 map 的 key 类型，只能由类型 map 调用
 Key() Type

 // 返回 Array 的长度，只能由类型 Array 调用
 Len() int

 // 返回类型字段的数量，只能由类型 Struct 调用
 NumField() int

 // 返回函数类型的输入参数个数
 NumIn() int

 // 返回函数类型的返回值个数
 NumOut() int

 // 返回函数类型的第 i 个值的类型
 Out(i int) Type

    // 返回类型结构体的相同部分
 common() *rtype
 
 // 返回类型结构体的不同部分
 uncommon() *uncommonType
}
```

注意到 `Type` 方法集的倒数第二个方法 `common` 返回的 `rtype`类型，它和上一篇文章讲到的 `_type` 是一回事，而且源代码里也注释了：两边要保持同步：

```go
// rtype must be kept in sync with ../runtime/type.go:/^type._type.
type rtype struct {
 size       uintptr
 ptrdata    uintptr
 hash       uint32
 tflag      tflag
 align      uint8
 fieldAlign uint8
 kind       uint8
 alg        *typeAlg
 gcdata     *byte
 str        nameOff
 ptrToThis  typeOff
}
```

比如下面的 `arrayType` 和 `chanType` 都包含 `rytpe`，而前者还包含 slice，len 等和数组相关的信息；后者则包含 `dir` 表示通道方向的信息。

```go
// arrayType represents a fixed array type.
type arrayType struct {
 rtype `reflect:"array"`
 elem  *rtype // array element type
 slice *rtype // slice type
 len   uintptr
}

// chanType represents a channel type.
type chanType struct {
 rtype `reflect:"chan"`
 elem  *rtype  // channel element type
 dir   uintptr // channel direction (ChanDir)
}
```

注意到，`Type` 接口实现了 `String()` 函数，满足 `fmt.Stringer` 接口，因此使用 `fmt.Println` 打印的时候，输出的是 `String()` 的结果。另外，`fmt.Printf()` 函数，如果使用 `%T` 来作为格式参数，输出的是 `reflect.TypeOf` 的结果，也就是动态类型。例如：

```go
fmt.Printf("%T", 3) // int
```

### valueOf函数

```go
func ValueOf(i interface{}) Value {
 if i == nil {
  return Value{}
 }
   // ……
 return unpackEface(i)
}

// 分解 eface
func unpackEface(i interface{}) Value {
 e := (*emptyInterface)(unsafe.Pointer(&i))

 t := e.typ
 if t == nil {
  return Value{}
 }
 
 f := flag(t.Kind())
 if ifaceIndir(t) {
  f |= flagIndir
 }
 return Value{t, e.word, f}
}
```

`ValueOf` 函数的返回值，包含类型结构体指针、真实数据的地址、标志位。

Value 结构体定义了很多方法，通过这些方法可以直接操作 Value 字段 ptr 所指向的实际数据：

```go
// 设置切片的 len 字段，如果类型不是切片，就会panic
 func (v Value) SetLen(n int)
 
 // 设置切片的 cap 字段
 func (v Value) SetCap(n int)
 
 // 设置字典的 kv
 func (v Value) SetMapIndex(key, val Value)

 // 返回切片、字符串、数组的索引 i 处的值
 func (v Value) Index(i int) Value
 
 // 根据名称获取结构体的内部字段值
 func (v Value) FieldByName(name string) Value
 
 // 用来获取 int 类型的值
func (v Value) Int() int64

// 用来获取结构体字段（成员）数量
func (v Value) NumField() int

// 尝试向通道发送数据（不会阻塞）
func (v Value) TrySend(x reflect.Value) bool

// 通过参数列表 in 调用 v 值所代表的函数（或方法
func (v Value) Call(in []Value) (r []Value) 

// 调用变参长度可变的函数
func (v Value) CallSlice(in []Value) []Value 
```

另外，通过 `Type()` 方法和 `Interface()` 方法可以打通 `interface`、`Type`、`Value` 三者。Type() 方法也可以返回变量的类型信息，与 reflect.TypeOf() 函数等价。Interface() 方法可以将 Value 还原成原来的 interface;

<img src="https://s2.loli.net/2023/12/27/POlwFGT7kJbWEcy.png" alt="三者关系" style="zoom: 67%;" />

总结:

1. TypeOf()返回了一个接口，这个接口定义了一系列的方法，利用这些方法可以获取关于类型的所有的信息；
2. ValueOf()函数返回的是一个结构体变量，包含类型信息以及实际值；

用一张图来串一下:

<img src="https://s2.loli.net/2023/12/27/Jl7BbErGtMpSDXj.png" alt="value rtype" style="zoom: 67%;" />

上图中，`rtye` 实现了 `Type` 接口，是所有类型的公共部分。emptyface 结构体和 eface 其实是一个东西，而 rtype 其实和 _type 是一个东西，只是一些字段稍微有点差别，比如 emptyface 的 word 字段和 eface 的 data 字段名称不同，但是数据型是一样的。

### 反射的三大定律

#### 第一定律

- **反射是一种检测存储在interface中的类型和值 机制。这可以通过TypeOf函数和ValueOf函数得到；**

#### 第二定律

- **它将ValueOf的返回值通过Interface()函数反向转变成interface变量；**

调用 [`reflect.Value.Interface`](https://draveness.me/golang/tree/reflect.Value.Interface) 方法只能获得 `interface{}` 类型的变量，如果想要将其还原成最原始的状态还需要经过如下所示的显式类型转换：

```go
v := reflect.ValueOf(1)
v.Interface().(int)
```

从反射对象到接口值的过程是从接口值到反射对象的镜面过程，两个过程都需要经历两次转换：

- 从接口值到反射对象：
  - 从基本类型到接口类型的类型转换；
  - 从接口类型到反射对象的转换；
- 从反射对象到接口值：
  - 反射对象转换成接口类型；
  - 通过显式类型转换变成原始类型；

![golang-bidirectional-reflection](https://s2.loli.net/2023/11/27/pwyShRNKriZM9QF.png)

#### 第三定律

- 如果需要操作一个反射变量，那么它必须是可设置的。反射变量可设置的本质是它存储了原变量本身，这样对反射变量操作，就会反映到原变量本身；反之，如果反射变量不能代表原变量，那么操作了反射变量，不会对原变量产生任何影响，这会给读者带来疑惑；

```go
var x float64 = 3.4
v := reflect.ValueOf(x)
v.SetFloat(7.1) // Error: will panic.
```

上面的代码会产生panic，原因是反射变量v不能代表x本身，为什么？因为调用reflect.ValueOf(x)这一行代码的时候，传入的参数在函数的内部只是一个拷贝，是值传递，所以v代表的只是x的一个拷贝，因此对v进行操作是被禁止的；

可设置是反射变量 `Value` 的一个性质，但不是所有的 `Value` 都是可被设置的。就像在一般的函数里那样，当我们想改变传入的变量时，使用指针就可以解决了。

```go
var x float64 = 3.4
p := reflect.ValueOf(&x) // 通过上面可以知道，ValueOf返回的是一个结构体，里面包含类型，源地址和标志位
fmt.Println("type of p:", p.Type())
fmt.Println("settability of p:", p.CanSet())
// 输出
type of p: *float64
settability of p: false
// 其中p并不是代表x，p.Elem() 才真正代表x，这样就可以操作x了
v := p.Elem()
v.SetFloat(7.1)
fmt.Println(v.Interface()) // 7.1
fmt.Println(x) // 7.1
```

关于第三条，记住一句话：如果想要操作原变量，反射变量 `Value` 必须要 hold 住原变量的地址才行。

1. 调用 [`reflect.ValueOf`](https://draveness.me/golang/tree/reflect.ValueOf) 获取变量指针；
2. 调用 [`reflect.Value.Elem`](https://draveness.me/golang/tree/reflect.Value.Elem) 获取指针指向的变量；
3. 调用 [`reflect.Value.SetInt`](https://draveness.me/golang/tree/reflect.Value.SetInt) 更新变量的值：





## 4、Go语言中反射有哪些应用？

1. IDE中的代码自动补全功能
2. 对象序列化(encoding/json)
3. fmt相关函数的实现
4. ORM(Object Relational Mapping) 对象关系映射...



## 5、如何比较两个对象完全相同？

Go语言中提供了一个函数可以完成此功能:

```go
func DeepEqual(x, y interface{}) bool
```

DeepEqual函数的参数是两个interface{}，实际上也就是可以输入任意类型，输出true或者false表示输入的两个变量是否是"深度"相等；

先明白一点，如果是不同的类型，即使是底层类型相同，相应的值也一样，那么两者也不是"深度"相等。

```go
type MyInt int
type YourInt int

func main() {
 m := MyInt(1)
 y := YourInt(1)

 fmt.Println(reflect.DeepEqual(m, y)) // false
}
```

| 类型                                  | 深度相等情形                                                 |
| ------------------------------------- | ------------------------------------------------------------ |
| Array                                 | 相同索引处的元素“深度”相等                                   |
| Struct                                | 相应字段，包含导出和不导出，“深度”相等                       |
| Func                                  | 只有两者都是 nil 时                                          |
| Interface                             | 两者存储的具体值“深度”相等                                   |
| Map                                   | 1、都为 nil；2、非空、长度相等，指向同一个 map 实体对象，或者相应的 key 指向的 value “深度”相等 |
| Pointer                               | 1、使用 == 比较的结果相等；2、指向的实体“深度”相等           |
| Slice                                 | 1、都为 nil；2、非空、长度相等，首元素指向同一个底层数组的相同元素，即 &x[0] == &y[0] 或者 相同索引处的元素“深度”相等 |
| numbers, bools, strings, and channels | 使用 == 比较的结果为真                                       |

一般情况下，DeepEqual 的实现只需要递归地调用 == 就可以比较两个变量是否是真的“深度”相等。

1. 但是，有一些异常情况：比如 func 类型是不可比较的类型，只有在两个 func 类型都是 nil 的情况下，才是“深度”相等；float 类型，由于精度的原因，也是不能使用 == 比较的；包含 func 类型或者 float 类型的 struct， interface， array 等。

2. 对于指针而言，当两个值相等的指针就是“深度”相等，因为两者指向的内容是相等的，即使两者指向的是 func 类型或者 float 类型，这种情况下不关心指针所指向的内容。

3. 同样，对于指向相同 slice， map 的两个变量也是“深度”相等的，不关心 slice， map 具体的内容。

4. 对于“有环”的类型，比如循环链表，比较两者是否“深度”相等的过程中，需要对已比较的内容作一个标记，一旦发现两个指针之前比较过，立即停止比较，并判定二者是深度相等的。这样做的原因是，及时停止比较，避免陷入无限循环。

### DeepEqual

```go
func DeepEqual(x, y interface{}) bool {
 if x == nil || y == nil {
  return x == y
 }
 v1 := ValueOf(x)
 v2 := ValueOf(y)
 if v1.Type() != v2.Type() {
  return false
 }
 return deepValueEqual(v1, v2, make(map[visit]bool), 0)
}
```

### deepValueEqual

代码比较长，思路却比较简单清晰：核心是一个 switch 语句，识别输入参数的不同类型，分别递归调用 deepValueEqual 函数，一直递归到最基本的数据类型，比较 int，string 等可以直接得出 true 或者 false，再一层层地返回，最终得到“深度”相等的比较结果。

实际上，各种类型的比较套路比较相似，这里就直接节选一个稍微复杂一点的 `map` 类型的比较：

```go
// deepValueEqual 函数
// ……

case Map:
 if v1.IsNil() != v2.IsNil() {
  return false
 }
 if v1.Len() != v2.Len() {
  return false
 }
 if v1.Pointer() == v2.Pointer() {
  return true
 }
 for _, k := range v1.MapKeys() {
  val1 := v1.MapIndex(k)
  val2 := v2.MapIndex(k)
  if !val1.IsValid() || !val2.IsValid() || !deepValueEqual(v1.MapIndex(k), v2.MapIndex(k), visited, depth+1) {
   return false
  }
 }
 return true
 
// …… 
```

