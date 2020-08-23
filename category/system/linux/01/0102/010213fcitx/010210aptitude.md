---
show: step
version: 1.0
enable_checker: true
---

# 本章回顾

## 我们来回顾一下😌

#### 上一部分我们都讲了什么?🤔


- 下载并运行了hollywood🎭

```shell 
hollywood
```

- 更新的源上的信息📥


```shell 
sudo apt update
```

- 查看所有已经安装的软件包📦

```shell 
# dpkg deiban本地包管理
dpkg --list 
#apt 高级软件包管理
sudo apt list --installed
```

- 查看可升级的软件包📦

```shell 
sudo apt list --upgradable
```

- 从可更新列表里面发现了firefox
- 那我们如何更新firefox呢?

## 本地软件包升级📦

- 指定安装firefox
- 由于本地firefox🦊,源上的firefox版本要低
- 所以安装过程就是升级了

```shell 
sudo apt install firefox
```

- 我们可以查看到firefox的安装版本


```shell 
sudo apt list --all-versions --installed|grep firefox
dkpg --list|grep firefox
```
- grep是文本查找工具
    - grep firefox是在文本中搜索firefox 
- | 起到管道作用
- 我们很快就会弄明白这两个很重要的东西


## 全部更新📥
- 一个一个更新太麻烦了
- 我需要全部更新
- 更新之前确保最新的源已经下载到本地

```shell 
sudo apt update
sudo apt upgrade
```
- upgrade会比较本地安装包的信息和已下载的源的信息
- 找出所有满足依赖条件的软件📦包安装
- - 如果一个包依赖于某已经安装包的删除,那这个包不会被安装
- 目前的包不会被删除
- 如何删除原来的软件包

```shell 
sudo apt full-upgrade
```

- 如果升级软件的时候依赖于删除现有的包,full-upgrade可以先删除再安装
- 之前安装需要,但更新后不再需要的依赖怎么办?


```shell 
sudo apt autoremove
```

- 可以有什么方法更好的管理应用吗?🤔

## aptitude
####这软件可以管理apt,首先要下载🤪


```shell 
sudo apt install aptitude
```

![Image text](https://labfile.oss.aliyuncs.com/courses/2712/aptitude.png)


- / 搜索
- ? 帮助
- q 推出
- g 升级
- <kbd>ctrl</kbd>+<kbd>t</kbd> 调出菜单
    - 里面还有个扫雷子游戏

### 总结🤨
- 软件包工具🔧是apt
- 软件包不但能下载
- 也能升级
- 也能删除
- 还有个专门管理软件包的aptitude
- 下次玩什么呢?
- 下次再说!👋
