(window.webpackJsonp=window.webpackJsonp||[]).push([[85,631,632],{1383:function(t,e,r){const v={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"frontmatter-markdown"},[v("h2",{attrs:{id:"基于日志恢复"}},[t._v("基于日志恢复")]),t._v(" "),v("p",[t._v("log-based recovery")]),t._v(" "),v("h3",{attrs:{id:"概述"}},[t._v("概述")]),t._v(" "),v("p",[t._v("日志log是一系列日志记录log records。")]),t._v(" "),v("p",[t._v("格式：")]),t._v(" "),v("pre",{staticClass:"language-bash"},[v("code",{pre:!0,attrs:{class:"language-bash"}},[v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Ti start"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Ti X, V1, V"),v("span",{pre:!0,attrs:{class:"token operator"}},[v("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),t._v(" 把X的值从V1改为V2\n"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Ti commit"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Ti abort"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),v("h3",{attrs:{id:"数据库修改时间"}},[t._v("数据库修改时间")]),t._v(" "),v("p",[t._v("事务修改了数据库，可能仅保留在主存而没有写回外存")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("延迟修改deferred-modification")]),t._v(" "),v("ul",[v("li",[t._v("事务提交时还没有修改数据库")]),t._v(" "),v("li",[t._v("日志记录所有操作，在提交时执行")]),t._v(" "),v("li",[t._v("修改数据时不需要记录原始值，即"),v("code",{pre:!0},[t._v("<Ti X, V1, V2>")]),t._v("可以写为"),v("code",{pre:!0},[t._v("<Ti X, V2>")])]),t._v(" "),v("li",[t._v("数据库崩溃时，如果"),v("code",{pre:!0},[t._v("<Ti start>")]),t._v("和"),v("code",{pre:!0},[t._v("<Ti commit>")]),t._v("都在日志中，只需要重新按照日志执行一遍即可")]),t._v(" "),v("li",[t._v("重做的幂等性 - 重做1次和重做无数次效果相同")])])]),t._v(" "),v("li",[v("strong",[t._v("立即修改immediate-modification")]),t._v(" "),v("ul",[v("li",[t._v("事务还在活跃时就修改数据库")]),t._v(" "),v("li",[t._v("没有commit时就执行，需要记录原始值，以便回滚")]),t._v(" "),v("li",[t._v("在修改数据库之前更新Log")])])])]),t._v(" "),v("h3",{attrs:{id:"数据库恢复操作"}},[t._v("数据库恢复操作")]),t._v(" "),v("ul",[v("li",[t._v("undo - 把数据变为旧值")]),t._v(" "),v("li",[t._v("redo - 把数据变为新值")])]),t._v(" "),v("p",[t._v("两个操作都是幂等的")]),t._v(" "),v("p",[t._v("如果日志没有commit或abort则undo。如果有则redo")]),t._v(" "),v("p",[v("img",{attrs:{src:r(737),alt:""}})]),t._v(" "),v("p",[t._v("如上图")]),t._v(" "),v("ul",[v("li",[t._v("a没有commit/abort，撤销T0")]),t._v(" "),v("li",[t._v("b需要先撤销T1，然后重做T0")]),t._v(" "),v("li",[t._v("c需要先重做T0，然后重做T1")])]),t._v(" "),v("h2",{attrs:{id:"检查点checkpoints"}},[t._v("检查点checkpoints")]),t._v(" "),v("p",[t._v("解决一次恢复一整个事务太多的问题")]),t._v(" "),v("p",[t._v("引入检查点之后，系统崩溃时从后往前寻找检查点最后一个检查点，然后再往前寻找倒数第一个事务的开始即可")]),t._v(" "),v("p",[v("img",{attrs:{src:r(738),alt:""}})]),t._v(" "),v("p",[t._v("检查点表示方法："),v("code",{pre:!0},[t._v("<checkpoint {T1, T2, ..., Tn}>")]),t._v("表示当前正在执行的事务是T1…Tn")]),t._v(" "),v("h2",{attrs:{id:"并发恢复算法"}},[t._v("并发恢复算法")]),t._v(" "),v("p",[t._v("整个算法分为两个阶段：")]),t._v(" "),v("ol",[v("li",[t._v("redo phase")]),t._v(" "),v("li",[t._v("undo phase")])]),t._v(" "),v("p",[t._v("算法：")]),t._v(" "),v("ol",[v("li",[t._v("找到最后一个checkpoint，把undo-list设置为此checkpoint正在执行的事务")]),t._v(" "),v("li",[t._v("(redo phase)从这个checkpoint向后查询，如果事务Ti被修改则重做此事务。如果有事务start则重做并加入undo-list。如果有事务commit或abort则移出undo-list")]),t._v(" "),v("li",[t._v("(undo phase)从日志为向前扫描，把undo-list里面的事务undo了，并记录日志"),v("code",{pre:!0},[t._v("<Ti, Xj, Vm>")]),t._v("（Vm为原来的值）。如果遇到事务start，写日志"),v("code",{pre:!0},[t._v("<Ti abort>")]),t._v("并把此事务移出undo-list。直到undo-list为空")])]),t._v(" "),v("p",[t._v("可以使用上面的图进行算法验证")])])}]};t.exports={attributes:{layout:"collection",title:"Recovery System",collection:"DatabaseConcept"},vue:{render:v.render,staticRenderFns:v.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=v.render,this.$options.staticRenderFns=v.staticRenderFns}}}}},737:function(t,e,r){t.exports=r.p+"img/16-1.7c82048.png"},738:function(t,e,r){t.exports=r.p+"img/16-2.834ff4d.png"}}]);