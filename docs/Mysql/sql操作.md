# Sql指令

## 查询



## 连接



## 聚合函数

```sql
avg() -- 表示平均值
sum() -- 表示求和
round(x, 2) -- 表示保留两位有效数字
count(*) -- 表示求数据条目数
count(sale_date between '2019-01-01' and '2019-03-31' or null) -- 带有查询的数据条目数
max() -- 求最大值，如果没有数据，返回
```



## 排序和分组





## 高级查询和连接





## 子查询





## 高级字符串函数 / 正则表达式 / 子句

### 窗口函数

```sql
count(*) over (partition by employee_id) -- 通过某个字段，额外添加一列信息
```



### CASE or IF

```sql
case
  <statement> then <res>
  else <res>
end as 'triangle' -- case

if(statement, <res1>, <res2>)
```



### 字符串操作

```sql
SELECT user_id, CONCAT(UPPER(SUBSTRING(name, 1, 1)), LOWER(SUBSTRING(name, 2))) AS name
FROM Users
ORDER BY user_id;
-- concat 字符串连接
-- substring(s, begin, len)
-- upper(s)
-- lower(s)

group_concat(distinct(product) order by product separator ',') -- 分组联合，注意如果想要以','连接，函数中间不要加d
```



### 正则

```sql
SELECT patient_id, patient_name, conditions
FROM Patients
WHERE conditions REGEXP '\\bDIAB1.*';
-- 如果使用正则，添加j
```



## 日期

```sql
where activity_date between date_sub('2019-07-27', interval 29 day) and '2019-07-27' -- date_sub用来减去时间段

date_format(trans_date, "%Y-%m-%d")
```

















































