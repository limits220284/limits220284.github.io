# Association

本文用到的例子中的前置数据结构信息

```go
type DeviceInfo struct {
	ID          string    `json:"id" yaml:"id" gorm:"column:id;primaryKey;size:64"`
	WorkspaceId string    `json:"workspace_id" yaml:"workspace_id" gorm:"column:workspace_id"`
	ApiSettings []Apis    `gorm:"foreignKey:DeviceID;references:ID"`
	CreatedAt   time.Time `json:"created_at" gorm:"column:created_at"`
	UpdatedAt   time.Time `json:"updated_at" gorm:"column:updated_at"`
}

type Apis struct {
	ID          uint   `gorm:"primaryKey;autoIncrement;column:id"`
	DeviceID    string `gorm:"column:device_id;size:64"`
	WorkspaceID string `gorm:"column:workspace_id"`
	Path        string `gorm:"column:path"`
	Method      string `gorm:"column:method"`
	// foreign key constraint
	TelemetryService []TelemetryService `gorm:"many2many:telemetryservice_linkage;foreignKey:ID;joinForeignKey:api_id;References:ID;joinReferences:telemetryservice_id"`
}

type TelemetryServiceLinkage struct {
	ApiID              uint   `gorm:"primaryKey;column:api_id"`
	TelemetryServiceID string `gorm:"primaryKey;column:telemetryservice_id"`
	DeviceID           string `gorm:"column:device_id"`
	WorkspaceID        string `gorm:"column:workspace_id"`
}

type TelemetryService struct {
	ID          string `json:"id" yaml:"id" gorm:"column:id;primaryKey"`
	WorkspaceId string `json:"workspace_id" yaml:"workspace_id" gorm:"column:workspace_id"`
	Name        string `json:"name" yaml:"name" gorm:"column:name"`
	Apis        []Apis `gorm:"many2many:telemetryservice_linkage;foreignKey:ID;joinForeignKey:telemetryservice_id;References:ID;joinReferences:api_id"`
}
```



## Has Many

### 添加

只需要在对应的数组中[]B中加入B的信息，调用create函数即可；

```go
func createDevice(db *gorm.DB) {
	device := DeviceInfo{
		ID:          "49067f4c-5042-4df3-9665-e02ceb7335ed",
		WorkspaceId: "5e53fb95-7121-4b31-a594-e4fdfc36f3e1",
		ApiSettings: []Apis{
			{
				DeviceID:    "49067f4c-5042-4df3-9665-e02ceb7335ed",
				WorkspaceID: "5e53fb95-7121-4b31-a594-e4fdfc36f3e1",
				Path:        "/info",
				Method:      "GET",
			},
			{
				DeviceID:    "49067f4c-5042-4df3-9665-e02ceb7335e2",
				WorkspaceID: "5e53fb95-7121-4b31-a594-e4fdfc36f3e3",
				Path:        "/stream",
				Method:      "GET",
			},
		},
		CreatedAt: time.Time{},
		UpdatedAt: time.Time{},
	}
	db.Create(&device)
}
```

### 查询

#### association方式

```go
db.Model(&A).Association("B").Find(&A.B)
//其中A是总的结构体，B是A关联的结构体，如果想查找A，同时查找B的信息，需要通过Association的方式
// tips: 注意需要提前查询出来A的信息
```

```go
func getDevice(db *gorm.DB) {
	device := DeviceInfo{}
	db.First(&device, "ID = ?", "49067f4c-5042-4df3-9665-e02ceb7335ed")
	db.Model(&device).Association("ApiSettings").Find(&device.ApiSettings)
	fmt.Println(device)
}
```

#### preload方式

这种方式相比较于assoication方式更加的简洁

```go
func getDevice(db *gorm.DB) {
	device := DeviceInfo{}
	db.Preload("ApiSettings").Find(&device, "ID = ?", "49067f4c-5042-4df3-9665-e02ceb7335ed")
	fmt.Println("ok", device)
}
```



### 更新

先查询，再更新

- 进行查询的方式有很多，这里采用的是Preload方式

```go
func updateDevice(db *gorm.DB) {
	device := DeviceInfo{}
	db.Preload("ApiSettings").Find(&device, "ID = ?", "49067f4c-5042-4df3-9665-e02ceb7335ed")
	fmt.Println("ok", device)
	db.Model(&device.ApiSettings).Where("ID = ?", 1).Update("path", "/fuck")
	fmt.Println(device)
}
```



### 删除

先查询，再删除

- 采用preload查询

```go
func deleteApisettings(db *gorm.DB) {
	device := DeviceInfo{}
	db.Preload("ApiSettings").Find(&device, "ID = ?", "49067f4c-5042-4df3-9665-e02ceb7335ed")
	fmt.Println("ok", device)
	db.Where("ID = ?", "1").Delete(&device.ApiSettings)
	fmt.Println(device)
}
```



## ManyToMany

### 查询

通过预加载的方式，如果多重的话，需要加载到第二层

然后通过第一层的主键查询即可

```go
func getManyDevice(db *gorm.DB) {
   device := DeviceInfo{}
   db.Preload("ApiSettings.TelemetryService").Find(&device, "ID = ?", "49067f4c-5042-4df3-9665-e02ceb7335ed")

   fmt.Println("ok", device)
}
```

### 更新

先查询，后更新

- 通过preload的方式进行查询，然后更新某一条数据

```go
// 为该设备的第二个api增加一个遥测服务
var api Apis
// 首先，找到Apis实例
db.Preload("TelemetryService").First(&api, 4)
fmt.Println("api is :", api)
var existingTelemetryService TelemetryService
db.First(&existingTelemetryService, "id = ?", "telemetry-1") // 使用实际的ID或其他条件查询
db.Model(&api).Association("TelemetryService").Append(&existingTelemetryService)
fmt.Println("new api is :", api)
```





### 删除

先查询，后更新；注意这个过程是不能够通过preload加载然后进行删除的，`Preload`用于查询操作，主要目的是在查询主实体时自动填充关联实体的数据，**从而避免N+1查询问题**，并不支持直接通过它修改或删除关联数据。

- 通过preload的方式进行查询，然后更新某一条数据

```go
var api Apis
// 首先，找到Apis实例
db.Preload("TelemetryService").First(&api, 3) // 假设我们要处理ID为3的Apis记录
var telemetryServiceToRemove TelemetryService
// 获取需要移除的TelemetryService实例
db.Where("ID = ?", "telemetry-1").First(&telemetryServiceToRemove)
// 然后，从Apis的TelemetryService关联中删除这个TelemetryService
db.Model(&api).Association("TelemetryService").Delete(&telemetryServiceToRemove)
```

















































































