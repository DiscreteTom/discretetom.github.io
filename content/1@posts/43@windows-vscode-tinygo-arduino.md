---
title: 在 Windows 环境下使用 VSCode 和 Go 语言开发 Arduino
description: Go语言可比C/C++写起来爽多了
---

## 准备工具

**以下代码使用 Windows Powershell 执行**

### 安装 Scoop

```powershell
# PowerShell must be allowed to execute local scripts for your user account
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
# install scoop from a script
iwr -useb get.scoop.sh | iex
```

### 安装 golang

```powershell
scoop install go
```

### 安装 TinyGo

```powershell
scoop install tinygo
```

### 安装 AVR 相关工具

因为 Arduino Nano 的处理器是 AVR 架构，所以需要安装 AVR 相关工具

```powershell
scoop install avr-gcc
scoop install avrdude
```

## 配置 VSCode

1. 安装 VSCode 的 Go 语言插件和 TinyGo 插件，重启 VSCode
2. 打开 Go 语言的项目，在底部选择编译目标（比如`TinyGo: arduino-nano`），然后重启 VSCode

配置完毕后，可以获得`machine`库的代码提示

## 点灯

### 代码

官方示例代码

```go
package main

import (
	"machine"
	"time"
)

func main() {
	led := machine.LED
	led.Configure(machine.PinConfig{Mode: machine.PinOutput})
	for {
		led.Low()
		time.Sleep(time.Millisecond * 500)

		led.High()
		time.Sleep(time.Millisecond * 500)
	}
}
```

### 烧程序

以 Arduino Nano 为例

```
tinygo flash -target=arduino-nano
```

## Refs

- [Scoop](https://github.com/ScoopInstaller/Scoop)
- [Windows | TinyGo](https://tinygo.org/getting-started/install/windows/)
- [VSCode | TinyGo](https://tinygo.org/docs/guides/ide-integration/vscode/)
- [Blinking LED | TinyGo](https://tinygo.org/docs/tutorials/blinky/)
- [Arduino Nano | TinyGo](https://tinygo.org/docs/reference/microcontrollers/arduino-nano/)
