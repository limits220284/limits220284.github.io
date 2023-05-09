# spfa求最短路

- 算法的主要思想是对于bellman_ford算法的改进
- 因为bellman_ford 算法是通过边松弛来做的, dis[b] = min(dis[b], dis[a] + w)
可以通过上面的式子看出,只有dis[a]在变小的时候,dis[b]才会变小。所以spfa会通过队列的方式先将变小的点存储起来，然后通过这些点来更新与其相邻的点。
- spfa也侧面反映了，bellman_ford算法存在的不足，后者在更新的过程中，如果dis[a]本身就已经不变了，那么再通过 $a \leftrightarrow b$ 之间的边来更新b，那么b也不会更新，导致时间上的浪费。

```python
import collections
from collections import deque
# 采用邻接表进行图的存储
n, m = map(int, input().split())
g = [[] for i in range(n+1)]
for i in range(m):
    a, b, w = map(int, input().split())
    g[a].append((b, w))

mx = float('inf')
dis = [mx] * (n+1)
vis = [False] * (n+1)

def spfa(be, ed):
    # 采用堆优化的版本
    dis[be] = 0
    vis[be] = True #表示当前点在队列中
    que = deque()
    que.append(be)
    # 每次选取be到最短某个点
    while que:
        v = que.popleft()
        vis[v] = False
        for x, d in g[v]:
            if dis[x] > dis[v] + d:
                dis[x] = dis[v] + d
                if not vis[x]:
                    que.append(x)
                    vis[x] = True
    return dis[ed]

k = spfa(1, n)
if k == mx:
    print('impossible')
else:
    print(k)
    
    

```

- 采用vis数组的目的主要是为了解决这一种情况，因为spfa的算法思想是通过被更新的点来更新其他点，但是会出现一种情况，很多点都指向同一个点，所以会导致该点会加入队列多次。
- 所以此时需要记录一下队列中是否已经有该点了，如果有就没有必要再次加入了。

## spfa 判断负环

```python
import collections
from collections import deque
# 采用邻接表进行图的存储
n, m = map(int, input().split())
g = [[] for i in range(n+1)]
for i in range(m):
    a, b, w = map(int, input().split())
    g[a].append((b, w))
cnt = [0] * (n+1)
mx = float('inf')
dis = [0] * (n+1)
vis = [False] * (n+1)

def spfa(be, ed):
    que = deque()
    for i in range(n+1):
        vis[i] = True
        que.append(i)
    # 每次选取be到最短某个点
    while que:
        v = que.popleft()
        vis[v] = False
        for x, d in g[v]:
            if dis[x] > dis[v] + d:
                dis[x] = dis[v] + d
                cnt[x] = cnt[v] + 1
                if cnt[x] >= n:
                    return True
                if not vis[x]:
                    que.append(x)
                    vis[x] = True
    return False

if spfa(1, n):
    print('Yes')
else:
    print('No')
```
