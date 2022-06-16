(window.webpackJsonp=window.webpackJsonp||[]).push([[106,452],{1313:function(v,_,t){const e={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"计算机的演变史"}},[v._v("计算机的演变史")]),v._v(" "),e("ul",[e("li",[v._v("第0代 机械时代 (BC-1940)")]),v._v(" "),e("li",[v._v("第1代 电子管时代 (1943-1959)\n"),e("ul",[e("li",[v._v("耗电高 体积大")]),v._v(" "),e("li",[v._v("定点计算")]),v._v(" "),e("li",[v._v("机器语言 汇编语言")])])]),v._v(" "),e("li",[v._v("第2代 晶体管时代 (1960-1968)\n"),e("ul",[e("li",[v._v("集中处理变为分级处理")]),v._v(" "),e("li",[v._v("定点计算改为浮点计算")]),v._v(" "),e("li",[v._v("高级语言")])])]),v._v(" "),e("li",[v._v("第3代 集成电路时代 (1969-1977)\n"),e("ul",[e("li",[v._v("存储容量大 运算速度快 几十到几百万次每秒")])])]),v._v(" "),e("li",[v._v("第4代 超大规模集成电路时代 (1978-现在)")]),v._v(" "),e("li",[v._v("第5代 量子计算机？光计算机？生物计算机？")])]),v._v(" "),e("h2",{attrs:{id:"重要人物与贡献"}},[v._v("重要人物与贡献")]),v._v(" "),e("ul",[e("li",[v._v("摩尔\n"),e("ul",[e("li",[v._v("摩尔定律：集成电路芯片中晶体管的数量大体上每2年翻一番")])])]),v._v(" "),e("li",[v._v("冯诺依曼\n"),e("ul",[e("li",[v._v("冯诺依曼结构：指令与数据放在同一个存储器（如果指令和数据放在不同存储器，称为哈佛结构）。存储器+输入+输出+运算器+控制器")])])])]),v._v(" "),e("h2",{attrs:{id:"计算机性能指标"}},[v._v("计算机性能指标")]),v._v(" "),e("ul",[e("li",[v._v("吞吐量：表征一台计算机在某一时间间隔内能够处理的信息量")]),v._v(" "),e("li",[v._v("响应时间：表征从输入有效到系统产生响应之间的时间度量，用时间单位来度量")]),v._v(" "),e("li",[v._v("利用率：在给定的时间间隔内系统被实际使用的时间所占的比率，用百分比表示")]),v._v(" "),e("li",[v._v("处理机字长：指处理机运算器中一次能够完成二进制数运算的位数。如32位、64位等")]),v._v(" "),e("li",[v._v("总线宽度：通常指处理器与存储器之间进行互连的内部总线的位数")]),v._v(" "),e("li",[v._v("存储器容量：存储器中所有存储单元的总容量。通常用KB、MB、GB和TB表示。B表示Byte(字节)。")]),v._v(" "),e("li",[v._v("存储器带宽：单位时间内从存储器读出的字节数，一般用字节数/秒表示。")]),v._v(" "),e("li",[v._v("主频/时钟周期：CPU的工作节拍受主时钟控制，主时钟不断产生固定频率的时钟，主时钟的频率f 称为CPU的主频。度量单位是MHz（兆赫兹）、GHz（吉赫兹）。主频的倒数称为CPU时钟周期T，T=1/f，度量单位是微秒、纳秒")]),v._v(" "),e("li",[v._v("（程序的）CPU执行时间：执行某个程序所占用的CPU时间\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("程序的CPU执行时间 = 程序占用的CPU时钟周期数 * CPU时钟周期")])])])]),v._v(" "),e("li",[v._v("CPI(Clock Per Instruction)（程序的）指令平均周期数：程序的每条指令平均占用的CPU周期数量\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("CPI = 执行程序花费的CPU周期总量 / 程序包含的指令数量")])])])]),v._v(" "),e("li",[v._v("MIPS(Million Instruction Per Second)每秒百万指令数，显然等于每秒指令数除一百万")]),v._v(" "),e("li",[v._v("MFLOPS(Million Floating-point Operations Per Second)每秒百万次"),e("strong",[v._v("浮点")]),v._v("操作次数，用来衡量计算机浮点操作性能")])]),v._v(" "),e("h2",{attrs:{id:"计算机系统的层次结构"}},[v._v("计算机系统的层次结构")]),v._v(" "),e("p",[e("img",{attrs:{src:t(606),alt:"1-1"}})]),v._v(" "),e("ol",[e("li",[v._v("微程序（或硬布线）级M1，硬件直接执行微指令")]),v._v(" "),e("li",[v._v("一般机器级（传统机器级）M2，使用M1的微程序解释并执行每一条机器指令（或由硬件直接执行机器指令）")]),v._v(" "),e("li",[v._v("操作系统级M3，用于对计算机系统的软硬件资源进行管理和调度。使用M2的机器语言解释操作系统程序")]),v._v(" "),e("li",[v._v("汇编语言级M4，汇编语言是为了便于编写与阅读程序而设计的语言，用汇编程序把汇编语言翻译成能够被操作系统调用的指令")]),v._v(" "),e("li",[v._v("高级语言级M5，用编译程序把代码编译成汇编语言")])]),v._v(" "),e("p",[v._v("即，高层翻译器把高层语言翻译成低层语言，交给低层执行。一层一层翻译下去")])])}]};v.exports={attributes:{layout:"collection",title:"计算机系统概论",collection:"ComputerOrganizationPrinciple"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}},606:function(v,_,t){v.exports=t.p+"img/1-1.4c7ae44.png"}}]);