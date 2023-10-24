---
title: Kontroller
description: 使用SteamInput读取SteamDeck的输入，包括trackpad
---

## 背景

[前文](https://discretetom.github.io/posts/steam-deck-as-bluetooth-joystick/) 使用 python 成功读取了 SteamDeck 上面的手柄数据（摇杆+手柄按键）。但是 SteamDeck 的触摸板手感巨好，当然要想办法把它的数据给读到

方案：使用 Steam 官方的 SteamInput API，可以通过 Steam 客户端，设置输入映射。在 SteamDeck 上，就可以把触摸板映射为一些输入

所以我们需要一个集成了 Steamworks SDK 的软件。

我不想使用游戏引擎，毕竟我不需要高频渲染画面，但是需要高频读取输入（然后把输入传输出去）。写一个小而美的独立程序，性能应该会更好

## 语言选型

头铁，用 Rust!

[Rust bindings to the Steamworks SDK.](https://github.com/Noxime/steamworks-rs)

## GUI

Steam Input 会把输入和窗口绑定，这就要求我们的程序必须有图形界面，不能是命令行程序

### WebView（失败）

用 WebView 做 GUI 当然最方便。但是经过测试，使用 WebView 的框架似乎并不能用

首先测试的当然是 [Tauri](https://tauri.app/)，但是和 Electron 一样，它的进程模型是：一个核心进程，多个渲染进程。为了实现输入和窗口绑定，我们希望 Steam SDK 跑在渲染进程，研究了一下根据 Tauri 的渲染进程无法被注入自定义的 rust 代码，只能跑 JS。作罢。

然后测试了 [WebView](https://github.com/Boscop/web-view)，它的文档里面没有进程模型，但是测试下来还是不行

所以就放弃 WebView 方案了

### Iced

最终选用的方案是 [Iced](https://github.com/iced-rs/iced)

## Steam Input

调用 Steam Input 的时候有一些坑

首先，最好在初始化 client 之后，调用其他操作之前，周期性调用 `run_callbacks`，以便 Steam SDK 刷新内部的状态。比如，在 `get_connected_controllers` 获取手柄之前，就要先调用 `run_callbacks`，否则获取不到手柄。有时候一次调用还不够，需要多次调用，给 Steam SDK 一些时间去刷新状态。

同理，在调用 `get_action_set_handle` 等获取输入 schema 的函数之前，最好也多 poll 几次。如果 handle 是 0，那就是失败了

## 在 SteamDeck 上使用

> 在 SteamDeck 直接跑 exe 是不行的，系统会问如何打开

iced build 出来的 exe 不能直接在 SteamDeck 上运行（即使作为非 steam 游戏添加到库）

在 windows 交叉编译 Linux 遇到了坑：iced 的依赖 winit 做字符串拼接的时候没考虑到交叉编译的情况（winit 的新版本似乎已经修复，但是 iced 用的老版本）

```
error: couldn't read C:\...\target\x86_64-unknown-linux-musl\release\build\winit-1bb9ae42956c757b\out/fractional_scale_v1.rs: The system cannot find the file specified. (os error 2)
  --> C:\...\.cargo\registry\src\index.crates.io-6f17d22bba15001f\winit-0.28.7\src\platform_impl\linux\wayland\protocols.rs:13:1
   |
13 | include!(concat!(env!("OUT_DIR"), "/fractional_scale_v1.rs"));
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
```

只能在 steam deck 上面编译了。在 steam deck 上面配 rust 环境，vscode remote ssh

> 这次 vscode remote ssh 的体验比之前好很多，执行各种命令都巨快，难道是 SteamDeck 优化的相关功能

注意把 Steam SDK 换成 Linux 平台的 SDK，并放到 path 里面（Linux 下即使是同一文件夹也可能找不到），比如 `/usr/lib`

然后就可以成功执行了！在桌面模式点击就能执行。如果执行不了，或者闪退，开 terminal 执行，看报错信息

把 VDF 文件放到 `/home/deck/.local/share/Steam/controller_config`，比如 `game_actions_480.vdf`。然后执行程序，成功把它添加到库里面（当然是作为 SpaceWar），然后就可以编辑按键映射

至此，就可以成功在桌面模式启动此程序了

## HID

https://learn.microsoft.com/en-us/windows-hardware/drivers/gettingstarted/do-you-need-to-write-a-driver-
