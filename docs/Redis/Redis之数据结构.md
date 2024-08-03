# Redis之数据结构

## 一、数据结构

### 1. 动态字符串(SDS)(Simple Dynamic String)

- c语言中的字符串是不可修改的

  ![image-20231219232627225](https://s2.loli.net/2023/12/19/oCkB8uPvgDTqQ5M.png)

#### 扩容机制

- 如果新字符串小于1M，则新空间为扩展后字符串长度的两倍+1
- 如果新字符串大于1M，则新空间为扩展后字符串长度+1M+1。称为内存预分配

#### 优点

- 支持动态扩容

- 减少内存分配次数

- 二进制安全

### 2. IntSet

IntSet是Redis中set集合的一种实现方式，基于整数数组来实现，并且具备长度可变、有序等特征

![image-20231219232705965](https://s2.loli.net/2023/12/19/kFCriIh7eBSJnDw.png)

#### 具有的特点

1. Redis会确保IntSet中元素的唯一，有序

2. 具备类型升级功能，可以节省内存空间

3. 底层采用二分查找的功能来查询

### 3. Dict

我们知道Redis是一个键值型的数据库，我们可以根据键实现快速的增删改查。而键与值得映射关系正式通过Dict实现的；

![image-20231219234455228](https://s2.loli.net/2023/12/19/TUIOpbK8fn4LMBF.png)

当我们向Dict添加键值对的时候，Redis首先根据key计算出hash值，然后利用h & sizemask来计算元素应该存到数组的哪个位置。

![image-20231219235157892](https://s2.loli.net/2023/12/19/6sdCRFrMqc2vQTE.png)

#### Dict的扩容

如果数量太多，会导致hash冲突太多，查询效率会大大降低

Dict在每次新增键值对时候都会检查负载因子(LoadFactor  = used / size) ，满足以下两种情况的时候会触发哈希表扩容:

1. Dict的loadFactor >= 1，并且服务器没有执行BGSAVE和BGREWRITEAOF等后台进程；
2. 哈希表LoadFoactor > 5;

![image-20231219235554176](https://s2.loli.net/2023/12/19/R3ay7AEeGifc49k.png)

#### Dict的收缩

当LoadFactor < 0.1 时，会做哈希收缩

![image-20231219235806567](https://s2.loli.net/2023/12/19/k1pLrIwEqXz6m2a.png)

#### Dict的Rehash - 渐进式rehash

不管是扩容还是收缩，必定会创建新的哈希表，导致哈希表的size和sizemask变化，而key的查询与sizemask有关。因此必须对哈希表中的每一个key重新计算索引，插入新的哈希表，这个过程称为**rehash**。过程是这样的：

1. 计算新hash表的realSize，值取决于当前是要做扩容还是做收缩
   - 如果是扩容，则新size为第一个大于等于dict.ht[0].used + 1的 $2 ^ n$
   - 如果是收缩，则新size为第一个大于等于dict.ht[0].used的 $2 ^ n$
2. 按照新的realSize申请出内存空间，创建dictht，并赋值给dict.ht[1]
3. 设置dict.rehashidx = 0，表示开始rehash
4. 将dict.ht[0]中的每一个dictEntry都refresh到dict.ht[1]
   - 每次执行新增、查询、修改、删除操作时候，都检查一下dict.rehashidx是否大于-1，如果是则将dict.ht[0].table[rehashidx]的entry链表rehash到dict.ht[1]，并且rehashidx++。直至dict.ht[0]的所有数据都rehash到dict.ht[1]
5. 将dict.ht[1]赋值给dict.ht[0]，给dict.ht[1]初始化为空哈希表，释放原来的dict.ht[0]的内存
6. 将rehashidx值设置为-1，代表rehash结束
7. 在rehash过程中，新增操作，直接写入ht[1]，查询、修改和删除操作则会在dict.ht[0]和dict.ht[1]依次查找并且执行。这样可以确保ht[0]中的数据只增不减，随着rehash最终为空

### 4. ZipList

ZipList 是一种特殊的双端列表，由一系列特殊的编码组成。可以在任意一端进行压入弹出操作，并且该操作时间复杂度为O(1)

![image-20231220152119714](https://s2.loli.net/2023/12/20/KkY59OGHdepCMcP.png)

ZipList中的Entry并不像普通链表那样记录前后节点的指针，因为记录两个指针要占用16个字节，浪费内存。而是采用了下面的结构：

![image-20231220152524253](https://s2.loli.net/2023/12/20/m2sgT8qza4xBGN1.png)

- previous_entry_length：前一节点的长度，占一个或者5个字节。
  - 如果前一节点长度小于254字节，则采用1个字节来保存这个长度值
  - 如果前一节点大于254个字节，则采用5个字节来保存这个长度值，第一个字节为0xfe，后四个字节才是真实长度数据
- encoding：编码属性，记录content数据类型(字符串还是整数)以及长度，占用1个，2个或者5个字节
- contents：负责保存节点的数据，可以是字符串或整数

#### encoding编码

- 字符串：如果encoding以"00"，“01”，“10”开头，则证明content是字符串

  ![image-20231220173236791](https://s2.loli.net/2023/12/20/sSRtvUOezE2orcK.png)

- 数字

  ![image-20231220173831309](https://s2.loli.net/2023/12/20/aGX25sQ7z8KoZSi.png)

#### ZipList连锁更新问题

### 5. QuickList

#### 定义

- 是一个节点为ZipList的链表
- 节点采用ZipList，解决了传统链表的内存占用问题
- 控制了ZipList大小，解决连续内存空间申请效率问题
- 中间节点可以压缩，进一步节省了内存

1. 问题1: ZipList虽然节省内存，但申请内存必须是连续空间，如果内存占用较多，申请内存效率很低，怎么办？
   - 为了缓解这个问题，我们必须限制ZipList的长度和entry的大小
2. 但是我们要存储大量数据，超出了ZipList最佳的上限该怎么办？
   - 我们可以创建多个ZipList来存储分片数据
3. 数据拆分后比较分散，不方便管理和查找，这多个ZipList如何建立联系？
   - Redis在3.2版本引入了新的数据结构QuickList，它是一个双端链表，只不过链表中的每个节点都是一个ZipList

![image-20231220205658819](https://s2.loli.net/2023/12/20/DbNup9aeBTCrnE4.png)

#### list-max-ziplist-size

为了避免QuickList中的每个ZipList中entry过多，Redis提供了一个配置项：list-max-ziplist-size来限制。

- 如果值为正，则代表ZipList的允许的entry个数的最大值

- 如果值为负数，则代表ZipList的最大内存大小，分为5种情况

  ![image-20231220210120730](https://s2.loli.net/2023/12/20/4jMIxqJ6ESrsLvn.png)

- 默认值是-2

#### list-compress-depth

除了控制ZipList的大小，QuickList还可以对节点的ZipList做压缩。通过配置list-compress-depth来控制。因为链表一般都是从首尾访问比较多，所以首尾是不压缩的。这个参数是控制首尾不压缩的节点个数：

- 0：特殊值，代表不压缩
- 1：标示QuickList的首尾各有一个节点不压缩，中间节点压缩
- 2：标示QuickList的首尾各有一个节点不压缩，中间节点压缩
- 3：....
- 默认值是不压缩

#### 数据结构

![image-20231220211022388](https://s2.loli.net/2023/12/20/uKdfw7OaeGAqLFN.png)

![image-20231220211331682](https://s2.loli.net/2023/12/20/23BQ7nMLckjgrhi.png)

### 6. SkipList

#### 定义

- **SkipList** 首先双向链表，每个节点都包含score和element值但与传统链表相比有几点差异

  - 元素按照升序排列存储

  - 节点可能包含多个指针，指针跨度不同

- 节点按照score值排序，score值一样则按照element值字典排序

- 每个节点都可以包含多层指针，层数是1到32之间的随机数

- 不同层指针到下一个节点的跨度不同，层级越高，跨度越大

- 增删查改效率与红黑树基本一致，实现却更加简单

![image-20231220212306983](https://s2.loli.net/2023/12/20/GhymvoqdPsZInix.png)

#### 数据结构

![image-20231220212610786](https://s2.loli.net/2023/12/20/oisDcEtRLlKeuxr.png)

![image-20231220212644642](https://s2.loli.net/2023/12/20/y2TviVf1ujB7SqK.png)

### 7. RedisObject

#### 定义&数据结构

Redis中的任意数据类型的键和值都会被封装为一个RedisObject，也叫做Redis对象，源码如下：

![image-20231220213326843](https://s2.loli.net/2023/12/20/39ot7c8BbE12T5Z.png)

#### Redis的编码方式

Redis会根据存储的数据类型不同，选择不同的编码方式，共包含11种不同的类型：

![image-20231220213658082](https://s2.loli.net/2023/12/20/CWXVhBKyJOIUiSQ.png)

#### 五种数据结构

Redis会根据存储的数据类型不同，选择不同的编码方式。每种数据类型的使用的编码方式如下：

![image-20231220213925114](https://s2.loli.net/2023/12/20/MVftF7o1xBSiEvg.png)
