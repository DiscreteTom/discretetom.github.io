(window.webpackJsonp=window.webpackJsonp||[]).push([[30,865,866,867,868,869,870,871,872,873,875,876,877],{1403:function(v,_,t){const r={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("div",{staticClass:"frontmatter-markdown"},[r("p",[v._v("句法分析")]),v._v(" "),r("h2",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),r("p",[v._v("两种不同的句法结构：")]),v._v(" "),r("ul",[r("li",[v._v("依存结构(Dependency structure) - 词和其他词之间之间的依赖关系\n"),r("ul",[r("li",[v._v("表示为依存树(dependency tree)")]),v._v(" "),r("li",[r("img",{attrs:{src:t(989),alt:"6-1"}})])])]),v._v(" "),r("li",[r("strong",[v._v("短语结构")]),v._v("(Phrase structure) - 把句子表示为"),r("strong",[v._v("嵌套")]),v._v("的"),r("strong",[v._v("短语成分")]),v._v(" "),r("ul",[r("li",[v._v("可以表示为句法树")]),v._v(" "),r("li",[r("img",{attrs:{src:t(990),alt:"6-2"}})])])])]),v._v(" "),r("p",[v._v("本章仅针对"),r("strong",[v._v("短语结构分析")])]),v._v(" "),r("ul",[r("li",[v._v("输入 - 句子")]),v._v(" "),r("li",[v._v("输出 - 句法树")]),v._v(" "),r("li",[v._v("目的\n"),r("ul",[r("li",[v._v("判断输入句子是否合法")]),v._v(" "),r("li",[v._v("根据语法规则生成句法树")])])]),v._v(" "),r("li",[v._v("前置知识\n"),r("ul",[r("li",[v._v("如何形式化描述语言")]),v._v(" "),r("li",[v._v("句法分析算法")])])])]),v._v(" "),r("h2",{attrs:{id:"词性"}},[v._v("词性")]),v._v(" "),r("p",[v._v("常见词性：")]),v._v(" "),r("ul",[r("li",[v._v("N = noun")]),v._v(" "),r("li",[v._v("V = verb")]),v._v(" "),r("li",[v._v("DT = determiner")]),v._v(" "),r("li",[v._v("NP = noun phrase")]),v._v(" "),r("li",[v._v("VP = verb phrase")]),v._v(" "),r("li",[v._v("S = sentence")])]),v._v(" "),r("p",[v._v("例：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(991),alt:"6-3"}})]),v._v(" "),r("h2",{attrs:{id:"形式语法"}},[v._v("形式语法")]),v._v(" "),r("h3",{attrs:{id:"概述-1"}},[v._v("概述")]),v._v(" "),r("p",[r("strong",[v._v("形式语法")]),v._v("是规定语言中允许出现的结构的形式化说明")]),v._v(" "),r("p",[v._v("几种主要的形式语法：")]),v._v(" "),r("ul",[r("li",[v._v("CFG(s): context-free grammar(s) 上下文无关文法")]),v._v(" "),r("li",[v._v("LFG: lexical functional grammar")]),v._v(" "),r("li",[v._v("HPSG: head-driven phrase-structure grammar")]),v._v(" "),r("li",[v._v("TAG: tree adjoining grammar")]),v._v(" "),r("li",[v._v("CCG: combinatory categorical grammar")])]),v._v(" "),r("p",[v._v("本章重点讲述上下文无关文法")]),v._v(" "),r("h3",{attrs:{id:"上下文无关文法"}},[v._v("上下文无关文法")]),v._v(" "),r("p",[v._v("生成式左侧有且仅有一个非终结符的文法（详见形式语言与自动机）")]),v._v(" "),r("p",[v._v("因为左侧仅有一个非终结符，所以和上下文无关")]),v._v(" "),r("h3",{attrs:{id:"chomsky范式"}},[v._v("Chomsky范式")]),v._v(" "),r("p",[v._v("生成式右侧仅能出现以下两种情况：")]),v._v(" "),r("ul",[r("li",[v._v("两个非终结符")]),v._v(" "),r("li",[v._v("一个终结符")])]),v._v(" "),r("p",[v._v("详见形式语言与自动机")]),v._v(" "),r("h2",{attrs:{id:"cky-parsing"}},[v._v("CKY Parsing")]),v._v(" "),r("p",[v._v("Cocke-Kasami-Younger Parsing")]),v._v(" "),r("h3",{attrs:{id:"概述-2"}},[v._v("概述")]),v._v(" "),r("p",[v._v("CKY句法分析，使用"),r("strong",[v._v("自底向上")]),v._v("句法分析算法计算句法树。使用"),r("strong",[v._v("线图")]),v._v("(chart)存储中间结果")]),v._v(" "),r("p",[v._v("其实就是"),r("strong",[v._v("逆向递归下降分析")]),v._v("，就称作"),r("strong",[v._v("递归上升分析")]),v._v("好了（我瞎起的名字")]),v._v(" "),r("h3",{attrs:{id:"算法"}},[v._v("算法")]),v._v(" "),r("p",[v._v("首先把词转换成词性标签：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(992),alt:"6-4"}})]),v._v(" "),r("p",[v._v("然后从左向右递归穷举，查询是否有这样的有效生成式。。。如果找不到就回退")]),v._v(" "),r("h2",{attrs:{id:"句法分析的问题常见歧义"}},[v._v("句法分析的问题（常见歧义）")]),v._v(" "),r("h3",{attrs:{id:"词性歧义"}},[v._v("词性歧义")]),v._v(" "),r("p",[r("img",{attrs:{src:t(993),alt:"6-5"}})]),v._v(" "),r("h3",{attrs:{id:"名词修饰语歧义"}},[v._v("名词修饰语歧义")]),v._v(" "),r("p",[r("img",{attrs:{src:t(994),alt:"6-7"}})]),v._v(" "),r("h3",{attrs:{id:"介词短语修饰语歧义"}},[v._v("介词短语修饰语歧义")]),v._v(" "),r("p",[r("img",{attrs:{src:t(995),alt:"6-8"}})]),v._v(" "),r("h3",{attrs:{id:"边界歧义"}},[v._v("边界歧义")]),v._v(" "),r("p",[r("img",{attrs:{src:t(422),alt:"6-9"}})]),v._v(" "),r("h2",{attrs:{id:"概率上下文无关文法"}},[v._v("概率上下文无关文法")]),v._v(" "),r("h3",{attrs:{id:"概述-3"}},[v._v("概述")]),v._v(" "),r("p",[v._v("试图解决上述歧义问题")]),v._v(" "),r("p",[v._v("PCFGs(Probabilistic context-free grammars) or SCFGs(Stochastic context-free grammars)")]),v._v(" "),r("p",[v._v("基本思想：如果一个非终结符拥有多个不同的生成式，"),r("strong",[v._v("给这些生成式赋予一个概率值")]),v._v("，如：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(422),alt:"6-9"}})]),v._v(" "),r("p",[v._v("则最终"),r("strong",[v._v("句法树的概率值为所有使用的生成式的概率值的乘积")])]),v._v(" "),r("h3",{attrs:{id:"pcfg的假设"}},[v._v("PCFG的假设")]),v._v(" "),r("ul",[r("li",[v._v("位置不变性 - 概率不随非终结符在树的位置不同而不同")]),v._v(" "),r("li",[v._v("上下文无关 - 概率不随非终结符附近的符号不同而不同")]),v._v(" "),r("li",[v._v("祖先节点无关 - 概率不随未来的规约操作不同而不同")])]),v._v(" "),r("h3",{attrs:{id:"模型参数"}},[v._v("模型参数")]),v._v(" "),r("p",[v._v("因为PCFG使用Chomsky范式，所以模型的生成式只有如下两种情况：")]),v._v(" "),r("ul",[r("li",[v._v("生成式右侧为两个非终结符\n"),r("ul",[r("li",[v._v("A -> BC")])])]),v._v(" "),r("li",[v._v("生成式右侧为一个终结符\n"),r("ul",[r("li",[v._v("A -> a")])])])]),v._v(" "),r("p",[v._v("令非终结符数量为n，终结符数量为t。模型参数即为所有生成式的概率，所以需要")]),v._v(" "),r("ul",[r("li",[v._v("一个"),r("code",{pre:!0},[v._v("n*n*n")]),v._v("的三维矩阵保存第一种情况的参数")]),v._v(" "),r("li",[v._v("一个"),r("code",{pre:!0},[v._v("n*t")]),v._v("的而为矩阵保存第二种情况的参数")])]),v._v(" "),r("h3",{attrs:{id:"如何使用pcfg找到最优句法树"}},[v._v("如何使用PCFG找到最优句法树")]),v._v(" "),r("p",[v._v("显然也使用"),r("strong",[v._v("动态规划")])]),v._v(" "),r("p",[v._v("定义动态规划表项"),r("code",{pre:!0},[v._v("π(i, j, X)")]),v._v("表示由非终结符X推出子串"),r("code",{pre:!0},[v._v("[wi, ..., wj]")]),v._v("的最大概率")]),v._v(" "),r("ul",[r("li",[v._v("初始化\n"),r("ul",[r("li",[v._v("非终结符能直接推出的子串只有一个终结符（Chomsky范式限定）")]),v._v(" "),r("li",[r("img",{attrs:{src:t(996),alt:"6-10"}})])])]),v._v(" "),r("li",[v._v("递推\n"),r("ul",[r("li",[v._v("概率等于【"),r("strong",[v._v("生成式概率")]),v._v("乘"),r("strong",[v._v("根据生成式确定的推导子串最大概率")]),v._v("】的最大值")]),v._v(" "),r("li",[r("img",{attrs:{src:t(997),alt:"6-11"}})])])]),v._v(" "),r("li",[v._v("终止\n"),r("ul",[r("li",[v._v("得到"),r("code",{pre:!0},[v._v("π(1, n, S)")]),v._v("，即初始符号S推出整个串的最大概率")]),v._v(" "),r("li",[r("img",{attrs:{src:t(998),alt:"6-12"}})])])])]),v._v(" "),r("h3",{attrs:{id:"如何得到pcfg略"}},[v._v("如何得到PCFG（略")]),v._v(" "),r("p",[v._v("句法规则学习")]),v._v(" "),r("p",[v._v("Penn treebank: 由the University of Pennsylvania创建的树库")]),v._v(" "),r("h2",{attrs:{id:"句法分析的评价"}},[v._v("句法分析的评价")]),v._v(" "),r("p",[v._v("例：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(999),alt:"6-13"}})]),v._v(" "),r("p",[v._v("注意输出的结果包括了"),r("strong",[v._v("标签")]),v._v("与"),r("strong",[v._v("标签的【括号】的位置")]),v._v("（数字表示括号位置，即空白位置）")]),v._v(" "),r("p",[v._v("对比标准结果和系统输出结果，标准结果输出了8个标签，系统输出了7个标签。二者有3个标签相同。")]),v._v(" "),r("ul",[r("li",[v._v("标记正确率(LP: labeled precision) = 分析正确的短语个数/分析得到的短语个数\n"),r("ul",[r("li",[v._v("此例中为3/7=42.9%")])])]),v._v(" "),r("li",[v._v("标记召回率(LR: labeled recall) = 分析正确的短语个数/标准结果中的短语个数\n"),r("ul",[r("li",[v._v("此例中为3/8=37.5%")])])]),v._v(" "),r("li",[v._v("正确率和召回率综合指标"),r("code",{pre:!0},[v._v("F1 = 2 * LP * LR / (LP + LR)")]),v._v(" "),r("ul",[r("li",[v._v("此例中为40%")])])]),v._v(" "),r("li",[v._v("词性标注准确率(tagging accuracy)\n"),r("ul",[r("li",[v._v("此例中所有词的初始词性均标注正确，即100%")])])])])])}]};v.exports={attributes:{layout:"collection",title:"Parsing",collection:"NaturalLanguageProcessing"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}},422:function(v,_,t){v.exports=t.p+"img/6-9.40a1296.png"},989:function(v,_,t){v.exports=t.p+"img/6-1.fd86ea7.png"},990:function(v,_,t){v.exports=t.p+"img/6-2.6477700.png"},991:function(v,_,t){v.exports=t.p+"img/6-3.09484f9.png"},992:function(v,_,t){v.exports=t.p+"img/6-4.4a5abc4.png"},993:function(v,_,t){v.exports=t.p+"img/6-5.3ce2901.png"},994:function(v,_,t){v.exports=t.p+"img/6-7.82b029b.png"},995:function(v,_,t){v.exports=t.p+"img/6-8.9b33213.png"},996:function(v,_,t){v.exports=t.p+"img/6-10.63f35bf.png"},997:function(v,_,t){v.exports=t.p+"img/6-11.41ee51e.png"},998:function(v,_,t){v.exports=t.p+"img/6-12.1d2192d.png"},999:function(v,_,t){v.exports=t.p+"img/6-13.53e0528.png"}}]);