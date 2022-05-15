(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{1283:function(v,_){const e={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"动态规划思想"}},[v._v("动态规划思想")]),v._v(" "),e("p",[v._v("基本要素")]),v._v(" "),e("ul",[e("li",[v._v("最优子结构")]),v._v(" "),e("li",[v._v("重叠子问题!!!")])]),v._v(" "),e("p",[v._v("使用自底向上构建的方式避免计算重叠子问题")]),v._v(" "),e("h2",{attrs:{id:"矩阵连乘"}},[v._v("矩阵连乘")]),v._v(" "),e("p",[v._v("利用动态规划寻找最小乘法次数")]),v._v(" "),e("p",[v._v("举例：现有A、B、C、D四个矩阵，他们的维度分别是")]),v._v(" "),e("ul",[e("li",[v._v("A=50*10")]),v._v(" "),e("li",[v._v("B=10*40")]),v._v(" "),e("li",[v._v("C=40*30")]),v._v(" "),e("li",[v._v("D=30*5")])]),v._v(" "),e("p",[v._v("为了计算ABCD，我们可以给矩阵加括号，一共有5种加括号的方式，这些加括号方式和计算代价分别为")]),v._v(" "),e("ul",[e("li",[v._v("(A((BC)D)) - 16000")]),v._v(" "),e("li",[v._v("(A(B(CD))) - 10500")]),v._v(" "),e("li",[v._v("((AB)(CD)) - 36000")]),v._v(" "),e("li",[v._v("(((AB)C)D) - 87500")]),v._v(" "),e("li",[v._v("((A(BC))D) - 34500")])]),v._v(" "),e("p",[v._v("所以我们的目标是根据矩阵维度求得使计算代价最小的加括号方式")]),v._v(" "),e("p",[v._v("显然此问题拥有最优子结构性质")]),v._v(" "),e("p",[v._v("自下而上构建，最小子问题是两个（相邻）矩阵相乘。子问题的划分方式是在相邻的N个矩阵中添加一个分隔符，拆分成两组矩阵。一共有N-1中分隔方式，选择最小者作为规模为N个矩阵的值")]),v._v(" "),e("p",[v._v("算法内含三重循环，时间上界为"),e("code",{pre:!0},[v._v("O(n^3)")]),v._v("，空间占用"),e("code",{pre:!0},[v._v("O(n^2)")])]),v._v(" "),e("h2",{attrs:{id:"最长公共子序列"}},[v._v("最长公共子序列")]),v._v(" "),e("p",[v._v("已知两个序列"),e("code",{pre:!0},[v._v("X(m)")]),v._v("和"),e("code",{pre:!0},[v._v("Y(n)")])]),v._v(" "),e("p",[v._v("思想：令"),e("code",{pre:!0},[v._v("a(i,j)")]),v._v("为"),e("code",{pre:!0},[v._v("X(0:i)")]),v._v("和"),e("code",{pre:!0},[v._v("Y(0:j)")]),v._v("的最长子序列长度，那么如果"),e("code",{pre:!0},[v._v("X(i+1)==Y(j+1)")]),v._v("，则"),e("code",{pre:!0},[v._v("a(i+1,j+1)=a(i,j)+1")]),v._v("。如果"),e("code",{pre:!0},[v._v("X(i+1)!=Y(j+1)")]),v._v("，那么"),e("code",{pre:!0},[v._v("a(i+1,j+1)=max{a(i,j+1), a(i+1,j)}")])]),v._v(" "),e("p",[v._v("时间复杂度"),e("code",{pre:!0},[v._v("O(m+n)")])]),v._v(" "),e("h2",{attrs:{id:"最大子段和"}},[v._v("最大子段和")]),v._v(" "),e("p",[v._v("已知数列"),e("code",{pre:!0},[v._v("a(m)")]),v._v("。")]),v._v(" "),e("p",[v._v("思想：令"),e("code",{pre:!0},[v._v("b(j)")]),v._v("为以"),e("code",{pre:!0},[v._v("a(j)")]),v._v("为最右侧元素的最大子段和。递归方程"),e("code",{pre:!0},[v._v("b(j)=max{b(j-1)+a(j), a(j)}")]),v._v("，也就是说如果以"),e("code",{pre:!0},[v._v("a(j-1)")]),v._v("结尾子段的最大子段和是负数，那么"),e("code",{pre:!0},[v._v("a(j)")]),v._v("自身就是以"),e("code",{pre:!0},[v._v("a(j)")]),v._v("结尾的字段的最大子段和")]),v._v(" "),e("p",[v._v("时间、空间复杂度"),e("code",{pre:!0},[v._v("O(n)")])]),v._v(" "),e("h2",{attrs:{id:"凸多边形最优三角剖分"}},[v._v("凸多边形最优三角剖分")]),v._v(" "),e("p",[v._v("已知顶点集合"),e("code",{pre:!0},[v._v("{v0, v1, ..., vn}")]),v._v("，"),e("code",{pre:!0},[v._v("w(i, j, k)")]),v._v("为以vi、vj、vk为顶点的三角形的权值。令"),e("code",{pre:!0},[v._v("a(i, j)")]),v._v("为从vi到vj构成的多边形的最优三角剖分值。那么对于大问题"),e("code",{pre:!0},[v._v("a(0, n)")]),v._v("，应该从v1到v(n-1)中选择一个点p使"),e("code",{pre:!0},[v._v("a(0, p)+a(p, n)+w(0, p, n)")]),v._v("的值最小。")]),v._v(" "),e("p",[v._v("自下而上，用三角形的权值生成多边形的权值")]),v._v(" "),e("p",[v._v("内含三重循环，时间复杂度"),e("code",{pre:!0},[v._v("O(n^3)")]),v._v("，空间复杂度"),e("code",{pre:!0},[v._v("O(n^2)")])]),v._v(" "),e("h2",{attrs:{id:"0-1背包问题"}},[v._v("0-1背包问题")]),v._v(" "),e("p",[v._v("已知"),e("code",{pre:!0},[v._v("n+1")]),v._v("个物品，重量"),e("code",{pre:!0},[v._v("w0-wn")]),v._v("，价值"),e("code",{pre:!0},[v._v("v0-vn")]),v._v("，已知背包容量"),e("code",{pre:!0},[v._v("M")])]),v._v(" "),e("p",[v._v("令"),e("code",{pre:!0},[v._v("a(i,j)")]),v._v("为背包容量为"),e("code",{pre:!0},[v._v("j")]),v._v("，可选择物品范围为"),e("code",{pre:!0},[v._v("0-i")]),v._v("的背包内物品价值最大值")]),v._v(" "),e("p",[v._v("递归关系："),e("code",{pre:!0},[v._v("a(i,j)=max{a(i-1,j), a(i, j-wi)+vi}")]),v._v("，也就是说从“放入第i个物品”和“不放入第i个物品”中选择最优解")]),v._v(" "),e("p",[v._v("时间复杂度"),e("code",{pre:!0},[v._v("O(nM)")])])])}]};v.exports={attributes:{layout:"collection",title:"动态规划",collection:"AlgorithmDesignAndAnalyze"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);