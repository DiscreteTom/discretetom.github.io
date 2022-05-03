(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{1351:function(t,e){const n={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"概述"}},[t._v("概述")]),t._v(" "),n("ul",[n("li",[t._v("汇编源代码.asm+汇编程序(masm)=目标程序.obj")]),t._v(" "),n("li",[t._v("目标程序.obj+连接程序(link)=可执行程序.exe")])]),t._v(" "),n("p",[t._v("汇编源码中的语句种类：")]),t._v(" "),n("ul",[n("li",[t._v("指令 - 执行性语句，在程序运行期间由CPU来执行")]),t._v(" "),n("li",[t._v("伪指令 - 源码中的说明性语句，并不是指令（包括数据说明、变量定义等），也称为伪操作")]),t._v(" "),n("li",[t._v("宏指令")])]),t._v(" "),n("h2",{attrs:{id:"汇编源码举例"}},[t._v("汇编源码举例")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("stack segment stack\n\tdb "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" dup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("?"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstack ends\n\ndata segment\n\tmsg db "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world!'")]),t._v(", 0dh, 0ah, "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$'")]),t._v("\ndata ends\n\ncode segment\n\tassume cs:code, ds:data, ss:stack\n\tmain:\n\t\tmov ax, data\n\t\tmov ds, ax\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\t\tmov ax, 4c00h\n\t\tint 21h\ncode ends\n\nend main\n")])]),t._v(" "),n("h2",{attrs:{id:"伪指令directive"}},[t._v("伪指令Directive")]),t._v(" "),n("ul",[n("li",[t._v("段定义伪指令和段指定伪指令")]),t._v(" "),n("li",[t._v("程序开始和结束伪指令")]),t._v(" "),n("li",[t._v("数据定义与存储器分配伪指令")]),t._v(" "),n("li",[t._v("表达式赋值伪指令")]),t._v(" "),n("li",[t._v("…")])]),t._v(" "),n("h3",{attrs:{id:"段定义伪指令和段指定伪指令"}},[t._v("段定义伪指令和段指定伪指令")]),t._v(" "),n("p",[t._v("段定义伪指令：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("segment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" segment\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("segment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ends\n")])]),t._v(" "),n("p",[t._v("ends为end segment的缩写")]),t._v(" "),n("p",[t._v("在code段中通常会有"),n("strong",[t._v("段指定伪指令")]),t._v("：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("code segment\n\tassume "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("sreg"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("sreg"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\ncode ends\n")])]),t._v(" "),n("p",[t._v("其中sreg为段寄存器的名字。"),n("strong",[t._v("段指定伪指令意为把段名和段寄存器关联起来")]),t._v("。段指定伪指令的位置通常为代码段code segment的开始处")]),t._v(" "),n("p",[t._v("其中"),n("strong",[t._v("DS无法直接指定")]),t._v("，即使在伪指令里面指定了，还是要在代码中赋值：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("assume ds:data\nmov ax, data\nmov ds, ax\n")])]),t._v(" "),n("h3",{attrs:{id:"程序开始和结束伪指令"}},[t._v("程序开始和结束伪指令")]),t._v(" "),n("p",[t._v("程序开始伪指令：")]),t._v(" "),n("ul",[n("li",[n("code",{pre:!0},[t._v("name <module_name>")])]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("title <text>")])])]),t._v(" "),n("p",[t._v("上面两种操作可以同时拥有，可以只有一个，也可以都没有（通常都没有")]),t._v(" "),n("p",[t._v("结束伪指令："),n("code",{pre:!0},[t._v("end [label]")])]),t._v(" "),n("p",[t._v("其中label指明程序开始执行的"),n("strong",[t._v("起始地址")])]),t._v(" "),n("h3",{attrs:{id:"数据定义与存储器分配伪指令"}},[t._v("数据定义与存储器分配伪指令")]),t._v(" "),n("p",[t._v("格式：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("variable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" mnemonic operand, "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("., operand\n")])]),t._v(" "),n("ul",[n("li",[t._v("viariable - 变量名，可有可无，作用类似于label，用于表示地址")]),t._v(" "),n("li",[t._v("mnemonic - 助记符，用于表示数据类型\n"),n("ul",[n("li",[t._v("db(byte) - 字节")]),t._v(" "),n("li",[t._v("dw(word) - 字")]),t._v(" "),n("li",[t._v("dd(dword) - 双字")]),t._v(" "),n("li",[t._v("dt(tbyte) - 十个字节")])])]),t._v(" "),n("li",[t._v("operand - 逗号隔开的多个操作数\n"),n("ul",[n("li",[t._v("常数")]),t._v(" "),n("li",[t._v("常量表达式")]),t._v(" "),n("li",[t._v("字符串")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("?")]),t._v("表示预留空间而不初始化")]),t._v(" "),n("li",[t._v("…")])])])]),t._v(" "),n("p",[t._v("举例：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("table db "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(", ?, "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v(", ?\ncount dw 1000h\nvar1 db "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("*3-10\nmsg db "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Input data'")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'456$'")]),t._v("\nindex dw table\n")])]),t._v(" "),n("p",[t._v("可以使用"),n("code",{pre:!0},[t._v("dup")]),t._v("来复制操作数，格式："),n("code",{pre:!0},[t._v("repeat_count dup (operand, ..., operand)")]),t._v("，且dup可嵌套，如：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("var dw "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" dup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("?"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\narray db "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" dup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" dup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v("\n")])]),t._v(" "),n("p",[t._v("强制类型转换：使用"),n("code",{pre:!0},[t._v("ptr")]),t._v("属性操作符或"),n("code",{pre:!0},[t._v("label")]),t._v("伪指令，例：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("var dw 1234h\nmov al, byte ptr var "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 转换双字为字节 "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("al")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("34h\n")])]),t._v(" "),n("h3",{attrs:{id:"表达式赋值伪指令"}},[t._v("表达式赋值伪指令")]),t._v(" "),n("p",[t._v("类似于高级语言的常量定义")]),t._v(" "),n("p",[t._v("格式：")]),t._v(" "),n("ul",[n("li",[t._v("equ伪指令\n"),n("ul",[n("li",[t._v("expression_name equ expression")])])]),t._v(" "),n("li",[t._v("=伪指令\n"),n("ul",[n("li",[t._v("expression_name = expression")])])])]),t._v(" "),n("p",[t._v("equ伪指令中的表达式名不允许重复定义，而=伪指令中则允许")]),t._v(" "),n("h2",{attrs:{id:"操作符"}},[t._v("操作符")]),t._v(" "),n("h3",{attrs:{id:"算数-逻辑-关系操作符"}},[t._v("算数、逻辑、关系操作符")]),t._v(" "),n("p",[t._v("这些操作符都要求最多只能有一个操作数是变量，其他操作数都是常量")]),t._v(" "),n("p",[t._v("例：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("mov dx, var+6*2\nmov al, port and 0feh\nmov bx, port lt "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("lt")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lower than\n")])]),t._v(" "),n("h3",{attrs:{id:"数值回送操作符"}},[t._v("数值回送操作符")]),t._v(" "),n("p",[t._v("返回数据类型，格式："),n("code",{pre:!0},[t._v("type variable/label")])]),t._v(" "),n("ul",[n("li",[t._v("如果是变量，返回变量类型的"),n("strong",[t._v("字节数")])]),t._v(" "),n("li",[t._v("如果是常数，返回0")]),t._v(" "),n("li",[t._v("如果是标号，near返回-1，far返回-2")])]),t._v(" "),n("p",[t._v("例：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("array dw "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" si, "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" array "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])]),t._v(" "),n("p",[t._v("返回变量长度，格式："),n("code",{pre:!0},[t._v("length variable")]),t._v("，对于dup，返回dup的个数，否则返回1")]),t._v(" "),n("p",[t._v("例：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("buffer dw "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" dup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmov cx, length buffer "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n\narray dw "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nmov cx, length array "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),n("p",[t._v("返回变量大小，格式"),n("code",{pre:!0},[t._v("size variable")]),t._v("，"),n("strong",[t._v("返回字节数")])]),t._v(" "),n("p",[t._v("例：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("buffer dw "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" dup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\narray dw "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nmov cx, size buffer "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),t._v("\nmov cx, size array "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])]),t._v(" "),n("p",[t._v("返回目标偏移地址，格式"),n("code",{pre:!0},[t._v("offset variable/label")])]),t._v(" "),n("p",[t._v("例：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("mov bx, offset message "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" lea bx, message\n")])]),t._v(" "),n("p",[t._v("返回段基址，格式"),n("code",{pre:!0},[t._v("seg variable/label")]),t._v("，例：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("mov bx, seg message\n")])]),t._v(" "),n("h2",{attrs:{id:"com文件"}},[t._v("COM文件")]),t._v(" "),n("p",[t._v("是DOS系统下的一种可执行文件，类似于exe文件")]),t._v(" "),n("p",[t._v("特点：")]),t._v(" "),n("ul",[n("li",[t._v("整个程序只有一个段")]),t._v(" "),n("li",[t._v("程序的开始地址为CS:100H")]),t._v(" "),n("li",[t._v("从0000-00FFH为程序前缀PSP")]),t._v(" "),n("li",[t._v("程序的第一条必须是可执行指令")]),t._v(" "),n("li",[t._v("装入速度比exe快")])]),t._v(" "),n("p",[t._v("执行流程：")]),t._v(" "),n("ol",[n("li",[t._v("检查内存是否足够")]),t._v(" "),n("li",[t._v("分配内存空间")]),t._v(" "),n("li",[t._v("建立程序段前缀，将PSP放置于前100H")]),t._v(" "),n("li",[t._v("从外存把程序放入100H开始的内存中")]),t._v(" "),n("li",[t._v("CS指向所分配的段，DS=ES=SS=CS, SP=fffeh")]),t._v(" "),n("li",[t._v("程序开始，执行CS:IP")])]),t._v(" "),n("h2",{attrs:{id:"exe文件"}},[t._v("EXE文件")]),t._v(" "),n("p",[t._v("特点：")]),t._v(" "),n("ul",[n("li",[t._v("开始为文件头，后面是程序本体")]),t._v(" "),n("li",[t._v("程序可以有多个段")]),t._v(" "),n("li",[t._v("代码、数据、堆栈在不同的段")]),t._v(" "),n("li",[t._v("程序前缀放在独立的段，由DS或ES指向")]),t._v(" "),n("li",[t._v("数据都在数据段")]),t._v(" "),n("li",[t._v("代码超过一个段时，由程序员控制")])]),t._v(" "),n("p",[t._v("执行流程：")]),t._v(" "),n("ol",[n("li",[t._v("检查内存是否足够")]),t._v(" "),n("li",[t._v("分配内存空间")]),t._v(" "),n("li",[t._v("处理文件头，建立程序段前缀")]),t._v(" "),n("li",[t._v("把程序装入CS指向的代码段，IP指向入口地址")]),t._v(" "),n("li",[t._v("DS、ES指向PSP前缀，SS指向堆栈段，SP置初值")]),t._v(" "),n("li",[t._v("程序开始，执行CS:IP")])]),t._v(" "),n("h2",{attrs:{id:"中断"}},[t._v("中断")]),t._v(" "),n("h3",{attrs:{id:"概述-1"}},[t._v("概述")]),t._v(" "),n("p",[t._v("DOS系统的系统中断：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("mov ah, ??\nint 21h\n")])]),t._v(" "),n("p",[t._v("其中int表示中断，21h表示系统的中断，ah中的内容表示不同的中断内容。")]),t._v(" "),n("h3",{attrs:{id:"常用中断"}},[t._v("常用中断")]),t._v(" "),n("ul",[n("li",[t._v("4ch - 返回操作系统")]),t._v(" "),n("li",[t._v("1 - 接收键盘输入并回显，结果保存在al")]),t._v(" "),n("li",[t._v("2 - 显示dl中保存的字符")]),t._v(" "),n("li",[t._v("9 - 显示ds:dx指向的以’$'结束的字符串")]),t._v(" "),n("li",[t._v("0ah - 输入多个字符到ds:dx指向的缓冲区，以回车符终止")])]),t._v(" "),n("h2",{attrs:{id:"子程序"}},[t._v("子程序")]),t._v(" "),n("h3",{attrs:{id:"概述-2"}},[t._v("概述")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("main:\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\tcall sub\n\nsub proc\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\tret\nsub endp\n")])]),t._v(" "),n("p",[t._v("子程序使用proc来定义，使用endp结束，结尾要加上ret。父程序使用call来调用")]),t._v(" "),n("p",[t._v("如果是段内子程序，则堆栈中会被压入IP，如果是不同段的子程序，则堆栈段会被压入CS:IP。所以"),n("strong",[t._v("子程序中一定要平衡堆栈")]),t._v("，即压入多少弹出多少，否则程序无法回到正确的位置")]),t._v(" "),n("h3",{attrs:{id:"参数传递"}},[t._v("参数传递")]),t._v(" "),n("ul",[n("li",[t._v("通过寄存器传递（略")]),t._v(" "),n("li",[t._v("通过存储器传递（略")]),t._v(" "),n("li",[t._v("通过地址表传递（把地址放到存储器，略")]),t._v(" "),n("li",[t._v("通过堆栈传递")])]),t._v(" "),n("p",[t._v("使用堆栈传递时，主要思想是使用bp作为基址，使用偏移量访问参数，过程：")]),t._v(" "),n("ul",[n("li",[t._v("主程序中把参数压入栈")]),t._v(" "),n("li",[t._v("调用子程序，把IP（或CS:IP）压入栈")]),t._v(" "),n("li",[t._v("子程序中\n"),n("ul",[n("li",[t._v("push bp保存bp")]),t._v(" "),n("li",[t._v("mov bp, sp把sp作为基址，保存在bp中")]),t._v(" "),n("li",[t._v("使用[bp+?]来访问参数\n"),n("ul",[n("li",[t._v("如果是把IP压入栈了，那么栈里面有IP和BP，[bp+4]是第一个参数，[bp+6]是第二个参数，以此类推")]),t._v(" "),n("li",[t._v("如果把CS:IP压入栈了，那么[bp+6]是第一个参数，以此类推")])])])])]),t._v(" "),n("li",[t._v("子程序执行结束后要抛弃参数，而且是在CS:IP弹出之后抛弃。抛弃参数的过程可以在主程序手动抛弃，也可以在子程序，使用"),n("code",{pre:!0},[t._v("ret n")]),t._v("来抛弃n个"),n("strong",[t._v("字节")]),t._v("，因为每个参数2字节，所以"),n("strong",[t._v("n一定是偶数")])])]),t._v(" "),n("h2",{attrs:{id:"宏"}},[t._v("宏")]),t._v(" "),n("p",[t._v("宏定义：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("macro_name macro "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("哑元表"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nendm\n")])]),t._v(" "),n("p",[t._v("宏调用："),n("code",{pre:!0},[t._v("macro_name [实元表]")])]),t._v(" "),n("p",[t._v("例：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("保存寄存器\npushr macro\n\tpush ax\n\tpush bx\n\tpush cx\n\tpush dx\nendm\n\n调用时使用pushr即可\n")])]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("输出字符串\nprintstr macro addr\n\tpush dx\n\tpush ax\n\n\tmov dx, addr "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" copy address\n\tmov ah, "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" output a string end with "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$'")]),t._v("\n\tint 21h\n\n\tpop ax\n\tpop dx\n\n调用时使用printstr str即可\n")])]),t._v(" "),n("p",[t._v("因为宏在指定位置展开（即"),n("strong",[t._v("宏展开")]),t._v("），所以如果宏里面出现label，多次调用宏会导致重复Label的出现。可以使用"),n("strong",[t._v("局部标号")]),t._v("，宏展开时会自动建立一个局部唯一的标号。例：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("dead_loop macro\n\t"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" here\n\tjmp here\nendm\n")])]),t._v(" "),n("p",[t._v("宏和子程序的区别：和高级语言差不多")])])}]};t.exports={attributes:{layout:"collection",title:"汇编语言程序设计",collection:"MicrocomputerPrincipleAndInterfaceTechnology"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);