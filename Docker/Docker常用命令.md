# Docker常用命令

<https://docs.docker.com/reference/>

### 镜像命令

```bash
docker images -a
# 可选项
-a, -all # 列出所有的镜像
-q, --quiet # 只显示镜像的id
```

1、docker search 搜索镜像

```shell
docker search --help #可以查看该命令的帮助文档

[root@wh docker]# docker search mysql --filter=STARS=4000
```

2、docker  pull 下载镜像

```shell
docker pull mysql
# 等价于
docker pull mysql
docker pull docker.io/library/mysql:latest

# 指定版本下载
docker pull mysql: 5.7
```

3、docker rmi  删除镜像

```shell
# docker rmi -f c20987f18b13 # 删除指定容器
# docker rmi -f $(docker images -aq) # 删除所有的容器
```

### 容器命令

#### 说明：我们有了镜像才可以创建容器，下载一个centos镜像来测试学习

```shell
docker pull centos
```

#### 新建容器并且启动

```shell
docker run [可选参数] image
# 参数说明
-- name = "Name" 容器名字 用来区分容器
-d 后台方式运行
-it 使用交互方式运行，进入容器查看内容
-p 指定容器端口 -p 8080:8080
 -p ip:主机端口:容器端口
 -p 主机端口:容器端口(常用)
 -p 容器端口
-P  随机指定端口
-e 配置环境变量： key = value

# 进入容器
[root@wh ~]# docker run -it centos /bin/bash
[root@fcc5d72093e5 /]#
```

#### 列出所有的运行的容器

```shell
# docker ps 命令
# 列出当前正在运行的容器
-a  # 列出当前正在运行的容器 + 带出历史运行过的容器
-n = ? # 显示最近创建的容器
-q # 只显示容器的编号

[root@wh ~]# docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
[root@wh ~]# docker ps -a
CONTAINER ID   IMAGE          COMMAND       CREATED              STATUS                      PORTS     NAMES
fcc5d72093e5   centos         "/bin/bash"   About a minute ago   Exited (0) 55 seconds ago             vibrant_keldysh
403709ba23a7   9c7a54a9a43c   "/hello"      2 weeks ago          Exited (0) 2 weeks ago                amazing_hellman
```

#### 退出容器

```shell
exit # 直接容器停止并推出
ctrl + P + Q # 容器不停止并且退出
```

#### 删除容器

```shell
docker rmi 容器id # 删除指定的容器，不能删除正在运行的容器，强制删除 rm -f
docker rm $(docker ps -aq) # 删除所有的容器
docker ps -a -q | xargs docker rm # 删除所有的容器
```

#### 启动和停止容器的操作

```shell
docker start 容器id # 启动容器
docker restart 容器id # 重启容器
docker stop 容器id # 停止当前正在运行的容器
docker kill 容器id # 停止当前正在运行的容器
```

#### 保存和加载容器镜像

```bash
# docker save -o nginx.tar nginx:latest
# docker load -i nginx.tar
```

### 常用其他命令

#### 后台启动容器

```shell
# 命令 docker run -d 镜像名

# docker run -d centos

# docker ps
# 在这个地方会发现centos停止了
# 坑：是因为docker容器如果采用后台运行，就必须要有一个前台进程，docker发现没有应用，就会自动停止

```

#### 查看日志

```shell
docker logs -tf --tail 容器


[root@wh ~]# docker run -d centos /bin/sh -c "while true; do echo wanghao; sleep 1;done"
f2eb3e508bd5b9631f94f665440cc31375a696cae021e5a221b1b27984928413
[root@wh ~]# docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS     NAMES
f2eb3e508bd5   centos    "/bin/sh -c 'while t…"   6 seconds ago   Up 6 seconds             awesome_tharp

# 显示日志
docker logs -tf --tail 10 容器 # tail后面需要加日志条数
docker logs -tf 容器 # 显示所有的日志
```

![image-20231115153606619](https://s2.loli.net/2024/03/22/OcVzhiQPFR8fHSC.png)

#### 查看容器中进程信息

```shell
# 命令 docker top 容器id
[root@wh ~]# docker top f2eb3e508bd5
UID                 PID                 PPID                C                   STIME               TTY                 TIME                CMD
root                1930                1910                0                   22:10               ?                   00:00:00            /bin/sh -c while true; do echo wanghao; sleep 1;done
root                3820                1930                0                   22:14               ?                   00:00:00            /usr/bin/coreutils --coreutils-prog-shebang=sleep /usr/bin/sleep 1


```

#### 查看镜像的元数据

```shell
# docker inspect 容器id

[root@wh ~]# docker inspect --help

Usage:  docker inspect [OPTIONS] NAME|ID [NAME|ID...]

Return low-level information on Docker objects

Options:
  -f, --format string   Format output using a custom template:
                        'json':             Print in JSON format
                        'TEMPLATE':         Print output using the given Go template.
                        Refer to https://docs.docker.com/go/formatting/ for more information
                        about formatting output with templates
  -s, --size            Display total file sizes if the type is container
      --type string     Return JSON for specified type

```

#### 进入当前正在运行的容器

```shell
# 方式1:
# docker exec -it f2eb3e508bd5 /bin/bash

# docker ps
# docker exec -it f2eb3e508bd5 /bin/bashj
[root@f2eb3e508bd5 /]# ls
bin  dev  etc  home  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var

# 方式2:
# docker attach 容器id
[root@wh ~]# docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED        STATUS        PORTS     NAMES
f2eb3e508bd5   centos    "/bin/sh -c 'while t…"   22 hours ago   Up 22 hours             awesome_tharp
[root@wh ~]# docker attach --help

Usage:  docker attach [OPTIONS] CONTAINER

Attach local standard input, output, and error streams to a running container

Aliases:
  docker container attach, docker attach

Options:
      --detach-keys string   Override the key sequence for detaching a container
      --no-stdin             Do not attach STDIN
      --sig-proxy            Proxy all received signals to the process (default true)
[root@wh ~]# docker attach f2eb3e508bd5
wanghao
wanghao

# docker exec 进入容器后开启一个新的终端，可以在里面操作
# docker attach 进入正在执行的终端，不会启动新的进程
```

#### 拷贝容器中的文件到外部

```shell
# docker cp 容器id:容器内的路径 容器外的路径
[root@wh ~]# docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED        STATUS        PORTS     NAMES
f2eb3e508bd5   centos    "/bin/sh -c 'while t…"   22 hours ago   Up 22 hours             awesome_tharp
[root@wh ~]# docker cp f2eb3e508bd5:/home/wh.java /home
Successfully copied 1.54kB to /home
[root@wh ~]# ls
wh.py
[root@wh ~]# cd home
-bash: cd: home: No such file or directory
[root@wh ~]# ls
wh.py
[root@wh ~]# cd /home
[root@wh home]# ls
wh.java
[root@wh home]#
```

### 小结

![image-20231010195705119](https://s2.loli.net/2024/03/22/aTKiRhXGzoUOs3g.png)


