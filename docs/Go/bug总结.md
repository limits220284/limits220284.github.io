# bug总结

记录那年遇见的离谱bug

### WSL 使用docker-compose出现的错误

<https://stackoverflow.com/questions/65896681/exec-docker-credential-desktop-exe-executable-file-not-found-in-path>

### 判断数组是否为空，不能和nil直接判断

1. 一个切片通常包括数据指针，len，cap，len == 0 并不代表cap == 0 和pointer指向的指针为空

### docker下载出现的问题

 ![image-20240222092435031](https://s2.loli.net/2024/02/22/Z1BUEn2vMsKWjVQ.png)

<https://github.com/docker/for-mac/issues/6704>

ceshichenggong
