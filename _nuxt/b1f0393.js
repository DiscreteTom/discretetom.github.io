(window.webpackJsonp=window.webpackJsonp||[]).push([[56,540,541,542,543,544],{1298:function(t,v,_){const e={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"概述"}},[t._v("概述")]),t._v(" "),e("p",[t._v("事务具有原子性，要么执行要么不执行")]),t._v(" "),e("p",[t._v("主要讨论的问题：")]),t._v(" "),e("ul",[e("li",[t._v("事务恢复")]),t._v(" "),e("li",[t._v("并行事务")])]),t._v(" "),e("h2",{attrs:{id:"事务的特性acid"}},[t._v("事务的特性ACID")]),t._v(" "),e("ul",[e("li",[t._v("atomicity原子性，要么执行要么不执行")]),t._v(" "),e("li",[t._v("consistency一致性，事务的结果满足完整性约束")]),t._v(" "),e("li",[t._v("isolation隔离性，事务之间不相互影响")]),t._v(" "),e("li",[t._v("durability持久性，事务完成后的结果是持久生效的")])]),t._v(" "),e("h2",{attrs:{id:"事务状态"}},[t._v("事务状态")]),t._v(" "),e("ul",[e("li",[t._v("active - 初始状态，没有被执行")]),t._v(" "),e("li",[t._v("partially committed - 最后一条语句执行后")]),t._v(" "),e("li",[t._v("failed - 不能继续执行")]),t._v(" "),e("li",[t._v("aborted - 已回滚，可能重启事务或放弃事务")]),t._v(" "),e("li",[t._v("committed - 完成")])]),t._v(" "),e("p",[e("img",{attrs:{src:_(715),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"调度schedules"}},[t._v("调度schedules")]),t._v(" "),e("h3",{attrs:{id:"种类"}},[t._v("种类")]),t._v(" "),e("ul",[e("li",[t._v("serial schedule串行调度 - 不同事务按顺序分别执行（从上到下），各个事务时间没有交叉，可以某个顺序执行事务（比如先执行T1然后执行T2）（图1")]),t._v(" "),e("li",[t._v("concurrent schedule并发调度 - 不同的事务并行执行，事务之间有交叉，但是可能可以串行化（图2")])]),t._v(" "),e("p",[e("img",{attrs:{src:_(716),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"可串行化serializability"}},[t._v("可串行化serializability")]),t._v(" "),e("p",[t._v("串行调度显然可串行化。")]),t._v(" "),e("p",[t._v("串行化需要考察很多因素，下文仅讨论 "),e("strong",[t._v("冲突可串行化")])]),t._v(" "),e("h3",{attrs:{id:"冲突可串行化"}},[t._v("冲突可串行化")]),t._v(" "),e("p",[t._v("conflict serializability")]),t._v(" "),e("p",[t._v("考虑两个事务i和j，如果二者同时操作相同的数据，只有二者同时读不冲突，其他都冲突。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("冲突等价conflict equivalent")]),t._v(" - 如果调度S可以经过一系列费冲突指令交换为S’，那么二者是冲突等价的")]),t._v(" "),e("li",[e("strong",[t._v("冲突可串行化conflict serializable")]),t._v(" - 如果一个调度S与一个串行调度等价，则S是冲突可串行化的")])]),t._v(" "),e("h3",{attrs:{id:"检测冲突可串行化"}},[t._v("检测冲突可串行化")]),t._v(" "),e("p",[t._v("使用 "),e("strong",[t._v("优先图precedence graph")])]),t._v(" "),e("p",[t._v("顶点是事务，边是调度顺序")]),t._v(" "),e("p",[t._v("构造边的原则（假设构造i -> j）：")]),t._v(" "),e("ul",[e("li",[t._v("j在读之前i写")]),t._v(" "),e("li",[t._v("j在写之前i读")]),t._v(" "),e("li",[t._v("j在写之前i写")])]),t._v(" "),e("p",[t._v("即：")]),t._v(" "),e("ul",[e("li",[t._v("如果i写了X，在它之后的j无论读写X都有边")]),t._v(" "),e("li",[t._v("如果i读了X，在它之后j写X会有边")])]),t._v(" "),e("p",[t._v("然后通过拓扑排序检测是否存在串行化事务序列即可")]),t._v(" "),e("p",[t._v("例，存在如下四个事务，实际执行顺序如下表，是否存在一个串行执行序列：")]),t._v(" "),e("p",[e("img",{attrs:{src:_(717),alt:""}})]),t._v(" "),e("p",[t._v("从上往下按时间看这个表")]),t._v(" "),e("ol",[e("li",[t._v("T3写了Y，那么下面无论读写Y都要加边。所以有T3 -> T2")]),t._v(" "),e("li",[t._v("T1读了X，所以下面写X的时候要加边，所以T1 -> T2/T3/T4")]),t._v(" "),e("li",[t._v("T2读了Y，所以下面写Y的时候要加边")]),t._v(" "),e("li",[t._v("…")])]),t._v(" "),e("h2",{attrs:{id:"可恢复性recoverability"}},[t._v("可恢复性recoverability")]),t._v(" "),e("p",[e("strong",[t._v("可恢复调度recoverable schedule")]),t._v(" - 对于每对事务ij，如果j读了在此之前i写的数据，那么i要先于j提交")]),t._v(" "),e("p",[e("img",{attrs:{src:_(718),alt:""}})]),t._v(" "),e("p",[t._v("如上图。9读了8写的数据。如果9先提交，8回滚时9无法回滚（不可恢复）。而如果8先提交，9回滚对8没影响")]),t._v(" "),e("h2",{attrs:{id:"级联回滚"}},[t._v("级联回滚")]),t._v(" "),e("p",[t._v("cascading rollback")]),t._v(" "),e("p",[t._v("即使事务可恢复，也可能需要级联回滚。")]),t._v(" "),e("p",[e("img",{attrs:{src:_(719),alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("无级联调度cascadeless schedule")]),t._v(" - 对于每对事务ij，如果j读取了i写的数据，i需要在j读之前提交。")]),t._v(" "),e("p",[t._v("所有无级联调度都是可恢复的")])])}]};t.exports={attributes:{layout:"collection",title:"Transactions",collection:"DatabaseConcept"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}},715:function(t,v,_){t.exports=_.p+"img/14-1.04e55a2.png"},716:function(t,v,_){t.exports=_.p+"img/14-2.8fdb25c.png"},717:function(t,v,_){t.exports=_.p+"img/14-3.aeebe93.png"},718:function(t,v,_){t.exports=_.p+"img/14-4.cc18981.png"},719:function(t,v,_){t.exports=_.p+"img/14-5.b5147f7.png"}}]);