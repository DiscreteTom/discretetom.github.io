(window.webpackJsonp=window.webpackJsonp||[]).push([[15,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766],{1368:function(v,_,t){const n={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,n=v._self._c||_;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),n("p",[v._v("两种中断：")]),v._v(" "),n("ul",[n("li",[v._v("硬中断\n"),n("ul",[n("li",[v._v("由外部设备或接口发出事件请求，处理器通过检测中断管脚来感知")]),v._v(" "),n("li",[v._v("处理器每执行完一条指令都会去查看中断引脚是否有外部硬中断请求产生")]),v._v(" "),n("li",[v._v("中断的产生具有随机性（软件不可控且不可预测")]),v._v(" "),n("li",[v._v("CPU需要发中断响应信号")]),v._v(" "),n("li",[v._v("可以被屏蔽")])])]),v._v(" "),n("li",[v._v("软中断\n"),n("ul",[n("li",[v._v("执行特定指令而产生的程序转移")]),v._v(" "),n("li",[v._v("由软中断指令或某些指令执行错误而产生，时机可预测")]),v._v(" "),n("li",[v._v("也叫例外或异常(exception)或陷阱(traps)")]),v._v(" "),n("li",[v._v("CPU不需要发中断响应信号")]),v._v(" "),n("li",[v._v("中断类型号由指令直接给出")]),v._v(" "),n("li",[v._v("不可被屏蔽")])])])]),v._v(" "),n("h2",{attrs:{id:"中断识别"}},[v._v("中断识别")]),v._v(" "),n("p",[v._v("CPU需要识别中断源以便对其进行服务")]),v._v(" "),n("p",[v._v("方法：")]),v._v(" "),n("ul",[n("li",[v._v("查询中断法")]),v._v(" "),n("li",[v._v("向量中断法")])]),v._v(" "),n("h3",{attrs:{id:"查询方式"}},[v._v("查询方式")]),v._v(" "),n("p",[v._v("按顺序询问外设。所以外设的查询顺序存在优先级")]),v._v(" "),n("h3",{attrs:{id:"中断向量方式"}},[v._v("中断向量方式")]),v._v(" "),n("p",[v._v("需要添加"),n("strong",[v._v("中断控制器")]),v._v("，如图：")]),v._v(" "),n("p",[n("img",{attrs:{src:t(895),alt:"6-1"}})]),v._v(" "),n("p",[v._v("任何外设出现中断都会提交到中断控制器，中断控制器发出中断请求，CPU响应中断后询问中断控制器，中断控制器把"),n("strong",[v._v("中断向量")]),v._v("放在"),n("strong",[v._v("数据总线")]),v._v("给CPU，然后"),n("strong",[v._v("CPU查中断向量表")]),v._v("找到目标程序")]),v._v(" "),n("p",[v._v("中断向量表，保存了中断服务程序的地址（即CS:IP）所以"),n("strong",[v._v("每个表项占用4字节")]),v._v("。通常中断向量表的起始地址为0000H：")]),v._v(" "),n("p",[n("img",{attrs:{src:t(896),alt:"6-2"}})]),v._v(" "),n("p",[v._v("所以"),n("strong",[v._v("使用此方式之前要把中断服务程序先放入中断向量表")]),v._v("，如把中断类型号为60H的服务程序intr的入口地址放入中断向量表的汇编程序：")]),v._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("xor ax, ax "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" 相当于mov ax, "),n("span",{pre:!0,attrs:{class:"token number"}},[v._v("0")]),v._v("但是比mov要快\nmov es, ax "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" 设置附加段的段地址为0\nmov bx, 60h*4 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" 中断向量号*4，找到需要赋值的地方\nmov ax, offset intr "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" 获得中断服务程序偏移地址，即IP的值\nmov es:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("bx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v(", ax "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" 写入IP\nmov ax, seg intr "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" 获得中断服务程序段地址，即CS的值\nmov es:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("bx+2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v(", ax "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" 写入CS\n")])]),v._v(" "),n("p",[v._v("以上为直接修改中断向量表，也可以使用DOS系统调用修改中断向量表：")]),v._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("mov ax, 3560h "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[v._v("35")]),v._v("号系统调用，表示取原中断向量入口地址。60表示中断向量地址\nint 21h "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" 输出到es:bx\nmov old_off, bx "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" 保存起来\nmov bx, es\nmov old_seg, bx\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("..")]),v._v(".\nmov ax, 2560h "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[v._v("25")]),v._v("号系统调用，置中断向量入口\nmov dx, seg intr\nmov ds, dx\nmov dx, offset intr "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" 输入ds:dx\nint 21h\n")])]),v._v(" "),n("h3",{attrs:{id:"中断优先级"}},[v._v("中断优先级")]),v._v(" "),n("p",[v._v("CPU一次只能处理一个中断，即优先级最高的中断请求")]),v._v(" "),n("p",[v._v("确定优先级的方式：")]),v._v(" "),n("ul",[n("li",[v._v("按优先级排队")]),v._v(" "),n("li",[v._v("按轮询排队 - 所有优先级相等，FCFS")])]),v._v(" "),n("h3",{attrs:{id:"中断嵌套"}},[v._v("中断嵌套")]),v._v(" "),n("p",[n("img",{attrs:{src:t(897),alt:"6-3"}})]),v._v(" "),n("h2",{attrs:{id:"8086中断系统"}},[v._v("8086中断系统")]),v._v(" "),n("h3",{attrs:{id:"中断源"}},[v._v("中断源")]),v._v(" "),n("ul",[n("li",[v._v("硬中断\n"),n("ul",[n("li",[v._v("不可屏蔽中断NMI")]),v._v(" "),n("li",[v._v("可屏蔽中断INT")])])]),v._v(" "),n("li",[v._v("软中断\n"),n("ul",[n("li",[v._v("除法错误")]),v._v(" "),n("li",[v._v("溢出")]),v._v(" "),n("li",[v._v("指令中断")]),v._v(" "),n("li",[v._v("单步中断（如调试")])])])]),v._v(" "),n("h3",{attrs:{id:"8086中断处理过程"}},[v._v("8086中断处理过程")]),v._v(" "),n("p",[n("img",{attrs:{src:t(898),alt:"6-4"}})]),v._v(" "),n("p",[n("img",{attrs:{src:t(899),alt:"6-5"}})]),v._v(" "),n("h3",{attrs:{id:"不可屏蔽中断nmi"}},[v._v("不可屏蔽中断NMI")]),v._v(" "),n("p",[v._v("CPU收到NMI后默认中断类型号为02H")]),v._v(" "),n("p",[v._v("不可屏蔽中断源有三种：")]),v._v(" "),n("ul",[n("li",[v._v("协处理器出错")]),v._v(" "),n("li",[v._v("系统RAM奇偶校验出错")]),v._v(" "),n("li",[v._v("IO通道校验出错")])]),v._v(" "),n("p",[v._v("系统通电后可以设置是否允许NMI。如果复位后向a0h端口写00h则禁止NMI，写80h则允许NMI")]),v._v(" "),n("h3",{attrs:{id:"可屏蔽中断intr"}},[v._v("可屏蔽中断INTR")]),v._v(" "),n("p",[v._v("CPU的INTR管脚输入高电平时产生硬件可屏蔽中断请求。"),n("strong",[v._v("是否响应该请求由PSW的IF位决定")]),v._v("：")]),v._v(" "),n("ul",[n("li",[v._v("IF=0表示屏蔽中断（执行CLI指令可以置IF=0")]),v._v(" "),n("li",[v._v("IF=1表示允许中断（执行STI指令可以置IF=1")])]),v._v(" "),n("p",[v._v("使用中断控制器可以管理多个硬件中断源")]),v._v(" "),n("p",[v._v("CPU响应INTR的条件：")]),v._v(" "),n("ul",[n("li",[v._v("当前指令执行完毕（一个总线周期的结束")]),v._v(" "),n("li",[v._v("IF=1")]),v._v(" "),n("li",[v._v("INTR信号有效")])]),v._v(" "),n("p",[v._v("INTR的处理过程：")]),v._v(" "),n("ul",[n("li",[v._v("中断申请 - 外设向CPU发INTR信号")]),v._v(" "),n("li",[v._v("中断响应（如果可以响应的话）\n"),n("ul",[n("li",[v._v("发出响应中断信号INTA")]),v._v(" "),n("li",[v._v("获取中断类型号保存PSW和断点（即返回地址）于堆栈")]),v._v(" "),n("li",[v._v("查表获得中断服务程序入口地址")])])]),v._v(" "),n("li",[v._v("执行中断服务程序\n"),n("ul",[n("li",[v._v("保护现场")]),v._v(" "),n("li",[v._v("对外设服务")]),v._v(" "),n("li",[v._v("恢复现场")])])]),v._v(" "),n("li",[v._v("中断返回\n"),n("ul",[n("li",[v._v("弹出断点与PSW")]),v._v(" "),n("li",[v._v("回到之前的地址继续进行")])])])]),v._v(" "),n("h3",{attrs:{id:"软中断"}},[v._v("软中断")]),v._v(" "),n("ul",[n("li",[v._v("除法中断 - 除0或结果超过机器表示范围，产生0号中断")]),v._v(" "),n("li",[v._v("溢出中断 - PSW的OF=1时执行INTO指令，产生4号中断")]),v._v(" "),n("li",[v._v("单步中断 - PSW的TF=1时，执行每条指令产生1号中断")]),v._v(" "),n("li",[v._v("指令中断 - 比如上面的DOS系统调用"),n("code",{pre:!0},[v._v("int 21h")])])]),v._v(" "),n("h2",{attrs:{id:"可编程中断控制器8259a"}},[v._v("可编程中断控制器8259A")]),v._v(" "),n("h3",{attrs:{id:"功能"}},[v._v("功能")]),v._v(" "),n("p",[v._v("因为可编程，所以可以进行功能选择")]),v._v(" "),n("ul",[n("li",[v._v("优先级排队管理\n"),n("ul",[n("li",[v._v("完全嵌套")]),v._v(" "),n("li",[v._v("循环优先级")]),v._v(" "),n("li",[v._v("特殊完全嵌套")])])]),v._v(" "),n("li",[v._v("接收和扩充外部设备的中断请求\n"),n("ul",[n("li",[v._v("因为此芯片允许级联，最多可以拓展至8片，管理64个中断源")])])]),v._v(" "),n("li",[v._v("提供中断类型号（从数据总线给CPU")]),v._v(" "),n("li",[v._v("中断请求的允许与屏蔽")])]),v._v(" "),n("h3",{attrs:{id:"引脚"}},[v._v("引脚")]),v._v(" "),n("p",[n("img",{attrs:{src:t(900),alt:"6-6"}})]),v._v(" "),n("ul",[n("li",[v._v("D7-D0为返回中断类型号的数据线")]),v._v(" "),n("li",[v._v("IR7-IR0为中断源（中断源可以为8259A芯片形成级联")]),v._v(" "),n("li",[v._v("~WR(in)写信号线")]),v._v(" "),n("li",[v._v("~RD(in)读信号线")]),v._v(" "),n("li",[v._v("INT(out)中断请求")]),v._v(" "),n("li",[v._v("~INTA(in)中断响应接收")]),v._v(" "),n("li",[v._v("A0为芯片内的端口地址指示（芯片内有两个地址，使用A0区分")]),v._v(" "),n("li",[v._v("~CS为片选信号线（使能")]),v._v(" "),n("li",[v._v("~SP/~EN从片模式编程/使能缓冲器（工作在缓冲器模式时用于控制数据总线上的收发器")]),v._v(" "),n("li",[v._v("CAS2-CAS0级联信号线。主片输出从片输入")])]),v._v(" "),n("h3",{attrs:{id:"内部结构"}},[v._v("内部结构")]),v._v(" "),n("p",[n("img",{attrs:{src:t(901),alt:"6-17"}})]),v._v(" "),n("ul",[n("li",[v._v("IRR - 存放外部中断源发出的中断请求信号，1表示对应引脚有中断请求。具有锁存功能")]),v._v(" "),n("li",[v._v("ISR - 表示正在服务的中断。如果允许嵌套则可能很多bit同时为1")]),v._v(" "),n("li",[v._v("IMR - 0表示允许中断，1表示屏蔽中断")])]),v._v(" "),n("h3",{attrs:{id:"工作方式"}},[v._v("工作方式")]),v._v(" "),n("ul",[n("li",[v._v("中断触发方式\n"),n("ul",[n("li",[v._v("边沿触发方式 - IRi端出现上升沿视为中断请求")]),v._v(" "),n("li",[v._v("电平触发方式 - IRi端出现高电平视为中断请求")])])]),v._v(" "),n("li",[v._v("屏蔽中断源方式\n"),n("ul",[n("li",[v._v("普通屏蔽方式")]),v._v(" "),n("li",[v._v("特殊屏蔽方式")])])]),v._v(" "),n("li",[v._v("中断嵌套方式\n"),n("ul",[n("li",[v._v("完全嵌套方式（只能被优先级更高的请求打断")]),v._v(" "),n("li",[v._v("特殊完全嵌套方式（可以被优先级相等或更高的中断请求打断")])])]),v._v(" "),n("li",[v._v("优先级管理方式\n"),n("ul",[n("li",[v._v("优先级固定方式")]),v._v(" "),n("li",[v._v("优先级轮转方式\n"),n("ul",[n("li",[v._v("自动轮转方式（被服务后优先级降为最低")]),v._v(" "),n("li",[v._v("指令轮转方式（使用命令将指定中断源的优先级置为最低")])])])])]),v._v(" "),n("li",[v._v("结束中断的处理方式EOI\n"),n("ul",[n("li",[v._v("自动中断结束方式（自动EOI，中断服务程序不送EOI，第二个INTA脉冲信号的后沿把ISR对应位清零")]),v._v(" "),n("li",[v._v("手动中断结束方式（普通EOI，中断服务程序需要向8259A送EOI以便将ISR对应位清零，标识中断结束\n"),n("ul",[n("li",[v._v("不指定（如果采用完全嵌套方式则可以不指定EOI，中断控制器将ISR中优先级最高的为清零")]),v._v(" "),n("li",[v._v("指定（如果中断优先级被打乱，则必须自定EOI")])])])])]),v._v(" "),n("li",[v._v("数据线连接方式（如果系统要求8259A必须通过总线缓冲器，则8259A应工作在缓冲方式\n"),n("ul",[n("li",[v._v("非缓冲方式（把~SP/~EN设置为1是主片方式，为0是从片方式")]),v._v(" "),n("li",[v._v("缓冲方式（~SP/~EN作为输出，用来控制总线缓冲器的传送方向。此时只能用软件设置8259A的工作在主片还是从片")])])])]),v._v(" "),n("p",[v._v("以上均可使用命令字编程实现")]),v._v(" "),n("h3",{attrs:{id:"8259a的编程"}},[v._v("8259A的编程")]),v._v(" "),n("p",[v._v("可分为"),n("strong",[v._v("初始化编程")]),v._v("和"),n("strong",[v._v("中断操作编程")])]),v._v(" "),n("ul",[n("li",[v._v("初始化编程是8259A复位后首先进行的操作。通过写入一系列"),n("strong",[v._v("初始化命令字ICW")]),v._v("实现。初始化结束后除非复位，否则不会再改变。")]),v._v(" "),n("li",[v._v("中断操作编程是在初始化后任意时刻写入"),n("strong",[v._v("操作命令字OCW")]),v._v("实现，可多次写入。")])]),v._v(" "),n("p",[v._v("以上两种命令字的写入位置也不同。8259A使用一个引脚A0来标记内部的两个地址。A0=0表示偶地址端口，A0=1表示奇地址端口。不同命令字写往的端口可能不同")]),v._v(" "),n("ul",[n("li",[v._v("初始化命令字ICW\n"),n("ul",[n("li",[v._v("芯片控制（工作方式设置）ICW1，完成触发方式设置和级联方式设置的功能\n"),n("ul",[n("li",[n("img",{attrs:{src:t(902),alt:"6-7"}})])])]),v._v(" "),n("li",[v._v("中断类型号ICW2，完成中断类型号设置的功能，仅设置前五位，后三位自动产生\n"),n("ul",[n("li",[n("img",{attrs:{src:t(903),alt:""}})]),v._v(" "),n("li",[v._v("例：奇地址端口(A0=1)写入00001000B时对应的中断类型号为08-0FH。写入10000000B后对应的中断类型号为80-87H")])])]),v._v(" "),n("li",[v._v("级联方式ICW3，只级联方式下使用，描述主从片的连接关系\n"),n("ul",[n("li",[v._v("主片："),n("img",{attrs:{src:t(904),alt:"6-10"}})]),v._v(" "),n("li",[v._v("从片："),n("img",{attrs:{src:t(905),alt:"6-11"}})]),v._v(" "),n("li",[v._v("从片是识别地址就是接在了主片的哪一个引脚上")]),v._v(" "),n("li",[v._v("例："),n("img",{attrs:{src:t(906),alt:"6-12"}})])])]),v._v(" "),n("li",[v._v("特定完全嵌套、缓冲器方式ICW4\n"),n("ul",[n("li",[n("img",{attrs:{src:t(907),alt:"6-13"}})])])])])]),v._v(" "),n("li",[v._v("操作命令字OCW\n"),n("ul",[n("li",[v._v("中断屏蔽字OCW1，完成中断屏蔽的设置，即IMR。"),n("strong",[v._v("可读可写")]),v._v("，可用于读取IMR\n"),n("ul",[n("li",[n("img",{attrs:{src:t(908),alt:""}})])])]),v._v(" "),n("li",[v._v("中断结束方式OCW2，完成非自动中断结束方式、中断排队方式的设置功能\n"),n("ul",[n("li",[n("img",{attrs:{src:t(909),alt:""}})])])]),v._v(" "),n("li",[v._v("中断查询OCW3，完成IR和ISR寄存器、状态字查询、特殊屏蔽方式的设置\n"),n("ul",[n("li",[n("img",{attrs:{src:t(910),alt:""}})])])])])])]),v._v(" "),n("p",[v._v("例：已知8259A的端口地址为20H和21H，写出读IRR、ISR和IMR的汇编代码：")]),v._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("mov al, 00001011b\nout 20h, al "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" 下次~RD有效，读ISR\nnop "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" 等待操作完成\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("in")]),v._v(" al, 20h "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" 读ISR\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" 类似可以读IRR.略\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" OCW1就是IM\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("in")]),v._v(" al, 21h\n")])]),v._v(" "),n("p",[v._v("OCW3为00001100b时为查询状态，示例代码：")]),v._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("mov al, 00001100b\nout 20h, al\nnop "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" 延时\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("in")]),v._v(" al, 20h\n")])]),v._v(" "),n("h3",{attrs:{id:"8259a初始化流程"}},[v._v("8259A初始化流程")]),v._v(" "),n("p",[n("img",{attrs:{src:t(911),alt:""}})]),v._v(" "),n("h3",{attrs:{id:"级联"}},[v._v("级联")]),v._v(" "),n("p",[v._v("当系统需要管理超过8个中断源时，可以采用级联的方式来管理。使用一个主8259A和若干个从8259A构成：")]),v._v(" "),n("p",[n("img",{attrs:{src:t(912),alt:""}})]),v._v(" "),n("p",[n("strong",[v._v("级联状态主片必须使用特殊全嵌套")])]),v._v(" "),n("h2",{attrs:{id:"硬件中断服务程序的编写"}},[v._v("硬件中断服务程序的编写")]),v._v(" "),n("p",[v._v("主程序：")]),v._v(" "),n("ul",[n("li",[v._v("设置中断向量表")]),v._v(" "),n("li",[v._v("CPU的IF置1，允许中断")]),v._v(" "),n("li",[v._v("设置8259A的中断屏蔽寄存器")]),v._v(" "),n("li",[v._v("可以使用忙等待来等待中断（实际情况CPU会执行其他操作，这里使用忙等待表示CPU在等待")])]),v._v(" "),n("p",[v._v("中断服务程序：")]),v._v(" "),n("ul",[n("li",[v._v("要尽量短")]),v._v(" "),n("li",[v._v("参数传递、临时变量要使用存储单元")]),v._v(" "),n("li",[v._v("向中断控制器8259A发送中断结束命令EOI")]),v._v(" "),n("li",[v._v("中断返回要用iret指令")])]),v._v(" "),n("h2",{attrs:{id:"定时-计数技术与可编程定时-计数器82538254"}},[v._v("定时、计数技术与可编程定时、计数器8253/8254")]),v._v(" "),n("h3",{attrs:{id:"概述-1"}},[v._v("概述")]),v._v(" "),n("ul",[n("li",[v._v("拥有3个独立的16位定时/计数器(T/C)")]),v._v(" "),n("li",[v._v("每个T/C可以：\n"),n("ul",[n("li",[v._v("按二进制或十进制计数")]),v._v(" "),n("li",[v._v("有6种不同的工作方式")]),v._v(" "),n("li",[v._v("最高频率10MHz")]),v._v(" "),n("li",[v._v("8254有读回状态功能")])])])]),v._v(" "),n("h3",{attrs:{id:"结构与管脚"}},[v._v("结构与管脚")]),v._v(" "),n("p",[n("img",{attrs:{src:t(913),alt:"6-19"}})]),v._v(" "),n("ul",[n("li",[v._v("面向CPU的信号线（用于编程\n"),n("ul",[n("li",[v._v("D7-D0三态双向数据线，用于读写控制字")]),v._v(" "),n("li",[v._v("~RD读信号线")]),v._v(" "),n("li",[v._v("~WR写信号线")]),v._v(" "),n("li",[v._v("~CS片选")]),v._v(" "),n("li",[v._v("A0&A1地址线，即此芯片占用了四个IO端口\n"),n("ul",[n("li",[v._v("00、01、10表示计数器0、1、2")]),v._v(" "),n("li",[v._v("11表示控制寄存器")])])])])]),v._v(" "),n("li",[v._v("面向IO的信号线（三组同样的信号\n"),n("ul",[n("li",[v._v("CLK计数时钟输入")]),v._v(" "),n("li",[v._v("GATE门控信号，为0时禁止时钟工作")]),v._v(" "),n("li",[v._v("OUT输出信号")])])])]),v._v(" "),n("p",[v._v("每个计数器的结构：")]),v._v(" "),n("p",[n("img",{attrs:{src:t(914),alt:""}})]),v._v(" "),n("p",[v._v("包含3个16位寄存器：")]),v._v(" "),n("ul",[n("li",[v._v("初值寄存器CR - 用于存放计数器初值，然后将初值装入CE。可以自动重载初值")]),v._v(" "),n("li",[v._v("计数单元CE - 减1计数器。CPU不能直接访问")]),v._v(" "),n("li",[v._v("当前计数值锁存器OL，跟随CE变化，收到锁存命令时锁存CE的值用于CPU的读取。读取之后恢复跟踪")])]),v._v(" "),n("h3",{attrs:{id:"编程"}},[v._v("编程")]),v._v(" "),n("ul",[n("li",[v._v("命令\n"),n("ul",[n("li",[v._v("初始化\n"),n("ul",[n("li",[v._v("设置工作方式")]),v._v(" "),n("li",[v._v("设置计数器初值")])])]),v._v(" "),n("li",[v._v("操作\n"),n("ul",[n("li",[v._v("重写计数器初值")]),v._v(" "),n("li",[v._v("取状态命令")])])])])]),v._v(" "),n("li",[v._v("状态\n"),n("ul",[n("li",[v._v("当前计数值")]),v._v(" "),n("li",[v._v("工作方式")]),v._v(" "),n("li",[v._v("状态")])])])]),v._v(" "),n("p",[v._v("上电后芯片的状态是未知的，需要初始化。"),n("strong",[v._v("先写控制字再写初值")])]),v._v(" "),n("p",[v._v("读OL：")]),v._v(" "),n("ul",[n("li",[v._v("直接读OL，必须使GATE无效（停止计时）或用外部逻辑停止CLK（停止计时），否则读OL可能不正确")]),v._v(" "),n("li",[v._v("或者使用锁存命令锁存CE到OL，然后再读")])]),v._v(" "),n("h3",{attrs:{id:"6种工作方式"}},[v._v("6种工作方式")]),v._v(" "),n("ul",[n("li",[v._v("方式0 - 计数结束中断\n"),n("ul",[n("li",[v._v("软件启动，不能自动重复（初值只有一次有效，然后就变FFFF")]),v._v(" "),n("li",[v._v("计数结束的上升沿可以作为中断请求信号")]),v._v(" "),n("li",[v._v("写入控制字后out为0")]),v._v(" "),n("li",[v._v("计数为0后out输出为1")]),v._v(" "),n("li",[v._v("设置初值后在下一个clk的下降沿置初值到CE")]),v._v(" "),n("li",[v._v("波形："),n("img",{attrs:{src:t(915),alt:""}})])])]),v._v(" "),n("li",[v._v("方式1 - 程序可控单稳触发器\n"),n("ul",[n("li",[v._v("硬件启动，不自动重复，负脉冲宽度可控")]),v._v(" "),n("li",[v._v("写入控制字后out为1")]),v._v(" "),n("li",[v._v("写入初值后计数器不开始计数")]),v._v(" "),n("li",[v._v("gate上升沿后，在下一个clk的下降沿置计数器初值到CE，out开始输出0")]),v._v(" "),n("li",[v._v("计数为0时out输出1")]),v._v(" "),n("li",[v._v("初值可多次有效，每次gate的上升沿会重置计数初值")]),v._v(" "),n("li",[v._v("波形："),n("img",{attrs:{src:t(916),alt:""}})])])]),v._v(" "),n("li",[v._v("方式2 - 频率发生器（略")]),v._v(" "),n("li",[v._v("方式3 - 方波发生器（略")]),v._v(" "),n("li",[v._v("方式4 - 软件触发的选通信号（略")]),v._v(" "),n("li",[v._v("方式5 - 硬件触发的选通信号（略")])]),v._v(" "),n("h3",{attrs:{id:"拓展定时"}},[v._v("拓展定时")]),v._v(" "),n("p",[v._v("当定时长度不够时，可以把"),n("strong",[v._v("多个计数通道串联")]),v._v("、甚至串联多个芯片实现计数范围拓展")])])}]};v.exports={attributes:{layout:"collection",title:"中断与定时技术",collection:"MicrocomputerPrincipleAndInterfaceTechnology"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},895:function(v,_,t){v.exports=t.p+"img/6-1.bd1044b.png"},896:function(v,_,t){v.exports=t.p+"img/6-2.0f5a3b1.png"},897:function(v,_,t){v.exports=t.p+"img/6-3.75e66db.png"},898:function(v,_,t){v.exports=t.p+"img/6-4.68454a7.png"},899:function(v,_,t){v.exports=t.p+"img/6-5.d33165d.png"},900:function(v,_,t){v.exports=t.p+"img/6-6.b92fa92.png"},901:function(v,_,t){v.exports=t.p+"img/6-17.27eb8df.png"},902:function(v,_,t){v.exports=t.p+"img/6-7.7d237f8.png"},903:function(v,_,t){v.exports=t.p+"img/6-9.6c92d36.png"},904:function(v,_,t){v.exports=t.p+"img/6-10.34bb95d.png"},905:function(v,_,t){v.exports=t.p+"img/6-11.67a51e4.png"},906:function(v,_,t){v.exports=t.p+"img/6-12.382eb8a.png"},907:function(v,_,t){v.exports=t.p+"img/6-13.c7b4e36.png"},908:function(v,_,t){v.exports=t.p+"img/6-14.261926e.png"},909:function(v,_,t){v.exports=t.p+"img/6-15.edfed6d.png"},910:function(v,_,t){v.exports=t.p+"img/6-16.e42cfaf.png"},911:function(v,_,t){v.exports=t.p+"img/6-18.2ae2f86.png"},912:function(v,_,t){v.exports=t.p+"img/6-8.568dd88.png"},913:function(v,_,t){v.exports=t.p+"img/6-19.d6bdbf0.png"},914:function(v,_,t){v.exports=t.p+"img/6-20.f2fc4c7.png"},915:function(v,_,t){v.exports=t.p+"img/6-21.a3b8464.png"},916:function(v,_,t){v.exports=t.p+"img/6-22.2ec7098.png"}}]);