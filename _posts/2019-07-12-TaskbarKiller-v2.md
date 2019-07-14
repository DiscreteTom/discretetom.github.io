---
layout: post
author: DiscreteTom
catalog: true
title: TaskbarKiller-v2
subtitle: windows热键、windows无窗口后台程序
tags:
  - windows
  - hotkey
  - reg
---

## why v2?

第一代[TaskbarKiller](https://github.com/DiscreteTom/TaskBarKiller)使用了Qt库而显得有点臃肿。作为一个后台运行的程序，TaskbarKiller完全不需要图形界面。所以计划使用原生无图形界面的C重构出来一个更简洁的TaskbarKiller

## 实现windows热键

使用RegisterHotkey函数实现热键的注册。TaskbarKiller v2不打算使用一代的热键`ctrl+~`（因为这是vscode呼出终端的键），所以改为`win+~`

参数原型为`BOOL RegisterHotKey(HWND hWnd, int id, UINT fsModifiers, UINT vk);`

- `hWnd`为处理热键事件的句柄。因为是TaskbarKiller自己处理热键事件，所以置`NULL`
- `id`为热键在处理热键句柄中的ID。因为TaskbarKiller仅处理这一个热键，所以随便设置一个数即可
- `fsModifiers`为装饰键，此处为`MOD_WIN`表示按下win键
- `vk`表示非装饰键，此处为`VK_OEM_3`表示`~`

如果函数返回0则注册失败，否则注册成功

可以使用函数`UnregisterHotKey(hWnd, id)`来取消注册热键。程序关闭时也会自动注销热键

## 实现后台运行

### 编写windows服务程序实现后台运行

此方案已失败。不过留下了一些注意事项：

- 使用SC命令注册服务需要管理员身份
- SC命令的路径参数必须是绝对路径
- 应用需要先设置为START_PENDDING状态然后再设置RUNNING状态

使用服务程序注册热键的时候出现错误代码1459，查阅文档得到如下结果

>ERROR_REQUIRES_INTERACTIVE_WINDOWSTATION
>
>1459 (0x5B3)
>
>This operation requires an interactive window station.

所以使用windows后台服务程序实现热键是不可能了

### 使用MSVC linker参数隐藏控制台窗口

实现此方案需要使用MSVC的如下linker参数:
- `subsystem:"windows"` - 表示程序不需要控制台窗口
- `entry:"mainCRTStartup"` - 指明程序入口函数为`main`或`wmain`

因为使用`subsystem:"windows"`参数取消控制台窗口之后默认入口函数为`WinMain`或`wWinMain`所以需要参数`entry:"mainCRTStartup"`重新指定入口函数

因为使用此方案需要MSVC的linker所以不能使用GCC，使用Visual Studio实现

## 使用注册表实现开机自启动

v2不打算把开机自启动写到程序里面以便删除不必要的交互

仍然使用注册表方案添加开机启动项，参考[之前的博文](https://discretetom.github.io/2018/04/09/Qt-Windows%E5%BA%94%E7%94%A8%E5%BC%80%E6%9C%BA%E8%87%AA%E5%90%AF%E5%8A%A8%E7%9B%B8%E5%85%B3/)，在注册表的`HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Run`目录下添加`TaskbarKiller-v2`项即可

为了获得`TaskbarKiller-v2.exe`的路径，使用了`reg-gen.bat`文件。`reg-gen.bat`会以其所在的目录创建`TaskbarKill-v2.exe`的注册表文件，所以只要`reg-gen.bat`和`TaskbarKiller-v2.exe`在同一个文件夹里就可以生成正确的注册表文件。双击注册表文件即可完成启动项的注册

因为是第一次使用注册表文件，所以遇到了一个小坑：注册表文件中的字符串值里面的`\`需要转义，即`\\`。所以使用`reg-gen.bat`生成路径的时候简单地把路径中的`\`替换为了`\\`

## 参考

- 隐藏任务栏
  - [屏蔽windows任务栏](https://discretetom.github.io/2018/05/25/%E5%B1%8F%E8%94%BDWindows%E4%BB%BB%E5%8A%A1%E6%A0%8F/)
- 后台运行相关
  - [使用 C 创建 Windows 服务](https://beginor.github.io/2014/09/19/windows-service-with-c.html)
  - [The Complete Service Sample](https://docs.microsoft.com/zh-cn/windows/win32/services/the-complete-service-sample)
  - [Svc.cpp](https://docs.microsoft.com/zh-cn/windows/win32/services/svc-cpp)
  - [C\C++控制台程序隐藏方法总结](https://blog.csdn.net/lynch0571/article/details/33320551)
  - [/SUBSYSTEM (Specify Subsystem)](https://docs.microsoft.com/en-us/cpp/build/reference/subsystem-specify-subsystem?view=vs-2019)
  - [/ENTRY (Entry-Point Symbol)](https://docs.microsoft.com/en-us/cpp/build/reference/entry-entry-point-symbol?view=vs-2019)
- 热键相关
  - [RegisterHotKey function](https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-registerhotkey)