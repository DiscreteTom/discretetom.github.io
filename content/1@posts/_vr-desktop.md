---
title: VR 远程桌面开发笔记
description: 试图搞一个实用的开源VR远程桌面
---

## 捕获 Windows 桌面

https://learn.microsoft.com/en-us/windows/win32/direct3ddxgi/desktop-dup-api

https://www.cnblogs.com/strive-sun/p/14549569.html

https://longxuan.ren/2020/05/26/Windows-ScreenCapture/#DXGI

https://github.com/SerpentAI/D3DShot

https://github.com/ra1nty/DXcam

## 传输给 VR

### 基于网络

- 直接传输视频
  - RTMP？延迟较高，但是可以直接用 OBS 等工具推流
    - https://cloud.tencent.com/developer/article/1592731
    - https://www.gero.pub/2017/10/26/how-to-use-ijkplayer-in-unity/
    - https://code.videolan.org/videolan/vlc-unity/
  - SRT
    - https://obsproject.com/wiki/Streaming-With-SRT-Or-RIST-Protocols
- 捕获桌面图像后，传输增量信息
  - 可能需要快速的压缩/解压，比如 Snappy。尝试了 zlib，压缩比较慢，最快的模式压缩 2400x1600 的显示画面，可能需要 30ms

### 基于 USB 数据线

数据线连接 Android 设备、PC，然后使用 adb 实现端口转发

```bash
# 把PC的 54321 转发到VR的 12345
adb forward tcp:54321 tcp: 12345
```

https://blog.csdn.net/servermanage/article/details/102846692

似乎不支持转发 UDP

## VR 端渲染

作为实用的远程桌面，需要有透视功能，所以不用 WebXR，使用原生 SDK，基于 Unity3D 开发

### Unity3D 渲染基于字节的图片

https://stackoverflow.com/questions/40482700/convert-a-bitmap-to-a-texture2d-in-unity

https://docs.unity3d.com/ScriptReference/Texture2D.GetRawTextureData.html
https://docs.unity3d.com/ScriptReference/Texture2D.SetPixels.html
https://docs.unity3d.com/ScriptReference/Texture2D.GetPixels.html
https://docs.unity3d.com/ScriptReference/Graphics.CopyTexture.html

需要注意：使用 Windows Desktop Duplication API 得到的图像数据是 B8G8R8A8，也就是 BGRA 而不是 RGBA，创建 Texture2D 的时候需要创建正确，否则画面会变蓝

### Unity3D 性能测试

```cs
Profiler.BeginSample("name");
Profiler.EndSample();
```

### Color32 to optimize performance

直接应用 `Color32` 会比 `Color` 要快很多，而且可以直接接受 `byte` 而不是 `float`

### Unity3D 远程桌面参考项目

https://github.com/hecomi/uDesktopDuplication
https://github.com/hecomi/UnityRemoteDesktopDuplication
