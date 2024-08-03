# Raft

## 术语

| **中文术语** | **英文术语**          | **含义**                                                     |
| ------------ | --------------------- | ------------------------------------------------------------ |
| 领导者       | leader                | 节点的三种角色之一. 集群的首脑，负责发起”提议“、”提交“被多数派认可的决断. |
| 跟随者       | follower              | 节点的三种角色之一. 需要对 leader 的 ”提议“ 、”提交“和 candidate 的 ”竞选“ 进行响应. |
| 候选人       | candidate             | 节点的三种角色之一. 是一种处于竞选流程中的临时状态，根据多数派投票的结果会切为 leader 或 follower 的稳定态. |
| 最终一致性   | finnal consistency    | 中强一致性. 对于写请求，服务端保证最终一定能提供出正确的结果，但需要同步时间. 同步期间，可能被读到不一致的老数据. |
| 即时一次性   | immediate consistency | 强一致性. 服务端要求做到写入立即可读.                        |
| 预写日志     | write ahead log       | 记录写请求明细的日志.（单指 raft 算法下狭义的预写日志）      |
| 状态机       | state machine         | 节点内存储数据的介质.                                        |
| 提议         | proposal              | 两阶段提交的第一个阶段. 指的是 leader 向所有节点发起日志同步请求的过程. |
| 提交         | commit                | 两阶段提交的第二个阶段. 指的是 leader 认可一笔写请求已经被系统采纳的动作. |
| 应用         | apply                 | 指的是将预写日志记录内记录的写操作应用到状态机的过程.        |
| 任期         | term                  | 任期是用于标识 leader 更迭的概念. 每个任期内至多只允许有一个 leader. |
| 日志索引     | index                 | 日志在预写日志数组中的位置.                                  |
| 脑裂         | brain split           | 同一任期内，集群出现两个 leader，导致秩序崩盘.               |



## 协议

### 1. 多数派原则

