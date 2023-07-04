(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{1360:function(t,e){const n={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"捕获-windows-桌面"}},[t._v("捕获 Windows 桌面")]),t._v(" "),n("p",[t._v("https://learn.microsoft.com/en-us/windows/win32/direct3ddxgi/desktop-dup-api")]),t._v(" "),n("p",[t._v("https://www.cnblogs.com/strive-sun/p/14549569.html")]),t._v(" "),n("p",[t._v("https://longxuan.ren/2020/05/26/Windows-ScreenCapture/#DXGI")]),t._v(" "),n("p",[t._v("https://github.com/SerpentAI/D3DShot")]),t._v(" "),n("p",[t._v("https://github.com/ra1nty/DXcam")]),t._v(" "),n("h2",{attrs:{id:"传输给-vr"}},[t._v("传输给 VR")]),t._v(" "),n("h3",{attrs:{id:"基于网络"}},[t._v("基于网络")]),t._v(" "),n("ul",[n("li",[t._v("直接传输视频\n"),n("ul",[n("li",[t._v("RTMP？延迟较高，但是可以直接用 OBS 等工具推流\n"),n("ul",[n("li",[t._v("https://cloud.tencent.com/developer/article/1592731")]),t._v(" "),n("li",[t._v("https://www.gero.pub/2017/10/26/how-to-use-ijkplayer-in-unity/")]),t._v(" "),n("li",[t._v("https://code.videolan.org/videolan/vlc-unity/")])])]),t._v(" "),n("li",[t._v("SRT\n"),n("ul",[n("li",[t._v("https://obsproject.com/wiki/Streaming-With-SRT-Or-RIST-Protocols")])])])])]),t._v(" "),n("li",[t._v("捕获桌面图像后，传输增量信息\n"),n("ul",[n("li",[t._v("可能需要快速的压缩/解压，比如 Snappy。尝试了 zlib，压缩比较慢，最快的模式压缩 2400x1600 的显示画面，可能需要 30ms")])])])]),t._v(" "),n("h3",{attrs:{id:"基于-usb-数据线"}},[t._v("基于 USB 数据线")]),t._v(" "),n("p",[t._v("数据线连接 Android 设备、PC，然后使用 adb 实现端口转发")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把PC的 54321 转发到VR的 12345")]),t._v("\nadb forward tcp:54321 tcp: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),t._v("\n")])]),t._v(" "),n("p",[t._v("https://blog.csdn.net/servermanage/article/details/102846692")]),t._v(" "),n("p",[t._v("似乎不支持转发 UDP")]),t._v(" "),n("h2",{attrs:{id:"vr-端渲染"}},[t._v("VR 端渲染")]),t._v(" "),n("p",[t._v("作为实用的远程桌面，需要有透视功能，所以不用 WebXR，使用原生 SDK，基于 Unity3D 开发")]),t._v(" "),n("h3",{attrs:{id:"unity3d-渲染基于字节的图片"}},[t._v("Unity3D 渲染基于字节的图片")]),t._v(" "),n("p",[t._v("https://stackoverflow.com/questions/40482700/convert-a-bitmap-to-a-texture2d-in-unity")]),t._v(" "),n("p",[t._v("https://docs.unity3d.com/ScriptReference/Texture2D.GetRawTextureData.html\nhttps://docs.unity3d.com/ScriptReference/Texture2D.SetPixels.html\nhttps://docs.unity3d.com/ScriptReference/Texture2D.GetPixels.html\nhttps://docs.unity3d.com/ScriptReference/Graphics.CopyTexture.html")]),t._v(" "),n("p",[t._v("需要注意：使用 Windows Desktop Duplication API 得到的图像数据是 B8G8R8A8，也就是 BGRA 而不是 RGBA，创建 Texture2D 的时候需要创建正确，否则画面会变蓝")]),t._v(" "),n("h3",{attrs:{id:"unity3d-性能测试"}},[t._v("Unity3D 性能测试")]),t._v(" "),n("pre",{staticClass:"language-cs"},[n("code",{pre:!0,attrs:{class:"language-cs"}},[t._v("Profiler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("BeginSample")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nProfiler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("EndSample")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("h3",{attrs:{id:"color32-to-optimize-performance"}},[t._v("Color32 to optimize performance")]),t._v(" "),n("p",[t._v("直接应用 "),n("code",{pre:!0},[t._v("Color32")]),t._v(" 会比 "),n("code",{pre:!0},[t._v("Color")]),t._v(" 要快很多，而且可以直接接受 "),n("code",{pre:!0},[t._v("byte")]),t._v(" 而不是 "),n("code",{pre:!0},[t._v("float")])]),t._v(" "),n("h3",{attrs:{id:"unity3d-远程桌面参考项目"}},[t._v("Unity3D 远程桌面参考项目")]),t._v(" "),n("p",[t._v("https://github.com/hecomi/uDesktopDuplication\nhttps://github.com/hecomi/UnityRemoteDesktopDuplication")])])}]};t.exports={attributes:{title:"VR 远程桌面开发笔记",description:"试图搞一个实用的开源VR远程桌面"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);