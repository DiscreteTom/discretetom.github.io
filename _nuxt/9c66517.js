(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{1314:function(_,t){const e={render:function(){var _=this;_.$createElement;return _._self._c,_._m(0)},staticRenderFns:[function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"概述"}},[_._v("概述")]),_._v(" "),e("p",[_._v("通常分为：")]),_._v(" "),e("ul",[e("li",[_._v("基于代价的优化")]),_._v(" "),e("li",[_._v("启发式优化")])]),_._v(" "),e("p",[_._v("代价不好计算，所以通常使用启发式优化。有些系统两个结合使用")]),_._v(" "),e("h2",{attrs:{id:"启发式优化"}},[_._v("启发式优化")]),_._v(" "),e("p",[_._v("通过修改查询树来优化")]),_._v(" "),e("h3",{attrs:{id:"基本原则"}},[_._v("基本原则")]),_._v(" "),e("ol",[e("li",[_._v("尽早执行选择（减少记录数量")]),_._v(" "),e("li",[_._v("尽早执行投影（减少属性数量")]),_._v(" "),e("li",[_._v("尽早执行限制性最强的选择和连接")]),_._v(" "),e("li",[_._v("相同关系的多个选择和投影可以同时执行，减少扫描")]),_._v(" "),e("li",[_._v("投影和相邻的操作结合，减少为投影而单独IO")]),_._v(" "),e("li",[_._v("存储公共的常用结果")])]),_._v(" "),e("h3",{attrs:{id:"等价规则"}},[_._v("等价规则")]),_._v(" "),e("ol",[e("li",[_._v("选择串接律：\\(\\sigma_{C_1 and C_2 and \\cdots and C_n}(E)=\\sigma_{C_1}(\\sigma_{C_2}\\cdots\\sigma_{C_n}(E)\\cdots)\\)")]),_._v(" "),e("li",[_._v("选择交换律：\\(\\sigma_{\\theta_1}(\\sigma_{\\theta_2}(E))=\\sigma_{\\theta_2}(\\sigma_{\\theta_1}(E))\\)")]),_._v(" "),e("li",[_._v("投影串接律：\\(\\pi_{L_1}(\\pi_{L_2}\\cdots(\\pi_{L_n}(E))\\cdots) = \\pi_{L_1}(E)\\)其中L1为最小的投影属性集合")]),_._v(" "),e("li",[_._v("笛卡尔乘积后在theta条件上的选择为原关系的theta连接：\\(\\sigma_\\theta(E_1\\times E_2) = E_1 \\Join_\\theta E_2\\)")]),_._v(" "),e("li",[_._v("theta连接满足交换律：\\(E_1\\Join_\\theta E_2 = E_2\\Join_\\theta E_1\\)")]),_._v(" "),e("li",[_._v("自然连接结合律：\\((E_1 \\Join E_2) \\Join E_3 = E_1 \\Join (E_2 \\Join E_3)\\)")]),_._v(" "),e("li",[_._v("theta连接的结合律：\\((E_1 \\Join_{\\theta_1} E_2) \\Join_{\\theta_2 \\land \\theta_3}E_3 = E_1 \\Join_{\\theta_1 \\land \\theta_3}(E_2 \\Join_{\\theta_2} E_3)\\)")]),_._v(" "),e("li",[_._v("选择投影交换律：\\(\\pi_L(\\sigma_\\theta(E)) = \\sigma_\\theta(\\pi_L(E))\\)")]),_._v(" "),e("li",[_._v("…")])]),_._v(" "),e("h2",{attrs:{id:"算法"}},[_._v("算法")]),_._v(" "),e("ol",[e("li",[_._v("利用选择串接律，分解选择操作为独立选择")]),_._v(" "),e("li",[_._v("对于每个选择，利用选择交换律、选择投影交换律、选择连接分配率、选择笛卡尔乘积分配率、选择集合分配率，使其尽可能靠近叶节点")]),_._v(" "),e("li",[_._v("对于每个投影，利用投影串接律，投影选择交换律，投影连接分配率，投影笛卡尔乘积分配率，投影集合分配率，使其尽可能靠近叶节点或删除某些投影")]),_._v(" "),e("li",[_._v("利用选择、投影串接律，选择投影交换律，将串接的多个选择和投影组合成一个")]),_._v(" "),e("li",[_._v("利用笛卡尔乘积、连接、结合操作的结合律，按照小关系限制性的原则安排操作顺序")]),_._v(" "),e("li",[_._v("组合笛卡尔乘积和选择操作为连接操作")]),_._v(" "),e("li",[_._v("对每个叶节点添加投影操作，消除无用属性的查询")]),_._v(" "),e("li",[_._v("分组，每个二元运算语气直接祖先的一元运算为一组。如果其子孙节点已知到叶节点都是选择或投影，则也并入该组。使每组的操作可以由单个存取程序完成")])])])}]};_.exports={attributes:{layout:"collection",title:"Query Optimization",collection:"DatabaseConcept"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(_){return this.templateRender?this.templateRender():_("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);