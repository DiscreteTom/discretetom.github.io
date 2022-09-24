(window.webpackJsonp=window.webpackJsonp||[]).push([[28,684,685,686,687,688,689,690,691,692,693,694,695],{1365:function(t,v,_){const n={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,v=t.$createElement,n=t._self._c||v;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"预备知识"}},[t._v("预备知识")]),t._v(" "),n("ul",[n("li",[t._v("上下文无关文法\n"),n("ul",[n("li",[t._v("生成式左侧为一个非终结符，右侧为任意")]),t._v(" "),n("li",[t._v("因为生成式左侧只有一个非终结符，不和上下文相关，故被称为上下文无关文法")])])]),t._v(" "),n("li",[t._v("句型与句子\n"),n("ul",[n("li",[t._v("句型 - 从初始符号开始能够推导出来的"),n("strong",[t._v("符号串（包括非终结符")])]),t._v(" "),n("li",[t._v("句子 - 从初始符号开始能够推导出来的"),n("strong",[t._v("终结符号串")])]),t._v(" "),n("li",[t._v("仅包含终结符的句型就是句子")])])]),t._v(" "),n("li",[t._v("推导与归约\n"),n("ul",[n("li",[t._v("推导 - 从初始符号推出句子\n"),n("ul",[n("li",[t._v("最左推导 - 每次都替换最左边的非终结符")]),t._v(" "),n("li",[t._v("最右推导 - 也称为"),n("strong",[t._v("规范推导")])])])]),t._v(" "),n("li",[t._v("归约 - 从句子归纳为初始符号")]),t._v(" "),n("li",[t._v("最右规约 - 每次都规约最右边的符号串。最左推导的逆过程。")]),t._v(" "),n("li",[t._v("最左归约 - 每次都归约最左边的符号串。"),n("strong",[t._v("最右推导的逆过程")]),t._v("，也称为"),n("strong",[t._v("规范归约")])])])])]),t._v(" "),n("p",[t._v("推导相关的符号：")]),t._v(" "),n("ul",[n("li",[t._v("一步推导（下文中使用"),n("code",{pre:!0},[t._v("=>")]),t._v("表示\n"),n("ul",[n("li",[n("img",{attrs:{src:_(821),alt:"3-1"}})])])]),t._v(" "),n("li",[t._v("n步推导（下文中使用"),n("code",{pre:!0},[t._v("=n>")]),t._v("表示\n"),n("ul",[n("li",[n("img",{attrs:{src:_(822),alt:"3-5"}})])])]),t._v(" "),n("li",[t._v("至少一步推导（下文中使用"),n("code",{pre:!0},[t._v("=+>")]),t._v("表示\n"),n("ul",[n("li",[n("img",{attrs:{src:_(823),alt:"3-6"}})])])]),t._v(" "),n("li",[t._v("0或n步推导（下文中使用"),n("code",{pre:!0},[t._v("=*>")]),t._v("表示\n"),n("ul",[n("li",[n("img",{attrs:{src:_(824),alt:"3-7"}})])])]),t._v(" "),n("li",[t._v("最左推导\n"),n("ul",[n("li",[n("img",{attrs:{src:_(825),alt:"3-8"}})]),t._v(" "),n("li",[n("img",{attrs:{src:_(826),alt:"3-10"}})])])]),t._v(" "),n("li",[t._v("最右推导\n"),n("ul",[n("li",[n("img",{attrs:{src:_(827),alt:"3-9"}})]),t._v(" "),n("li",[n("img",{attrs:{src:_(828),alt:"3-11"}})])])])]),t._v(" "),n("p",[t._v("自顶向下分析，这里的"),n("strong",[t._v("顶")]),t._v("和"),n("strong",[t._v("下")]),t._v("分别对应"),n("strong",[t._v("分析树")]),t._v("的"),n("strong",[t._v("根")]),t._v("和"),n("strong",[t._v("叶")]),t._v("。自顶向下即从树根分析到树叶，也就是"),n("strong",[t._v("从文法开始符号生成目标串的过程")])]),t._v(" "),n("h2",{attrs:{id:"语法分析器目标"}},[t._v("语法分析器目标")]),t._v(" "),n("ul",[n("li",[t._v("判断输入是否合法")]),t._v(" "),n("li",[t._v("输出所使用的生成式")])]),t._v(" "),n("h2",{attrs:{id:"自顶向下分析方法"}},[t._v("自顶向下分析方法")]),t._v(" "),n("h3",{attrs:{id:"递归下降分析"}},[t._v("递归下降分析")]),t._v(" "),n("p",[t._v("从文法的开始符号向下一直"),n("strong",[t._v("推导试探")]),t._v("，试图建立一个"),n("strong",[t._v("最左推导")]),t._v("。")]),t._v(" "),n("p",[t._v("如：把各个生成式编号，然后遍历看此生成式能不能被使用（即使生成式的第一个符号为非终结符")]),t._v(" "),n("p",[n("strong",[t._v("为什么使用最左推导")]),t._v(" - 因为对输入串的扫描是从左至右的")]),t._v(" "),n("p",[t._v("缺点：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("不能存在左递归")]),t._v(" - 会死循环，引起"),n("strong",[t._v("无穷推导")])]),t._v(" "),n("li",[t._v("如果文法存在"),n("strong",[t._v("回溯")]),t._v("则会导致工作重复、效率低（详见后文")])]),t._v(" "),n("h3",{attrs:{id:"递归调用预测分析特殊的递归下降分析"}},[t._v("递归调用预测分析（特殊的递归下降分析")]),t._v(" "),n("p",[t._v("一种确定的、不带回溯的递归下降分析方法")]),t._v(" "),n("p",[t._v("思想：消除文法的左递归和回溯")]),t._v(" "),n("h4",{attrs:{id:"左递归消除技术"}},[t._v("左递归消除技术")]),t._v(" "),n("p",[n("strong",[t._v("消除直接左递归")]),t._v("（"),n("strong",[t._v("转换为右递归")]),t._v("）：把左递归式"),n("code",{pre:!0},[t._v("A -> Aa | b")]),t._v("转换为"),n("code",{pre:!0},[t._v("A -> bA'")]),t._v("和"),n("code",{pre:!0},[t._v("A' -> aA' | ε")]),t._v("，二者的正则式都是"),n("code",{pre:!0},[t._v("ba*")])]),t._v(" "),n("p",[n("strong",[t._v("消除间接左递归")]),t._v("思想：先给非终结符排序，然后通过一些操作使"),n("strong",[t._v("大索引非终结符无法生成小索引非终结符开头的候选式")]),t._v("，这样即使存在小索引非终结符生成大索引非终结符开头的候选式也不会构成间接左递归")]),t._v(" "),n("p",[t._v("消除间接左递归"),n("strong",[t._v("算法")]),t._v("：")]),t._v(" "),n("pre",{staticClass:"language-cpp"},[n("code",{pre:!0,attrs:{class:"language-cpp"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//要求输入为无环无ε产生式的文法，所以要先消空")]),t._v("\n把文法G中的所有非终结符号排序为A1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" A2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" An\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t消除Ai产生式中的直接左递归\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Aj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" δ"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" δ"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" δn是当前关于Aj的所有产生式"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("存在形如Ai "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" Ajγ的生成式"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t把每个形如Ai "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" Ajγ的产生式改写为Ai "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" δ"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("γ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" δ"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("γ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" δnγ\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t消除Ai产生式中的直接左递归\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n化简文法，去除无用的非终结符和产生式\n")])]),t._v(" "),n("h4",{attrs:{id:"回溯问题的尝试解决"}},[t._v("回溯问题的尝试解决")]),t._v(" "),n("p",[t._v("考虑文法"),n("code",{pre:!0},[t._v("A -> aA | aB")]),t._v("，当试探"),n("code",{pre:!0},[t._v("aA")]),t._v("失败时会试探"),n("code",{pre:!0},[t._v("aB")]),t._v("，这时因为两个"),n("strong",[t._v("候选式左侧有相同的成分")]),t._v("所以在"),n("code",{pre:!0},[t._v("a")]),t._v("被匹配时，如果"),n("code",{pre:!0},[t._v("aA")]),n("strong",[t._v("失配")]),t._v("了要"),n("strong",[t._v("回来匹配")]),n("code",{pre:!0},[t._v("aB")]),t._v("，这就是"),n("strong",[t._v("回溯")]),t._v("。")]),t._v(" "),n("p",[t._v("我们希望生成没有回溯的文法，即"),n("strong",[t._v("面对一个输入的符号，可以确定使用当前符号的哪个候选式")])]),t._v(" "),n("p",[t._v("避免回溯，对文法的要求：")]),t._v(" "),n("ul",[n("li",[t._v("不含左递归（所以要先消左递归")]),t._v(" "),n("li",[t._v("同一个非终结符的任意两个候选式的FIRST集不相交（FIRST集详见后文非递归预测分析表的构造")])]),t._v(" "),n("p",[t._v("例：判断下面的文法是否存在回溯：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("A -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" aB "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" BA\nB -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" aA\n")])]),t._v(" "),n("p",[t._v("答案是存在回溯的，因为FIRST(aB)和FIRST(BC)存在交集{a}，所以判断是否存在回溯"),n("strong",[t._v("不能只看公共前缀")])]),t._v(" "),n("p",[t._v("解决方法："),n("strong",[t._v("提取左公因子")]),t._v("（只能减少，不能完全消除）。思路：使文法每个候选式都有"),n("strong",[t._v("不同的前缀")]),t._v("，根据此前缀就可以"),n("strong",[t._v("一次性确定使用哪个候选式")]),t._v("而不用回溯。即生成类似这样的文法："),n("code",{pre:!0},[t._v("A -> aA | bB")]),t._v("，通过匹配"),n("code",{pre:!0},[t._v("a")]),t._v("或者"),n("code",{pre:!0},[t._v("b")]),t._v("，我们就可以选定使用候选式"),n("code",{pre:!0},[t._v("aA")]),t._v("还是"),n("code",{pre:!0},[t._v("bB")]),t._v("，"),n("strong",[t._v("失配即为出错而不需要回溯")])]),t._v(" "),n("h4",{attrs:{id:"递归调用预测分析程序的构造"}},[t._v("递归调用预测分析程序的构造")]),t._v(" "),n("ol",[n("li",[t._v("消除左递归，使用提取左公因子方案尽量消除回溯（"),n("strong",[t._v("切记勿忘")]),t._v("（如果没有完全消除回溯就会产生冲突而无法分析")]),t._v(" "),n("li",[t._v("为"),n("strong",[t._v("每个终结符号")]),t._v("建立状态转换图，如"),n("code",{pre:!0},[t._v("F -> (E) | id")])])]),t._v(" "),n("p",[n("img",{attrs:{src:_(829),alt:"3-12"}})]),t._v(" "),n("p",[t._v("可以看到图中允许出现非终结符")]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("合并状态，化简状态转换图")]),t._v(" "),n("li",[t._v("根据状态转换图，构造预测分析程序的各个函数（每个非终结符一个状态转换图，一个函数）")])]),t._v(" "),n("p",[t._v("如上述的"),n("code",{pre:!0},[t._v("F -> (E) | id")]),t._v("对应的C语言代码（建议对照着上面的状态转换图看下面的代码）：")]),t._v(" "),n("pre",{staticClass:"language-cpp"},[n("code",{pre:!0,attrs:{class:"language-cpp"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("procF")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token char"}},[t._v("'('")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t指针前移"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("procE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token char"}},[t._v("')'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t指针前移"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t因为识别了完整的生成式，输出生成式"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token char"}},[t._v("'id'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t指针前移"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t因为识别了完整的生成式，输出生成式"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("p",[t._v("可以看到处理终结符就是指针前移的过程，处理非终结符就是调用对应函数的过程。总体来说是一个递归的过程。")]),t._v(" "),n("p",[t._v("如果产生回溯冲突，即存在两个候选式的FIRST集相交的情况，那么在函数中就不知道该调用哪个函数，所以"),n("strong",[t._v("自顶向下分析严禁出现回溯")])]),t._v(" "),n("h3",{attrs:{id:"非递归预测分析"}},[t._v("非递归预测分析")]),t._v(" "),n("p",[t._v("非递归预测分析在选定一个候选式后"),n("strong",[t._v("不再考虑回溯")]),t._v("的情况，直接试图匹配此候选式（类似于尾递归")]),t._v(" "),n("p",[t._v("分析所需材料：")]),t._v(" "),n("ul",[n("li",[t._v("一个"),n("strong",[t._v("分析表")])]),t._v(" "),n("li",[t._v("一个"),n("strong",[t._v("分析栈")])])]),t._v(" "),n("p",[t._v("举例：考虑如下文法")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("E -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" TE"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\nE'")]),t._v(" -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" +TE"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\nE'")]),t._v(" -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ε\nT -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" FT"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\nT'")]),t._v(" -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ε\nF -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v("\n")])]),t._v(" "),n("p",[t._v("构造分析表：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(420),alt:""}})]),t._v(" "),n("p",[t._v("分析表和分析栈的使用：")]),t._v(" "),n("ul",[n("li",[t._v("如果分析栈的栈顶为终结符\n"),n("ul",[n("li",[t._v("如果输入的下一个字符为正确的终结符则匹配成功，弹栈")]),t._v(" "),n("li",[t._v("如果输入的下一个字符为错误的终结符则匹配失败")])])]),t._v(" "),n("li",[t._v("如果分析栈的栈顶为非终结符，使用分析表，把对应的分析表项"),n("strong",[t._v("逆向")]),t._v("（从右向左）压栈")])]),t._v(" "),n("h4",{attrs:{id:"使用分析表和分析栈解析输入串"}},[t._v("使用分析表和分析栈解析输入串")]),t._v(" "),n("p",[t._v("使用上述文法和分析表分析输入串"),n("code",{pre:!0},[t._v("id+id*id")]),t._v("解题过程：")]),t._v(" "),n("p",[t._v("首先把输入串的结束符"),n("code",{pre:!0},[t._v("$")]),t._v("压入栈底（这样匹配结束的标志就是栈底"),n("code",{pre:!0},[t._v("$")]),t._v("和输入的"),n("code",{pre:!0},[t._v("$")]),t._v("消除），然后把初始非终结符压入栈。")]),t._v(" "),n("p",[t._v("注意把候选式压栈时候要逆向压栈")]),t._v(" "),n("p",[t._v("输出行为或使用的生成式")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("分析栈")]),t._v(" "),n("th",[t._v("输入")]),t._v(" "),n("th",[t._v("输出")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("code",{pre:!0},[t._v("$E")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("id+id*id$")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("E -> TE'")])])]),t._v(" "),n("tr",[n("td",[n("code",{pre:!0},[t._v("$E'T")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("id+id*id$")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("T -> FT'")])])]),t._v(" "),n("tr",[n("td",[n("code",{pre:!0},[t._v("$E'T'F")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("id+id*id$")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("F -> id")])])]),t._v(" "),n("tr",[n("td",[n("code",{pre:!0},[t._v("$E'T'id")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("id+id*id$")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("match id")])])]),t._v(" "),n("tr",[n("td",[n("code",{pre:!0},[t._v("$E'T'")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("+id*id$")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("T' -> ε")])])]),t._v(" "),n("tr",[n("td",[n("code",{pre:!0},[t._v("$E'")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("+id*id$")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("E' -> +TE'")])])]),t._v(" "),n("tr",[n("td",[n("code",{pre:!0},[t._v("$E'T+")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("+id*id$")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("match +")])])]),t._v(" "),n("tr",[n("td",[n("code",{pre:!0},[t._v("$E'T")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("id*id$")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("T -> FT'")])])]),t._v(" "),n("tr",[n("td",[n("code",{pre:!0},[t._v("$E'T'F")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("id*id$")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("F -> id")])])]),t._v(" "),n("tr",[n("td",[t._v("…")]),t._v(" "),n("td",[t._v("…")]),t._v(" "),n("td",[t._v("…")])]),t._v(" "),n("tr",[n("td",[n("code",{pre:!0},[t._v("$E'T'id")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("id$")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("match id")])])]),t._v(" "),n("tr",[n("td",[n("code",{pre:!0},[t._v("$E'T'")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("$")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("T' -> ε")])])]),t._v(" "),n("tr",[n("td",[n("code",{pre:!0},[t._v("$E'")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("$")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("E' -> ε")])])]),t._v(" "),n("tr",[n("td",[n("code",{pre:!0},[t._v("$")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("$")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("accept")])])])])]),t._v(" "),n("h4",{attrs:{id:"分析表的构造"}},[t._v("分析表的构造")]),t._v(" "),n("p",[t._v("定义两个重要集合（构造方法略）：")]),t._v(" "),n("ul",[n("li",[t._v("句型α的FIRST集（FIRST(α)） - 此句型能推出的所有句子的首终结符的集合（可以包含ε")]),t._v(" "),n("li",[t._v("非终结符A的FOLLOW集（FOLLOW(A)） - 此非终结符后面的句型的FIRST集（不可以包含ε，可以包含"),n("code",{pre:!0},[t._v("$")]),t._v("（输入符号串的结束符")])]),t._v(" "),n("p",[t._v("分析表的构造思想：当栈顶为非终结符A且输入为终结符a时，应使用一个唯一的（多步）推导"),n("code",{pre:!0},[t._v("A =+> axxx")]),t._v("来推出a，也就是把"),n("code",{pre:!0},[t._v("xxxa")]),t._v("压入栈（逆向压栈），这样栈顶a和输入a就可以匹配。所以")]),t._v(" "),n("ul",[n("li",[t._v("如果存在生成式"),n("code",{pre:!0},[t._v("A -> ω")]),t._v("且FIRST(ω)（即FIRST(A)）中存在a，那么表项"),n("code",{pre:!0},[t._v("[A, a]")]),t._v("中应该放入生成式"),n("code",{pre:!0},[t._v("A -> ω")])]),t._v(" "),n("li",[t._v("如果经过（多步）推导得到"),n("code",{pre:!0},[t._v("A =+> ε")]),t._v("（即ε在FIRST(A)中），则A可能推出空串，由A后面的符号匹配a，也就是用A的FOLLOW集中的元素匹配a，所以如果FOLLOW(A)中包含a则表示A后面的句型能够匹配a，则把"),n("code",{pre:!0},[t._v("A => ε")]),t._v("过程中的第一次推导使用的生成式放到表项[A, a]中")])]),t._v(" "),n("p",[t._v("分析表构造举例：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(420),alt:"3-2"}})]),t._v(" "),n("p",[t._v("如果同一个非终结符的多个候选式的FIRST集有交集，则"),n("strong",[t._v("同一个分析表项需要填超过一个候选式，也就是产生了冲突")]),t._v("。如果一个候选式为空串"),n("code",{pre:!0},[t._v("ε")]),t._v("，则表明此符号可能被跳过，所以调用空串候选式时后面出现的第一个终结符应该为此非终结符的FOLLOW集，所以此时还要看FOLLOW集。（详见下文LL(1)文法")]),t._v(" "),n("h2",{attrs:{id:"错误处理"}},[t._v("错误处理")]),t._v(" "),n("h3",{attrs:{id:"基础应急式错误处理方式"}},[t._v("基础（应急式）错误处理方式")]),t._v(" "),n("ul",[n("li",[t._v("栈顶为终结符，输入失配（视为程序员"),n("strong",[t._v("少写")]),t._v("了），"),n("strong",[t._v("弹出栈顶")])]),t._v(" "),n("li",[t._v("栈顶为非终结符，分析表项为空（视为程序员"),n("strong",[t._v("多写")]),t._v("了），"),n("strong",[t._v("跳过输入符号")])])]),t._v(" "),n("h3",{attrs:{id:"使用同步信息synch"}},[t._v("使用同步信息(synch)")]),t._v(" "),n("p",[t._v("假设分析表中的没有表项[A, a]，但是a在FOLLOW(A)中，即视为程序员"),n("strong",[t._v("少写")]),t._v("了A能够生成的部分，所以应该弹出A")]),t._v(" "),n("p",[t._v("所以在分析表内符合条件的表项加入synch符号如下图")]),t._v(" "),n("p",[n("img",{attrs:{src:_(830),alt:"3-3"}})]),t._v(" "),n("p",[t._v("错误处理方式改为：")]),t._v(" "),n("ul",[n("li",[t._v("栈顶为终结符，输入失配（视为程序员"),n("strong",[t._v("少写")]),t._v("了），"),n("strong",[t._v("弹出栈顶")])]),t._v(" "),n("li",[t._v("栈顶为非终结符\n"),n("ul",[n("li",[t._v("分析表项为空（视为程序员"),n("strong",[t._v("多写")]),t._v("了），"),n("strong",[t._v("跳过输入符号")])]),t._v(" "),n("li",[t._v("分析表项为synch（视为程序员"),n("strong",[t._v("少写")]),t._v("了），"),n("strong",[t._v("弹出栈顶")])])])])]),t._v(" "),n("p",[t._v("使用带有synch的分析表"),n("strong",[t._v("更有可能在出现错误时成功匹配到最后")]),t._v("（即两个"),n("code",{pre:!0},[t._v("$")]),t._v("匹配）从而结束分析程序（防止程序崩溃）")]),t._v(" "),n("h2",{attrs:{id:"ll1文法"}},[t._v("LL(1)文法")]),t._v(" "),n("p",[t._v("所有无左递归、无左公因子的上下文无关文法都可以使用非递归预测分析法吗？")]),t._v(" "),n("p",[n("strong",[t._v("不能")]),t._v("，如果文法有二义性，那么分析表的单个表项会存在两个生成式")]),t._v(" "),n("p",[n("img",{attrs:{src:_(831),alt:"3-4"}})]),t._v(" "),n("p",[t._v("导致语法分析程序不知道该使用哪个生成式（虽然可以使用回溯解决，但是这违背了我们的初衷")]),t._v(" "),n("h3",{attrs:{id:"定义"}},[t._v("定义")]),t._v(" "),n("p",[n("strong",[t._v("定义LL(1)文法")]),t._v("：如果一个文法的分析表"),n("strong",[t._v("不含多重定义")]),t._v("的表项则称文法为LL(1)文法")]),t._v(" "),n("p",[t._v("显然LL(1)文法一定可以使用非递归预测分析。所以"),n("strong",[t._v("使用LL(1)文法的非递归预测分析")]),t._v("称为"),n("strong",[t._v("LL(1)分析法")])]),t._v(" "),n("p",[t._v("LL(1)的含义：")]),t._v(" "),n("ul",[n("li",[t._v("第一个L - 从左至右输入")]),t._v(" "),n("li",[t._v("第二个L - 生成输入串的最左推导")]),t._v(" "),n("li",[t._v("1 - 分析的时候"),n("strong",[t._v("向前看一个符号")]),t._v("，根据此符号确定分析动作")])]),t._v(" "),n("h3",{attrs:{id:"判定"}},[t._v("判定")]),t._v(" "),n("p",[t._v("根据定义，首先此文法能够生成分析表，这就需要文法"),n("strong",[t._v("不含左递归和左公因子")])]),t._v(" "),n("p",[t._v("其次，需要判断"),n("strong",[t._v("二义性")]),t._v("。如果非终结符A能够推出ε且A的某个非空候选式的FIRST集和FOLLOW(A)中包含相同终结符a，那么当输入a时无法判断应该直接匹配对应非空生成式还是使用ε缺席匹配。")]),t._v(" "),n("h3",{attrs:{id:"结论"}},[t._v("结论")]),t._v(" "),n("p",[n("strong",[t._v("LL(1)文法是无左递归、无回溯、无二义性的文法")])])])}]};t.exports={attributes:{layout:"collection",title:"语法分析 - 自顶向下分析",collection:"FundamentalsOfCompiling"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},420:function(t,v,_){t.exports=_.p+"img/3-2.400b8bf.png"},821:function(t,v,_){t.exports=_.p+"img/3-1.00498e8.png"},822:function(t,v,_){t.exports=_.p+"img/3-5.8bce0c0.png"},823:function(t,v,_){t.exports=_.p+"img/3-6.0720bc3.png"},824:function(t,v,_){t.exports=_.p+"img/3-7.a6a4df8.png"},825:function(t,v,_){t.exports=_.p+"img/3-8.7aadda7.png"},826:function(t,v,_){t.exports=_.p+"img/3-10.e5d979d.png"},827:function(t,v,_){t.exports=_.p+"img/3-9.c671313.png"},828:function(t,v,_){t.exports=_.p+"img/3-11.b45fca1.png"},829:function(t,v,_){t.exports=_.p+"img/3-12.986ad3e.png"},830:function(t,v,_){t.exports=_.p+"img/3-3.1968bb2.png"},831:function(t,v,_){t.exports=_.p+"img/3-4.b76a997.png"}}]);