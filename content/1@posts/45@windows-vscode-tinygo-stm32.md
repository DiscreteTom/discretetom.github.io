---
title: 在 Windows 环境下使用 VSCode 和 Go 语言开发 STM32
description: STM32和Arduino相比，要配置的东西多一些
---

## 准备工具

- 安装 Go 语言编译器、TinyGo 编译器、配置 VSCode：参考[此文](https://discretetom.github.io/posts/windows-vscode-tinygo-arduino/)
- 买一个[STLink v2](https://www.st.com/en/development-tools/st-link-v2.html)
  - 需要安装驱动，安装完毕后连接 STLink 和电脑，LED 应该常亮
- 安装 [MSYS2](https://www.msys2.org/)，然后安装 [OpenOCD](https://openocd.org/pages/getting-openocd.html)
  - 需要执行两次`pacman -Syu`

## 点灯

### 代码

我的开发板是 STM32F103 ，对应 TinyGo 里面的 [bluepill](https://tinygo.org/docs/reference/microcontrollers/bluepill/)

根据[开发板的文档](https://doc.embedfire.com/mcu/stm32/f103zhinanzhe/std/zh/latest/book/LED_register.html)，开发板上有一个 RGB LED
RGB 对应的引脚分别是 PB5 PB0 PB1

```go
package main

import (
	"machine"
	"time"
)

func main() {
	red := machine.PB5
	green := machine.PB0
	blue := machine.PB1
	red.Configure(machine.PinConfig{Mode: machine.PinOutput})
	green.Configure(machine.PinConfig{Mode: machine.PinOutput})
	blue.Configure(machine.PinConfig{Mode: machine.PinOutput})

	red.High()
	blue.High()
	green.High()
	for {
		green.High()
		red.Low()
		time.Sleep(time.Millisecond * 500)

		red.High()
		blue.Low()
		time.Sleep(time.Millisecond * 500)

		blue.High()
		green.Low()
		time.Sleep(time.Millisecond * 500)
	}
}
```

### 烧程序

```
tinygo flash -target=bluepill
```
