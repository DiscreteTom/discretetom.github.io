(window.webpackJsonp=window.webpackJsonp||[]).push([[42,878,879,882,883,884,885,886],{1450:function(v,_,t){const e={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("div",{staticClass:"frontmatter-markdown"},[e("p",[v._v("神经网络语言模型")]),v._v(" "),e("h2",{attrs:{id:"动机"}},[v._v("动机")]),v._v(" "),e("p",[v._v("n-gram模型的局限：")]),v._v(" "),e("ul",[e("li",[v._v("数据稀疏\n"),e("ul",[e("li",[v._v("理论上n越高越好，但由于数据稀疏，n到达一定值后n越大性能越差。有没有高阶性能更好的模型？")]),v._v(" "),e("li",[v._v("n-gram使用平滑来解决数据稀疏的问题。有没有不需要平滑的模型？")])])]),v._v(" "),e("li",[v._v("忽略词义\n"),e("ul",[e("li",[v._v("如果两个词在某些程度上相似，那么在一些特定场景下它们的概率也应该相似。n-gram基于符号来表示词语，无法表示词义")])])])]),v._v(" "),e("p",[v._v("问题：如何表示词义？")]),v._v(" "),e("h2",{attrs:{id:"表示词义"}},[v._v("表示词义")]),v._v(" "),e("p",[e("strong",[v._v("You shall know a word by the company it keeps")])]),v._v(" "),e("p",[v._v("从一个词的相邻词来推测词语的意思。使用 "),e("strong",[v._v("同现矩阵(cooccurrence matrix)")])]),v._v(" "),e("h3",{attrs:{id:"基于窗口的同现矩阵"}},[v._v("基于窗口的同现矩阵")]),v._v(" "),e("ul",[e("li",[v._v("窗口长度通常选取5-10")]),v._v(" "),e("li",[v._v("对称矩阵（即允许词语逆序出现）")])]),v._v(" "),e("p",[v._v("举例：当前有三个句子：")]),v._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("I like deep learning.\nI like NLP.\nI enjoy flying.\n")])]),v._v(" "),e("p",[v._v("通过这三个句子训练得到的同现矩阵：")]),v._v(" "),e("p",[e("img",{attrs:{src:t(959),alt:"3-1"}})]),v._v(" "),e("p",[v._v("简单同现向量(simple cooccurrence vectors)的问题：")]),v._v(" "),e("ul",[e("li",[v._v("随着词量的上升，体积集聚变大")]),v._v(" "),e("li",[v._v("维度高，需要大容量存储")]),v._v(" "),e("li",[v._v("模型不够稳健")])]),v._v(" "),e("p",[v._v("解决方案：低维度向量(Low dimensional vectors)")]),v._v(" "),e("ul",[e("li",[v._v("使用固定的低纬度存储较为重要的信息")]),v._v(" "),e("li",[v._v("维度通常选为25-1000")])]),v._v(" "),e("p",[v._v("如何减少维度？")]),v._v(" "),e("h3",{attrs:{id:"同现矩阵的奇异值分解svd-singular-value-decomposition略"}},[v._v("同现矩阵的奇异值分解(SVD, Singular Value Decomposition)（略")]),v._v(" "),e("p",[v._v("使用 "),e("strong",[v._v("最小二乘法(least squares)")]),v._v(" 获得原矩阵X的秩为k的最优近似矩阵X^")]),v._v(" "),e("p",[e("img",{attrs:{src:t(960),alt:"3-2"}})]),v._v(" "),e("p",[v._v("这样一个单词就可以使用一个k阶向量来表示")]),v._v(" "),e("h3",{attrs:{id:"svd的问题"}},[v._v("SVD的问题")]),v._v(" "),e("ul",[e("li",[v._v("计算复杂度高")]),v._v(" "),e("li",[v._v("难以添加新的训练数据")]),v._v(" "),e("li",[v._v("和其他深度学习模型处于不同的体系")])]),v._v(" "),e("h2",{attrs:{id:"nnlm模型"}},[v._v("NNLM模型")]),v._v(" "),e("h3",{attrs:{id:"举例-bigram"}},[v._v("举例 - bigram")]),v._v(" "),e("p",[v._v("假设语料库为以下三个句子：")]),v._v(" "),e("ul",[e("li",[v._v("the dog saw a cat")]),v._v(" "),e("li",[v._v("the dog chased the cat")]),v._v(" "),e("li",[v._v("the cat climbed a tree")])]),v._v(" "),e("p",[v._v("我们得到了一个大小为8的单词表：")]),v._v(" "),e("ul",[e("li",[v._v("a")]),v._v(" "),e("li",[v._v("cat")]),v._v(" "),e("li",[v._v("chased")]),v._v(" "),e("li",[v._v("climbed")]),v._v(" "),e("li",[v._v("dog")]),v._v(" "),e("li",[v._v("saw")]),v._v(" "),e("li",[v._v("the")]),v._v(" "),e("li",[v._v("tree")])]),v._v(" "),e("p",[v._v("神经网络结构：八个输入神经元（输入前一个词的向量）和八个输出神经元（输出当前词的向量）。假设运算过程中需要三个中间神经元（在隐藏层hidden layer），则有两个参数：8乘3的输入矩阵WI和3乘8的输出矩阵WO。这两个矩阵的初值为随机数，如：")]),v._v(" "),e("p",[e("img",{attrs:{src:t(961),alt:"3-8"}})]),v._v(" "),e("p",[v._v("假设分析到"),e("code",{pre:!0},[v._v("cat climbed")]),v._v("这两个词，输入cat，期望的输出为climbed。按照词表，"),e("strong",[v._v("输入向量")]),v._v("(input vector)X为"),e("code",{pre:!0},[v._v("[01000000]")]),v._v("，"),e("strong",[v._v("期望输出向量")]),v._v("(target vector)为"),e("code",{pre:!0},[v._v("[00010000]")])]),v._v(" "),e("p",[v._v("实际计算输出向量为："),e("code",{pre:!0},[v._v("X * WI * WO = [0.100934, -0.309331, -0.122361, -0.151399, 0.143463, -0.051262, -0.079686, 0.112928]")]),v._v("，因为输出的向量应该表示为概率，所以"),e("strong",[v._v("归一化")]),v._v("得到结果"),e("code",{pre:!0},[v._v("[0.143073, 0.094925, 0.114441, 0.111166, 0.149289, 0.122874, 0.119431, 0.144800]")])]),v._v(" "),e("p",[v._v("通过对比上述输出和期望输出，两个向量相减可以得到一个 "),e("strong",[v._v("错误向量")]),v._v("(error vector)，通过神经网络"),e("strong",[v._v("反向传播算法")]),v._v("(backpropagation)即可修正WI和WO矩阵")]),v._v(" "),e("p",[e("strong",[v._v("延伸")]),v._v("：如果是trigram，则输入两个单词，即16个神经元，只需要更改矩阵维度即可。如下图的4-gram NNLM图：")]),v._v(" "),e("p",[e("img",{attrs:{src:t(962),alt:"3-9"}})]),v._v(" "),e("p",[v._v("其实只需要把输入矩阵WI的维度改成24乘3即可")]),v._v(" "),e("h3",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),e("p",[v._v("从上述过程我们可以发现，一旦数据训练完毕，如果我们需要获得一个词的向量表示，只需要输入一个"),e("code",{pre:!0},[v._v("[000...010...00]")]),v._v("这样的向量就够了（其中1的位置为这个词在词表中的位置）。而且这个被训练出来的"),e("strong",[v._v("词向量")]),v._v("是和"),e("strong",[v._v("上下文有关")]),v._v("的，所以"),e("strong",[v._v("词向量可以反映语义")]),v._v("。")]),v._v(" "),e("p",[v._v("NNLM的优点：")]),v._v(" "),e("ul",[e("li",[v._v("不需要数据平滑\n"),e("ul",[e("li",[v._v("因为词向量的 "),e("strong",[v._v("语义相关性")]),v._v("，即使某词串没有出现过，只要语料库中存在同义词的词串，目标词串的概率也不为0。故不需要平滑")])])]),v._v(" "),e("li",[v._v("高阶可计算性\n"),e("ul",[e("li",[v._v("使用矩阵计算。也可以通过矩阵算术优化")]),v._v(" "),e("li",[v._v("词向量长度通常大于1e5")])])])]),v._v(" "),e("p",[v._v("实验表明比基于符号的语言模型更好")]),v._v(" "),e("h3",{attrs:{id:"训练过程举例-trigram"}},[v._v("训练过程举例 - trigram")]),v._v(" "),e("p",[v._v("图为trigram的NNLM训练过程")]),v._v(" "),e("p",[e("img",{attrs:{src:t(963),alt:"3-7"}})]),v._v(" "),e("h3",{attrs:{id:"nnlm模型结构"}},[v._v("NNLM模型结构")]),v._v(" "),e("p",[e("strong",[v._v("词表映射")])]),v._v(" "),e("p",[v._v("查表映射C：将词表V中的每一个词映射为一个m维向量。对于任意词wi，得到向量C(wi)，简写为C(i)")]),v._v(" "),e("p",[e("img",{attrs:{src:t(964),alt:"3-5"}})]),v._v(" "),e("p",[e("strong",[v._v("神经网络模型")])]),v._v(" "),e("p",[v._v("目标：训练一个映射g来建模n元语言模型。即：")]),v._v(" "),e("p",[e("img",{attrs:{src:t(965),alt:"3-6"}})]),v._v(" "),e("p",[v._v("其中ω为神经网络参数")])])}]};v.exports={attributes:{layout:"collection",title:"Neural Network based Language Model",collection:"NaturalLanguageProcessing"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}},959:function(v,_,t){v.exports=t.p+"img/3-1.05ae570.png"},960:function(v,_,t){v.exports=t.p+"img/3-2.e558d8e.png"},961:function(v,_,t){v.exports=t.p+"img/3-8.dea7145.png"},962:function(v,_,t){v.exports=t.p+"img/3-9.b8c406d.png"},963:function(v,_,t){v.exports=t.p+"img/3-7.71619f3.png"},964:function(v,_,t){v.exports=t.p+"img/3-5.110c7bb.png"},965:function(v,_,t){v.exports=t.p+"img/3-6.63decdc.png"}}]);