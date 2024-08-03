# Go语言之数组与切片

## 1、数组

### 概述

Go 语言数组在初始化之后大小就无法改变，存储元素类型相同、但是大小不同的数组类型在 Go 语言看来也是完全不同的，只有两个条件都相同才是同一类型。

```go
func NewArray(elem *Type, bound int64) *Type {
 if bound < 0 {
  Fatalf("NewArray: invalid bound %v", bound)
 }
 t := New(TARRAY)
 t.Extra = &Array{Elem: elem, Bound: bound}
 t.SetNotInHeap(elem.NotInHeap())
 return t
}
```

编译期间的数组类型是由上述的 [`cmd/compile/internal/types.NewArray`](https://draveness.me/golang/tree/cmd/compile/internal/types.NewArray) 函数生成的，该类型包含两个字段，分别是元素类型 `Elem` 和数组的大小 `Bound`，这两个字段共同构成了数组类型，而当前数组是否应该在堆栈中初始化也在编译期就确定了。

### 初始化

Go 语言的数组有两种不同的创建方式，一种是显式的指定数组大小，另一种是使用 `[...]T` 声明数组，Go 语言会在编译期间通过源代码推导数组的大小：

```go
arr1 := [3]int{1, 2, 3}
arr2 := [...]int{1, 2, 3}
```

上述两种声明方式在运行期间得到的结果是完全相同的，后一种声明方式在编译期间就会被转换成前一种，这也就是编译器对数组的大小进行推导。

总结起来，在不考虑逃逸分析的情况下，如果数组中元素的个数小于或者等于 4 个，那么所有的变量会直接在栈上初始化，如果数组元素大于 4 个，变量就会在静态存储区初始化然后拷贝到栈上，这些转换后的代码才会继续进入[中间代码生成](https://draveness.me/golang/docs/part1-prerequisite/ch02-compile/golang-ir-ssa/)和[机器码生成](https://draveness.me/golang/docs/part1-prerequisite/ch02-compile/golang-machinecode/)两个阶段，最后生成可以执行的二进制文件。

## 2、切片

在 Go 语言中，切片类型的声明方式与数组有一些相似，不过由于切片的长度是动态的，所以声明时只需要指定切片中的元素类型：

```go
[]int
[]interface{}
```

### 数据结构

编译期间的切片是 [`cmd/compile/internal/types.Slice`](https://draveness.me/golang/tree/cmd/compile/internal/types.Slice) 类型的，但是在运行时切片可以由如下的 [`reflect.SliceHeader`](https://draveness.me/golang/tree/reflect.SliceHeader) 结构体表示，其中:

- `Data` 是指向数组的指针;
- `Len` 是当前切片的长度；
- `Cap` 是当前切片的容量，即 `Data` 数组的大小：

```go
type SliceHeader struct {
 Data uintptr
 Len  int
 Cap  int
}
```

![golang-slice-struct](https://img.draveness.me/2019-02-20-golang-slice-struct.png)

从上图中，我们会发现切片与数组的关系非常密切，切片引入了一个抽象层，提供了对数组中部分连续片段的引用，而作为数组的引用，我们可以在运行区间可以修改它的长度和范围。当切片底层的数组长度不足时就会触发扩容，切片指向的数组可能会发生变化，不过在上层看来切片是没有变化的，上层只需要与切片打交道不需要关心数组的变化。

### 初始化

Go 语言中包含三种初始化切片的方式：

1. 通过下标的方式获得数组或者切片的一部分；
2. 使用字面量初始化新的切片；
3. 使用关键字 `make` 创建切片：

```go
arr[0:3] or slice[0:3]
slice := []int{1, 2, 3}
slice := make([]int, 10)
```

**需要注意的是使用下标初始化切片不会拷贝原数组或者原切片中的数据，它只会创建一个指向原数组的切片结构体，所以修改新切片的数据也会修改原切片。**

#### 使用字面量创建切片

当我们使用字面量 `[]int{1, 2, 3}` 创建新的切片时，[`cmd/compile/internal/gc.slicelit`](https://draveness.me/golang/tree/cmd/compile/internal/gc.slicelit) 函数会在编译期间将它展开成如下所示的代码片段：

```go
var vstat [3]int
vstat[0] = 1
vstat[1] = 2
vstat[2] = 3
var vauto *[3]int = new([3]int)
*vauto = vstat
slice := vauto[:]
```

1. 根据切片中的元素数量对底层数组的大小进行推断并创建一个数组；
2. 将这些字面量元素存储到初始化的数组中；
3. 创建一个同样指向 `[3]int` 类型的数组指针；
4. 将静态存储区的数组 `vstat` 赋值给 `vauto` 指针所在的地址；
5. 通过 `[:]` 操作获取一个底层使用 `vauto` 的切片；

**第 5 步中的 `[:]` 就是使用下标创建切片的方法，从这一点我们也能看出 `[:]` 操作是创建切片最底层的一种方法。**

#### 使用关键字创建

使用关键字创建切片的时候，很多工作都需要运行时的参与；调用方必须向make函数传入切片的大小以及可选的容量。

### 追加和扩容

是否覆盖原变量的逻辑其实差不多，最大的区别在于**得到的新切片是否会赋值回原变量**。如果我们选择覆盖原有的变量，就不需要担心切片发生拷贝影响性能，因为 Go 语言编译器已经对这种常见的情况做出了优化。

![golang-slice-append](https://img.draveness.me/2020-03-12-15839729948451-golang-slice-append.png)

当切片的容量不足时，我们会调用 [`runtime.growslice`](https://draveness.me/golang/tree/runtime.growslice) 函数为切片扩容，扩容是为切片分配新的内存空间并拷贝原切片中元素的过程，我们先来看新切片的容量是如何确定的：

```go
//1.18版本之前
func growslice(et *_type, old slice, cap int) slice {
 newcap := old.cap
 doublecap := newcap + newcap
 if cap > doublecap {
  newcap = cap
 } else {
  if old.len < 1024 {
   newcap = doublecap
  } else {
   for 0 < newcap && newcap < cap {
    newcap += newcap / 4
   }
   if newcap <= 0 {
    newcap = cap
   }
  }
 }
// 1.18版本之后

func growslice(et *_type, old slice, cap int) slice {
    // ……
    newcap := old.cap
 doublecap := newcap + newcap
    // 如果大于双倍，直接该多少就多少
 if cap > doublecap {
  newcap = cap
 } else {
  const threshold = 256
        // 如果小于256，就直接双倍
  if old.cap < threshold {
   newcap = doublecap
  } else {
            // 如果小于256，原来是直接1.25倍，现在是增加原来的1.25，并且再增加0.75倍的threshold
   for 0 < newcap && newcap < cap {
                // Transition from growing 2x for small slices
    // to growing 1.25x for large slices. This formula
    // gives a smooth-ish transition between the two.
    newcap += (newcap + 3*threshold) / 4
   }
   if newcap <= 0 {
    newcap = cap
   }
  }
 }
 // ……
    
 capmem = roundupsize(uintptr(newcap) * ptrSize)
 newcap = int(capmem / ptrSize)
}
```

**1.18之前：**

在分配内存空间之前需要先确定新的切片容量，运行时根据切片的当前容量选择不同的策略进行扩容：

1. 如果期望容量大于当前容量的两倍就会使用期望容量；
2. 如果当前切片的长度小于 1024 就会将容量翻倍；
3. 如果当前切片的长度大于 1024 就会每次增加 25% 的容量，直到新容量大于期望容量；

**1.18之后:**

1. 如果期望容量大于之前的双倍，该多少就是多少；
2. 否则设定一个阈值=256byte，如果老容量小于这个阈值，直接双倍；
3. 如果老的容量大于等于256，1.18之前是增加25%，直到大于期望容量，1.18之后，每次增加25%，并且增加75%的threshold，直到大于期望容量；

总体流程如下：

[`runtime.growslice`](https://draveness.me/golang/tree/runtime.growslice) 函数最终会返回一个新的切片，其中包含了新的数组指针、大小和容量，这个返回的三元组最终会覆盖原切片。

```go
var arr []int64
arr = append(arr, 1, 2, 3, 4, 5)
```

简单总结一下扩容的过程，当我们执行上述代码时，会触发 [`runtime.growslice`](https://draveness.me/golang/tree/runtime.growslice) 函数扩容 `arr` 切片并传入期望的新容量 5，这时期望分配的内存大小为 40 字节；不过因为切片中的元素大小等于 `sys.PtrSize`(Go语言中指针大小)，所以运行时会调用 [`runtime.roundupsize`](https://draveness.me/golang/tree/runtime.roundupsize) 向上取整内存的大小到 48 字节，所以新切片的容量为 48 / 8 = 6。

### 拷贝切片

分为**编译期间拷贝**和**运行期间拷贝**，两种拷贝执行过程不太一样

1. 编译期间拷贝的：
   1. 基本数据类型
   2. 结构体
2. 运行期间拷贝的：
   1. 切片
   2. 通道
   3. 映射

无论是编译期间拷贝还是运行时拷贝，两种拷贝方式都会通过 [`runtime.memmove`](https://draveness.me/golang/tree/runtime.memmove) 将整块内存的内容拷贝到目标的内存区域中：

![golang-slice-copy](https://img.draveness.me/2019-02-20-golang-slice-copy.png)

#### 将某个切片完全赋值给另一个切片

```go
source := make([]int, m)
target := make([]int, n)
copy(target, source) // 该函数会考虑两个切片的大小，会取较小的那一个
```

### 例子

说明：例子来自雨痕大佬《Go学习笔记》第四版，P43页。这里我会进行扩展，并会作图详细分析。

```go
package main

import "fmt"

func main() {
 slice := []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
 s1 := slice[2:5]
 s2 := s1[2:6:7]

 s2 = append(s2, 100)
 s2 = append(s2, 200)

 s1[2] = 20

 fmt.Println(s1)
 fmt.Println(s2)
 fmt.Println(slice)
}

// [2 3 20]
// [4 5 6 7 100 200]
// [0 1 2 3 20 5 6 7 100 9]
```

`s1` 从 `slice` 索引2（闭区间）到索引5（开区间，元素真正取到索引4），长度为3，容量默认到数组结尾，为8。 `s2` 从 `s1` 的索引2（闭区间）到索引6（开区间，元素真正取到索引5），容量到索引7（开区间，真正到索引6），为5。

![slice origin](https://s2.loli.net/2023/12/13/dtDwi3bzEfmpAIR.png)

接着，向 `s2` 尾部追加一个元素 100：

```go
s2 = append(s2, 100)
```

`s2` 容量刚好够，直接追加。不过，这会修改原始数组对应位置的元素。这一改动，数组和 `s1` 都可以看得到。

![append 100](https://s2.loli.net/2023/12/13/76nRwfZQpVlm2H3.png)

再次向 `s2` 追加元素200：

```go
s2 = append(s2, 100)
```

这时，`s2` 的容量不够用，该扩容了。于是，`s2` 另起炉灶，将原来的元素复制新的位置，扩大自己的容量。并且为了应对未来可能的 `append` 带来的再一次扩容，`s2` 会在此次扩容的时候多留一些 `buffer`，将新的容量将扩大为原始容量的2倍，也就是10了。

![append 200](https://s2.loli.net/2023/12/13/aqE17dzhsbGRcnF.png)

最后，修改 `s1` 索引为2位置的元素：

```go
s1[2] = 20
```

这次只会影响原始数组相应位置的元素。它影响不到 `s2` 了，人家已经远走高飞了。

![s1[2]=20](https://s2.loli.net/2023/12/13/qLYBJtNjr65psEf.png)

再提一点，打印 `s1` 的时候，只会打印出 `s1` 长度以内的元素。所以，只会打印出3个元素，虽然它的底层数组不止3个元素。
