---
title: WebCaster 开发笔记
description: VR 远程桌面，但能用 Web 我就绝不 Native！
---

## 概述

本文记录了开发 [WebCaster](https://github.com/DiscreteTom/WebCaster) 的时候了解到的技术栈

## WebRTC

首先要实现的功能是基于 WebRTC 的投屏，基于浏览器实现桌面共享和查看

之前在给 [Omnitrix](https://discretetom.github.io/Omnitrix/) 添加录屏功能的时候就研究了一下浏览器的 Media API，包括如何[获取摄像头画面](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)和[捕获桌面窗口视频流](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia)，所以只要基于 WebRTC 把流传输给接收端就可以了

WebRTC 是一个功能非常强大但是也很复杂的协议。为了简化开发，我直接使用了 [PeerJS](https://peerjs.com/) 库，使 WebRTC 的开发就像使用 WebSocket 一样简单

不过 PeerJS 也是需要服务端的，它并不仅是一个客户端库。它的[服务端也是开源的](https://github.com/peers/peerjs-server)，可以自行部署。PeerJS 自己也提供了免费的服务端，可以直接用

其他资源：

- [Online SDP parser](https://wrtc.dev/sdp-transform/index.html)
- [Debug WebRTC in Chrome](chrome://webrtc-internals)
- [如何判断 WebRTC Peer IP，以及一些监控字段的讲解](https://testrtc.com/find-webrtc-active-connection/)

## WebXR

### 判断 VR 是否支持 WebXR

不是所有 VR 设备的浏览器都支持 WebXR 功能。可以使用 [WebXR 官网](https://immersiveweb.dev/)里面的[测试案例](https://immersive-web.github.io/webxr-samples/)来检测 VR 设备是否支持 WebXR 或者某个特定的功能

### ThreeJS

有很多方式可以开发 WebXR 产品，基于游戏引擎也可以（比如 Unity3D）

但是我不想项目太重，所以决定直接用常见的浏览器库来实现。这里使用了[ThreeJS](https://threejs.org)，第一次接触这个库，也算是从项目学习了

关于使用 ThreeJS 来调用 WebXR，可以参考[官方的文档](https://threejs.org/docs/#manual/en/introduction/How-to-create-VR-content)和 Immersive Web 的[demo code](https://immersiveweb.dev/#three.js)

### 渲染视频画面

要在 ThreeJS 里面显示 WebRTC 传输的视频画面，主要参考了[这个项目](https://github.com/AidanNelson/threejs-webrtc)，基于 [VideoTexture](https://threejs.org/docs/#api/en/textures/VideoTexture) 来实现

### PC 端的 WebXR 模拟器

在 PC 上是很难对 XR 内容进行 debug 的，毕竟 PC 浏览器没有对 WebXR API 的支持

如果要在 VR 设备上进行调试，为了启用 WebXR，访问的网页必须是 HTTPS 加密的，这也就导致 PC 上面的 dev server 无法被 VR 设备使用

不过，可以安装一个浏览器插件 WebXR Device Emulator 来在 PC 端模拟 XR，并提供 XR API。具体可以参考[此文](https://blog.mozvr.com/webxr-emulator-extension/)

### GamePad API

为了使 XR 内容有交互能力，我们需要能够读取 VR 手柄的输入。

对于手柄上的两个 Trigger，原生浏览器 API 可以参考[此文档](https://developer.mozilla.org/en-US/docs/Web/API/XRInputSourceEvent)。ThreeJS 可以使用如下方法注册事件回调

```js
controller1 = renderer.xr.getController(0);
controller1.addEventListener("selectstart", onSelectStart);
```

而手柄上面的按键和摇杆，需要在手柄连接的时候获取

```js
controller1.addEventListener("connected", (e) => {
  // 保存在user data里面，当然也可以保存在其他地方，比如全局变量
  controller1.userData.gamepad = e.data.gamepad;
});
```

这里的 `GamePad` 是浏览器的 [GamePad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad) 中的对象，相关文档需要查看 GamePad API

其他参考：

- [Reading the controllers’ input](https://beprosto.me/webxr-tutorial/tutorial8.html)
- [WebXR Device API - Input](https://immersive-web.github.io/webxr/input-explainer.html)

## 虚拟显示器

为了实现更加炫酷的效果，我希望在 VR 里面显示现实中不存在的显示器画面。比如现实中我们只有一个显示器，但是在 VR 里面可以看到很多，这样生产力不就上来了

既然我们是通过视频串流显示画面，那我们只需要在 PC 上面创建虚拟显示器，然后把这些显示器的画面也串流到 VR 就行

如何创建虚拟显示器而不需要物理显示器？最简单的方案是买一些显卡欺骗器硬件，让电脑以为外接了显示器

如果不想买，在这个 [GitHub Discussion](https://github.com/pavlobu/deskreen/discussions/86) 里面总结了一些常见的软件虚拟显示器的方案。我使用了[这个链接](https://www.amyuni.com/forum/viewtopic.php?t=3030)里面的虚拟显示器软件，它不是开源的，但是目前来看挺好用的

对于 Windows，其实可以基于 [Windows IDD API](https://docs.microsoft.com/en-us/windows-hardware/drivers/display/indirect-display-driver-model-overview) 手动实现虚拟显示器，也有示例代码，但是我没开发过驱动，也没有找到很好的开箱即用的开源项目，所以就懒得折腾了

> 一个不错的基于 IDD 实现虚拟显示器的开源项目：https://github.com/ge9/IddSampleDriver

## 遗留的问题

### 画面分辨率

视频画面在 ThreeJS 里面渲染的时候清晰度有明显的下降。参考网上的一些说法，修改 VideoTexture 的 minFilter/magFilter 似乎也没用，感觉像是 VR 设备自身分辨率的限制，但是不使用 WebXR 而是直接播放视频又会清晰很多。如果有图形学大神可以解答此问题，欢迎联系我，感激不尽！

### 内网服务器

上文提到，PeerJS 的服务端也是开源的，可以自行部署，但是 WebXR 需要 HTTPS 环境才可以运行，所以目前此项目部署在 GitHub Pages 上（免费的 HTTPS 环境真香），并且使用 PeerJS 自己的服务器 `0.peerjs.com` 作为服务端

但是 WebCaster 的主要使用场景被设计为内网使用，在同一个 WIFI 下，把电脑画面投射到 VR 里（或其他任意浏览器上），理论上不需要公网服务器

但是内网的服务器配置 HTTPS 证书还挺麻烦的，毕竟只有内网 IP 应该拿不到公网签发的证书（无法验证域名和 IP 是否匹配），使用自签发的证书又需要系统信任此证书

### 延迟

虽然 WebRTC 的延迟相比其他协议（如 RTMP）已经比较低，但是毕竟我们是在传输视频流而不是虚拟桌面（虚拟桌面协议针对鼠标移动等操作应该有专门的优化，使操作看起来好一些），而且 PC 还需要进行各种视频编码压缩，VR 端解压，所以即使是同一个 WIFI 下，延迟也有些高，会达到秒级。能操作，但是还是挺不爽的

还是使用有线的方案，延迟最低（就像 VR 的无线投屏延迟很高，但是有线投屏就很低一样）。但是可能无法应用在 Web 端
