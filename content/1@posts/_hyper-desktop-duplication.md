## Refs

Unity Native Plugin
https://docs.unity3d.com/Manual/NativePlugins.html

UnityNativeRenderPlugin
https://github.com/Unity-Technologies/NativeRenderingPlugin

使用 Rust 开发 UnityNativePlugin
https://github.com/keijiro/UnityRustPlugin

Win API
https://docs.rs/winapi/
https://github.com/microsoft/windows-rs
https://crates.io/crates/windows

Win IPC
MSMQ?

Rust Windows Desktop Duplication API
https://github.com/bryal/dxgcap-rs

Rust，调用 Windows API，拿到内存地址，通过 IPC 告诉 UnityPlugin，然后交给 Unity 渲染

C#调用 Win API 需要用`[DllImport("Kernel32.dll", CharSet = CharSet.Auto, SetLastError = true)]`启用`SetLastError`，然后使用`Marshal.GetLastWin32Error()`获取错误码。直接调用 Windows 的`GetLastError()`会返回`0`或其他不确定的值
https://learn.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.dllimportattribute.setlasterror?view=net-7.0

检查共享内存是否被成功创建：https://learn.microsoft.com/en-us/sysinternals/downloads/accesschk
https://stackoverflow.com/questions/465378/program-to-view-shared-memory-in-windows
`accesschk.exe -osv > objects.txt`

https://github.com/GlitchEnzo/NuGetForUnity
https://github.com/grpc/grpc-dotnet

protoc --csharp_out=cs hdd.proto

https://github.com/rodellison/Unity-Basic-GRPC
https://packages.grpc.io/
protoc --csharp_out=. --grpc_out=. --plugin=protoc-gen-grpc="..\grpc_csharp_plugin.exe" hdd.proto
https://chromium.googlesource.com/external/github.com/grpc/grpc/+/refs/tags/v1.18.0/src/csharp/experimental/

安装 Google.protobuf 和 grpc 的包

https://www.nuget.org/packages/Grpc.Core
下载后，runtime 里面的 grpc_csharp_ext.x64.dll 需要放到 unity Assets/Plugins/x64 里面,rename to grpc_csharp_ext.dll, enable load on startup

if disable 'load on startup', got stuck?
