# AWK常用命令



## 输出指定列 并 携带行号

```shell
awk '{print NR "\t" $  "\t" $2 "\t" $3}' test.txt
```



## 输出行中的列数

- NF(number of fields)

```shell
 awk '{print NF "\t" $0}' test.txt 
```



## 输出某列等于 xx 的信息

- 注意==右边字符串要加""

```shell
awk '$2=="Alice"{print $0}' test.txt 
```



## 输出指定行

```shell
 awk 'NR==7{print $1}' test.txt
```



## 自定义分隔符

```shell
# 输入分隔符
[root@iZ8vb9u5rjwnailz3vymm3Z ~]# awk 'BEGIN{FS=","} {print $1, $2}' 
hello world
hello world 
hello,world
hello world
hello world 123
hello world 123 
hello world, 123, 456
hello world  123

# 输出分隔符
[root@iZ8vb9u5rjwnailz3vymm3Z ~]# awk 'BEGIN{OFS=","} {print $1, $2}'
hello world
hello,world

# 同时设置输入和输出
[root@iZ8vb9u5rjwnailz3vymm3Z ~]# awk 'BEGIN{FS=",";OFS=","} {print $1, $2}'
hello,world
hello,world
```



## FILENAME

```shell
[root@iZ8vb9u5rjwnailz3vymm3Z ~]# awk '{print NR, FILENAME  $1, $2}' test.txt test1.txt
1 test.txtDate Name
2 test.txt2024-01-08 Charlie
3 test.txt2024-01-10 Alice
4 test.txt2024-01-05 Alice
5 test.txt2024-01-13 David
6 test.txt2024-01-14 Alice
7 test.txt2024-01-01 Charlie
8 test.txt2024-01-13 Charlie
9 test.txt2024-01-13 Eve
10 test.txt2024-01-03 Charlie
11 test.txt2024-01-12 Alice
12 test.txt2024-01-07 David
13 test.txt2024-01-06 Eve
14 test.txt2024-01-05 Alice
15 test.txt2024-01-03 David
16 test.txt2024-01-04 Alice
17 test1.txtfasd fasdfa
```

## 某一列进行赋值

```shell
[root@iZ8vb9u5rjwnailz3vymm3Z ~]# awk '{$3="xxxx";print $0}' test.txt 
Date Name xxxx Score Age
2024-01-08 Charlie xxxx 53 44
2024-01-10 Alice xxxx 2 59
2024-01-05 Alice xxxx 88 45
2024-01-13 David xxxx 30 33
2024-01-14 Alice xxxx 38 32
2024-01-01 Charlie xxxx Angeles 2 20
2024-01-13 Charlie xxxx York 64 54
2024-01-13 Eve xxxx York 60 24
2024-01-03 Charlie xxxx Angeles 21 38
2024-01-12 Alice xxxx 33 26
2024-01-07 David xxxx York 76 56
2024-01-06 Eve xxxx Angeles 58 35
2024-01-05 Alice xxxx York 22 21
2024-01-03 David xxxx 89 42
2024-01-04 Alice xxxx 49 31
```



## 打印出最后一列

```shell
[root@iZ8vb9u5rjwnailz3vymm3Z ~]# awk '{print $(NF)}' test.txt
Score
53
2
88
30
38
2
64
60
21
33
76
58
22
89
49
```



## 正则表达式

```shell
[root@iZ8vb9u5rjwnailz3vymm3Z ~]# awk '/li/{print $0}' test.txt 
2024-01-08      Charlie Phoenix 53      44
2024-01-10      Alice   Chicago 2       59
2024-01-05      Alice   Phoenix 88      45
2024-01-14      Alice   Phoenix 38      32
2024-01-01      Charlie Los Angeles     2       20
2024-01-13      Charlie New York        64      54
2024-01-03      Charlie Los Angeles     21      38
2024-01-12      Alice   Chicago 33      26
2024-01-05      Alice   New York        22      21
2024-01-04      Alice   Chicago 49      31


[root@iZ8vb9u5rjwnailz3vymm3Z ~]# awk '/i.e/{print $0}' test.txt 
2024-01-10      Alice   Chicago 2       59
2024-01-05      Alice   Phoenix 88      45
2024-01-14      Alice   Phoenix 38      32
2024-01-12      Alice   Chicago 33      26
2024-01-05      Alice   New York        22      21
2024-01-04      Alice   Chicago 49      31
```

