### 模板

https://www.liwenzhou.com/posts/Go/template/

#### 修改模板引擎标识符号

```go
template.New("test").Delims("{[", "]}").ParseFiles("./t.tmpl")
```

