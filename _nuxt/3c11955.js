(window.webpackJsonp=window.webpackJsonp||[]).push([[98,310],{1228:function(v,_,t){const n={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,n=v._self._c||_;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),n("p",[v._v("推理方法：")]),v._v(" "),n("ul",[n("li",[v._v("图搜索 - 基于图结构\n"),n("ul",[n("li",[v._v("深度优先")]),v._v(" "),n("li",[v._v("广度优先")]),v._v(" "),n("li",[v._v("…")])])]),v._v(" "),n("li",[v._v("逻辑论证 - 基于谓词逻辑")]),v._v(" "),n("li",[v._v("…")])]),v._v(" "),n("p",[v._v("非单调推理 - 后来推出的结论可能会推翻前面的结论")]),v._v(" "),n("p",[v._v("求解需要以下之一：")]),v._v(" "),n("ul",[n("li",[v._v("推理算法 - 给出能够求解的算法，一定可解")]),v._v(" "),n("li",[v._v("推理步骤 - 仅给出过程，不一定可解（无限图深度优先搜索")])]),v._v(" "),n("p",[v._v("是否加入启发性知识：")]),v._v(" "),n("ul",[n("li",[v._v("启发推理 - 已有方法的基础上加入针对特定问题的经验或知识，加快搜索效率与推理过程")]),v._v(" "),n("li",[v._v("非启发推理 - 仅使用一般的逻辑法则")])]),v._v(" "),n("h2",{attrs:{id:"一般搜索"}},[v._v("一般搜索")]),v._v(" "),n("p",[v._v("通用，非启发")]),v._v(" "),n("p",[v._v("盲目搜索")]),v._v(" "),n("p",[v._v("寻找目标路径（不仅是目标节点")]),v._v(" "),n("p",[v._v("相关数据结构与概念：")]),v._v(" "),n("ul",[n("li",[v._v("OPEN表 - 记录被扩展出来的需要被访问的结点")]),v._v(" "),n("li",[v._v("CLOSED表 - 记录已经扩展的结点的访问过的结点")]),v._v(" "),n("li",[v._v("扩展 - 用已知结点生成子节点")]),v._v(" "),n("li",[v._v("指针 - 反向指向父节点，用来生成路径")]),v._v(" "),n("li",[v._v("搜索图 - 搜索得到的图")]),v._v(" "),n("li",[v._v("搜索树 - 搜索图中的所有节点和反向指针构成的集合")])]),v._v(" "),n("p",[v._v("算法步骤：")]),v._v(" "),n("p",[n("img",{attrs:{src:t(504),alt:""}})]),v._v(" "),n("p",[v._v("OPEN表的顺序决定了搜索的顺序")]),v._v(" "),n("ul",[n("li",[v._v("广度优先搜索 - 扩展子节点放在OPEN表尾部")]),v._v(" "),n("li",[v._v("深度优先搜索 - 扩展子节点放在OPEN表头部")]),v._v(" "),n("li",[v._v("有界深度优先搜索（迭代加深")]),v._v(" "),n("li",[v._v("代价树搜索：\n"),n("ul",[n("li",[v._v("代价树广度优先搜索 - 选择OPEN表中代价最小的结点（全局最优")]),v._v(" "),n("li",[v._v("代价树深度优先搜索 - 选择刚扩展的结点中代价最小的结点")])])])]),v._v(" "),n("p",[v._v("搜索时也可以使用相同结点名，找到更优路径时直接改变父节点指针")]),v._v(" "),n("h2",{attrs:{id:"启发式搜索"}},[v._v("启发式搜索")]),v._v(" "),n("h3",{attrs:{id:"概述-1"}},[v._v("概述")]),v._v(" "),n("p",[v._v("有信息搜索")]),v._v(" "),n("p",[v._v("把最有希望的结点放在OPEN表第一个位置")]),v._v(" "),n("p",[v._v("如何评判最有希望？")]),v._v(" "),n("h3",{attrs:{id:"估价函数"}},[v._v("估价函数")]),v._v(" "),n("p",[n("code",{pre:!0},[v._v("f(x) = g(x) + h(x)")])]),v._v(" "),n("ul",[n("li",[v._v("f(x)为估价函数，表示结点x的估价")]),v._v(" "),n("li",[v._v("g(x)为初始节点到x已付出的代价")]),v._v(" "),n("li",[v._v("h(x)是节点x到目标节点的估计代价")])]),v._v(" "),n("p",[v._v("使用f的值对OPEN表的结点进行排序，每次选择f值最优的结点（可能是最大f也可能是最小f")]),v._v(" "),n("p",[v._v("如果估价函数过于复杂或正确性差则启发式搜索可能比深度/广度效率还低")]),v._v(" "),n("h3",{attrs:{id:"有序搜索"}},[v._v("有序搜索")]),v._v(" "),n("p",[v._v("最好优先搜索")]),v._v(" "),n("p",[v._v("例：八数码棋")]),v._v(" "),n("p",[n("code",{pre:!0},[v._v("f(n) = d(n) + w(n)")])]),v._v(" "),n("ul",[n("li",[v._v("d(n)表示结点n的深度（初始节点深度为0")]),v._v(" "),n("li",[v._v("w(n)表示结点n对应于目标状态错放的棋子数（如图中错放数为4")])]),v._v(" "),n("h3",{attrs:{id:"a算法"}},[v._v("A*算法")]),v._v(" "),n("p",[v._v("f*(n)是经过节点n的最优路径")]),v._v(" "),n("ul",[n("li",[v._v("g(n) >= g*(n)")]),v._v(" "),n("li",[v._v("h(n)与h*(n)的大小关系无法确定，因为估价不一定准确")])]),v._v(" "),n("p",[v._v("如果"),n("code",{pre:!0},[v._v("h(n) <= h*(n)")]),v._v("则算法为A*算法（即h(x)为h*(x)的下界")]),v._v(" "),n("p",[v._v("A*算法特性（已经被证明）：")]),v._v(" "),n("ul",[n("li",[v._v("收敛，在有限步内终止")]),v._v(" "),n("li",[v._v("能够找到最优解")])]),v._v(" "),n("h2",{attrs:{id:"与或树搜索"}},[v._v("与或树搜索")]),v._v(" "),n("h3",{attrs:{id:"概述-2"}},[v._v("概述")]),v._v(" "),n("p",[v._v("因为与逻辑的存在，"),n("strong",[v._v("解是一棵解树")]),v._v("而不仅是路径")]),v._v(" "),n("p",[v._v("自下向上标记节点可解或不可解")]),v._v(" "),n("p",[v._v("启发式搜索，与节点的估算可以使用求和，也可以使用最大值（通常使用求和），不同的估算方案得到的解树可能不同")]),v._v(" "),n("p",[v._v("可以每次向下延伸多层。延伸后需要重新判断希望树")]),v._v(" "),n("h3",{attrs:{id:"博弈树"}},[v._v("博弈树")]),v._v(" "),n("p",[v._v("与或节点交替出现：自己下的时候应该是或节点（选择对自己最优的）。对方下的时候是与节点（对方选择最优的，即对我方最坏的")]),v._v(" "),n("h4",{attrs:{id:"极大极小分析法"}},[v._v("极大极小分析法")]),v._v(" "),n("p",[v._v("以一字棋(bingo)为例，估价函数=A成一线数目-B成一线数目，这样可以抵消空白一字")]),v._v(" "),n("p",[v._v("对方下棋的时候一定选择最优值，所以选择估价最小值的情况，自己下棋的时候一定选择最优值，所以选择估价最大的情况")]),v._v(" "),n("p",[v._v("等对方进行实际操作后再选择自己的下一步操作。")]),v._v(" "),n("p",[v._v("估价函数的设计很重要")]),v._v(" "),n("p",[v._v("缺点 - 穷举，计算量大")]),v._v(" "),n("h4",{attrs:{id:"α-β剪枝技术"}},[v._v("α-β剪枝技术")]),v._v(" "),n("p",[v._v("优化极大极小分析法")]),v._v(" "),n("p",[v._v("使用前提：")]),v._v(" "),n("ul",[n("li",[v._v("己方与对方使用相同的估价函数")]),v._v(" "),n("li",[v._v("双方选择最大估价作为最优")])]),v._v(" "),n("p",[v._v("基本思想 - 倒推，或中取大，与中取小。剪枝")]),v._v(" "),n("p",[v._v("定义：")]),v._v(" "),n("ul",[n("li",[v._v("α值 - 有或后继的结点，取"),n("strong",[v._v("已计算子节点")]),v._v("最大倒推值为下界，称为α值")]),v._v(" "),n("li",[v._v("β值 - 有与后继的结点，取"),n("strong",[v._v("已计算子节点")]),v._v("最小倒推值为上界，称为β值")]),v._v(" "),n("li",[v._v("α剪枝 - 节点x的β值不能升高其父节点的α值（不能优化己方最坏结果）。停止搜索x以下的分支，且x的倒推值为β")]),v._v(" "),n("li",[v._v("β剪枝 - 节点x的α值不能降低其父节点的β值（不能优化敌方最坏结果）。停止搜索x以下的分支，且x的倒推值为α")])]),v._v(" "),n("p",[v._v("深度优先搜索，遍历子节点，对不必要计算的结点进行剪枝")]),v._v(" "),n("h2",{attrs:{id:"归结消解演绎推理"}},[v._v("归结/消解演绎推理")]),v._v(" "),n("h3",{attrs:{id:"逻辑推理"}},[v._v("逻辑推理")]),v._v(" "),n("p",[v._v("推理方式：")]),v._v(" "),n("ul",[n("li",[n("strong",[v._v("演绎推理")]),v._v(" "),n("ul",[n("li",[v._v("从一般到个别")]),v._v(" "),n("li",[v._v("三段论")])])]),v._v(" "),n("li",[v._v("归纳推理\n"),n("ul",[n("li",[v._v("从个别到一般")])])]),v._v(" "),n("li",[v._v("缺省推理\n"),n("ul",[n("li",[v._v("默认/假设某一条件成立，然后进行推理")])])])]),v._v(" "),n("p",[v._v("控制策略：")]),v._v(" "),n("ul",[n("li",[v._v("正向推理 - 已知条件推结果")]),v._v(" "),n("li",[v._v("反向推理 - 已知结果推条件")]),v._v(" "),n("li",[v._v("混合推理")]),v._v(" "),n("li",[v._v("双向推理 - 已知条件和结果推过程")])]),v._v(" "),n("p",[v._v("常用过程：模式匹配 - 两个知识模式（即知识的表达方法）完全一致或近似一致，称为可匹配")]),v._v(" "),n("h3",{attrs:{id:"置换与合一"}},[v._v("置换与合一")]),v._v(" "),n("p",[v._v("置换 - 项对变元的替换。即使用变元、常量或函数替换变元。目的是使两个公式一致")]),v._v(" "),n("p",[v._v("一阶谓词中不能再次出现谓词，所以f(y)表示函数f和参数y，小写字母表示变量，大写字母表示常量")]),v._v(" "),n("p",[v._v("S1={z/x, w/y}意为使用z置换x，使用w置换y")]),v._v(" "),n("p",[v._v("通常常量为已经确定的值，不应该被置换")]),v._v(" "),n("p",[v._v("复合置换 - "),n("strong",[v._v("置换操作满足结合律，不满足交换律")])]),v._v(" "),n("p",[v._v("置换的目的是合一。合一的目的是模式匹配。两个模式置换之后是一致的则说明两个模式是匹配的")]),v._v(" "),n("p",[v._v("使两个谓词合一的置换"),n("strong",[v._v("不唯一")]),v._v("，例：为了合一P(x) & P(y)，可以使用置换"),n("code",{pre:!0},[v._v("{x/y}")]),v._v("，也可以使用"),n("code",{pre:!0},[v._v("{a/x, a/y}")])]),v._v(" "),n("p",[v._v("合一不唯一但是存在最简合一，即"),n("strong",[v._v("最一般合一")])]),v._v(" "),n("p",[v._v("求最一般合一需要计算"),n("strong",[v._v("差异集")]),v._v("。合一的过程就是把差异消除的过程")]),v._v(" "),n("p",[v._v("析取 - 逻辑或")]),v._v(" "),n("p",[v._v("P与~P归结得到空子句")]),v._v(" "),n("p",[v._v("子句内部析取，子句之间合取。子句集存在P于~P两个子句时永假")]),v._v(" "),n("p",[v._v("使用谓词Answer表示L，如L为\\(P(x)\\land Q(w)\\)时可以表示为Answer(x, w)")]),v._v(" "),n("p",[n("strong",[v._v("Answer中的变元需和L一致")])]),v._v(" "),n("p",[v._v("如果存在仅包含Answer的子句，则Answer的变量即为结果")]),v._v(" "),n("h3",{attrs:{id:"与或形演绎推理略"}},[v._v("与或形演绎推理（略")]),v._v(" "),n("p",[v._v("基于一阶谓词逻辑")]),v._v(" "),n("h2",{attrs:{id:"不确定性推理"}},[v._v("不确定性推理")]),v._v(" "),n("p",[v._v("P85，如果先结合E2和E3，结果会不一样")]),v._v(" "),n("p",[v._v("条件出现的顺序会影响结果可信度")]),v._v(" "),n("h2",{attrs:{id:"非单调推理"}},[v._v("非单调推理")]),v._v(" "),n("p",[v._v("后来推出的结论可能会推翻前面的结论")]),v._v(" "),n("p",[v._v("例：骑车问题。第一次发现没气->打气，第二次发现没气->补胎")]),v._v(" "),n("p",[n("strong",[v._v("需要保存命题表")])])])}]};v.exports={attributes:{layout:"collection",title:"问题求解",collection:"AIPrinciple"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},504:function(v,_,t){v.exports=t.p+"img/3-1.f5edd64.png"}}]);