---
show: step
version: 1.0
enable_checker: true
---

# 那啥在哪whereis

## 回忆上次内容😌


#### 上次讲了ls 的参数(arguement)和选项(option)的设置

#### 现在我们要整这么一个列表🗒

- 对于 /proc路径进行列表
- 对子路径递归列表
- 显示隐藏文件
- 显示详细信息
- 其中容量使用人们熟知的单位

#### 你都忘了?!!!😱

- 没关系 
- 查手册啊📕


#### 做完了之后思考,ls到底在哪?🤔

### ls在哪?🤔

- 想要知道ls在哪就得用新命令whereis
- 我们的命令(command)的名字是whereis
- 我们whereis命令的参数是ls
- 综合起来就是



```shell
whereis ls
```

```checker
- name: 检查是否在命令历史中曾经出现过 uname
  script: |
    cat /home/shiyanlou/.zsh_history | grep "whereis ls"
  error: 您还没有查询ls的手册
  timeout: 1
```

- 我们得到了ls两个硬盘位置
    -   /bin/ls 
    -   /usr/share/man/man1/ls.1.gz
- 为什么在硬盘里?🤔
          
### 为什么ls在硬盘里?🤔

- ls文件最开始在/bin这个位置
- 当我在命令行敲击之后ls回车之后
- 操作系统要求运行ls程序
- 操作系统分配内存空间给ls
- 操作系统把ls从硬盘加载到内存中
- 操作系统分配cpu资源去执行程序
- 最终把ls的结果输出到标准输出流(屏幕)上

#### 为什么ls命令对应两个位置?🙄

### 为什么两个位置??🤔


- 我们可以对whereis发出灵魂之问whatis
    - whatis whereis
    - whereis可以帮我们定位命令的位置
    
####whereis太简单了,这个恐怕要查文档
- 我们查询whereis的手册man📕
    - man whereis
    - 我们可以查询到whereis的手册📕

![Image text](https://labfile.oss.aliyuncs.com/courses/2712/whereis.png)


### 来试试选项的功能

- whereis -b ls
    - b的意思是binary二进制
    - 查找whereis二进制
    - 二进制文件在/bin里
- whereis -m 
    - m的意思是manual文档
    - 查找whereis的文档
    - 文档在/usr/share/man里面

-   这两个
    -       一个是二进制命令
    -       另一个是帮助手册
 
#### 那ls的源文件在哪呢?这有点复杂...🧐


###得到ls源文件
- dpkg -S /bin/ls
    - dpkg是debian package是debian的包管理命令
    - -S是在已经安装的包里面查找search
    - /bin/ls是具体文件的位置
    - 得到结果是coreutils(核心应用)
- 设置源
    - sudo vi /etc/apt/sources.txt
        - 打开源的配置文件 
        - sudo 是使用管理员权限
        - vi 是文本编辑器
        - /etc/apt/sources.txt是源的配置文件
    - 直接输入<kbd>G</kbd>(直接到最后一行Ground)
        - 注意这个时候左下角是空白状态
    - 直接输入<kbd>o</kbd>(在当前行后面添加一行)
        -  注意左下角变成了Insert(插入状态)
    -  将下面粘贴到最后一行
        - deb-src http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse
        - 这条设置的是debian的源的位置
    - 摁下<kbd>esc</kbd>
        - 注意左下角不再是Insert(插入状态),而是退回到了空白  
    - 依次摁下
        - <kbd>:</kbd>
        - <kbd>w</kbd>
        - <kbd>q</kbd>
        - <kbd>回车</kbd>
        - 保存并退出vi
- 用apt下载源代码
    - apt是高级包管理的命令
    - 运行sudo apt update(更新源)
    - sudo apt source coreutils(获得源代码)
    - 在当前文件夹下找到coreutilsXXX文件夹
    - 进入src源文件文件夹(source)
    - ls ls.*
    - 找到了ls.c文件(ls的c语言源文件)

### 思考🤔
- 我们真的可以获得ls源代码,这太棒了!👊
- 可是如果有多个版本的命令比如
    -   java8
    -   java13
-   那我到底用的是那个版本的java呢?🙄
-   我们下次再说👋