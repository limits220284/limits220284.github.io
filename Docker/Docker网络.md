### Docker 网络

#### 理解docker0网络

![image-20231013115750763](https://s2.loli.net/2024/03/22/Yv2Q3sSdfVOZILc.png)

三个网络:

问题： docker是如何处理容器网络访问的？

```shell
[root@wh ~]# docker pull tomcat:7.0
7.0: Pulling from library/tomcat
0bc3020d05f1: Pull complete
a110e5871660: Pull complete
83d3c0fa203a: Pull complete
a8fd09c11b02: Pull complete
96ebf1506065: Pull complete
26b72ffca293: Pull complete
0bffa2ea17aa: Pull complete
d880cebcc7a6: Pull complete
d19ab8039b36: Pull complete
5057492dc495: Pull complete
Digest: sha256:f7d37d248d0eacec1e5995736234c9c22155626fcb27ea3ead13b9db24e698f7
Status: Downloaded newer image for tomcat:7.0
docker.io/library/tomcat:7.0

[root@wh ~]# docker run -d -P --name tomcat02 tomcat:7.0
f0de53bc9b9c73456de611811290405d3748dd40a991326dd561c8207a20d395
[root@wh ~]# docker exec -it tomcat02 ip addr 
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
80: eth0@if81: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default
    link/ether 02:42:ac:11:00:03 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 172.17.0.3/16 brd 172.17.255.255 scope global eth0
       valid_lft forever preferred_lft forever


### linux是否能够ping通容器内部

```

> 原理

1、我们每启动一个docker容器，docker就会给docker容器分配一个ip，我们只要安装了docker，就会有一个网卡docker0，桥接模式。使用的技术是evth-pair技术。

![image-20231013121715720](https://s2.loli.net/2024/03/22/jvJHOB5ue8pZ9hD.png)

我们发现这个容器带来的网卡，都是一对的

evth-pair就是一对的虚拟设备接口，他们都是成对出现的，**一段连着协议，一段彼此相连**

正因为有这个特性，evth-pair充当一个桥梁，连接各种虚拟网络设备

OpenStac，Docker容器之间的连接，OVS的连接，都是使用evth-pair技术

2、我们来测试容器之间是否能够ping通

```shell
# 先获取tomcat03的ip地址
[root@wh ~]# docker exec -it tomcat03 ip addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
82: eth0@if83: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default
    link/ether 02:42:ac:11:00:04 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 172.17.0.4/16 brd 172.17.255.255 scope global eth0
       valid_lft forever preferred_lft forever

# 通过tomcat02来ping tomcat03的ip地址
[root@wh ~]# docker exec -it tomcat02 ping 172.17.0.4
PING 172.17.0.4 (172.17.0.4) 56(84) bytes of data.
64 bytes from 172.17.0.4: icmp_seq=1 ttl=64 time=0.081 ms
64 bytes from 172.17.0.4: icmp_seq=2 ttl=64 time=0.091 ms
64 bytes from 172.17.0.4: icmp_seq=3 ttl=64 time=0.052 ms
64 bytes from 172.17.0.4: icmp_seq=4 ttl=64 time=0.109 ms
64 bytes from 172.17.0.4: icmp_seq=5 ttl=64 time=0.054 ms
64 bytes from 172.17.0.4: icmp_seq=6 ttl=64 time=0.056 ms
64 bytes from 172.17.0.4: icmp_seq=7 ttl=64 time=0.057 ms
64 bytes from 172.17.0.4: icmp_seq=8 ttl=64 time=0.097 ms

```

![image-20231013122529483](https://s2.loli.net/2024/03/22/sr6ZvGQpPzjOKEe.png)

结论：两个容器之间是公用的一个路由器，docker0

所有的容器不指定网络的情况下，都是docker0路由的，docker会给我们的容器分配一个默认可用的IP

![image-20231013122915719](https://s2.loli.net/2024/03/22/SgL3cJx8p9zHEbG.png)

Docker中的所有网络接口都是虚拟的，虚拟的接口转发效率高！

#### 自定义网络

![image-20231014105726912](https://s2.loli.net/2024/03/22/ZPzQjuHB82bloaA.png)

查看所有docker网络：

```shell
bridge: 桥接 docker上面搭桥(自己创建也使用桥接模式)
none: 不配置网络
host: 和宿主机共享网络
container: 容器内网络联通！(用的很少) 


# 我们直接启动的命令 --net bridge，而这个就是我们的docker0
docker run -d -p --name tomcat01 tomcat
docker run -d -p --name tomcat01--net bridge tomcat

# docker0特点，默认，域名不能访问

# 我们可以自定义一个网络
[root@wh ~]# docker network create --driver bridge --subnet 192.168.0.0/16 --gateway 192.168.0.1 mynet
f3ffc51a698c17206043376dcdbefcc0e34b7fa977f8ca5c52fc1db7735a6a7a
# 查看新创建的网络
[root@wh ~]# docker network ls
NETWORK ID     NAME      DRIVER    SCOPE
e95da429049e   bridge    bridge    local
207d9b9dc1fd   host      host      local
f3ffc51a698c   mynet     bridge    local
cb4f9dd2e2dc   none      null      local

```

查看自己创建的网络

![image-20231014110803466](https://s2.loli.net/2024/03/22/9TV4dQSyAKLzDXn.png)

![image-20231014111241371](https://s2.loli.net/2024/03/22/3UN5vb4klsxuJ6i.png)

```shell
# docker 中的自定义网络是可以互相访问的

[root@wh ~]# docker run -d -P --name tomcat-net-01 --net mynet tomcat:7.0
cfe328f223743b70498f2559f27653dc7686b0f4fda62e6f9d6d27c947379163
[root@wh ~]# docker run -d -P --name tomcat-net-02 --net mynet tomcat:7.0
7fa39e3fb6090430fc88d8d6f5533f9992459095a29955a9641c48c8f885408f
[root@wh ~]# docker exec -it tomcat-net-01 ping tomcat-net-02
PING tomcat-net-02 (192.168.0.3) 56(84) bytes of data.
64 bytes from tomcat-net-02.mynet (192.168.0.3): icmp_seq=1 ttl=64 time=0.072 ms
64 bytes from tomcat-net-02.mynet (192.168.0.3): icmp_seq=2 ttl=64 time=0.066 ms
64 bytes from tomcat-net-02.mynet (192.168.0.3): icmp_seq=3 ttl=64 time=0.055 ms
64 bytes from tomcat-net-02.mynet (192.168.0.3): icmp_seq=4 ttl=64 time=0.064 ms
```

#### 网络连通

![image-20231014112014025](https://s2.loli.net/2024/03/22/yNGu2p9ohr4IPwK.png)

![image-20231014112214276](https://s2.loli.net/2024/03/22/h2Hs1O4IN6UkzyZ.png)



```yaml
# 测试打通tomcat01到mynet中

# 新建立一个docker0网络中的容器
[root@wh ~]# docker run -d -P --name tomcat01 tomcat:7.0
f2f7f15fdecf0f4f775a46eae392d8162da2651da6141cc4bb7196a7d673d2ee
# 连接tomcat01 到 mynet 中
[root@wh ~]# docker network connect mynet tomcat01
[root@wh ~]# docker network inspect mynet
[
    {
        "Name": "mynet",
        "Id": "f3ffc51a698c17206043376dcdbefcc0e34b7fa977f8ca5c52fc1db7735a6a7a",
        "Created": "2023-10-14T11:06:54.74431649+08:00",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "192.168.0.0/16",
                    "Gateway": "192.168.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "7fa39e3fb6090430fc88d8d6f5533f9992459095a29955a9641c48c8f885408f": {
                "Name": "tomcat-net-02",
                "EndpointID": "7fc23bdb06b6778594e8b29939a006b3227344e1ecf993d32d9ce4a4cf6a6096",
                "MacAddress": "02:42:c0:a8:00:03",
                "IPv4Address": "192.168.0.3/16",
                "IPv6Address": ""
            },
            "cfe328f223743b70498f2559f27653dc7686b0f4fda62e6f9d6d27c947379163": {
                "Name": "tomcat-net-01",
                "EndpointID": "cb6853b415a56ec87160c1388abb47f4a97bf699dda1aac633b01e2d3444184e",
                "MacAddress": "02:42:c0:a8:00:02",
                "IPv4Address": "192.168.0.2/16",
                "IPv6Address": ""
            },
            "f2f7f15fdecf0f4f775a46eae392d8162da2651da6141cc4bb7196a7d673d2ee": {
                "Name": "tomcat01",
                "EndpointID": "8c36538c86715465dbf4fed84ca5784011be126d46c2e9f288c18b1886bc6604",
                "MacAddress": "02:42:c0:a8:00:04",
                "IPv4Address": "192.168.0.4/16",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {}
    }
]

# 总结：实际上就是别的网段里面的容器加入到了自定义网络下，实际上就是一个容器两个ip
```
