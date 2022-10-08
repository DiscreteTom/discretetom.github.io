(window.webpackJsonp=window.webpackJsonp||[]).push([[17,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661],{1358:function(t,v,_){const r={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,v=t.$createElement,r=t._self._c||v;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"概述"}},[t._v("概述")]),t._v(" "),r("p",[t._v("基本ER模型包括：")]),t._v(" "),r("ul",[r("li",[t._v("实体集entity sets\n"),r("ul",[r("li",[t._v("拥有相同属性的对象的集合")]),t._v(" "),r("li",[t._v("实体集都有主键")])])]),t._v(" "),r("li",[t._v("关系集relation sets\n"),r("ul",[r("li",[t._v("关系集连接多个（通常是两个）实体集")])])]),t._v(" "),r("li",[t._v("属性attributes\n"),r("ul",[r("li",[t._v("属性可以是简单属性也可以是复合属性（由多个子属性构成，如姓名可以分解为姓和名")]),t._v(" "),r("li",[t._v("可以是单值的也可以是多值的（如一个人可以有多个电话号")]),t._v(" "),r("li",[t._v("有些属性可以由其他属性计算出来")]),t._v(" "),r("li",[t._v("有些属性有特定的值域")])])])]),t._v(" "),r("h2",{attrs:{id:"映射基数约束"}},[t._v("映射基数约束")]),t._v(" "),r("p",[t._v("mapping cardinality constraints")]),t._v(" "),r("p",[t._v("二元关系可以是：")]),t._v(" "),r("ul",[r("li",[t._v("一对一")]),t._v(" "),r("li",[t._v("一对多")]),t._v(" "),r("li",[t._v("多对一")]),t._v(" "),r("li",[t._v("多对多")])]),t._v(" "),r("p",[t._v("此处的多表示可以为0个")]),t._v(" "),r("h2",{attrs:{id:"弱实体集"}},[t._v("弱实体集")]),t._v(" "),r("p",[t._v("weak entity sets")]),t._v(" "),r("p",[t._v("有些实体集没有主键，其主键被蕴含在了与其有关系的实体集或关系的属性中。这样的实体集被称为弱实体集。可以确定弱实体集中的元组的实体集被称为identifying entity")]),t._v(" "),r("p",[t._v("每一个弱实体集必须关联一个identifying entity")]),t._v(" "),r("p",[t._v("弱实体集中有些属性会和弱实体集外面的属性共同组成主键，这些属性称为discriminator判别属性")]),t._v(" "),r("h2",{attrs:{id:"er图"}},[t._v("ER图")]),t._v(" "),r("h3",{attrs:{id:"基本"}},[t._v("基本")]),t._v(" "),r("p",[t._v("实体集，标注下划线的"),r("strong",[t._v("所有属性")]),t._v("组成主键")]),t._v(" "),r("p",[r("img",{attrs:{src:_(777),alt:""}})]),t._v(" "),r("p",[t._v("关系，只有名字")]),t._v(" "),r("p",[r("img",{attrs:{src:_(778),alt:""}})]),t._v(" "),r("p",[t._v("有属性的关系（注意是虚线")]),t._v(" "),r("p",[r("img",{attrs:{src:_(779),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"角色"}},[t._v("角色")]),t._v(" "),r("p",[r("img",{attrs:{src:_(780),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"基数约束"}},[t._v("基数约束")]),t._v(" "),r("p",[t._v("箭头表示1，直线表示多")]),t._v(" "),r("p",[t._v("一对一：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(781),alt:""}})]),t._v(" "),r("p",[t._v("一对多")]),t._v(" "),r("p",[r("img",{attrs:{src:_(782),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"部分参与与全参与"}},[t._v("部分参与与全参与")]),t._v(" "),r("p",[t._v("total and partial participation")]),t._v(" "),r("p",[t._v("两条线表示全参与，一条线表示部分参与")]),t._v(" "),r("p",[r("img",{attrs:{src:_(783),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"标记数量"}},[t._v("标记数量")]),t._v(" "),r("p",[t._v("可以使用数字表示数量，使用两个被"),r("code",{pre:!0},[t._v("..")]),t._v("隔开的数字表示范围，"),r("code",{pre:!0},[t._v("*")]),t._v("表示任意（可以为0")]),t._v(" "),r("p",[r("img",{attrs:{src:_(784),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"关于属性的表示"}},[t._v("关于属性的表示")]),t._v(" "),r("ul",[r("li",[t._v("复合属性name和address（复合属性可以有多层")]),t._v(" "),r("li",[t._v("多值属性phone_number")]),t._v(" "),r("li",[t._v("可以被计算的属性age")])]),t._v(" "),r("p",[r("img",{attrs:{src:_(785),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"弱实体集-1"}},[t._v("弱实体集")]),t._v(" "),r("p",[t._v("使用两层矩形表示弱实体集。关联弱实体集和强势体积的关系使用两层菱形")]),t._v(" "),r("p",[t._v("判别属性使用虚线标注")]),t._v(" "),r("p",[t._v("此例中section的主键是"),r("code",{pre:!0},[t._v("(course_id, sec_id, semester, year)")])]),t._v(" "),r("p",[r("img",{attrs:{src:_(786),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"er图实例"}},[t._v("ER图实例")]),t._v(" "),r("p",[r("img",{attrs:{src:_(787),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"其他er图相关"}},[t._v("其他ER图相关")]),t._v(" "),r("h3",{attrs:{id:"非二元属性"}},[t._v("非二元属性")]),t._v(" "),r("p",[r("img",{attrs:{src:_(788),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"特化继承"}},[t._v("特化（继承")]),t._v(" "),r("p",[t._v("specialization")]),t._v(" "),r("p",[t._v("类似于面向对象设计中的继承概念，继承属性")]),t._v(" "),r("p",[t._v("继承可以分为：")]),t._v(" "),r("ul",[r("li",[t._v("正交disjoint - 子类没有重叠部分")]),t._v(" "),r("li",[t._v("重叠overlapping - 子类有重叠部分")])]),t._v(" "),r("p",[t._v("比如继承“人”得到“男人”和“程序员”就有重叠")]),t._v(" "),r("p",[t._v("继承还可以分为：")]),t._v(" "),r("ul",[r("li",[t._v("完全total - 包含了所有父类的情况")]),t._v(" "),r("li",[t._v("部分partial - 不包含所有父类的情况")])]),t._v(" "),r("p",[t._v("以上两种分类可以组合出四种继承")]),t._v(" "),r("p",[t._v("继承的ER图表示：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(789),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"泛化"}},[t._v("泛化")]),t._v(" "),r("p",[t._v("generalization")]),t._v(" "),r("p",[t._v("自底向上设计，组合一些属性相同的实体集。在ER图中看起来和继承没什么区别，只是设计时的不同。")]),t._v(" "),r("h3",{attrs:{id:"聚集"}},[t._v("聚集")]),t._v(" "),r("p",[t._v("聚集多个实体集（和关系）成为一个聚集，聚集可以有聚集的主键（由内部实体集和关系生成）")]),t._v(" "),r("p",[r("img",{attrs:{src:_(790),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"设计问题"}},[t._v("设计问题")]),t._v(" "),r("h3",{attrs:{id:"属性-vs-实体集"}},[t._v("属性 vs 实体集")]),t._v(" "),r("p",[r("img",{attrs:{src:_(791),alt:""}})]),t._v(" "),r("p",[t._v("通常设计关系的目的是为了描述两个实体之间可能发生的"),r("strong",[t._v("操作actions")]),t._v("，否则使用属性足矣")]),t._v(" "),r("h3",{attrs:{id:"二元关系-vs-多元关系"}},[t._v("二元关系 vs 多元关系")]),t._v(" "),r("p",[t._v("尽量使用二元关系取代多元关系")]),t._v(" "),r("p",[r("img",{attrs:{src:_(792),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"er图总结"}},[t._v("ER图总结")]),t._v(" "),r("p",[t._v("不同的标准得到的ER图是不一样的（比如形状的表示不通过）。此处是标准之一")]),t._v(" "),r("p",[r("img",{attrs:{src:_(793),alt:""}})]),t._v(" "),r("p",[r("img",{attrs:{src:_(794),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"er图转db-schema"}},[t._v("ER图转DB schema")]),t._v(" "),r("h3",{attrs:{id:"实体集"}},[t._v("实体集")]),t._v(" "),r("p",[t._v("直接变成关系即可")]),t._v(" "),r("h3",{attrs:{id:"弱实体集-2"}},[t._v("弱实体集")]),t._v(" "),r("p",[t._v("要把弱实体集外部的能够组成弱实体集主键的属性包含进弱实体集的关系中。通常是identifying entity的主键")]),t._v(" "),r("h3",{attrs:{id:"属性"}},[t._v("属性")]),t._v(" "),r("ul",[r("li",[t._v("复合属性变成多个属性")]),t._v(" "),r("li",[t._v("多值属性变成一个表（注意命名），表的主键是原实体集的主键")]),t._v(" "),r("li",[t._v("忽略衍生属性（如果计算麻烦的话也可以不忽略，视情况而定")])]),t._v(" "),r("h3",{attrs:{id:"关系集"}},[t._v("关系集")]),t._v(" "),r("ul",[r("li",[t._v("多对多的关系集 - 需要一个关系保存关系两边的实体集的主键")]),t._v(" "),r("li",[t._v("一对多的关系集 - 保存一的主键到多的那一边")]),t._v(" "),r("li",[t._v("一对一的关系集 - 任意一边保存另一边的主键即可")])]),t._v(" "),r("p",[t._v("完全演绎 & 不完全演绎（部分演绎） - 完全演绎：所有底层实体集的并集等价于高层实体集")])])}]};t.exports={attributes:{layout:"collection",title:"ER model",collection:"DatabaseConcept"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}},777:function(t,v,_){t.exports=_.p+"img/7-1.f736d0d.png"},778:function(t,v,_){t.exports=_.p+"img/7-2.d041453.png"},779:function(t,v,_){t.exports=_.p+"img/7-3.b43ec12.png"},780:function(t,v,_){t.exports=_.p+"img/7-4.e8491ed.png"},781:function(t,v,_){t.exports=_.p+"img/7-5.8197550.png"},782:function(t,v,_){t.exports=_.p+"img/7-6.ac784ac.png"},783:function(t,v,_){t.exports=_.p+"img/7-7.1ca1c40.png"},784:function(t,v,_){t.exports=_.p+"img/7-8.642f887.png"},785:function(t,v,_){t.exports=_.p+"img/7-9.472adde.png"},786:function(t,v,_){t.exports=_.p+"img/7-10.fb252a2.png"},787:function(t,v,_){t.exports=_.p+"img/7-11.0394045.jpg"},788:function(t,v,_){t.exports=_.p+"img/7-12.cd654b4.png"},789:function(t,v,_){t.exports=_.p+"img/7-13.82802ad.png"},790:function(t,v,_){t.exports=_.p+"img/7-14.5d3423d.png"},791:function(t,v,_){t.exports=_.p+"img/7-15.3144d87.png"},792:function(t,v,_){t.exports=_.p+"img/7-16.8b6ac91.png"},793:function(t,v,_){t.exports=_.p+"img/7-17.9253f3e.png"},794:function(t,v,_){t.exports=_.p+"img/7-18.a6ecbae.png"}}]);