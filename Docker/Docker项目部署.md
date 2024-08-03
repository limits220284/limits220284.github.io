# Docker项目部署

## 1、配置Mysql文件

![image-20240326223849190](https://s2.loli.net/2024/03/26/NrndDSxEHwhM6eP.png)

```shell
docker run -d \
  --name mysql \
  -p 33306:3306 \
  -e TZ=Asia/Shanghai \
  -e MYSQL_ROOT_PASSWORD=123 \
  -v /root/mysql/data:/var/lib/mysql \
  -v /root/mysql/init:/docker-entrypoint-initdb.d \
  -v /root/mysql/conf:/etc/mysql/conf.d \
  mysql
```



## 2、部署后端项目

```dockerfile
# 基础镜像
FROM openjdk:11.0-jre-buster
# 设定时区
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
# 拷贝jar包
COPY hm-service.jar /app.jar
# 入口
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

构建指令

```shell
docker build -t hmall .
```

运行容器指令

```shell
docker run -d --name hmall -p 8080:8080 --network heima hmall # 需要指定网络
```

运行结果

![image-20240326232323986](https://s2.loli.net/2024/03/26/2D6dzl5CoWVPROv.png)



## 3、部署前端项目

```shell
docker run -d \
  --name nginx \
  -p 18080:18080 \
  -p 18181:18181 \
  -v /root/nginx/html:/usr/share/nginx/html \
  -v /root/nginx/nginx.conf:/etc/nginx/nginx.conf \
  --network heima \
  nginx
```



## 4、docker compose 一键部署

```yaml
version: "3.8"

services:
  mysql:
    image: mysql
    container_name: mysql
    ports:
      - "3306:3306"
    environment:
      TZ: Asia/Shanghai
      MYSQL_ROOT_PASSWORD: 123
    volumes:
      - "./mysql/conf:/etc/mysql/conf.d"
      - "./mysql/data:/var/lib/mysql"
      - "./mysql/init:/docker-entrypoint-initdb.d"
    networks:
      - hm-net
  hmall:
    build: 
      context: .
      dockerfile: Dockerfile
    container_name: hmall
    ports:
      - "8080:8080"
    networks:
      - hm-net
    depends_on:
      - mysql
  nginx:
    image: nginx
    container_name: nginx
    ports:
      - "18080:18080"
      - "18081:18081"
    volumes:
      - "./nginx/nginx.conf:/etc/nginx/nginx.conf"
      - "./nginx/html:/usr/share/nginx/html"
    depends_on:
      - hmall
    networks:
      - hm-net
networks:
  hm-net:
    name: hmall
```

![image-20240327001910294](https://s2.loli.net/2024/03/27/Og6CkSTt538VjGr.png)
