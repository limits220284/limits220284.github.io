# Gin

## JSON

- 可以序列化

  - map

  - 结构体

    - 如果非要将开头保存为小写应该怎么办

      ```go
      type Info struct {
       Name    string `json:"name"`
       Message string
       Age     int
      }
      ```

  - gin.H

## 获取queryString

- <http://127.0.0.1:9090/web?query=wanghao&age=18>

```go
name := c.Query("query") // 通过query获取请求中的携带的querystring参数
name := c.DefaultQuery("query", "somebody") //如果没有，设置默认参数
name, ok := c.GetQuery("query") //参数返回string，bool
if !ok {
    name = "wanghao"
}
c.JSON(http.StatusOK, name)
```

## Form

- 用法和queryString中的差不多，都包括以下这三个函数

```go
 r.POST("/login", func(c *gin.Context) {
  username := c.PostForm("username")
  password := c.PostForm("password")
  username := c.DefaultPostForm("username", "somebody")
  password := c.DefaultPostForm("passwrd", "***")
  username, ok := c.GetPostForm("username")
  password, ok := c.GetPostForm("password")
  c.HTML(http.StatusOK, "index.html", gin.H{
   "Name":     username,
   "Password": password,
  })
 })
```

## 获取url参数

```go
 r.GET("/:name/:age", func(c *gin.Context) {
  //获取路径参数
  name := c.Param("name")
  age := c.Param("age")
  c.JSON(http.StatusOK, gin.H{
   "Name": name,
   "Age":  age,
  })
 })
```

## 参数绑定

- 需要在结构体中指定tag
- 无论是query，json还是form，都可以采用shouldbind来进行绑定，可以自动从上述类型的数据中寻找对应的参数值

```go
type Login struct {
 User     string `form:"user" json:"user" binding:"required"`
 Password string `form:"password" json:"pwd" binding:"required"`
}
```

## gin文件上传

```go
r.POST("/upload", func(c *gin.Context) {
  //从请求中读取文件
  //将读取到的文件保存到本地
  f, err := c.FormFile("f1")
  if err != nil {
   c.JSON(http.StatusBadRequest, gin.H{
    "error": err.Error(),
   })
  } else {
   //dst := fmt.Sprintf("./%s", f.Filename)
   dst := path.Join("./", f.Filename)
   c.SaveUploadedFile(f, dst)
  }
 })
```

## http重定向

```go
r.GET("/index", func(c *gin.Context) {
  c.Redirect(http.StatusMovedPermanently, "http://www.baidu.com")
  c.JSON(http.StatusOK, gin.H{
   "status": "ok",
  })

 })
 r.GET("/a", func(c *gin.Context) {
  c.Request.URL.Path = "/b"
  r.HandleContext(c)
 })
 r.GET("/b", func(c *gin.Context) {
  c.JSON(http.StatusOK, gin.H{
   "message": "/b ok",
  })
 })
```

## Gin路由和路由组

- 主要是路由组
- 把公用的前缀提取出来，创建一个路由组

```go
videoGroup := r.Group("/vedio")
{
    videoGroup.GET("index", func(c *gin.Context) {
        c.JSON(http.StatusOK, gin.H{
            "msg": "/video/index",
        })
    })
    videoGroup.GET("/xx", func(c *gin.Context) {
        c.JSON(http.StatusOK, gin.H{
            "msg": "video/xx",
        })
    })
}
```

## 中间件

- Gin框架允许开发者在处理请求的过程中，加入用户自己的钩子（Hook）函数。这个钩子函数就叫中间件，中间件适合处理一些公共的业务逻辑，比如**登录认证**、**权限校验**、**数据分页**、**记录日志**、**耗时统计**等。

```go
 r.GET("/index", m1, indexHandler)
 r.GET("/shop", m1, func(c *gin.Context) {
  c.JSON(http.StatusOK, gin.H{
   "msg": "shop",
  })
 })
```

- 上述代码还是比较繁琐，可以通过以下方式注册全局的中间件函数

```go
r.Use(m1) //全局注册中间件函数
r.GET("/index", indexHandler)
r.GET("/shop", func(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
        "msg": "shop",
    })
})
```

- 给路由组设置中间件

  ```go
  shopGroup := r.Group("/shop", StatCost())
  {
      shopGroup.GET("/index", func(c *gin.Context) {...})
      ...
  }
  
  
  shopGroup := r.Group("/shop")
  shopGroup.Use(StatCost())
  {
      shopGroup.GET("/index", func(c *gin.Context) {...})
      ...
  }
  
  ```

- `gin.Default()`默认使用了`Logger`和`Recovery`中间件，其中：

  - `Logger`中间件将日志写入`gin.DefaultWriter`，即使配置了`GIN_MODE=release`。
  - `Recovery`中间件会recover任何`panic`。如果有panic的话，会写入500响应码。
  - 如果不想使用上面两个默认的中间件，可以使用`gin.New()`新建一个没有任何默认中间件的路由。
  - 当在中间件或`handler`中启动新的`goroutine`时，**不能使用**原始的上下文（c *gin.Context），必须使用其只读副本（`c.Copy()`）。

- 中间件如果想要获取上下文信息的时候

  - 可以使用c.set()设置变量

  - 可以使用c.get()获取上下文信息
