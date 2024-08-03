### 初识DockerFile

Dockerfile就是用来构建docker镜像的文件！命令脚本！先体验一下！

通过这个脚本可以生成镜像，镜像是一层一层的，脚本一个个的命令，每个命令都是一层！

```shell
# 创建一个dockerfile文件

[root@wh docker-test-volume]# cat dockerfile1

# 文件中的内容
FROM centos
VOLUME ["volume01", "volume02"]
CMD echo "---end---"
CMD /bin/bash
[root@wh docker-test-volume]# docker build -f dockerfile1 -t /wh/centos .
[+] Building 0.0s (0/0)                                                 docker:default
ERROR: invalid tag "/wh/centos": invalid reference format
[root@wh docker-test-volume]# docker build -f dockerfile1 -t wh/centos .
[+] Building 0.1s (5/5) FINISHED                                        docker:default
 => [internal] load build definition from dockerfile1                             0.0s
 => => transferring dockerfile: 117B                                              0.0s
 => [internal] load .dockerignore                                                 0.0s
 => => transferring context: 2B                                                   0.0s
 => [internal] load metadata for docker.io/library/centos:latest                  0.0s
 => [1/1] FROM docker.io/library/centos                                           0.0s
 => exporting to image                                                            0.0s
 => => exporting layers                                                           0.0s
 => => writing image sha256:139235ade34847ff60bb087950d6bfc135d69865c42012862ca9  0.0s
 => => naming to docker.io/wh/centos                                              0.0s
[root@wh docker-test-volume]#

```

```shell
# 启动一下自己写的容器

```

### 数据卷容器

多个mysql同步数据

