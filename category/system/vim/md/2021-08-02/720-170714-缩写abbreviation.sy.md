---
show: step
version: 1.0
enable_checker: true
---

# 缩写abbreviation

## 回忆上次折叠的细节

- 这次了解到了`:mkview`、`:loadview`
- 保存和加载视图
- 保存的选项在`viewoption`中
- 还可以保存多个视图
	- 在整个文档中跳来跳去
- 视图里面可以有很多本地窗口的设置
	- 折叠
	- 缩写
	- 映射
- 那么到底什么是缩写和映射呢？🤔

### 配置环境
- 缩写之类的东西我们早就见过
	- `:se nu`
	- `:se[t] nu[mber]`
- 不用都打上，打上缩写形式就自动能好使
- 类似的还有`:s`
	- 对应着`:substitute`
- 这部分功能当前系统好像有点问题
- 需要看一下~/.vimrc

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210724-1627118976197)
- 把177这句`set paste`是控制粘贴用的
- 有的时候粘贴出来时对不齐就用`:set paste`
- 粘贴完之后`:set nopaste`
- 现在我们`:set nopaste`

### 缩写abbreviation
- 我们可以快速的定义缩写
- `:abbreviate hi hello` 
	- 这个时候如果输入`hi`<kbd>空格</kbd>
	- hi就自动变成了hello
- 这有点像颜文字转化工具
- `:abbreviate sml ヾ(❀╹◡╹)ﾉ~`
	- 还挺好使 哈哈
- 还可以使用缩写形式`ab`
	- `:ab o1z oeasy`
- 这个东西其实还是有一定实用性的
	- `:ab sysout System.out.println();`
- 还可以用来改错
	- `:ab teh the`


### 列出所有的缩写abbreviate
- `ab[breviate]`可以列出所有的缩写

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210724-1627115680457)

- 第一列代表使用范围
	- ! 全部模式包括输入和命令行
	- i 输入模式 insert
	- c 命令行模式 command
- 单独定义某模式下的ab
	- `:iab o1z oeasy` 插入模式
	- `:cab o1z oeasy` 命令模式
	- `:ab o1z oeasy` 全部模式
	
### 取消缩写

- `:ab`先看看有啥
- `:una o1z`
- `:ab` 发现这个`o1z`已经删除了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210724-1627117290994)

- clear
	- `:iabc[lear]` 清空输入状态下的缩写abbreviate
	- `:cabc[lear]` 清空命令状态下的缩写abbreviate
	- `:abc[lear]` 清空一切状态下的缩写abbreviate

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210724-1627117122470)

- 一个个定义映射有点麻烦
- 我能直接利用曾经写过的单词么？

### 自动补全

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210725-1627174405321)

- 我们的缓冲中有很多已经写出来的单词
- 我们可以用这些来做自动补全
- 我们写下S然后按下<kbd>ctrl</kbd><kbd>p</kbd>
	- 出现一个提示框我们可以选择里面的单词
	- <kbd>ctrl</kbd><kbd>p</kbd> previous
	- <kbd>ctrl</kbd><kbd>n</kbd> next
	- 随着输入的进行还可以缩小查找范围

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210725-1627174613432)

- 这个东西也是非常实用的小技巧 

## 总结

- 这次了解到了`:abbrivate`缩写
- 可以定义缩写
	- `:ab o1z oeasy`
- 可以定义到指定的模式
	- `iab`
	- `cab`
- 查看所有的缩写
- 保存和加载视图
- 保存的选项在`viewoption`中
- <kbd>ctrl</kbd><kbd>p</kbd>、<kbd>ctrl</kbd><kbd>n</kbd>可以使用自动补全
- 可以保存的除了缩写还有个映射
- 应设置什么意思呢？🤔
- 下次再说！





