(window.webpackJsonp=window.webpackJsonp||[]).push([[90,881,882],{1016:function(e,t,n){e.exports=n.p+"img/10-1.6103f42.png"},1017:function(e,t,n){e.exports=n.p+"img/10-2.2085278.png"},1391:function(e,t,n){const r={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"frontmatter-markdown"},[r("p",[e._v("文件的信息保存在FCB(File Control Block)中，存档在目录下")]),e._v(" "),r("p",[e._v("文件操作是系统调用")]),e._v(" "),r("h2",{attrs:{id:"access-methods"}},[e._v("Access Methods")]),e._v(" "),r("h3",{attrs:{id:"sequential-access"}},[e._v("Sequential Access")]),e._v(" "),r("p",[e._v("based on the tape model of files")]),e._v(" "),r("p",[e._v("顺序存储，文件操作：")]),e._v(" "),r("ul",[r("li",[e._v("read next")]),e._v(" "),r("li",[e._v("write next")]),e._v(" "),r("li",[e._v("reset")])]),e._v(" "),r("h3",{attrs:{id:"direct-accessrandom-access"}},[e._v("Direct Access(random access)")]),e._v(" "),r("p",[e._v("based on the disk-access model")]),e._v(" "),r("p",[e._v("文件由若干大小固定的logical records or blocks组成")]),e._v(" "),r("p",[e._v("给出一个相对于文件头的index(block number)即可随机访问")]),e._v(" "),r("h3",{attrs:{id:"index-based-access"}},[e._v("Index-based access")]),e._v(" "),r("p",[e._v("保存一个index file")]),e._v(" "),r("p",[r("img",{attrs:{src:n(1016),alt:"10-1"}})]),e._v(" "),r("p",[e._v("如果文件超级大，可能使用多级索引")]),e._v(" "),r("h2",{attrs:{id:"directory-structure"}},[e._v("Directory Structure")]),e._v(" "),r("p",[e._v("One disk can besplit into one or more partitions, aka, minidisk or volumes. See them as virtual disk.")]),e._v(" "),r("p",[e._v("每个盘都会有一个目录区directory保存盘里面的文件信息FCB（包括文件入口指针、文件名等")]),e._v(" "),r("p",[r("img",{attrs:{src:n(1017),alt:"10-2"}})])])}]};e.exports={attributes:{layout:"collection",title:"File-System Interface",collection:"OperatingSystem"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}}}]);