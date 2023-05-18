---
title: HyperDesktopDuplication开发笔记
description: 面向AR眼镜的桌面复制工具
---

## 设计

由于 HyperStudio v1 使用的 uDesktopDuplication 无法运行在独立显卡上，所以 HyperDesktopDuplication 计划使用两个进程来实现：

- 后台进程仍然使用 Windows Desktop Duplication API 来捕获桌面数据，但是使用共享内存来保存桌面数据
- Unity 进程读取共享内存，渲染到 Unity 里面

## rusty-duplication

uDesktopDuplication 使用 C++ 进行开发，但是我已经不想再写 C++ 了。为了安全高效，决定使用 Rust 语言调用 Windows API 重写桌面复制的功能

为了可复用性，我把捕获桌面数据的库单独抽出来，放到了 [rusty-duplication](https://github.com/DiscreteTom/rusty-duplication)，并且 rusty-duplication 也提供了多层 API，以便以后可以在不同的场景下使用

rusty-duplication 主要参考了这几个项目：

- https://github.com/bryal/dxgcap-rs
- https://github.com/hecomi/uDesktopDuplication

但是使用的是 Windows 官方的 [windows](https://github.com/microsoft/windows-rs) 库，这个库之前并没有被广泛使用，但是是官方库，所以还是顶着很多问题使用了这个库，甚至还给提了个 issue（微软修 BUG 速度还挺快）

### Windows Desktop Duplication API

因为自己调用了 Windows Desktop Duplication API，所以这里也写一个总结

要调用 Windows Desktop Duplication API，首先需要创建一个`IDXGIFactory`（一个用来获取 Adapter 的工厂），然后通过`EnumAdapters`获取到`IDXGIAdapter`，然后通过`EnumOutputs`获取到`IDXGIOutput`（因为一个 Adapter 可能有多个 Output），然后通过`DuplicateOutput`获取到`IDXGIOutputDuplication`。需要注意这些流程都是在获取元数据，并没有开始捕获桌面数据，所以没有太大的开销。在 rusty-duplication 中，使用 Manager 来初始化并管理这些对象

当我们确定需要开始复制桌面的时候，首先通过`AcquireNextFrame`获取到`IDXGIResource`，然后通过`QueryInterface`获取到`ID3D11Texture2D`（在 GPU 上）。需要注意：我们需要把这个 texture2D 复制一份，然后把原本的 texture2D 释放调，以免影响操作系统正常渲染画面。所以要先调用`CreateTexture2D`创建一个可读的 texture，然后通过`CopyResource`复制这个 GPU 资源。这个 Texture2D 可以被缓存，以避免重复创建/删除。

最后，可以通过`ID3D11Texture2D`的`Map`方法获取到桌面数据，保存在我们想保存的位置（比如共享内存）

需要注意：这样捕获的画面是不包含鼠标的，所以鼠标需要额外捕获，然后渲染到画面上。在 Unity3D 里面，可以分别渲染鼠标和桌面，这样如果只有鼠标移动了，就不用刷新整个桌面了

## shremdup

有了基础库 rusty-duplication 之后，我们需要一个可执行程序来捕获桌面数据，并且把桌面数据保存到共享内存中，并且使用 RPC/IPC 和外界交互。这个程序就是 shremdup (shared-memory desktop-duplication)

一开始，shremdup 使用 HTTP 实现 RPC，但是希望有更好的性能，所以后来改成了 gRPC

shremdup 主要解决的问题是：把 API 通过 gRPC 的方式暴露出去，并且保证不会有多个请求互相干扰。为了实现这个目标，shremdup 使用了一个锁，这个锁在每次请求开始的时候被锁住，请求结束的时候被释放。这样就可以保证不会有多个请求同时进行。并且，为了实现不同的线程都可以访问 rusty-duplication 的 `Manager`，使用了 rust 中的 channel 机制来实现跨进程传输。以下是一段核心示例代码：

```rs
async fn list_displays(
  &self,
  _request: Request<ListDisplaysRequest>,
) -> Result<Response<ListDisplaysReply>, Status> {
  let _ = self.mutex.lock().await;
  let (tx, rx) = oneshot::channel();
  if let Err(err) = self.sender.send((HddRequest::ListDisplays, tx)).await {
    return Err(Status::internal(err.to_string()));
  }
  match rx.await {
    Err(_) => Err(Status::internal("failed to receive reply")),
    Ok(HddReply::ListDisplays(Ok(displays))) => {
      Ok(Response::new(ListDisplaysReply { infos: displays }))
    }
    Ok(HddReply::ListDisplays(Err(err))) => Err(Status::internal(err.to_string())),
    Ok(_) => Err(Status::internal("invalid reply")),
  }
}
```

## frontend

最后，我们只需要在 Unity3D 里面实现两个功能：

1. 通过 gRPC 调用 shremdup
2. 通过共享内存访问桌面数据并渲染

### gRPC in Unity

万万没想到，给 Unity3D 配置 gRPC 特别麻烦。早期 gRPC 有一个 unity 插件，但是现在已经不维护了，而且也不支持.net core。所以我们只能自己动手了

1. 安装 Unity3D 插件：https://github.com/GlitchEnzo/NuGetForUnity ，这个插件让我们可以在 Unity3D 里面使用 NuGet
   1. 当然，也可以不用这个插件，直接在命令行里面用 NuGet 下载依赖，然后把依赖放到 Unity3D 项目里面
2. 通过 NuGet，安装：`Google.protobuf`和`Grpc`.
3. 通过 NuGet 安装的`Grpc`缺少一个`grpc_csharp_ext.dll`文件，我们需要手动从[这里](https://www.nuget.org/packages/Grpc.Core)下载 Grpc 的包，然后把里面的`runtimes`文件夹里面的`grpc_csharp_ext.x64.dll`放到 Assets/Plugins/x64 里面，并重命名为`grpc_csharp_ext.dll`。然后在 Unity3D 里面把这个文件设置为`Load on startup`，这样就可以在 Unity3D 里面使用 gRPC 了
   1. 如果你的 PC 不是 x64，请使用对应的版本
4. 访问 https://packages.grpc.io/ ，在最新的 build 里面，下载 gRPC protoc Plugins
5. 执行 `protoc --csharp_out=. --grpc_out=. --plugin=protoc-gen-grpc="xxx\grpc_csharp_plugin.exe" xxx.proto`就可以生成 C# 代码了
6. 最后，把生成的 C# 代码放到 Unity3D 项目里面，就可以使用 gRPC 了

### 共享内存

如果是跨进程访问共享内存，需要共享内存的名字以`Global\`开头，并且要有管理员权限，否则只能在同一个进程里面访问

另外，如果使用`DllImport`调用 Windows API，那么`GetLastError`的返回值可能是不正确的。C# 调用 Win API 需要用`[DllImport("xxx.dll", SetLastError = true)]`启用`SetLastError`，然后使用`Marshal.GetLastWin32Error()`获取错误码。直接调用 Windows 的`GetLastError()`会返回`0`或其他不确定的值。参考[windows 官方文档](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.dllimportattribute.setlasterror?view=net-7.0)
