---
show: step
version: 1.0
enable_checker: true
---

# 编辑过程

## 回忆上次

- 我们上次了解了缓冲区buffer
- `ls`可以查看`buffer`,如下是`buffer`缓冲的一些`flag`
 	- `+`   有修改未保存内容      
	- `-`   可修改标签关闭
	- `=`   只读缓冲区
	- `a`   活跃缓冲区                                         
	- `u`   没有在列表里面的缓冲区
	- `h`   隐藏缓冲区
	- `x`   有读取错误的缓冲区
	- `%`   当前缓冲区
	- `#`   有`swap`替换文件的缓冲区

- 可以在`buffer`跳转
	- 可以通过`bn[ext]`,选择下一个`buffer`
	- 可以用`b[uffer1]`、`b2`进入指定的 `buffer`
	- 也可以用文件名，比如`b[uffer] oeasy.txt`
	- 可以用`bf[irst]`，打开第一个`buffer`
	- 可以用`bl[ast]`，打开最后一个`buffer`
- 跳转的时候可以不强制保存
	- 设置`hidden`
- 关于强行跳转和保存退出
	- 强制跳转`:q!`
	- 不保存强行退出所有`buffer` `:qall!`
	- 保存所有未保存的文件`:wall`
	- 全部保存并退出`:wqall`
- `vim`两个文件，可以放到两个窗口里面打开吗？🤔
- 什么是窗口，查一下手册`:h window`


### 查看手册📕

- 上次的`buffer`是内存中的文件缓存
- 这次的`window`是打开`buffer`的一个视角
- 我们可以通过`:sp[lit]`来切分窗口
- 切分出窗口之后可以用`:q`退出窗口
- 这样就又回到单一窗口的状态

### 在此切分

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210204-1612419465415)

- 我们`:sp[lit]`来切分窗口
	- 我们可以切换
	- <kbd>ctrl</kbd>+<kbd>k</kbd>切换到当前窗口上面的窗口
	- <kbd>ctrl</kbd>+<kbd>j</kbd>切换到当前窗口下面的窗口
	- 第一个`w`意味着window
	- `jk`方向和移动方向相同
- 可以再次切分`:sp[lit]`
	- 再次切换
	- <kbd>ctrl</kbd>+<kbd>w</kbd>再<kbd>k</kbd>切换到当前窗口上面的窗口
	- <kbd>ctrl</kbd>+<kbd>w</kbd>再<kbd>j</kbd>切换到当前窗口下面的窗口

### 纵向切分

- 我们在中间的一层
- `:vsp[lit]`，v的意思是`vertical`垂直方向
- 于是就可以把这个`window`再进行切分
- 在中间左右切换的时候，使用
	- <kbd>ctrl</kbd>+<kbd>w</kbd>再<kbd>h</kbd>切换到当前窗口左面的窗口
	- <kbd>ctrl</kbd>+<kbd>w</kbd>再<kbd>l</kbd>切换到当前窗口右面的窗口
	

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210204-1612419978345)

### 关于最底下的状态栏

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210204-1612420149779)

- `:set laststatus=0`最底下不用状态栏
- `:set laststatus=1`最底下有状态栏，有多个窗口的时候
- `:set laststatus=0`最底下总有状态栏

### 设置window现实与隐藏

- `:hide`隐藏当前`window`
- `:on[ly]`保留当前`window`，其余的都`hidden`
- 如果`:set autowrite`了，`hidden`的时候就自动保存


## 总结

- 我们这次了解了窗口window，窗口是用来装缓冲`buffer`的
- `buffer`是内存里面存储的文件
- 窗口的切分
	- `:sp[lit]` 水平切分
	- `:vsp[lit]` 垂直切分
- 窗口的切换
	- <kbd>ctrl</kbd>+<kbd>w</kbd>再<kbd>k</kbd>切换到当前窗口上面的窗口
	- <kbd>ctrl</kbd>+<kbd>w</kbd>再<kbd>j</kbd>切换到当前窗口下面的窗口
	- <kbd>ctrl</kbd>+<kbd>w</kbd>再<kbd>h</kbd>切换到当前窗口左面的窗口
	- <kbd>ctrl</kbd>+<kbd>w</kbd>再<kbd>l</kbd>切换到当前窗口右面的窗口
- 窗口的隐藏和全屏
	- `:hid[e]`可以隐藏当前窗口，隐藏的`window`中`buffer`不保存，除非`autowrite`设置了
	- `:on[ly]`可以全屏当前窗口，其他的窗口都进入`:hide`状态
- 这次主要就是`window`,还挺方便，尤其多文件操作
- 这个还有什么可玩的吗？🤔
- 下次再说 👋






