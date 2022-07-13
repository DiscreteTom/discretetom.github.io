(window.webpackJsonp=window.webpackJsonp||[]).push([[10,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530],{1324:function(v,_,t){const r={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"cpu的功能"}},[v._v("CPU的功能")]),v._v(" "),r("ul",[r("li",[v._v("指令控制\n"),r("ul",[r("li",[v._v("控制程序按照顺序执行")])])]),v._v(" "),r("li",[v._v("操作控制\n"),r("ul",[r("li",[v._v("传送不同的信号")])])]),v._v(" "),r("li",[v._v("时间控制\n"),r("ul",[r("li",[v._v("各种操作的同步")])])]),v._v(" "),r("li",[v._v("数据加工\n"),r("ul",[r("li",[v._v("算数逻辑运算")])])]),v._v(" "),r("li",[v._v("中断处理\n"),r("ul",[r("li",[v._v("对异常情况和特殊请求的处理")])])])]),v._v(" "),r("h2",{attrs:{id:"cpu的基本组成"}},[v._v("CPU的基本组成")]),v._v(" "),r("h3",{attrs:{id:"控制器与运算器"}},[v._v("控制器与运算器")]),v._v(" "),r("ul",[r("li",[v._v("控制器\n"),r("ul",[r("li",[v._v("由"),r("strong",[v._v("程序计数器PC")]),v._v("、"),r("strong",[v._v("指令寄存器IR")]),v._v("、"),r("strong",[v._v("指令译码器")]),v._v("、"),r("strong",[v._v("操作控制器和时序产生器")]),v._v("组成")])])]),v._v(" "),r("li",[v._v("运算器\n"),r("ul",[r("li",[v._v("由"),r("strong",[v._v("算数逻辑单元ALU")]),v._v("、"),r("strong",[v._v("累加寄存器AC")]),v._v("、"),r("strong",[v._v("数据缓冲寄存器DR")]),v._v("和"),r("strong",[v._v("状态条件寄存器PSW")]),v._v("组成")])])])]),v._v(" "),r("h3",{attrs:{id:"重要的寄存器"}},[v._v("重要的寄存器")]),v._v(" "),r("ul",[r("li",[v._v("数据缓冲寄存器"),r("strong",[v._v("DR")]),v._v(" "),r("ul",[r("li",[v._v("存放从cache读出的字或来自外部接口的字或ALU运算结果")]),v._v(" "),r("li",[v._v("写数据cache时也先用DR暂存")]),v._v(" "),r("li",[v._v("用来作为ALU运算结果和通用寄存器之间信息传送时时间上的缓冲")]),v._v(" "),r("li",[v._v("补偿CPU和内存、外设之间速度的差别")])])]),v._v(" "),r("li",[v._v("指令寄存器"),r("strong",[v._v("IR")]),v._v(" "),r("ul",[r("li",[v._v("用来保存当前正在执行的一条指令")]),v._v(" "),r("li",[v._v("指令的操作码会流向指令译码器，译码后即可向控制器发出信号")])])]),v._v(" "),r("li",[v._v("程序计数器"),r("strong",[v._v("PC")]),v._v(" "),r("ul",[r("li",[v._v("也叫指令计数器。用来保存"),r("strong",[v._v("下一条指令")]),v._v("的地址")]),v._v(" "),r("li",[v._v("程序开始执行前先把程序的第一条指令所在地址置入PC")]),v._v(" "),r("li",[v._v("CPU会自行修改PC的值")])])]),v._v(" "),r("li",[v._v("地址寄存器"),r("strong",[v._v("AR")]),v._v(" "),r("ul",[r("li",[v._v("用来保存当前处理器访问的数据cache中的单元地址")])])]),v._v(" "),r("li",[v._v("通用寄存器R0-R3\n"),r("ul",[r("li",[v._v("不同的计算机的通用寄存器数量不同。可以几十上百个。教学举例通常使用四个")]),v._v(" "),r("li",[v._v("为ALU提供暂存数据的工作区")]),v._v(" "),r("li",[v._v("其中的累加寄存器"),r("strong",[v._v("AC")]),v._v("暂存ALU的运算结果")])])]),v._v(" "),r("li",[v._v("状态条件寄存器"),r("strong",[v._v("PSW")]),v._v(" "),r("ul",[r("li",[v._v("根据算数结果、逻辑指令等信息得到了状态条件")]),v._v(" "),r("li",[v._v("包括运算结果进位标志C，运算结果溢出标志V，运算结果为0表示Z，最算结果为负标志N")]),v._v(" "),r("li",[v._v("每个标志位由一个触发器保存")]),v._v(" "),r("li",[v._v("保存中断和系统工作状态等信息")])])])]),v._v(" "),r("h3",{attrs:{id:"数据通路"}},[v._v("数据通路")]),v._v(" "),r("p",[v._v("各寄存器之间、寄存器与ALU之间传送数据的通路称为数据通路。信息从哪里出发，中间经过哪个寄存器或多路开关，最后传送到哪个寄存器，都要加以控制。")]),v._v(" "),r("p",[v._v("在各寄存器之间建立数据通路的任务由"),r("strong",[v._v("操作控制器")]),v._v("完成")]),v._v(" "),r("h3",{attrs:{id:"操作控制器"}},[v._v("操作控制器")]),v._v(" "),r("p",[v._v("根据指令操作码和时序信号，产生各种操作控制信号，以便正确地建立数据通路")]),v._v(" "),r("p",[v._v("根据设计方法不同，操作控制器可以分为")]),v._v(" "),r("ul",[r("li",[v._v("时序逻辑型 - 使用时序逻辑技术实现，称为"),r("strong",[v._v("硬布线控制器")])]),v._v(" "),r("li",[v._v("存储逻辑型 - 使用存储逻辑实现，称为"),r("strong",[v._v("微程序控制器")])])]),v._v(" "),r("h3",{attrs:{id:"时序产生器"}},[v._v("时序产生器")]),v._v(" "),r("p",[v._v("对各种操作信号进行时间上先后顺序的控制")]),v._v(" "),r("h2",{attrs:{id:"指令周期"}},[v._v("指令周期")]),v._v(" "),r("h3",{attrs:{id:"基本概念"}},[v._v("基本概念")]),v._v(" "),r("p",[v._v("冯诺依曼机，即存储程序式计算机，在程序运行前需要把程序和数据放入内存")]),v._v(" "),r("p",[v._v("执行程序流程：")]),v._v(" "),r("ol",[r("li",[v._v("把程序首地址送入PC")]),v._v(" "),r("li",[v._v("从内存cache中取指，执行，并形成下一条指令的地址")]),v._v(" "),r("li",[v._v("自动执行直到程序的最后一条指令")])]),v._v(" "),r("p",[v._v("也就是“取指-执行”的循环")]),v._v(" "),r("p",[r("strong",[v._v("指令周期")]),v._v("是指“"),r("strong",[v._v("取指令、分析指令并执行指令所需的总时间")]),v._v("”")]),v._v(" "),r("p",[v._v("由于各种指令功能不同，所以各种指令的周期长度可能不同")]),v._v(" "),r("p",[v._v("三个周期：")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("时钟周期")]),v._v("，处理操作的基本单位，也称为节拍脉冲或T周期")]),v._v(" "),r("li",[r("strong",[v._v("CPU周期")]),v._v("，也称"),r("strong",[v._v("机器周期")]),v._v("，指"),r("strong",[v._v("从内存中读取一个指令字的最短时间")]),v._v("，通常包含若干个时钟周期")]),v._v(" "),r("li",[r("strong",[v._v("指令周期通常包含若干个CPU周期")])])]),v._v(" "),r("p",[r("img",{attrs:{src:t(650),alt:"5-1"}})]),v._v(" "),r("h3",{attrs:{id:"rr型指令举例-mov指令的指令周期"}},[v._v("RR型指令举例 - MOV指令的指令周期")]),v._v(" "),r("p",[r("strong",[v._v("不同的CPU结构会影响指令周期")])]),v._v(" "),r("p",[v._v("本例中使用的CPU模型如下")]),v._v(" "),r("p",[r("img",{attrs:{src:t(418),alt:"5-4"}})]),v._v(" "),r("p",[v._v("MOV的指令周期如下：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(651),alt:"5-2"}})]),v._v(" "),r("p",[v._v("MOV指令是RR型指令，只有取指需要访存，所以只要两个CPU周期即可。一个CPU周期取指（回忆-CPU周期是从内存取出一个指令字的最短时间），另一个周期执行。执行不需要访存，寄存器之间的操作非常迅速，所以会在一个CPU周期内完成。而指令周期的最小单位是CPU周期，所以MOV需要两个完整的CPU周期")]),v._v(" "),r("p",[v._v("取指周期图示：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(418),alt:"5-4"}})]),v._v(" "),r("p",[v._v("取指阶段：")]),v._v(" "),r("ol",[r("li",[v._v("根据PC从内存中取出指令")]),v._v(" "),r("li",[v._v("指令译码或测试（逻辑电路而非时序电路，不花费时间）")]),v._v(" "),r("li",[v._v("PC+1")])]),v._v(" "),r("p",[v._v("对应的操作:")]),v._v(" "),r("ul",[r("li",[v._v("PC -> ABUS(I)")]),v._v(" "),r("li",[v._v("IBUS ->IR")]),v._v(" "),r("li",[v._v("PC + 1")])]),v._v(" "),r("h3",{attrs:{id:"rs型指令举例-lad指令的指令周期"}},[v._v("RS型指令举例 - LAD指令的指令周期")]),v._v(" "),r("p",[v._v("LAD指令为RS型指令，需要三个CPU周期")]),v._v(" "),r("p",[r("img",{attrs:{src:t(652),alt:"5-3"}})]),v._v(" "),r("ol",[r("li",[r("strong",[v._v("所有指令的取指阶段都是一样的")]),v._v("，取指花费一个CPU周期")]),v._v(" "),r("li",[v._v("把指令中的地址字段交给地址寄存器AR。此过程不访存，花费不到一个CPU周期，但是数据通过DBUS到达AR，占用了总线，所以按照一个CPU周期计算")]),v._v(" "),r("li",[r("strong",[v._v("从内存中")]),v._v("取出数据到DR（回忆-DR为数据缓冲寄存器，几乎一切数据都要经过DR再到目的地），通过DBUS，需要一个完整的CPU周期")]),v._v(" "),r("li",[v._v("DR把数据交给通用寄存器R0，不访存，不使用总线，花费不到一个CPU周期，可以和上面的操作一起完成")])]),v._v(" "),r("h3",{attrs:{id:"各指令的指令周期小结"}},[v._v("各指令的指令周期小结")]),v._v(" "),r("p",[v._v("判断一个过程是否占用一整个CPU周期，判断依据1：有没有访存，因为每次访存会消耗一个CPU周期；判断依据2：有没有多个操作占用同一条总线。如果有则把两个操作放置到两个CPU周期中。无总线冲突且不访存的操作可以和前面的访存操作合并在一个CPU周期中")]),v._v(" "),r("p",[v._v("取指操作中在把指令放入指令寄存器/指令译码器之后要等待下一个CPU周期来执行指令")]),v._v(" "),r("h2",{attrs:{id:"方框图语言"}},[v._v("方框图语言")]),v._v(" "),r("h3",{attrs:{id:"方框图语言基础"}},[v._v("方框图语言基础")]),v._v(" "),r("p",[v._v("进行中央处理器设计时可以使用方框图语言描述一条指令的指令周期")]),v._v(" "),r("ul",[r("li",[v._v("方框 - "),r("strong",[v._v("代表一个CPU周期")]),v._v("，方框中的内容表示此CPU周期内数据通路的操作或某些控制操作。")]),v._v(" "),r("li",[v._v("菱形 - 用来表示某种判别或测试，在时间上依附于前面方框的CPU周期。菱形自身不占用CPU周期")])]),v._v(" "),r("p",[v._v("本CPU结构下的五条经典指令的指令周期：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(653),alt:"5-5"}})]),v._v(" "),r("p",[v._v("指令执行结束之后的曲线为"),r("strong",[v._v("公操作符号")]),v._v("，表示指令已经执行完毕，转入"),r("strong",[v._v("公操作")]),v._v("，公操作为CPU在指令执行结束后执行的一系列操作，如中断处理等")]),v._v(" "),r("h3",{attrs:{id:"例题"}},[v._v("例题")]),v._v(" "),r("p",[r("img",{attrs:{src:t(654),alt:"5-6"}})]),v._v(" "),r("p",[v._v('在这样的一个双总线结构的CPU中，画出"ADD R2, R0"指令完成'),r("code",{pre:!0},[v._v("(R0)+(R2)->R0")]),v._v("操作的指令周期图")]),v._v(" "),r("p",[v._v("因为此CPU中的双总线结构，几乎每两个相邻的操作都有总线冲突，所以每个操作都需要一个CPU周期")]),v._v(" "),r("p",[v._v("指令周期方框图如下（方框内为操作，方框右侧为此CPU周期内为了实现操作而发出的控制信号）：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(655),alt:"5-7"}})]),v._v(" "),r("h2",{attrs:{id:"时序产生器-1"}},[v._v("时序产生器")]),v._v(" "),r("p",[v._v("如何识别二进制码是指令还是数据？如果是取指阶段读出的那就是指令，如果是执行阶段读出的那就是数据。被送往指令寄存器的是指令，被送往运算器的是数据")]),v._v(" "),r("h3",{attrs:{id:"时序信号产生器的组成"}},[v._v("时序信号产生器的组成")]),v._v(" "),r("ul",[r("li",[v._v("时钟源")]),v._v(" "),r("li",[v._v("环形脉冲发生器")]),v._v(" "),r("li",[v._v("节拍脉冲和读写时序的译码")]),v._v(" "),r("li",[v._v("启停控制逻辑")])]),v._v(" "),r("p",[v._v("结构框图：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(656),alt:"5-8"}})]),v._v(" "),r("p",[v._v("输出信号：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(657),alt:"5-9"}})]),v._v(" "),r("h3",{attrs:{id:"启停控制逻辑的控制方式"}},[v._v("启停控制逻辑的控制方式")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("同步控制方式")])])]),v._v(" "),r("p",[v._v("任何情况下各指令执行时所需的机器周期数和时钟周期数固定不变")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("异步控制方式")])])]),v._v(" "),r("p",[v._v("每条指令或操作按需占用时间。需要使用"),r("strong",[v._v("应答机制")]),v._v("。没有时间上的浪费，但是控制复杂")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("联合控制方式")])])]),v._v(" "),r("p",[v._v("结合以上两种控制方式。大部分操作序列安排在固定的机器周期中。个别的难以确定的操作则以执行部件的“应答”信号作为操作的结束")]),v._v(" "),r("h2",{attrs:{id:"微程序控制器"}},[v._v("微程序控制器")]),v._v(" "),r("h3",{attrs:{id:"基本概念-1"}},[v._v("基本概念")]),v._v(" "),r("p",[v._v("使用软件的思想设计硬件")]),v._v(" "),r("p",[v._v("与硬布线控制器相比较，具有规整性、灵活性、可维护性等一系列优点")]),v._v(" "),r("p",[v._v("基本思想：把每条"),r("strong",[v._v("指令")]),v._v("视为一个"),r("strong",[v._v("微程序")]),v._v("，每个微程序由一系列"),r("strong",[v._v("微指令")]),v._v("组成，每个微指令由一系列"),r("strong",[v._v("微命令")]),v._v("。所有微程序存储在**控制存储器（只读）**中")]),v._v(" "),r("p",[v._v("每条微命令对应一个"),r("strong",[v._v("微操作")]),v._v("，即一个信号的变化")]),v._v(" "),r("h3",{attrs:{id:"微操作分类"}},[v._v("微操作分类")]),v._v(" "),r("ul",[r("li",[v._v("相容性操作 - 可以在同一个CPU周期内并行执行的微操作")]),v._v(" "),r("li",[v._v("相斥性操作 - 不能同时或在同一个CPU周期内并行执行的微操作")])]),v._v(" "),r("h3",{attrs:{id:"微指令"}},[v._v("微指令")]),v._v(" "),r("p",[v._v("在一个CPU中期内一组实现一定操作的微命令的组合，构成一条微指令")]),v._v(" "),r("p",[v._v("微指令需要具备的功能：")]),v._v(" "),r("ul",[r("li",[v._v("提供一条机器指令的一个步骤所需要的控制信号，以实现执行该步骤的操作功能")]),v._v(" "),r("li",[v._v("提供下一条微指令的地址，以便自动有序地执行微指令")])]),v._v(" "),r("p",[r("strong",[v._v("微指令基本格式")]),v._v("：由"),r("strong",[v._v("操作控制字段")]),v._v("和"),r("strong",[v._v("顺序控制字段")]),v._v("组成")]),v._v(" "),r("p",[r("img",{attrs:{src:t(419),alt:"5-10"}})]),v._v(" "),r("p",[v._v("操作控制字段用来发出控制信号，每一位为一个微命令（即单个信号）。控制信号都是节拍点位信号，持续时间为一个CPU周期。"),r("strong",[v._v("只有与节拍脉冲相结合才能得到实际控制信号")]),v._v("，即不同的信号在CPU周期内的不同时段发挥作用")]),v._v(" "),r("p",[v._v("顺序控制字段用来执行下一条微指令的地址。本例中的微指令后四位直接给出了下一条微指令的地址，另外两位为"),r("strong",[v._v("测试方式位")]),v._v("。如果测试方式有效，则根据直接地址和测试方式与"),r("strong",[v._v("地址转移逻辑")]),v._v("共同决定下一条微指令的地址。详见地址转移逻辑部分")]),v._v(" "),r("h3",{attrs:{id:"微程序控制器原理框图"}},[v._v("微程序控制器原理框图")]),v._v(" "),r("p",[r("img",{attrs:{src:t(658),alt:"5-11"}})]),v._v(" "),r("ul",[r("li",[v._v("微指令寄存器\n"),r("ul",[r("li",[v._v("用来存放当前微指令")])])]),v._v(" "),r("li",[v._v("微地址寄存器\n"),r("ul",[r("li",[v._v("用来存放下一条微指令的地址。类似于PC")])])]),v._v(" "),r("li",[v._v("地址转移逻辑\n"),r("ul",[r("li",[v._v("管理位地址寄存器")]),v._v(" "),r("li",[v._v("默认情况会把当前微指令的顺序控制字段的直接地址交给微地址寄存器")]),v._v(" "),r("li",[v._v("程序出现分支时根据当前微指令的测试方式位和当前状态调整微地址寄存器的内容")])])]),v._v(" "),r("li",[v._v("控制存储器\n"),r("ul",[r("li",[v._v("存放全部指令系统微程序的只读存储器")]),v._v(" "),r("li",[v._v("读出一条微指令并执行的总时间被称为一个"),r("strong",[v._v("微指令周期")])]),v._v(" "),r("li",[v._v("在串行方式工作的微程序控制器中，微指令周期就是只读存储器的工作周期")])])])]),v._v(" "),r("p",[v._v("控制存储器示意图：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(659),alt:"5-12"}})]),v._v(" "),r("h3",{attrs:{id:"微指令周期与cpu周期的关系"}},[v._v("微指令周期与CPU周期的关系")]),v._v(" "),r("p",[v._v("为了保证整个机器控制信号的同步，可以将一个微指令周期时间设计得恰好和CPU周期时间相等")]),v._v(" "),r("p",[r("img",{attrs:{src:t(660),alt:"5-13"}})]),v._v(" "),r("p",[v._v("假设一个CPU周期为0.8μs，包含四个等间隔的节拍脉冲T1-T4，每个脉冲宽度200ns，可以用T4作为读取微指令的时间，用T1-T3时间作为执行微指令的时间。这样前面600ns中ALU计算出结果后可以在最后T4的200ns中把结果打入某个寄存器，同时微程序控制器读取下一个指令")]),v._v(" "),r("p",[r("strong",[v._v("使用节拍电位->节拍脉冲二级体制")])]),v._v(" "),r("h3",{attrs:{id:"微程序设计技术"}},[v._v("微程序设计技术")]),v._v(" "),r("h4",{attrs:{id:"微命令编码"}},[v._v("微命令编码")]),v._v(" "),r("ul",[r("li",[v._v("直接表示法\n"),r("ul",[r("li",[v._v("每一位代表一个微命令（即一个实际的控制信号）")]),v._v(" "),r("li",[v._v("优点 - 简单直观 输出直接用于控制")]),v._v(" "),r("li",[v._v("缺点 - 微指令字较长 控制存储器容量较大")])])])]),v._v(" "),r("p",[v._v("直接表示法图示：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(419),alt:"5-10"}})]),v._v(" "),r("ul",[r("li",[v._v("编码表示法\n"),r("ul",[r("li",[v._v("把一组"),r("strong",[v._v("相斥")]),v._v("的微命令信号组成一个小组，通过译码器移码")]),v._v(" "),r("li",[v._v("与直接控制法相比编码表示法可以减少微指令字的长度，但是增加了译码电路，执行速度稍慢")]),v._v(" "),r("li",[v._v("此法使用较为普遍")])])])]),v._v(" "),r("p",[v._v("编码表示法图示：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(661),alt:"5-14"}})]),v._v(" "),r("ul",[r("li",[v._v("混合表示法\n"),r("ul",[r("li",[v._v("混合以上两种表示法")])])])]),v._v(" "),r("p",[v._v("混合表示法图示：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(662),alt:"5-15"}})]),v._v(" "),r("h4",{attrs:{id:"微地址的形成方式"}},[v._v("微地址的形成方式")]),v._v(" "),r("p",[v._v("地址转移逻辑如何产生后继微地址")]),v._v(" "),r("ul",[r("li",[v._v("计数器方式\n"),r("ul",[r("li",[v._v("类似于PC")]),v._v(" "),r("li",[v._v("顺序执行微指令时，后继微地址由当前微地址加上一个增量来产生")]),v._v(" "),r("li",[v._v("非顺序执行微指令时，必须通过一些转移策略改变下址")]),v._v(" "),r("li",[v._v("微地址寄存器可视为计数器，顺序执行的微指令序列必须安排在控制存储器的连续单元中")]),v._v(" "),r("li",[v._v("特点：顺序控制字段较短，微地址产生机构简单，但是多路并行转移功能较弱，速度慢，灵活性差")])])]),v._v(" "),r("li",[v._v("多路转移方式\n"),r("ul",[r("li",[v._v("一条微指令具有多个转移分支的能力称为多路转移")]),v._v(" "),r("li",[v._v("微程序出现分支时，如果有若干“候选”微地址，则根据顺序控制字段中的"),r("strong",[v._v("判别测试P")]),v._v("和"),r("strong",[v._v("状态条件标志")]),v._v("选择其中一个微地址")]),v._v(" "),r("li",[v._v("状态条件有n位标志，可以实现微程序2"),r("sup",[v._v("n")]),v._v("路转移，涉及微地址寄存器的n位")]),v._v(" "),r("li",[v._v("特点：能以较短的顺序控制字段配合，实现多路并行转移，灵活性好，速度快，但是地址转移逻辑需要组合逻辑方法设计")])])]),v._v(" "),r("li",[v._v("由指令的操作码转换得到\n"),r("ul",[r("li",[v._v("典型方式为查表")]),v._v(" "),r("li",[v._v("在ROM中存放微地址映射表，用指令的操作码作为地址进行查表，以此得到微程序的入口地址")])])])]),v._v(" "),r("p",[v._v("使用多路转移方式，设计地址转移逻辑例题：微地址寄存器6位(μA"),r("sub",[v._v("5")]),v._v("-μA"),r("sub",[v._v("0")]),v._v(")，当需要修改其内容时，可通过某一位触发器的强制端S将其置1。有如下三种情况")]),v._v(" "),r("ul",[r("li",[v._v("执行“取指”微指令后微程序按IR的OP字段(IR"),r("sub",[v._v("3")]),v._v("-IR"),r("sub",[v._v("0")]),v._v(")进行16路分支")]),v._v(" "),r("li",[v._v("执行条件转移指令微程序时，按照进位标志C的状态进行2路分支")]),v._v(" "),r("li",[v._v("执行某控制台指令微程序时，按IR"),r("sub",[v._v("4")]),v._v("与IR"),r("sub",[v._v("5")]),v._v("的状态进行4路分支")])]),v._v(" "),r("p",[v._v("请设计微地址转移逻辑")]),v._v(" "),r("p",[v._v("解：题中所述微程序有三种判别测试，令这三种判别测试分别为P1、P2、P3")]),v._v(" "),r("ul",[r("li",[v._v("当P1生效时根据IR"),r("sub",[v._v("3")]),v._v("-IR"),r("sub",[v._v("0")]),v._v("修改μA"),r("sub",[v._v("3")]),v._v("-μA"),r("sub",[v._v("0")]),v._v("（其实可以任选4位进行修改）")]),v._v(" "),r("li",[v._v("当P2生效时根据进位标志C修改μA"),r("sub",[v._v("0")]),v._v("（任选1位即可）")]),v._v(" "),r("li",[v._v("当P3生效时根据IR"),r("sub",[v._v("5")]),v._v("和IR"),r("sub",[v._v("4")]),v._v("修改μA"),r("sub",[v._v("5")]),v._v("和μA"),r("sub",[v._v("4")]),v._v("（任选两位即可）")])]),v._v(" "),r("p",[v._v("还要考虑时钟因素，假设CPU周期的最后一个节拍脉冲为T4，此时各运算已结束，得到了各个状态。则地址转移逻辑如下")]),v._v(" "),r("ul",[r("li",[v._v("μA"),r("sub",[v._v("5")]),v._v(" = P"),r("sub",[v._v("3")]),v._v(" IR"),r("sub",[v._v("5")]),v._v(" T"),r("sub",[v._v("4")])]),v._v(" "),r("li",[v._v("μA"),r("sub",[v._v("4")]),v._v(" = P"),r("sub",[v._v("3")]),v._v(" IR"),r("sub",[v._v("4")]),v._v(" T"),r("sub",[v._v("4")])]),v._v(" "),r("li",[v._v("μA"),r("sub",[v._v("3")]),v._v(" = P"),r("sub",[v._v("1")]),v._v(" IR"),r("sub",[v._v("3")]),v._v(" T"),r("sub",[v._v("4")])]),v._v(" "),r("li",[v._v("μA"),r("sub",[v._v("2")]),v._v(" = P"),r("sub",[v._v("1")]),v._v(" IR"),r("sub",[v._v("2")]),v._v(" T"),r("sub",[v._v("4")])]),v._v(" "),r("li",[v._v("μA"),r("sub",[v._v("1")]),v._v(" = P"),r("sub",[v._v("1")]),v._v(" IR"),r("sub",[v._v("1")]),v._v(" T"),r("sub",[v._v("4")])]),v._v(" "),r("li",[v._v("μA"),r("sub",[v._v("0")]),v._v(" = P"),r("sub",[v._v("1")]),v._v(" IR"),r("sub",[v._v("0")]),v._v(" T"),r("sub",[v._v("4")]),v._v(" + P"),r("sub",[v._v("2")]),v._v(" C T"),r("sub",[v._v("4")])])]),v._v(" "),r("h4",{attrs:{id:"微指令格式"}},[v._v("微指令格式")]),v._v(" "),r("ul",[r("li",[v._v("水平型微指令\n"),r("ul",[r("li",[v._v("一次能定义并执行多个并行操作微命令的微指令")]),v._v(" "),r("li",[v._v("按空客管制制度按·控制字段的编码方式不同可以分为\n"),r("ul",[r("li",[v._v("全水平型（不译码法）微指令")]),v._v(" "),r("li",[v._v("字段译码法水平型微指令")]),v._v(" "),r("li",[v._v("直接和译码相混合的水平型微指令")])])])])])]),v._v(" "),r("p",[v._v("水平型微指令示意图：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(663),alt:"5-16"}})]),v._v(" "),r("ul",[r("li",[v._v("垂直型微指令\n"),r("ul",[r("li",[v._v("微指令中设置"),r("strong",[v._v("微操作码")]),v._v("字段，由微操作码规定微指令的功能")]),v._v(" "),r("li",[v._v("结构类似于机器指令的结构，有操作码，在一条微指令中只有1-2个微命令，每条微指令的功能简单")]),v._v(" "),r("li",[v._v("实现一条机器指令的微程序比水平型微指令编写的微程序长得多")]),v._v(" "),r("li",[v._v("特点：微程序长而微指令短")])])])]),v._v(" "),r("p",[v._v("垂直型微指令举例：")]),v._v(" "),r("ul",[r("li",[v._v("寄存器-寄存器传送型微指令")])]),v._v(" "),r("p",[r("img",{attrs:{src:t(664),alt:"5-17"}})]),v._v(" "),r("ul",[r("li",[v._v("运算控制型微指令")])]),v._v(" "),r("p",[r("img",{attrs:{src:t(665),alt:"5-18"}})]),v._v(" "),r("ul",[r("li",[v._v("主存访问型微指令")])]),v._v(" "),r("p",[r("img",{attrs:{src:t(666),alt:"5-19"}})]),v._v(" "),r("ul",[r("li",[v._v("条件转移型微指令")])]),v._v(" "),r("p",[r("img",{attrs:{src:t(667),alt:"5-20"}})]),v._v(" "),r("p",[v._v("水平型微指令与垂直型微指令的比较：")]),v._v(" "),r("ul",[r("li",[v._v("水平型微指令并行操作能力强，效率高，灵活性强")]),v._v(" "),r("li",[v._v("水平型微指令执行一条指令的时间更短")]),v._v(" "),r("li",[v._v("水平型微指令难以掌握。垂直型微指令与机器指令类似，相对易于掌握")])]),v._v(" "),r("h2",{attrs:{id:"硬布线控制器"}},[v._v("硬布线控制器")]),v._v(" "),r("h3",{attrs:{id:"基础"}},[v._v("基础")]),v._v(" "),r("p",[v._v("也叫"),r("strong",[v._v("组合逻辑控制器")]),v._v("，被当前RISC计算机和高性能计算机普遍采用")]),v._v(" "),r("p",[v._v("控制部件为产生固定时序控制信号的逻辑电路")]),v._v(" "),r("p",[v._v("特点：")]),v._v(" "),r("ul",[r("li",[v._v("形成控制信号的传输延迟少，系统运行速度快")]),v._v(" "),r("li",[v._v("设计控制CPU的时序控制信号的逻辑较复杂")]),v._v(" "),r("li",[v._v("与微程序控制相比，硬布线控制速度快")])]),v._v(" "),r("h3",{attrs:{id:"结构"}},[v._v("结构")]),v._v(" "),r("p",[r("img",{attrs:{src:t(668),alt:"5-21"}})]),v._v(" "),r("p",[v._v("树型逻辑网络拥有三个输入：指令译码器的译码输出、结果反馈信息和节拍点位/节拍脉冲发生器。树型逻辑网络内部为组合逻辑电路，根据输入调整输出，"),r("strong",[v._v("输出即为微操作控制信号")])]),v._v(" "),r("p",[v._v("与微程序控制器不同的是，时序产生器除了产生节拍脉冲，还需要产生"),r("strong",[v._v("节拍电位信号")]),v._v("用来控制流程")]),v._v(" "),r("p",[v._v("所以硬布线控制器的"),r("strong",[v._v("时序信号有三级")]),v._v("："),r("strong",[v._v("主状态周期->节拍电位->节拍脉冲")])]),v._v(" "),r("h3",{attrs:{id:"硬布线控制器的指令周期流程"}},[v._v("硬布线控制器的指令周期流程")]),v._v(" "),r("p",[v._v("以下图为例。此图使用的CPU模型还是前面的那个模型")]),v._v(" "),r("p",[r("img",{attrs:{src:t(669),alt:"5-22"}})]),v._v(" "),r("p",[v._v("时序产生器产生"),r("strong",[v._v("节拍电位信号")]),v._v("M1、M2和M3用来控制当前处于流程中的哪一个阶段，也就是各个微操作的先后顺序")]),v._v(" "),r("p",[v._v("比如某控制信号C0在以下情况下被激活：")]),v._v(" "),r("ul",[r("li",[v._v("节拍电位为M1时被激活")]),v._v(" "),r("li",[v._v("节拍电位为M3且指令译码器发出的指令信号为ADD/LAD/AND")])]),v._v(" "),r("p",[v._v("那么在树型逻辑网络里面C0的表达式就是"),r("code",{pre:!0},[v._v("C0 = M1 + M3(ADD + LAD + AND)")])]),v._v(" "),r("p",[v._v("如果使用同步控制方式，则所有指令都要有M1-M3三个阶段，但是像MOV这种指令在M3阶段没有任何操作，会导致时间的浪费。为了改进，可以使一些指令跳过一些节拍，如MOV指令进行M2节拍之后就结束。相应的节拍信号发生器的电路会更复杂")]),v._v(" "),r("p",[v._v("与微程序控制器相比，微程序控制器的控制信号可以复用（这也导致了速度比较慢），而硬布线完全使用布尔表达式实现，每个输出都有自己的表达式控制，几乎不能复用。可以使用布尔表达式化简")]),v._v(" "),r("h3",{attrs:{id:"硬布线控制器的设计"}},[v._v("硬布线控制器的设计")]),v._v(" "),r("ol",[r("li",[v._v("分析指令，列出所有执行的方框图")]),v._v(" "),r("li",[v._v("对流程进行划分，分隔到不同的时钟周期和节拍电位")]),v._v(" "),r("li",[v._v("总结表达式")])]),v._v(" "),r("p",[v._v("举例：设计如图所示模型机的控制器，假设该模型机的系统只有如下5条指令，使用硬布线控制")]),v._v(" "),r("p",[r("img",{attrs:{src:t(670),alt:"5-23"}})]),v._v(" "),r("table",[r("thead",[r("tr",[r("th",[v._v("指令助记符")]),v._v(" "),r("th",[v._v("指令")]),v._v(" "),r("th",[v._v("功能")])])]),v._v(" "),r("tbody",[r("tr",[r("td",[v._v("CLA")]),v._v(" "),r("td",[v._v("清零指令")]),v._v(" "),r("td",[v._v("0 -> AC")])]),v._v(" "),r("tr",[r("td",[v._v("ADD AC, M")]),v._v(" "),r("td",[v._v("加法指令")]),v._v(" "),r("td",[v._v("(AC) + (M) -> AC")])]),v._v(" "),r("tr",[r("td",[v._v("STA M")]),v._v(" "),r("td",[v._v("存数指令")]),v._v(" "),r("td",[v._v("(AC) -> M")])]),v._v(" "),r("tr",[r("td",[v._v("JMP m")]),v._v(" "),r("td",[v._v("跳转指令")]),v._v(" "),r("td",[v._v("m -> PC")])]),v._v(" "),r("tr",[r("td",[v._v("NOP")]),v._v(" "),r("td",[v._v("空指令")]),v._v(" "),r("td",[v._v("延时")])])])]),v._v(" "),r("ul",[r("li",[v._v("分析指令，画出框图")])]),v._v(" "),r("p",[r("img",{attrs:{src:t(671),alt:"5-24"}})]),v._v(" "),r("p",[v._v("因为总线数量受限，取指阶段的三个操作需要使用同一个总线，所以被拆分在了三个节拍脉冲中")]),v._v(" "),r("ul",[r("li",[v._v("对流程进行划分，划分到不同的时钟周期和节拍电位")])]),v._v(" "),r("p",[r("img",{attrs:{src:t(672),alt:"5-25"}})]),v._v(" "),r("p",[v._v("给操作分配时钟周期T和节拍电位M")]),v._v(" "),r("p",[r("strong",[v._v("访存操作需要两个时钟周期")]),v._v("，其他操作1个时钟周期。"),r("strong",[v._v("每个节拍电位中可以有数量不等的时钟周期")]),v._v("。读指令自身一个节拍电位")]),v._v(" "),r("ul",[r("li",[v._v("总结表达式")])]),v._v(" "),r("p",[v._v("从图中找出所有的微操作，并命名如下表")]),v._v(" "),r("p",[r("img",{attrs:{src:t(673),alt:"5-26"}})]),v._v(" "),r("p",[v._v("按照流程图给出表达式。"),r("strong",[v._v("注意表达式中同时含有时钟周期和节拍电位")])]),v._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("C0: PC -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" AR -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" ABUS "),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" M1 T1\nC1: PC + "),r("span",{pre:!0,attrs:{class:"token number"}},[v._v("1")]),v._v(" -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" PC "),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" M1 T4\nC2: IR -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" PC "),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" M2 T1 JMP\nC3: IR -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" AR -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" ABUS "),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" M2 T1"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("ADD + STA"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\nC4: DR -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" IR "),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" M1 T4\nC5: DR -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" ALU "),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" M3 T3 ADD\nC6: DR -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" DBUS "),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" M3"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("T2 + T3"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("STA\nC7: DBUS -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" DR "),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" M1"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("T2 + T3"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v(" + M3"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("T1 + T2"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("ADD\nC8: AC -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" DR "),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" M3 T1 STA\nC9: AC -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" ALU "),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" M3 T3 ADD\nC10: ALU -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" AC "),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" M3 T3 ADD\nC11: "),r("span",{pre:!0,attrs:{class:"token number"}},[v._v("0")]),v._v(" -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" AC "),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" M2 T1 CLA\n")])]),v._v(" "),r("h2",{attrs:{id:"流水cpu"}},[v._v("流水CPU")]),v._v(" "),r("h3",{attrs:{id:"流水cpu结构"}},[v._v("流水CPU结构")]),v._v(" "),r("ul",[r("li",[v._v("指令部件")]),v._v(" "),r("li",[v._v("指令队列FIFO")]),v._v(" "),r("li",[v._v("执行部件")])]),v._v(" "),r("p",[r("img",{attrs:{src:t(674),alt:"5-27"}})]),v._v(" "),r("h3",{attrs:{id:"原理"}},[v._v("原理")]),v._v(" "),r("ul",[r("li",[v._v("在流水线(Pipeline)中必须是"),r("strong",[v._v("连续")]),v._v("的任务，只有不断提供任务才能充分发挥流水线的效率")]),v._v(" "),r("li",[v._v("把一个任务分解为几个有联系的子任务，每个子任务由一个专门的功能部件实现")]),v._v(" "),r("li",[r("strong",[v._v("流水线中各段时间应尽量相等")]),v._v("，否则会引起堵塞、断流现象")]),v._v(" "),r("li",[v._v("流水线需要装入时间和排空时间。流水线完全充满时才能充分发挥效率")])]),v._v(" "),r("h3",{attrs:{id:"指令处理的分解"}},[v._v("指令处理的分解")]),v._v(" "),r("ul",[r("li",[v._v("IF(Instruction Fetch)取指")]),v._v(" "),r("li",[v._v("ID(Instruction Decode)译码")]),v._v(" "),r("li",[v._v("EX(Execution)执行")]),v._v(" "),r("li",[v._v("WB(Write Back)写回")])]),v._v(" "),r("p",[v._v("四级指令流水线")]),v._v(" "),r("p",[r("img",{attrs:{src:t(675),alt:"5-28"}})]),v._v(" "),r("h3",{attrs:{id:"时空图"}},[v._v("时空图")]),v._v(" "),r("p",[v._v("非流水线时空图：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(676),alt:"5-29"}})]),v._v(" "),r("p",[v._v("一条指令执行完毕后下一条指令才能开始执行，每隔四个时钟周期才会有一个输出结果")]),v._v(" "),r("p",[v._v("标量流水线时空图：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(677),alt:"5-30"}})]),v._v(" "),r("p",[v._v("上一条指令与下一条指令存在"),r("strong",[v._v("时间")]),v._v("上的重叠，每一个时钟周期就能输出一个结果")]),v._v(" "),r("p",[v._v("超标量流水线时空图：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(678),alt:"5-31"}})]),v._v(" "),r("p",[v._v("在标量流水线基础上增加"),r("strong",[v._v("空间")]),v._v("并行技术，一次执行多条指令")]),v._v(" "),r("p",[v._v("线性流水线有三个阶段：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(679),alt:"5-32"}})]),v._v(" "),r("h3",{attrs:{id:"性能指标"}},[v._v("性能指标")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("加速比(Speedup Ratio)")]),v._v(" "),r("ul",[r("li",[v._v("衡量"),r("strong",[v._v("不使用流水线")]),v._v("和"),r("strong",[v._v("使用流水线")]),v._v("完成同样任务所用的"),r("strong",[v._v("时间比")])]),v._v(" "),r("li",[v._v("k级流水线时钟周期t，则不使用流水线完成n各任务所需时间T"),r("sub",[v._v("0")]),v._v("=nkt，使用k级流水线完成n个"),r("strong",[v._v("连续任务")]),v._v("所需时间为T"),r("sub",[v._v("k")]),v._v("=(k+n-1)t")]),v._v(" "),r("li",[v._v("显然当n远大于k时最大加速比为k")])])]),v._v(" "),r("li",[r("strong",[v._v("吞吐率")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("单位时间完成的任务数")])]),v._v(" "),r("li",[v._v("n为任务数，T"),r("sub",[v._v("k")]),v._v("为完成n各任务的时间，则吞吐率TP = n / T"),r("sub",[v._v("k")])]),v._v(" "),r("li",[v._v("显然n趋近无穷时最大吞吐率为1/t")])])])]),v._v(" "),r("h3",{attrs:{id:"流水线冲突"}},[v._v("流水线冲突")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("资源相关")])])]),v._v(" "),r("p",[v._v("如流水线的不同部分在同一时钟周期同时访问内存。假设某流水线分为五部分：取指、译码、执行、取存、写回，那么在流水线执行时取指和取存都会访问存储器，这就导致了冲突")]),v._v(" "),r("p",[v._v("解决方案")]),v._v(" "),r("ol",[r("li",[v._v("某条指令在冲突时停顿一拍")]),v._v(" "),r("li",[v._v("分离数据与指令的存储")])]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("数据相关")])])]),v._v(" "),r("p",[v._v("流水线的不同节拍同时需要读写一个地址的数据。如运算结果在第3拍需要写入内存，而后面的操作需要用到这个内存。可能会发生“先读后写”冲突。注意"),r("strong",[v._v("同时读是不冲突的")])]),v._v(" "),r("p",[v._v("为了解决冲突，流水CPU设置了许多"),r("strong",[v._v("结果缓存寄存器")]),v._v("，保存结果给后面的指令"),r("strong",[v._v("直接使用")])]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("控制相关")])])]),v._v(" "),r("p",[v._v("由转移指令引起。因为流水线不知道判定结果，不知道应该顺序执行还是转移执行。常用处理技术：")]),v._v(" "),r("ol",[r("li",[v._v("延迟转移 - “先执行再转移”。在条件转移之前已经有若干个指令进入流水线了，把这些指令执行完毕，如果正好是目标指令则没有浪费时间")]),v._v(" "),r("li",[v._v("分支预测 - 猜测分支的方向\n"),r("ol",[r("li",[v._v("静态分支预测。硬件固定的预测方式，如总是转移或总是不转移")]),v._v(" "),r("li",[v._v("动态分支预测。内部保存一个表，记录最近的以此转移的情况，然后根据此情况转移")])])])])])}]};v.exports={attributes:{layout:"collection",title:"中央处理器",collection:"ComputerOrganizationPrinciple"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}},418:function(v,_,t){v.exports=t.p+"img/5-4.55846fc.png"},419:function(v,_,t){v.exports=t.p+"img/5-10.67ee1b5.png"},650:function(v,_,t){v.exports=t.p+"img/5-1.8bf7ca1.png"},651:function(v,_,t){v.exports=t.p+"img/5-2.fefe980.png"},652:function(v,_,t){v.exports=t.p+"img/5-3.6ebda8b.png"},653:function(v,_,t){v.exports=t.p+"img/5-5.7c69d88.png"},654:function(v,_,t){v.exports=t.p+"img/5-6.5c550a3.png"},655:function(v,_,t){v.exports=t.p+"img/5-7.905ea34.png"},656:function(v,_,t){v.exports=t.p+"img/5-8.39f7085.png"},657:function(v,_,t){v.exports=t.p+"img/5-9.afeba09.png"},658:function(v,_,t){v.exports=t.p+"img/5-11.979c479.png"},659:function(v,_,t){v.exports=t.p+"img/5-12.86c6812.png"},660:function(v,_,t){v.exports=t.p+"img/5-13.772d133.png"},661:function(v,_,t){v.exports=t.p+"img/5-14.b5d6e5b.png"},662:function(v,_,t){v.exports=t.p+"img/5-15.449fb89.png"},663:function(v,_,t){v.exports=t.p+"img/5-16.fdf1d41.png"},664:function(v,_,t){v.exports=t.p+"img/5-17.c569d0e.png"},665:function(v,_,t){v.exports=t.p+"img/5-18.9a616f4.png"},666:function(v,_,t){v.exports=t.p+"img/5-19.aac40fa.png"},667:function(v,_,t){v.exports=t.p+"img/5-20.9a27d89.png"},668:function(v,_,t){v.exports=t.p+"img/5-21.d40e12e.png"},669:function(v,_,t){v.exports=t.p+"img/5-22.b255c1b.png"},670:function(v,_,t){v.exports=t.p+"img/5-23.8f59ac1.png"},671:function(v,_,t){v.exports=t.p+"img/5-24.5f2dc03.png"},672:function(v,_,t){v.exports=t.p+"img/5-25.2be57f8.png"},673:function(v,_,t){v.exports=t.p+"img/5-26.df07a7b.png"},674:function(v,_,t){v.exports=t.p+"img/5-27.ff34551.png"},675:function(v,_,t){v.exports=t.p+"img/5-28.45207d4.png"},676:function(v,_,t){v.exports=t.p+"img/5-29.c9ece4d.png"},677:function(v,_,t){v.exports=t.p+"img/5-30.fec90a0.png"},678:function(v,_,t){v.exports=t.p+"img/5-31.35beb39.png"},679:function(v,_,t){v.exports=t.p+"img/5-32.8a3397e.png"}}]);