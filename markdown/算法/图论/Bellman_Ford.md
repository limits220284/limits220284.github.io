
# Bellman-Ford 算法

- 算法过程
  - 循环n次
  - 更新所有的边
    - $dist[b] = min(dist[b], dist[a] + w)$
  - 所以循环k次就是最短路径不超过k个
  - 如果最短路径上存在n条边,那么就意味着存在n+1个点,通过鸽巢原理可以知道，必定有两个点的标号相同，存在环，但是还在更新，所以是存在负环。
时间复杂度 $O(nm)$

```c++
#include <iostream>
#include <algorithm>
#include <cstring>
using namespace std;
const int N = 510, M = 10010;
struct Edge{
    int a, b, w;
}edges[M];

int dist[N], backup[N];
int n, m, k;

void bellman_ford(){
    memset(dist, 0x3f, sizeof dist);
    dist[1] = 0;
    for(int i = 0; i < k; i++){
        memcpy(backup, dist, sizeof dist);
        for(int j = 0; j < m; j++){
            int a = edges[j].a, b=edges[j].b, w=edges[j].w;
            dist[b] = min(dist[b], backup[a] + w);
        }
    }
}
int main(){
    scanf("%d%d%d", &n, &m, &k);
    for(int i = 0; i < m; i++){
        int a, b, c;
        scanf("%d%d%d", &a, &b, &c);
        edges[i] = {a, b, c};
    }
    bellman_ford();
    if(dist[n] > 0x3f3f3f3f/2){
        puts("impossible");
    }
    else{
        printf("%d", dist[n]);
    }
    return 0;
}
```
