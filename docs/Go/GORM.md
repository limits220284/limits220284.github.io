### ORM https://www.liwenzhou.com/posts/Go/gorm/

- Object Relational Mapping 对象关系映射
  - object(程序中的对象/实例)
  - 关系数据库(Mysql)

- 优点
  - 提高开发效率
- 缺点
  - 牺牲执行性能
  - 牺牲灵活性
  - 弱化SQL能力
- 基本的增删查改

```go
db, err := gorm.Open("mysql", "root:060030@(localhost)/hayblog?charset=utf8mb4&parseTime=True&loc=Local")
if err != nil {
    fmt.Printf("连接数据库失败%v", err.Error())
}
fmt.Println("连接数据库成功")
defer db.Close()
//创建表，自动迁移(把结构体和数据表进行对应)
db.AutoMigrate(&UserInfo{})
u1 := UserInfo{
    1,
    "wanghao",
    "man",
    "math",
}
//增加
db.Create(&u1)
//查找
var u UserInfo
db.First(&u) // 查询数据库中的第一条数据，保存到u中
fmt.Printf("u:%v\n", u)
//更新
db.Model(&u).Update("hobby", "双色球")
fmt.Printf("u:%v\n", u)
//删除
db.Delete(&u)
```

### GORM 中的 MODLE

- gorm中默认表名是复数

- 通过`Table()`创建表

  ```go
  // 使用User结构体创建名为`deleted_users`的表
  db.Table("deleted_users").CreateTable(&User{})
  
  var deleted_users []User
  db.Table("deleted_users").Find(&deleted_users)
  //// SELECT * FROM deleted_users;
  
  db.Table("deleted_users").Where("name = ?", "jinzhu").Delete()
  //// DELETE FROM deleted_users WHERE name = 'jinzhu';
  
  ```

  

- GORM还支持更改默认表名称规则：
  ```go
  gorm.DefaultTableNameHandler = func (db *gorm.DB, defaultTableName string) string  {
    return "prefix_" + defaultTableName;
  }
  ```

- GORM中的列名，默认将驼峰用_连接

  ```go
  type Animal struct {
    AnimalId    int64     `gorm:"column:beast_id"`         // set column name to `beast_id`
    Birthday    time.Time `gorm:"column:day_of_the_beast"` // set column name to `day_of_the_beast`
    Age         int64     `gorm:"column:age_of_the_beast"` // set column name to `age_of_the_beast`
  }
  
  ```

  



### GORM crud https://www.liwenzhou.com/posts/Go/gorm-crud/

- 使用使用`NewRecord()`查询主键是否存在，主键为空使用`Create()`创建记录

#### 默认值

- 通过tag创建默认值

```go
type User struct {
  ID   int64
  Name string `gorm:"default:'小王子'"`
  Age  int64
}
//
```

- 所有字段的零值, 比如`0`, `""`,`false`或者其它`零值`，都不会保存到数据库内，但会使用他们的默认值。 如果你想避免这种情况，可以考虑使用指针或实现 `Scanner/Valuer`接口

  ```go
  //方法1 使用指针
  type User struct {
    ID   int64
    Name *string `gorm:"default:'小王子'"`
    Age  int64
  }
  user := User{Name: new(string), Age: 18))}
  db.Create(&user)  // 此时数据库中该条记录name字段的值就是''
  
  
  //方法2 使用 Scanner/Valuer
  type User struct {
  	ID int64
  	Name sql.NullString `gorm:"default:'小王子'"` // sql.NullString 实现了Scanner/Valuer接口
  	Age  int64
  }
  user := User{Name: sql.NullString{"", true}, Age:18}
  db.Create(&user)  // 此时数据库中该条记录name字段的值就是''
  ```

  





















