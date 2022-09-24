(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1164:function(v,_){const l={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("div",{staticClass:"frontmatter-markdown"},[l("h2",{attrs:{id:"前言"}},[v._v("前言")]),v._v(" "),l("p",[v._v("本文是"),l("a",{attrs:{href:"https://www.bilibili.com/video/BV1Mb411e7re"}},[v._v("此视频")]),v._v("的笔记")]),v._v(" "),l("h2",{attrs:{id:"简介"}},[v._v("简介")]),v._v(" "),l("ul",[l("li",[v._v("51 单片机系列之所以叫 51 单片机，是因为指令集兼容 intel 8051 指令集")]),v._v(" "),l("li",[v._v("8 位处理器")]),v._v(" "),l("li",[v._v("自身的 ROM 只能存储程序。如果要保存数据掉电不丢失，需要额外的芯片")])]),v._v(" "),l("h2",{attrs:{id:"最小系统"}},[v._v("最小系统")]),v._v(" "),l("p",[v._v("单片机只能实现运算和 IO，所以还需要其他芯片和模块，才能组成一个最简单的计算机")]),v._v(" "),l("p",[v._v("以下组件是必备的：")]),v._v(" "),l("ul",[l("li",[v._v("电源\n"),l("ul",[l("li",[v._v("滤波电容，用来稳定电源供给")])])]),v._v(" "),l("li",[v._v("时钟\n"),l("ul",[l("li",[v._v("晶振\n"),l("ul",[l("li",[v._v("有些单片机可能内置晶振")])])])])]),v._v(" "),l("li",[v._v("复位\n"),l("ul",[l("li",[v._v("比如一个按钮")]),v._v(" "),l("li",[v._v("或者用电容+电阻实现上电复位")]),v._v(" "),l("li",[v._v("用来使程序重新从第一行开始运行")])])])]),v._v(" "),l("p",[v._v("通常进行开发的时候会使用开发板")]),v._v(" "),l("h2",{attrs:{id:"单片机命名举例"}},[v._v("单片机命名举例")]),v._v(" "),l("p",[v._v("以 STC89C52 35I-DIP40 为例")]),v._v(" "),l("ul",[l("li",[v._v("STC - 公司名")]),v._v(" "),l("li",[v._v("89 - 系列名")]),v._v(" "),l("li",[v._v("C - 工作电压\n"),l("ul",[l("li",[v._v("C 表示 3.8-5.5V")]),v._v(" "),l("li",[v._v("LE 表示 2.4-3.4/3.6V")])])]),v._v(" "),l("li",[v._v("52 - RAM/ROM 的大小\n"),l("ul",[l("li",[v._v("52 表示 512B RAM + 8KB ROM")])])]),v._v(" "),l("li",[v._v("35 - 工作频率\n"),l("ul",[l("li",[v._v("35 表示最高 35MHz")])])]),v._v(" "),l("li",[v._v("I - 工作温度\n"),l("ul",[l("li",[v._v("I 表示工业级，-40 - 85°C")]),v._v(" "),l("li",[v._v("C 表示商业级，0 - 70°C")])])]),v._v(" "),l("li",[v._v("DIP - 封装类型，也就是芯片的脚是怎么伸出来的\n"),l("ul",[l("li",[v._v("其他类型比如 PDIP、LQFP、PLCC、PQFP")])])]),v._v(" "),l("li",[v._v("40 - 引脚数")])]),v._v(" "),l("h2",{attrs:{id:"管脚含义举例"}},[v._v("管脚含义举例")]),v._v(" "),l("ul",[l("li",[v._v("VCC - 电源正极")]),v._v(" "),l("li",[v._v("GND - 电源负极")]),v._v(" "),l("li",[v._v("XTAL - 时钟")]),v._v(" "),l("li",[v._v("RST - 复位")]),v._v(" "),l("li",[v._v("DIR - 方向/Direction")]),v._v(" "),l("li",[v._v("CR - 使能/Chip Enablement")])]),v._v(" "),l("h2",{attrs:{id:"软件工具"}},[v._v("软件工具")]),v._v(" "),l("ul",[l("li",[v._v("Altium Designer\n"),l("ul",[l("li",[v._v("用来画原理图")])])]),v._v(" "),l("li",[v._v("Keil\n"),l("ul",[l("li",[v._v("代码编辑")]),v._v(" "),l("li",[v._v("内置很多单片机的细节")]),v._v(" "),l("li",[v._v("可以辅助进行依赖管理，添加 C/C++头文件")]),v._v(" "),l("li",[v._v("根据系统主频生成延时代码\n"),l("ul",[l("li",[v._v("单片机没有"),l("code",{pre:!0},[v._v("sleep")]),v._v("函数，需要在主程序中使用"),l("code",{pre:!0},[v._v("nop")]),v._v("配合晶振主频实现等待")]),v._v(" "),l("li",[v._v("或者使用定时器+中断系统")])])])])])]),v._v(" "),l("h2",{attrs:{id:"电阻标记"}},[v._v("电阻标记")]),v._v(" "),l("p",[v._v("最后一个数字是指数，前面的数字是基数。以下是一些例子：")]),v._v(" "),l("ul",[l("li",[l("code",{pre:!0},[v._v("102")]),v._v("，意为"),l("code",{pre:!0},[v._v("10 * 10^2")]),v._v("，也就是"),l("code",{pre:!0},[v._v("1000")])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("473")]),v._v("，意为"),l("code",{pre:!0},[v._v("47 * 10^3")]),v._v("，也就是"),l("code",{pre:!0},[v._v("47000")])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("1001")]),v._v("，意为"),l("code",{pre:!0},[v._v("100 * 10^1")]),v._v("，也就是"),l("code",{pre:!0},[v._v("1000")])])]),v._v(" "),l("h2",{attrs:{id:"代码相关的知识点"}},[v._v("代码相关的知识点")]),v._v(" "),l("ul",[l("li",[v._v("单片机通常使用寄存器实现 IO\n"),l("ul",[l("li",[v._v("通常要引入对应的头文件实现寄存器和变量的绑定")]),v._v(" "),l("li",[v._v("这些寄存器被称为 "),l("em",[v._v("特殊功能寄存器")]),v._v(" C 语言有关键字 "),l("code",{pre:!0},[v._v("sfr")]),v._v(" 表示特殊功能寄存器")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("sfr XXX = 0x11")]),v._v("意为变量"),l("code",{pre:!0},[v._v("XXX")]),v._v("会绑定"),l("code",{pre:!0},[v._v("0x11")]),v._v("这个地址。向"),l("code",{pre:!0},[v._v("XXX")]),v._v("赋值等于向地址"),l("code",{pre:!0},[v._v("0x11")]),v._v("赋值")])])]),v._v(" "),l("li",[v._v("程序执行完毕之后会重新从头开始执行\n"),l("ul",[l("li",[v._v("也就是说 main 函数会被重复执行")]),v._v(" "),l("li",[v._v("可以写一个死循环让程序继续执行，比如"),l("code",{pre:!0},[v._v("while (1);")])])])]),v._v(" "),l("li",[v._v("单片机里面的 int 是 16 位的，而 PC 通常是 32 位\n"),l("ul",[l("li",[v._v("short 也是 16 位")]),v._v(" "),l("li",[v._v("long 是 32 位")])])]),v._v(" "),l("li",[v._v("单片机上电时，所有 IO 都是高电平")]),v._v(" "),l("li",[v._v("去抖动\n"),l("ul",[l("li",[v._v("按下按键时可能会有 5-10ms 的抖动")]),v._v(" "),l("li",[v._v("按键稳定持续时间大约为 50-200ms")]),v._v(" "),l("li",[v._v("软件消抖：有操作时 delay 20ms 再判断一次")])])]),v._v(" "),l("li",[v._v("利用人眼视觉暂留，可以实现动态数码管显示\n"),l("ul",[l("li",[v._v("不过由于数码管的消影问题，通常会在显示一个数码管之后，延迟 1ms，然后把数据清零，保证上一个数码管的信号不会偷跑到下一个数码管")]),v._v(" "),l("li",[v._v("也可以使用专用芯片实现数码管的扫描，以免消耗太多单片机的 CPU 时间")])])]),v._v(" "),l("li",[v._v("单片机的高电平驱动能力弱，低电平的驱动能力强\n"),l("ul",[l("li",[v._v("因为高电平驱动受限于单片机的电压")]),v._v(" "),l("li",[v._v("可以使用额外的电源提供更高的电压，可以使用数据缓冲器")])])]),v._v(" "),l("li",[v._v("使用单片机内置的定时器/计数器\n"),l("ul",[l("li",[v._v("不同单片机的定时器/计数器的个数和使用方式不同")]),v._v(" "),l("li",[v._v("可以基于中断系统实现定时任务")])])]),v._v(" "),l("li",[v._v("可位寻址\n"),l("ul",[l("li",[v._v("表示可以给寄存器的某个位单独赋值，而不是给寄存器整体赋值")]),v._v(" "),l("li",[v._v("C 语言有关键字 "),l("code",{pre:!0},[v._v("sbit")]),v._v(" 表示特殊位")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("sbit XXX = 0x11")]),v._v("表示把某个特殊位的地址绑定给变量"),l("code",{pre:!0},[v._v("XXX")])]),v._v(" "),l("li",[v._v("也可以用"),l("code",{pre:!0},[v._v("sbit YYY = XXX^5")]),v._v("的方式指定"),l("code",{pre:!0},[v._v("YYY")]),v._v("是"),l("code",{pre:!0},[v._v("XXX")]),v._v("的第五位")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("sbit")]),v._v("变量只能被赋值 0 或者 1。如果赋值其他值，都视为 1")])])]),v._v(" "),l("li",[v._v("程序通过串口下载到单片机")]),v._v(" "),l("li",[v._v("如果数据比较多，可以给变量添加"),l("code",{pre:!0},[v._v("code")]),v._v("关键字，使其保存在 Flash/ROM 里面而不是 RAM\n"),l("ul",[l("li",[v._v("这种方法保存的数据不能修改")]),v._v(" "),l("li",[v._v("如果存储空间还是不够，考虑使用外部存储")])])])]),v._v(" "),l("h2",{attrs:{id:"定时器计数器"}},[v._v("定时器/计数器")]),v._v(" "),l("ul",[l("li",[v._v("定时器可以有多种工作模式\n"),l("ul",[l("li",[v._v("以 STC89C52 为例\n"),l("ul",[l("li",[v._v("模式 0 - 13 位计数器")]),v._v(" "),l("li",[v._v("模式 1 - 16 位计数器")]),v._v(" "),l("li",[v._v("模式 2 - 8 位自动重装模式")]),v._v(" "),l("li",[v._v("模式 3 - 两个 8 位计数器")])])])])]),v._v(" "),l("li",[v._v("定时器可以使用晶振，也可以使用一个引脚作为输入")])]),v._v(" "),l("h2",{attrs:{id:"寄存器常用命名方式"}},[v._v("寄存器常用命名方式")]),v._v(" "),l("ul",[l("li",[v._v("CON - controller")]),v._v(" "),l("li",[v._v("T - timer")]),v._v(" "),l("li",[v._v("I - interrupt")]),v._v(" "),l("li",[v._v("E - enable")]),v._v(" "),l("li",[v._v("P - priority")]),v._v(" "),l("li",[v._v("S - serial")]),v._v(" "),l("li",[v._v("A - all")]),v._v(" "),l("li",[v._v("F - flag")]),v._v(" "),l("li",[v._v("R - ready")]),v._v(" "),l("li",[v._v("MOD - model, 模式")]),v._v(" "),l("li",[v._v("L - low")]),v._v(" "),l("li",[v._v("H - high")]),v._v(" "),l("li",[v._v("P - power")]),v._v(" "),l("li",[v._v("BUF - buffer")])]),v._v(" "),l("h2",{attrs:{id:"通信"}},[v._v("通信")]),v._v(" "),l("p",[v._v("常见通信接口：")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("UART - 全双工，异步，点对点")])]),v._v(" "),l("li",[l("p",[v._v("I2C - 半双工，同步，支持多设备")])]),v._v(" "),l("li",[l("p",[v._v("SPI - 全双工，同步，支持多设备")])]),v._v(" "),l("li",[l("p",[v._v("1-Wire - 半双工，异步，支持多设备")])]),v._v(" "),l("li",[l("p",[v._v("异步：双方约定时钟频率，并使用相同的时钟频率")])]),v._v(" "),l("li",[l("p",[v._v("同步：使用一根线作为时钟线，比如每次上升沿采集一次数据")])])]),v._v(" "),l("h3",{attrs:{id:"串口"}},[v._v("串口")]),v._v(" "),l("ul",[l("li",[v._v("成本低")]),v._v(" "),l("li",[v._v("易用")]),v._v(" "),l("li",[v._v("两个设备互相通信")]),v._v(" "),l("li",[v._v("51 单片机自带 UART (Universal Async Recv Transmitter/通用异步收发器)，可以实现串口通信")]),v._v(" "),l("li",[v._v("串口使用 DB9 接口\n"),l("ul",[l("li",[v._v("可以使用转接线，转换为 USB，也有蓝牙串口芯片")])])]),v._v(" "),l("li",[v._v("常用的电压标准有三种\n"),l("ul",[l("li",[v._v("TTL 电平：5V 表示 1，0V 表示 0")]),v._v(" "),l("li",[v._v("RS232 电平：-3 - -15V 表示 1， 3 - 15V 表示 0")]),v._v(" "),l("li",[v._v("RS485 电平：两线压差 2 - 6V 表示 1，-2 - -6V 表示 0（差分信号）")])])]),v._v(" "),l("li",[v._v("STC89C52 内置一个 UART， 有四种工作模式\n"),l("ul",[l("li",[v._v("模式 0：同步移位寄存器")]),v._v(" "),l("li",[v._v("模式 1：8 位 UART，波特率可变（常用）")]),v._v(" "),l("li",[v._v("模式 2：9 位 UART，波特率固定")]),v._v(" "),l("li",[v._v("模式 3：9 位 UART，波特率可变")])])]),v._v(" "),l("li",[v._v("串口参数\n"),l("ul",[l("li",[v._v("波特率：串口通信的速率")]),v._v(" "),l("li",[v._v("校验位：8 位 UART 每次发一个字节。9 位 UART 会在最后加一个校验位")]),v._v(" "),l("li",[v._v("停止位：UART 有一个起始位和一个停止位。所以 8 位 UART 的一帧是 10 位，9 位 UART 的一帧是 11 位")])])]),v._v(" "),l("li",[v._v("发送完毕和接受完毕时都有中断事件")])]),v._v(" "),l("h3",{attrs:{id:"i2c"}},[v._v("I2C")]),v._v(" "),l("ul",[l("li",[v._v("有地址线和数据线")]),v._v(" "),l("li",[v._v("支持一个主机连接多个外部芯片")]),v._v(" "),l("li",[v._v("通过给芯片的地址线设置高电平/低电平，可以设置芯片的地址。通常是上电的时候就固定的")]),v._v(" "),l("li",[v._v("通信的时候，不论读写，都是先发地址信号选择芯片，然后发数据的读写请求")])]),v._v(" "),l("h3",{attrs:{id:"1-wire"}},[v._v("1-Wire")]),v._v(" "),l("ul",[l("li",[v._v("只需要一根通信数据线：DQ\n"),l("ul",[l("li",[v._v("当然还有供电线")])])]),v._v(" "),l("li",[v._v("使用时间长度表示数据 0 或者 1\n"),l("ul",[l("li",[v._v("主机把总线拉低 60-120us 表示发送 0")]),v._v(" "),l("li",[v._v("主机把总线拉低 1-15us 表示发送 1")])])])]),v._v(" "),l("h2",{attrs:{id:"常见电机"}},[v._v("常见电机")]),v._v(" "),l("ul",[l("li",[v._v("直流电机\n"),l("ul",[l("li",[v._v("可以正反转")])])]),v._v(" "),l("li",[v._v("步进电机\n"),l("ul",[l("li",[v._v("精密控制绝对角度")]),v._v(" "),l("li",[v._v("常用于 3D 打印机")])])]),v._v(" "),l("li",[v._v("舵机\n"),l("ul",[l("li",[v._v("内部是直流电机")]),v._v(" "),l("li",[v._v("控制相对角度")]),v._v(" "),l("li",[v._v("可以用来控制小车转向")])])]),v._v(" "),l("li",[v._v("无刷电机\n"),l("ul",[l("li",[v._v("转速快")]),v._v(" "),l("li",[v._v("常见于无人机")]),v._v(" "),l("li",[v._v("功率大")])])]),v._v(" "),l("li",[v._v("空心杯电机\n"),l("ul",[l("li",[v._v("小功率无刷电机")])])])]),v._v(" "),l("p",[v._v("其他注意事项：")]),v._v(" "),l("ul",[l("li",[v._v("电机通常需要大功率电路进行驱动\n"),l("ul",[l("li",[v._v("通常要外接大功率器件\n"),l("ul",[l("li",[v._v("单向驱动")]),v._v(" "),l("li",[v._v("使用达灵顿管或 MOS 实现三极管开关")])])]),v._v(" "),l("li",[v._v("或者 H 桥电路\n"),l("ul",[l("li",[v._v("双向驱动")])])])])]),v._v(" "),l("li",[v._v("电机有电感，"),l("strong",[v._v("记得保护电路")])]),v._v(" "),l("li",[v._v("使用 PWM 实现速度的控制\n"),l("ul",[l("li",[v._v("不能用滑动变阻器实现速度控制，因为电流太大，会烧毁变阻器")]),v._v(" "),l("li",[v._v("PWM 适用于具有惯性的系统，实现用数字信号模拟模拟信号")]),v._v(" "),l("li",[v._v("高级的单片机，比如 STM32，会自带硬件 PWM，避免占用 CPU 时间")])])])])])}]};v.exports={attributes:{title:"51单片机"},vue:{render:l.render,staticRenderFns:l.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=l.render,this.$options.staticRenderFns=l.staticRenderFns}}}}}}]);