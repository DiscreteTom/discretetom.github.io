(window.webpackJsonp=window.webpackJsonp||[]).push([[18,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714],{1397:function(t,n,v){const _={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,_=t._self._c||n;return _("div",{staticClass:"frontmatter-markdown"},[_("h2",{attrs:{id:"dfa的形式定义"}},[t._v("DFA的形式定义")]),t._v(" "),_("p",[t._v("DFA是一个五元组"),_("code",{pre:!0},[t._v("M=(Q, T, δ, q0, F)")])]),t._v(" "),_("ul",[_("li",[t._v("Q 有限状态集合")]),t._v(" "),_("li",[t._v("T 有限输入字母表")]),t._v(" "),_("li",[t._v("δ 状态转移函数")]),t._v(" "),_("li",[t._v("q0 初始状态")]),t._v(" "),_("li",[t._v("F 终止状态集合")])]),t._v(" "),_("p",[t._v("状态转移函数格式")]),t._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("δ"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("状态, 输入字母表"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 新状态\nδ"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q0, "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" q1\n")])]),t._v(" "),_("h3",{attrs:{id:"状态转移图"}},[t._v("状态转移图")]),t._v(" "),_("p",[_("img",{attrs:{src:v(799),alt:"2-1"}})]),t._v(" "),_("ul",[_("li",[t._v("终止状态使用两个圈表示")]),t._v(" "),_("li",[t._v("起始状态使用一个无源箭头指出")])]),t._v(" "),_("h3",{attrs:{id:"状态转移表"}},[t._v("状态转移表")]),t._v(" "),_("p",[_("img",{attrs:{src:v(800),alt:"2-2"}})]),t._v(" "),_("ul",[_("li",[t._v("终止状态使用星号标出")]),t._v(" "),_("li",[t._v("起始状态使用箭头指出")])]),t._v(" "),_("h3",{attrs:{id:"拓展转移函数以适合于输入字符串"}},[t._v("拓展转移函数以适合于输入字符串")]),t._v(" "),_("p",[t._v("定义"),_("code",{pre:!0},[t._v("δ'")]),t._v("函数如下")]),t._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("δ"),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'(状态1, 字符串ω+字符a) = δ(δ'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("状态1, 字符串ω"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", 字符a"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nδ"),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'(q, ωa) = δ(δ'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q, ω"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", a"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nδ'"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q, ε"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" q\n")])]),t._v(" "),_("p",[t._v("被DFA接收的字符串：输入结束之后能够使DFA状态到达终止状态的串")]),t._v(" "),_("h2",{attrs:{id:"格局"}},[t._v("格局")]),t._v(" "),_("p",[t._v("使用一个二元组"),_("code",{pre:!0},[t._v("(q, ω)")]),t._v("表示自动机的一个瞬时状态")]),t._v(" "),_("ul",[_("li",[t._v("初始格局 (q0, ω)")]),t._v(" "),_("li",[t._v("终止格局 (q1, ε)")])]),t._v(" "),_("p",[t._v("格局之间使用符号"),_("code",{pre:!0},[t._v("|-")]),t._v("连接")]),t._v(" "),_("p",[t._v("状态转移举例")]),t._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q0, 0010"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q1, 010"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q2, "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q2, "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q0, ε"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),_("h2",{attrs:{id:"不确定的有限自动机nfa"}},[t._v("不确定的有限自动机(NFA)")]),t._v(" "),_("p",[t._v("修改DFA模型，同一个状态接收同一个输入可以到达不同的新状态")]),t._v(" "),_("p",[t._v("NFA五元组："),_("code",{pre:!0},[t._v("M=(Q, T, δ, q0, F)")])]),t._v(" "),_("p",[t._v("其中状态转移函数δ的等号右边为一个集合，如"),_("code",{pre:!0},[t._v("δ(p, 0) = {p, q}")])]),t._v(" "),_("h2",{attrs:{id:"nfa与dfa的转换"}},[t._v("NFA与DFA的转换")]),t._v(" "),_("p",[t._v("DFA本就是NFA的特例。下面介绍NFA转换成DFA的方法")]),t._v(" "),_("p",[_("strong",[t._v("子集构造法")])]),t._v(" "),_("p",[t._v("构造原始NFA中状态的子集，作为生成的DFA中的状态")]),t._v(" "),_("p",[t._v("举例：已知如下NFA")]),t._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("δ"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p, "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("q"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nδ"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p, "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ∅\nδ"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q, "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("q"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nδ"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q, "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("q, r"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nδ"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r, "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ∅\nδ"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r, "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ∅\n")])]),t._v(" "),_("p",[t._v("转换DFA的思想就是把新状态集合{q, r}作为DFA的状态，意为"),_("strong",[t._v("状态q或者状态r")]),t._v("。如果"),_("strong",[t._v("状态q或者状态r")]),t._v("接收字符0，得到的新状态应该是"),_("strong",[t._v("状态q接收字符0得到的状态集合")]),t._v("和"),_("strong",[t._v("状态r接收字符0得到的状态集合")]),t._v("的并集，即得到如下转移函数")]),t._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("δ"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("q, r"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("q"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nδ"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("q, r"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("q, r"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),_("p",[t._v("如果状态集合中包含终止符号，那么这个状态集合在DFA中表示的状态是DFA的终止符号")]),t._v(" "),_("p",[t._v("例题：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(801),alt:"2-3"}})]),t._v(" "),_("h2",{attrs:{id:"带空转移的有限自动机"}},[t._v("带空转移的有限自动机")]),t._v(" "),_("p",[t._v("允许无输入时的状态转移")]),t._v(" "),_("p",[t._v("带空转移的不确定有限自动机表示为ε-NFA，是一个五元组"),_("code",{pre:!0},[t._v("A=(Q, T, δ, q0, F)")]),t._v("，与NFA的区别是转换函数里面可以接受空串")]),t._v(" "),_("h3",{attrs:{id:"ε-闭包"}},[t._v("ε-闭包")]),t._v(" "),_("p",[t._v("ε-闭包，记为 ε-CLOSURE 或 ECLOSE")]),t._v(" "),_("p",[t._v("某个状态q的ε-闭包定义为此状态q仅接受空串能够到达的状态集合（"),_("strong",[t._v("注意包含状态q自身")]),t._v("）")]),t._v(" "),_("h2",{attrs:{id:"ε-nfa转换为nfa"}},[t._v("ε-NFA转换为NFA")]),t._v(" "),_("p",[t._v("NFA本就是ε-NFA的特例。下面介绍ε-NFA转换为NFA的方法。也就是"),_("strong",[t._v("消空转移")])]),t._v(" "),_("p",[t._v("思路：假如从状态a接收某字符x转移到状态b，而状态b接收空串可以到达状态c，那么消空转移生成的NFA中状态a接收字符x可以到达状态b和状态c。即状态a接收字符x可以到达状态b的ε-闭包。")]),t._v(" "),_("p",[t._v("例题：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(802),alt:"2-4"}})]),t._v(" "),_("p",[t._v("解法举例：假设原本ε-NFA的转移函数为δ，令生成的NFA的转移函数为δ1")]),t._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("δ1"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q0, "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ε-CLOSURE"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("δ"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q0, "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v("\n")])]),t._v(" "),_("h3",{attrs:{id:"关于终止符号集合"}},[t._v("关于终止符号集合")]),t._v(" "),_("p",[t._v("已知ε-NFA的终止符号集合为F，初始状态为q0，NFA中的终止符号集合F1定义如下")]),t._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" q0能够通过空转移到达F "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" F1 "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" F + q0\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" F1 "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" F\n")])]),t._v(" "),_("p",[t._v("也就是说除了初始状态，不需要考虑其他状态可能变成终止符号的情况。")]),t._v(" "),_("h2",{attrs:{id:"正则集和正则式"}},[t._v("正则集和正则式")]),t._v(" "),_("p",[t._v("运算符号按照优先级从高到低依次为")]),t._v(" "),_("ul",[_("li",[t._v("星号"),_("code",{pre:!0},[t._v("*")]),t._v(" 闭包")]),t._v(" "),_("li",[t._v("点号"),_("code",{pre:!0},[t._v("·")]),t._v(" 连接")]),t._v(" "),_("li",[t._v("加号"),_("code",{pre:!0},[t._v("+")]),t._v(" 联合")])]),t._v(" "),_("h3",{attrs:{id:"正则式的性质"}},[t._v("正则式的性质")]),t._v(" "),_("p",[t._v("交换律与结合律")]),t._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a + b"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" + c "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a + "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b + c"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ab"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("c "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bc"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\na + b "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b + a\n")])]),t._v(" "),_("p",[t._v("等幂律")]),t._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("a + a "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a\n")])]),t._v(" "),_("p",[t._v("分配率")]),t._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("a"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b + c"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ab + ac\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a + b"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("c "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ac + "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("bc")]),t._v("\n")])]),t._v(" "),_("p",[t._v("幺元与零元")]),t._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("a + ∅ "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ∅ + a "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a\na∅ "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ∅a "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ∅\naε "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" εa "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a\n")])]),t._v(" "),_("p",[t._v("闭包相关运算")]),t._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a*"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("* "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a*\na* "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a + a*\n")])]),t._v(" "),_("h2",{attrs:{id:"从右线性文法导出正则式"}},[t._v("从右线性文法导出正则式")]),t._v(" "),_("p",[t._v("令大写字母为非终结符，小写字母为终结符或终结符串，S为起始非终结符")]),t._v(" "),_("p",[t._v("如果一个非终结符的正则式是"),_("code",{pre:!0},[t._v("A = aA + b")]),t._v("，则A的解为"),_("code",{pre:!0},[t._v("A=a*b")])]),t._v(" "),_("p",[t._v("例题：已知右线性文法生成式如下，求其正则式")]),t._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("S -"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" aA, S -"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" bB, S -"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" b\nA -"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" bA, A -"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ε\nB -"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" bS\n")])]),t._v(" "),_("p",[t._v("解：得到如下联立方程")]),t._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("S "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" aA + bB + b "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nA "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bA + ε "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nB "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bS "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),_("p",[t._v("解方程组即可求得S的正则式")]),t._v(" "),_("p",[t._v("解(2)式得"),_("code",{pre:!0},[t._v("A = b*")]),t._v("，把此结果和(3)式代入(1)式得到")]),t._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("S "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ab* + bbS + b\n  "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bbS + "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ab* + b"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),_("p",[t._v("解得"),_("code",{pre:!0},[t._v("S = (bb)*(ab* + b)")])]),t._v(" "),_("h2",{attrs:{id:"正则表达式与有限自动机"}},[t._v("正则表达式与有限自动机")]),t._v(" "),_("h3",{attrs:{id:"由dfa构造正则表达式"}},[t._v("由DFA构造正则表达式")]),t._v(" "),_("p",[t._v("状态消去法")]),t._v(" "),_("p",[_("img",{attrs:{src:v(803),alt:"2-5"}})]),t._v(" "),_("p",[t._v("如果最后构造出了如下状态")]),t._v(" "),_("p",[_("img",{attrs:{src:v(804),alt:"2-6"}})]),t._v(" "),_("p",[t._v("则对应的正则式为"),_("code",{pre:!0},[t._v("(R + SU*T)*SU*")])]),t._v(" "),_("p",[t._v("例题：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(805),alt:"2-7"}})]),t._v(" "),_("h3",{attrs:{id:"正则表达式构造等价ε-nfa"}},[t._v("正则表达式构造等价ε-NFA")]),t._v(" "),_("p",[t._v("规则如下图")]),t._v(" "),_("p",[_("img",{attrs:{src:v(806),alt:"2-8"}}),t._v(" "),_("img",{attrs:{src:v(807),alt:"2-9"}}),t._v(" "),_("img",{attrs:{src:v(808),alt:"2-10"}})]),t._v(" "),_("p",[t._v("例题：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(809),alt:"2-11"}}),t._v(" "),_("img",{attrs:{src:v(810),alt:"2-12"}})]),t._v(" "),_("h2",{attrs:{id:"右线性文法生成等价nfa"}},[t._v("右线性文法生成等价NFA")]),t._v(" "),_("p",[t._v("右线性文法生成式格式为"),_("code",{pre:!0},[t._v("A -> aB")]),t._v("，可以理解为"),_("strong",[t._v("B的前面加上a等价于A")]),t._v("，所以"),_("strong",[t._v("A消去串首的a可以得到B")]),t._v("，那么NFA中存在状态转移函数"),_("code",{pre:!0},[t._v("δ(A, a) = B")]),t._v("。如果存在生成式"),_("code",{pre:!0},[t._v("A -> a")]),t._v("，那么存在转移函数"),_("code",{pre:!0},[t._v("δ(A, a) = C")]),t._v("，C为一个新的状态而且是终止状态")]),t._v(" "),_("p",[t._v("例题：已知右线性文法"),_("code",{pre:!0},[t._v("G = ({S, B}, {a, b}, P, S)")]),t._v("，其中生成式P如下")]),t._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("S -"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" aB\nB -"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" aB "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" bS "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" a\n")])]),t._v(" "),_("p",[t._v("构造等价NFA，则")]),t._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("S -"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" aB "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" δ"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S, a"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("B"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nB -"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" aB "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" δ"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("B, a"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("B"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nB -"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" bS "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" δ"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("B, b"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("S"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nB -"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" a "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" δ"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("B, a"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("H"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),_("p",[t._v("其中H为新增的状态且为终止状态")]),t._v(" "),_("h2",{attrs:{id:"有限自动机构造等价右线性文法"}},[t._v("有限自动机构造等价右线性文法")]),t._v(" "),_("p",[t._v("和右线性文法构造NFA相反，由"),_("code",{pre:!0},[t._v("δ(A, a) = B")]),t._v("可以得到"),_("code",{pre:!0},[t._v("A -> aB")]),t._v("，如果其中B是终止符号，还可以得到"),_("code",{pre:!0},[t._v("A -> a")]),t._v("。")]),t._v(" "),_("h2",{attrs:{id:"dfa的化简极小化"}},[t._v("DFA的化简（极小化）")]),t._v(" "),_("p",[t._v("状态等价的概念：如果两个状态接收相同的串都能够在最后到达同一终止状态，则两状态等价")]),t._v(" "),_("p",[t._v("化简的目标：若某个DFA中不存在互为等价状态的状态和不可达状态，则称此DFA是最小化的")]),t._v(" "),_("p",[t._v("最小化算法："),_("strong",[t._v("填表法")])]),t._v(" "),_("p",[t._v("思路：构造下三角表格，把非等价状态在图中用"),_("code",{pre:!0},[t._v("X")]),t._v("标出，最后得到等价关系")]),t._v(" "),_("p",[t._v("例题如图：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(811),alt:"2-13"}})]),t._v(" "),_("p",[t._v("注意构造表格的时候横坐标是第1个状态到第n-1个状态，纵坐标是第n个状态到第2个状态")]),t._v(" "),_("p",[t._v("表格填充过程：")]),t._v(" "),_("ol",[_("li",[t._v("终态和非终态一定不等价")]),t._v(" "),_("li",[t._v("区分终态与终态是否等价，非终态与非终态是否等价")])]),t._v(" "),_("p",[t._v("最后表格中没有"),_("code",{pre:!0},[t._v("X")]),t._v("的单元格的横坐标与纵坐标是等价的")]),t._v(" "),_("p",[t._v("注意先删除不可达状态")]),t._v(" "),_("h2",{attrs:{id:"正则语言的泵浦pumping引理"}},[t._v("正则语言的泵浦(Pumping)引理")]),t._v(" "),_("p",[t._v("所有正则语言都满足的性质：pumping性质")]),t._v(" "),_("p",[t._v("定理：设L是正则集，存在常数n，对字符串"),_("code",{pre:!0},[t._v("ω ∈ L")]),t._v("且"),_("code",{pre:!0},[t._v("|ω| >= n")]),t._v("，则ω可以写成ω1ω0ω2，其中"),_("code",{pre:!0},[t._v("|ω1ω0| <= n, |ω0| > 0")]),t._v("，且对所有的"),_("code",{pre:!0},[t._v("i >= 0")]),t._v("有"),_("code",{pre:!0},[t._v("ω1ω0^iω2 ∈ L")])]),t._v(" "),_("p",[t._v("定理的物理意义：因为正则集一定可以转换为DFA。假设DFA中的状态数为n，如果某个串ω的长度大于n，那么这个串必定经过了DFA中某个相同的状态至少两次（鸽巢原理），那么这个DFA中就存在一个循环。之前的串ω就可以被分解为三个部分ω1、ω0和ω2，其中ω0就是循环体。针对这个循环体，理论上说循环任意次数，DFA都能够接收这个串。也就是对任意非负整数i，有"),_("code",{pre:!0},[t._v("ω1ω0^iω2 ∈ L")]),t._v("。显然其中ω0长度必须大于0，ω1ω0的长度应该小于n。")]),t._v(" "),_("p",[_("strong",[t._v("泵浦引理用来证明某个语言不是正则语言")])]),t._v(" "),_("p",[t._v("证明方法：反证法。假设这个语言是正则语言，使用泵浦引理。如果发现了某个i使循环体循环i次之后得到的串不满足语言要求，则这个语言不是正则语言（因为正则语言循环体循环任意次都满足要求）")]),t._v(" "),_("p",[t._v("通常需要假设一个n作为"),_("strong",[t._v("泵长")]),t._v("，即DFA中的状态数量，然后根据语言的条件和n生成一个长度大于n的串，分类讨论其中的循环体ω0只能为某种格式，再证明这种格式的循环体循环i次之后不满足原语言的条件。")]),t._v(" "),_("p",[t._v("例题：证明"),_("code",{pre:!0},[t._v("L = {a^n b^n | n为正整数}")]),t._v("不是正则集")]),t._v(" "),_("p",[t._v("证明：若L是正则集，假设泵长为k，那么串"),_("code",{pre:!0},[t._v("ω = a^k b^k")]),t._v("为此正则集中一个串。把ω拆分为三部分ω1ω0ω2，其中ω0为循环体，显然ω0不能只包含a或者只包含b，因为这样的话ω0的任意次方会导致新生成的串中a与b数量不同，不满足语言条件。所以ω0同时包含a和b。因为ω0长度大于0，所以ω0最短应为串ω的第n位与第n+1位，也就是"),_("code",{pre:!0},[t._v("ω0 = ab")]),t._v("，此时"),_("code",{pre:!0},[t._v("ω1 = a^(n-1)")]),t._v("，"),_("code",{pre:!0},[t._v("|ω1ω0| = n + 1 > n")]),t._v("，不满足条件。事实上ω0可以为"),_("code",{pre:!0},[t._v("a^x b^x")]),t._v("其中x小于等于n，这样构造出的ω1ω0的长度还是大于n，所以在一个长度大于n的串中找不到这样一个循环体ω0，不满足泵浦引理，所以原语言不是正则语言。")]),t._v(" "),_("h2",{attrs:{id:"右线性语言的封闭性"}},[t._v("右线性语言的封闭性")]),t._v(" "),_("p",[t._v("右线性语言及其"),_("strong",[t._v("并、积、闭包")]),t._v("是正则集")]),t._v(" "),_("h2",{attrs:{id:"正则语言的几个判定性质"}},[t._v("正则语言的几个判定性质")]),t._v(" "),_("h3",{attrs:{id:"判定正则语言是否为空"}},[t._v("判定正则语言是否为空")]),t._v(" "),_("p",[t._v("无法到达终止状态的语言视为空语言（即不接受任何串、任何串都无法到达终态）")]),t._v(" "),_("p",[t._v("算法复杂度O(n^2)")]),t._v(" "),_("h3",{attrs:{id:"判定正则语言是否包含特定的字符串"}},[t._v("判定正则语言是否包含特定的字符串")]),t._v(" "),_("ul",[_("li",[t._v("如果用DFA表示正则语言\n"),_("ul",[_("li",[t._v("如果DFA处理此串能够到达终态则包含此串")]),t._v(" "),_("li",[t._v("假设串长为n，算法复杂度O(n)")])])]),t._v(" "),_("li",[t._v("如果用NFA或ε-NFA表示正则语言\n"),_("ul",[_("li",[t._v("可以转换为DFA再判断")]),t._v(" "),_("li",[t._v("也可以直接判定是否能够到达终态")]),t._v(" "),_("li",[t._v("算法复杂度O(n2^s)，n为串长，s为自动机状态数量")])])]),t._v(" "),_("li",[t._v("如果用正则表达式表示正则语言\n"),_("ul",[_("li",[t._v("转换为等价的ε-NFA再判断")])])])]),t._v(" "),_("h3",{attrs:{id:"判定两个正则语言是否相等"}},[t._v("判定两个正则语言是否相等")]),t._v(" "),_("p",[t._v("构造DFA判断两个DFA是否相等")]),t._v(" "),_("h2",{attrs:{id:"有输出的有限自动机"}},[t._v("有输出的有限自动机")]),t._v(" "),_("ul",[_("li",[t._v("米兰机 输入和状态影响输出")]),t._v(" "),_("li",[t._v("摩尔机 状态影响输出，与输入无关")])]),t._v(" "),_("p",[t._v("有输出的自动机功能更多，可以减少状态")]),t._v(" "),_("h3",{attrs:{id:"米兰机"}},[t._v("米兰机")]),t._v(" "),_("p",[t._v("输出由输入和当前状态决定")]),t._v(" "),_("p",[t._v("米兰机的形式定义："),_("code",{pre:!0},[t._v("M = (Q, T, R, δ, g, q0)")]),t._v("，其中")]),t._v(" "),_("ul",[_("li",[t._v("Q 有限状态集")]),t._v(" "),_("li",[t._v("T 有限输入字母表")]),t._v(" "),_("li",[t._v("R 有限输出字母表")]),t._v(" "),_("li",[t._v("δ 转换函数")]),t._v(" "),_("li",[t._v("g 输出函数")]),t._v(" "),_("li",[t._v("q0 初始状态")])]),t._v(" "),_("p",[t._v("δ函数和g函数共同描述了米兰机的工作状况如：")]),t._v(" "),_("ul",[_("li",[t._v("δ(p, a) = q")]),t._v(" "),_("li",[t._v("g(p, a) = b")])]),t._v(" "),_("p",[t._v("这样两个式子可以得到下图")]),t._v(" "),_("p",[_("img",{attrs:{src:v(812),alt:"2-14"}})]),t._v(" "),_("p",[t._v("在状态转移箭头上面的"),_("code",{pre:!0},[t._v("a/b")]),t._v("表示输入a输出b")]),t._v(" "),_("p",[t._v("米兰机例题：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(813),alt:"2-15"}})]),t._v(" "),_("h3",{attrs:{id:"摩尔机"}},[t._v("摩尔机")]),t._v(" "),_("p",[t._v("输出与到达的状态有关")]),t._v(" "),_("p",[t._v("形式定义："),_("code",{pre:!0},[t._v("M = (Q, T, R, δ, g, q0)")]),t._v("，形式和米兰机一样，但是输出函数的参数只有当前状态。")]),t._v(" "),_("p",[t._v("比如这样的输出函数和状态转移函数：")]),t._v(" "),_("ul",[_("li",[t._v("δ(q, a) = p")]),t._v(" "),_("li",[t._v("g§ = b2")])]),t._v(" "),_("p",[t._v("意为状态q接收输入a可以转移到状态p，转移到状态p时输出字符b2。图形表示如下：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(814),alt:"2-16"}})]),t._v(" "),_("p",[t._v("摩尔机例题：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(815),alt:"2-17"}})]),t._v(" "),_("h3",{attrs:{id:"已知摩尔机构造等价米兰机"}},[t._v("已知摩尔机构造等价米兰机")]),t._v(" "),_("p",[t._v("可以看到米兰机的输出在状态转移箭头上，摩尔机的输出在状态中")]),t._v(" "),_("p",[t._v("想要根据摩尔机构造等价米兰机，只需要把目标状态中的输出放到状态转移箭头上面即可")]),t._v(" "),_("p",[t._v("例题：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(816),alt:"2-18"}})]),t._v(" "),_("h3",{attrs:{id:"已知米兰机构造摩尔机略"}},[t._v("已知米兰机构造摩尔机（略）")])])}]};t.exports={attributes:{layout:"collection",title:"有限自动机与右线性文法",collection:"FormalLanguageAndAutomata"},vue:{render:_.render,staticRenderFns:_.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=_.render,this.$options.staticRenderFns=_.staticRenderFns}}}}},799:function(t,n,v){t.exports=v.p+"img/2-1.689351c.png"},800:function(t,n,v){t.exports=v.p+"img/2-2.65bda40.png"},801:function(t,n,v){t.exports=v.p+"img/2-3.ecf9f56.png"},802:function(t,n,v){t.exports=v.p+"img/2-4.66a9f84.png"},803:function(t,n,v){t.exports=v.p+"img/2-5.b25f72e.png"},804:function(t,n,v){t.exports=v.p+"img/2-6.55a7a01.png"},805:function(t,n,v){t.exports=v.p+"img/2-7.928e14b.png"},806:function(t,n,v){t.exports=v.p+"img/2-8.23e720d.png"},807:function(t,n,v){t.exports=v.p+"img/2-9.3a615d9.png"},808:function(t,n,v){t.exports=v.p+"img/2-10.78c93ed.png"},809:function(t,n,v){t.exports=v.p+"img/2-11.eb47860.png"},810:function(t,n,v){t.exports=v.p+"img/2-12.cd5a140.png"},811:function(t,n,v){t.exports=v.p+"img/2-13.e637e54.png"},812:function(t,n,v){t.exports=v.p+"img/2-14.9577c54.png"},813:function(t,n,v){t.exports=v.p+"img/2-15.20223b2.png"},814:function(t,n,v){t.exports=v.p+"img/2-16.b7701f0.png"},815:function(t,n,v){t.exports=v.p+"img/2-17.4d467ba.png"},816:function(t,n,v){t.exports=v.p+"img/2-18.3adf4f4.png"}}]);