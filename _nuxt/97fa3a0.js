(window.webpackJsonp=window.webpackJsonp||[]).push([[39,633,634,635,636,637,638,639,640],{1299:function(v,_,t){const r={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),r("p",[r("strong",[v._v("自底向上分析")]),v._v("也叫"),r("strong",[v._v("移进-归约分析法")])]),v._v(" "),r("ul",[r("li",[v._v("从左向右对输入串扫描")]),v._v(" "),r("li",[v._v("自底向上构造分析树")])]),v._v(" "),r("p",[v._v("分析过程是把输入符号串归约为非终结符，最后归约成起始符号")]),v._v(" "),r("p",[v._v("需要精确定义"),r("strong",[v._v("可归约串")]),v._v("（即某个生成式的候选式）。定义可归约串的方式不同，得到的算法就不同。常用算法：")]),v._v(" "),r("ul",[r("li",[v._v("LR分析法\n"),r("ul",[r("li",[v._v("可归约串为"),r("strong",[v._v("句柄")])])])]),v._v(" "),r("li",[v._v("优先分析法\n"),r("ul",[r("li",[v._v("简单优先分析法")]),v._v(" "),r("li",[v._v("算符优先分析法\n"),r("ul",[r("li",[v._v("可归约串为"),r("strong",[v._v("最左素短语")])])])])])])]),v._v(" "),r("p",[v._v("归约过程中要保证可规约串的"),r("strong",[v._v("唯一性")]),v._v("，否则就会产生冲突")]),v._v(" "),r("h2",{attrs:{id:"lr分析法概述"}},[v._v("LR分析法概述")]),v._v(" "),r("h3",{attrs:{id:"预备知识"}},[v._v("预备知识")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("短语")]),v._v(" - 分析树的"),r("strong",[v._v("一棵子树")]),v._v("的"),r("strong",[v._v("所有叶子")]),v._v("（不一定是终结符）从左到右排列起来得到的符号串就是"),r("strong",[v._v("相对于此子树")]),v._v("的短语")]),v._v(" "),r("li",[r("strong",[v._v("直接短语")]),v._v(" - 仅有父子两代的子树，其短语为直接短语")]),v._v(" "),r("li",[r("strong",[v._v("句柄")]),v._v(" - 一个分析树的"),r("strong",[v._v("最左直接短语")]),v._v("。任何句型的句柄总是"),r("strong",[v._v("存在且唯一")])]),v._v(" "),r("li",[v._v("以上三个概念都是"),r("strong",[v._v("针对某一个句型而言")]),v._v("的，即某句型的句柄，某句型的短语，某句型的直接短语。离开句型就无法讨论上述三个概念")])]),v._v(" "),r("p",[r("img",{attrs:{src:t(818),alt:"4-1"}})]),v._v(" "),r("p",[v._v("可以看出，如果要求所有短语，只要遍历所有子树即可")]),v._v(" "),r("ul",[r("li",[v._v("最左推导与最右归约对应（互为逆过程")]),v._v(" "),r("li",[v._v("最右推导和最左归约对应（互为逆过程\n"),r("ul",[r("li",[v._v("最右推导为规范推导，所以"),r("strong",[v._v("最左归约为规范归约")])])])])]),v._v(" "),r("h3",{attrs:{id:"lr分析法的定义"}},[v._v("LR分析法的定义")]),v._v(" "),r("p",[v._v("LR分析法是一种自底向上进行规范归约的分析方法")]),v._v(" "),r("p",[v._v("LR(k)的含义：")]),v._v(" "),r("ul",[r("li",[v._v("L - 表示从左到右输入串")]),v._v(" "),r("li",[v._v("R - 表示最右推导的逆过程（即最左归约")]),v._v(" "),r("li",[v._v("k - 表示向前看的符号个数")])]),v._v(" "),r("p",[r("strong",[v._v("优点")]),v._v(" - 大多数"),r("strong",[v._v("无二义性")]),v._v("的上下文无关文法都可以用LR分析法分析（即"),r("strong",[v._v("不需要消左递归和左公因子")]),v._v("），且速度快，能够准确及时指出语法错误及错误位置")]),v._v(" "),r("p",[r("strong",[v._v("缺点")]),v._v(" - 手工构造工作量大（但是可以使用程序生成")]),v._v(" "),r("p",[v._v("本课程涉及的LR分析法：")]),v._v(" "),r("ul",[r("li",[v._v("LR(0)\n"),r("ul",[r("li",[v._v("0表示不向前看。最简单")]),v._v(" "),r("li",[v._v("也最容易产生冲突")])])]),v._v(" "),r("li",[v._v("SLR(1)\n"),r("ul",[r("li",[v._v("低级LR(1)分析法")]),v._v(" "),r("li",[r("strong",[v._v("仅在试图解决LR(0)中产生的冲突时向前看一个符号")])]),v._v(" "),r("li",[v._v("所以并不能解决所有冲突")])])]),v._v(" "),r("li",[v._v("LR(1)\n"),r("ul",[r("li",[v._v("始终向前看一个符号")]),v._v(" "),r("li",[v._v("解决冲突的能力是此处提及的四者中的最强")]),v._v(" "),r("li",[v._v("缺点是自动机状态太多")])])]),v._v(" "),r("li",[v._v("LALR(1)\n"),r("ul",[r("li",[v._v("lookahead-LR")]),v._v(" "),r("li",[v._v("合并了LR(1)中的某些状态来简化程序")]),v._v(" "),r("li",[v._v("这样的合并是有要求的，并不是所有LR(1)都能变成LALR(1)")]),v._v(" "),r("li",[r("strong",[v._v("LALR(1)在分析正确串时和LR(1)需要的步骤一样多，在分析错误串时步骤多一些")])])])])]),v._v(" "),r("p",[v._v("不同的分析法使用了不同的方法构造分析表")]),v._v(" "),r("h3",{attrs:{id:"使用的工具"}},[v._v("使用的工具")]),v._v(" "),r("ul",[r("li",[v._v("分析栈\n"),r("ul",[r("li",[v._v("符号栈 - 保存已分析的符号（包括非终结符和终结符）（非必需）")]),v._v(" "),r("li",[v._v("状态栈（必需）")])])]),v._v(" "),r("li",[v._v("LR分析表，由action和goto两个子表构成：")])]),v._v(" "),r("p",[r("img",{attrs:{src:t(819),alt:"4-2"}})]),v._v(" "),r("p",[v._v("解释：")]),v._v(" "),r("ul",[r("li",[v._v("LR分析时有若干个状态（即左侧的0-11")]),v._v(" "),r("li",[v._v("在某个状态接收到不同的输入会有不同的操作（包括终结符和非终结符\n"),r("ul",[r("li",[v._v("如果接受到终结符，则调用action中的动作\n"),r("ul",[r("li",[v._v("**s(shift)**表示把输入移进符号栈，后面的数字表示状态转移（把此状态压入状态栈")]),v._v(" "),r("li",[r("strong",[v._v("r(reduce)"),r("strong",[v._v("表示归约，后面数字表示使用哪一个生成式。所以构造表之前必须把")]),v._v("生成式编号")]),v._v("，且"),r("strong",[v._v("每个生成式只有一个候选式")])]),v._v(" "),r("li",[r("strong",[v._v("ACC")]),v._v("表示接受输入串，即分析成功停止分析")]),v._v(" "),r("li",[r("strong",[v._v("空白项")]),v._v("表示程序不应该运行到这里，需要报错")])])]),v._v(" "),r("li",[v._v("如果接受到非终结符，则调用goto里面的动作，跳转到指定状态（把对应状态压栈")])])])]),v._v(" "),r("h3",{attrs:{id:"举例"}},[v._v("举例")]),v._v(" "),r("p",[v._v("假设文法G(L)（已编号）:")]),v._v(" "),r("ol",[r("li",[r("code",{pre:!0},[v._v("E -> E+T")])]),v._v(" "),r("li",[r("code",{pre:!0},[v._v("E -> T")])]),v._v(" "),r("li",[r("code",{pre:!0},[v._v("T -> T*F")])]),v._v(" "),r("li",[r("code",{pre:!0},[v._v("T -> F")])]),v._v(" "),r("li",[r("code",{pre:!0},[v._v("F -> (E)")])]),v._v(" "),r("li",[r("code",{pre:!0},[v._v("F -> id")])])]),v._v(" "),r("p",[v._v("我们使用某种方案构造了一个分析表：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(820),alt:"4-3"}})]),v._v(" "),r("p",[v._v("分析过程：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(821),alt:"4-4"}})]),v._v(" "),r("p",[r("img",{attrs:{src:t(822),alt:"4-5"}})]),v._v(" "),r("p",[v._v("解释：")]),v._v(" "),r("ul",[r("li",[v._v("栈有两行，第一行是状态栈（必需），第二行是符号栈（非必需）")]),v._v(" "),r("li",[v._v("状态栈的栈底为初始状态0")]),v._v(" "),r("li",[v._v("符号栈因为是非必需的，可以没有栈底，也可以写输入串尾符号"),r("code",{pre:!0},[v._v("$")])]),v._v(" "),r("li",[r("strong",[v._v("根据状态栈顶的状态和输入串最左侧符号在分析表中查询动作")]),v._v(" "),r("ul",[r("li",[v._v("移进 - 把输入串最左侧符号移进符号栈，把分析表中的状态移进状态栈")]),v._v(" "),r("li",[v._v("规约 - 从状态栈和符号栈中弹出对应生成式的长度，然后把规约得到的符号压入符号栈，根据此符号查询goto子表得到一个状态并压入状态栈\n"),r("ul",[r("li",[v._v("如第二行使用"),r("code",{pre:!0},[v._v("F -> id")]),v._v("规约的过程")]),v._v(" "),r("li",[v._v("先弹出符号栈的"),r("code",{pre:!0},[v._v("id")]),v._v("和状态栈的"),r("code",{pre:!0},[v._v("5")])]),v._v(" "),r("li",[v._v("因为生成式"),r("code",{pre:!0},[v._v("F -> id")]),v._v("生成了符号"),r("code",{pre:!0},[v._v("F")]),v._v("，所以相当于当前输入串为"),r("code",{pre:!0},[v._v("F+id*id$")])]),v._v(" "),r("li",[v._v("弹出"),r("code",{pre:!0},[v._v("5")]),v._v("后状态栈顶为"),r("code",{pre:!0},[v._v("0")]),v._v("，接收符号"),r("code",{pre:!0},[v._v("F")]),v._v("应该"),r("code",{pre:!0},[v._v("goto 3")])]),v._v(" "),r("li",[v._v("所以把"),r("code",{pre:!0},[v._v("F")]),v._v("压入符号栈，把"),r("code",{pre:!0},[v._v("3")]),v._v("压入状态栈")])])]),v._v(" "),r("li",[v._v("接收 - 即状态"),r("code",{pre:!0},[v._v("1")]),v._v("遇到输入符号"),r("code",{pre:!0},[v._v("$")]),v._v("时结束分析")])])]),v._v(" "),r("li",[r("strong",[v._v("建议分析过程左侧加上分析步骤的序号")])])]),v._v(" "),r("h3",{attrs:{id:"冲突"}},[v._v("冲突")]),v._v(" "),r("p",[v._v("冲突类型：")]),v._v(" "),r("ul",[r("li",[v._v("移进-归约冲突\n"),r("ul",[r("li",[v._v("不知道该移进还是该归约")])])]),v._v(" "),r("li",[v._v("归约-归约冲突\n"),r("ul",[r("li",[v._v("同时存在超过一个生成式可被调用归约，不知道使用哪个生成式")])])])]),v._v(" "),r("p",[r("strong",[v._v("两种冲突可同时存在")])]),v._v(" "),r("p",[v._v("冲突表现为分析表中的同一个表项包含超过一个动作而导致歧义")]),v._v(" "),r("p",[v._v("具体冲突的情况要和具体的分析法结合判断")]),v._v(" "),r("h2",{attrs:{id:"lr0分析法与slr1分析法"}},[v._v("LR(0)分析法与SLR(1)分析法")]),v._v(" "),r("h3",{attrs:{id:"活前缀"}},[v._v("活前缀")]),v._v(" "),r("p",[r("strong",[v._v("如果一个规范句型的一个前缀不包含句柄之后的任何符号，则称之为此句型的一个活前缀")])]),v._v(" "),r("p",[v._v("已知文法：")]),v._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("S -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" aAcBe\nA -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" b "),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v("|")]),v._v(" Ab\nB -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" d\n")])]),v._v(" "),r("ul",[r("li",[v._v("句型abbcde的句柄是b，活前缀有ε, a, ab")]),v._v(" "),r("li",[v._v("句型aAbcde的句柄是Ab，活前缀有ε, a, aA, aAb")]),v._v(" "),r("li",[v._v("句型aAcde的句柄是d，活前缀有ε, a, aA, aAc, aAcd")])]),v._v(" "),r("p",[r("strong",[v._v("当活前缀包含句柄的时候就是规约的时候")])]),v._v(" "),r("h3",{attrs:{id:"项目集规范族及其dfa"}},[v._v("项目集规范族及其DFA")]),v._v(" "),r("p",[r("strong",[v._v("LR(0)有效项目")]),v._v("：在生成式的右侧任意位置加一个圆点，它就变成了一个LR(0)有效项目。如生成式"),r("code",{pre:!0},[v._v("A -> aBcD")]),v._v("，它可以得到如下5个项目：")]),v._v(" "),r("ul",[r("li",[r("code",{pre:!0},[v._v("A -> .aBcD")])]),v._v(" "),r("li",[r("code",{pre:!0},[v._v("A -> a.BcD")])]),v._v(" "),r("li",[r("code",{pre:!0},[v._v("A -> aB.cD")])]),v._v(" "),r("li",[r("code",{pre:!0},[v._v("A -> aBc.D")])]),v._v(" "),r("li",[r("code",{pre:!0},[v._v("A -> aBcD.")])])]),v._v(" "),r("p",[v._v("这个点表示"),r("strong",[v._v("当前分析过程分析到了当前生成式的什么位置")]),v._v("。所以显然：")]),v._v(" "),r("ul",[r("li",[r("code",{pre:!0},[v._v("A -> .aBcD")]),v._v("表示分析过程还没有进入此生成式")]),v._v(" "),r("li",[r("code",{pre:!0},[v._v("A -> aBcD.")]),v._v("表示已经分析完了这个生成式，应该使用它规约了")])]),v._v(" "),r("p",[v._v("项目可以分为以下几类：")]),v._v(" "),r("ul",[r("li",[v._v("规约项目 - 圆点在生成式最右端，需要规约")]),v._v(" "),r("li",[v._v("接收项目 - 特殊的规约项目，是文法开始符号的归约项目")]),v._v(" "),r("li",[v._v("待约项目 - 圆点后面的第一个符号为非终结符")]),v._v(" "),r("li",[v._v("移进项目 - 圆点后面的第一个符号为终结符")])]),v._v(" "),r("p",[r("strong",[v._v("项目集")]),v._v("为项目的集合，通常使用方框括起来，并起个名字（编号），如项目集"),r("code",{pre:!0},[v._v("I0")]),v._v("：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(823),alt:"4-6"}})]),v._v(" "),r("p",[r("strong",[v._v("每个项目集表示了一个分析状态")]),v._v("，如"),r("code",{pre:!0},[v._v("I0")]),v._v("中的"),r("code",{pre:!0},[v._v("S' -> .E")]),v._v("表示"),r("code",{pre:!0},[v._v("S' -> E")]),v._v("还没开始分析，而存在生成式"),r("code",{pre:!0},[v._v("E -> aA")]),v._v("和"),r("code",{pre:!0},[v._v("E -> bB")]),v._v("，他们也没有开始分析，所以就根据项目"),r("code",{pre:!0},[v._v("S' -> .E")]),v._v("得到了项目"),r("code",{pre:!0},[v._v("E -> .aA")]),v._v("和"),r("code",{pre:!0},[v._v("E -> .bB")]),v._v("，他们属于同一个分析状态。")]),v._v(" "),r("p",[v._v("如果状态"),r("code",{pre:!0},[v._v("I0")]),v._v("接收输入字符为a，则可以确定此时调用了生成式"),r("code",{pre:!0},[v._v("S' -> E")]),v._v("和"),r("code",{pre:!0},[v._v("E -> aA")]),v._v("，那么就得到了一个项目"),r("code",{pre:!0},[v._v("E -> a.A")]),v._v("，因为存在生成式"),r("code",{pre:!0},[v._v("A -> cA")]),v._v("和"),r("code",{pre:!0},[v._v("A -> d")]),v._v("，所以"),r("code",{pre:!0},[v._v("E -> a.A")]),v._v("和"),r("code",{pre:!0},[v._v("A -> .cA")]),v._v("和"),r("code",{pre:!0},[v._v("A -> .d")]),v._v("应该是同一个状态（都没有开始分析A）。")]),v._v(" "),r("p",[v._v("重复上述过程，可以得到一个DFA，它的状态集就是"),r("strong",[v._v("LR(0)项目集规范族")])]),v._v(" "),r("p",[r("img",{attrs:{src:t(824),alt:"4-7"}})]),v._v(" "),r("h3",{attrs:{id:"构造lr0分析表"}},[v._v("构造LR(0)分析表")]),v._v(" "),r("p",[v._v("根据DFA之间的状态转移来构造LR(0)分析表。")]),v._v(" "),r("p",[v._v("规则：")]),v._v(" "),r("ol",[r("li",[v._v("分析表左侧的状态即为DFA上的状态序号")]),v._v(" "),r("li",[v._v("分析表的goto子表为状态接受非终结符产生的状态转移")]),v._v(" "),r("li",[v._v("分析表项为shift的表项为DFA中状态接收终结符产生的状态转移")]),v._v(" "),r("li",[v._v("如果某个状态包含规约项目，则此状态在action子表中的所有表项均为此规约动作（因为LR(0)不向前看")])]),v._v(" "),r("p",[v._v("LR(0)容易产生冲突：假设某个状态包含项目"),r("code",{pre:!0},[v._v("A -> a.")]),v._v("和项目"),r("code",{pre:!0},[v._v("A -> .c")]),v._v("，那么根据规则3，"),r("code",{pre:!0},[v._v("A -> .c")]),v._v("应该在"),r("code",{pre:!0},[v._v("action-c")]),v._v("那一项填入"),r("code",{pre:!0},[v._v("shift-c")]),v._v("操作移进c。但是根据规则4，存在规约项目"),r("code",{pre:!0},[v._v("A -> a.")]),v._v("，所以所有action表项应该填入"),r("code",{pre:!0},[v._v("reduce-x")]),v._v("，二者产生移进-归约冲突。同样也可能产生归约-归约冲突。")]),v._v(" "),r("h3",{attrs:{id:"构造slr1分析表"}},[v._v("构造SLR(1)分析表")]),v._v(" "),r("p",[v._v("修改LR(0)构造规则4为：\n4. 如果某个状态包含规约项目，则action子表中此项目"),r("strong",[v._v("左侧非终结符的follow集")]),v._v("的所有表项设置为规约动作")]),v._v(" "),r("p",[v._v("思想：判断是规约还是移进时，向前看一位来试图确定操作")]),v._v(" "),r("p",[v._v("仍然可能存在"),r("strong",[v._v("冲突")]),v._v("：如果规约项目左侧非终结符的follow集和移进项目的终结符有交集，则仍然无法通过向前看一位来解决冲突")]),v._v(" "),r("h3",{attrs:{id:"答题流程"}},[v._v("答题流程")]),v._v(" "),r("ol",[r("li",[r("strong",[v._v("拓广文法")]),v._v("（"),r("strong",[v._v("切记勿忘")])])]),v._v(" "),r("p",[v._v("对任意已知文法，假设它的起始符号为S，则添加一个生成式"),r("code",{pre:!0},[v._v("S' -> S")]),v._v("（用来产生接受项目")]),v._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[v._v("把文法转换成"),r("strong",[v._v("每个生成式只有一个候选式")]),v._v("的形式并标号（以便分析表中使用标号引用")]),v._v(" "),r("li",[v._v("构造LR(0)项目集规范族及其DFA（"),r("strong",[v._v("切记不存在SLR(1)项目集规范族")])]),v._v(" "),r("li",[v._v("判断"),r("strong",[v._v("LR(0)项目集规范族")]),v._v("中是否有冲突（也就是不向前看无法解决的冲突），如果有要写出冲突类型，没有冲突就能构造LR(0)分析表")]),v._v(" "),r("li",[v._v("如果存在冲突，冲突是否能通过向前看一位解决。如果能，就可以构造SLR(1)分析表。如果不能，尝试使用后文的LR(1)分析法")])]),v._v(" "),r("h3",{attrs:{id:"其他结论"}},[v._v("其他结论")]),v._v(" "),r("p",[v._v("SLR(1)文法 - SLR(1)分析表无冲突的上下文无关文法")]),v._v(" "),r("p",[v._v("每个SLR(1)文法都是无二义性文法（但是无二义性文法不一定是SLR(1)文法，因为SLR(1)预测分析表并没有包含足够多的信息，所以还是会有冲突")]),v._v(" "),r("h2",{attrs:{id:"lr1分析法"}},[v._v("LR(1)分析法")]),v._v(" "),r("p",[v._v("基本思想：始终向前看一个符号")]),v._v(" "),r("p",[v._v("LR(k)项目："),r("code",{pre:!0},[v._v("[A -> α.β, a1a2...ak]")]),v._v("，相比LR(0)项目集，后面多了k个符号，表示"),r("strong",[v._v("能出现在A后面的符号（或A后面的符号串的first集）（是A的follow集的子集）")]),v._v("。称"),r("code",{pre:!0},[v._v("a1a2..ak")]),v._v("为"),r("strong",[v._v("项目的向前搜索符号串")]),v._v("。对于LR(1)有效项目，向前搜索符号串的长度为1")]),v._v(" "),r("p",[r("strong",[v._v("向前搜索符号仅对规约项目有意义")]),v._v("。意为：后续的k个输入符号为"),r("code",{pre:!0},[v._v("a1a2...ak")]),v._v("时才允许此规约的发生")]),v._v(" "),r("p",[v._v("如果向前搜索符号串有多个，则使用"),r("code",{pre:!0},[v._v("/")]),v._v("隔开。")]),v._v(" "),r("p",[v._v("包含拓广符号"),r("code",{pre:!0},[v._v("S'")]),v._v("的状态为"),r("code",{pre:!0},[v._v("[S' -> .S, $]")])]),v._v(" "),r("h2",{attrs:{id:"lalr1分析法"}},[v._v("LALR(1)分析法")]),v._v(" "),r("p",[v._v("构造LR(1)DFA的时候因为向前搜索符号串的不同导致其状态远多于LR(0)DFA")]),v._v(" "),r("p",[v._v("LALR意为lookahead-LR，是一种介于SLR(1)和LR(1)的方法")]),v._v(" "),r("p",[v._v("定义"),r("strong",[v._v("同心集")]),v._v("：如果两个LR(1)项目去掉向前搜索符号后是相同的，则称这两个项目集是同心集")]),v._v(" "),r("p",[v._v("LALR(1)思想："),r("strong",[v._v("合并同心集")]),v._v("（和其中的向前搜索符号串）以减少状态数。")]),v._v(" "),r("p",[v._v("可能出现的问题：合并同心集操作"),r("strong",[v._v("可能会产生归约-归约冲突（但是不会产生移进-归约冲突，因为向前搜索符号串只跟归约项目有关")])]),v._v(" "),r("p",[v._v("例：存在如下项目集规范族：")]),v._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("I1: "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("A -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" c., d"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("B -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" c., e"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\nI2: "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("A -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" c., e"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("B -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" c., d"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n")])]),v._v(" "),r("p",[v._v("合并之后得到：")]),v._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("I12: "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("A -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" c., d/e"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("B -"),r("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" c., d/e"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n")])]),v._v(" "),r("p",[v._v("那么输入d或e的时候就无法确定分析动作了")]),v._v(" "),r("p",[r("strong",[v._v("实际分析时和LR(1)的区别")]),v._v("：")]),v._v(" "),r("ul",[r("li",[v._v("如果是"),r("strong",[v._v("正确的输入串")]),v._v("，"),r("strong",[v._v("过程一样")]),v._v("，只是状态名不同")]),v._v(" "),r("li",[v._v("如果是"),r("strong",[v._v("错误的输入串")]),v._v("，则"),r("strong",[v._v("LALR(1)的分析速度慢于LR(1)")]),v._v("，因为合并同心集后做了不必要的规约，导致延迟发现错误")])]),v._v(" "),r("h2",{attrs:{id:"lr0-slr1-lr1-lalr1解题顺序"}},[v._v("LR(0)-SLR(1)-LR(1)-LALR(1)解题顺序")]),v._v(" "),r("p",[v._v("通常问题：能够构造LR(0)分析表？如果不能，能否构造SLR(1)分析表？如果不能，能否构造LALR(1)分析表（此处要先构造LR(1)分析表）？")]),v._v(" "),r("ol",[r("li",[v._v("建立LR(0)有效项目集规范族")]),v._v(" "),r("li",[v._v("判断是否存在冲突，如果不存在就可以构造LR(0)分析表，结束")]),v._v(" "),r("li",[v._v("冲突是否能通过向前看一个符号解决？如果能，构造SLR(1)分析表，结束")]),v._v(" "),r("li",[v._v("构造LR(1)分析表")]),v._v(" "),r("li",[v._v("判断合并同心集是否会出现冲突")])]),v._v(" "),r("h2",{attrs:{id:"ll1和四种lr文法的关系"}},[v._v("LL(1)和四种LR文法的关系")]),v._v(" "),r("p",[r("img",{attrs:{src:t(825),alt:"4-8"}})]),v._v(" "),r("p",[v._v("一个文法是LL(1)文法（无二义性、左递归和回溯），它一定是LR(1)文法")]),v._v(" "),r("h2",{attrs:{id:"二义性"}},[v._v("二义性")]),v._v(" "),r("p",[r("strong",[v._v("任何二义性文法都不是LR类文法")]),v._v("。可以添加优先级或结合规则来解决二义性")]),v._v(" "),r("h2",{attrs:{id:"优先分析法略"}},[v._v("优先分析法（略")])])}]};v.exports={attributes:{layout:"collection",title:"语法分析 - 自底向上分析",collection:"FundamentalsOfCompiling"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}},818:function(v,_,t){v.exports=t.p+"img/4-1.fee2bbb.png"},819:function(v,_,t){v.exports=t.p+"img/4-2.70befdf.png"},820:function(v,_,t){v.exports=t.p+"img/4-3.6ed9795.png"},821:function(v,_,t){v.exports=t.p+"img/4-4.17ba423.png"},822:function(v,_,t){v.exports=t.p+"img/4-5.e17921c.png"},823:function(v,_,t){v.exports=t.p+"img/4-6.10d103b.png"},824:function(v,_,t){v.exports=t.p+"img/4-7.b451dfa.png"},825:function(v,_,t){v.exports=t.p+"img/4-8.4ce77bd.png"}}]);