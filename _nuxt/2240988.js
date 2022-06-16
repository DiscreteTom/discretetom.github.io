(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{1257:function(t,n){const e={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"写在前面"}},[t._v("写在前面")]),t._v(" "),e("p",[t._v("本文是观看"),e("a",{attrs:{href:"https://www.bilibili.com/video/BV18g4y1z7pZ"}},[t._v("本视频")]),t._v("时的笔记。")]),t._v(" "),e("h2",{attrs:{id:"概念"}},[t._v("概念")]),t._v(" "),e("ul",[e("li",[t._v("MCU\n"),e("ul",[e("li",[t._v("Micro Controller Unit，微控制器")]),t._v(" "),e("li",[t._v("是一个完整的计算机系统，单个芯片上包含处理器、存储器、IO模块")]),t._v(" "),e("li",[t._v("也被称为单片机")])])]),t._v(" "),e("li",[t._v("ARM处理器的分类（从V7开始）\n"),e("ul",[e("li",[t._v("A系列：Application Processor\n"),e("ul",[e("li",[t._v("高频，高性能，合理功耗")]),t._v(" "),e("li",[t._v("应用：手机")])])]),t._v(" "),e("li",[t._v("R系列：Real-time Controller\n"),e("ul",[e("li",[t._v("实时响应，合理性能，较低功耗")]),t._v(" "),e("li",[t._v("应用：飞机、无人机")])])]),t._v(" "),e("li",[t._v("M系列：Micro-controller\n"),e("ul",[e("li",[t._v("一般性能，最低成本，极低功耗")]),t._v(" "),e("li",[t._v("应用：单片机")])])])])]),t._v(" "),e("li",[t._v("GPIO：General-Purpose Input/Output")]),t._v(" "),e("li",[t._v("EVB：开发板，Evaluation board\n"),e("ul",[e("li",[t._v("厂商为了让用户了解芯片，会把一个芯片所支持的所有外设放到一个大板子上，用来测试芯片")])])]),t._v(" "),e("li",[t._v("Startup Board，最小系统板\n"),e("ul",[e("li",[t._v("一个麻雀虽小五脏俱全的板子")]),t._v(" "),e("li",[t._v("只保留了EVB上最核心的部分")])])]),t._v(" "),e("li",[t._v("BDM / JTAG / SWD: Debugger的标准/通信协议\n"),e("ul",[e("li",[t._v("用来和芯片里面的调试模块通信")]),t._v(" "),e("li",[t._v("SWD是新的趋势，比JTAG速度快，引脚少（2根），适合引脚比较少的单片机")]),t._v(" "),e("li",[t._v("USBDM通过BDM接口和SWD接口支持不同类型芯片的调试")]),t._v(" "),e("li",[t._v("OpenSDA：目前常用的开发工具，V2开始开源")])])]),t._v(" "),e("li",[t._v("ARM架构中的中断\n"),e("ul",[e("li",[t._v("其他架构的芯片在编写中断函数的时候可能需要单独使用一些关键字，而ARM架构芯片直接写正常的C语言函数即可")]),t._v(" "),e("li",[t._v("这个函数无法被主程序调用，也没有参数或返回值")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("大部分基础知识是计算机组成原理的知识，可以看下之前的笔记")])]),t._v(" "),e("h2",{attrs:{id:"示例用gpio控制灯"}},[t._v("示例：用GPIO控制灯")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("// 以下的常量是在芯片的头文件里面定义的寄存器地址\n// 这些变量都是"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("volatile"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("的变量，因为会在程序之外被修改，必需每次都读它真实的值，不能被编译器优化\nint "),e("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  SIM_SCGC5 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SIM_SCGC5 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 启动模块的时钟，激活模块\n\n  // 设置每个引脚的功能\n  PORTD_PCR0 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 0x0100"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  // "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n  PORTD_PCR7 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 0x0100"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  GPIOD_PDDR "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 0xFF"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 方向为输出\n  GPIOD_PDOR "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ~0xFF"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 所有8个引脚都输出0\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("true"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    delay_ms"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 等待1秒\n    GPIOD_PDOR "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ~GPIOD_PDOR"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 所有8个引脚输出1，实现闪烁。但是此操作不是最优的，因为剩下24个位也翻转了\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("p",[t._v("可以看到控制硬件通常就是在向指定的地址写入不同的值。重点就是如何"),e("strong",[t._v("高效且正确")]),t._v("地读取/写入值")]),t._v(" "),e("h2",{attrs:{id:"抖动与去抖动"}},[t._v("抖动与去抖动")]),t._v(" "),e("ul",[e("li",[t._v("轮询模式下，信号的持续时间必需超过一个时钟周期才能确保被检测到，否则会被漏掉")]),t._v(" "),e("li",[t._v("去抖动\n"),e("ul",[e("li",[t._v("硬件方案\n"),e("ul",[e("li",[t._v("使用RC电路，使电流无法快速跳变")])])]),t._v(" "),e("li",[t._v("软件方案\n"),e("ul",[e("li",[t._v("延迟10ms再读，如果状态相同则视为状态稳定")])])])])])]),t._v(" "),e("h2",{attrs:{id:"一些位操作的例子"}},[t._v("一些位操作的例子")]),t._v(" "),e("p",[t._v("嵌入式开发需要大量的位操作")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#define BIT_0_MASK 0b00000001")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#define BIT_1_MASK 0b00000010")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#define BIT_2_MASK 0b00000100")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#define H_4_MASK 0b11110000")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#define L_4_MASK 0b00001111")]),t._v("\n\n// "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" a bit\na "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BIT_0_MASK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n// "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),t._v(" a bit\na "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ~BIT_0_MASK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n// extract low "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" bits\nb "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" L_4_MASK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n// extract high "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" bits\nb "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" H_4_MASK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n// is a bit set?\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" BIT_0_MASK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n// is a bit clear?\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" BIT_0_MASK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])])}]};t.exports={attributes:{title:"嵌入式系统入门笔记",description:"一些概念和代码示例",tags:["Embedded System / 嵌入式系统"]},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);