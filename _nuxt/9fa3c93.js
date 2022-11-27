(window.webpackJsonp=window.webpackJsonp||[]).push([[38,515,516,517,518,519,520,521,522],{1347:function(v,_,t){const r={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"基本概念"}},[v._v("基本概念")]),v._v(" "),r("p",[v._v("**指令(Instruction)**指计算机执行某种操作的命令")]),v._v(" "),r("ul",[r("li",[v._v("高级语言 - 语句和用法与具体机器的指令系统无关")]),v._v(" "),r("li",[v._v("低级语言 - 面向机器的语言，和具体机器的指令系统密切相关")])]),v._v(" "),r("table",[r("thead",[r("tr",[r("th",[v._v("比较")]),v._v(" "),r("th",[v._v("高级语言")]),v._v(" "),r("th",[v._v("低级语言")])])]),v._v(" "),r("tbody",[r("tr",[r("td",[v._v("通用算法")]),v._v(" "),r("td",[v._v("有")]),v._v(" "),r("td",[v._v("有")])]),v._v(" "),r("tr",[r("td",[v._v("语言规则")]),v._v(" "),r("td",[v._v("少")]),v._v(" "),r("td",[v._v("多")])]),v._v(" "),r("tr",[r("td",[v._v("编程需要硬件知识")]),v._v(" "),r("td",[v._v("不需要")]),v._v(" "),r("td",[v._v("需要")])]),v._v(" "),r("tr",[r("td",[v._v("独立于机器")]),v._v(" "),r("td",[v._v("独立")]),v._v(" "),r("td",[v._v("不独立")])]),v._v(" "),r("tr",[r("td",[v._v("编程难易度")]),v._v(" "),r("td",[v._v("易")]),v._v(" "),r("td",[v._v("难")])]),v._v(" "),r("tr",[r("td",[v._v("编程时间")]),v._v(" "),r("td",[v._v("短")]),v._v(" "),r("td",[v._v("长")])]),v._v(" "),r("tr",[r("td",[v._v("程序执行时间")]),v._v(" "),r("td",[v._v("长")]),v._v(" "),r("td",[v._v("短")])]),v._v(" "),r("tr",[r("td",[v._v("编译过程中对计算机资源的占用")]),v._v(" "),r("td",[v._v("多")]),v._v(" "),r("td",[v._v("少")])])])]),v._v(" "),r("h2",{attrs:{id:"指令格式"}},[v._v("指令格式")]),v._v(" "),r("h3",{attrs:{id:"基础"}},[v._v("基础")]),v._v(" "),r("p",[r("strong",[v._v("指令字")]),v._v("（简称指令），即表示一条指令的机器字（机器码）")]),v._v(" "),r("p",[v._v("指令的构成：")]),v._v(" "),r("ul",[r("li",[v._v("操作码字段 - 定义操作")]),v._v(" "),r("li",[v._v("操作数地址字段 - 指定操作数的地址")])]),v._v(" "),r("p",[r("strong",[v._v("操作码")]),v._v("：表示指令对应的操作。操作码字段的长度取决于计算机指令系统的规模。如某指令系统有8条（种）指令，操作码只需3位即可。指令字中的操作码长度可以使固定的也可以是变长的")]),v._v(" "),r("h3",{attrs:{id:"按操作数地址数量分类"}},[v._v("按操作数地址数量分类")]),v._v(" "),r("p",[v._v("按照指令中操作数（地址）的个数X（类似于高级语言中函数的参数），可以把指令称为"),r("strong",[v._v("X操作数指令")]),v._v("或"),r("strong",[v._v("X地址指令")])]),v._v(" "),r("p",[v._v("通常指令可以根据操作数地址数量划分为：")]),v._v(" "),r("ul",[r("li",[v._v("三地址指令")]),v._v(" "),r("li",[v._v("二地址指令")]),v._v(" "),r("li",[v._v("一地址指令")]),v._v(" "),r("li",[v._v("零地址指令")])]),v._v(" "),r("p",[r("strong",[v._v("零地址指令")]),v._v("：只有操作码，没有地址码")]),v._v(" "),r("p",[r("strong",[v._v("一地址指令")]),v._v("：称为"),r("strong",[v._v("单操作数指令")]),v._v("，指令中只有一个操作数或者是指令默认以运算器中累加寄存器AC中的数为一个操作数，类似于高级语言函数中的默认参数。符号表达为"),r("code",{pre:!0},[v._v("(AC) OP (A) -> AC")]),v._v("，其中OP表示操作，AC和A表示地址。AC为累加寄存器地址。地址加括号表示取地址中的数据，类似于C语言中对指针的解引用")]),v._v(" "),r("p",[r("strong",[v._v("二地址指令")]),v._v("：称为"),r("strong",[v._v("双操作数指令")]),v._v("。两个地址码表明两个操作数的地址，结果存放在其中一个地址处。符号表达为"),r("code",{pre:!0},[v._v("(A1) OP (A2) -> A1")])]),v._v(" "),r("p",[r("strong",[v._v("三地址指令")]),v._v("：指令字中有三个操作数地址。符号表达为"),r("code",{pre:!0},[v._v("(A1) OP (A2) -> A3")]),v._v("。A1为"),r("strong",[v._v("被操作数地址")]),v._v("或"),r("strong",[v._v("源操作数地址")]),v._v("。A1为"),r("strong",[v._v("操作数地址")]),v._v("或"),r("strong",[v._v("终点操作数地址")]),v._v("。A3为存放结果的地址")]),v._v(" "),r("h3",{attrs:{id:"按照操作数的物理位置分类"}},[v._v("按照操作数的物理位置分类")]),v._v(" "),r("p",[v._v("操作数地址可以是存储器地址，也可以是寄存器地址。因此可以把指令分为以下三类")]),v._v(" "),r("ul",[r("li",[v._v("存储器-存储器(SS)型指令\n"),r("ul",[r("li",[v._v("参与操作的数都在内存里需多次访存。慢")])])]),v._v(" "),r("li",[v._v("寄存器-寄存器(RR)型指令\n"),r("ul",[r("li",[v._v("操作数都在寄存器中，从寄存器取操作数，结果也存放在寄存器。速度很快，不需要访存，但需要多个寄存器")])])]),v._v(" "),r("li",[v._v("寄存器-存储器(RS)型指令。既要访问存储器又要访问寄存器的指令")])]),v._v(" "),r("h3",{attrs:{id:"指令字长度"}},[v._v("指令字长度")]),v._v(" "),r("p",[v._v("即指令字中比特的个数")]),v._v(" "),r("p",[v._v("回忆-机器字长：计算机能处理的二进制数据的位数，决定了计算机的运算精度。"),r("strong",[v._v("机器字长通常和寄存器的位数一致")])]),v._v(" "),r("p",[v._v("指令分类：")]),v._v(" "),r("ul",[r("li",[v._v("单字长指令")]),v._v(" "),r("li",[v._v("半字长指令")]),v._v(" "),r("li",[v._v("双字长指令")])]),v._v(" "),r("p",[v._v("使用多字长指令，地址的位数更多，能够提供更大的地址空间，但是CPU必须两次或多次访问内存才能取出一条指令，降低了CPU的运算速度")]),v._v(" "),r("h3",{attrs:{id:"定长操作码与扩展操作码不定长操作码"}},[v._v("定长操作码与扩展操作码（不定长操作码）")]),v._v(" "),r("p",[v._v("定长操作码指令格式：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(646),alt:"4-1"}})]),v._v(" "),r("p",[v._v("显而易见的缺点：地址长度不统一（实际计算机中地址长度是统一的），存在没有被使用的位，浪费空间")]),v._v(" "),r("p",[v._v("所以诞生了变长操作码/扩展操作码：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(647),alt:"4-2"}})]),v._v(" "),r("h2",{attrs:{id:"指令助记符"}},[v._v("指令助记符")]),v._v(" "),r("p",[v._v("典型的指令助记符")]),v._v(" "),r("table",[r("thead",[r("tr",[r("th",[v._v("典型指令")]),v._v(" "),r("th",[v._v("助记符")])])]),v._v(" "),r("tbody",[r("tr",[r("td",[v._v("加法")]),v._v(" "),r("td",[v._v("ADD")])]),v._v(" "),r("tr",[r("td",[v._v("减法")]),v._v(" "),r("td",[v._v("SUB")])]),v._v(" "),r("tr",[r("td",[v._v("传送")]),v._v(" "),r("td",[v._v("MOV")])]),v._v(" "),r("tr",[r("td",[v._v("跳转")]),v._v(" "),r("td",[v._v("JMP")])]),v._v(" "),r("tr",[r("td",[v._v("转子")]),v._v(" "),r("td",[v._v("JSR")])]),v._v(" "),r("tr",[r("td",[v._v("存储")]),v._v(" "),r("td",[v._v("STR")])]),v._v(" "),r("tr",[r("td",[v._v("读取")]),v._v(" "),r("td",[v._v("LDA")])])])]),v._v(" "),r("h2",{attrs:{id:"指令与数据的寻址方式"}},[v._v("指令与数据的寻址方式")]),v._v(" "),r("p",[v._v("存储器既可以存放数据，也可以存放指令")]),v._v(" "),r("h3",{attrs:{id:"如何区分数据和指令"}},[v._v("如何区分数据和指令")]),v._v(" "),r("p",[v._v("从时间来说")]),v._v(" "),r("ul",[r("li",[v._v("取指令事件发生在"),r("strong",[v._v("取指周期")])]),v._v(" "),r("li",[v._v("取数据事件发生在"),r("strong",[v._v("执行周期")])])]),v._v(" "),r("p",[v._v("从空间来说")]),v._v(" "),r("ul",[r("li",[v._v("取出的代码是指令，一定"),r("strong",[v._v("送往指令寄存器（控制器）")])]),v._v(" "),r("li",[v._v("取出的代码是数据，一定送往"),r("strong",[v._v("数据寄存器（运算器）")])])]),v._v(" "),r("h3",{attrs:{id:"寻址方式概述"}},[v._v("寻址方式概述")]),v._v(" "),r("p",[v._v("在存储器中，写入或读出操作数/指令字的方式：")]),v._v(" "),r("ul",[r("li",[v._v("地址指定方式（"),r("strong",[v._v("几乎所有计算机都采用这种方式")]),v._v("）")]),v._v(" "),r("li",[v._v("相联存储方式")]),v._v(" "),r("li",[v._v("堆栈存取方式")])]),v._v(" "),r("p",[v._v("当"),r("strong",[v._v("采用地址指定方式")]),v._v("时，"),r("strong",[v._v("形成操作数或指令地址的方式")]),v._v("，称为"),r("strong",[v._v("寻址方式")])]),v._v(" "),r("p",[v._v("寻址方式：")]),v._v(" "),r("ul",[r("li",[v._v("指令寻址方式（简单）\n"),r("ul",[r("li",[v._v("顺序寻址方式")]),v._v(" "),r("li",[v._v("跳跃寻址方式")])])]),v._v(" "),r("li",[v._v("数据（操作数）寻址方式（复杂）\n"),r("ul",[r("li",[v._v("隐含寻址")]),v._v(" "),r("li",[v._v("立即寻址")]),v._v(" "),r("li",[v._v("直接寻址")]),v._v(" "),r("li",[v._v("间接寻址")]),v._v(" "),r("li",[v._v("寄存器寻址")]),v._v(" "),r("li",[v._v("寄存器间接寻址")]),v._v(" "),r("li",[v._v("偏移寻址\n"),r("ul",[r("li",[v._v("相对寻址")]),v._v(" "),r("li",[v._v("基址寻址")]),v._v(" "),r("li",[v._v("变址寻址")])])]),v._v(" "),r("li",[v._v("段寻址")]),v._v(" "),r("li",[v._v("堆栈寻址")])])])]),v._v(" "),r("h3",{attrs:{id:"顺序指令寻址"}},[v._v("顺序指令寻址")]),v._v(" "),r("p",[v._v("通常执行程序时是一条指令接一条指令的顺序执行")]),v._v(" "),r("p",[v._v("从内存取出第一条指令，然后执行，然后取出第二条，然后执行，然后取出第三条，然后执行。。。")]),v._v(" "),r("p",[v._v("需要使用"),r("strong",[v._v("程序计数器PC（又称指令指针寄存器）"),r("strong",[v._v("存放")]),v._v("下一条指令")]),v._v("的地址")]),v._v(" "),r("p",[v._v("指令顺序寻址示意图：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(648),alt:"4-3"}})]),v._v(" "),r("h3",{attrs:{id:"跳跃指令寻址"}},[v._v("跳跃指令寻址")]),v._v(" "),r("p",[v._v("程序根据条件需要跳跃执行时采取跳跃寻址，即下一条指令的地址码不是由PC给出，而是由本条指令给出。即"),r("strong",[v._v("本条指令改变PC内数据")]),v._v("（因为PC内是下一条指令地址），本条指令执行结束后会跳到PC指向的地址")]),v._v(" "),r("p",[v._v("跳跃后继续顺序执行指令，PC也要跟着改变")]),v._v(" "),r("p",[v._v("使用跳跃可以实现程序转移与循环")]),v._v(" "),r("p",[v._v("指令跳跃寻址示意图：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(649),alt:"4-4"}})]),v._v(" "),r("h3",{attrs:{id:"操作数隐含寻址"}},[v._v("操作数隐含寻址")]),v._v(" "),r("p",[v._v("隐含寻址：在指令中不显示给出操作数。如某些单地址指令拥有隐含的操作数AC")]),v._v(" "),r("h3",{attrs:{id:"操作数立即寻址"}},[v._v("操作数立即寻址")]),v._v(" "),r("p",[v._v("即"),r("strong",[v._v("指令的地址字段给出的不是操作数地址，而是操作数本身")]),v._v("。准确来说根本没有寻址")]),v._v(" "),r("p",[v._v("这种指令执行速度快，不需要访存，取指的同时就取到了操作数")]),v._v(" "),r("h3",{attrs:{id:"操作数直接寻址"}},[v._v("操作数直接寻址")]),v._v(" "),r("p",[v._v("最“正常”的寻址方式。即指令的操作数字段内容为操作数的地址A，CPU去地址A取出数据D。可以表示为"),r("code",{pre:!0},[v._v("D = (A)")]),v._v("，和之前说的一样，括号可以视为C语言中对指针的解引用")]),v._v(" "),r("h3",{attrs:{id:"操作数间接寻址"}},[v._v("操作数间接寻址")]),v._v(" "),r("p",[v._v("指令的操作数字段给出了地址A1，但是"),r("code",{pre:!0},[v._v("(A1)")]),v._v("也是一个指针（地址），指向了另一个地址A2，即"),r("code",{pre:!0},[v._v("A2 = (A1)")]),v._v("，地址A2指向的才是数据D，即"),r("code",{pre:!0},[v._v("D = (A2) = ((A1))")])]),v._v(" "),r("p",[v._v("因为地址A2可以有很多位，所以间接寻址可以扩大寻址范围")]),v._v(" "),r("p",[v._v("需要两次访存，速度慢，早期曾主流，现在已不太使用")]),v._v(" "),r("h3",{attrs:{id:"操作数寄存器寻址"}},[v._v("操作数寄存器寻址")]),v._v(" "),r("p",[v._v("指令中地址字段给出的不是内存地址而是CPU中通用寄存器的"),r("strong",[v._v("编号")]),v._v("。假设编号为R，则数据"),r("code",{pre:!0},[v._v("D = (R)")])]),v._v(" "),r("h3",{attrs:{id:"操作数寄存器间接寻址"}},[v._v("操作数寄存器间接寻址")]),v._v(" "),r("p",[v._v("类似于间接寻址，寄存器R的内容A不是数据而是一个地址。操作数"),r("code",{pre:!0},[v._v("D = (A) = ((R))")])]),v._v(" "),r("h3",{attrs:{id:"操作数偏移寻址"}},[v._v("操作数偏移寻址")]),v._v(" "),r("p",[v._v("是"),r("strong",[v._v("直接寻址")]),v._v("和"),r("strong",[v._v("寄存器间接寻址")]),v._v("方式的结合")]),v._v(" "),r("p",[v._v("大致思想：目标地址"),r("code",{pre:!0},[v._v("EA = (R) + A")]),v._v("，R是一个寄存器的编号，A是指令字中给出的一个"),r("strong",[v._v("偏移量（形式地址）")]),v._v("，是"),r("strong",[v._v("有符号数")]),v._v("，即"),r("strong",[v._v("可以为负")])]),v._v(" "),r("p",[v._v("分为三类：")]),v._v(" "),r("ul",[r("li",[v._v("相对寻址\n"),r("ul",[r("li",[v._v("即相对于当前PC的寻址。把PC的内容加上偏移量A")]),v._v(" "),r("li",[v._v("优点是程序员不需要使用绝对地址编程")])])]),v._v(" "),r("li",[v._v("基址寻址\n"),r("ul",[r("li",[v._v("CPU中的"),r("strong",[v._v("基址寄存器")]),v._v("的内容加上偏移量A")]),v._v(" "),r("li",[v._v("优点是扩大寻址范围。基址寄存器的位数可以设置的很长")])])]),v._v(" "),r("li",[v._v("变址寻址\n"),r("ul",[r("li",[v._v("CPU中的"),r("strong",[v._v("变址寄存器")]),v._v("的内容加上偏移量A")]),v._v(" "),r("li",[v._v("与基址寻址类似，但是"),r("strong",[v._v("变址寄存器的内容自动递增或递减")])]),v._v(" "),r("li",[v._v("使用变址寻址的目的不在于扩大寻址空间，而是实现"),r("strong",[v._v("程序块")]),v._v("的"),r("strong",[v._v("规律性变化")])])])])]),v._v(" "),r("h3",{attrs:{id:"操作数段寻址"}},[v._v("操作数段寻址")]),v._v(" "),r("p",[v._v("基于基址寻址。只是把地址空间划分为段")]),v._v(" "),r("p",[v._v("某计算机有20位地址。容量1MB。以64KB为单位划分为16段。则可以把20位地址划分为一个4位段号和一个16位段内偏移量。CPU内有一个"),r("strong",[v._v("段寄存器")]),v._v("保存一个段号，计算地址时把段号左移16位再加上偏移量即可")]),v._v(" "),r("h3",{attrs:{id:"堆栈寻址"}},[v._v("堆栈寻址")]),v._v(" "),r("p",[v._v("使用栈，数据的存取只通过栈顶进行。后进先出LIFO")]),v._v(" "),r("p",[v._v("可以分为：")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("寄存器堆栈")])])]),v._v(" "),r("p",[v._v("存储区域为若干个寄存器。CPU中有一组专门的"),r("strong",[v._v("串联堆栈寄存器")]),v._v("，每个寄存器能保存一个字")]),v._v(" "),r("p",[v._v("入栈和出栈时"),r("strong",[v._v("栈顶不变，数据移动")]),v._v("，即栈顶的地址为定值")]),v._v(" "),r("p",[r("img",{attrs:{src:t(650),alt:"4-6"}})]),v._v(" "),r("p",[v._v("优点：访问速度快")]),v._v(" "),r("p",[v._v("缺点：堆栈大小受限。"),r("strong",[v._v("数据的读出是破坏性的")])]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("存储器堆栈")])])]),v._v(" "),r("p",[v._v("存储区域为主存的一部分。需要一个"),r("strong",[v._v("堆栈指示器")]),v._v("来指示栈顶位置。CPU中有一个专用的寄存器作为堆栈指示器(SP: Stack Point)")]),v._v(" "),r("p",[v._v("栈顶变化时由SP指示而数据不动")]),v._v(" "),r("p",[v._v("优点：比串联堆栈灵活。长度几乎不受限。个数也不受限。对存储器寻址的指令对堆栈同样适用")]),v._v(" "),r("p",[v._v("压栈操作：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(651),alt:"4-7"}})]),v._v(" "),r("p",[v._v("对应的表达式："),r("code",{pre:!0},[v._v("(A) -> (SP), SP - 1 -> SP")]),v._v("。此处使用的策略是"),r("strong",[v._v("栈顶指向空单元")]),v._v("，即"),r("strong",[v._v("先压数据再移动指针")]),v._v("，"),r("strong",[v._v("栈顶为空")]),v._v("。当然也可以使"),r("strong",[v._v("栈顶指向满单元")]),v._v("（略）")]),v._v(" "),r("p",[v._v("弹栈操作：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(652),alt:"4-8"}})]),v._v(" "),r("p",[v._v("对应表达式："),r("code",{pre:!0},[v._v("SP + 1 -> SP, (SP) -> A")]),v._v("。在栈顶指向空单元策略下"),r("strong",[v._v("先移动指针再读取数据")])]),v._v(" "),r("h3",{attrs:{id:"使用标志位区分寻址方式"}},[v._v("使用标志位区分寻址方式")]),v._v(" "),r("p",[r("img",{attrs:{src:t(653),alt:"4-5"}})]),v._v(" "),r("p",[v._v("即在指令字中除了操作码和操作数地址外给出若干个寻址方式标志位（特征位）来说明寻址方式")]),v._v(" "),r("h3",{attrs:{id:"基本寻址方式总结"}},[v._v("基本寻址方式总结")]),v._v(" "),r("p",[v._v("令指令字中的地址字段为A，R为寄存器，SP为栈顶指针，EA为实际地址，操作数为D，"),r("code",{pre:!0},[v._v("D = (EA)")])]),v._v(" "),r("table",[r("thead",[r("tr",[r("th",[v._v("方式")]),v._v(" "),r("th",[v._v("算法")]),v._v(" "),r("th",[v._v("优点")]),v._v(" "),r("th",[v._v("缺点")])])]),v._v(" "),r("tbody",[r("tr",[r("td",[v._v("隐含寻址")]),v._v(" "),r("td",[v._v("默认操作数地址")]),v._v(" "),r("td",[v._v("不访存")]),v._v(" "),r("td",[v._v("数据范围受限")])]),v._v(" "),r("tr",[r("td",[v._v("立即寻址")]),v._v(" "),r("td",[v._v("D = A")]),v._v(" "),r("td",[v._v("不访存")]),v._v(" "),r("td",[v._v("操作数值范围受限")])]),v._v(" "),r("tr",[r("td",[v._v("直接寻址")]),v._v(" "),r("td",[v._v("EA = A")]),v._v(" "),r("td",[v._v("简单")]),v._v(" "),r("td",[v._v("地址范围受限")])]),v._v(" "),r("tr",[r("td",[v._v("间接寻址")]),v._v(" "),r("td",[v._v("EA = (A)")]),v._v(" "),r("td",[v._v("地址范围大")]),v._v(" "),r("td",[v._v("多次访存")])]),v._v(" "),r("tr",[r("td",[v._v("寄存器寻址")]),v._v(" "),r("td",[v._v("EA = R")]),v._v(" "),r("td",[v._v("不访存")]),v._v(" "),r("td",[v._v("地址范围受限")])]),v._v(" "),r("tr",[r("td",[v._v("寄存器间接寻址")]),v._v(" "),r("td",[v._v("EA = ®")]),v._v(" "),r("td",[v._v("地址范围大")]),v._v(" "),r("td",[v._v("访存")])]),v._v(" "),r("tr",[r("td",[v._v("偏移寻址")]),v._v(" "),r("td",[v._v("EA = A + ®")]),v._v(" "),r("td",[v._v("灵活")]),v._v(" "),r("td",[v._v("复杂")])]),v._v(" "),r("tr",[r("td",[v._v("段寻址")]),v._v(" "),r("td",[v._v("EA = A + ®")]),v._v(" "),r("td",[v._v("灵活")]),v._v(" "),r("td",[v._v("复杂")])]),v._v(" "),r("tr",[r("td",[v._v("堆栈寻址")]),v._v(" "),r("td",[v._v("EA = SP")]),v._v(" "),r("td",[v._v("不访存")]),v._v(" "),r("td",[v._v("应用受限")])])])]),v._v(" "),r("h2",{attrs:{id:"复杂指令系统与精简指令系统"}},[v._v("复杂指令系统与精简指令系统")]),v._v(" "),r("h3",{attrs:{id:"复杂指令系统计算机cisc"}},[v._v("复杂指令系统计算机CISC")]),v._v(" "),r("ul",[r("li",[v._v("指令系统庞大，指令条数可达几百条")]),v._v(" "),r("li",[v._v("指令长度不固定，指令格式种类多，寻址方式种类多")]),v._v(" "),r("li",[v._v("能够访存的指令不受限制")]),v._v(" "),r("li",[v._v("各种指令使用频度差别大")]),v._v(" "),r("li",[v._v("各种指令执行时间差别大，不利于流水线")]),v._v(" "),r("li",[v._v("一般采用微程序控制")]),v._v(" "),r("li",[v._v("难以优化编译生成高效目标代码")])]),v._v(" "),r("p",[v._v("复杂指令系统给很多运算设置了独立的指令。比如二进制加减法有指令，十进制加减法也有自己的指令（而不是使用二进制加减法实现），甚至十六进制也有自己的指令。或者乘除法也有自己的指令而不是通过加减法指令实现")]),v._v(" "),r("h3",{attrs:{id:"精简指令系统计算机risc"}},[v._v("精简指令系统计算机RISC")]),v._v(" "),r("ul",[r("li",[v._v("选取使用频率最高的简单指令，"),r("strong",[v._v("指令条数少")])]),v._v(" "),r("li",[r("strong",[v._v("指令长度固定，指令格式种类少，寻址方式种类少")])]),v._v(" "),r("li",[r("strong",[v._v("只有取数/存数指令访存")]),v._v("。其余指令都在寄存器之间进行")]),v._v(" "),r("li",[r("strong",[v._v("指令功能简单，控制器多使用硬布线")])]),v._v(" "),r("li",[v._v("CPU中通用寄存器多，减少访存")]),v._v(" "),r("li",[v._v("大部分指令能在一个机器周期完成，利于流水线")]),v._v(" "),r("li",[v._v("使用硬布线控制逻辑，控制器简单，留出更多芯片空间来实现大容量cache")]),v._v(" "),r("li",[v._v("注重编译的优化")])]),v._v(" "),r("p",[v._v("即指实现简单的指令。复杂指令通过简单指令的组合实现")]),v._v(" "),r("h2",{attrs:{id:"典型指令"}},[v._v("典型指令")]),v._v(" "),r("ul",[r("li",[v._v("数据传送指令\n"),r("ul",[r("li",[v._v("一般传送")]),v._v(" "),r("li",[v._v("数据交换")]),v._v(" "),r("li",[v._v("堆栈操作")])])]),v._v(" "),r("li",[v._v("算术运算指令\n"),r("ul",[r("li",[v._v("定点浮点加减乘除")]),v._v(" "),r("li",[v._v("加一、减一")]),v._v(" "),r("li",[v._v("求反、求补")]),v._v(" "),r("li",[v._v("移位、比较")]),v._v(" "),r("li",[v._v("十进制加减")])])]),v._v(" "),r("li",[v._v("逻辑运算指令")]),v._v(" "),r("li",[v._v("程序控制指令（转移指令）\n"),r("ul",[r("li",[v._v("条件转移")]),v._v(" "),r("li",[v._v("无条件转移")]),v._v(" "),r("li",[v._v("转子程序")]),v._v(" "),r("li",[v._v("返回主程序")]),v._v(" "),r("li",[v._v("中断返回")])])]),v._v(" "),r("li",[v._v("输入输出指令")]),v._v(" "),r("li",[v._v("串处理指令\n"),r("ul",[r("li",[v._v("串传送")]),v._v(" "),r("li",[v._v("串存储")]),v._v(" "),r("li",[v._v("串加载")]),v._v(" "),r("li",[v._v("串比较")]),v._v(" "),r("li",[v._v("串扫描")])])]),v._v(" "),r("li",[v._v("特权指令（一般不提供给用于，只能操作系统使用）\n"),r("ul",[r("li",[v._v("系统资源分配管理")]),v._v(" "),r("li",[v._v("系统工作方式设置")]),v._v(" "),r("li",[v._v("用户访问权限检测")]),v._v(" "),r("li",[v._v("段表、页表的修改")]),v._v(" "),r("li",[v._v("任务的创建和切换")])])]),v._v(" "),r("li",[v._v("其他指令\n"),r("ul",[r("li",[v._v("状态寄存器置位、复位")]),v._v(" "),r("li",[v._v("测试")]),v._v(" "),r("li",[v._v("停机")]),v._v(" "),r("li",[v._v("空操作")])])])])])}]};v.exports={attributes:{layout:"collection",title:"指令系统",collection:"ComputerOrganizationPrinciple"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}},646:function(v,_,t){v.exports=t.p+"img/4-1.63f2893.png"},647:function(v,_,t){v.exports=t.p+"img/4-2.b268023.png"},648:function(v,_,t){v.exports=t.p+"img/4-3.62956e6.png"},649:function(v,_,t){v.exports=t.p+"img/4-4.3c3715e.png"},650:function(v,_,t){v.exports=t.p+"img/4-6.5381468.png"},651:function(v,_,t){v.exports=t.p+"img/4-7.647c28e.png"},652:function(v,_,t){v.exports=t.p+"img/4-8.9e315d1.png"},653:function(v,_,t){v.exports=t.p+"img/4-5.d6b0155.png"}}]);