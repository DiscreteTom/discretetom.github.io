(window.webpackJsonp=window.webpackJsonp||[]).push([[67,830,831,832,833],{1005:function(t,e,n){t.exports=n.p+"img/11-1.873df39.png"},1006:function(t,e,n){t.exports=n.p+"img/11-2.d5eae17.png"},1007:function(t,e,n){t.exports=n.p+"img/11-3.3001c65.png"},1008:function(t,e,n){t.exports=n.p+"img/11-4.0b321f2.png"},1335:function(t,e,n){const l={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"frontmatter-markdown"},[l("h2",{attrs:{id:"directory-implementation"}},[t._v("Directory Implementation")]),t._v(" "),l("ul",[l("li",[t._v("list-based")]),t._v(" "),l("li",[t._v("hash-table-based\n"),l("ul",[l("li",[t._v("使用文件名计算hash")])])])]),t._v(" "),l("h2",{attrs:{id:"allocation-methods文件物理结构"}},[t._v("Allocation Methods文件物理结构")]),t._v(" "),l("h3",{attrs:{id:"contiguous-allocation顺序文件"}},[t._v("Contiguous Allocation顺序文件")]),t._v(" "),l("p",[t._v("文件使用连续的存储块，可以随机访问")]),t._v(" "),l("p",[l("img",{attrs:{src:n(1005),alt:"11-1"}})]),t._v(" "),l("ul",[l("li",[t._v("浪费空间，产生外部碎片")]),t._v(" "),l("li",[t._v("文件难以动态改变大小")])]),t._v(" "),l("p",[t._v("改进：extent-based contiguous allocation")]),t._v(" "),l("p",[l("img",{attrs:{src:n(1006),alt:"11-2"}})]),t._v(" "),l("h3",{attrs:{id:"linked-allocation连接文件"}},[t._v("linked allocation连接文件")]),t._v(" "),l("p",[l("img",{attrs:{src:n(1007),alt:"11-3"}})]),t._v(" "),l("ul",[l("li",[t._v("不浪费空间，可能会有内部碎片(block内)")]),t._v(" "),l("li",[t._v("无法随机访问")]),t._v(" "),l("li",[t._v("因为block很多，指针长度很长")])]),t._v(" "),l("h3",{attrs:{id:"indexed-allocation索引文件"}},[t._v("indexed allocation索引文件")]),t._v(" "),l("p",[t._v("使用一些文件块作为"),l("strong",[t._v("索引块")]),t._v("index block or index table")]),t._v(" "),l("p",[l("img",{attrs:{src:n(1008),alt:"11-4"}})]),t._v(" "),l("ul",[l("li",[t._v("随机访问")]),t._v(" "),l("li",[t._v("无外部碎片")])]),t._v(" "),l("p",[t._v("改进：")]),t._v(" "),l("ul",[l("li",[t._v("文件很大时使用多级索引")]),t._v(" "),l("li",[t._v("结合其他策略")])])])}]};t.exports={attributes:{layout:"collection",title:"File System Implementation",collection:"OperatingSystem"},vue:{render:l.render,staticRenderFns:l.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=l.render,this.$options.staticRenderFns=l.staticRenderFns}}}}}}]);