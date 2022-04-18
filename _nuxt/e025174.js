(window.webpackJsonp=window.webpackJsonp||[]).push([[58,784,785,786,787,788],{1346:function(t,e,n){const r={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"概述"}},[t._v("概述")]),t._v(" "),r("p",[t._v("基本原则："),r("strong",[t._v("一个好的语言模型应该给实际使用的句子打较高的概率")])]),t._v(" "),r("p",[t._v("构建语言模型的两个阶段：")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("模型训练 - 使用training data获得模型参数")])]),t._v(" "),r("li",[r("p",[t._v("模型测试 - 使用test data进行评价")])]),t._v(" "),r("li",[r("p",[t._v("外部评价extrinsic measure - 比较两个模型优劣")]),t._v(" "),r("ul",[r("li",[t._v("两个模型用于同一个任务")]),t._v(" "),r("li",[t._v("比较准确率")])])]),t._v(" "),r("li",[r("p",[t._v("内部评价intrinsic measure - 对模型自身进行评价")]),t._v(" "),r("ul",[r("li",[t._v("困惑度PP(Perplexity) - P(W)的几何平均值的倒数")])])])]),t._v(" "),r("h2",{attrs:{id:"困惑度"}},[t._v("困惑度")]),t._v(" "),r("p",[t._v("困惑度PP(Perplexity) - P(W)的几何平均值的倒数，即：")]),t._v(" "),r("p",[r("img",{attrs:{src:n(950),alt:"4-1"}})]),t._v(" "),r("p",[t._v("给定的语料，PP越小，所用的LM越好，因为：")]),t._v(" "),r("ul",[r("li",[t._v("P(W)概率越高，PP越小")]),t._v(" "),r("li",[t._v("在预测下一个词时，PP值表示了候选词的平均个数。PP越大，该语言的不可预测性越高")])]),t._v(" "),r("p",[t._v("某语料库不同阶n-gram模型的困惑度对比：")]),t._v(" "),r("p",[r("img",{attrs:{src:n(951),alt:"4-4"}})]),t._v(" "),r("p",[t._v("不同平滑算法困惑度对比：")]),t._v(" "),r("p",[r("img",{attrs:{src:n(952),alt:"4-5"}})]),t._v(" "),r("h2",{attrs:{id:"信息熵"}},[t._v("信息熵")]),t._v(" "),r("p",[t._v("使用概率估算信息熵。假设词串为W，则信息熵H(W):")]),t._v(" "),r("p",[r("img",{attrs:{src:n(953),alt:"4-2"}})]),t._v(" "),r("p",[t._v("因此得到信息熵和困惑度的关系：")]),t._v(" "),r("p",[r("img",{attrs:{src:n(954),alt:"4-3"}})]),t._v(" "),r("p",[r("strong",[t._v("H和PP正相关")])])])}]};t.exports={attributes:{layout:"collection",title:"语言模型评估",collection:"NaturalLanguageProcessing"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}},950:function(t,e,n){t.exports=n.p+"img/4-1.b106902.png"},951:function(t,e,n){t.exports=n.p+"img/4-4.6173667.png"},952:function(t,e,n){t.exports=n.p+"img/4-5.d92b7b9.png"},953:function(t,e,n){t.exports=n.p+"img/4-2.5b06db3.png"},954:function(t,e,n){t.exports=n.p+"img/4-3.27c88a7.png"}}]);