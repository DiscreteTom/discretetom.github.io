(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{1326:function(v,_){const t={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",{staticClass:"frontmatter-markdown"},[t("h2",{attrs:{id:"分治法概念"}},[v._v("分治法概念")]),v._v(" "),t("blockquote",[t("p",[v._v("不是所有递归函数都可以找到非递归的定义")])]),v._v(" "),t("p",[v._v("分治法适用条件：")]),v._v(" "),t("ul",[t("li",[v._v("问题规模缩小到一定程度可以很容易解决")]),v._v(" "),t("li",[v._v("问题可以分解为若干个规模较小的相同问题，即"),t("strong",[v._v("最优子结构")]),v._v("性质")]),v._v(" "),t("li",[v._v("子问题的（简单）合并可以得到原问题的解\n"),t("ul",[t("li",[v._v("如果不满足，考虑贪心或动态规划")])])]),v._v(" "),t("li",[v._v("大问题分解为子问题后各个子问题可以独立（并行、同时）求解，相互无依赖关系，不包含公共子问题\n"),t("ul",[t("li",[v._v("如果存在公共子问题，使用动态规划")])])])]),v._v(" "),t("blockquote",[t("p",[v._v("平衡子问题：如果可以，把问题一分为二总是比其他划分方法更好。")])]),v._v(" "),t("blockquote",[t("p",[v._v("正例：二分搜索、合并排序")])]),v._v(" "),t("blockquote",[t("p",[v._v("反例：汉诺塔问题")])]),v._v(" "),t("h2",{attrs:{id:"算法复杂性分析"}},[v._v("算法复杂性分析")]),v._v(" "),t("p",[v._v("如果把规模为"),t("code",{pre:!0},[v._v("n")]),v._v("的问题分解成"),t("code",{pre:!0},[v._v("k")]),v._v("个规模为"),t("code",{pre:!0},[v._v("n/m")]),v._v("的子问题，合并结果的时间为"),t("code",{pre:!0},[v._v("f(n)")]),v._v("，最小子问题为"),t("code",{pre:!0},[v._v("n0")]),v._v("，则时间复杂度为")]),v._v(" "),t("pre",{staticClass:"language-bash"},[t("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("T"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v("O"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("            "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[v._v("n")]),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v("n0\nT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v("kT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("n/m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("+f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("    n"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v("n0\n")])]),v._v(" "),t("p",[v._v("通过迭代法求得方程的解")]),v._v(" "),t("pre",{staticClass:"language-bash"},[t("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("T"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v("n^"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("logm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("))")]),v._v("+Σ"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("j"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("0")]),v._v(" -"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" logm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("n-1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("))")]),v._v("k^jf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("n/m^j"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\n")])]),v._v(" "),t("h3",{attrs:{id:"m-k的影响"}},[v._v("m & k的影响")]),v._v(" "),t("ul",[t("li",[v._v("如果"),t("code",{pre:!0},[v._v("m < k")]),v._v("，也就是说"),t("code",{pre:!0},[v._v("k * (n / m) > n")]),v._v("，分解后问题规模大于原问题规模\n"),t("ul",[t("li",[v._v("T(n)复杂性较大，如矩阵乘法问题")])])]),v._v(" "),t("li",[v._v("如果"),t("code",{pre:!0},[v._v("m = k")]),v._v("，分解后问题规模等于原问题规模\n"),t("ul",[t("li",[v._v("合并排序")])])]),v._v(" "),t("li",[v._v("如果"),t("code",{pre:!0},[v._v("m > k")]),v._v("，分解后问题规模小于原问题规模（减治）\n"),t("ul",[t("li",[v._v("二分查找")])])])]),v._v(" "),t("h2",{attrs:{id:"二分查找"}},[v._v("二分查找")]),v._v(" "),t("p",[v._v("已知"),t("strong",[v._v("有序")]),v._v("数组"),t("code",{pre:!0},[v._v("a[n]")]),v._v("，从"),t("code",{pre:!0},[v._v("a[l]")]),v._v("到"),t("code",{pre:!0},[v._v("a[r]")]),v._v("中找元素"),t("code",{pre:!0},[v._v("aim")])]),v._v(" "),t("p",[v._v("流程（以升序数组为例）：")]),v._v(" "),t("ul",[t("li",[v._v("比较l和r\n"),t("ul",[t("li",[v._v("如果"),t("code",{pre:!0},[v._v("l==r")]),v._v("且"),t("code",{pre:!0},[v._v("a[l]==aim")]),v._v("那么"),t("code",{pre:!0},[v._v("aim")]),v._v("的下标就是l。如果"),t("code",{pre:!0},[v._v("a[l]!=aim")]),v._v("那么数组中没有"),t("code",{pre:!0},[v._v("aim")])]),v._v(" "),t("li",[v._v("如果"),t("code",{pre:!0},[v._v("l!=r")]),v._v("那么令"),t("code",{pre:!0},[v._v("mid=(l+r)/2")]),v._v("，比较"),t("code",{pre:!0},[v._v("a[mid]")]),v._v("和"),t("code",{pre:!0},[v._v("aim")]),v._v(" "),t("ul",[t("li",[v._v("如果"),t("code",{pre:!0},[v._v("a[mid]>aim")]),v._v("，令"),t("code",{pre:!0},[v._v("r=mid-1")])]),v._v(" "),t("li",[v._v("如果"),t("code",{pre:!0},[v._v("a[mid]<aim")]),v._v("，令"),t("code",{pre:!0},[v._v("l=mid+1")])])])])])])]),v._v(" "),t("p",[v._v("复杂度O(logn)")]),v._v(" "),t("h2",{attrs:{id:"大整数乘法"}},[v._v("大整数乘法")]),v._v(" "),t("p",[v._v("使用加法换乘法的思想")]),v._v(" "),t("p",[v._v("两个"),t("code",{pre:!0},[v._v("n")]),v._v("位二进制大整数分别为"),t("code",{pre:!0},[v._v("x")]),v._v("和"),t("code",{pre:!0},[v._v("y")]),v._v("，把"),t("code",{pre:!0},[v._v("x")]),v._v("和"),t("code",{pre:!0},[v._v("y")]),v._v("分别均分成两部分，即"),t("code",{pre:!0},[v._v("x")]),v._v("的左边"),t("code",{pre:!0},[v._v("n/2")]),v._v("位为"),t("code",{pre:!0},[v._v("a")]),v._v("，右边"),t("code",{pre:!0},[v._v("n/2")]),v._v("为"),t("code",{pre:!0},[v._v("b")]),v._v("，记为"),t("code",{pre:!0},[v._v("x=ab")]),v._v("。同理令"),t("code",{pre:!0},[v._v("y=cd")]),v._v("。则"),t("code",{pre:!0},[v._v("x*y")]),v._v("可以计算为")]),v._v(" "),t("pre",{staticClass:"language-bash"},[t("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("x "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" a * "),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("2")]),v._v("^"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("n/2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v(" + b\ny "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" c * "),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("2")]),v._v("^"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("n/2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v(" + d\nx * y "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" a*c*2^n + "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("b*c+a*d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("*2^"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("n/2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v(" + b*d\n")])]),v._v(" "),t("p",[v._v("上式包含四次"),t("code",{pre:!0},[v._v("n/2")]),v._v("规模的乘法，计算发现"),t("code",{pre:!0},[v._v("T(n)=4T(n/2)+O(n)")]),v._v("，"),t("code",{pre:!0},[v._v("T(n)=O(n^2)")]),v._v("，没有改进")]),v._v(" "),t("p",[v._v("如果要改进，必须减少乘法次数。改进方案如下")]),v._v(" "),t("pre",{staticClass:"language-bash"},[t("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("x * y "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" a*c*2^n + "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("((")]),v._v("a-b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("d-c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v(" + a*c + b*d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("*2^"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("n/2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v(" + b*d\n")])]),v._v(" "),t("p",[v._v("式中"),t("code",{pre:!0},[v._v("a*c")]),v._v("和"),t("code",{pre:!0},[v._v("b*d")]),v._v("均出现了两次，只需要计算一次保存结果就行了。所以一共出现了三次规模"),t("code",{pre:!0},[v._v("n/2")]),v._v("的乘法，所以"),t("code",{pre:!0},[v._v("T(n)=3T(n/2)+O(n)")]),v._v("，复杂度"),t("code",{pre:!0},[v._v("T(n)=O(n^1.59)")])]),v._v(" "),t("h2",{attrs:{id:"合并排序"}},[v._v("合并排序")]),v._v(" "),t("p",[v._v("最小子问题规模为2，只要简单比大小就可以把两个元素排序")]),v._v(" "),t("p",[v._v("思想是每次把问题拆分成两个（相等的）子问题，把两个子序列排序之后合并")]),v._v(" "),t("p",[v._v("复杂度"),t("code",{pre:!0},[v._v("T(n)=2T(n/2)+O(n)")]),v._v("具体计算得到"),t("code",{pre:!0},[v._v("T(n)=O(nlogn)")])]),v._v(" "),t("p",[v._v("需要辅助空间O(n)")]),v._v(" "),t("p",[v._v("特点")]),v._v(" "),t("ul",[t("li",[v._v("分解简单")]),v._v(" "),t("li",[v._v("合并复杂")])]),v._v(" "),t("h2",{attrs:{id:"快速排序"}},[v._v("快速排序")]),v._v(" "),t("p",[v._v("以升序为例")]),v._v(" "),t("p",[v._v("按照基准元素把序列划分为三个子序列"),t("code",{pre:!0},[v._v("a[l:q-1], a[q], a[q+1, r]")]),v._v("，其中"),t("code",{pre:!0},[v._v("a[l:q-1]")]),v._v("中所有元素小于"),t("code",{pre:!0},[v._v("a[q]")]),v._v("，"),t("code",{pre:!0},[v._v("a[q+1:r]")]),v._v("中所有元素大于"),t("code",{pre:!0},[v._v("a[q]")]),v._v("。")]),v._v(" "),t("p",[v._v("策略：指针i从左向右搜索，指针j从右向左搜索，当"),t("code",{pre:!0},[v._v("a[i]>a[q]&&a[j]<a[q]")]),v._v("的时候交换"),t("code",{pre:!0},[v._v("a[i]")]),v._v("与"),t("code",{pre:!0},[v._v("a[j]")]),v._v("。")]),v._v(" "),t("p",[v._v("个人感觉这个策略没有学习数据结构时的那个交替的策略好")]),v._v(" "),t("p",[v._v("改进策略")]),v._v(" "),t("ul",[t("li",[v._v("判断子序列是否已经有序")]),v._v(" "),t("li",[v._v("随机选择基准元素")])]),v._v(" "),t("p",[v._v("时间复杂性")]),v._v(" "),t("ul",[t("li",[v._v("最坏 O(n^2)")]),v._v(" "),t("li",[v._v("平均 O(nlogn)")])]),v._v(" "),t("p",[v._v("辅助空间O(n)或O(logn)")]),v._v(" "),t("h2",{attrs:{id:"线性时间选择"}},[v._v("线性时间选择")]),v._v(" "),t("p",[v._v("从快速排序的思想延伸而来。用于寻找序列中第"),t("code",{pre:!0},[v._v("k")]),v._v("大的元素而不需要把整个序列完全排序。")]),v._v(" "),t("p",[v._v("思路：和快排类似，选择基准元素并把序列分为3份。目标元素在其中一份中，以此做到减治")]),v._v(" "),t("p",[v._v("基准元素的选择：把序列元素以5个一组分组，用任意排序方法（如冒泡）把所有组的5个元素排序，取出所有组的中位数，并求这些中位数的中位数。")]),v._v(" "),t("p",[v._v("优化：当序列长度小于指定值（理论上应取20）时直接简单排序求第k个元素")]),v._v(" "),t("p",[v._v("复杂度"),t("code",{pre:!0},[v._v("T(n)=O(n)")])]),v._v(" "),t("h2",{attrs:{id:"平面最近点对略"}},[v._v("平面最近点对（略）")]),v._v(" "),t("h3",{attrs:{id:"面向一维的算法"}},[v._v("面向一维的算法")]),v._v(" "),t("p",[v._v("寻找坐标中位数m作为分割点把所有点分成两部分")]),v._v(" "),t("h2",{attrs:{id:"矩阵乘法略"}},[v._v("矩阵乘法（略）")]),v._v(" "),t("h2",{attrs:{id:"棋盘覆盖略"}},[v._v("棋盘覆盖（略）")])])}]};v.exports={attributes:{layout:"collection",title:"递归与分治",collection:"AlgorithmDesignAndAnalyze"},vue:{render:t.render,staticRenderFns:t.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=t.render,this.$options.staticRenderFns=t.staticRenderFns}}}}}}]);