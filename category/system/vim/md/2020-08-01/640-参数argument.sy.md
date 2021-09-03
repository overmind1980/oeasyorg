---
show: step
version: 1.0
enable_checker: true
---

# 参数argument

## 回忆上次

- 总结出全键盘操作

- 新建与退出
	- <kbd>ctrl</kbd>+<kbd>w</kbd>再<kbd>s</kbd>  相当于`:sp[lit]` 上下分割
	- <kbd>ctrl</kbd>+<kbd>w</kbd>再<kbd>v</kbd>  相当于`:vsp[lit]` 左右分割
	- <kbd>ctrl</kbd>+<kbd>w</kbd>再<kbd>q</kbd>  相当于`:q[uit]`
	- <kbd>ctrl</kbd>+<kbd>w</kbd>再<kbd>o</kbd>  相当于`on[ly]`全屏
- 移动当前窗口
	- <kbd>ctrl</kbd>+<kbd>w</kbd>再<kbd>h</kbd>  选择左边的窗口
	- <kbd>ctrl</kbd>+<kbd>w</kbd>再<kbd>j</kbd>  选择下边的窗口
	- <kbd>ctrl</kbd>+<kbd>w</kbd>再<kbd>k</kbd>  选择上边的窗口
	- <kbd>ctrl</kbd>+<kbd>w</kbd>再<kbd>l</kbd>  选择右边的窗口  
- 调整宽度
	- <kbd>ctrl</kbd>+<kbd>w</kbd>再<kbd>=</kbd>  所有窗口尽量高度宽度都相等
	- <kbd>ctrl</kbd>+<kbd>w</kbd>再<kbd>-</kbd> 当前窗口高度降低
	- <kbd>ctrl</kbd>+<kbd>w</kbd>再<kbd>+</kbd> 当前窗口高度升高
	- <kbd>ctrl</kbd>+<kbd>w</kbd>再<kbd><</kbd> 当前窗口宽度降低
	- <kbd>ctrl</kbd>+<kbd>w</kbd>再<kbd>></kbd> 当前窗口宽度升高

### 同时打开三个文件

- 首先`man vi`查到打开三个文件的方式
	- `vi o1 o2 o3`
	- 命令是`vi`
	- `o1 o2 o3`是`3`个参数的列表(arguments list)
	- 我们可以在`:ar[gs]查看所有参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210204-1612441570438)

### 操作参数列表

- 添加`o4`参数
- `:arga o4` 添加argument add
	- `:args` 可以看见o4进入了列表
- `:arga .vimrc` 添加一个实际存在的文件
	- `:args` 可以看见`.vimrc`进入了列表
	- `ls` 可以看到他也进入了`buffer list`
	- `b .vimrc`可以把`window`切换到`.vimrc`这个`buffer`
- `:argd o4` 删除argument delete
	- `:args` 可以看见o4从列表消失
	
### 参数argument和缓存buffer之间的区别

- `arguement`是在打开`vim`时候打开的文件列表
- 一开始打开的文件在内存中加载成为一个个缓冲`buffer`
- 这个时候再新打开文件`:e o5`
- `o5`会进入`buffer list`但是不会进入`argument list`
- 如果想让他进入的话，就需要`:arga o5`
- 想在`arguments list`删除的话，就需要`:argd o5`
- 想在`buffers list`删除的话，可以`bd3`或者`bd o2`
- 我们为什么理清这些东西呢？因为以后可能会有批量处理文件列表，就需要用到参数列表或者缓冲列表


### 多参数多窗口

- 参数多于`1`的时候可以直接打开多个窗口
- 开关是`-o`
- `vi -o o1 o2 o3`
- 这样就可以横向打开`3`个`window`,每个`argument`对应一个
- 或者`vi -O o1 o2 o3` 纵向打开`3`个文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210204-1612440221882)

### 在`vim`中打开多个文件

- 首先在`terminal`做准备
- `ls -lah > oeasy.txt`
- `cp oeasy.txt o2z.txt`
- `vi`
- `:arga *.txt` 就可以把这两个文件加载到`argument list` 
- 同时也加载到`buffer list`缓冲列表
- 如果`:arga */*.txt`可以加载一层目录下面的`txt`文件
- 退出之后
- `e *.txt`不能执行
- `e o3z.txt`可以把文件加载到`buffer list`,但不进入`argument list`



### 直接打开多个文件作为`argments list`参数列表

- 在`terminal`中运行`sudo find / -mindepth 3 -maxdepth 4 -name passwd`可以用`sudo`权限找到所有3层目录到4层目录中名字含有`passwd`的文件列表
- 这个文件列表可以交给`vi`作为`argments list`参数列表
-  ` sudo find / -mindepth 3 -maxdepth 4 -name passwd | xargs vi`
-  这样打开之后`argments list`参数列表和`buffer list`缓冲列表都自动加载好了
-  如果有不需要的可以`:bd4`删除`缓冲`或者`:argd filename`来删除`参数`
-  用`:e filename` 添加`缓冲`　或者`:arga filename `添加 `参数`



## 总结

- 我们这次参数列表`arguments list`
- 所谓参数列表指的是`vim`打开的`参数列表`
- 参数会加载到内存中成为`buffer`
- 参数的控制
	- `:argd filename`来删除`参数`，此操作支持*可以打开多个文件
	- `:arga filename `添加 `参数`
	- `:args` 查询参数列表
- 缓冲的控制
	- `:bd filename`来删除`缓存`
	- `:e filename`来打开`缓存`
	- `ls`可以列出缓存列表
- 可以在`terminal`中配合`find`来找到文件，然后作为参数给`vim`
	-  ` sudo find / -mindepth 3 -maxdepth 4 -name passwd | xargs vi`
- 打开了参数列表或者缓冲列表，可以怎么用呢？🤔
- 下次再说 👋






