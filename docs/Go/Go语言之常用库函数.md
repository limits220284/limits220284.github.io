# Go语言之常用库函数

## 数组与切片

1. 将数组转成切片

```go
arr := [26]int{}
arr = arr[:] // [:]即可将数组转成切片
```

2. 判断两个切片元素是否相等

```go
slices.Equal(arr1, arr2)
```

3. 对数组切片进行排序

```go
sort.Ints(nums) // 用来切片的排序
```

4. 对于切片进行自定义排序函数

```go
sort.Slice(qw, func(i, j int) bool {
    return qw[i].b > qw[j].b
})
```

## 字符串

1. $\text{strings.Fields() \quad strings.ToLower() \quad strings.Title() \quad strings.Join()} $
[2129. 将标题首字母大写](https://leetcode.cn/problems/capitalize-the-title/description/)

```go
func capitalizeTitle(title string) string {
    words := strings.Fields(title)
    for i := range words {
        words[i] = strings.ToLower(words[i])
        if len(words[i]) > 2 {
            words[i] = strings.Title(words[i])
        }
    }
    return strings.Join(words, " ")
}
```

2. **strings.Fields(S)**：函数用于将一个字符串按照空格分隔成一个字符串切片，每个元素是原始字符串中的一个单词（以空格分隔）。这个函数会忽略连续的空格，并且会自动去除字符串开头和结尾的空格；
   - 入参S，代表要分割的字符串；
   - 返回字符串数组；
3. **strings.Split(S, sep)**：将一个字符串按照指定的分隔符分成多个字串，
   - S是要分割的字符串;
   - sep是分割字符串；
   - 返回字符串数组；
4. **strings.Replace(s, old, new, n)**：将s中的old串替换成new串：
   - S: 字符串;
   - old: 旧子串;
   - new: 新子串;
   - n：替换次数，如果存在多个，替换前n个；
   - 如果想全部替换，使用ReplaceAll即可；或者最后一个参数设置为-1;
   - 返回string类型；
5. **strings.Contains(s, substr)**： 判断字符串s中是否包含substr这个数组；
   - s：原字符串；
   - substr：子字符串；
   - 返回bool变量

## 数据结构

## 随机数

## 语法糖

## 位运算

1. 计算数中一的个数

   ```go
   bits.OnesCount(uint(num))
   ```

2. 计算一个数零的个数

   ```go
   bits.TrailingZeros(uint(num))
   ```
