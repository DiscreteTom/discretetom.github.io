(window.webpackJsonp=window.webpackJsonp||[]).push([[89,801,802],{1392:function(v,_,t){const n={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,n=v._self._c||_;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"什么是自然语言处理"}},[v._v("什么是自然语言处理")]),v._v(" "),n("p",[n("img",{attrs:{src:t(932),alt:"1-1"}})]),v._v(" "),n("p",[v._v("应用：")]),v._v(" "),n("ul",[n("li",[v._v("拼写检查")]),v._v(" "),n("li",[v._v("搜索引擎")]),v._v(" "),n("li",[v._v("信息抽取")]),v._v(" "),n("li",[v._v("机器翻译")]),v._v(" "),n("li",[v._v("人机对话")])]),v._v(" "),n("p",[v._v("自然语言处理(Natural Language Processing, NLP)主要包括")]),v._v(" "),n("ul",[n("li",[v._v("自然语言的理解(Natural Language Understanding, NLU)")]),v._v(" "),n("li",[v._v("自然语言的生成(Natural Language Generation, NLG)")])]),v._v(" "),n("p",[v._v("基础工具：")]),v._v(" "),n("ul",[n("li",[v._v("数学\n"),n("ul",[n("li",[v._v("概率论")]),v._v(" "),n("li",[v._v("随机过程")]),v._v(" "),n("li",[v._v("矩阵论")]),v._v(" "),n("li",[v._v("最优化理论")])])]),v._v(" "),n("li",[v._v("计算机\n"),n("ul",[n("li",[v._v("数据结构")]),v._v(" "),n("li",[v._v("高级语言编程")])])])]),v._v(" "),n("h2",{attrs:{id:"解决问题"}},[v._v("解决问题")]),v._v(" "),n("h3",{attrs:{id:"流程"}},[v._v("流程")]),v._v(" "),n("p",[n("strong",[v._v("解决问题的思路（期末答题流程）")]),v._v("：")]),v._v(" "),n("ol",[n("li",[v._v("问题的引入 - 从语言学或应用需求出发为NLP引入研究问题")]),v._v(" "),n("li",[v._v("数学形式化 - 用数学工具将引入的问题形式化（建立"),n("strong",[v._v("数学模型")])]),v._v(" "),n("li",[v._v("计算形式化 - 使得问题能够通过算法计算（建立"),n("strong",[v._v("计算模型")])]),v._v(" "),n("li",[v._v("编程实现")]),v._v(" "),n("li",[v._v("评估 - 评估计算机运行的结果（评估问题、模型和程序")])]),v._v(" "),n("h2",{attrs:{id:"实例"}},[v._v("实例")]),v._v(" "),n("p",[v._v("以汉语切分(Chinese Segmentation)为例")]),v._v(" "),n("h3",{attrs:{id:"问题的引入"}},[v._v("问题的引入")]),v._v(" "),n("p",[v._v("输入样例：内塔尼亚胡说的话在美国会引起强烈反响")]),v._v(" "),n("p",[v._v("不同的词切分方案会导致同一个字符串表示不同的句子（"),n("strong",[v._v("切分歧义")]),v._v("）。如何分词以生成合理的词序列？")]),v._v(" "),n("h3",{attrs:{id:"建立数学模型仅供参考"}},[v._v("建立数学模型（仅供参考")]),v._v(" "),n("blockquote",[n("p",[v._v("设W为所有词的集合，T为输入串，K为某种形式的知识库")])]),v._v(" "),n("p",[v._v("对于任意子串t∈T，定义一个"),n("strong",[v._v("切分")]),v._v("是一个函数f，函数f根据知识库中的部分知识k把字串t映射为一个词串，即")]),v._v(" "),n("pre",{staticClass:"language-js"},[n("code",{pre:!0,attrs:{class:"language-js"}},[n("span",{pre:!0,attrs:{class:"token function"}},[v._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("t "),n("span",{pre:!0,attrs:{class:"token operator"}},[v._v("|")]),v._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("w1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" w2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" "),n("span",{pre:!0,attrs:{class:"token spread operator"}},[v._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" wn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v("\n")])]),v._v(" "),n("p",[v._v("其中w1…wn∈W，为词")]),v._v(" "),n("h3",{attrs:{id:"建立计算模型仅供参考"}},[v._v("建立计算模型（仅供参考")]),v._v(" "),n("p",[v._v("可能使用的方法：")]),v._v(" "),n("ul",[n("li",[v._v("前向最大匹配(FMM: Forward Maximum Match)")]),v._v(" "),n("li",[v._v("后向最大匹配(BMM: Backward Maximum Match)")])]),v._v(" "),n("h3",{attrs:{id:"编程实现略"}},[v._v("编程实现（略")]),v._v(" "),n("ul",[n("li",[v._v("选择编程语言")]),v._v(" "),n("li",[v._v("设计数据结构")]),v._v(" "),n("li",[v._v("设计程序结构")])]),v._v(" "),n("h3",{attrs:{id:"评估"}},[v._v("评估")]),v._v(" "),n("ul",[n("li",[v._v("评估的指标有哪些")]),v._v(" "),n("li",[v._v("指标的量化")])]),v._v(" "),n("p",[v._v("如果结果不理想？"),n("strong",[v._v("重做")]),v._v("！（重新引入问题？重新建模？重新编程？重新评估？视情况而定")]),v._v(" "),n("p",[v._v("评估方式：")]),v._v(" "),n("ul",[n("li",[v._v("8-2按比例测试数据")]),v._v(" "),n("li",[v._v("n倍交叉验证(n-fold cross validation)\n"),n("ul",[n("li",[v._v("把数据分为不交叉的n份，使用其中的n-1份训练，1份测试")]),v._v(" "),n("li",[v._v("把每一份数据都作为测试数据执行一次，共重复n次")]),v._v(" "),n("li",[v._v("取平均值作为结果")])])]),v._v(" "),n("li",[v._v("保留测试(hold-out test)\n"),n("ul",[n("li",[v._v("数据分为三份 - 训练集、发展集和测试集")]),v._v(" "),n("li",[v._v("训练集用来学习")]),v._v(" "),n("li",[v._v("发展集用来调整超参数(hyperparameters)")]),v._v(" "),n("li",[v._v("测试集进行评价")])])])]),v._v(" "),n("p",[v._v("困惑矩阵：")]),v._v(" "),n("p",[n("img",{attrs:{src:t(933),alt:"1-2"}})]),v._v(" "),n("p",[v._v("常用指标：")]),v._v(" "),n("ul",[n("li",[v._v("正确率(Precision) P = a/(a+b)")]),v._v(" "),n("li",[v._v("召回率(Recall) R = a/(a+c)")]),v._v(" "),n("li",[v._v("正确率召回率综合指标(F measure) F1 = 2PR/(P+R)")]),v._v(" "),n("li",[v._v("准确率(Accuracy) Acc = (a+d)/(a+b+c+d)")]),v._v(" "),n("li",[v._v("失配率(Miss) Miss = c/(a+c) = 1-R\n"),n("ul",[n("li",[v._v("false negative")])])]),v._v(" "),n("li",[v._v("F/A = b/(a+b+c+d)\n"),n("ul",[n("li",[v._v("false positive")])])])]),v._v(" "),n("h2",{attrs:{id:"课程安排"}},[v._v("课程安排")]),v._v(" "),n("ul",[n("li",[v._v("基础技术（从小到大\n"),n("ul",[n("li",[v._v("词法分析 - 形态分析\n"),n("ul",[n("li",[v._v("中英文词法处理")]),v._v(" "),n("li",[v._v("n-gram语言模型")]),v._v(" "),n("li",[v._v("神经网络语言模型")])])]),v._v(" "),n("li",[v._v("词法分析 - 词性标注\n"),n("ul",[n("li",[v._v("词性标注概念")]),v._v(" "),n("li",[v._v("隐马尔可夫模型(HMM)")]),v._v(" "),n("li",[n("s",[v._v("命名实体识别")])])])]),v._v(" "),n("li",[v._v("句法分析\n"),n("ul",[n("li",[v._v("上下文无关语法、CKY、Earley")]),v._v(" "),n("li",[v._v("概率上下文无关语法")]),v._v(" "),n("li",[v._v("依存分析")])])]),v._v(" "),n("li",[v._v("语义分析\n"),n("ul",[n("li",[v._v("词义消歧算法")]),v._v(" "),n("li",[v._v("句子语义分析算法")])])]),v._v(" "),n("li",[v._v("文本分析\n"),n("ul",[n("li",[v._v("文本表示和降维（主题模型")])])])])]),v._v(" "),n("li",[v._v("应用系统\n"),n("ul",[n("li",[v._v("文本分类")]),v._v(" "),n("li",[v._v("信息检索")]),v._v(" "),n("li",[v._v("机器翻译")]),v._v(" "),n("li",[v._v("人机对话")]),v._v(" "),n("li",[v._v("…")])])])])])}]};v.exports={attributes:{layout:"collection",title:"概述",collection:"NaturalLanguageProcessing"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},932:function(v,_,t){v.exports=t.p+"img/1-1.872fe6a.png"},933:function(v,_,t){v.exports=t.p+"img/1-2.c75a1bb.png"}}]);