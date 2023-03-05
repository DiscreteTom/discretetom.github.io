(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{1178:function(t,n){const e={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"前言"}},[t._v("前言")]),t._v(" "),e("p",[t._v("以下内容以使用 Unity3D 引擎为例。知名 Unity3D ECS 框架：Entitas")]),t._v(" "),e("h2",{attrs:{id:"什么是-ecs"}},[t._v("什么是 ECS")]),t._v(" "),e("ul",[e("li",[t._v("Entity - Component - System")]),t._v(" "),e("li",[t._v("Entity\n"),e("ul",[e("li",[t._v("是 Component 的容器")]),t._v(" "),e("li",[t._v("比如：一个怪物是一个 Entity，它会包含移动、攻击等 Component")])])]),t._v(" "),e("li",[t._v("Component\n"),e("ul",[e("li",[t._v("仅保存数据，不实现逻辑")])])]),t._v(" "),e("li",[t._v("System\n"),e("ul",[e("li",[t._v("仅实现逻辑，不保存状态")])])])]),t._v(" "),e("h2",{attrs:{id:"逻辑"}},[t._v("逻辑")]),t._v(" "),e("ul",[e("li",[t._v("System 通过一个查询器/匹配器，查询世界中的满足条件的实体和组件，然后批量执行逻辑\n"),e("ul",[e("li",[t._v("所以会存在一个【世界/World】的概念，以及可以对实体进行分组")])])])]),t._v(" "),e("h2",{attrs:{id:"优点"}},[t._v("优点")]),t._v(" "),e("ul",[e("li",[t._v("逻辑和数据分离，可以轻松扩展")]),t._v(" "),e("li",[t._v("模块化的 Component，可以轻松组合出新的实体\n"),e("ul",[e("li",[t._v("优先使用组合而不是继承")])])]),t._v(" "),e("li",[t._v("高效率\n"),e("ul",[e("li",[t._v("System 仅获取所需要的 Component/数据 进行处理")]),t._v(" "),e("li",[t._v("框架可以把相同的组件保存在连续内存中，遍历的时候，内存命中率高")]),t._v(" "),e("li",[t._v("适合处理大规模场景的更新")])])]),t._v(" "),e("li",[t._v("不同的组件/系统通常不会互相访问，所以可以很好地并行")])]),t._v(" "),e("h2",{attrs:{id:"参考"}},[t._v("参考")]),t._v(" "),e("p",[t._v("https://www.likecs.com/show-203418600.html")])])}]};t.exports={attributes:{title:"ECS",description:"Entity-Component-System架构"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);