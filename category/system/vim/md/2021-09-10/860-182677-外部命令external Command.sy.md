---
show: step
version: 1.0
enable_checker: true
---

# 外部命令  external

## 回忆

- 上次研究的是global
- `:[range]global/{pattern}/{command}`
	- `range` 是执行的范围
	- `pattern` 是搜索的模式
	- `command` 执行的命令
- 命令有很多
	- d 删除
	- m 移动
	- t 拷贝
	- p 打印
	- s 替换
	- sort 排序
	- update 更新
- `global` 是很好用的内部命令
- vim还可以执行外部命令呢！
- 怎么玩呢？🤔

### 回忆外部命令

- `:!ls`
	- 在命令行列表
- `:!python %`
	- 运行python程序额
- `:!javac %`
	- 编译java程序

### r读取

- `:r oeasy.txt`
- `:r !ls`
- `:r !ls -lah`
- `:r !cat oeasy.txt`
- `:r !curl -s 'http://oeasy.org'`

### 我杀死我自己
- `:!ps`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210802-1627866038521)

- `:!kill -9 341`

### tr命令translate

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210802-1627866158517)

- `:.!tr '[:lower:]' '[:upper:]'`
	- `.!` 
		- 当前行执行外部命令`
	- `!tr '[:lower:]' '[:upper:]'`
		- 调用外部命令把小写字母translate成大写字母
- `:%!tr '[:lower:]' '[:upper:]'`
	- 全部行都执行
- `:1，2!tr '[:lower:]' '[:upper:]'`
	- 1、2行执行

### awk
- awk其名称得自于它的创始人 Alfred Aho 、Peter Weinberger 和 Brian Kernighan

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210802-1627867055437)

- `:%!awk '{print $1}'`
- <kbd>u</kbd>回来
- 再试试`:%!awk '{print $2}'`

### 管道pipe

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210802-1627867271401)

- `:%!awk 'NR > 1' | sort -nk 3 | column -t`
	- `%!` 执行范围range是所有行
	- `awk 'NR > 1'` 从第二行开始awk
	-  `|` 管道
	- `sort -nk 3`  使用第3列进行排序
	- `column -t` 用空格隔开

## 总结
- 这次我们尝试了一下各种在vi中执行外部程序
    - 可以排序
    - 可以改大小写
    - 还可以用管道
    - 直接对于缓冲buffer文件进行操作
    - 还是很方便的
- 其实还有一个外部命令很重要
    - 根据内容搜索grep
    - 这个怎么和vim配合呢？🤔
- 下次再说！


