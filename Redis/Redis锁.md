# Redis

## 一、基于Redis的分布式锁

### 基于setnx实现

实现分布式锁时需要实现的两个基本方法：

- 获取锁：
  - 互斥：确保只能有一个线程获取锁
    - 问题1：如果获取锁的服务挂了，就会出现无法释放锁的情况，此时需要给键设置一个过期时间
    - 问题2：必须要保证设置锁和设置过期时间的操作是原子性的。
  - 非阻塞：尝试一次，成功返回true，失败返回false

![image-20231215151120425](https://s2.loli.net/2023/12/15/PprTuwHyYUexb5o.png)

```java
SET lock thread1 EX 10 NX
```

- 释放锁：

  - 手动释放

    - 问题：存在超时删别人的锁的情况

    ![image-20231215160725279](https://s2.loli.net/2023/12/15/xSpGiVLlNeXQCDh.png)

    解决上述问题也是比较简单的，需要判断锁是否属于自己即可。使用UUID来标记不同的锁，原因是因为不同的jvm的进程id可能一样

    - 存在某些极端的问题，就算标记了UUID同样会存在并发不安全的问题

      ```java
      String threadId = ID_PREFIX + Thread.currentThread().getId();
      String id = stringRedisTemplate.opsForValue().get(KEY_PREFIX + name);
      if (threadId.equals(id)) {
          stringRedisTemplate.delete(KEY_PREFIX + name);
      }
      ```

      比如这种情况，必须要保证判断和释放的原子性操作，如果判断已经进行了，但是delete出现了阻塞，导致超时，线程2开了一个新锁，这时线程1同样会将线程2开的锁删了，导致问题。

      ![image-20231215163646840](https://s2.loli.net/2023/12/15/JBbj8Hvl9pLcRiI.png)

**采用LUA脚本实现判断和删除原子一致性**

```lua 
-- 这里的 KEYS[1] 就是锁的key，这里的ARGV[1] 就是当前线程标示
-- 获取锁中的标示，判断是否与当前线程标示一致
if (redis.call('GET', KEYS[1]) == ARGV[1]) then
  -- 一致，则删除锁
  return redis.call('DEL', KEYS[1])
end
-- 不一致，则直接返回
return 0
```

**Java调用lua脚本**

```java
private static final DefaultRedisScript<Long> UNLOCK_SCRIPT;
    static {
        UNLOCK_SCRIPT = new DefaultRedisScript<>();
        UNLOCK_SCRIPT.setLocation(new ClassPathResource("unlock.lua"));
        UNLOCK_SCRIPT.setResultType(Long.class);
    }

public void unlock() {
    // 调用lua脚本
    stringRedisTemplate.execute(
            UNLOCK_SCRIPT,
            Collections.singletonList(KEY_PREFIX + name),
            ID_PREFIX + Thread.currentThread().getId());
}
```

经过以上代码改造后，我们就能够实现 拿锁比锁删锁的原子性动作了~

#### 仍然存在的问题

- 不可重入: 同一个线程无法多次获取统一把锁，A调B，B需要获取锁，A已经获取锁，导致死锁
- 不可重试: 获取锁只尝试一次就返回false，没有重试机制
- 超时释放：锁超时释放虽然可以避免死锁，但是如果是业务执行耗时较长，也会导致锁的释放，存在安全隐患
- 主从一致性：如果Redis提供了主从集群，主从同步存在延迟，当主宕机时，相当于从节点的锁资源还是存在的，造成了不一致；

### Redisson可重入锁的原理

- 不仅记录线程标识，又要记录获取重入次数







## Redis如何解决集群情况下分布式锁的可靠性？

为了保证集群环境下分布式锁的可靠性，Redis官方已经设计了一个分布式锁算法RedLock；

它是基于多个Redis节点的分布式锁，即使有节点发生了故障，锁变量依然是存在的，客户端还是可以完成锁操作。官方推荐是至少5个节点，而且都是主节点，它们之间没有任何关系，都是一个个孤立的节点；

### 算法思想

让客户端与多个独立的redis节点依次请求加锁，如果客户端能够和半数以上的节点成功地完成加锁操作，那么我们就认为，客户端能够获得分布式锁，否则加锁失效；

### 算法流程

1. 客户端获取当前时间(t1);
2. 客户端按顺序依次向N个redis节点执行加锁操作；
   - 加锁使用set命令，带上nx，ex/px(代表的是毫秒)选项
   - 如果某个redis节点故障了，为了保证在这种情况下，redlock能够继续进行，我们需要给加锁操作设置一个超时时间；
3. 一旦客户端从超过半数以上的redis节点获取了锁，就再次获取当前时间(t2)，然后计算整个加锁的总耗时，如果这个时间差小于锁的过期时间，认为客户端加锁成功，否则认为加锁失败；
4. 加锁成功之后，客户端需要重新计算这把锁的有效时间，计算结果是锁的过期时间减去(t2 - t1)，如果计算的结果已经来不及完成共享数据的操作了，我们可以释放锁，以免出现还没完成数据操作，锁就过期了的情况；
5. 如果加锁失败，客户端向所有redis节点发起释放锁的操作，释放锁的操作和在单节点上释放锁的操作一样，只要执行释放锁的LUA脚本即可；























































































