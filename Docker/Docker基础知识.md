# Docker基础知识



## Docker镜像讲解

### 镜像是什么

镜像是一种轻量级、可执行的独立软件包，用来打包软件运行环境和基于运行环境开发的软件，它包含运行某个软件所需的所有内容，包括代码、运行时、库、环境变量和配置文件。

### Docker镜像加载原理

>UnionFS (联合文件系统)

UnionFS(联合文件系统):Union文件系统是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到一个虚拟文件系统下(unite severaldirectories into a single virtuafleystem)。Union 文件系统是 Docker 镜像的基础。镜像可以通过分层来进行继承，基于基础镜像(没有父像 )，可以制作种具体的应用镜像。
特性:一次同时加载多个文件系统，但从外面看起来，只能看到一个文件系统，联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录

> Docker镜像加载原理

docker的镜像实际上由一层一层的文件系统组成，这种层级的文件系统UnionFS。bootfs(boot file system)要包含bootloader和kernel, bootloader主要是引导加载kernel, Linux刚启动时会加载bootfs文件系统，在Docker镜像的最底层是bootfs。这一层与我们典型的Linux/Unix系统是一样的，包合boot加载器和内核。当boot加载完成之后整个内核就都在内存中了，此时内存的使用权已由bootfs转交给内核，此时系统也会卸载bootfs(系统启动的时候需要)。rootfs (root file system),在bootfs之上。包合的就是典型 Linux 系统中的 /dev,/proc,/bin, /etc 等标准目录和文件。rootfs就是各种不同的操作系统发行版，比如Ubuntu，Centos等等。

