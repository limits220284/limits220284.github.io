### stl
- multiset
> multiset是c++中的平衡树，能够维护一个从小到大的序列，能够O($log(n)$)的进行元素的查找和删除，其中的元素是可以重复的
- set
> set是集合类型元素，能够维护一个有序无重复的序列，需要注意的是，c++并不能够通过迭代器跳跃访问set中的元素，只能够通过 $++iter$ 和 $--iter$ 的方式来访问set中的元素。