(window.webpackJsonp=window.webpackJsonp||[]).push([[43,858,859,860,861,862,863,864],{1e3:function(v,_,t){v.exports=t.p+"img/7-4.57eaf50.png"},1001:function(v,_,t){v.exports=t.p+"img/7-5.41211a4.png"},1002:function(v,_,t){v.exports=t.p+"img/7-6.f1a8475.png"},1003:function(v,_,t){v.exports=t.p+"img/7-7.6f5016a.png"},1384:function(v,_,t){const l={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("div",{staticClass:"frontmatter-markdown"},[l("p",[l("strong",[v._v("文本分类")]),v._v(" - 把文本划分到特定的类别或主题下，如政治、经济、体育等")]),v._v(" "),l("p",[v._v("使用机器学习，得到一个"),l("strong",[v._v("从文档到文档类别的映射函数")])]),v._v(" "),l("p",[v._v("显然是一个"),l("strong",[v._v("有监督学习")]),v._v("过程，需要人为提供处理过的训练数据")]),v._v(" "),l("h2",{attrs:{id:"流程"}},[v._v("流程")]),v._v(" "),l("ol",[l("li",[v._v("预处理")]),v._v(" "),l("li",[v._v("选择文本表示模型（数学模型")]),v._v(" "),l("li",[v._v("选择文本分类模型（计算模型")]),v._v(" "),l("li",[v._v("评价")])]),v._v(" "),l("h2",{attrs:{id:"预处理"}},[v._v("预处理")]),v._v(" "),l("p",[v._v("根据具体的文本形式及任务而定。常见的预处理：")]),v._v(" "),l("ul",[l("li",[v._v("去除html标签")]),v._v(" "),l("li",[v._v("去除"),l("strong",[v._v("停用词")]),v._v("(Stop-words)\n"),l("ul",[l("li",[v._v("高频词往往携带较少信息")]),v._v(" "),l("li",[v._v("如:[a, an, the, this, for, at, …]")])])]),v._v(" "),l("li",[v._v("获得"),l("strong",[v._v("词干")]),v._v("(Word-stemming)\n"),l("ul",[l("li",[v._v("取消词的后缀或其他变形，合并意义相同的词")]),v._v(" "),l("li",[v._v("如:[walk, walking, walker, …]")])])])]),v._v(" "),l("h2",{attrs:{id:"文本表示-向量空间模型vsm"}},[v._v("文本表示 - 向量空间模型VSM")]),v._v(" "),l("p",[v._v("Vector Space Model")]),v._v(" "),l("p",[v._v("一种常用的文本表示方法")]),v._v(" "),l("h3",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),l("p",[v._v("思想：")]),v._v(" "),l("ul",[l("li",[v._v("把文本表示为由词条构成的向量\n"),l("ul",[l("li",[v._v("其实不仅仅是文本。此模型可以广泛用于其他数据对象")])])]),v._v(" "),l("li",[v._v("假设词条之间统计独立（并不考虑词出现的顺序和位置）\n"),l("ul",[l("li",[v._v("即文本是由词构成的集合(set)，也称为词袋(bag-of-words)")])])])]),v._v(" "),l("h3",{attrs:{id:"模型参数"}},[v._v("模型参数")]),v._v(" "),l("p",[l("strong",[v._v("文档-词条矩阵")]),l("code",{pre:!0},[v._v("A = {a(i, k)}")]),v._v("，其中"),l("code",{pre:!0},[v._v("a(i, k)")]),v._v("表示词"),l("code",{pre:!0},[v._v("k")]),v._v("在文档"),l("code",{pre:!0},[v._v("i")]),v._v("中的权重")]),v._v(" "),l("p",[l("code",{pre:!0},[v._v("a(i, k)")]),v._v("的性质：")]),v._v(" "),l("ol",[l("li",[v._v("某个词条在"),l("strong",[v._v("某个文档")]),v._v("中出现的次数越多，这个词条和此文档的"),l("strong",[v._v("类别相关性越大")])]),v._v(" "),l("li",[v._v("某个词条在"),l("strong",[v._v("所有文档")]),v._v("中出现的次数都很多，则这个词条对于文档的"),l("strong",[v._v("类别区分性")]),v._v("越低")])]),v._v(" "),l("p",[v._v("定义如下符号：")]),v._v(" "),l("ul",[l("li",[v._v("f(i, k) - 词条k在文档i中出现的频次")]),v._v(" "),l("li",[v._v("n(k) - 词条k在所有文档中出现的总次数，即sum(f(i, k))")]),v._v(" "),l("li",[v._v("N - 文档集合中的文档个数")]),v._v(" "),l("li",[v._v("M - 预处理之后文档集合中所有词条的个数")])]),v._v(" "),l("h4",{attrs:{id:"如何表示词的权重"}},[v._v("如何表示词的权重")]),v._v(" "),l("ul",[l("li",[v._v("布尔权重\n"),l("ul",[l("li",[v._v("如果词条k在文档i中出现过，则权值a(i, k)为1，否则为0")])])]),v._v(" "),l("li",[v._v("词条频次权重(TF: term frequency weighting)\n"),l("ul",[l("li",[v._v("a(i, k) = f(i, k)")]),v._v(" "),l("li",[v._v("体现了a(i, k)的性质1")])])]),v._v(" "),l("li",[v._v("逆文档频次(IDF: inverse document frequency)\n"),l("ul",[l("li",[v._v("正相关于包含此词条的文档个数")]),v._v(" "),l("li",[v._v("即a(i, k)正相关于1/n(k)")]),v._v(" "),l("li",[v._v("即"),l("strong",[v._v("包含此词条的文档越多，此词条越没用")])]),v._v(" "),l("li",[v._v("体现了a(i, k)的性质2")])])]),v._v(" "),l("li",[v._v("TF-IDF权重 - 同时考虑词条频次和逆文档频次\n"),l("ul",[l("li",[l("img",{attrs:{src:t(997),alt:"7-1"}})]),v._v(" "),l("li",[v._v("满足a(i, k)的两个性质\n"),l("ul",[l("li",[v._v("正比于单个文档出现频次")]),v._v(" "),l("li",[v._v("反比于包含词条的文档个数")])])])])]),v._v(" "),l("li",[v._v("TF-IDF权重的一些变形（略\n"),l("ul",[l("li",[v._v("TFC(term frequency component)权重 - 对文档长度正则化")]),v._v(" "),l("li",[v._v("LTC权重 - 减少绝对频次差异带来的影响")]),v._v(" "),l("li",[v._v("…")])])]),v._v(" "),l("li",[v._v("熵权重(Entropy weighting)\n"),l("ul",[l("li",[v._v("词条k的信息熵：")]),v._v(" "),l("li",[l("img",{attrs:{src:t(998),alt:"7-2"}})]),v._v(" "),l("li",[v._v("如果所有文档中分布相等，则熵为-1。如果只在一个文档中出现，则熵为0")]),v._v(" "),l("li",[v._v("权重：")]),v._v(" "),l("li",[l("img",{attrs:{src:t(999),alt:"7-3"}})])])])]),v._v(" "),l("h2",{attrs:{id:"文本分类模型"}},[v._v("文本分类模型")]),v._v(" "),l("ul",[l("li",[v._v("Instance-based methods\n"),l("ul",[l("li",[v._v("Nearest neighbor最近邻模型")])])]),v._v(" "),l("li",[v._v("Probabilistic models概率模型\n"),l("ul",[l("li",[v._v("Naive Bayes朴素贝叶斯模型")]),v._v(" "),l("li",[v._v("Maximum Entropy Model最大熵模型")]),v._v(" "),l("li",[v._v("Neural Network")])])]),v._v(" "),l("li",[v._v("Linear Models线性模型\n"),l("ul",[l("li",[v._v("Linear Regression/Perception线性回归")]),v._v(" "),l("li",[v._v("Support Vector Machine")])])]),v._v(" "),l("li",[v._v("Decision Models决策模型\n"),l("ul",[l("li",[v._v("Decision Trees决策树")]),v._v(" "),l("li",[v._v("Random Forest")])])]),v._v(" "),l("li",[v._v("…")])]),v._v(" "),l("h3",{attrs:{id:"最近邻模型分类器"}},[v._v("最近邻模型&分类器")]),v._v(" "),l("h4",{attrs:{id:"概述-1"}},[v._v("概述")]),v._v(" "),l("p",[v._v("Nearest neighbor classifier，也可以叫1-近邻模型/分类器")]),v._v(" "),l("p",[v._v("思想：把点归类到最近的集合（穷举")]),v._v(" "),l("p",[v._v("图形表示：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(1e3),alt:"7-4"}})]),v._v(" "),l("h4",{attrs:{id:"平滑"}},[v._v("平滑")]),v._v(" "),l("p",[v._v("问题："),l("strong",[v._v("过度拟合")]),v._v(" - 忠实于每一个训练数据，包括噪声和错误数据")]),v._v(" "),l("p",[v._v("解决过度拟合：使用k-近邻取代1-近邻以"),l("strong",[v._v("平滑分类边界")])]),v._v(" "),l("p",[v._v("k-nearest neightbor classifier(kNN): 找到k个最近的点，这些点在哪个集合最多，新的点就归类到哪个集合")]),v._v(" "),l("p",[v._v("k也被称为"),l("strong",[v._v("平滑(smoothing)参数")]),v._v("或**正则化(regularization)**参数")]),v._v(" "),l("p",[v._v("平滑效果：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(1001),alt:"7-5"}})]),v._v(" "),l("h4",{attrs:{id:"训练略"}},[v._v("训练（略")]),v._v(" "),l("p",[v._v("训练k-近邻分类器：执行上述分类过程。略")]),v._v(" "),l("h4",{attrs:{id:"如何选择参数k"}},[v._v("如何选择参数k")]),v._v(" "),l("p",[v._v("采用"),l("strong",[v._v("验证数据")]),v._v("(validation data)")]),v._v(" "),l("ul",[l("li",[v._v("把训练数据分成两组 - 训练数据+验证数据")]),v._v(" "),l("li",[v._v("通过选择不同的k得到不同的kNN分类器")]),v._v(" "),l("li",[v._v("应用于验证数据")]),v._v(" "),l("li",[v._v("选择最优k")])]),v._v(" "),l("h4",{attrs:{id:"距离测度"}},[v._v("距离测度")]),v._v(" "),l("p",[v._v("如何评定点与点之间的距离，常用距离测度方式：")]),v._v(" "),l("ul",[l("li",[v._v("欧氏距离(Euclidean Distance) - 几何常规操作\n"),l("ul",[l("li",[l("img",{attrs:{src:t(1002),alt:"7-6"}})]),v._v(" "),l("li",[v._v("使用了平方，视为二阶距离，记为L2")])])]),v._v(" "),l("li",[v._v("曼哈顿距离(Manhattan Distance) - 类似于二进制中的海明距离\n"),l("ul",[l("li",[l("img",{attrs:{src:t(1003),alt:"7-7"}})]),v._v(" "),l("li",[v._v("一阶距离，L1")])])]),v._v(" "),l("li",[v._v("切比雪夫距离(Chebyshev Distance)（略")]),v._v(" "),l("li",[v._v("…")])]),v._v(" "),l("h4",{attrs:{id:"其他问题"}},[v._v("其他问题")]),v._v(" "),l("ul",[l("li",[v._v("如何快速找到最近邻？\n"),l("ul",[l("li",[v._v("使用树结构，减少计算量")]),v._v(" "),l("li",[v._v("剪辑近邻、压缩近邻以减少计算量")])])])]),v._v(" "),l("h4",{attrs:{id:"knn总结"}},[v._v("KNN总结")]),v._v(" "),l("ul",[l("li",[v._v("优点Pros\n"),l("ul",[l("li",[v._v("可以描述很复杂的分类边界（因为不是使用参数描述的")]),v._v(" "),l("li",[v._v("训练快速（构建数据结构即可")]),v._v(" "),l("li",[v._v("简单且好用（在computer vision领域常见")]),v._v(" "),l("li",[v._v("模型结果易解释")])])]),v._v(" "),l("li",[v._v("缺点Cons\n"),l("ul",[l("li",[v._v("存储开销大")]),v._v(" "),l("li",[v._v("样本不均衡时会造成影响")]),v._v(" "),l("li",[v._v("参数空间很大时近邻搜索慢")]),v._v(" "),l("li",[v._v("从性能上说不是最好的分类器")])])])]),v._v(" "),l("h3",{attrs:{id:"朴素贝叶斯模型分类器"}},[v._v("朴素贝叶斯模型&分类器")]),v._v(" "),l("p",[v._v("Naive Bayes Classifier")]),v._v(" "),l("h4",{attrs:{id:"假设"}},[v._v("假设")]),v._v(" "),l("p",[v._v("条件独立性 - "),l("code",{pre:!0},[v._v("P(A, B, C, ..., N|X) = P(A|X)P(B|X)...P(N|X)")])]),v._v(" "),l("h4",{attrs:{id:"思想"}},[v._v("思想")]),v._v(" "),l("p",[v._v("求"),l("code",{pre:!0},[v._v("P(文档类别为X|文档中出现ABC...N)")])]),v._v(" "),l("p",[v._v("使用贝叶斯公式，应求"),l("code",{pre:!0},[v._v("P(文档中出现ABC...N|文档类别为X)P(文档类别为X)/P(文档中出现ABC...N)")])]),v._v(" "),l("p",[v._v("根据条件独立性假设，应求"),l("code",{pre:!0},[v._v("P(A|X)P(B|X)...P(N|X)P(X)/(P(A)P(B)...P(N))")])]),v._v(" "),l("p",[v._v("因为无需计算词条在单个文档中的出现频次，所以使用bag of words模型即可")]),v._v(" "),l("h4",{attrs:{id:"平滑-1"}},[v._v("平滑")]),v._v(" "),l("ul",[l("li",[v._v("拉普拉斯+1平滑")]),v._v(" "),l("li",[v._v("…")])]),v._v(" "),l("h4",{attrs:{id:"总结"}},[v._v("总结")]),v._v(" "),l("ul",[l("li",[v._v("优点\n"),l("ul",[l("li",[v._v("原理简单")]),v._v(" "),l("li",[v._v("易于处理大规模训练数据（只需要计数+1即可")]),v._v(" "),l("li",[v._v("实际文本分类应用中表现良好")])])]),v._v(" "),l("li",[v._v("缺点\n"),l("ul",[l("li",[v._v("糟糕的条件独立性假设")]),v._v(" "),l("li",[v._v("短语位置无关假设")]),v._v(" "),l("li",[v._v("不能融入较复杂的特征")])])])]),v._v(" "),l("h2",{attrs:{id:"评估指标"}},[v._v("评估指标")]),v._v(" "),l("ul",[l("li",[v._v("Precision = TP/(TP+FP)")]),v._v(" "),l("li",[v._v("Recall = TP/(TP+FN)")])])])}]};v.exports={attributes:{layout:"collection",title:"Text Classification",collection:"NaturalLanguageProcessing"},vue:{render:l.render,staticRenderFns:l.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=l.render,this.$options.staticRenderFns=l.staticRenderFns}}}}},997:function(v,_,t){v.exports=t.p+"img/7-1.4daafae.png"},998:function(v,_,t){v.exports=t.p+"img/7-2.0cd321a.png"},999:function(v,_,t){v.exports=t.p+"img/7-3.5a1ae5a.png"}}]);