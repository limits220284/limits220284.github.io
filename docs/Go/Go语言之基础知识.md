# Go语言之基础知识

### 安装go

```bash
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
```



### 常用命令

```bash
go buuld xxx.go # 编译包和依赖
go run xxx.go # 运行go程序
go clean xxx.go # 清除对象文件
go get url # 安装相关的依赖
go tool xxx # 运行go提供的工具
```

### 标识符，关键字，命名规则

- 包名称一般都用小写
- 结构体一般采用驼峰命名法，公开第一个字母大写，否则是私有
- 接口单个函数以"er"为后缀，例如 **Reader, Writer**
- 变量命名和结构体一样，同样遵循相同的访问控制
- 常量命名基本都是大写，并且通过下划线来分隔字母
- 单元测试文件命名规范为example_test.go 测试用例函数名必须以**Test**开头

### 变量声明

- 可以使用大括号进行多个变量的同时声明

```go
 var (
  name string
  age int
  m bool
 )
```

### go 中的字符串

- 一个go语言字符串是一个任意字节的常量序列。[]byte

```go
// 采用反引号可以表示多行字符串
 s1 := `
 lin1,
 lin2,
 lin3
 `
```

- join函数 和 bytes.Buffer作用

```go
package main

import "fmt"
import "bytes"
import "strings"
// import "code/user"
func main() {
 s := strings.Join([]string{"wang", "hao"}, "")
 fmt.Println(s)
 var buffer bytes.Buffer
 buffer.WriteString("tom")
 buffer.WriteString("is")
 buffer.WriteString("cat")
 fmt.Print(buffer.String())
}

```

### 格式化输出

```go
package main
import "fmt"

type Website struct{
 Name string
}
func main(){
 site := Website{Name: "wanghao"}
 fmt.Printf("site: %v \n", site)
 fmt.Printf("site: %#v \n", site)
}
```

![image-20231024113244373](https://s2.loli.net/2023/11/22/mfXJ4E8R1CWI5l6.png)

可以看出带上**#**会将结构体信息也输出出来

### 格式化输出

```go
package main
import "fmt"

type Website struct{
 Name string
}
func main(){
    var name string
    var age int
    var email string
    fmt.Scan(&name, &age, &email)
}
```

### 流程控制

- 不能采用非零表示true和false
- for range 返回的是索引和数值

### 值传递和引用传递

- 不可变数据类型
  - float
  - int
  - string
- 可变数据类型
  - slice
  - map
  - chan

### defer

- 如果程序中存在多个defer语句，程序会按着逆序执行defer语句

### 函数

- 函数本身就是一个数据类型
- 如果不加()，函数就是一个变量，如果加()就是进行函数的调用
- 如果是变量，就可以赋值，如果赋值就可以调用

```go
func f1(a, b int) int {
 return 0
}

func f2(a string, b int) string {
 return ""
}

func main() {
 fmt.Printf("f1: %T\n", f1)
 fmt.Printf("f2: %T\n", f2)
}
```

![image-20231027164730105](https://s2.loli.net/2023/11/22/YNnvyGJ6ptbcMUz.png)

- 定义函数类型的变量
  - var fnew func(int, int)

```go
func main() {
 fmt.Println(dfs(10))
 fmt.Printf("f1: %T\n", f1)
 var f5 func(int, int) int
 f5 = f1
 fmt.Println(f5(1, 2))
 fmt.Println(f1, f5)
}
```

![image-20231027165301810](https://s2.loli.net/2023/11/22/E81yGQvlrOx3g29.png)

### 回调函数

- 需要理解闭包函数，内层函数调用外部函数的变量
