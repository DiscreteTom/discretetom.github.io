---
date: 2018-05-25
title: 屏蔽Windows任务栏
description: 基于QT的热键、隐藏任务栏
tags:
  - windows
---

## 产出

写了个基于QT的简单程序👉[TaskBarKiller](https://github.com/DiscreteTom/TaskBarKiller)👈

## 目标效果

默认**任务栏为自动隐藏状态**，即鼠标贴近屏幕边缘可以显示任务栏。

目标是实现在运行非全屏应用时鼠标贴近屏幕边缘不会呼出任务栏，以减少错误操作

## 方案

搜索得到以下信息
1. 任务栏也是窗口，可以获取句柄
2. 获取句柄的情况下可以使用Windows的[SetWindowsPos](https://msdn.microsoft.com/en-us/library/windows/desktop/ms633545)函数实现窗口的置顶与取消置顶等位置操作
3. 获取句柄的情况下可以使用Windows的[ShowWindow](https://msdn.microsoft.com/en-us/library/windows/desktop/ms633548)函数实现控制窗口的隐藏与显示

于是得到以下方案
1. 任务栏始终置底，只有在桌面鼠标贴近屏幕边缘才可以呼出任务栏（信息1+信息2）
2. 设置热键，使用热键切换任务栏的隐藏与显示（信息1+信息3）

方案1看起来是个优秀的方案，因为只需要设置一次即可满足任何时间的使用需要，而方案2每次调出任务栏需要按下热键。但是根据测试，使用SetWindowPos函数似乎并不对任务栏产生效果。在找到更好的方案之前，**暂时选择使用方案2**（测试得到**方案2**的另一个**缺点**是隐藏任务栏时**无法使用Win+数字**快捷键切换或启动应用，使用Alt+Tab切换应用吧）

细化方案2，需要写一个程序，满足：
1. 可以注册全局热键
2. 可以隐藏到系统托盘区域
3. 支持开机自启动

## 实现

全局热键使用第三方库QHotkey实现

MainWindow添加头文件

```cpp
#include <qhotkey.h>
```

添加私有成员

```cpp
QHotkey * hotkey;
bool taskBarIsHidden;
```

构造函数初始化，这里的快捷键选择了和网上相似软件一样的**Ctrl+~**

```cpp
hotkey = new QHotkey(QKeySequence("Ctrl+`"), true, this);//设置快捷键、默认启动
connect(hotkey, &QHotkey::activated, this, &MainWindow::getHotKeyPressed);//连接快捷键能够触发的功能
taskBarIsHidden = false;//默认任务栏是显示的
```

添加接收信号的槽函数

```cpp
void MainWindow::getHotKeyPressed()
{
	HWND hwnd=::FindWindow(L"Shell_TrayWnd",NULL);//查找任务栏句柄
	taskBarIsHidden = !taskBarIsHidden;//切换状态
	if (taskBarIsHidden){
		ShowWindow(hwnd, 0);//hide
	} else {
		ShowWindow(hwnd, 1);//show
	}
}
```

为了防止意外情况程序关闭导致任务栏一去不复返，在MainWindow的析构函数中添加显示任务栏的代码，在一定程度上补救一下

```cpp
MainWindow::~MainWindow()
{
	HWND hwnd=::FindWindow(L"Shell_TrayWnd",NULL);
	ShowWindow(hwnd, 1);//show
	delete ui;
}
```

至此实现主要功能

接下来添加开机自启动功能和最小化托盘功能，之前的博客已经讲过

传送门：
- [Qt-添加图标、资源文件相关、最小化到托盘](/2018/03/04/Qt添加图标-资源文件相关-最小化到托盘/)
- [Qt-Windows应用开机自启动相关](/2018/04/09/Qt-Windows应用开机自启动相关/)

参考:
- [任务栏句柄](https://blog.csdn.net/wangjieest/article/details/6943241)
- [如何使任意Windows窗口置顶](http://www.cnblogs.com/Ricky81317/archive/2009/01/16/1376745.html)
- [MSDN-SetWindowPos Function](https://msdn.microsoft.com/en-us/library/windows/desktop/ms633545)
- [C#使用Windows API 隐藏/显示 任务栏 (FindWindowEx, ShowWindow)](http://m.www.cnblogs.com/sjcatsoft/archive/2009/03/13/1410639.html)
- [ShowWindow function](https://msdn.microsoft.com/en-us/library/windows/desktop/ms633548)