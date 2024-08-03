# Go语言之map

## map内存模型

在源码中，表示 map 的结构体是 hmap，它是 hashmap 的“缩写”：

```go
// A header for a Go map.
type hmap struct {
    // 元素个数，调用 len(map) 时，直接返回此值
 count     int
 flags     uint8
 // buckets 的对数 log_2
 B         uint8
 // overflow 的 bucket 近似数
 noverflow uint16
 // 计算 key 的哈希的时候会传入哈希函数
 hash0     uint32
    // 指向 buckets 数组，大小为 2^B
    // 如果元素个数为0，就为 nil
 buckets    unsafe.Pointer
 // 等量扩容的时候，buckets 长度和 oldbuckets 相等
 // 双倍扩容的时候，buckets 长度会是 oldbuckets 的两倍
 oldbuckets unsafe.Pointer
 // 指示扩容进度，小于此地址的 buckets 迁移完成
 nevacuate  uintptr
 extra *mapextra // optional fields
}
```

buckets 是一个指针，最终它指向的是一个结构体：

```go
type bmap struct {
 tophash [bucketCnt]uint8
}
```

但这只是表面(src/runtime/hashmap.go)的结构，编译期间会给它加料，动态地创建一个新的结构：

```go
type bmap struct {
    topbits  [8]uint8
    keys     [8]keytype
    values   [8]valuetype
    pad      uintptr
    overflow uintptr
}
```

`bmap`就是我们常说的桶，桶里面最多会装8个key，这些key之所以会落入一个桶，是因为它们经过hash计算后，哈希结果是一类的，在桶内，又会根据计算出来的hash值的高8位来决定key到底落入桶内的哪个位置(一个桶最多有8个位置)。

来一个整体的图：