![图片](https://s2.loli.net/2024/04/03/A4YVSg9hfuaepOm.webp)



### 2. 一主多从、读写分离

![图片](https://s2.loli.net/2024/04/03/Y8mgVGt6OQZ2w53.webp)

### 3. 状态机和预写日志

![图片](https://s2.loli.net/2024/04/03/HaNwOT8vtI2Yhzj.webp)

**预写日志**（write ahead log，简称 wal）是通过日志的方式记录下每一笔写请求的明细（例如 set x = 3 这样一笔记录），使得变更历史有迹可循. 在 raft 算法中，写请求会先组织成预写日志的形式添加到日志数组中，当一个日志（写请求）达到集群多数派的认可后，才能够被提交，将变更应用到状态机当中.

![image-20240403194333940](https://s2.loli.net/2024/04/03/S9LUY5Nj3P4WnOT.png)

1. leader发送心跳的时候会携带当前的term和index
2. follower也会维护一个日志数组
   - 先比较最后的日志和leader倒数第二个相同
     - 相同：同步预写日志；
     - 不同：否决，补齐缺少的预写日志；



### 4、两阶段提交

![图片](https://s2.loli.net/2024/04/03/dEib1HQaf2T9wv4.webp)

1. leader 接收到来自客户端的一笔写请求；

2. **leader 将写请求添加到本地的预写日志中，并向集群中其他节点广播同步这笔写请求**. 这个过程可以称之为“提议”（proposal）；

3. 集群中各节点接收到同步请求后，会一套检验机制判断是否能执行同步（添加到预写日志），校验机制这里不细述，留待 4.1 小节细说；

4. 倘若集群总计半数以上的节点（包括 leader 自身）都将这笔请求添加预写日志，并给予了 leader 肯定的答复（ack），那么 leader 此时会“提交”这个请求，并给予客户端写请求已成功处理的响应；

5. 其他节点在随后的时段中，会通过与 leader 的交互（心跳或其他同步数据的请求）感知到这个“提交”动作，最终也在预写日志中提交这笔请求；

6. 被提交的预写日志具备了被应用到状态机的资格. 但应用的时机取决于实现方式，倘若只追求最终一致性，可以选择异步应用；倘若追求立即一致性，则会要求 leader 先应用到状态机，才能给予客户端 ack.



### 5、领导者选举

#### 什么时候感知到leader没了？

leader需要定期向集群中的follower发送心跳，证明自己是活着的，follower会建立一个心跳检测器，当超过一定时间没有检测到leader的心跳，则认为leader没了，切换为candidate，发起竞选；

#### 怎么成为leader？

follower 成为 candidate 后,会广播向所有节点拉票，当投赞同票的节点数（包括candidate 本身）达到多数派的时候，该 candidate 会胜任，成为新的 leader.



### 6、任期与日志索引

![图片](https://s2.loli.net/2024/04/03/SyDiECkUXwcJ1np.webp)

#### 注意

1. Term间可以没有leader
2. 节点中的预写日志存放在一个数组中，每则日志在数组中的位置称之为索引 index；
3. Term和index构成全局唯一键，只要这两个一样，里面的日志就是一样的；



## 角色流转

### 1、角色定义及切换

![图片](https://s2.loli.net/2024/04/03/dtAYuMW3GS29qpl.webp)





1. leader -> follower
   - 倘若 leader 发现当前系统中出现了更大的任期，则会进行“禅让”，主动退位成 follower.
     -  向 follower 提交日志同步请求时,从 follower 的响应参数中获得; 
     - 收到了来自新任 leader 的心跳或者同步日志请求；
     - 收到了任期更大的 candidate 的拉票请求.

2. follower -> candidate
   - leader 需要定期向 follower 发送心跳，告知自己仍健在的消息.；倘若 follower 超过一定时长没收到 leader 心跳时，会将状态切换为 candidate ，在当前任期的基础上加 1 作为竞选任期，发起竞选尝试补位.

3. candidate -> follower

   - candidate 参与竞选过程中，出现以下两种情形时会退回 follower：

     - 多数派投了反对票；

     -  竞选期间，收到了任期大于等于自身竞选任期的 leader 传来的请求.

4. candidate -> leader
   - candidate 竞选时，倘若多数派投了赞同票，则切换为 leader.

5. candidate -> candidate
   - candidate 的竞选流程有一个时间阈值. 倘若超时仍未形成有效结论（多数派赞同或拒绝），则会维持 candidate 身份，将竞选任期加1，发起新一轮竞选.



### 2、领导者

![图片](https://s2.loli.net/2024/04/03/AdhSZXKtTCwgcNa.webp)

1. 周期发送心跳
   - 让follower重置心跳检测器
   - 在心跳请求中携带上 leader 最新已提交日志的标识 id（term + index），推动 follower 更新日志提交进度.
2. 写请求(两阶段提交)
   - 广播 proposal，向所有节点同步这一请求；
   - 当请求得到多数派的赞同后，才会提交这一请求；



### 3、跟随者

![图片](https://s2.loli.net/2024/04/03/jNbYztJhgBkUXwO.webp)

1. 负责同步 leader 传来的写请求，此时也有一个参与民主反馈的过程，倘若同步成功，会给予 leader 正向反馈，当 leader 的同步请求收到半数以上的认可时，会提交日志；

2. 通过接收 leader 心跳的方式，获取到携带的 commitIndex 信息，及时完成已被多数派认可的预写日志的提交，以推进其写入状态机的进度. 这一项相当于做到了数据的备份，也被读请求最终一致性提供了保证;

3. 负责为参与竞选 candidate 的投票，决定赞同与否的判断机制见 5.3 小节；

4. 通过心跳检测定时器时时关注 leader 的健康状态，当超时未收到心跳时，会切换为 candidate 发起竞选.



### 4、 候选者



<img src="https://s2.loli.net/2024/04/03/9VEewFKIRLvQpP4.webp" alt="图片" style="zoom: 50%;" />



（1）倘若 follower 切为 candidate，会将当前任期加1，作为竞选任期；

（2）会将自身的一票投给自己；

（3）广播向所有节点拉票；

（4）倘若拉票请求超时前，得到多数派认可，则上位为 leader；

（5）倘若拉票请求超时前，遭到多数派拒绝，则老实退回 follower；

（6）倘若拉票请求超时前，收到了任期大于等于自身竞选任期的 leader 的请求，则老实退回 follower；

（7）倘若拉票请求超时，则竞选任期加 1，发起新一轮竞选拉票请求.



### 5、raft 算法下的外部请求链路梳理

#### 5.1 写

![图片](https://s2.loli.net/2024/04/03/ofad41TCABgi27b.webp)



（1）写操作需要由 leader 统一收口. 倘若 follower 接收到了写请求，则会告知客户端 leader 的所在位置（节点 id），让客户端重新将写请求发送给 leader 处理；

（2）leader 接收到写请求后，会先将请求抽象成一笔预写日志，追加到预写日志数组的末尾；

（3）leader 会广播向集群中所有节点发送同步这笔日志的请求，称之为第一阶段的“提议”；

（4）follower 将日志同步到本机的预写日志数组后，会给 leader 回复一个“同步成功”的ack；

（5）leader 发现这笔请求对应的预写日志已经被集群中的多数派（包括自身）完成同步时，会”提交“该日志，并向客户端回复“写请求成功”的 ack.



#### 写问题

##### leader 任期滞后

在第（4）步中，倘若 follower 发现当前 leader 的 term 小于自己记录的最新任期，本着”前朝的剑不斩本朝官“的原则，follower 会拒绝 leader 的这次同步请求，并在响应中告知 leader 当前最新的 term；leader 感知到新 term 的存在后，也会识相地主动完成退位.

##### follower 日志滞后

同样在第（4）步中，此时虽然 leader 的 term 是最新的，但是在这笔最新同步日志之前， follower 的预写日志数据还存在缺失的数据，此时 follower 会拒绝 leader 的同步请求；leader 发现 follower 响应的任期与自身相同却又拒绝同步，会递归尝试向 follower 同步预写日志数组中的前一笔日志，直到补齐 follower 缺失的全部日志后，流程则会回归到正常的轨道.

![图片](https://s2.loli.net/2024/04/04/GOBhLTQumHfkgyU.webp)

##### follower 日志”超前“

同样在第（4）步中，leader 的 term 是最新的，但是 follower 在 leader 最新同步日志的索引及其之后已存在日志，且日志内容还与当前 leader 不一致. 此时 follower 需要移除这部分”超前“的日志，然后同步 leader 传送的日志，向当前在任 leader 看齐.

![图片](https://s2.loli.net/2024/04/04/RYPsbZpogSBcGOD.webp)

小结：case 2 和 case 3 的处理方式共同保证了，在 raft 算法下，各节点间预写日志数组的已提交部分无论在内容还是顺序上都是完全一致的.

##### 如何将最终一致性升级到即时一致性？

标准的 raft 算法模型中，在 C 方面只能做到”最终一致性“的语义. 倘若想要升级为”即时一致性“，就需要在写流程和读流程中都做些额外的处理.

在写流程第（5）步中，leader 不仅需要提交这笔写请求对应的预写日志，还需要确保将这笔日志应用到状态机中，才能给予客户端”请求成功“的 ack，以此保证读 leader 状态机时，能读取到最新的数据.



#### 5.2 读

##### 如何保证强一致性？

1. 写完之后，服务端返回applyindex，下次读带上这个applyindex
2. 强制leader读
   - 问题：如果出现网络分区，会出现脑裂现象
     - 在读请求之前，发起一轮广播，验证自身身份





### 6、raft 算法下的内部请求链路梳理



#### 6.1 日志同步请求

![图片](https://s2.loli.net/2024/04/03/92fODil6zgotVQp.webp)





（1）请求起点：领导者

（2）请求意图：领导者向其他节点同步预写日志(proposal).

（3）请求参数：

| **字段**     | **说明**                                                     |
| ------------ | ------------------------------------------------------------ |
| term         | 领导者的任期                                                 |
| leaderID     | leader 的节点 id，方便后续 follower 转发写请求               |
| leaderCommit | leader 最新提交的日志 index，方便 follower 更新数据进度      |
| prevLogIndex | 当前同步日志的前一条日志的 index.                            |
| prevLogTerm  | 当前同步日志的前一条日志的 term.                             |
| log[]        | 同步的日志，可能为多笔，因为 follower 可能滞后了多笔日志，可见 4.1 小节说明. |

（4）请求终点：

终点1：leader

处理方式：

I 倘若该任期小于自身，拒绝，并回复自己的最新任期；

II 倘若该任期大于自身，退位为 follower,按照 follower 的模式处理该请求.

 

终点2：follower

处理方式：

I：倘若 leader 任期落后于自己，拒绝请求，并回复自己所在的任期；

II：倘若 follower 存在不一致的日志，则删除多余的日志，同步 leader 日志与之保持一致；

III：倘若 follower 存在日志滞后，则拒绝请求，让 leader 重发更早的日志，直到补齐所有缺失.

 

终点3：candidate

I：倘若 leader 任期大于等于自己，退回 follower，按照 follower 模式处理请求；

II：如果 leader 任期小于自己，拒绝，并回复自己的最新任期.

 

（5）响应参数：

| **字段** | **说明**               |
| -------- | ---------------------- |
| term     | 节点当前的任期         |
| success  | 同步日志的请求是否成功 |

 

（6）leader 后处理

倘若多数派都完成了日志同步，leader 会提交这笔日志；

倘若某个节点拒绝了同步请求，并回复了一个更新的任期，leader 会退位回 follower，并更新任期；

倘若某个节点拒绝了同步请求，但回复了相同的任期，leader 会递归发送前一条日志给该节点，直到其接受同步请求为止；

倘若一个节点超时未给 leader 回复，leader 会重发这笔同步日志的请求.

![图片](https://s2.loli.net/2024/04/03/LlA7UdrHNaDG4Jo.webp)

 



#### 6.2 心跳&提交同步请求

![图片](https://s2.loli.net/2024/04/03/KNEBQ5uAPSlxMVp.webp)

（1）请求起点：领导者

（2）请求意图：周期性发送心跳证明自己还健在；同时日志提交的进度.

（3）请求参数：

| **字段**     | **说明**                                                |
| ------------ | ------------------------------------------------------- |
| term         | 领导者的任期                                            |
| leaderID     | leader 的节点 id，方便后续 follower 转发写请求          |
| leaderCommit | leader 最新提交的日志 index，方便 follower 更新数据进度 |

（4）请求终点：

终点1：leader

处理方式：

I 倘若该任期小于自身，直接无视；

II 倘若该任期大于自身，退位为 follower,按照 follower 的模式处理该请求.

 

终点2：follower

处理方式：

I 倘若任期小于自身，直接无视

II 重置 leader 心跳检测计时器. 查看 leaderCommit, 看是否有预写日志可以被提交.

 

终点3：候选人

处理方式：

I 倘若任期小于自身，直接无视

II 如果任期大于等于自己，退回 follower，按照 follower 模式处理请求.

 

注意，心跳请求是单向非阻塞的，leader 发送心跳后无需等待其他节点的回复.





#### 6.3 竞选拉票请求

![图片](https://s2.loli.net/2024/04/03/Vg6tOAWE8ykDeos.webp)

（1）请求起点：候选人

（2）请求意图：拉票，希望得到多数派认同，上位成为 leader

（3）请求参数：

term：当前竞选领导者的任期；

candidateID：候选人的节点 ID；

lastLogIndex：候选人最后一笔预写日志的索引；

lastLogTerm：候选人最后一笔预写日志的任期.

 

| **字段**     | **说明**                                                |
| ------------ | ------------------------------------------------------- |
| term         | candidate 的竞选任期，如果上位了，就采用此任期          |
| candidateID  | candidate 的节点 id，方便 follower 标记自己将票投给了谁 |
| lastLogIndex | candidate 最晚一笔预写日志的 index                      |
| lastLogTerm  | candidate 最晚一笔预写日志的 term                       |

（4）请求终点：

终点1：leader

处理方式：

I 倘若 candidate 的竞选任期小于自身，拒绝，并回复自己的最新任期；

II 倘若 candidate 的竞选任期大于自身，退位为 follower,按照 follower 的模式处理该请求.

 

终点2：follower

处理方式：

I：倘若 candidate 的竞选任期小于自身，拒绝，并回复自己的最新任期；

II：倘若自己已经将票投给了其他 candidate，拒绝；

III：倘若自己已经将票投给了这个 candidate，接受；（candidate 侧会幂等去重）

IV：倘若 candidate 的 lastLogTerm 大于自己最后一笔预写日志的 term，接受；

V：**倘若 candidate 的 lastLogTerm 小于自己最后一笔预写日志的 term，拒绝；**

VI：倘若 candidate 的 lastLogTerm 等于自己最后一笔预写日志的 term，且 candidate 的 lastLogIndex 大于等于自己最后一笔预写日志的 index，接受；

VII：倘若 candidate 的 lastLogTerm 等于自己最后一笔预写日志的 term，且 candidate 的 lastLogIndex 小于自己最后一笔预写日志的 index，拒绝.



终点3：candidate

I：倘若 candidate 的竞选任期小于等于自己的竞选任期，拒绝；

II：倘若 candidate 的竞选任期大于自己的竞选任期，退回 follower，按照 follower 的模式处理.



（5）响应参数：

| **字段** | **说明**       |
| -------- | -------------- |
| term     | 节点当前的任期 |
| granted  | 是否投了赞同票 |

（6）candidate 后处理

I 倘若多数派投了赞同票（包括自己），晋升为 leader，竞选任期则为新的国号；

II 倘若多数派投了反对票，则退回 follower；

III 倘若反对票中，出现了比自己更高的任期，退回 follower，更新任期；

IV 倘若形成多数派决议前，收到了任期大于等于自己的 leader 的请求，退回 follower，更新任期；

V 倘若拉票请求超时，则自增竞选任期，发起新一轮竞选.

 

（7）小结

在第（4）部分，通过 follower 决定投票的判断机制，可以看出，follower 只愿意将票投给数据状态不滞后于自己的 candidate. 又由于 candidate 要获取多数派的赞同票才能上位成为 leader，换言之，只有数据一致性状态在多数派中处于领先地位的 candidate 才有资格成为 leader. 这一项机制非常重要，正是由它保证了”两阶段提交，提交即可响应“这一流程的合理性.

























