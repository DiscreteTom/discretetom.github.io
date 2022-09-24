(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{1282:function(t,e){const n={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"why"}},[t._v("Why")]),t._v(" "),n("p",[t._v("把树莓派带到新的场景之后通常需要重新配置网络，而我不喜欢给树莓派装 GUI 和显示器，通常都是用 SSH 连接，就很难配网")]),t._v(" "),n("p",[t._v("目标是使用蓝牙可以连接树莓派，并给树莓派配网")]),t._v(" "),n("h2",{attrs:{id:"前置知识"}},[t._v("前置知识")]),t._v(" "),n("h3",{attrs:{id:"蓝牙"}},[t._v("蓝牙")]),t._v(" "),n("ul",[n("li",[t._v("工作流程\n"),n("ul",[n("li",[t._v("广播/扫描")]),t._v(" "),n("li",[t._v("连接/接受连接")]),t._v(" "),n("li",[t._v("通信")])])]),t._v(" "),n("li",[t._v("分类\n"),n("ul",[n("li",[t._v("经典蓝牙\n"),n("ul",[n("li",[t._v("使用串行仿真协议 RFCOMM")])])]),t._v(" "),n("li",[t._v("低功耗蓝牙(BLE: Bluetooth Low Energy)\n"),n("ul",[n("li",[t._v("把通信双方设置为非对称的双方")]),t._v(" "),n("li",[t._v("比如手机蓝牙连手环，把主要的通信负担放在手机，降低手环负载")]),t._v(" "),n("li",[t._v("发起广播的设备称为外设(Peripheral)，扫描设备称为中心设备(Central)")]),t._v(" "),n("li",[t._v("使用 ATT 或 GATT 协议。ATT 是 GATT 的基础")]),t._v(" "),n("li",[t._v("建立连接之后，ATT 会把通信双方划分为 client/server\n"),n("ul",[n("li",[t._v("注意 client/server 与 Peripheral/Central 没有绝对的对应关系")])])]),t._v(" "),n("li",[t._v("ATT 协议以【属性/attribute】作为单位通信\n"),n("ul",[n("li",[t._v("属性的内容\n"),n("ul",[n("li",[t._v("handle: 属性的唯一编号，16 bit")]),t._v(" "),n("li",[t._v("type: 属性的类型，UUID")]),t._v(" "),n("li",[t._v("value: 属性的值")]),t._v(" "),n("li",[t._v("permission: 属性的权限，无/可读/可写/可读写")])])])])]),t._v(" "),n("li",[t._v("可以把服务器视为一个数据库。客户端对服务器进行读写\n"),n("ul",[n("li",[t._v("比如手机读手环的运动数据，向手环写时间信息")]),t._v(" "),n("li",[t._v("ATT 还提供了 notification 功能，客户端可以订阅服务器的值的变化")])])]),t._v(" "),n("li",[t._v("GATT 对 ATT 的属性进行整理，对外暴露 Characteristic 和 Service。客户端可以查询服务器的 Characteristic 和 Service")])])])])])]),t._v(" "),n("p",[t._v("更多信息看这个："),n("a",{attrs:{href:"https://learn.adafruit.com/introduction-to-bluetooth-low-energy/gatt"}},[t._v("Introduction to Bluetooth Low Energy")])]),t._v(" "),n("h3",{attrs:{id:"调研时了解到的工具"}},[t._v("调研时了解到的工具")]),t._v(" "),n("ul",[n("li",[t._v("BlueZ\n"),n("ul",[n("li",[t._v("Linux 官方的蓝牙协议栈")]),t._v(" "),n("li",[t._v("Raspbian 内置，建议版本不低于 5.43\n"),n("ul",[n("li",[t._v("使用"),n("code",{pre:!0},[t._v("bluetoothd -v")]),t._v("查看版本")])])]),t._v(" "),n("li",[t._v("可以使用"),n("code",{pre:!0},[t._v("systemctl")]),t._v("进行服务的管理。服务名为"),n("code",{pre:!0},[t._v("bluetooth")])])])]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("bluetoothctl")]),t._v("命令行工具，会开启一个新的 shell\n"),n("ul",[n("li",[n("code",{pre:!0},[t._v("list")]),t._v("查看树莓派上所有可用的蓝牙模块")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("scan on")]),t._v("开启扫描")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("devices")]),t._v("查看扫描到的设备的 MAC 地址和名称")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("help")]),t._v("查看帮助")])])]),t._v(" "),n("li",[t._v("NodeJS 下的"),n("a",{attrs:{href:"https://github.com/noble/bleno"}},[t._v("bleno")]),t._v("库，可以简单实现 BLE 外设")]),t._v(" "),n("li",[t._v("NodeJS 下的"),n("a",{attrs:{href:"https://github.com/sandeepmistry/noble"}},[t._v("noble")]),t._v("库，可以简单实现 BLE 中心设备")]),t._v(" "),n("li",[t._v("Golang 生态中的 tinygo 提供了 "),n("a",{attrs:{href:"https://github.com/tinygo-org/bluetooth"}},[t._v("bluetooth")]),t._v(" 库")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API"}},[t._v("Web Bluetooth API")])])]),t._v(" "),n("h2",{attrs:{id:"服务端"}},[t._v("服务端")]),t._v(" "),n("p",[t._v("Tinygo 的 "),n("a",{attrs:{href:"https://github.com/tinygo-org/bluetooth"}},[t._v("bluetooth")]),t._v(" 库使用起来比较方便，例子也比较清晰。此处略过")]),t._v(" "),n("p",[t._v("但是有一个问题，这个库不能设置 read 事件的回调，导致我不能在接收到 read 事件之后更新数据，而是要持续更新数据")]),t._v(" "),n("p",[t._v("这当然是不现实的。所以我"),n("a",{attrs:{href:"https://github.com/DiscreteTom/bluetooth"}},[t._v("魔改了一下这个库")]),t._v("，提了一个 "),n("a",{attrs:{href:"https://github.com/tinygo-org/bluetooth/issues/94"}},[t._v("issue")]),t._v(" 和一个 "),n("a",{attrs:{href:"https://github.com/tinygo-org/bluetooth/pull/95"}},[t._v("PR")]),t._v("。目前先用我魔改过的库是可以实现事件驱动查询信息了。")]),t._v(" "),n("p",[t._v("最终成果："),n("a",{attrs:{href:"https://github.com/DiscreteTom/ble-raspi-manager"}},[t._v("ble-raspi-manager")])]),t._v(" "),n("h2",{attrs:{id:"基于-web-实现跨平台客户端"}},[t._v("基于 Web 实现跨平台客户端")]),t._v(" "),n("p",[t._v("既然 Web 端都能调用蓝牙 API 了，那就直接用 PWA 实现跨平台了")]),t._v(" "),n("p",[t._v("核心 API 如下：")]),t._v(" "),n("pre",{staticClass:"language-js"},[n("code",{pre:!0,attrs:{class:"language-js"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 扫描设备")]),t._v("\ndevice "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token dom variable"}},[t._v("navigator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("bluetooth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("requestDevice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接受所有设备")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("acceptAllDevices")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 也可以指定设备前缀")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// filters: [{ namePrefix: 'xxx' }],")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将要使用的service UUID")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("optionalServices")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"f846752b-af47-43ed-bdf0-fba82da6fd58"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 连接到设备")]),t._v("\nserver "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" device"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("gatt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("connect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据service的UUID获取服务")]),t._v("\nservice "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("getPrimaryService")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"f846752b-af47-43ed-bdf0-fba82da6fd58"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据characteristic UUID获取特征")]),t._v("\nchar "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("getCharacteristic")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e94f5099-db86-4b29-a4ce-08033fda1a7d"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读写特征，byte array")]),t._v("\nvalue "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" char"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("readValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" char"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("writeValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Uint8Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("p",[t._v("前端目前部署到了 "),n("a",{attrs:{href:"https://discretetom.github.io/Omnitrix/ble-raspi-manager"}},[t._v("Omnitrix")])]),t._v(" "),n("h2",{attrs:{id:"ref"}},[t._v("Ref")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.cnblogs.com/vamei/p/6753531.html"}},[t._v("用树莓派玩转蓝牙")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://blog.csdn.net/eyeofangel/article/details/87890418"}},[t._v("通过 Web 控制蓝牙设备：WebBluetooth 入门")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://learn.adafruit.com/introduction-to-bluetooth-low-energy/introduction"}},[t._v("Introduction to Bluetooth Low Energy")])])])])}]};t.exports={attributes:{title:"基于浏览器使用蓝牙管理树莓派",description:"比如：配置wifi"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);