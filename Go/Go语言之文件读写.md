# Go语言之IO

## 输入输出的底层原理

 终端其实是一个文件，相关实例如下：

- os.Stdin：标准输入的文件实例，类型为*File；
- os.Stdout：标准输出的文件实例，类型为*File；
- os.Stderr：标准错误输出的文件实例，类型为*File；

以文件的方式操作终端：

```go
package main

import "os"

func main() {
    var buf [16]byte
    os.Stdin.Read(buf[:])
    os.Stdin.WriteString(string(buf[:]))
}
```



## 打开和关闭文件

```go
package main

import (
	"fmt"
	"os"
)

func main() {
	file, err := os.Open("test.txt")
	if err != nil {
		fmt.Println("open file failed", err)
		return
	}
	file.Close()
}
```

- os.Open默认是只读方式打开文件



## 写文件

```go
package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	file, err := os.OpenFile("test.txt", os.O_WRONLY|os.O_CREATE, 0666)
	if err != nil {
		fmt.Println("open file failed", err)
		return
	}
	defer file.Close()
	writer := bufio.NewWriter(file)
	for i := 0; i < 5; i++ {
		_, err := writer.WriteString("王昊\n")
		if err != nil {
			fmt.Println("write string failed", err)
			return
		}
		_, err = writer.Write([]byte{'c', 'd', '\n'})
		if err != nil {
			fmt.Println("write bytes failed", err)
			return
		}
	}
	writer.Flush()
}
```
