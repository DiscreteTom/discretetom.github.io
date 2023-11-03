---
title: 把Steam Deck变成PC的蓝牙手柄
description: 然而并没有使用 HID，非常遗憾
---

## 前言

过年回家，只带了 Steam Deck 和 PC，忘了带手柄。既然 Steam Deck 有手柄硬件，还有 Desktop Mode，写个脚本让它变成蓝牙手柄岂不美哉

## 在桌面模式捕获手柄输入

> 参考[此文](https://github.com/ValveSoftware/steam-for-linux/issues/8904)

默认情况下，桌面模式的 steam deck 手柄会控制鼠标操作，而不是作为手柄。可以通过长按右侧 X 键上面的【暂停键/三道杠】进行切换

切换之后，就可以使用[python 的 pyjoystick 库](https://github.com/justengel/pyjoystick)捕获手柄输入了

## 模拟蓝牙手柄

### 方案 1：HID（失败）

只要能够为 steam deck 实现蓝牙 HID (Human Interface Device)，就可以直接连接 PC，PC 上面就不用安装额外的软件/驱动，是最理想的方案

然而，经过很长时间的调研和测试，蓝牙 HID 的端口和 UUID 在 steam deck 上都已经被注册

因为 steam deck 可以被电脑连接，作为蓝牙音箱，所以可能是此功能占用了 HID 的 UUID 和端口。而我研究了很久也没办法禁用这个功能，所以可能暂时无法在 steam deck 上实现 HID

> 不知道这个蓝牙音箱功能是在硬件层面实现的，还是操作系统层面。如果是操作系统层面，未来可以考虑重装系统（双系统），用其他的 linux，试试能不能实现 HID

另外，关于 HID 的资料可真难找啊，和互联网软件开发是完全不同的体验。以下是一些有用的链接或可参考的项目，先记下来，万一以后想复活 HID 方案呢

- [蓝牙 HID 键盘](https://github.com/taoso/btk)
- [树莓派作为蓝牙 HID 键鼠](https://gist.github.com/scientificRat/be2bbac0769bfa04820bc73edc009bdf)
- [使用树莓派 GPIO 实现蓝牙手柄](https://github.com/Heerkog/HIDpi)
- [蓝牙 HID 手柄（但是代码已过时）](https://github.com/007durgesh219/BTGamepad)
- [树莓派 Zero W 作为蓝牙手柄](https://github.com/GamesCreatorsClub/GCC-Joystick)
- [基于 BLE 实现 HID](https://github.com/jpbrucker/BLE_HID)
- [HID OVER GATT PROFILE SPECIFICATION](https://www.bluetooth.org/docman/handlers/downloaddoc.ashx?doc_id=245141)
- [Human Interface Devices (HID) Specifications and Tools](https://www.usb.org/hid)
- [微软的 HID 工具，用来生成 descriptor](https://github.com/microsoft/hidtools)
- [BlueZ 官方文档](https://git.kernel.org/pub/scm/bluetooth/bluez.git/tree/doc)
- [BlueZ 的 Profile API 文档](https://git.kernel.org/pub/scm/bluetooth/bluez.git/tree/doc/profile-api.txt)
- [蓝牙 HID Profile](https://www.bluetooth.com/specifications/specs/human-interface-device-profile-1-1-1/)
- [Windows 自带哪些驱动](https://learn.microsoft.com/en-us/windows-hardware/drivers/gettingstarted/do-you-need-to-write-a-driver-)

### 方案 2：蓝牙 Socket

既然不能使用 HID，那就自己实现一个协议吧。需要在 PC 和 Steam Deck 上都启动程序才行，Steam Deck 上发送手柄数据，PC 上接受手柄数据，并操作虚拟手柄

- Steam Deck 上获取手柄输入，上文已经提到，可以使用 pyjoystick 库
- PC 上虚拟手柄，使用了 [vgamepad](https://pypi.org/project/vgamepad/) 库，安装的时候会安装一个驱动
- 蓝牙协议栈：Steam Deck 和 PC 都使用了 pybluez 进行蓝牙操作
  - 不论是 PC 还是 Steam Deck，都要 **_源码安装_** pybluez，不要`pip install pybluez`
    - 先 `git clone git@github.com:pybluez/pybluez.git` 再 `python setup.py install`
  - Win 11 也可以使用 pybluez，需要安装 Windows C++ SDK，跟着 pybluez 的提示安装即可
  - Steam Deck 上面会缺少很多 C 语言头文件或库，谷歌搜索 `arch linux xxx.h` 就能知道哪个包有这个文件，然后`sudo pacman -S xxx`安装包就行了。有的包需要重新安装才能有头文件，比如`Python.h`就需要重新安装 python
    - 也可以直接用 pacman 查。先`pacman -Fy`更新数据库，然后`pacman -F Python.h`就可以查询

还有以下注意事项：

- [Windows 操作系统不支持蓝牙的 L2CAP 协议，只有 RFCOMM 协议](https://github.com/pybluez/pybluez/issues/418)
- 需要启用蓝牙发现，才可以连上（比如 bluetoothctl discoverable on）
- Joystick 的 Y 轴的值是反向的

实现虚拟手柄之后，可以使用 Windows 系统中的 [`joy.cpl`](https://support.microsoft.com/en-us/topic/how-to-troubleshoot-game-controllers-in-microsoft-games-ee731224-b2d7-f25e-3c2a-338b27dbe1f5) 工具进行调试

最终成品可以在这个 [repo](https://github.com/DiscreteTom/stickdeck) 找到
