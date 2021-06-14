(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{1190:function(t,_){const e={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"概述"}},[t._v("概述")]),t._v(" "),e("p",[t._v("真实感图形：添加光照、明暗、光线追踪、纹理等的图形")]),t._v(" "),e("p",[t._v("真实感图形生成步骤：")]),t._v(" "),e("ol",[e("li",[t._v("三维场景建模")]),t._v(" "),e("li",[t._v("三维图形转换为二维透视图")]),t._v(" "),e("li",[t._v("确定消隐")]),t._v(" "),e("li",[t._v("计算颜色（本章重点")])]),t._v(" "),e("h2",{attrs:{id:"光照模型概述"}},[t._v("光照模型概述")]),t._v(" "),e("p",[t._v("光强(intensity of light)通常使用RGB表示")]),t._v(" "),e("p",[t._v("光照模型，即光强的计算公式")]),t._v(" "),e("p",[t._v("光照射到物体上分解为：")]),t._v(" "),e("ul",[e("li",[t._v("反射光")]),t._v(" "),e("li",[t._v("透射光")]),t._v(" "),e("li",[t._v("被物体吸收转换成的热")])]),t._v(" "),e("p",[t._v("其中反射光和透射光的强弱决定了物体表面的明暗程度")]),t._v(" "),e("p",[t._v("不同的光源和不同的表面材料会影响反射光和透射光的成分")]),t._v(" "),e("h2",{attrs:{id:"简单光照模型"}},[t._v("简单光照模型")]),t._v(" "),e("h3",{attrs:{id:"基本原理"}},[t._v("基本原理")]),t._v(" "),e("p",[t._v("不考虑透射光，仅反射光")]),t._v(" "),e("p",[t._v("反射光的三个分量：")]),t._v(" "),e("ul",[e("li",[t._v("环境反射\\(I_{pa}\\)，取常数")]),t._v(" "),e("li",[t._v("漫反射，使用朗伯定律计算")]),t._v(" "),e("li",[t._v("镜面反射")])]),t._v(" "),e("p",[e("strong",[t._v("朗伯定律")]),t._v("：对于一个漫反射体，表面反射光强度和光源入射角的余弦成正比，即\\(I = I_{pd} \\cos i\\)，其中\\(I\\)为表面反射光的亮度，\\(I_{pd}\\)为光源垂直入射时的光亮度，\\(i\\)为入射角")]),t._v(" "),e("p",[e("strong",[t._v("镜面反射")]),t._v("：\\(I = I_{ps}\\cos^n\\theta\\)，其中\\(I_{ps}\\)为镜面反射方向上光亮度，\\(\\theta\\)为夹角，\\(n\\)为汇聚指数")]),t._v(" "),e("h3",{attrs:{id:"phong模型"}},[t._v("Phong模型")]),t._v(" "),e("p",[t._v("\\[\nI = k_aI_{pa}+\\sum[k_dI_{pd}\\cos i+k_sI_{ps}\\cos^n\\theta]\n\\]")]),t._v(" "),e("p",[t._v("其中\\(k_a\\)、\\(k_d\\)、\\(k_s\\)分别为环境反射、漫反射、镜面反射分量系数，材质系数为\\(k_d\\)、\\(k_s\\)（二者之和为1）。\\(\\sum\\)表示对所有光源求和")]),t._v(" "),e("p",[t._v("在计算机中通常使用RGB三个分量计算，即上述公式中的I都是一个三维列向量")]),t._v(" "),e("h3",{attrs:{id:"算法实现"}},[t._v("算法实现")])])}]};t.exports={attributes:{layout:"collection",title:"真实感图形技术",collection:"ComputerGraphics"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);