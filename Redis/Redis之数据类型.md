# Redis之数据类型

## 一、数据类型

### 1. String

#### 定义

String是Redis中最常见的数据存储类型：

- 其基本编码方式是**RAW**，基于简单动态字符串(SDS)实现，存储上限为512MB
- 如果存储的SDS长度小于44字节，则会采用**EMBSTR** 编码，此时object head与SDS是一段连续空间。申请内存时只需要调用一次内存分配函数，效率更高
- 如果存储的字符串是整数值，并且大小在LONG_MAX范围内，则会采用INT编码：直接将数据保存在RedisObject的ptr指针位置（刚好八字节），不再需要SDS了。

![image-20231220215008297](https://s2.loli.net/2023/12/20/6QVjfFLGDcWiHAr.png)

### 2. List

Redis的List类型可以从首、尾操作列表中的元素：

哪一个数据结构能够满足上述特征？

- LinkedList：普通链表，可以从双端访问，内存占用较高，内存碎片较多
- ZipList：压缩列表，可以从双端访问，内存占用低，存储上限低
- **QuickList**：LinkedList + ZipList，可以从双端访问，内存占用较低，包含多个ZipList，存储上限高

![image-20231220221049835](https://s2.loli.net/2023/12/20/KvyICMcHoz6e4Qa.png)

### 3. Set

#### 定义

Set是Redis中的单列集合，满足下列特点：

- 不保证有序性
- 保证元素唯一(可以判断元素是否存在)
- 求交集、并集、差集

- 为了查询效率和唯一性，set采用HT编码(DIct)。Dict中的Key用来存储元素，value统一为null；
- 当存储的所有数据都是整数，并且元素数量不超过set-max-intset-entries时，Set会采用IntSet编码，以节省内存；

![image-20231220222420979](https://s2.loli.net/2023/12/20/EaPb6TN4XYHA1OG.png)

### 4. ZSet

#### 定义

ZSet也就是SortedSet，其中每一个元素都需要指定一个score值和member值：

- 可以根据score值排序
- member必须唯一
- 可以根据member查询分数

#### 实现方式1

因此zset底层数据结构必须满足键值存储、键必须唯一、可排序这几个需求。

- **SkipList**：可以排序，并且可以同时存储score和ele值(但是无法满足快速查询member)
- **HT(Dict)**：可以键值存储，并且可以根据key找value
- 全部都要，通过HT进行member查询和唯一性，跳表来进行排序查询

![image-20231220223055955](https://s2.loli.net/2023/12/20/gctAubBrhZD4lzn.png)

![image-20231220223211601](https://s2.loli.net/2023/12/20/aXlnd6D7HW2FgOo.png)

#### 实现方式2

当元素数量不多时，HT和SkipList优势不明显，而且更耗内存。因此zset还会采用ZipList结构来节省内存，不过需要同时满足两个条件。

- 元素数量小于zset_max_ziplist_entries，默认值128
- 每个元素都小于zset_max_ziplist_value字节，默认值64

ziplist本身没有这种功能，而且没有键值对的概念，因此需要zset通过编码实现：

- ZipList是连续内存，因此score和element是紧挨着在一起的两个entry，element在前，socre在后
- score越小越接近队首，socre越大越接近队尾，按照score值升序排列
- 查询的时候，直接遍历
- 插入的时候，排序插入

![image-20231220224501142](https://s2.loli.net/2023/12/20/zZtbIkTu47xBp3g.png)

#### 总结

- 当zset初始化的时候，按照以下规则进行初始化

  - 检查是否满足ziplist的条件，优先ziplist

  ![image-20231220223801659](https://s2.loli.net/2023/12/20/Uf894KQLZi2F6dB.png)

- 编码转换部分

  - 如果是ziplist且具有转换的风险，则进行转换
    - 添加后超过数量
    - 添加的元素大小超过
    - 总的超过

  ![image-20231220224131674](https://s2.loli.net/2023/12/20/IvTN2j5ZtW9CMq4.png)

### 5. Hash

#### 定义

- 都是键值存储
- 都需求根据键获取值
- 键必须唯一

区别如下：

- zset的键是member，值是socre；hash的键和值都是任意值
- zset要根据score排序；hash则无需排序

#### 实现方式

Hash底层采用的编码与Zset基本一致，只需要把排序有关的SkipList去掉即可：

- Hash结构默认ZipList编码，用以节省内存。ZipList中相邻的两个entry分别保存field和value
- 当数据量比较大的时候，Hash会默认采用Dict编码，也就是Dict，触发条件有两个：
  - ZipList中的元素数量超过了hash-max-ziplist-entries(默认512)；
  - ZipList中的任意entry大小超过了hash-max-ziplist-value(默认64字节)；
  - ZipList中的总的内存大小超过了；

![image-20231220225145094](https://s2.loli.net/2023/12/20/iACVjwLrQBglHvY.png)
