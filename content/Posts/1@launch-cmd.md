---
title: 如何快速在指定目录启动Windows控制台
date: 2018-03-04
tags:
  - windows
---

原标题:如何在右键菜单里面添加cmd

正如原标题所说，本文只讲述如何在右键菜单添加cmd

## 目标效果

在右键菜单里面添加cmd的想法来源于安装**git**之后右键菜单出现的**git bash here**，如果能做出这样的效果，在任何目录单击右键就能在当前目录启动cmd

## 文件夹上的右键菜单添加cmd

个性化右键菜单需要修改**注册表文件(registry file)**

使用我们熟悉的**Win+R**打开运行窗口，运行"**regedit**"，即**注册表编辑器(registry editor)**

为了防止搞砸，可以先**备份**一下目前的注册表文件

菜单栏-文件-导出

![3-1](./_img/3-1.png)

右键点击**HKEY_CLASSES_ROOT/Folder/shell**选择**新建-项**新建一个键值，此处命名为cmdPrompt。这个名字不重要，只要起一个好辨识且不冲突的即可

![3-2](./_img/3-2.png)

将其数据改为**cmd**，这个数据的值为右键菜单中显示的名称

![3-3](./_img/3-3.png)

在cmdPrompt上右击，选择**新建-项**新建一个键值，命名为**command**，代表cmdPrompt的command命令，所以此键值的名称不能更改

![3-4](./_img/3-4.png)

将其数据改为

```
cmd.exe /k cd %1
```

效果

![3-5](./_img/3-5.png)

## 文件夹内空白处右键菜单里添加cmd

这次定位到

```
HKEY_CLASSES_ROOT\Directory\Background\shell\cmdPrompt
```

重复上一小节的内容

![3-6](./_img/3-6.png)

但是这次command里面的指令不是`cmd.exe /k cd %1`了，否则会提示错误

改成

```
cmd.exe /s /k pushd "%V"
```

![3-7](./_img/3-7.png)

效果

![3-8](./_img/3-8.png)

## 添加图标

在刚才的cmdPrompt里面**新建-字符串值**，命名为**Icon**(显然这个名称不可自定义)并赋值为**cmd.exe**

![3-9](./_img/3-9.png)

效果

![3-10](./_img/3-10.png)

## 最后

其实在文件夹内**shift+右键**的菜单里面有**在此处打开PowerShell窗口**选项

但是感觉用起来不顺手呀:)

参考:
- [给右键菜单加入CMD命令行快速通道(适合win7)](http://dongwei.iteye.com/blog/816350)
- [右键打开命令行窗口CMD](http://blog.csdn.net/zyw_anquan/article/details/77712943)

[Part 2传送门](/2018/03/13/如何快速在指定目录启动Windows控制台(part-2)/)
