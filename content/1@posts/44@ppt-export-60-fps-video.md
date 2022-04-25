---
title: 使用PPT导出60帧视频
description: PPT的非线性动画真好用
---

## Why

默认 PPT 就可以导出视频，但是只能导出 30 帧的视频，不够丝滑
无法体现非线性动画的美

## 操作流程

View -> Macros

![](./_img/44-1.png)

输入宏的名字，比如`video60fps`

![](./_img/44-2.png)

粘贴如下代码

```vb
Sub video60fps()
If ActivePresentation.CreateVideoStatus <> ppMediaTaskStatusInProgress Then
' 把文件保存在桌面 Video.mp4 中
ActivePresentation.CreateVideo FileName:=Environ("USERPROFILE") & "\Desktop\Video.mp4", _
' 设置计时和旁白使用指令
UseTimingsAndNarrations:=True, _
' 每张幻灯片间隔 1 秒
DefaultSlideDuration:=1, _
' 分片率 1080p
VertResolution:=1080, _
' 60 fps
FramesPerSecond:=60, _
' 最高质量
Quality:=100
Else: MsgBox "There is another conversion to video in progress"
End If
End Sub
```

然后关闭 VB 编辑窗口，回到 PPT，再次打开 Macros 窗口，选中刚才创建的宏，然后 Run

## Refs

- [How to Create 60 FPS PowerPoint Videos](https://www.youtube.com/watch?v=Pd-DrfGsCjQ&t=309s)
- [如何利用 PowerPoint 导出 60 帧 PPT 演示视频](https://zhuanlan.zhihu.com/p/91519346)
