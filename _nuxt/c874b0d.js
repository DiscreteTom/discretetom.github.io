(window.webpackJsonp=window.webpackJsonp||[]).push([[19,775,776,777,778,779,780,781,783,784,785,786,787,788,789,790,791,792,793],{1363:function(t,v,_){const n={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,v=t.$createElement,n=t._self._c||v;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"概率语言模型"}},[t._v("概率语言模型")]),t._v(" "),n("h3",{attrs:{id:"基础"}},[t._v("基础")]),t._v(" "),n("p",[t._v("如何评价词串"),n("code",{pre:!0},[t._v("W=w1, w2, w3, ..., wn")]),t._v("的质量（即合法性）")]),t._v(" "),n("p",[n("strong",[t._v("计算W出现的概率"),n("code",{pre:!0},[t._v("p(W)")])]),t._v("，即"),n("code",{pre:!0},[t._v("p(w1, w2, ..., wn)")]),t._v("。根据概率链式法则：")]),t._v(" "),n("p",[n("code",{pre:!0},[t._v("p(W) = p(w1)p(w2|w1)...p(wn|w1, w2, ..., wn-1)")])]),t._v(" "),n("h3",{attrs:{id:"极大似然估计"}},[t._v("极大似然估计")]),t._v(" "),n("p",[t._v("Maximum Likelihood Estimation, MLE")]),t._v(" "),n("p",[n("img",{attrs:{src:_(927),alt:"2-1"}})]),t._v(" "),n("p",[t._v("如评估句子I love you，需要计算"),n("code",{pre:!0},[t._v("p(you|I,love)=C(I love you)/C(I love)")]),t._v('，即"I love you"的出现次数除以"I love"的出现次数')]),t._v(" "),n("h3",{attrs:{id:"缺陷与解决方案"}},[t._v("缺陷与解决方案")]),t._v(" "),n("p",[t._v("当前词出现的概率依赖于前面的词。如果串中词量很大")]),t._v(" "),n("ul",[n("li",[t._v("可能导致某个子串出现次数为0，导致概率无法计算")]),t._v(" "),n("li",[t._v("随着串的增加，概率越来越小")])]),t._v(" "),n("p",[t._v("一个可能的解决方案：当前词的出现概率 "),n("strong",[t._v("仅依赖较短的历史词")])]),t._v(" "),n("h2",{attrs:{id:"n-gram语言模型"}},[t._v("n-gram语言模型")]),t._v(" "),n("h3",{attrs:{id:"基础-1"}},[t._v("基础")]),t._v(" "),n("p",[t._v("马尔科夫假设：位于某个特定状态的概率取决于（约等于）前n-1个状态。应用于语言模型："),n("strong",[t._v("假设每个词的出现只与前面的n-1个词有关，即n-gram模型（n元语法/n元文法）")])]),t._v(" "),n("ul",[n("li",[t._v("1-gram语言模型(unigram) - 0阶马尔科夫链\n"),n("ul",[n("li",[t._v("与前面的0个词有关")]),t._v(" "),n("li",[t._v("p(W)=p(w1)p(w2)…p(wn)")])])]),t._v(" "),n("li",[t._v("2-gram语言模型(bigrams) - 1阶马尔科夫链")]),t._v(" "),n("li",[t._v("3-gram语言模型(trigrams) - 2阶马尔科夫链")])]),t._v(" "),n("h3",{attrs:{id:"n-gram模型的参数n"}},[t._v("n-gram模型的参数n")]),t._v(" "),n("p",[t._v("关于n-gram中n的取值。显然n越大生成的句子越好，但是n过大会导致模型不可行，原因是"),n("strong",[t._v("计算量太大")]),t._v("以及"),n("strong",[t._v("概率为0的项太多")])]),t._v(" "),n("p",[n("strong",[t._v("实际应用常取n=3")])]),t._v(" "),n("p",[n("strong",[t._v("参数的估计")]),t._v("：给定一个训练数据集X（和n），从中计算参数")]),t._v(" "),n("h2",{attrs:{id:"数据稀疏及平滑"}},[t._v("数据稀疏及平滑")]),t._v(" "),n("p",[t._v("有些训练数据集X中的一些词高频出现，一些词低频出现，造成估计结果不可靠。也可能有词不出现导致概率不可计算")]),t._v(" "),n("p",[t._v("增加训练语料？增加的语料中高频词仍然占绝大部分")]),t._v(" "),n("p",[t._v("主要解决方案：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("平滑Smoothing")]),t._v("：重新估计零概率及低值概率，给它们非零值。即给没有见过的事件分配未来发生的可能性")]),t._v(" "),n("li",[n("strong",[t._v("回退Back-off")]),t._v("：高阶n-grams概率难以计算时使用低阶n-grams来统计")])]),t._v(" "),n("h3",{attrs:{id:"zipf定律略"}},[t._v("Zipf定律（略")]),t._v(" "),n("p",[t._v("Zipf’s law：在自然语言的语料库里，一个单词的出现频率与它在频率表里的排名成反比。假设排名表中单词w1, w2, w4的出现频率为最多、第二多、第四多，那么")]),t._v(" "),n("ul",[n("li",[t._v("w1的频率约为w2的2倍")]),t._v(" "),n("li",[t._v("w2的频率约为w4的2倍")])]),t._v(" "),n("h3",{attrs:{id:"laplace-smoothingadd-one"}},[t._v("Laplace Smoothing(Add-one)")]),t._v(" "),n("p",[t._v("以 "),n("strong",[t._v("unigram")]),t._v(" 为例，令"),n("code",{pre:!0},[t._v("ci")]),t._v("为词"),n("code",{pre:!0},[t._v("wi")]),t._v("出现的次数，"),n("code",{pre:!0},[t._v("N")]),t._v("为训练数据集中的单词总量，"),n("code",{pre:!0},[t._v("|V|")]),t._v("为词表大小（即训练数据集中不同的单词的数量）。原始的p(wi)=ci/N。")]),t._v(" "),n("p",[t._v("对词表中的每一个单词的出现次数进行+1处理后，训练数据集中的单词总量修正为"),n("code",{pre:!0},[t._v("N + |V|")]),t._v("，则")]),t._v(" "),n("p",[n("img",{attrs:{src:_(928),alt:"2-2"}})]),t._v(" "),n("p",[t._v("或者，换一种思路去理解，p的分母仍然是N，分子则是ci的修正值：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(929),alt:"2-3"}})]),t._v(" "),n("p",[t._v("其中ci的修正值（也称为 "),n("strong",[t._v("加1折扣计数discount")]),t._v("）为")]),t._v(" "),n("p",[n("img",{attrs:{src:_(930),alt:"2-4"}})]),t._v(" "),n("p",[t._v("同理，在 "),n("strong",[t._v("bigram")]),t._v(" 里面，一个原始的MLE值:")]),t._v(" "),n("p",[n("img",{attrs:{src:_(931),alt:"2-5"}})]),t._v(" "),n("p",[t._v("针对所有的两个单词组成的单词对c(wi, wj)，其出现频率+1，得到的修正概率：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(932),alt:"2-6"}})]),t._v(" "),n("p",[t._v("其中V显然应为单词对的数量。也可以像unigram一样改变理解方式：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(933),alt:"2-7"}})]),t._v(" "),n("p",[t._v("其中c的修正值：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(934),alt:"2-8"}})]),t._v(" "),n("h3",{attrs:{id:"lidstone-smoothingadd-delta"}},[t._v("Lidstone smoothing(Add-Delta)")]),t._v(" "),n("p",[t._v("是add-one平滑的一种扩展，把add-one中的1改为delta或δ，取值范围"),n("code",{pre:!0},[t._v("0 <= delta <= 1")])]),t._v(" "),n("p",[t._v("显然delta=1时即为Laplace平滑")]),t._v(" "),n("p",[t._v("如何选取合适的delta?常用 "),n("strong",[t._v("held-out estimation(保守估计)")])]),t._v(" "),n("ol",[n("li",[t._v("从训练数据D中分离出一部分数据H(held-out data/validation data)")]),t._v(" "),n("li",[t._v("采用数据H训练具有不同delta值的语言模型")]),t._v(" "),n("li",[t._v("分别测试这些模型在H上的表现")]),t._v(" "),n("li",[t._v("选取最优模型的delta作为最优delta")])]),t._v(" "),n("h3",{attrs:{id:"good-turing-smoothing"}},[t._v("Good-Turing Smoothing")]),t._v(" "),n("p",[n("strong",[t._v("以unigram为例")])]),t._v(" "),n("p",[t._v("根据仅出现一次的unigram的个数来确定未出现的unigram的概率。")]),t._v(" "),n("p",[t._v("现规定仅出现一次的unigram的个数N1:")]),t._v(" "),n("p",[n("img",{attrs:{src:_(935),alt:"2-9"}})]),t._v(" "),n("p",[t._v("出现c次的unigram的个数Nc:")]),t._v(" "),n("p",[n("img",{attrs:{src:_(936),alt:"2-10"}})]),t._v(" "),n("p",[t._v("规定出现c次的词出现次数的修正值（即折扣后的值）为")]),t._v(" "),n("p",[n("img",{attrs:{src:_(937),alt:"2-11"}})]),t._v(" "),n("p",[t._v("那么其出现概率应为修正值除N，即")]),t._v(" "),n("p",[n("img",{attrs:{src:_(938),alt:"2-12"}})]),t._v(" "),n("p",[t._v("出现0次的词的折扣后出现次数为")]),t._v(" "),n("p",[n("img",{attrs:{src:_(939),alt:"2-13"}})]),t._v(" "),n("p",[t._v("则出现0次的词的出现概率为")]),t._v(" "),n("p",[n("img",{attrs:{src:_(940),alt:"2-14"}})]),t._v(" "),n("p",[n("strong",[t._v("对于n-gram")])]),t._v(" "),n("p",[t._v("类似地，令nr表示出现r次的n-grams的个数。则出现r次的单词的出现次数修正为")]),t._v(" "),n("p",[n("img",{attrs:{src:_(941),alt:"2-15"}})]),t._v(" "),n("p",[t._v("Good-Turing的归一化特性证明：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(942),alt:"2-17"}})]),t._v(" "),n("h3",{attrs:{id:"回退法backoff"}},[t._v("回退法Backoff")]),t._v(" "),n("p",[t._v("基本思路：长度为n的串出现次数为0时，使用"),n("strong",[t._v("长度为n-1的以同样单词结尾的串的修正后的出现次数")])]),t._v(" "),n("p",[n("img",{attrs:{src:_(943),alt:"2-18"}})]),t._v(" "),n("p",[t._v("其中α1和α2就是用于修正的因子")]),t._v(" "),n("h3",{attrs:{id:"插值法interpolation略"}},[t._v("插值法Interpolation（略")]),t._v(" "),n("p",[t._v("基本思路：把"),n("strong",[t._v("同样单词结尾的长度不大于原串长n的串")]),t._v("都纳入考虑范围，加权得到修正值")]),t._v(" "),n("p",[n("img",{attrs:{src:_(944),alt:"2-19"}})]),t._v(" "),n("h3",{attrs:{id:"kn平滑略"}},[t._v("KN平滑（略")]),t._v(" "),n("p",[t._v("思想：出现次数多的词更可能出现在新的上下文中")]),t._v(" "),n("p",[t._v("以词w出现在新的上下文中的概率来取代w的出现概率")])])}]};t.exports={attributes:{layout:"collection",title:"N-gram语言模型",collection:"NaturalLanguageProcessing"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},927:function(t,v,_){t.exports=_.p+"img/2-1.70ed8a1.png"},928:function(t,v,_){t.exports=_.p+"img/2-2.7e1807a.png"},929:function(t,v,_){t.exports=_.p+"img/2-3.2f8fb1d.png"},930:function(t,v,_){t.exports=_.p+"img/2-4.2507a65.png"},931:function(t,v,_){t.exports=_.p+"img/2-5.0bda090.png"},932:function(t,v,_){t.exports=_.p+"img/2-6.fa73b5e.png"},933:function(t,v,_){t.exports=_.p+"img/2-7.d2dc276.png"},934:function(t,v,_){t.exports=_.p+"img/2-8.ff5891d.png"},935:function(t,v,_){t.exports=_.p+"img/2-9.e306aa8.png"},936:function(t,v,_){t.exports=_.p+"img/2-10.5432def.png"},937:function(t,v,_){t.exports=_.p+"img/2-11.b2bb3db.png"},938:function(t,v,_){t.exports=_.p+"img/2-12.1175c35.png"},939:function(t,v,_){t.exports=_.p+"img/2-13.5da2156.png"},940:function(t,v,_){t.exports=_.p+"img/2-14.13d1597.png"},941:function(t,v,_){t.exports=_.p+"img/2-15.692b73e.png"},942:function(t,v,_){t.exports=_.p+"img/2-17.5e20096.png"},943:function(t,v,_){t.exports=_.p+"img/2-18.04cfd9a.png"},944:function(t,v,_){t.exports=_.p+"img/2-19.9691bcd.png"}}]);