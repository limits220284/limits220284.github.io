# 数位dp常见题目

## [2376. 统计特殊整数](https://leetcode.cn/problems/count-special-integers/)

## [902. 最大为 N 的数字组合](https://leetcode.cn/problems/numbers-at-most-n-given-digit-set/)

## [面试题 17.06. 2出现的次数](https://leetcode.cn/problems/number-of-2s-in-range-lcci/)

## 模板

```python
def countSpecialNumbers(n: int) -> int:
        s = str(n)
        # i代表当前填到了第几位数
        # mask类似于状态压缩的思想，看看前面是否已经使用过了当前的数字
        # is_lim 代表前面的数字是否都填了对应位置的数字，如果为True,接下来只能填 0-s[i],否则为0-9
        # is_num 代表前面是否填了数字，如果填了数字，接下来这这个可以从0开始,否则从1开始
        @cache
        def f(i: int, mask: int, is_lim: bool, is_num: bool):
            res = 0
            if i == len(s):
                return int(is_num)#填了返回1,没填直接返回0
            if not is_num:#如果没有填数字,可以继续选择跳过
                res += f(i+1, mask, False, is_num)
            up = int(s[i]) if is_lim else 9 #如果前面都对号入座了,则接下来填的数字最大值就是s[i]
            for d in range(1-int(is_num), up+1):
                if mask>>d&1 == 0:
                    res += f(i+1, mask|1<<d, is_lim and d==int(s[i]), True)
            return res
        return f(0, 0, True, False)
```
