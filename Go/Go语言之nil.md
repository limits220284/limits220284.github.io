# Go语言之nil

## Slice和nil进行比较

- 如果当前是`slice`类型与`nil`比较，判断的其实是 `array`字段是否为空。
- 如果当前是指向`slice`类型指针与`nil`比较，遵循的其实是`ptr`类型与`nil`的比较。
