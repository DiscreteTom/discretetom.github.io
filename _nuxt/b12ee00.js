(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{1336:function(e,t){const v={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"frontmatter-markdown"},[v("h2",{attrs:{id:"发展"}},[e._v("发展")]),e._v(" "),v("ul",[v("li",[e._v("数据和应用对应，数据不能共用。数据手工管理")]),e._v(" "),v("li",[e._v("文件管理，使用文件管理系统实现数据管理\n"),v("ul",[v("li",[e._v("数据冗余导致一致性问题，产生垃圾数据")]),e._v(" "),v("li",[e._v("原子性")]),e._v(" "),v("li",[e._v("…")])])]),e._v(" "),v("li",[e._v("数据库系统")])]),e._v(" "),v("h2",{attrs:{id:"数据库内结构"}},[e._v("数据库内结构")]),e._v(" "),v("p",[e._v("三层结构：")]),e._v(" "),v("ul",[v("li",[e._v("view level（外模式、用户模式")]),e._v(" "),v("li",[e._v("logical level（逻辑模式")]),e._v(" "),v("li",[e._v("physical level（物理模式、内模式")])]),e._v(" "),v("p",[e._v("对应三层抽象：")]),e._v(" "),v("ul",[v("li",[e._v("view abstraction")]),e._v(" "),v("li",[e._v("logical abstraction")]),e._v(" "),v("li",[e._v("physical abstraction")])]),e._v(" "),v("p",[e._v("三级模式，两级映像(mappings)，即外模式向逻辑模式的映射和逻辑模式向物理模式的映射")]),e._v(" "),v("p",[e._v("其他相关名词：")]),e._v(" "),v("ul",[v("li",[e._v("schema - 模式，描述存储结构（静态")]),e._v(" "),v("li",[e._v("instance - 实例、快照，某一时刻整个数据库的内容（动态")])]),e._v(" "),v("h2",{attrs:{id:"数据库的独立性"}},[e._v("数据库的独立性")]),e._v(" "),v("ul",[v("li",[e._v("物理数据独立性\n"),v("ul",[v("li",[e._v("修改物理存储模式时不需要改app")])])]),e._v(" "),v("li",[e._v("逻辑数据独立性\n"),v("ul",[v("li",[e._v("修改table schema的时候不需要改不用新schema的app")])])])]),e._v(" "),v("h2",{attrs:{id:"data-models"}},[e._v("Data Models")]),e._v(" "),v("p",[e._v("数据库的数据模型")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("支持的数据结构")])]),e._v(" "),v("li",[v("p",[e._v("支持的数据操作")])]),e._v(" "),v("li",[v("p",[e._v("完整性约束")])]),e._v(" "),v("li",[v("p",[e._v("基于对象数据模型")]),e._v(" "),v("ul",[v("li",[e._v("ER数据模型")]),e._v(" "),v("li",[e._v("面向对象模型")])])]),e._v(" "),v("li",[v("p",[e._v("基于记录数据模型")]),e._v(" "),v("ul",[v("li",[e._v("层次数据模型")]),e._v(" "),v("li",[e._v("网状数据模型")]),e._v(" "),v("li",[e._v("关系数据模型")])])])]),e._v(" "),v("h2",{attrs:{id:"语言"}},[e._v("语言")]),e._v(" "),v("h3",{attrs:{id:"ddl"}},[e._v("DDL")]),e._v(" "),v("p",[e._v("database definition language数据定义语言（如SQL中的"),v("code",{pre:!0},[e._v("create table")])]),e._v(" "),v("h3",{attrs:{id:"dml"}},[e._v("DML")]),e._v(" "),v("p",[e._v("data manipulation language数据操作语言（增删改查，如SQL中的"),v("code",{pre:!0},[e._v("insert/delete")])]),e._v(" "),v("h3",{attrs:{id:"dcl"}},[e._v("DCL")]),e._v(" "),v("p",[e._v("data control language数据控制语言，控制完整性与安全性，如SQL中的"),v("code",{pre:!0},[e._v("grant")])])])}]};e.exports={attributes:{layout:"collection",title:"Introduction",collection:"DatabaseConcept"},vue:{render:v.render,staticRenderFns:v.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=v.render,this.$options.staticRenderFns=v.staticRenderFns}}}}}}]);