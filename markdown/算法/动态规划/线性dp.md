# 线性dp

## 1、最长上升子序列I

```python
n = int(input())
arr = list(map(int,input().split()))
dp = [1] * n
for i in range(1, n):
    for j in range(i):
        if arr[i] > arr[j]:
            dp[i] = max(dp[i], dp[j]+1)
print(max(dp))

```

## 2、最长上升子序列II

- 采用了类似于贪心的思想,设置 $q[N]$ 记录以 $i$ 为长度结尾的最小的数,可以证明 $q[N]$ 中的数是单调递增的
  - 可以采用反证法,设 $i==5$ 长度末尾数字为最小的数为 $\alpha$ , $i==6$ 长度末尾数字为最小的数为 $\beta$ ,如果 $\beta < \alpha$ ,那么在序列 $6$ 中的倒数第二个的数字为 $\gamma < \beta$ ,这就推出了矛盾,即序列 $5$ 长度末尾数字不是最小的。
  - 所以可以说明按着这种思想进行长度的排列,最后得出的序列的末尾数字就是单调递增的
  - 那么通过这种思想,我们可以每次加入一个 $a_i$ ,然后通过二分查找找到小于 $a_i$ 的最大的长度序列,然后加进去,此时该长度序列长度加一,所以下一位的长度序列的末尾值需要判断一下是否需要更新,这取决于 $a_i$ 是否小于当前序列的末尾值。
  - 最后返回值就是最大的长度

```python
n = int(input())
a = list(map(int, input().split()))
q = [0] * (n+1)
le = 0
q[0] =- 2e9
for a_i in a:
    l, r = 0, le
    # 开始插入a_i
    while l < r:
        mid = (l+r+1) // 2
        if q[mid] < a_i:
            l = mid
        else:
            r = mid - 1
    le = max(le, r+1)
    q[r+1] = a_i
print(le)

```

## 最长公共子序列

- 如何求解两个序列中公共子序列的最大长度
- $y$ 式 $dp$ 分析方法
$f=\begin{cases}
状态表示 & \begin{cases} 集合:即f(i,j) 代表的是什么 \\ 属性:要求什么:无非就是min,max \end{cases} \\
状态计算
\end{cases}$

```python
# 动态规划
n, m = map(int, input().split())
a = [x for x in input()]
b = [x for x in input()]
print(a, b)
f = [[0] * (m+1) for i in range(n+1)]

# f[i][j] 代表的是a[1-i] 和 b[1-j] 中相同的最大子序列的长度
# 然后f[i][j] 应该根据是否包含a_i,b_j 来划分子集
# 如果包含a_i,b_j,并且a_i=b_j,那么f[i][j]=f[i-1][j-1]+1
# 如果不包含a_i,b_j,那么f[i][j] 就不用变化
# 如果包含其中一个,可以用f[i-1][j],f[i][j-1]来代替\
# f[0][0] 是 0,并且f[i][0] 和f[0][j] 都是零
for i in range(1, n+1):
    for j in range(1, m+1):
        f[i][j] = max(f[i-1][j], f[i][j-1])
        if a[i-1] == b[j-1]:
            f[i][j] = max(f[i][j], f[i-1][j-1]+1)
print(f[n][m])
```
