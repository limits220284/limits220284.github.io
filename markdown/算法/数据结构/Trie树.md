## [1.字符串的前缀分数和](https://leetcode.cn/problems/sum-of-prefix-scores-of-strings/)

## [2.实现 Trie (前缀树)](https://leetcode.cn/problems/implement-trie-prefix-tree/)

## [3.含最多 K 个可整除元素的子数组](https://leetcode.cn/problems/k-divisible-elements-subarrays/)

## [4.最大异或对](https://www.acwing.com/problem/content/description/145/)

- 不要死板的套用公式，有时候需要对$insert$和$query$操作进行变动

## Trie

- 高效的存储和查找字符串集合的数据结构
![Alt](https://oi-wiki.org/string/images/trie1.png)

## 数组实现

```python
N = 100010
idx = 0
str = ['0'] * N
cnt = [0] * N
son = [[0] * 26 for i in range(N)]

def insert(s):
    global idx,cnt,son
    p=0#零节点也是根节点
    for x in s:
        t=ord(x)-ord('a')
        if not son[p][t]:
            idx+=1
            son[p][t]=idx#指向下一个节点位置
        p=son[p][t]
    cnt[p]+=1#到最后了,统计一下多少个单词以该节点结尾

def query(s):
    global cnt, son
    p=0
    for x in s:
        t=ord(x)-ord('a')
        if not son[p][t]:
            return 0
        p=son[p][t]
    return cnt[p]

n=int(input())
for i in range(n):
    a,b=input().split()
    if a=='I':
        insert(b)
    else:
        print(query(b))
```

## 字典实现

```python
Trie={}
def insert(s):
    Node=Trie
    for x in s:
        Node=Node.setdefault(x, {})#如果存在ch则返回原本的值，否则返回{}
    Node['count']=Node.get('count',0)+1

def query(s):
    Node=Trie
    for x in s:
        if x not in Node:
            return 0
        Node=Node[x]
    return Node.get('count',0)#
    
n=int(input())
for i in range(n):
    a,b=input().split()
    if a=="I":
        insert(b)
    else:
        print(query(b))

```

## 类实现

```python
class TreeNode:
    def __init__(self):
        self.val = 0
        self.next = [None]*26

root = TreeNode()

def insert(str):
    p = root
    for ch in str:
        u = ord(ch) - ord('a')
        if p.next[u] == None:
            p.next[u] = TreeNode()
        p = p.next[u]
    p.val += 1

def query(str):
    p = root
    for ch in str:
        u = ord(ch) - ord('a')
        if p.next[u] == None: return 0
        p = p.next[u]
    return p.val

n = int(input())
while n:
    n -= 1
    opt, s = input().split()
    if (opt == 'I'):
        insert(s)
    else: print(query(s))
```
