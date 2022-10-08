(window.webpackJsonp=window.webpackJsonp||[]).push([[55,586,587,588,589,590],{1348:function(e,t,v){const _={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"frontmatter-markdown"},[_("h2",{attrs:{id:"基本概念"}},[e._v("基本概念")]),e._v(" "),_("p",[e._v("索引用来加速查询")]),e._v(" "),_("p",[e._v("搜索码search key - 用来寻找记录的一些属性")]),e._v(" "),_("p",[e._v("索引文件index file由索引记录index records(index entries)构成，后者包含两个域：")]),e._v(" "),_("ul",[_("li",[e._v("索引值，即search key value")]),e._v(" "),_("li",[e._v("记录入口，即record entry或pointer")])]),e._v(" "),_("p",[e._v("索引文件通常小于源文件")]),e._v(" "),_("p",[e._v("索引类型：")]),e._v(" "),_("ul",[_("li",[e._v("有序索引 - 顺序存储搜索码")]),e._v(" "),_("li",[e._v("哈希索引 - 使用哈希函数把目标存储在桶buckets中")])]),e._v(" "),_("p",[e._v("索引评估指标：")]),e._v(" "),_("ul",[_("li",[e._v("访问类型access type（属性为某个值或者属性为某个范围")]),e._v(" "),_("li",[e._v("访问时间access time")]),e._v(" "),_("li",[e._v("插入时间insertion time")]),e._v(" "),_("li",[e._v("删除时间deletion time")]),e._v(" "),_("li",[e._v("空间开销space overhead")])]),e._v(" "),_("p",[e._v("索引通常加速查询，可能减速修改。增加额外空间开销")]),e._v(" "),_("h2",{attrs:{id:"顺序索引"}},[e._v("顺序索引")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("主索引primary index - 索引顺序和数据顺序一致，也叫聚集索引clustering index。通常主索引选用主键")])]),e._v(" "),_("li",[_("p",[e._v("辅助索引secondary index - 也叫非聚集索引non-clustering index。搜索码顺序与文件顺序不同")])]),e._v(" "),_("li",[_("p",[e._v("稠密索引dense indices - 索引中包含了所有search key的值")])]),e._v(" "),_("li",[_("p",[e._v("稀疏索引sparse indices - 索引中不包含所有search key的值")])])]),e._v(" "),_("p",[e._v("如下图。如果以ID作为search key，稠密索引必须包含表中search key出现的每一个值")]),e._v(" "),_("p",[_("img",{attrs:{src:v(719),alt:""}})]),e._v(" "),_("p",[e._v("如果选部门作为稠密索引，结果如下：")]),e._v(" "),_("p",[_("img",{attrs:{src:v(720),alt:""}})]),e._v(" "),_("p",[e._v("稀疏索引占空间少，更易于维护，查询更慢")]),e._v(" "),_("p",[e._v("多级索引 - 适用于大量数据。外层索引outer index使用稀疏索引，内层索引inner index使用稠密主索引")]),e._v(" "),_("h2",{attrs:{id:"删除表项时更新索引"}},[e._v("删除表项时更新索引")]),e._v(" "),_("p",[e._v("如果被删除的记录是唯一拥有其索引值的记录，则删除此索引值")]),e._v(" "),_("p",[e._v("否则")]),e._v(" "),_("ul",[_("li",[e._v("单级索引\n"),_("ul",[_("li",[e._v("稠密索引\n"),_("ul",[_("li",[e._v("如果索引项保存的是所有相同码值的指针，则删除目标记录的指针")]),e._v(" "),_("li",[e._v("如果索引项保存的是所有相同码值的记录的首指针，则修改首指针指向下一条记录")])])]),e._v(" "),_("li",[e._v("稀疏索引\n"),_("ul",[_("li",[e._v("如果目标记录是唯一具有此搜索码值的记录，则系统用下一个搜索码值的索引记录替换相应的索引记录。如果下一个搜索码值已经有索引项，则删除而不是替换当前索引项。")]),e._v(" "),_("li",[e._v("否则修改索引项使指针指向下一个相同搜索码值的记录")])])])])]),e._v(" "),_("li",[e._v("多级索引略")])]),e._v(" "),_("h2",{attrs:{id:"插入表项时更新索引略"}},[e._v("插入表项时更新索引（略")]),e._v(" "),_("h2",{attrs:{id:"辅助索引"}},[e._v("辅助索引")]),e._v(" "),_("p",[e._v("辅助索引必须稠密，对每个搜索码值都有一个索引项，且对每个记录都有一个指针")]),e._v(" "),_("p",[_("img",{attrs:{src:v(721),alt:""}})]),e._v(" "),_("h2",{attrs:{id:"b树索引略"}},[e._v("B+树索引（略")]),e._v(" "),_("h2",{attrs:{id:"哈希索引"}},[e._v("哈希索引")]),e._v(" "),_("h3",{attrs:{id:"概念"}},[e._v("概念")]),e._v(" "),_("p",[e._v("桶bucket用来保存记录。通常一个桶的大小为一个磁盘块")]),e._v(" "),_("p",[e._v("K为所有可能的码值，B为所有桶。哈希函数把K映射到B")]),e._v(" "),_("p",[e._v("理想的哈希函数：")]),e._v(" "),_("ul",[_("li",[e._v("均匀的uniform - 对于所有K，每个B被分配的码值应该是均匀的")]),e._v(" "),_("li",[e._v("随机的random - 对于实际K的分布，每个B被分配的记录数量是均匀的")])]),e._v(" "),_("h3",{attrs:{id:"处理桶溢出"}},[e._v("处理桶溢出")]),e._v(" "),_("p",[e._v("造成桶溢出：")]),e._v(" "),_("ul",[_("li",[e._v("桶数量不足")]),e._v(" "),_("li",[e._v("记录分配不均")])]),e._v(" "),_("p",[e._v("设置溢出桶overflow bucket")]),e._v(" "),_("p",[_("img",{attrs:{src:v(722),alt:""}})]),e._v(" "),_("h3",{attrs:{id:"哈希索引-1"}},[e._v("哈希索引")]),e._v(" "),_("p",[e._v("通常是辅助索引。如果文件自身就是哈希组织文件，那可以不用哈希索引")]),e._v(" "),_("p",[_("img",{attrs:{src:v(723),alt:""}})]),e._v(" "),_("h3",{attrs:{id:"静态哈希索引缺陷"}},[e._v("静态哈希索引缺陷")]),e._v(" "),_("ul",[_("li",[e._v("数据增长导致桶溢出")]),e._v(" "),_("li",[e._v("初期申请大量空间导致浪费")]),e._v(" "),_("li",[e._v("后期删除数据导致空间浪费")]),e._v(" "),_("li",[e._v("可以周期性重新组织索引，但是麻烦")])]),e._v(" "),_("h2",{attrs:{id:"sql中的索引"}},[e._v("SQL中的索引")]),e._v(" "),_("pre",{staticClass:"language-sql"},[_("code",{pre:!0,attrs:{class:"language-sql"}},[_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("create")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("unique")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("index")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("index")]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("name"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("on")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("relation_name"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("attribute"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("list"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),_("p",[e._v("如果搜索键是候选键，就使用"),_("code",{pre:!0},[e._v("create unique index")])]),e._v(" "),_("h2",{attrs:{id:"multiple-key-access"}},[e._v("Multiple-Key Access")]),e._v(" "),_("p",[e._v("假设select语句的where子句中有两个条件A和B，查询策略：")]),e._v(" "),_("ol",[_("li",[e._v("根据条件A得到一个表，在里面找B")]),e._v(" "),_("li",[e._v("根据条件B得到一个表，在里面找A")]),e._v(" "),_("li",[e._v("根据A和B分别得到一个表，求交集")])]),e._v(" "),_("p",[e._v("可以使用多属性索引加速，比如设置索引"),_("code",{pre:!0},[e._v("(A, B)")])]),e._v(" "),_("p",[e._v("多属性索引可以加速处理:")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("A = a and B < b")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("A = a")])])]),e._v(" "),_("p",[e._v("但是不能加速:")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("A < a and B = b")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("B = b")])])])])}]};e.exports={attributes:{layout:"collection",title:"Indexing and Hashing",collection:"DatabaseConcept"},vue:{render:_.render,staticRenderFns:_.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=_.render,this.$options.staticRenderFns=_.staticRenderFns}}}}},719:function(e,t,v){e.exports=v.p+"img/11-1.637273e.png"},720:function(e,t,v){e.exports=v.p+"img/11-2.3a28530.png"},721:function(e,t,v){e.exports=v.p+"img/11-3.2f2c075.png"},722:function(e,t,v){e.exports=v.p+"img/11-4.35cfc96.png"},723:function(e,t,v){e.exports=v.p+"img/11-5.079602c.png"}}]);