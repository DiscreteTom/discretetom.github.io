---
title: 基于浏览器使用蓝牙管理树莓派
description: 比如：配置wifi
---

## Why

把树莓派带到新的场景之后通常需要重新配置网络，而我不喜欢给树莓派装 GUI 和显示器，通常都是用 SSH 连接，就很难配网

目标是使用蓝牙可以连接树莓派，并给树莓派配网

## 前置知识

### 蓝牙

- 工作流程
  - 广播/扫描
  - 连接/接受连接
  - 通信
- 分类
  - 经典蓝牙
    - 使用串行仿真协议 RFCOMM
  - 低功耗蓝牙(BLE: Bluetooth Low Energy)
    - 把通信双方设置为非对称的双方
    - 比如手机蓝牙连手环，把主要的通信负担放在手机，降低手环负载
    - 发起广播的设备称为外设(Peripheral)，扫描设备称为中心设备(Central)
    - 使用 ATT 或 GATT 协议。ATT 是 GATT 的基础
    - 建立连接之后，ATT 会把通信双方划分为 client/server
      - 注意 client/server 与 Peripheral/Central 没有绝对的对应关系
    - ATT 协议以【属性/attribute】作为单位通信
      - 属性的内容
        - handle: 属性的唯一编号，16 bit
        - type: 属性的类型，UUID
        - value: 属性的值
        - permission: 属性的权限，无/可读/可写/可读写
    - 可以把服务器视为一个数据库。客户端对服务器进行读写
      - 比如手机读手环的运动数据，向手环写时间信息
      - ATT 还提供了 notification 功能，客户端可以订阅服务器的值的变化
    - GATT 对 ATT 的属性进行整理，对外暴露 Characteristic 和 Service。客户端可以查询服务器的 Characteristic 和 Service

更多信息看这个：[Introduction to Bluetooth Low Energy](https://learn.adafruit.com/introduction-to-bluetooth-low-energy/gatt)

### 调研时了解到的工具

- BlueZ
  - Linux 官方的蓝牙协议栈
  - Raspbian 内置，建议版本不低于 5.43
    - 使用`bluetoothd -v`查看版本
  - 可以使用`systemctl`进行服务的管理。服务名为`bluetooth`
- `bluetoothctl`命令行工具，会开启一个新的 shell
  - `list`查看树莓派上所有可用的蓝牙模块
  - `scan on`开启扫描
  - `devices`查看扫描到的设备的 MAC 地址和名称
  - `help`查看帮助
- NodeJS 下的[bleno](https://github.com/noble/bleno)库，可以简单实现 BLE 外设
- NodeJS 下的[noble](https://github.com/sandeepmistry/noble)库，可以简单实现 BLE 中心设备
- Golang 生态中的 tinygo 提供了 [bluetooth](https://github.com/tinygo-org/bluetooth) 库
- [Web Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)

## 服务端

Tinygo 的 [bluetooth](https://github.com/tinygo-org/bluetooth) 库使用起来比较方便，例子也比较清晰。此处略过

但是有一个问题，这个库不能设置 read 事件的回调，导致我不能在接收到 read 事件之后更新数据，而是要持续更新数据

这当然是不现实的。所以我[魔改了一下这个库](https://github.com/DiscreteTom/bluetooth)，提了一个 [issue](https://github.com/tinygo-org/bluetooth/issues/94) 和一个 [PR](https://github.com/tinygo-org/bluetooth/pull/95)。目前先用我魔改过的库是可以实现事件驱动查询信息了。

最终成果：[ble-raspi-manager](https://github.com/DiscreteTom/ble-raspi-manager)

## 基于 Web 实现跨平台客户端

既然 Web 端都能调用蓝牙 API 了，那就直接用 PWA 实现跨平台了

核心 API 如下：

```js
// 扫描设备
device = await navigator.bluetooth.requestDevice({
  // 接受所有设备
  acceptAllDevices: true,
  // 也可以指定设备前缀
  // filters: [{ namePrefix: 'xxx' }],

  // 将要使用的service UUID
  optionalServices: ["f846752b-af47-43ed-bdf0-fba82da6fd58"],
});

// 连接到设备
server = await device.gatt.connect();

// 根据service的UUID获取服务
service = await server.getPrimaryService(
  "f846752b-af47-43ed-bdf0-fba82da6fd58"
);

// 根据characteristic UUID获取特征
char = await service.getCharacteristic("e94f5099-db86-4b29-a4ce-08033fda1a7d");

// 读写特征，byte array
value = await char.readValue();
await char.writeValue(new Uint8Array([0, 1, 2, 3, 4]));
```

前端目前部署到了 [Omnitrix](https://discretetom.github.io/Omnitrix/ble-raspi-manager)

## Ref

- [用树莓派玩转蓝牙](https://www.cnblogs.com/vamei/p/6753531.html)
- [通过 Web 控制蓝牙设备：WebBluetooth 入门](https://blog.csdn.net/eyeofangel/article/details/87890418)
- [Introduction to Bluetooth Low Energy](https://learn.adafruit.com/introduction-to-bluetooth-low-energy/introduction)
