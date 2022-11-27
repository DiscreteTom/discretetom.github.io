(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{1210:function(t,e){const n={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"概述"}},[t._v("概述")]),t._v(" "),n("p",[t._v("本文是观看"),n("a",{attrs:{href:"https://www.bilibili.com/video/BV1ut4y1U7Tz"}},[t._v("此视频")]),t._v("时的笔记")]),t._v(" "),n("h2",{attrs:{id:"cicd"}},[t._v("CI/CD")]),t._v(" "),n("ul",[n("li",[t._v("CI（持续集成：Continuous Integration）\n"),n("ul",[n("li",[t._v("提交代码到版本控制系统")]),t._v(" "),n("li",[t._v("自动构建")]),t._v(" "),n("li",[t._v("自动单元测试、集成测试")]),t._v(" "),n("li",[t._v("把构建结果上传到交付件仓库")])])]),t._v(" "),n("li",[t._v("CD（持续部署：Continuous Deployment，或持续交付：Continuous Delivery。严格来说持续部署比持续交付多了部署的步骤，通常 CD 包含部署的环节）\n"),n("ul",[n("li",[t._v("发布到测试环境")]),t._v(" "),n("li",[t._v("发布到预生产环境")]),t._v(" "),n("li",[t._v("发布到生产环境")])])])]),t._v(" "),n("h2",{attrs:{id:"gitops"}},[t._v("GitOps")]),t._v(" "),n("ul",[n("li",[t._v("使用 Git 触发 CI/CD 两个流程\n"),n("ul",[n("li",[t._v("比如使用两个代码仓库，一个保存业务逻辑代码，一个保存基础设施定义（比如 k8s 资源清单。用来定义 desired state）")]),t._v(" "),n("li",[t._v("也可以由 CI 直接触发 CD。这些都是灵活的")]),t._v(" "),n("li",[t._v("使用单个仓库，称为单体仓库(monorepo)方案。多个仓库称为多体仓库(multirepo)方案")])])]),t._v(" "),n("li",[t._v("优势\n"),n("ul",[n("li",[t._v("代码就是 single source of truth，不论是业务逻辑还是基础设施")]),t._v(" "),n("li",[t._v("可以对基础设施进行版本控制，方便回滚")])])]),t._v(" "),n("li",[t._v("发布状态同步器\n"),n("ul",[n("li",[t._v("GitOps 中通常存在一个"),n("em",[t._v("发布状态同步器")]),t._v("，周期性确认当前 state 和 desired state 是否一致，并作出修改")]),t._v(" "),n("li",[t._v("比如：ArgoCD，面向 k8s 的开源 CD 平台\n"),n("ul",[n("li",[t._v("运行在 k8s 中")]),t._v(" "),n("li",[t._v("有 GUI 界面")])])])])])])])}]};t.exports={attributes:{title:"Linux Virtualization(Part 6)",description:"GitOps, CI/CD",tags:["Container"]},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);