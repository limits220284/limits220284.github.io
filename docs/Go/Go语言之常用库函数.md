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
slices.SortFunc(a, func(a, b int) int {
    return b - a 
})
```

## 字符串

1. $\text{strings.Fields() \quad strings.ToLower() \quad strings.Title() \quad strings.Join()}$
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
