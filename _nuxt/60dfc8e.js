(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{1296:function(e,t){const n={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"查询处理的步骤"}},[e._v("查询处理的步骤")]),e._v(" "),n("ol",[n("li",[e._v("解析")]),e._v(" "),n("li",[e._v("优化")]),e._v(" "),n("li",[e._v("执行")])]),e._v(" "),n("h2",{attrs:{id:"衡量查询代价"}},[e._v("衡量查询代价")]),e._v(" "),n("p",[e._v("主要考察磁盘访问disk access，包括")]),e._v(" "),n("ul",[n("li",[e._v("number of seeks - average seek cost")]),e._v(" "),n("li",[e._v("number of blocks read - average block read cost")]),e._v(" "),n("li",[e._v("number of blocks written - average block write cost")])]),e._v(" "),n("p",[e._v("简单起见，仅考察：")]),e._v(" "),n("ul",[n("li",[e._v("number of block transfers from disk, \\(t_T\\)")]),e._v(" "),n("li",[e._v("number of seeks, \\(t_S\\)")])]),e._v(" "),n("p",[e._v("传输了b块，寻找了S次的查询代价为 \\(b * t_T + S * t_S\\)")])])}]};e.exports={attributes:{layout:"collection",title:"Query Processing",collection:"DatabaseConcept"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);