![image-20231011211311681](https://s2.loli.net/2024/03/22/rbu6xiHKXpS4Wnd.png)

对于一个精简的OS，rootfs 可以很小，只需要包含最基本的命令，工具和程序库就可以了，因为底层直接用Host的kernel，自己只需要提供rootfs就可以了。由此可见对于不同的linux发行版,bootfs基本是一致的，rootfs会有差别,因此不同的发行版可以公用bootfs。

### 分层的理解

所有的 Docker 镜像都起始于一个基础镜像层，当进行修改或增加新的内容时，就会在当前镜像层之上，创建新的镜像层。举一个简单的例子，假如基于 Ubuntu Linux 16.04 创建一个新的镜像，这就是新像的第一层，如果在该镜像中添加 Pvthon包就会在基础镜像层之上创建第二个镜像层;如果继续添加一个安全补丁，就会创建第三个镜像层。该镜像当前已经包含 3 个镜像层，如下图所示(这只是一个用于演示的很简单的例子)

![image-20231011211751560](https://s2.loli.net/2024/03/22/mQvJtblT7hxd1yi.png)

在添加额外的镜像层的同时，镜像始终保持是当前所有镜像的组合，理解这一点非常重要。下图中举了一个简单的例子，每个镜像层包含 3 个文件，而镜像包含了来自两个镜像层的 6 个文件。

![image-20231011211917885](https://s2.loli.net/2024/03/22/eFNjdvGqykREJ9H.png)

上图中的镜像层跟之前图中的略有区别，主要目的是便于展示文件。下图中展示了一个稍微复杂的三层镜像，在外部看来整个镜像只有 6 个文件，这是因为最上层中的文件7 是文件 5的一个更新版本。

![image-20231011212115572](https://s2.loli.net/2024/03/22/H5RWgYMZBxvjf7i.png)

这种情况下，上层镜像层中的文件覆盖了底层镜像层中的文件。这样就使得文件的更新版本作为一个新镜像层添加到镜像当中。Docker 通过存储引擎(新版本采用快照机制 的方式来实现像层堆栈，并保证多像层对外展示为统一的文件系统。Linux 上可用的存储引擎有 AUFS、Overlay2、Device Mapper、Btrfs 以及 ZFS。顾名思义，每种存储警都基于Linux 中对应的文件系统或者块设备技术，并且每种存储引警都有其独有的性能特点
Docker 在 Windows 上仅支持 windowsfilter 一种存储引擎，该引警基于 NTFS 文件系统之上实现了分层和 CoWT11.
下图展示了与系统显示相同的三层镜像。所有镜像层堆叠并合并，对外提供统一的视图。

![image-20231011212226451](https://s2.loli.net/2024/03/22/R4kXLIF5Mefw7ZV.png)

> 特点

Docker镜像都是只读的，当容器启动时，一个新的可写层被加载到镜像的顶部

这一层就是我们通常说的容器层，容器之下的都叫做镜像层！

![image-20231011212453430](https://s2.loli.net/2024/03/22/uFK2bgLmVqQ9B1T.png)

### commit 镜像

```shell
docker commit 提交容器成为一个新的副本
docker commit -m= "提交的信息" -a="作者名字" 容器id 目标镜像名:[TAG]

```

实战测试

```shell
# 制作一个自己的tomcat镜像
# docker commit -a="wh" -m="test" cc1e1449e02a tomcat02:1.0
root@cc1e1449e02a:/usr/local/tomcat/webapps# docker commit -a="wh" -m="test" cc1e1449e02a tomcat02:1.0
bash: docker: command not found
root@cc1e1449e02a:/usr/local/tomcat/webapps# read escape sequence
[root@wh ~]# docker commit -a="wh" -m="test" cc1e1449e02a tomcat02:1.0
sha256:0bc262a96b157e8deae88b5cec3bf1cbf0d9466fa3d69a3e64bc15b56cd5cffb
[root@wh ~]# docker images
REPOSITORY            TAG       IMAGE ID       CREATED         SIZE
tomcat02              1.0       0bc262a96b15   5 seconds ago   684MB
nginx                 latest    605c77e624dd   21 months ago   141MB
tomcat                9.0       b8e65a4d736d   21 months ago   680MB
tomcat                latest    fb5657adc892   21 months ago   680MB
mysql                 5.7       c20987f18b13   21 months ago   448MB
centos                latest    5d0da3dc9764   2 years ago     231MB
portainer/portainer   latest    580c0e4e98b0   2 years ago     79.1MB

```

### 容器数据卷

#### 什么是容器数据卷

docker的理念回顾：将应用和环境打包成一个镜像

数据？如果数据都在容器中，那么我们容器删除，数据就会丢失！

MYsql， 容器删了，删库跑路！需求：Mysql数据可以存储在本地！

容器之间可以有一个数据共享技术！Docker容器中产生的数据，同步到本地！

这就是容器卷技术！目录的挂载，将我们容器内的目录，挂载到Linux上面！

![image-20231012111403572](https://s2.loli.net/2024/03/22/bop4CDKSR5hVZUu.png)

**总结一句话：容器的持久化和同步操作！容器间也是可以数据共享的！**

#### 使用数据卷

>方式1：直接使用命令来挂载 -v

```shell
docker run -it -v 主机目录：容器内目录
# 测试
[root@wh ~]# docker run -it -v /home/ceshi:/home centos /bin/bash

```

![image-20231012112243858](https://s2.loli.net/2024/03/22/SAVyfZbsDni6dlv.png)

同步的过程，双向绑定，无论从哪个地方修改，双方都能够看到修改

#### 实战：安装mysql

```shell
[root@wh ~]# docker run -d -p 3310:3306 -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql01 mysql:5.7
f3d215849d2ca0a69571efdf61f2d0b2e7b094db89b94850d3d4f513d6f5efaa
# 启动成功之后，我们在本地使用DBMS来进行连接测试
# navicat通过端口3310连接服务器，然后端口映射到了容器中的3306


[root@wh ~]# cd /home
[root@wh home]# ls
ceshi  mysql  wh.java
[root@wh home]# ls
ceshi  mysql  wh.java
[root@wh home]# cd mysql/
[root@wh mysql]# ls
conf  data
[root@wh mysql]# cd data/
[root@wh data]# ls
auto.cnf    client-cert.pem  ibdata1      ibtmp1              private_key.pem  server-key.pem
ca-key.pem  client-key.pem   ib_logfile0  mysql               public_key.pem   sys
ca.pem      ib_buffer_pool   ib_logfile1  performance_schema  server-cert.pem  test
[root@wh data]# docker rm -f mysql01
mysql01
[root@wh data]# docker ps
CONTAINER ID   IMAGE     COMMAND       CREATED          STATUS          PORTS     NAMES
896ce5605105   centos    "/bin/bash"   38 minutes ago   Up 38 minutes             great_golick
[root@wh data]# cd /home
[root@wh home]# ls
ceshi  mysql  wh.java
[root@wh home]# cd mysql/
[root@wh mysql]# ls
conf  data
[root@wh mysql]# cd data/
[root@wh data]# ls
auto.cnf    client-cert.pem  ibdata1      ibtmp1              private_key.pem  server-key.pem
ca-key.pem  client-key.pem   ib_logfile0  mysql               public_key.pem   sys
ca.pem      ib_buffer_pool   ib_logfile1  performance_schema  server-cert.pem  test
[root@wh data]# cd test/
[root@wh test]# ls
db.opt
[root@wh test]#

```

#### 具名挂载和匿名挂载

```shell
# 匿名挂载
-v 容器内路径
# 这里发现，这种就是匿名挂载，-v后面只有容器内路径，没有指定容器外的路径
[root@wh test]# docker run -d -P --name nginx66 -v /etc/nginx nginx
e2c69126b27412b8a744fa4545900516af5c66f07bb6e1d3581f569038e01da4
[root@wh test]# docker volume ls # 查看本地所有的卷
DRIVER    VOLUME NAME 
local     688d0746e9cb1985859c321a74f8ea017ce903e5819adfa343c39fe04b2b5cbd [匿名卷]
local     47984d13f36b5609594920b8318ca072c53be2336adefb4d3f98b0ee3afc405a

# 这个是具名挂载，给定了一个名字：容器内部路径
[root@wh test]# docker run -d -P --name nginx88 -v juming-nginx:/etc/nginx nginx
7a3ea204b49a15804b5f15f32076efa388f760db8acbf5ebd7c8d05cc1e1d1c2
[root@wh test]# docker volume ls
DRIVER    VOLUME NAME
local     688d0746e9cb1985859c321a74f8ea017ce903e5819adfa343c39fe04b2b5cbd
local     47984d13f36b5609594920b8318ca072c53be2336adefb4d3f98b0ee3afc405a
local     juming-nginx


[root@wh test]# docker volume inspect juming-nginx
[
    {
        "CreatedAt": "2023-10-12T12:13:15+08:00",
        "Driver": "local",
        "Labels": null,
        "Mountpoint": "/var/lib/docker/volumes/juming-nginx/_data",
        "Name": "juming-nginx",
        "Options": null,
        "Scope": "local"
    }
]
# 可以看到如果没有指定宿主机路径，都会将对应的数据卷放在/var/lib/docker/volumes/***该文件下


```

如何确定是具名挂载还是匿名挂载呢？

```shell
-v 容器内路径 # 匿名
-v name:容器内路径 # 具名
-v /path:/path # 指定了路径
```

拓展：

```shell
# ro:只读
# rw:可读可写
docker run -d -P --name nginx66 -v /etc/nginx:ro nginx
docker run -d -P --name nginx66 -v /etc/nginx:rw nginx
```
