(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{1202:function(e,t){const r={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"概述"}},[e._v("概述")]),e._v(" "),r("p",[e._v("本文是观看"),r("a",{attrs:{href:"https://www.bilibili.com/video/BV1n4411v7Rz"}},[e._v("此视频")]),e._v("时的笔记")]),e._v(" "),r("h2",{attrs:{id:"虚拟化分类"}},[e._v("虚拟化分类")]),e._v(" "),r("ul",[r("li",[e._v("按照虚拟化技术分类\n"),r("ul",[r("li",[e._v("全虚拟化/硬件辅助虚拟化(Full Virtualization)\n"),r("ul",[r("li",[e._v("层级：Hardware -> Hypervisor(VMM) -> Guest OS -> App")]),e._v(" "),r("li",[e._v("KVM - Hypervisor直接运行在物理硬件之上")]),e._v(" "),r("li",[e._v("QEMU/WINE - Hypervisor运行在另一个操作系统中")])])]),e._v(" "),r("li",[e._v("半虚拟化/准虚拟化\n"),r("ul",[r("li",[e._v("层级：Hardware -> Hypervisor(VMM) -> Optimized Instruction -> Modified Guest OS -> App")]),e._v(" "),r("li",[e._v("在全虚拟化的基础上，添加了一个优化Guest OS指令的API。Guest OS发出指令时先被此API优化，然后再发往VMM。VMM不负责翻译指令，只负责执行，从而提升性能")]),e._v(" "),r("li",[e._v("用的比较少，毕竟需要修改Guest OS内核")])])])])]),e._v(" "),r("li",[e._v("按照架构分类\n"),r("ul",[r("li",[e._v("寄居架构\n"),r("ul",[r("li",[e._v("hypervisor安装在操作系统之上")]),e._v(" "),r("li",[e._v("优点：简单")]),e._v(" "),r("li",[e._v("缺点：宿主机也会消耗资源。宿主机挂了虚拟机也会挂")]),e._v(" "),r("li",[e._v("例：GSX Server, VMware workstation")])])]),e._v(" "),r("li",[e._v("裸金属架构(bare metal)\n"),r("ul",[r("li",[e._v("hypervisor直接安装在硬件上（可以把VMM直接当作操作系统+虚拟化软件，只不过资源占用更少，使用一个控制台管理）")]),e._v(" "),r("li",[e._v("优点：不依赖宿主操作系统，灵活")]),e._v(" "),r("li",[e._v("缺点：虚拟层内核开发难度大")]),e._v(" "),r("li",[e._v("例：VMware ESXi")])])])])])])])}]};e.exports={attributes:{title:"Linux Virtualization(Part 1)",description:"虚拟化分类"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}}}]);