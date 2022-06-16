(window.webpackJsonp=window.webpackJsonp||[]).push([[20,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360],{1285:function(v,_,l){const t={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",{staticClass:"frontmatter-markdown"},[t("h2",{attrs:{id:"预备知识"}},[v._v("预备知识")]),v._v(" "),t("ul",[t("li",[v._v("数据 - 信息的载体。符号")]),v._v(" "),t("li",[v._v("信息 - 数据的含义")]),v._v(" "),t("li",[v._v("知识 - 信息之间的联系")])]),v._v(" "),t("p",[v._v("分析数据得到信息（DBMS），综合信息得到知识（AI）")]),v._v(" "),t("p",[v._v("知识的特性：")]),v._v(" "),t("ul",[t("li",[v._v("客观性")]),v._v(" "),t("li",[v._v("相对正确性 - 在一定条件下正确")]),v._v(" "),t("li",[v._v("进化型 - 可能随环境改变")]),v._v(" "),t("li",[v._v("依附性 - 所有知识都有载体")]),v._v(" "),t("li",[v._v("不确定性 - 因为信息和信息之间关联的模糊性、随机性、不完全性")]),v._v(" "),t("li",[v._v("经验性")]),v._v(" "),t("li",[v._v("可表示性")]),v._v(" "),t("li",[v._v("可利用性")]),v._v(" "),t("li",[v._v("可重用性")]),v._v(" "),t("li",[v._v("共享性")])]),v._v(" "),t("p",[v._v("知识的层次：")]),v._v(" "),t("ul",[t("li",[v._v("事实（非常广泛")]),v._v(" "),t("li",[v._v("概念（事实的抽象")]),v._v(" "),t("li",[v._v("规则（概念之间关系的归纳")]),v._v(" "),t("li",[v._v("启发式知识（关于规则的知识")])]),v._v(" "),t("p",[v._v("选择知识表示方式需要考虑的因素：")]),v._v(" "),t("ul",[t("li",[v._v("充分表示领域知识")]),v._v(" "),t("li",[v._v("有利于对知识的利用")]),v._v(" "),t("li",[v._v("便于对知识的组织、管理与维护")]),v._v(" "),t("li",[v._v("便于理解和实现")]),v._v(" "),t("li",[v._v("是否加入启发信息")]),v._v(" "),t("li",[v._v("是否有高效的算法")])]),v._v(" "),t("p",[v._v("知识的表达方式：")]),v._v(" "),t("ul",[t("li",[v._v("基于逻辑的表达\n"),t("ul",[t("li",[v._v("一阶谓词")]),v._v(" "),t("li",[v._v("非经典逻辑\n"),t("ul",[t("li",[v._v("模态逻辑")]),v._v(" "),t("li",[v._v("模糊逻辑")]),v._v(" "),t("li",[v._v("时序逻辑")]),v._v(" "),t("li",[v._v("非单调逻辑")])])])])]),v._v(" "),t("li",[v._v("面向对象的表达\n"),t("ul",[t("li",[v._v("对象")]),v._v(" "),t("li",[v._v("框架")]),v._v(" "),t("li",[v._v("语义网")])])]),v._v(" "),t("li",[v._v("基于规则的表达\n"),t("ul",[t("li",[v._v("产生式系统")])])]),v._v(" "),t("li",[v._v("基于模型的表达")])]),v._v(" "),t("p",[t("img",{attrs:{src:l(500),alt:"2-1"}})]),v._v(" "),t("h2",{attrs:{id:"问题表达方法"}},[v._v("问题表达方法")]),v._v(" "),t("h3",{attrs:{id:"状态空间表示法"}},[v._v("状态空间表示法")]),v._v(" "),t("p",[v._v("需要定义问题的状态空间和状态转移方法")]),v._v(" "),t("p",[v._v("通常使用三元组"),t("code",{pre:!0},[v._v("(S, F, G)")])]),v._v(" "),t("ul",[t("li",[v._v("初始状态 - "),t("img",{attrs:{src:l(501),alt:"2-2"}})]),v._v(" "),t("li",[v._v("操作 - "),t("img",{attrs:{src:l(502),alt:"2-3"}})]),v._v(" "),t("li",[v._v("目标状态 - "),t("img",{attrs:{src:l(503),alt:"2-4"}})])]),v._v(" "),t("p",[v._v("初始状态经过一系列操作到达目标状态")]),v._v(" "),t("p",[v._v("状态空间不变的情况下可以有很多等效的状态转移方法（操作")]),v._v(" "),t("ul",[t("li",[v._v("显示说明 - 给出所有结点和操作。状态可穷举")]),v._v(" "),t("li",[v._v("隐式说明 - 引入后继算符，逐步动态生成后继结点，扩大状态空间（迭代加深")])]),v._v(" "),t("blockquote",[t("p",[v._v("显示说明举例：农夫过河问题 - 农夫+狼+羊+菜过河，农夫最多可以携带一个物品。共16个状态")])]),v._v(" "),t("blockquote",[t("p",[v._v("隐式说明举例：猴子、香蕉问题 - 规划猴子行为使猴子能够抓到香蕉。猴子踩在箱子上才能抓到香蕉。猴子处于无限大二维平面，有无限个状态")])]),v._v(" "),t("p",[t("img",{attrs:{src:l(504),alt:"2-5"}})]),v._v(" "),t("h3",{attrs:{id:"与或树图表示法"}},[v._v("与或树（图）表示法")]),v._v(" "),t("p",[v._v("解决博弈问题")]),v._v(" "),t("p",[v._v("问题规约法 - 把未解决问题转换为一系列已解决或易解决问题")]),v._v(" "),t("p",[v._v("方法的构成：")]),v._v(" "),t("ul",[t("li",[v._v("初始问题描述")]),v._v(" "),t("li",[v._v("分解方案")]),v._v(" "),t("li",[v._v("已解决的问题（本原问题）")])]),v._v(" "),t("p",[v._v("使用与或图表示。")]),v._v(" "),t("ul",[t("li",[v._v("与图\n"),t("ul",[t("li",[v._v("问题分解")]),v._v(" "),t("li",[t("img",{attrs:{src:l(505),alt:"2-6"}})])])]),v._v(" "),t("li",[v._v("或图\n"),t("ul",[t("li",[v._v("问题等价")]),v._v(" "),t("li",[t("img",{attrs:{src:l(506),alt:"2-7"}})])])])]),v._v(" "),t("p",[v._v("与或图的结点构成：")]),v._v(" "),t("ul",[t("li",[v._v("初始节点 - 原始问题")]),v._v(" "),t("li",[v._v("终叶节点 - 本原问题")]),v._v(" "),t("li",[v._v("与节点")]),v._v(" "),t("li",[v._v("或节点")]),v._v(" "),t("li",[v._v("连线 - 分解、转换规则")])]),v._v(" "),t("p",[v._v("三种可解节点：")]),v._v(" "),t("ol",[t("li",[v._v("终叶节点")]),v._v(" "),t("li",[v._v("非终叶节点是或节点，后继结点至少有一个可解节点")]),v._v(" "),t("li",[v._v("非终叶节点是与节点，后继结点全部为可解节点")])]),v._v(" "),t("p",[v._v("三种不可解节点：")]),v._v(" "),t("ol",[t("li",[v._v("没有后继的非终叶节点")]),v._v(" "),t("li",[v._v("此节点是或节点且后继结点全部是不可解节点")]),v._v(" "),t("li",[v._v("此节点是与节点且后继至少有一个为不可解节点")])]),v._v(" "),t("h2",{attrs:{id:"基于知识的表示方法"}},[v._v("基于知识的表示方法")]),v._v(" "),t("h3",{attrs:{id:"产生式规则表示法"}},[v._v("产生式规则表示法")]),v._v(" "),t("p",[v._v("由数学家Post提出，目前应用最广泛的方法之一")]),v._v(" "),t("p",[t("code",{pre:!0},[v._v("IF XX THEN XX")])]),v._v(" "),t("p",[v._v("基于规则的系统包括三个核心模块：")]),v._v(" "),t("ul",[t("li",[v._v("知识库（规则库")]),v._v(" "),t("li",[v._v("数据库（包含大量事实")]),v._v(" "),t("li",[v._v("推理机（把数据库的输入与知识库的规则相匹配")])]),v._v(" "),t("p",[t("img",{attrs:{src:l(507),alt:"2-8"}})]),v._v(" "),t("p",[v._v("优点：")]),v._v(" "),t("ul",[t("li",[v._v("善于表达领域知识（专家系统")]),v._v(" "),t("li",[v._v("控制和知识相分离")]),v._v(" "),t("li",[v._v("知识的模块性强")]),v._v(" "),t("li",[v._v("便于实现解释推理（可以获得推理过程")]),v._v(" "),t("li",[v._v("便于使用启发性知识")])]),v._v(" "),t("p",[v._v("缺点：")]),v._v(" "),t("ul",[t("li",[v._v("单条规则容易解释，规则之间的逻辑关系难以确定")]),v._v(" "),t("li",[v._v("规则数太大时（万数量级），知识库的一致性难以维护\n"),t("ul",[t("li",[t("code",{pre:!0},[v._v("P -> Q")]),v._v(" & "),t("code",{pre:!0},[v._v("P and W -> Q")]),v._v(" - 一致性问题")]),v._v(" "),t("li",[t("code",{pre:!0},[v._v("P -> Q")]),v._v(" & "),t("code",{pre:!0},[v._v("Q -> P")]),v._v(" - 死循环")])])]),v._v(" "),t("li",[v._v("某些类型的知识难以表示，比如结构性知识")])]),v._v(" "),t("h3",{attrs:{id:"谓词表示法"}},[v._v("谓词表示法")]),v._v(" "),t("p",[v._v("人工智能中的两种逻辑：")]),v._v(" "),t("ul",[t("li",[v._v("命题逻辑")]),v._v(" "),t("li",[v._v("谓词逻辑")])]),v._v(" "),t("p",[v._v("命题 - 要么真要么假的语句。使用大写英文字母表示，如"),t("code",{pre:!0},[v._v("P: description")])]),v._v(" "),t("p",[v._v("谓词 - 由谓词名和个体/客体变元/变元构成，如"),t("code",{pre:!0},[v._v("Name(attribute1, attribute2, ..., attributeN)")])]),v._v(" "),t("p",[v._v("一阶谓词 - "),t("code",{pre:!0},[v._v("P(attribute)")])]),v._v(" "),t("p",[v._v("谓词连接词：")]),v._v(" "),t("ul",[t("li",[v._v("非")]),v._v(" "),t("li",[v._v("与")]),v._v(" "),t("li",[v._v("或")]),v._v(" "),t("li",[v._v("蕴含"),t("code",{pre:!0},[v._v("->")])]),v._v(" "),t("li",[v._v("当且仅当"),t("code",{pre:!0},[v._v("<->")])]),v._v(" "),t("li",[v._v("存在量词")]),v._v(" "),t("li",[v._v("全称量词")])]),v._v(" "),t("p",[v._v("不精确匹配时提供可信度（即一个概率值")]),v._v(" "),t("h3",{attrs:{id:"语义网络表示法"}},[v._v("语义网络表示法")]),v._v(" "),t("p",[v._v("使用图来表示知识、事物概念及语义关系")]),v._v(" "),t("ul",[t("li",[v._v("节点 - 概念、实体、事物、事件")]),v._v(" "),t("li",[v._v("边 - 关系")]),v._v(" "),t("li",[v._v("基本单元 - "),t("code",{pre:!0},[v._v("<节点><语义关系><节点>")])]),v._v(" "),t("li",[v._v("网络 - "),t("code",{pre:!0},[v._v("<基本单元>")]),v._v("的组合")])]),v._v(" "),t("p",[t("img",{attrs:{src:l(508),alt:"2-9"}})]),v._v(" "),t("p",[v._v("（属性也可表示为节点")]),v._v(" "),t("p",[v._v("表示情况、动作、事件举例：小燕这只燕子从春天到秋天占有一个窝：")]),v._v(" "),t("p",[t("img",{attrs:{src:l(509),alt:"2-10"}})]),v._v(" "),t("p",[v._v("【占有】是所有占有的集合，【占有-1】是某种特定的占有")]),v._v(" "),t("p",[v._v("表示逻辑举例：与会者有男有女，有年老的有年轻的：")]),v._v(" "),t("p",[t("img",{attrs:{src:l(510),alt:"2-11"}})]),v._v(" "),t("p",[v._v("（其中ABCD表示"),t("code",{pre:!0},[v._v("[男, 女] * [老, 少]")])]),v._v(" "),t("p",[v._v("不善于表示逻辑，但是善于表达结构化知识")]),v._v(" "),t("p",[v._v("使用"),t("strong",[v._v("网络分区+全称链")]),v._v("表示"),t("strong",[v._v("量化")]),v._v("（部分网络）")]),v._v(" "),t("p",[v._v("例：每个学生都会背一首唐诗")]),v._v(" "),t("p",[t("img",{attrs:{src:l(511),alt:""}})]),v._v(" "),t("p",[v._v("G指向的子空间F仅包含变量。全称链G指向S表示【任意学生】")]),v._v(" "),t("p",[v._v("如果是【所有学生都会背所有唐诗】，则从G再链接一个全称链指向P")]),v._v(" "),t("p",[v._v("如果是【所有学生都会背《静夜思》】则把变量P变为常量《静夜思》，并把P移出变量空间。变量空间只剩下S和R")]),v._v(" "),t("p",[v._v("多元网络 - 一个节点有多个向外的弧")]),v._v(" "),t("p",[v._v("常见语义关系：")]),v._v(" "),t("ul",[t("li",[v._v("a member of")]),v._v(" "),t("li",[v._v("composed of")]),v._v(" "),t("li",[v._v("have")]),v._v(" "),t("li",[v._v("before/after/at")]),v._v(" "),t("li",[v._v("located on")]),v._v(" "),t("li",[v._v("similar to")]),v._v(" "),t("li",[v._v("a kind of")]),v._v(" "),t("li",[v._v("part of")])]),v._v(" "),t("p",[v._v("如何求解？假设例题：")]),v._v(" "),t("p",[t("img",{attrs:{src:l(512),alt:""}})]),v._v(" "),t("p",[v._v("难以求解，因为模型非严格，没有工人的形式表示体系，且处理复杂性高")]),v._v(" "),t("h3",{attrs:{id:"框架表示法"}},[v._v("框架表示法")]),v._v(" "),t("p",[v._v("表示形式更固定的语义网络")]),v._v(" "),t("ul",[t("li",[v._v("框架名")]),v._v(" "),t("li",[v._v("槽 - 属性")]),v._v(" "),t("li",[v._v("侧面（不必须")]),v._v(" "),t("li",[v._v("值")]),v._v(" "),t("li",[v._v("约束条件")])]),v._v(" "),t("p",[t("img",{attrs:{src:l(513),alt:""}})]),v._v(" "),t("p",[v._v("例：")]),v._v(" "),t("p",[t("img",{attrs:{src:l(514),alt:"2-12"}})]),v._v(" "),t("p",[v._v("一个框架是语义网络中的一个节点。框架网络是框架与框架之间的联系")]),v._v(" "),t("ul",[t("li",[v._v("横向联系 - 一个槽的值是另一个框架")]),v._v(" "),t("li",[v._v("纵向联系 - 继承槽，下层框架继承上层框架的属性")])]),v._v(" "),t("p",[v._v("常见槽：")]),v._v(" "),t("ul",[t("li",[v._v("ISA - is a")]),v._v(" "),t("li",[v._v("AKO - a kind of")]),v._v(" "),t("li",[v._v("Subclass")]),v._v(" "),t("li",[v._v("Instance - AKO的逆关系")]),v._v(" "),t("li",[v._v("Part of")]),v._v(" "),t("li",[v._v("Infer")])]),v._v(" "),t("p",[v._v("特点：")]),v._v(" "),t("ul",[t("li",[v._v("嵌套式结构")]),v._v(" "),t("li",[v._v("继承性")]),v._v(" "),t("li",[v._v("不善于表达过程性的知识")])]),v._v(" "),t("p",[v._v("问题举例:")]),v._v(" "),t("p",[t("img",{attrs:{src:l(515),alt:""}})]),v._v(" "),t("h3",{attrs:{id:"剧本表示法"}},[v._v("剧本表示法")]),v._v(" "),t("p",[v._v("是一种格式固定的框架")]),v._v(" "),t("p",[v._v("描述过程化的知识")]),v._v(" "),t("p",[v._v("规定了11个原子动作：")]),v._v(" "),t("ul",[t("li",[v._v("PROPEL")]),v._v(" "),t("li",[v._v("GRASP")]),v._v(" "),t("li",[v._v("MOVE")]),v._v(" "),t("li",[v._v("ATRANS")]),v._v(" "),t("li",[v._v("PTRANS")]),v._v(" "),t("li",[v._v("ATTEND")]),v._v(" "),t("li",[v._v("INGEST")]),v._v(" "),t("li",[v._v("EXPEL")]),v._v(" "),t("li",[v._v("SPEAK")]),v._v(" "),t("li",[v._v("MTRANS")]),v._v(" "),t("li",[v._v("MBUILD")])]),v._v(" "),t("p",[v._v("举例：")]),v._v(" "),t("p",[t("img",{attrs:{src:l(516),alt:""}})]),v._v(" "),t("p",[v._v("问题：")]),v._v(" "),t("ul",[t("li",[v._v("呆板，局限")])]),v._v(" "),t("h3",{attrs:{id:"面向对象表示法"}},[v._v("面向对象表示法")]),v._v(" "),t("p",[v._v("最结构化，抽象程度最高")]),v._v(" "),t("h3",{attrs:{id:"知识图谱"}},[v._v("知识图谱")]),v._v(" "),t("p",[v._v("自行搜索知识图谱的概念与相关研究的资料")])])}]};v.exports={attributes:{layout:"collection",title:"知识表示和组织",collection:"AIPrinciple"},vue:{render:t.render,staticRenderFns:t.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=t.render,this.$options.staticRenderFns=t.staticRenderFns}}}}},500:function(v,_,l){v.exports=l.p+"img/2-1.90bd3ee.png"},501:function(v,_,l){v.exports=l.p+"img/2-2.06c8a26.png"},502:function(v,_,l){v.exports=l.p+"img/2-3.07fd115.png"},503:function(v,_,l){v.exports=l.p+"img/2-4.1e1d06c.png"},504:function(v,_,l){v.exports=l.p+"img/2-5.e84f9b2.png"},505:function(v,_,l){v.exports=l.p+"img/2-6.2a77f66.png"},506:function(v,_,l){v.exports=l.p+"img/2-7.823a253.png"},507:function(v,_,l){v.exports=l.p+"img/2-8.80f904c.png"},508:function(v,_,l){v.exports=l.p+"img/2-9.69d97d0.png"},509:function(v,_,l){v.exports=l.p+"img/2-10.43f5f41.png"},510:function(v,_,l){v.exports=l.p+"img/2-11.489b9f6.png"},511:function(v,_,l){v.exports=l.p+"img/2-13.1889b83.png"},512:function(v,_,l){v.exports=l.p+"img/2-14.851d834.png"},513:function(v,_,l){v.exports=l.p+"img/2-15.30e33a0.png"},514:function(v,_,l){v.exports=l.p+"img/2-12.e7ceb6e.png"},515:function(v,_,l){v.exports=l.p+"img/2-16.dd07a76.png"},516:function(v,_,l){v.exports=l.p+"img/2-17.65c87f4.png"}}]);