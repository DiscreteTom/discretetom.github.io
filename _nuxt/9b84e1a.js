(window.webpackJsonp=window.webpackJsonp||[]).push([[31,851,852,853,854,855,856,857,858,859,860,861,862],{1e3:function(v,t,_){v.exports=_.p+"img/8-3.631f02d.png"},1001:function(v,t,_){v.exports=_.p+"img/8-4.ee6543f.png"},1002:function(v,t,_){v.exports=_.p+"img/8-5.b3f8ce9.png"},1003:function(v,t,_){v.exports=_.p+"img/8-6.f8b0869.png"},1004:function(v,t,_){v.exports=_.p+"img/8-7.82309d5.png"},1005:function(v,t,_){v.exports=_.p+"img/8-8.185870e.png"},1006:function(v,t,_){v.exports=_.p+"img/8-9.24192b2.png"},1007:function(v,t,_){v.exports=_.p+"img/8-10.e624fcf.png"},1008:function(v,t,_){v.exports=_.p+"img/8-11.396fd61.png"},1009:function(v,t,_){v.exports=_.p+"img/8-12.1bbd369.png"},1369:function(v,t,_){const n={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,t=v.$createElement,n=v._self._c||t;return n("div",{staticClass:"frontmatter-markdown"},[n("p",[v._v("文本聚类问题")]),v._v(" "),n("h2",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),n("ul",[n("li",[v._v("文本分类\n"),n("ul",[n("li",[v._v("使用"),n("strong",[v._v("有监督")]),v._v("的学习框架")]),v._v(" "),n("li",[v._v("学习时需要人为提供标签")])])]),v._v(" "),n("li",[n("strong",[v._v("文本聚类")]),v._v(" "),n("ul",[n("li",[v._v("使用"),n("strong",[v._v("无监督")]),v._v("的学习框架")]),v._v(" "),n("li",[n("strong",[v._v("挖掘数据内部的隐藏模式、类别")])])])])]),v._v(" "),n("p",[v._v("应用：")]),v._v(" "),n("ul",[n("li",[v._v("文档分类")]),v._v(" "),n("li",[v._v("搜索引擎优化")])]),v._v(" "),n("h2",{attrs:{id:"聚类模型"}},[v._v("聚类模型")]),v._v(" "),n("h3",{attrs:{id:"k-means"}},[v._v("K-means")]),v._v(" "),n("p",[v._v("思想：")]),v._v(" "),n("ul",[n("li",[v._v("首先确定聚类后簇的个数K")]),v._v(" "),n("li",[v._v("假设每个簇都有一个"),n("strong",[v._v("中心点")]),v._v("(centroid)")]),v._v(" "),n("li",[v._v("将每个样本点归类到中心点最近的簇中，然后"),n("strong",[v._v("刷新中心点")])]),v._v(" "),n("li",[v._v("直到所有中心点"),n("strong",[v._v("收敛")])])]),v._v(" "),n("p",[v._v("效果图：")]),v._v(" "),n("p",[n("img",{attrs:{src:_(998),alt:"8-1"}})]),v._v(" "),n("p",[v._v("定义"),n("strong",[v._v("SSE(the Sum of Squred Error)函数")]),v._v("为：")]),v._v(" "),n("p",[n("img",{attrs:{src:_(999),alt:"8-2"}})]),v._v(" "),n("p",[v._v("其中μk为簇Ck的中心点。r(n, k)表示点xn是否被划分到了簇Ck，如果是则r(n, k)为1否则为0")]),v._v(" "),n("p",[v._v("显然SEE函数表示了一个划分的质量。一个划分的SEE越小，划分的质量越高")]),v._v(" "),n("ul",[n("li",[v._v("初始中心点通常"),n("strong",[v._v("随机选取")])]),v._v(" "),n("li",[v._v("中心点通常取"),n("strong",[v._v("中位数")])]),v._v(" "),n("li",[v._v("算法复杂度O(ndKI)\n"),n("ul",[n("li",[v._v("n - 样本点的个数")]),v._v(" "),n("li",[v._v("d - 样本特征维度，即每个样本中含有几个变量")]),v._v(" "),n("li",[v._v("K - 类的个数")]),v._v(" "),n("li",[v._v("I - 迭代次数")])])])]),v._v(" "),n("p",[v._v("弊端："),n("strong",[v._v("需要人为预先设定K")]),v._v("，这样簇和簇之间就会存在歧义（如本来两个簇应该是一个簇，或者一个簇该是两个簇")]),v._v(" "),n("h3",{attrs:{id:"hierarchical-clustering层次聚类分层聚合"}},[v._v("Hierarchical Clustering层次聚类/分层聚合")]),v._v(" "),n("p",[v._v("输出一个"),n("strong",[v._v("嵌套的")]),v._v("、层次化的"),n("strong",[v._v("类别树")]),v._v("(dendrogram)，树状结构记录簇的合并或拆分")]),v._v(" "),n("h4",{attrs:{id:"hac层次凝聚聚类"}},[v._v("HAC层次凝聚聚类")]),v._v(" "),n("p",[v._v("HAC: Hierarchical Agglomerative Clustering")]),v._v(" "),n("p",[v._v("层次凝聚聚类，一种很常见的聚类模型")]),v._v(" "),n("p",[v._v("思想：")]),v._v(" "),n("ul",[n("li",[v._v("初始每一个点都是一个簇")]),v._v(" "),n("li",[v._v("每次合并最近的（最相似的）两个簇")]),v._v(" "),n("li",[v._v("直到只剩下一个簇")])]),v._v(" "),n("p",[n("strong",[v._v("相似度矩阵(proximity matrix)")]),v._v("：每个矩阵项都保存了两个簇之间的相似度。下图为五个簇时的相似度矩阵")]),v._v(" "),n("p",[n("img",{attrs:{src:_(1e3),alt:"8-3"}})]),v._v(" "),n("p",[v._v("假设合并C2和C5，得到的相似度矩阵：")]),v._v(" "),n("p",[n("img",{attrs:{src:_(1001),alt:"8-4"}})]),v._v(" "),n("p",[n("img",{attrs:{src:_(1002),alt:"8-5"}})]),v._v(" "),n("p",[v._v("关键：如何评定两个簇的相似度？这也决定了相似度矩阵中行列的合并结果")]),v._v(" "),n("p",[v._v("可选方案：")]),v._v(" "),n("ul",[n("li",[v._v("min(single linage)\n"),n("ul",[n("li",[n("img",{attrs:{src:_(1003),alt:"8-6"}})])])]),v._v(" "),n("li",[v._v("max(complete linkage)\n"),n("ul",[n("li",[n("img",{attrs:{src:_(1004),alt:"8-7"}})])])]),v._v(" "),n("li",[v._v("group average\n"),n("ul",[n("li",[n("img",{attrs:{src:_(1005),alt:"8-8"}})])])]),v._v(" "),n("li",[v._v("distance between centroids\n"),n("ul",[n("li",[n("img",{attrs:{src:_(1006),alt:"8-9"}})])])]),v._v(" "),n("li",[v._v("ward’s method")]),v._v(" "),n("li",[v._v("…")])]),v._v(" "),n("p",[v._v("效果图：")]),v._v(" "),n("p",[n("img",{attrs:{src:_(1007),alt:"8-10"}})]),v._v(" "),n("h4",{attrs:{id:"dhc自顶向下层次聚类"}},[v._v("DHC自顶向下层次聚类")]),v._v(" "),n("p",[v._v("DHC: Divisive Hierarchical Clustering")]),v._v(" "),n("p",[v._v("主要思想："),n("strong",[v._v("构建最小生成树")])]),v._v(" "),n("p",[v._v("例：使用Prime算法：")]),v._v(" "),n("p",[n("img",{attrs:{src:_(1008),alt:"8-11"}})]),v._v(" "),n("p",[v._v("使用Kruskal算法：")]),v._v(" "),n("p",[n("img",{attrs:{src:_(1009),alt:"8-12"}})]),v._v(" "),n("h4",{attrs:{id:"分类聚合总结"}},[v._v("分类聚合总结")]),v._v(" "),n("ul",[n("li",[v._v("优点\n"),n("ul",[n("li",[v._v("不需要提前设置簇的个数（因为可以自行剪枝求得")])])]),v._v(" "),n("li",[v._v("缺点\n"),n("ul",[n("li",[v._v("合并不可撤销，全局是一个整体")]),v._v(" "),n("li",[v._v("没有最优合并方案")]),v._v(" "),n("li",[v._v("不同的合并方案总会有一些问题\n"),n("ul",[n("li",[v._v("边界或噪音敏感问题")]),v._v(" "),n("li",[v._v("本来应该很大的簇被切割")]),v._v(" "),n("li",[v._v("不易设置簇的大小与形状")]),v._v(" "),n("li",[v._v("…")])])])])])]),v._v(" "),n("h3",{attrs:{id:"gmm高斯混合模型略"}},[v._v("GMM高斯混合模型（略")]),v._v(" "),n("p",[v._v("GMM: Gaussian Mixture Model")])])}]};v.exports={attributes:{layout:"collection",title:"Text Clustering",collection:"NaturalLanguageProcessing"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},998:function(v,t,_){v.exports=_.p+"img/8-1.c61ef22.png"},999:function(v,t,_){v.exports=_.p+"img/8-2.5143b97.png"}}]);