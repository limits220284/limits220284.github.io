# Redis之内存回收

- Redis是如何知道一个key是否过期呢？
- 是不是TTL到期就自动删除了呢？

## 一、过期策略

### DB结构

Redis本身是一个典型的key-value内存存储数据库，因此所有的key，value都保存在之前的Dict结构中。不过在其database结构体中，有两个Dict：一个用来记录key-value；另一个用来记录key-TTL

![image-20231223150221511](https://s2.loli.net/2023/12/23/k4H1qr7hL2jmgXP.png)

![image-20231223150355074](https://s2.loli.net/2023/12/23/aVFMPTwmC5NcH4S.png)

#### 两个问题

1. Redis是如何知道一个key是否过期呢？
   - 利用两个Dict分别记录key-value以及key-ttl对
2. 是不是TTL到期就立即删除了呢？
   - 惰性删除
   - 周期删除

### 惰性删除

顾名思义并不是在TTL到期后就立即删除，而是在访问一个key的时候，检查该key的存活时间，如果已经过期才删除

![image-20231223150959724](https://s2.loli.net/2023/12/23/tl7Ny6CR14dKDro.png)

### 周期删除

通过一个定时任务，周期性的**抽样部分过期的key**，然后执行删除。执行周期有两种:

- Redis会设置一个定时任务serverCron(),按照server.hz的频率来执行过期key清理，模式为SLOW；
- Redis的每个事件循环前会调用beforeSleep()函数，执行过期key清理，模式为FAST

![image-20231223152013923](https://s2.loli.net/2023/12/23/2jbyxHptT5NR7oM.png)

#### SLOW模式规则

- 执行频率受server.hz的影响，默认为10，即每秒执行10次，每个执行周期100ms
- 执行清理耗时不超过执行周期的25%
- 逐个遍历DB，逐个遍历db中的bucket，抽取20个key判断是否过期
- 如果没有达到时间上限(25ms) 并且过期key比例大于10% ，再进行一次抽样，否则结束

#### FAST模式规则

- 执行频率受beforeSleep()调用频率影响，默认为10，每个执行周期100ms；
- 执行清理耗时不超过1ms；
- 逐个遍历DB，逐个遍历db中的bucket，抽取20个key判断是否过期；
- 如果没有达到时间上限(1ms) 并且过期key比例大于10% ，再进行一次抽样，否则结束；

## 二、淘汰策略

**内存淘汰**：就是当Redis内存使用达到阈值时，Redis主动挑选部分key删除以释放更多内存的流程。

Redis会在处理客户端命令的方法processCommand()中尝试做内存淘汰：

![image-20231223152816161](https://s2.loli.net/2023/12/23/AvtfMwKNck7huFL.png)

Redis支持8种不同策略来选择要删除的key:

1. **noeviction**: 不淘汰任何key，但是内存满时不允许写入新数据，默认就是这种策略。
2. **volatile-ttl**: 对设置了TTL的key，比较key的剩余TTL值，TTL越小越先被淘汰
3. **allkeys-random**: 对全体key ，随机进行淘汰。也就是直接从db->dict中随机挑选
4. **volatile-random**:对设置了TTL的key ，随机进行淘汰。也就是从db->expires中随机挑选
5. **allkeys-lru**:对全体key，基于LRU算法进行淘汰
6. **volatile-lru**:对设置了TTL的key，基于LRU算法进行淘汰
7. **allkeys-lfu**:对全体key，基于LFU算法进行淘汰
8. **volatile-lfu**: 对设置了TTL的key，基于LFU算法进行淘汰

比较容易混淆的有两个:

- LRU(Least Recently Used)，最少最近使用。用当前时间减去最后一次访问时间，这个值越大则淘汰优先级越高；
- LFU(Least Frequently Used)，最少频率使用。会统计每个key的访问频率，值越小淘汰优先级越高；

![image-20231223153329112](https://s2.loli.net/2023/12/23/gZasEy2QUmqoNjb.png)

![image-20231223153828873](https://s2.loli.net/2023/12/23/n85D1eNGLZVcfEl.png)

LFU的访问次数之所以叫做逻辑访问次数，是因为并不是每次key被访问都计数，而是通过运算:

1. 生成 $0-1$之间的随机数R；
2. 计算 $\frac{1}{旧次数 * lfuLogFactor + 1}$, 记录为P，lfuLogFactor默认为10；
3. 如果 $R < P$ ，则计数器 + 1，且最大不超过255；
4. 访问次数会随着时间衰减，距离上一次访问时间间隔lfuDecayTime分钟(默认1)，计数器-1；

![image-20231223154251368](https://s2.loli.net/2023/12/23/Fn2Zy8oQeujRLm3.png)

- NO_EVICTION：非驱逐方式；
- maxmemory_samples：淘汰池子最大采样次数；
