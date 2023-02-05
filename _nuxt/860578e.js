(window.webpackJsonp=window.webpackJsonp||[]).push([[94,1051,1053],{1148:function(v,_,t){v.exports=t.p+"img/9-1.1e67e56.png"},1149:function(v,_,t){v.exports=t.p+"img/9-3.6c47e25.png"},1458:function(v,_,t){const n={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,n=v._self._c||_;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),n("p",[v._v("差错控制编码（也称纠错编码）属于信道编码范畴，基本原理："),n("strong",[v._v("在信息码元序列中按照一定的关系加入冗余码元")]),v._v("（"),n("strong",[v._v("监督码元")]),v._v("），使译码器利用这种关系发现或纠正可能存在的错码")]),v._v(" "),n("h2",{attrs:{id:"差错控制方式"}},[v._v("差错控制方式")]),v._v(" "),n("ul",[n("li",[v._v("检错重发ARQ - 编码发出能够"),n("strong",[v._v("检错")]),v._v("的码，重发到接收正确为止")]),v._v(" "),n("li",[v._v("前向纠错FEC - 编码发出能够"),n("strong",[v._v("纠错")]),v._v("的码，接收端自动纠正错误")]),v._v(" "),n("li",[v._v("建错删除 - 类似于ARQ，但是直接删除不要求重发")]),v._v(" "),n("li",[v._v("反馈校验 - 把接受到的信息原封不动地发送回发送端比较。如果不相同就重发")])]),v._v(" "),n("p",[v._v("实际应用中上面的几种方案可能结合使用")]),v._v(" "),n("h2",{attrs:{id:"编码类型"}},[v._v("编码类型")]),v._v(" "),n("ul",[n("li",[v._v("线性码 - 监督码元和信息码元的关系是一组线性方程决定的\n"),n("ul",[n("li",[v._v("分组码 - k个信息码元在一起，r个监督码元在一起，总长度为n，可以表示为(n, k)\n"),n("ul",[n("li",[n("img",{attrs:{src:t(1148),alt:"9-1"}})])])]),v._v(" "),n("li",[v._v("非分组码")])])]),v._v(" "),n("li",[v._v("卷积码 - 监督码元不仅和当前一段信息码元有关，还和前面若干个信息段的码元相关。其实是非分组码的一种（因为卷积是线性运算")]),v._v(" "),n("li",[v._v("系统码 - 监督码元附加在信息码元后面（上图也是系统码")])]),v._v(" "),n("h2",{attrs:{id:"码的属性"}},[v._v("码的属性")]),v._v(" "),n("ul",[n("li",[v._v("码长 - 码组（码字）中码元的个数，如"),n("code",{pre:!0},[v._v("101010")]),v._v("的码长为6")]),v._v(" "),n("li",[v._v("码重 - 码组中非0码元的个数")]),v._v(" "),n("li",[v._v("码距（汉明距离） - 两个等长码组对应位置上的码元不同的位数")]),v._v(" "),n("li",[v._v("最小码距 - 某种编码中各个码组之间距离的最小值，记为d0。"),n("strong",[v._v("如果是线性码，d0为非零码组的最小码重")])])]),v._v(" "),n("h2",{attrs:{id:"最小码距与纠错能力"}},[v._v("最小码距与纠错能力")]),v._v(" "),n("p",[v._v("d0决定了一种编码的检错或纠错能力。对于(n, k)分组码：")]),v._v(" "),n("ul",[n("li",[v._v("检测e个错码，要求d0 >= e + 1")]),v._v(" "),n("li",[v._v("纠正t个错码，要求d0 >= 2t + 1")]),v._v(" "),n("li",[v._v("纠t个同时可检e个错码，要求d0 >= e + t + 1且e > t")])]),v._v(" "),n("h2",{attrs:{id:"编码效率与编码增益"}},[v._v("编码效率与编码增益")]),v._v(" "),n("ul",[n("li",[v._v("编码效率（码率） - 信息码元数k与总码元数n的比值")]),v._v(" "),n("li",[v._v("编码增益 - 在保持误码率恒定的条件下，采用纠错编码所节省的信噪比称为编码增益")])]),v._v(" "),n("h2",{attrs:{id:"线性分组码"}},[v._v("线性分组码")]),v._v(" "),n("h3",{attrs:{id:"汉明码"}},[v._v("汉明码")]),v._v(" "),n("p",[v._v("一个(n, k)线性分组码，希望用r=n-k个监督码元指出以为错码的位置，要求"),n("code",{pre:!0},[v._v("2^r - 1 >= n")])]),v._v(" "),n("p",[v._v("以n=7为例，需要3位监督码监督4位信息码")]),v._v(" "),n("p",[n("strong",[v._v("汉明码")])]),v._v(" "),n("p",[v._v("假设这7位码分别为a0-a7，其中a0-a2为监督码，设计校验子的错误图样：")]),v._v(" "),n("p",[n("img",{attrs:{src:t(1149),alt:"9-3"}})]),v._v(" "),n("p",[v._v("监督关系式（监督矩阵）：（以下加法均为二进制加法")]),v._v(" "),n("ul",[n("li",[v._v("S1 = a6 + a5 + a4 + a2 = 0")]),v._v(" "),n("li",[v._v("S2 = a6 + a5 + a3 + a1 = 0")]),v._v(" "),n("li",[v._v("S3 = a6 + a4 + a3 + a0 = 0")])]),v._v(" "),n("p",[n("strong",[v._v("监督码")]),v._v("编码规则：")]),v._v(" "),n("ul",[n("li",[v._v("a2 = a6 + a5 + a4")]),v._v(" "),n("li",[v._v("a1 = a6 + a5 + a3")]),v._v(" "),n("li",[v._v("a0 = a6 + a4 + a3")])]),v._v(" "),n("p",[v._v("思想：信息码a3-a6不能保证S1-S3为0，使用监督码修正S1-S3为000。接收方收到信息后计算S1-S3，如果不为000则存在误码，通过查表纠正错误")]),v._v(" "),n("h3",{attrs:{id:"汉明码的矩阵表示"}},[v._v("汉明码的矩阵表示")]),v._v(" "),n("p",[v._v("监督关系式可以视为是一个矩阵（0表示ai的系数为0，1表示ai的系数为1）：")]),v._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token number"}},[v._v("1110100")]),v._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[v._v("1101010")]),v._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[v._v("1011001")]),v._v("\n")])]),v._v(" "),n("p",[v._v("这被称为"),n("strong",[v._v("监督矩阵H")]),v._v("。令A为一维行矩阵[a0, a1, a2, a3, a4, a5, a6]，则H乘A的转置即可得到")]),v._v(" "),n("ul",[n("li",[v._v("a6 + a5 + a4 + a2")]),v._v(" "),n("li",[v._v("a6 + a5 + a3 + a1")]),v._v(" "),n("li",[v._v("a6 + a4 + a3 + a0")])]),v._v(" "),n("p",[v._v("也就是S1-S3。任何一个发送码组都能保证上面三个算式的结果为000")]),v._v(" "),n("p",[v._v("因为要构造计算a0-a2，所以上述矩阵右半部分一定是一个单位矩阵")]),v._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token number"}},[v._v("100")]),v._v("\n010\n001\n")])]),v._v(" "),n("p",[v._v("所以可以把H拆分为左右两部分，记为P和I，P是r*k阶矩阵（如下），I是r阶方阵（即上面的单位矩阵")]),v._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("   H       P     I\n"),n("span",{pre:!0,attrs:{class:"token number"}},[v._v("1110100")]),v._v("   "),n("span",{pre:!0,attrs:{class:"token number"}},[v._v("1110")]),v._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[v._v("100")]),v._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[v._v("1101010")]),v._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[v._v("1101")]),v._v("  010\n"),n("span",{pre:!0,attrs:{class:"token number"}},[v._v("1011001")]),v._v("   "),n("span",{pre:!0,attrs:{class:"token number"}},[v._v("1011")]),v._v("  001\n")])]),v._v(" "),n("p",[v._v("监督码编码规则也可以改写为矩阵形式：[a2, a1, a0] = [a6, a5, a4, a3]*Q，其中Q为P的转置。使用此式也可以计算监督码元a2-a0")]),v._v(" "),n("p",[v._v("在Q的左边加上一个k阶单位方阵，构成"),n("strong",[v._v("生成矩阵G")]),v._v("：")]),v._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("   G        I    Q\n"),n("span",{pre:!0,attrs:{class:"token number"}},[v._v("1000111")]),v._v("   "),n("span",{pre:!0,attrs:{class:"token number"}},[v._v("1000")]),v._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[v._v("111")]),v._v("\n0100110 "),n("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" 0100  "),n("span",{pre:!0,attrs:{class:"token number"}},[v._v("110")]),v._v("\n0010101   0010  "),n("span",{pre:!0,attrs:{class:"token number"}},[v._v("101")]),v._v("\n0001011   0001  011\n")])]),v._v(" "),n("p",[v._v("给出信息码组[a6, a5, a4, a3]，令其乘生成矩阵G即可得到目标码字")]),v._v(" "),n("p",[n("strong",[v._v("要求G和H的各行都是线性无关的")]),v._v("。如果有关，使用初等行变换使其无关")]),v._v(" "),n("h3",{attrs:{id:"汉明码的特点"}},[v._v("汉明码的特点")]),v._v(" "),n("ul",[n("li",[v._v("最小码距d0=3，所以能纠正1位错码")]),v._v(" "),n("li",[v._v("码率为k/n，相比其他码长相同且能够纠正单个错误的分组码，汉明码使用的监督位最少，码率最高")])])])}]};v.exports={attributes:{layout:"collection",title:"差错控制编码",collection:"PrinciplesOfCommunications"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);