![hashmap bmap](https://s2.loli.net/2023/12/13/TR2teAFzCVKYgEl.png)

当map的key和value都不是指针，并且size都小于128个字节的情况下，会把bmap标记为不含指针，这样可以避免gc时候扫描整个hmap。但是，我们看bmap其实有一个overflow字段，是指针类型的，破坏了bmap不含指针的设想，这时会把overflow移动到extra字段上来。**下面是干啥玩意的？**

```go
type mapextra struct {
 // overflow[0] contains overflow buckets for hmap.buckets.
 // overflow[1] contains overflow buckets for hmap.oldbuckets.
 overflow [2]*[]*bmap

 // nextOverflow 包含空闲的 overflow bucket，这是预分配的 bucket
 nextOverflow *bmap
}
```

bmap 是存放 k-v 的地方，我们把视角拉近，仔细看 bmap 的内部组成。

![bmap struct](https://s2.loli.net/2023/12/13/npPvSzidILTfVe7.png)

上图就是 bucket 的内存模型，**`HOB Hash` 指的就是 top hash**。 注意到 key 和 value 是各自放在一起的，并不是 `key/value/key/value/...` 这样的形式。源码里说明这样的好处是在某些情况下可以省略掉 padding 字段，节省内存空间。

例如，有这样一个类型的 map：

```go
map[int64]int8
```

如果按照 `key/value/key/value/...` 这样的模式存储，那在每一个 key/value 对之后都要额外 padding 7 个字节；而将所有的 key，value 分别绑定到一起，这种形式 `key/key/.../value/value/...`，则只需要在最后添加 padding。

每个 bucket 设计成最多只能放 8 个 key-value 对，如果有第 9 个 key-value 落入当前的 bucket，那就需要再构建一个 bucket ，通过 `overflow` 指针连接起来。

从语法层面，创建map很简单

```go
ageMp := make(map[string]int)
// 指定 map 长度
ageMp := make(map[string]int, 8)

// ageMp 为 nil，不能向其添加元素，会直接panic
var ageMp map[string]int
```

可以看一下map的底层创建函数

```go
func makemap(t *maptype, hint int64, h *hmap, bucket unsafe.Pointer) *hmap {
 // 省略各种条件检查...

 // 找到一个 B，使得 map 的装载因子在正常范围内
 B := uint8(0)
 for ; overLoadFactor(hint, B); B++ {
 }

 // 初始化 hash table
 // 如果 B 等于 0，那么 buckets 就会在赋值的时候再分配
 // 如果长度比较大，分配内存会花费长一点
 buckets := bucket
 var extra *mapextra
 if B != 0 {
  var nextOverflow *bmap
  buckets, nextOverflow = makeBucketArray(t, B)
  if nextOverflow != nil {
   extra = new(mapextra)
   extra.nextOverflow = nextOverflow
  }
 }

 // 初始化 hamp
 if h == nil {
  h = (*hmap)(newobject(t.hmap))
 }
 h.count = 0
 h.B = B
 h.extra = extra
 h.flags = 0
 h.hash0 = fastrand()
 h.buckets = buckets
 h.oldbuckets = nil
 h.nevacuate = 0
 h.noverflow = 0

 return h
}
```

可以注意到这个返回的是指针类型

```go
func makeslice(et *_type, len, cap int) slice
```

## 思考

slice和map分别作为函数参数有什么区别？

如果将map作为函数参数，在函数里面修改map，也会影响外面的map，但是slice传入的是值拷贝，修改函数里面的并不会影响外面的map结果。

## 哈希函数

map 的一个关键点在于，哈希函数的选择。在程序启动时，会检测 cpu 是否支持 aes，如果支持，则使用 aes hash，否则使用 memhash。这是在函数 `alginit()` 中完成，位于路径：`src/runtime/alg.go` 下。

> hash 函数，有加密型和非加密型。 加密型的一般用于加密数据、数字摘要等，典型代表就是 md5、sha1、sha256、aes256 这种； 非加密型的一般就是查找。在 map 的应用场景中，用的是查找。 选择 hash 函数主要考察的是两点：性能、碰撞概率。

对于不同的类型的，采用的哈希函数必定也是不一样的

关于的类型的结构体如下:

```go
type _type struct {
 size       uintptr
 ptrdata    uintptr // size of memory prefix holding all pointers
 hash       uint32
 tflag      tflag
 align      uint8
 fieldalign uint8
 kind       uint8
 alg        *typeAlg
 gcdata    *byte
 str       nameOff
 ptrToThis typeOff
}
```

其中alg字段和hash有关，它指向typeAlg结构体:

```go
// src/runtime/alg.go
type typeAlg struct {
 // (ptr to object, seed) -> hash
 hash func(unsafe.Pointer, uintptr) uintptr
 // (ptr to object A, ptr to object B) -> ==?
 equal func(unsafe.Pointer, unsafe.Pointer) bool
}
```

此结构体包含两个参数，一个是hash函数，计算该类型的hash值，equal函数用来计算两个类型是否hash相等。

对于 string 类型，它的 hash、equal 函数如下：

```go
func strhash(a unsafe.Pointer, h uintptr) uintptr {
 x := (*stringStruct)(a)
 return memhash(x.str, h, uintptr(x.len))
}

func strequal(p, q unsafe.Pointer) bool {
 return *(*string)(p) == *(*string)(q)
}
```

根据 key 的类型，_type 结构体的 alg 字段会被设置对应类型的 hash 和 equal 函数。

## key定位过程

key 经过哈希计算后得到哈希值，共 64 个 bit 位（64位机，32位机就不讨论了，现在主流都是64位机），计算它到底要落在哪个桶时，只会用到最后 B 个 bit 位。还记得前面提到过的 B 吗？如果 B = 5，那么桶的数量，也就是 buckets 数组的长度是 $2^5 = 32$。

例如，现在有一个 key 经过哈希函数计算后，得到的哈希结果是：

```shell
10010111 | 000011110110110010001111001010100010010110010101010 │ 01010
```

用最后的 5 个 bit 位，也就是 `01010`，值为 10，也就是 10 号桶。这个操作实际上就是取余操作，但是取余开销太大，所以代码实现上用的位操作代替。

再用哈希值的高 8 位，找到此 key 在 bucket 中的位置，这是在寻找已有的 key。最开始桶内还没有 key，新加入的 key 会找到第一个空位，放入。

buckets 编号就是桶编号，当两个不同的 key 落在同一个桶中，也就是发生了哈希冲突。冲突的解决手段是用链表法：在 bucket 中，从前往后找到第一个空位。这样，在查找某个 key 时，先找到对应的桶，再去遍历 bucket 中的 key。

![mapacess](https://s2.loli.net/2023/12/13/SLEkh2Tvs3pnQaA.png)

上图中，假定 B = 5，所以 bucket 总数就是 2^5 = 32。首先计算出待查找 key 的哈希，使用低 5 位 `00110`，找到对应的 6 号 bucket，使用高 8 位 `10010111`，对应十进制 151，在 6 号 bucket 中寻找 tophash 值（HOB hash）为 151 的 key，找到了 2 号槽位，这样整个查找过程就结束了。

如果在 bucket 中没找到，并且 overflow 不为空，还要继续去 overflow bucket 中寻找，直到找到或是所有的 key 槽位都找遍了，包括所有的 overflow bucket。

我们来看下源码吧，哈哈！通过汇编语言可以看到，查找某个 key 的底层函数是 `mapacess` 系列函数，函数的作用类似，区别在下一节会讲到。这里我们直接看 `mapacess1` 函数：

```go
func mapaccess1(t *maptype, h *hmap, key unsafe.Pointer) unsafe.Pointer {
 // ……
 
 // 如果 h 什么都没有，返回零值
 if h == nil || h.count == 0 {
  return unsafe.Pointer(&zeroVal[0])
 }
 
 // 写和读冲突
 if h.flags &hashWriting != 0 {
  throw("concurrent map read and map write")
 }
 
 // 不同类型 key 使用的 hash 算法在编译期确定
 alg := t.key.alg
 
 // 计算哈希值，并且加入 hash0 引入随机性
 hash := alg.hash(key, uintptr(h.hash0))
 
 // 比如 B=5，那 m 就是31，二进制是全 1
 // 求 bucket num 时，将 hash 与 m 相与，
 // 达到 bucket num 由 hash 的低 8 位决定的效果
 m := uintptr(1)<<h.B - 1
 
 // b 就是 bucket 的地址
 b := (*bmap)(add(h.buckets, (hash&m)*uintptr(t.bucketsize)))
 
 // oldbuckets 不为 nil，说明发生了扩容
 if c := h.oldbuckets; c != nil {
     // 如果不是同 size 扩容（看后面扩容的内容）
     // 对应条件 1 的解决方案
  if !h.sameSizeGrow() {
   // 新 bucket 数量是老的 2 倍
   m >>= 1
  }
  
  // 求出 key 在老的 map 中的 bucket 位置
  oldb := (*bmap)(add(c, (hash&m)*uintptr(t.bucketsize)))
  
  // 如果 oldb 没有搬迁到新的 bucket
  // 那就在老的 bucket 中寻找
  if !evacuated(oldb) {
   b = oldb
  }
 }
 
 // 计算出高 8 位的 hash
 // 相当于右移 56 位，只取高8位
 top := uint8(hash >> (sys.PtrSize*8 - 8))
 
 // 增加一个 minTopHash
 if top < minTopHash {
  top += minTopHash
 }
 for {
     // 遍历 bucket 的 8 个位置
  for i := uintptr(0); i < bucketCnt; i++ {
      // tophash 不匹配，继续
   if b.tophash[i] != top {
    continue
   }
   // tophash 匹配，定位到 key 的位置
   k := add(unsafe.Pointer(b), dataOffset+i*uintptr(t.keysize))
   // key 是指针
   if t.indirectkey {
       // 解引用
    k = *((*unsafe.Pointer)(k))
   }
   // 如果 key 相等
   if alg.equal(key, k) {
       // 定位到 value 的位置
    v := add(unsafe.Pointer(b), dataOffset+bucketCnt*uintptr(t.keysize)+i*uintptr(t.valuesize))
    // value 解引用
    if t.indirectvalue {
     v = *((*unsafe.Pointer)(v))
    }
    return v
   }
  }
  
  // bucket 找完（还没找到），继续到 overflow bucket 里找
  b = b.overflow(t)
  // overflow bucket 也找完了，说明没有目标 key
  // 返回零值
  if b == nil {
   return unsafe.Pointer(&zeroVal[0])
  }
 }
}
```

函数返回 h[key] 的指针，如果 h 中没有此 key，那就会返回一个 key 相应类型的零值，不会返回 nil。

这里，说一下定位 key 和 value 的方法以及整个循环的写法。

```go
// key 定位公式
k := add(unsafe.Pointer(b), dataOffset+i*uintptr(t.keysize))

// value 定位公式
v := add(unsafe.Pointer(b), dataOffset+bucketCnt*uintptr(t.keysize)+i*uintptr(t.valuesize))
```

其中b是bmap的地址，这里的bmap还是源码里定义的结构体，只包含一个tophash数组，经编译器扩充之后的结构体才包含key，value，overflow这些字段。**dataOffset是key相对于bmap起始地址的偏移:**

```go
dataOffset = unsafe.Offsetof(struct {
  b bmap
  v int64
 }{}.v)
```

因此 bucket 里 key 的起始地址就是 unsafe.Pointer(b)+dataOffset。第 i 个 key 的地址就要在此基础上跨过 i 个 key 的大小；而我们又知道，value 的地址是在所有 key 之后，因此第 i 个 value 的地址还需要加上所有 key 的偏移。理解了这些，上面 key 和 value 的定位公式就很好理解了。

当定位到一个具体的 bucket 时，里层循环就是遍历这个 bucket 里所有的 cell，或者说所有的槽位，也就是 bucketCnt=8 个槽位。整个循环过程：

![mapacess loop](https://s2.loli.net/2023/12/13/N1ODJTSk5xrQHK4.png)

再说一下 **minTopHash**，当一个 cell 的 tophash 值小于 minTopHash 时，标志这个 cell 的迁移状态。因为这个状态值是放在 tophash 数组里，为了和正常的哈希值区分开，会给 key 计算出来的哈希值一个增量：minTopHash。这样就能区分正常的 top hash 值和表示状态的哈希值。

下面的这几种状态就表征了 bucket 的情况：

```go
// 空的 cell，也是初始时 bucket 的状态
empty          = 0
// 空的 cell，表示 cell 已经被迁移到新的 bucket
evacuatedEmpty = 1
// key,value 已经搬迁完毕，但是 key 都在新 bucket 前半部分，
// 后面扩容部分会再讲到。
evacuatedX     = 2
// 同上，key 在后半部分
evacuatedY     = 3
// tophash 的最小正常值
minTopHash     = 4
```

源码里判断这个 bucket 是否已经搬迁完毕，用到的函数：

```go
func evacuated(b *bmap) bool {
 h := b.tophash[0]
 return h > empty && h < minTopHash
}
```

只取了 tophash 数组的第一个值，判断它是否在 0-4 之间。对比上面的常量，当 top hash 是 `evacuatedEmpty`、`evacuatedX`、`evacuatedY` 这三个值之一，说明此 bucket 中的 key 全部被搬迁到了新 bucket。

## 如何实现两种get操作

1. 第一种get操作是带comma，函数会返回值和bool，后者用来表示key是否在map中
2. 第二种就是不带comma，直接返回值

```go
// src/runtime/hashmap.go
func mapaccess1(t *maptype, h *hmap, key unsafe.Pointer) unsafe.Pointer
func mapaccess2(t *maptype, h *hmap, key unsafe.Pointer) (unsafe.Pointer, bool)
```

## 遍历过程

迭代器结构

```go
type hiter struct {
 // key 指针
 key         unsafe.Pointer
 // value 指针
 value       unsafe.Pointer
 // map 类型，包含如 key size 大小等
 t           *maptype
 // map header
 h           *hmap
 // 初始化时指向的 bucket
 buckets     unsafe.Pointer
 // 当前遍历到的 bmap
 bptr        *bmap
 overflow    [2]*[]*bmap
 // 起始遍历的 bucket 编号
 startBucket uintptr
 // 遍历开始时 cell 的编号（每个 bucket 中有 8 个 cell）
 offset      uint8
 // 是否从头遍历了
 wrapped     bool
 // B 的大小
 B           uint8
 // 指示当前 cell 序号
 i           uint8
 // 指向当前的 bucket
 bucket      uintptr
 // 因为扩容，需要检查的 bucket
 checkBucket uintptr
}
```

`mapiterinit` 就是对 hiter 结构体里的字段进行初始化赋值操作。

前面已经提到过，即使是对一个写死的 map 进行遍历，每次出来的结果也是无序的。下面我们就可以近距离地观察他们的实现了。

```go
// 生成随机数 r
r := uintptr(fastrand())
if h.B > 31-bucketCntBits {
 r += uintptr(fastrand()) << 31
}

// 从哪个 bucket 开始遍历
it.startBucket = r & (uintptr(1)<<h.B - 1)
// 从 bucket 的哪个 cell 开始遍历
it.offset = uint8(r >> h.B & (bucketCnt - 1))
```

假设我们有下图所示的一个 map，起始时 B = 1，有两个 bucket，后来触发了扩容（这里不要深究扩容条件，只是一个设定），B 变成 2。并且， 1 号 bucket 中的内容搬迁到了新的 bucket，`1 号`裂变成 `1 号`和 `3 号`；`0 号` bucket 暂未搬迁。老的 bucket 挂在在 `*oldbuckets` 指针上面，新的 bucket 则挂在 `*buckets` 指针上面。

![map origin](https://s2.loli.net/2023/12/23/vZuJf5L9VSdcH8F.png)

这时，我们对此 map 进行遍历。假设经过初始化后，startBucket = 3，offset = 2。于是，遍历的起点将是 3 号 bucket 的 2 号 cell，下面这张图就是开始遍历时的状态：

![map init](https://s2.loli.net/2023/12/23/9czlGSsRL2e6mvi.png)

标红的表示起始位置，bucket 遍历顺序为：3 -> 0 -> 1 -> 2。

因为 3 号 bucket 对应老的 1 号 bucket，因此先检查老 1 号 bucket 是否已经被搬迁过。判断方法就是：

```go
func evacuated(b *bmap) bool {
 h := b.tophash[0]
 return h > empty && h < minTopHash
}
```

如果 b.tophash[0] 的值在标志值范围内，即在 (0,4) 区间里，说明已经被搬迁过了。

在本例中，老 1 号 bucket 已经被搬迁过了。所以它的 tophash[0] 值在 (0,4) 范围内，因此只用遍历新的 3 号 bucket。

依次遍历 3 号 bucket 的 cell，这时候会找到第一个非空的 key：元素 e。到这里，mapiternext 函数返回，这时我们的遍历结果仅有一个元素：

![iter res](https://s2.loli.net/2023/12/23/Q6UWyog4bBpPt3i.png)

由于返回的 key 不为空，所以会继续调用 mapiternext 函数。

继续从上次遍历到的地方往后遍历，从新 3 号 overflow bucket 中找到了元素 f 和 元素 g。

遍历结果集也因此壮大：

![iter res](https://s2.loli.net/2023/12/23/BbsJvNtYTCX7qMr.png)

新 3 号 bucket 遍历完之后，回到了新 0 号 bucket。0 号 bucket 对应老的 0 号 bucket，经检查，老 0 号 bucket 并未搬迁，因此对新 0 号 bucket 的遍历就改为遍历老 0 号 bucket。那是不是把老 0 号 bucket 中的所有 key 都取出来呢？

并没有这么简单，回忆一下，老 0 号 bucket 在搬迁后将裂变成 2 个 bucket：新 0 号、新 2 号。而我们此时正在遍历的只是新 0 号 bucket（注意，遍历都是遍历的 `*bucket` 指针，也就是所谓的新 buckets）。所以，我们只会取出老 0 号 bucket 中那些在裂变之后，分配到新 0 号 bucket 中的那些 key。

**因此，`lowbits == 00` 的将进入遍历结果集**：

![iter res](https://s2.loli.net/2023/12/23/GnzcRaQoPm7UYF5.png)

和之前的流程一样，继续遍历新 1 号 bucket，发现老 1 号 bucket 已经搬迁，只用遍历新 1 号 bucket 中现有的元素就可以了。结果集变成：

![iter res](https://s2.loli.net/2023/12/23/GBQEqTp82Yj3OCc.png)

这样，遍历结果集变成：

![iter res](https://s2.loli.net/2023/12/23/Cdj8olHk5enyhmf.png)

## 赋值过程

核心部分： 两个for循环，外层遍历bucket和它的overflow bucket，内层遍历整个bucket和各个cell；

需要注意的部分:

1. 首先需要检查map的标志位flags。如果flags的写标志位此时被置1了，说明有其他协程在执行'写'操作，进而导致程序panic。map非线程安全的
2. map赋值，先找位置，然后看是否存在key，如果不存在，新赋值，如果存在，替换原来的值
3. 不过在正式安装key之前，需要判断是否需要执行扩容操作，这之后整个定位key的过程还需要再走一次，因为key的位置发生了变化
4. 为什么需要再走一次定位key的操作呢？
   - 因为内存结构发生了变化，而且赋值过程并不传值，赋值过程的函数返回的是对应区域的地址，得到地址之后才进行赋值

## 删除过程

1. 和遍历和插入相同，核心还是找key的位置，找到对应位置后，对 key 或者 value 进行“清零”操作：

   ```go
   // 对 key 清零
   if t.indirectkey {
    *(*unsafe.Pointer)(k) = nil
   } else {
    typedmemclr(t.key, k)
   }
   
   // 对 value 清零
   if t.indirectvalue {
    *(*unsafe.Pointer)(v) = nil
   } else {
    typedmemclr(t.elem, v)
   }
   ```

2. 最后将count值减1，对应的位置的tophash值置成Empty

## 扩容过程

装载因子:

```go
loadFactor := count / (2 ^ B)
```

$2 ^ B$ 代表bucket的数量，count代表map中key的个数

### 扩容时机

在向map中插入新key的时候，会进行条件检测，符合下面这两个条件，就会触发扩容:

1. 装载因子超过阈值，源码里定义的是6.5
2. overflow的bucket数量过多:当B小于15，如果overflow的bucket的数量超过 $2 ^ B$, 当 $B \geq 15$ ，也就是bucket总数 $2 ^ B$ 大于等于 $2 ^ {15}$ ，如果overflow的bucket数量超过 $2 ^ {15}$

### 解释

1. 我们知道，每个 bucket 有 8 个空位，在没有溢出，且所有的桶都装满了的情况下，装载因子算出来的结果是 8。因此当装载因子超过 6.5 时，表明很多 bucket 都快要装满了，查找效率和插入效率都变低了。在这个时候进行扩容是有必要的。
2. 没有达到第一个条件，但是也有可能造成查询效率比较慢的情况，比如很多元素都集中在某一个bucket下，然后bucket很空，但是overflow很多，形成了类似链表的结构，但是查询是 $O(n)$ 的

### 扩容策略

1. 对于扩容时机1，只用通过增加bucket的个数即可，分裂两个
2. 对于扩容时机2，其实元素没有那么多，但是overflow bucket的数量很多，说明很多bucket都没装满。解决办法就是开辟一个新的bucket空间，将老的bucket中的元素移动到新的bucket中，使得同一个bucket的key排列的更加紧密。

### 扩容步骤

1. 如果map中元素很多，扩容过程是需要重新计算hash值，这个过程是非常耗费时间的，如果此时有插入，删除，查询操作，会带来较差的体验。

2. Go map的扩容采取了一种名为“渐进式”地方式，原有的key并不会一次性搬迁完毕，每次最多搬迁两个bucket；

3. 上面说的**hashGrow()**函数实际上并没有真正的搬迁，他只是分配好了新的buckets，并将老的buckets挂到了oldbuckets字段上。真正搬迁buckets的动作是在**growWork()**函数中，而调用**growWork**函数的动作是在赋值和删除函数中。也就是**修改和删除key**的时候，会进行buckets的工作。先检查oldbuckets是否搬迁完毕，具体来说就是检查oldbuckets是否为nil；

我们先看 `hashGrow()` 函数所做的工作，再来看具体的搬迁 buckets 是如何进行的。

```go
func hashGrow(t *maptype, h *hmap) {
 // B+1 相当于是原来 2 倍的空间
 bigger := uint8(1)

 // 对应条件 2
 if !overLoadFactor(int64(h.count), h.B) {
  // 进行等量的内存扩容，所以 B 不变
  bigger = 0
  h.flags |= sameSizeGrow
 }
 // 将老 buckets 挂到 buckets 上
 oldbuckets := h.buckets
 // 申请新的 buckets 空间
 newbuckets, nextOverflow := makeBucketArray(t, h.B+bigger)

 flags := h.flags &^ (iterator | oldIterator)
 if h.flags&iterator != 0 {
  flags |= oldIterator
 }
 // 提交 grow 的动作
 h.B += bigger
 h.flags = flags
 h.oldbuckets = oldbuckets
 h.buckets = newbuckets
 // 搬迁进度为 0
 h.nevacuate = 0
 // overflow buckets 数为 0
 h.noverflow = 0

 // ……
}
```

主要是申请到了新的 buckets 空间，把相关的标志位都进行了处理：例如标志 nevacuate 被置为 0， 表示当前搬迁进度为 0。

下面是关于`h.flags`的处理:

```go
flags := h.flags &^ (iterator | oldIterator)
if h.flags&iterator != 0 {
 flags |= oldIterator
}
```

这里得先说下运算符：&^。这叫`按位置 0`运算符。例如：

```go
x = 01010011
y = 01010100
z = x &^ y = 00000011
```

如果 y bit 位为 1，那么结果 z 对应 bit 位就为 0，否则 z 对应 bit 位就和 x 对应 bit 位的值相同。

所以上面那段对 flags 一顿操作的代码的意思是：先把 h.flags 中 iterator 和 oldIterator 对应位清 0，然后如果发现 iterator 位为 1，那就把它转接到 oldIterator 位，使得 oldIterator 标志位变成 1。潜台词就是：buckets 现在挂到了 oldBuckets 名下了，对应的标志位也转接过去吧。

几个标志位如下：

```go
// 可能有迭代器使用 buckets
iterator     = 1
// 可能有迭代器使用 oldbuckets
oldIterator  = 2
// 有协程正在向 map 中写入 key
hashWriting  = 4
// 等量扩容（对应条件 2）
sameSizeGrow = 8
```

再来看看真正执行搬迁工作的 growWork() 函数。

```go
func growWork(t *maptype, h *hmap, bucket uintptr) {
 // 确认搬迁老的 bucket 对应正在使用的 bucket
 evacuate(t, h, bucket&h.oldbucketmask())

 // 再搬迁一个 bucket，以加快搬迁进程
 if h.growing() {
  evacuate(t, h, h.nevacuate)
 }
}


func (h *hmap) growing() bool {
 return h.oldbuckets != nil
}
```

如果 `oldbuckets` 不为空，说明还没有搬迁完毕，还得继续搬。

`bucket&h.oldbucketmask()` 这行代码，如源码注释里说的，是为了确认搬迁的 bucket 是我们正在使用的 bucket。`oldbucketmask()` 函数返回扩容前的 map 的 bucketmask。

所谓的 bucketmask，作用就是将 key 计算出来的哈希值与 bucketmask 相与，得到的结果就是 key 应该落入的桶。比如 B = 5，那么 bucketmask 的低 5 位是 `11111`，其余位是 `0`，hash 值与其相与的意思是，只有 hash 值的低 5 位决策 key 到底落入哪个 bucket。

**总结: 总的来说就是如果想要把一个bucket进行搬迁，就需要先确定一下搬迁的bucket，其实直接用bucket也行，但是保险起见还是 bucket&h.oldbucketmask();然后这个时候就确定了需要搬迁哪个bucket，执行evacuate函数即可；**

### 举个栗子

对于条件 2，从老的 buckets 搬迁到新的 buckets，由于 bucktes 数量不变，因此可以按序号来搬，比如原来在 0 号 bucktes，到新的地方后，仍然放在 0 号 buckets

对于条件 1，就没这么简单了。要重新计算 key 的哈希，才能决定它到底落在哪个 bucket。例如，原来 B = 5，计算出 key 的哈希后，只用看它的低 5 位，就能决定它落在哪个 bucket。扩容后，B 变成了 6，因此需要多看一位，它的低 6 位决定 key 落在哪个 bucket。这称为 `rehash`。

![map rehash](https://s2.loli.net/2023/12/25/kyM89zxC7OTuWLY.png)

因此，某个 key 在搬迁前后 bucket 序号可能和原来相等，也可能是相比原来加上 2^B（原来的 B 值），取决于 hash 值 第 6 bit 位是 0 还是 1。

再明确一个问题：如果扩容后，B 增加了 1，意味着 buckets 总数是原来的 2 倍，原来 1 号的桶“裂变”到两个桶。

例如，原始 B = 2，1号 bucket 中有 2 个 key 的哈希值低 3 位分别为：010，110。由于原来 B = 2，所以低 2 位 `10` 决定它们落在 2 号桶，现在 B 变成 3，所以 `010`、`110` 分别落入 2、6 号桶。

![bucket split](https://s2.loli.net/2023/12/25/mQlh1IGCiuf9P56.png)

理解了这个，后面讲 map 迭代的时候会用到。

再来讲搬迁函数中的几个关键点：

1. evacuate 函数每次只完成一个 bucket 的搬迁工作，因此要遍历完此 bucket 的所有的 cell，将有值的 cell copy 到新的地方。bucket 还会链接 overflow bucket，它们同样需要搬迁。因此会有 2 层循环，外层遍历 bucket 和 overflow bucket，内层遍历 bucket 的所有 cell。这样的循环在 map 的源码里到处都是，要理解透了。

2. 源码里提到 X, Y part，其实就是我们说的如果是扩容到原来的 2 倍，桶的数量是原来的 2 倍，前一半桶被称为 X part，后一半桶被称为 Y part。一个 bucket 中的 key 可能会分裂落到 2 个桶，一个位于 X part，一个位于 Y part。所以在搬迁一个 cell 之前，需要知道这个 cell 中的 key 是落到哪个 Part。很简单，重新计算 cell 中 key 的 hash，并向前“多看”一位，决定落入哪个 Part，这个前面也说得很详细了。

3. 有一个特殊情况是：有一种 key，每次对它计算 hash，得到的结果都不一样。这个 key 就是 `math.NaN()` 的结果，它的含义是 `not a number`，类型是 float64。
   - 当它作为 map 的 key，在搬迁的时候，会遇到一个问题：再次计算它的哈希值和它当初插入 map 时的计算出来的哈希值不一样！
   - 你可能想到了，这样带来的一个后果是，这个 key 是永远不会被 Get 操作获取的！当我使用 `m[math.NaN()]` 语句的时候，是查不出来结果的。这个 key 只有在遍历整个 map 的时候，才有机会现身。所以，可以向一个 map 插入任意数量的 `math.NaN()` 作为 key。
   - 当搬迁碰到 `math.NaN()` 的 key 时，只通过 tophash 的最低位决定分配到 X part 还是 Y part（如果扩容后是原来 buckets 数量的 2 倍）。如果 tophash 的最低位是 0 ，分配到 X part；如果是 1 ，则分配到 Y part。

这是通过 tophash 值与新算出来的哈希值进行运算得到的：

```go
if top&1 != 0 {
    // top hash 最低位为 1
    // 新算出来的 hash 值的 B 位置 1
 hash |= newbit
} else {
    // 新算出来的 hash 值的 B 位置 0
 hash &^= newbit
}

// hash 值的 B 位为 0，则搬迁到 x part
// 当 B = 5时，newbit = 32，二进制低 6 位为 10 0000
useX = hash&newbit == 0
```

其实这样的 key 我随便搬迁到哪个 bucket 都行，当然，还是要搬迁到上面裂变那张图中的两个 bucket 中去。但这样做是有好处的，在后面讲 map 迭代的时候会再详细解释，暂时知道是这样分配的就行。

确定了要搬迁到的目标 bucket 后，搬迁操作就比较好进行了。将源 key/value 值 copy 到目的地相应的位置。

设置 key 在原始 buckets 的 tophash 为 `evacuatedX` 或是 `evacuatedY`，表示已经搬迁到了新 map 的 x part 或是 y part。新 map 的 tophash 则正常取 key 哈希值的高 8 位。

下面通过图来宏观地看一下扩容前后的变化。

扩容前，B = 2，共有 4 个 buckets，lowbits 表示 hash 值的低位。假设我们不关注其他 buckets 情况，专注在 2 号 bucket。并且假设 overflow 太多，触发了等量扩容（对应于前面的条件 2）。

![扩容前](https://s2.loli.net/2024/04/16/GpBAvDL172kTiao.png)

扩容完成后，overflow bucket 消失了，key 都集中到了一个 bucket，更为紧凑了，提高了查找的效率。

![same size 扩容](https://s2.loli.net/2024/04/16/1i2HfzRwKErWZqI.png)

假设触发了 2 倍的扩容，那么扩容完成后，老 buckets 中的 key 分裂到了 2 个 新的 bucket。一个在 x part，一个在 y 的 part。依据是 hash 的 lowbits。新 map 中 `0-3` 称为 x part，`4-7` 称为 y part。

![2倍扩容](https://s2.loli.net/2024/04/16/plIzV1qdC3XN8xY.png)

注意，上面的两张图忽略了其他 buckets 的搬迁情况，表示所有的 bucket 都搬迁完毕后的情形。实际上，我们知道，搬迁是一个“渐进”的过程，并不会一下子就全部搬迁完毕。所以在搬迁过程中，oldbuckets 指针还会指向原来老的 []bmap，**并且已经搬迁完毕的 key 的 tophash 值会是一个状态值，表示 key 的搬迁去向**。

**一个比较重要的一点是，同一个bucket中存在很多key，这些key扩容后的位置在bucket中的相对位置是不变的，只是后B + 1位会影响它去向哪个bucket，X or Y，因为相对位置是由前8位所决定的，这样的结论同样对于这种math.NaN() key起作用，因为tophash值是不会变动的。**

## key为什么是无序的？

这个其实很好理解，从map的遍历过程就可以得知，map的遍历并不是从头开始遍历，而是每次遍历的时候都会随机生成一个随机数，通过这个随机数来确定第一个遍历的bucket和cell，所以肯定是无序的。

## float可以作为map的key吗？

Go中只要是可比较类型，都可以作为key，除开slice，map，functions这几种类型。

具体可以的包括: 布尔，数字，字符串，指针，结构体，通道，接口

特别来说:

1. 对于结构体，只有hash后的值相等以及字面值相等，才被认为是相同的key，很多字面值相等的，hash出来的值并不一定相等，比如说引用
2. 任何类型都可以作为value

### 特殊情况1

```go
func main() {
 m := make(map[float64]int)
 m[1.4] = 1
 m[2.4] = 2
 m[math.NaN()] = 3
 m[math.NaN()] = 3

 for k, v := range m {
  fmt.Printf("[%v, %d] ", k, v)
 }

 fmt.Printf("\nk: %v, v: %d\n", math.NaN(), m[math.NaN()])
 fmt.Printf("k: %v, v: %d\n", 2.400000000001, m[2.400000000001])
 fmt.Printf("k: %v, v: %d\n", 2.4000000000000000000000001, m[2.4000000000000000000000001])

 fmt.Println(math.NaN() == math.NaN())
}
//输出
[2.4, 2] [NaN, 3] [NaN, 3] [1.4, 1] 
k: NaN, v: 0
k: 2.400000000001, v: 0
k: 2.4, v: 2
false
```

通过上述结果可以发现，一定程度上是可以将float作为key的，但是会由于精度损失问题，造成诡异现象，比如说上述的两个例子。

这个现象出现的原因是当采用float作为key的时候，Go会先调用 `Float64frombits` 函数，将其转成uint64类型，然后再插入。

```go
// Float64frombits returns the floating point number corresponding
// the IEEE 754 binary representation b.
func Float64frombits(b uint64) float64 { return *(*float64)(unsafe.Pointer(&b)) }
```

因为float是有精度损失的，所以如果两个float差距很小，结果是可能一致的。

### 特殊情况2

此外，再说明一下`NaN`类型，其具有两个特性:

```go
NAN != NAN
hash(NAN) != hash(NAN)
```

所以在进行hash的时候，Go会给这种类型的数字随机添加一个数，所以NaN添加多次，可能会出现多个不同的结果

### 特殊情况3

关于当 key 是引用类型时，判断两个 key 是否相等，需要 hash 后的值相等并且 key 的字面量相等;

```go
func TestT(t *testing.T) {
 type S struct {
  ID int
 }
 s1 := S{ID: 1}
 s2 := S{ID: 1}

 var h = map[*S]int {}
 h[&s1] = 1
 t.Log(h[&s1])
 t.Log(h[&s2])
 t.Log(s1 == s2)
}
//输出
=== RUN   TestT
--- PASS: TestT (0.00s)
    endpoint_test.go:74: 1
    endpoint_test.go:75: 0
    endpoint_test.go:76: true
PASS

Process finished with exit code 0
```

## 可以边遍历边删除吗？

map 并不是一个线程安全的数据结构。同时读写一个 map 是未定义的行为，如果被检测到，会直接 panic。

上面说的是发生在多个协程同时读写同一个 map 的情况下。 如果在同一个协程内边遍历边删除，并不会检测到同时读写，理论上是可以这样做的。但是，遍历的结果就可能不会是相同的了，有可能结果遍历结果集中包含了删除的 key，也有可能不包含，这取决于删除 key 的时间：是在遍历到 key 所在的 bucket 时刻前或者后。

一般而言，这可以通过读写锁来解决：`sync.RWMutex`。

读之前调用 `RLock()` 函数，读完之后调用 `RUnlock()` 函数解锁；写之前调用 `Lock()` 函数，写完之后，调用 `Unlock()` 解锁。

另外，`sync.Map` 是线程安全的 map，也可以使用。

## 可以对map的元素取地址吗？

不能。

如果通过其他hack的方式，比如unsafe.Pointer获取到了key或者value的地址，也不能长期持有，因为一旦发生扩容，key和value位置就会发生改变，之前保存的地址也就失效了。

## 如何比较两个map相等？

map深度相等的条件：

1. 都为nil
2. 非空、长度相等，指向同一个map实体对象  // 底层数据结构一样
3. 相应的key指向的value”深度“相等 // key对应的值相等，并且值也是相等的，深度其实意味着value可能为数组或者链表等。

直接将使用 map1 == map2 是错误的。这种写法只能比较 map 是否为 nil。

因此只能是遍历map 的每个元素，比较元素是否都是深度相等。

```go
package main

import "fmt"

func main() {
 var m map[string]int
 var n map[string]int

 fmt.Println(m == nil)
 fmt.Println(n == nil)

 // 不能通过编译
 //fmt.Println(m == n)
}
// 输出结果
true
true
```

## map是线程安全的吗？

map不是线程安全的。

在查找、赋值、遍历、删除过程中都会先检测写标志，一旦发现写标志为1，则直接panic。赋值和删除函数在检测完写标志复位后，先将写标志置位，才会进行之后的操作。