![image-20231013103611893](https://s2.loli.net/2024/03/22/KeXYMfIShLDGsgB.png)

![image-20231013103631193](https://s2.loli.net/2024/03/22/oe3UOixyPzdnuB7.png)

```shell
如果删除了docker01，那么docker02，03之间的数据不会发生变化
```

![image-20231013103726896](https://s2.loli.net/2024/03/22/JHgL6CytUI2fwao.png)

结论：

容器之间配置信息的传递，容器数据卷的生命周期一直持续到没有容器使用为止

但是一旦持久化到了本地，这个时候，本地的数据是不会删除的！

### Dockerfile

dockerfile是用来构建docker镜像的文件！命令参数脚本！

构建步骤：

1、编写一个dockerfile文件

2、docker build构建成为一个镜像

3、docker run运行镜像

4、docker push发布镜像(DockerHub、阿里云镜像仓库)

#### Dockerfile的构建过程

很多的指令:

![image-20231013104821528](https://s2.loli.net/2024/03/22/JTQSp1E4UVumqhB.png)

dockerfile是面向开发的，我们以后要发布项目，做镜像，就需要编写dockerfile文件，这个文件十分简单！

Dockerfile：构建文件，定义了一切的步骤，源代码

DockerImages：通过Dockerfile构建生成的镜像，最终发布和运行的产品

Docker容器：容器就是镜像运行起来提供服务的

![image-20231013105113529](https://s2.loli.net/2024/03/22/uHxirKmLQohU9g1.png)

```shell
FROM    # 基础镜像，一切从这里开始构建
MAINTAINER # 镜像是谁写的，姓名+邮箱
RUN  # 镜像构建的时候需要运行的命令
ADD  # 步骤：tomcat镜像，这个tomcat压缩包！添加内容
WORKDIR  # 镜像的工作目录
VOLUME # 挂载的目录
EXPOST # 保留端口配置
CMD  # 指定这个容器启动时候要运行的命令，只有最后一个会生效，可被替代
ENTRYPOINT # 指定这个容器启动的时候要运行的命令，可以追加命令
ONBUILD # 当构建一个被继承 Dockerfile 这个时候就会运行ONBUILD的指令。触发指令
COPY # 类似ADD，将我们文件拷贝到镜像中
ENV  # 构建的时候设置环境变量 比如mysql中的用户名和密码

```

```shell
# 1、编写dockerfile的文件
[root@wh dockerfile]# cat mydockerfile
FROM centos
MAINTAINER wh<2056901285@qq.com>
ENV MYPATH /usr/local
WORKDIR $MYPATH
RUN yum -y install vim
RUN yum -y install net-tools
EXPOSE 80
CMD echo $MYPATH
CMD echo "---end---"
CMD /bin/bash

# 2、构建镜像
[root@wh dockerfile]# docker build -f mydockerfile -t mycentos:0.1 .
[+] Building 71.3s (8/8) FINISHED                                       docker:default
 => [internal] load build definition from mydockerfile                            0.0s
 => => transferring dockerfile: 240B                                              0.0s
 => [internal] load .dockerignore                                                 0.0s
 => => transferring context: 2B                                                   0.0s
 => [internal] load metadata for docker.io/library/centos:7                      16.1s
 => [1/4] FROM docker.io/library/centos:7@sha256:9d4bcbbb213dfd745b58be38b13b99  10.5s
 => => resolve docker.io/library/centos:7@sha256:9d4bcbbb213dfd745b58be38b13b996  0.0s
 => => sha256:9d4bcbbb213dfd745b58be38b13b996ebb5ac315fe75711bd6 1.20kB / 1.20kB  0.0s
 => => sha256:dead07b4d8ed7e29e98de0f4504d87e8880d4347859d839686a31d 529B / 529B  0.0s
 => => sha256:eeb6ee3f44bd0b5103bb561b4c16bcb82328cfe5809ab675bb 2.75kB / 2.75kB  0.0s
 => => sha256:2d473b07cdd5f0912cd6f1a703352c82b512407db6b05b43 76.10MB / 76.10MB  6.2s
 => => extracting sha256:2d473b07cdd5f0912cd6f1a703352c82b512407db6b05b43f255373  3.5s
 => [2/4] WORKDIR /usr/local                                                      0.9s
 => [3/4] RUN yum -y install vim                                                 37.1s
 => [4/4] RUN yum -y install net-tools                                            5.0s
 => exporting to image                                                            1.6s
 => => exporting layers                                                           1.6s
 => => writing image sha256:af86bcbadd3f8152dc864397b32bb02a937428a3a4dcb005a922  0.0s
 => => naming to docker.io/library/mycentos:0.1                                   0.0s

```

>CMD和ENTRYPOINT的区别

```shell
# 1、写dockerfile文件
[root@wh dockerfile]# vim dockerfilecmdtest

# 2、构建镜像
[root@wh dockerfile]# docker build -f dockerfilecmdtest -t cmdtest .
[+] Building 0.1s (5/5) FINISHED                                        docker:default
 => [internal] load build definition from dockerfilecmdtest                       0.0s
 => => transferring dockerfile: 73B                                               0.0s
 => [internal] load .dockerignore                                                 0.0s
 => => transferring context: 2B                                                   0.0s
 => [internal] load metadata for docker.io/library/centos:latest                  0.0s
 => CACHED [1/1] FROM docker.io/library/centos                                    0.0s
 => exporting to image                                                            0.0s
 => => exporting layers                                                           0.0s
 => => writing image sha256:7d202bdf002be182b794b7f2b4c90c4fe3560c3ac4f8cebc27f1  0.0s
 => => naming to docker.io/library/cmdtest                                        0.0s
 
# 3、run一下
[root@wh dockerfile]# docker run cmdtest
.
..
.dockerenv
bin
dev
etc
home
lib
lib64
lost+found
media
mnt
opt
proc
root
run
sbin
srv
sys
tmp
usr
var

# 追加命令 -l
[root@wh dockerfile]# docker run cmdtest -l
docker: Error response from daemon: failed to create task for container: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: exec: "-l": executable file not found in $PATH: unknown.
ERRO[0000] error waiting for container:

# error 错误了:原因是因为-l替换了前面的命令

# 1、使用ENTRYPOINT
[root@wh dockerfile]# docker run entrypointtest -l
total 56
drwxr-xr-x   1 root root 4096 Oct 13 03:25 .
drwxr-xr-x   1 root root 4096 Oct 13 03:25 ..
-rwxr-xr-x   1 root root    0 Oct 13 03:25 .dockerenv
lrwxrwxrwx   1 root root    7 Nov  3  2020 bin -> usr/bin
drwxr-xr-x   5 root root  340 Oct 13 03:25 dev
drwxr-xr-x   1 root root 4096 Oct 13 03:25 etc
drwxr-xr-x   2 root root 4096 Nov  3  2020 home
lrwxrwxrwx   1 root root    7 Nov  3  2020 lib -> usr/lib
lrwxrwxrwx   1 root root    9 Nov  3  2020 lib64 -> usr/lib64
drwx------   2 root root 4096 Sep 15  2021 lost+found
drwxr-xr-x   2 root root 4096 Nov  3  2020 media
drwxr-xr-x   2 root root 4096 Nov  3  2020 mnt
drwxr-xr-x   2 root root 4096 Nov  3  2020 opt
dr-xr-xr-x 121 root root    0 Oct 13 03:25 proc
dr-xr-x---   2 root root 4096 Sep 15  2021 root
drwxr-xr-x  11 root root 4096 Sep 15  2021 run
lrwxrwxrwx   1 root root    8 Nov  3  2020 sbin -> usr/sbin
drwxr-xr-x   2 root root 4096 Nov  3  2020 srv
dr-xr-xr-x  13 root root    0 Oct 13 02:31 sys
drwxrwxrwt   7 root root 4096 Sep 15  2021 tmp
drwxr-xr-x  12 root root 4096 Sep 15  2021 usr
drwxr-xr-x  20 root root 4096 Sep 15  2021 var

# 对比于CMD, ENTRYPOINT 相当于追加命令
```

### 发布自己的镜像

> Dockerhub

1、注册自己的账号

2、确定这个账号可以登录

3、在服务器上提交自己的镜像

### Docker流程小结

![image-20231013114943763](https://s2.loli.net/2024/03/22/5oEKlpSkUOBNIj7.png)