(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{1334:function(t,_){const v={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"frontmatter-markdown"},[v("h2",{attrs:{id:"函数依赖"}},[t._v("函数依赖")]),t._v(" "),v("p",[t._v("functional dependicies")]),t._v(" "),v("h3",{attrs:{id:"定义"}},[t._v("定义")]),t._v(" "),v("p",[t._v("令\\(R\\)为一个关系的属性集，\\(\\alpha\\)和\\(\\beta\\)是\\(R\\)的子集，则称函数依赖\\(\\alpha \\rightarrow \\beta\\)在\\(R\\)上成立当且仅当两个元组\\(t_1\\)和\\(t_2\\)在属性集\\(\\alpha\\)上的属性相同时，在属性集\\(\\beta\\)上的属性也相同")]),t._v(" "),v("p",[t._v("即，属性集\\(\\alpha\\)可以决定属性\\(\\beta\\)，属性\\(\\beta\\)（函数）依赖属性\\(\\alpha\\)")]),t._v(" "),v("p",[t._v("例：已知某个关系包含AB两个属性，表格内容：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("A")]),t._v(" "),v("th",[t._v("B")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("4")])]),t._v(" "),v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("5")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("7")])])])]),t._v(" "),v("p",[t._v("显然属性A不能作为主键而B可以（当然属性集AB也可以）。A相同的时候B可能不相同，所以\\(A \\rightarrow B\\)不成立。而\\(B \\rightarrow A\\)显然是成立的，所以可以说B确定的时候可以确定A，B可以决定属性A")]),t._v(" "),v("h3",{attrs:{id:"键与函数依赖"}},[t._v("键与函数依赖")]),t._v(" "),v("p",[t._v("已知属性集R。称属性集K是R的"),v("strong",[t._v("超键")]),t._v("当且仅当\\(K \\rightarrow R\\)（从上例可以很容易地看出")]),t._v(" "),v("p",[t._v("即如果R依赖于K，那么K就可以作为超键")]),t._v(" "),v("p",[t._v("如果没有任何K的子集也可以单独决定R(\\(\\text{for no }\\alpha \\subset K, \\alpha \\rightarrow R\\))，那么K就是R的"),v("strong",[t._v("候选键")]),t._v("（因为满足了最小性")]),t._v(" "),v("h3",{attrs:{id:"平凡依赖"}},[t._v("平凡依赖")]),t._v(" "),v("p",[t._v("trivial dependency")]),t._v(" "),v("p",[t._v("显然如果\\(\\beta \\subset \\alpha\\)那么\\(\\alpha \\rightarrow \\beta\\)，即属性集的子集一定可以被此属性集决定。")]),t._v(" "),v("p",[t._v("称这种依赖为平凡依赖")]),t._v(" "),v("h3",{attrs:{id:"传递依赖"}},[t._v("传递依赖")]),t._v(" "),v("p",[t._v("transitive dependency")]),t._v(" "),v("p",[t._v("如果属性集\\(\\alpha \\beta \\gamma\\)满足")]),t._v(" "),v("ul",[v("li",[t._v("\\(\\alpha \\rightarrow \\beta\\)")]),t._v(" "),v("li",[t._v("\\(\\beta \\not \\subset \\alpha\\)")]),t._v(" "),v("li",[t._v("\\(\\beta \\not \\rightarrow \\alpha\\)")]),t._v(" "),v("li",[t._v("\\(\\beta \\rightarrow \\gamma\\)")])]),t._v(" "),v("p",[t._v("则称\\(\\gamma\\)传递依赖于\\(\\alpha\\)")]),t._v(" "),v("p",[t._v("可以视为函数依赖具有传递性")]),t._v(" "),v("h3",{attrs:{id:"部分依赖"}},[t._v("部分依赖")]),t._v(" "),v("p",[t._v("partial dependency")]),t._v(" "),v("p",[t._v("如果属性集\\(\\alpha \\beta \\gamma\\)满足")]),t._v(" "),v("ul",[v("li",[t._v("\\(\\alpha \\rightarrow \\beta\\)")]),t._v(" "),v("li",[t._v("\\(\\gamma \\subset \\alpha\\)")]),t._v(" "),v("li",[t._v("\\(\\gamma \\rightarrow \\beta\\)")])]),t._v(" "),v("p",[t._v("则称\\(\\beta\\)部分依赖于\\(\\alpha\\)")]),t._v(" "),v("p",[t._v("即如果B依赖A，那么B依赖于所有含有A的属性集")]),t._v(" "),v("h3",{attrs:{id:"逻辑蕴涵"}},[t._v("逻辑蕴涵")]),t._v(" "),v("p",[t._v("logical imply")]),t._v(" "),v("p",[t._v("用来判断某些函数依赖是否能够推导出另一个函数依赖。如果能推导出来，就说这些函数依赖逻辑蕴涵另一个函数依赖")]),t._v(" "),v("h3",{attrs:{id:"函数依赖集闭包"}},[t._v("函数依赖集闭包")]),t._v(" "),v("p",[t._v("函数依赖集的闭包就是这个函数依赖集和他们逻辑蕴涵的函数依赖集的并集。")]),t._v(" "),v("p",[t._v("已知一个函数依赖集F，那么闭包则表示为\\(F^+\\)")]),t._v(" "),v("h3",{attrs:{id:"函数依赖相关运算"}},[t._v("函数依赖相关运算")]),t._v(" "),v("p",[t._v("armstrong’s axioms")]),t._v(" "),v("ul",[v("li",[t._v("reflexivity自反律 - 如果\\(\\beta \\subset \\alpha\\)那么\\(\\alpha \\rightarrow \\beta\\)")]),t._v(" "),v("li",[t._v("augmentation增广律 - 如果\\(\\alpha \\rightarrow \\beta\\)那么\\(\\gamma\\alpha \\rightarrow \\gamma\\beta\\)")]),t._v(" "),v("li",[t._v("transitivity传递率 - 如果\\(\\alpha \\rightarrow \\beta\\)而且\\(\\beta \\rightarrow \\gamma\\)那么\\(\\alpha \\rightarrow \\gamma\\)")])]),t._v(" "),v("h3",{attrs:{id:"如何计算闭包"}},[t._v("如何计算闭包")]),t._v(" "),v("pre",{staticClass:"language-bash"},[v("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("从F+中取出一个函数依赖f\n\t试图使用自反律扩张\n\t试图使用增广律扩张\n从F+中取出函数依赖f1和f2\n\t试图使用传递率\n如果以上过程修改了F+，则循环\n")])]),t._v(" "),v("h3",{attrs:{id:"函数依赖附加运算"}},[t._v("函数依赖附加运算")]),t._v(" "),v("ul",[v("li",[t._v("union合并 - 如果\\(\\alpha \\rightarrow \\beta\\)而且\\(\\alpha \\rightarrow \\gamma\\)那么\\(\\alpha \\rightarrow \\beta\\gamma\\)")]),t._v(" "),v("li",[t._v("decomposition分解 - 如果\\(\\alpha \\rightarrow \\beta\\gamma\\)那么\\(\\alpha \\rightarrow \\beta\\)而且\\(\\alpha \\rightarrow \\gamma\\)")]),t._v(" "),v("li",[t._v("pseudo-transitivity伪传递性 - 如果\\(\\alpha \\rightarrow \\beta\\)而且\\(\\gamma\\beta \\rightarrow \\delta\\)那么\\(\\alpha\\gamma \\rightarrow \\delta\\)")])]),t._v(" "),v("h3",{attrs:{id:"属性集闭包"}},[t._v("属性集闭包")]),t._v(" "),v("p",[t._v("属性集\\(\\alpha\\)在函数依赖集 \\(F\\)下的属性集闭包为 \\(\\alpha^+\\)")]),t._v(" "),v("p",[t._v("如果 \\(\\beta\\)函数依赖于 \\(\\alpha\\)则 \\(\\beta\\)在 \\(\\alpha^+\\)中")]),t._v(" "),v("p",[t._v("属性集闭包的作用：")]),t._v(" "),v("ul",[v("li",[t._v("如果一个属性集的闭包包含所有属性，那么它就是超键")]),t._v(" "),v("li",[t._v("如果 \\(\\beta\\)在 \\(\\alpha\\)的闭包中则 \\(\\beta\\)函数依赖于 \\(\\alpha\\)")]),t._v(" "),v("li",[t._v("计算函数依赖闭包")])]),t._v(" "),v("h3",{attrs:{id:"等价函数依赖"}},[t._v("等价函数依赖")]),t._v(" "),v("p",[t._v("如果两个函数依赖的"),v("strong",[t._v("闭包相等")]),t._v("则称他们等价equivalent，即互相包含")]),t._v(" "),v("h3",{attrs:{id:"正则覆盖最小覆盖"}},[t._v("正则覆盖/最小覆盖")]),t._v(" "),v("p",[t._v("canonical cover/minimal cover")]),t._v(" "),v("p",[t._v("如果函数依赖集里面没有相互逻辑蕴涵的函数依赖，则称之为最小的")]),t._v(" "),v("p",[t._v("如："),v("code",{pre:!0},[t._v("{A -> B, B -> C, A -> C}")]),t._v("中"),v("code",{pre:!0},[t._v("A -> C")]),t._v("就是多余的，这个函数依赖集的最小覆盖是"),v("code",{pre:!0},[t._v("{A -> B, B -> C}")])]),t._v(" "),v("p",[t._v("类似地：")]),t._v(" "),v("ul",[v("li",[v("code",{pre:!0},[t._v("{A -> B, B -> C, A -> CD}")]),t._v("可以简化为"),v("code",{pre:!0},[t._v("{A -> B, B -> C, A -> D}")])]),t._v(" "),v("li",[v("code",{pre:!0},[t._v("{A -> B, B -> C, AC -> D}")]),t._v("可以简化为"),v("code",{pre:!0},[t._v("{A -> B, B -> C, A -> D}")])])]),t._v(" "),v("h3",{attrs:{id:"无关属性"}},[t._v("无关属性")]),t._v(" "),v("p",[t._v("extraneous attributes")]),t._v(" "),v("p",[t._v("如果"),v("strong",[t._v("一个函数依赖中的一个属性")]),t._v("被移除之后不影响"),v("strong",[t._v("函数依赖集")]),t._v("的闭包的结果，则称这个属性对于这个函数依赖是无关的")]),t._v(" "),v("p",[t._v("无关属性有两种情况：")]),t._v(" "),v("ul",[v("li",[t._v("出现在函数依赖左边")]),t._v(" "),v("li",[t._v("出现在函数依赖右边")])]),t._v(" "),v("p",[t._v("例1，已知"),v("code",{pre:!0},[t._v("{A -> C, AB -> C}")]),t._v("，属性"),v("code",{pre:!0},[t._v("B")]),t._v("在"),v("code",{pre:!0},[t._v("AB -> C")]),t._v("中是无关的，因为去除B之后A的闭包还是A和C（即我们已经知道"),v("code",{pre:!0},[t._v("A -> C")]),t._v("了，所以加不加B是多余的")]),t._v(" "),v("p",[t._v("例2，已知"),v("code",{pre:!0},[t._v("{A -> C, AB -> CD}")]),t._v("，属性"),v("code",{pre:!0},[t._v("C")]),t._v("在"),v("code",{pre:!0},[t._v("AB -> CD")]),t._v("中是多余的，因为去除C之后得到"),v("code",{pre:!0},[t._v("{A -> C, AB -> D}")]),t._v("，其中AB的闭包还是CD")]),t._v(" "),v("h3",{attrs:{id:"判断无关属性"}},[t._v("判断无关属性")]),t._v(" "),v("p",[t._v("已知F中的函数依赖\\(\\alpha \\rightarrow \\beta\\)")]),t._v(" "),v("ul",[v("li",[t._v("判断\\(\\alpha\\)中的属性A是否是多余的 - 计算\\((\\alpha - A)^+\\)，如果包含了\\(\\beta\\)，那就说明A是多余的")]),t._v(" "),v("li",[t._v("判断\\(\\beta\\)中的属性A是否是多余的 - 计算\\(\\alpha\\)在\\((F - \\{\\alpha \\rightarrow \\beta\\}) \\cup \\{\\alpha \\rightarrow (\\beta - A)\\}\\)环境下的闭包，如果此闭包包含A那么A就是多余的")])]),t._v(" "),v("h3",{attrs:{id:"计算最小覆盖"}},[t._v("计算最小覆盖")]),t._v(" "),v("p",[t._v("假设函数依赖集 \\(F\\)的最小覆盖为 \\(F_c\\)，则")]),t._v(" "),v("ul",[v("li",[t._v("\\(F\\) & \\(F_c\\)互相包含（等价")]),t._v(" "),v("li",[t._v("\\(F_c\\)中的函数依赖都没有无关属性")]),t._v(" "),v("li",[t._v("\\(F_c\\)中的函数依赖左侧都是唯一的")])]),t._v(" "),v("pre",{staticClass:"language-bash"},[v("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("令Fc "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" F\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n\t合并Fc中左侧成分相同的函数依赖\n\t在Fc中找到一个有无关属性的函数依赖并删除此无关属性\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("until")]),t._v(" Fc不再改变\n")])]),t._v(" "),v("h2",{attrs:{id:"范式normal-forms"}},[t._v("范式normal forms")]),t._v(" "),v("p",[t._v("用来描述数据库的schema")]),t._v(" "),v("h3",{attrs:{id:"第一范式"}},[t._v("第一范式")]),t._v(" "),v("p",[t._v("所有表项都是原子的，没有复合属性。满足这个条件才能直接作为数据库schema")]),t._v(" "),v("h3",{attrs:{id:"第二范式"}},[t._v("第二范式")]),t._v(" "),v("p",[t._v("在第一范式的基础上，满足所有"),v("strong",[t._v("非键")]),t._v("属性"),v("strong",[t._v("完全依赖")]),t._v("于候选键（消除了非键属性对候选键的部分依赖")]),t._v(" "),v("p",[t._v("即：属性要么出现在候选键中，要么完全依赖于候选键（如果部分依赖就应该被分离出当前表")]),t._v(" "),v("h3",{attrs:{id:"第三范式"}},[t._v("第三范式")]),t._v(" "),v("p",[t._v("在第二范式的基础上，满足"),v("strong",[t._v("非键")]),t._v("属性"),v("strong",[t._v("不传递依赖")]),t._v("于候选键（消除了传递依赖。如果传递依赖就应该被分离出当前表")]),t._v(" "),v("h3",{attrs:{id:"bc范式bcnf"}},[t._v("BC范式BCNF")]),t._v(" "),v("p",[t._v("Boyce-Codd范式")]),t._v(" "),v("p",[t._v("在第一范式的基础上，满足"),v("strong",[t._v("每个属性")]),t._v("都完全依赖候选键，且不传递依赖候选键")]),t._v(" "),v("p",[t._v("与第二、第三范式格式上的区别：BC范式讨论所有属性而不仅是非键属性")]),t._v(" "),v("p",[t._v("如果schema满足BC范式则也满足第三范式")]),t._v(" "),v("h3",{attrs:{id:"使用bcnf消除3nf的冗余和其他问题"}},[t._v("使用BCNF消除3NF的冗余和其他问题")]),t._v(" "),v("p",[t._v("考虑关系集 R={J,K,L}和它的函数依赖集 F={JK->L, L->K}。满足第三范式。")]),t._v(" "),v("p",[t._v("候选键可以是JK或JL，假设取JK为主键。因为123范式仅考虑非键属性，但是此处键属性K并没有完全依赖于主键JK而依赖于JKL，所以出现冗余，如：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("J")]),t._v(" "),v("th",[t._v("K")]),t._v(" "),v("th",[t._v("L")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("j1")]),t._v(" "),v("td",[t._v("k1")]),t._v(" "),v("td",[t._v("l1")])]),t._v(" "),v("tr",[v("td",[t._v("j2")]),t._v(" "),v("td",[t._v("k1")]),t._v(" "),v("td",[t._v("l1")])]),t._v(" "),v("tr",[v("td",[t._v("j3")]),t._v(" "),v("td",[t._v("k1")]),t._v(" "),v("td",[t._v("l1")])]),t._v(" "),v("tr",[v("td",[t._v("null")]),t._v(" "),v("td",[t._v("k2")]),t._v(" "),v("td",[t._v("l2")])])])]),t._v(" "),v("p",[t._v("问题：")]),t._v(" "),v("ul",[v("li",[t._v("出现重复数据（因为没有完全依赖")]),t._v(" "),v("li",[t._v("LK确定时可能会没有相应的J")])]),t._v(" "),v("p",[t._v("使用BCNF解决：")]),t._v(" "),v("p",[t._v("拆分为两个关系集：")]),t._v(" "),v("ul",[v("li",[t._v("R1={J,K}, F1={K -> J}")]),t._v(" "),v("li",[t._v("R2={K,L}, F2={L -> K}")])]),t._v(" "),v("h2",{attrs:{id:"候选键的求法"}},[t._v("候选键的求法")]),t._v(" "),v("p",[t._v("已知关系模式R和R上的函数依赖集F，求"),v("strong",[t._v("所有")]),t._v("候选键")]),t._v(" "),v("h3",{attrs:{id:"第一步"}},[t._v("第一步")]),t._v(" "),v("p",[t._v("把R的所有属性分为4类：")]),t._v(" "),v("ul",[v("li",[t._v("L - 仅出现在F的左边（仅决定其他属性而不被决定，一定"),v("strong",[t._v("在候选键中")])]),t._v(" "),v("li",[t._v("R - 仅出现在F的右边（仅被其他属性决定而不能决定其他属性。一定"),v("strong",[t._v("不在候选键中")])]),t._v(" "),v("li",[t._v("N - F左右都没有出现过（不被其他属性决定，一定"),v("strong",[t._v("在候选键中")]),t._v("。实际生产中通常不存在N类属性")]),t._v(" "),v("li",[t._v("LR - F两边都出现过（可能在候选键中")])]),t._v(" "),v("p",[t._v("令X类代表L+N类（一定在候选键中），Y类代表LR类（可能在候选键中")]),t._v(" "),v("h3",{attrs:{id:"第二步"}},[t._v("第二步")]),t._v(" "),v("p",[t._v("求\\(X^+\\)，如果包含了R的所有属性则X为R的唯一候选键。否则到第三步")]),t._v(" "),v("h3",{attrs:{id:"第三步"}},[t._v("第三步")]),t._v(" "),v("p",[t._v("在Y中取一个属性A，求\\((XA)^+\\)，如果包含了R的所有属性则到第四步。否则循环尝试，直到试完所有属性，然后到第四步")]),t._v(" "),v("h3",{attrs:{id:"第四步"}},[t._v("第四步")]),t._v(" "),v("p",[t._v("从Y中依次取两个属性、三个属性…，求他们与X的并集的属性闭包，直到闭包包含R的所有属性")]),t._v(" "),v("h2",{attrs:{id:"分解"}},[t._v("分解")]),t._v(" "),v("p",[t._v("把关系R分解为一系列关系 \\(\\{R_1, R_2, R_3, ...\\}\\)，分解后应包含之前的所有属性")]),t._v(" "),v("h3",{attrs:{id:"无损连接分解"}},[t._v("无损连接分解")]),t._v(" "),v("p",[t._v("lossless-join decomposition")]),t._v(" "),v("p",[t._v("（反义词 - 有损连接分解，因为分解之后的表没有足够的连接信息（也就是键）导致连接后信息丢失")]),t._v(" "),v("p",[t._v("分解后的关系集通过连接操作可以得到原关系，即")]),t._v(" "),v("p",[t._v("\\[\nr=\\Pi_{R1}(r) \\Join \\Pi_{R2}(r) \\Join \\cdots \\Join \\Pi_{Rn}(r)\n\\]")]),t._v(" "),v("p",[t._v("也就是原关系在分解方案上的投影的连接是原关系")]),t._v(" "),v("p",[t._v("R无损连接分解为R1和R2，当且仅当下列两种情况之一成立：")]),t._v(" "),v("ul",[v("li",[t._v("\\(R_1 \\cap R_2 \\rightarrow R_1\\)")]),t._v(" "),v("li",[t._v("\\(R_1 \\cap R_2 \\rightarrow R_2\\)")])]),t._v(" "),v("p",[t._v("如："),v("code",{pre:!0},[t._v("R={A, B, C} F={A -> B, B -> C} R1={A, B}, R2={B, C}")]),t._v("，二者交集为"),v("code",{pre:!0},[t._v("{B}")]),t._v("，函数依赖于{AB}（或{BC}")]),t._v(" "),v("blockquote",[v("p",[t._v("这个条件表明了分离之后需要有必要的冗余元素才能保证两个表的连接。这里的冗余指的是不同表中的相同元素而不是同一个表中的相同元素")])]),t._v(" "),v("p",[t._v("分解后Ri的函数依赖集应为R的函数依赖集F的闭包 \\(F^+\\)中所有仅含Ri中属性的函数依赖的集合")]),t._v(" "),v("h3",{attrs:{id:"依赖保护"}},[t._v("依赖保护")]),t._v(" "),v("p",[t._v("dependency preservation")]),t._v(" "),v("p",[t._v("分解后要确保依赖关系没有变")]),t._v(" "),v("p",[t._v("上文中提到过，如果两个函数依赖集的闭包是相同的，那么两个函数依赖集是等价的。所以要保证分解后：")]),t._v(" "),v("p",[t._v("\\[\n(F_1 \\cup F_2 \\cup \\cdots \\cup F_n)^+ = F^+\n\\]")]),t._v(" "),v("p",[t._v("且分解后的\\(F_i\\)中的属性应全部在 \\(R_i\\)中出现")]),t._v(" "),v("p",[t._v("如："),v("code",{pre:!0},[t._v("R=(A, B, C) F={A -> B, B -> C}")])]),t._v(" "),v("ul",[v("li",[t._v("如果分解为"),v("code",{pre:!0},[t._v("R1=(A, B) R2=(B, C)")]),t._v("可以看到是依赖保留的")]),t._v(" "),v("li",[t._v("如果分解为"),v("code",{pre:!0},[t._v("R1=(A, B) R2=(A, C)")]),t._v("则不是依赖保留的（因为这种分解方案的闭包不包含"),v("code",{pre:!0},[t._v("B -> C")]),t._v("所以函数依赖集闭包不可能等价。或者可以理解为函数依赖"),v("code",{pre:!0},[t._v("B -> C")]),t._v("没有被保留")])]),t._v(" "),v("h3",{attrs:{id:"检测依赖保护"}},[t._v("检测依赖保护")]),t._v(" "),v("p",[t._v("可以直接检测分解前后的函数依赖集闭包是否相同")]),t._v(" "),v("p",[t._v("不过直接检测原函数依赖集中的所有函数依赖是否被保护更简单")]),t._v(" "),v("p",[t._v("检测 \\(\\alpha \\rightarrow \\beta\\)是否在某个分解方案中被保留：")]),t._v(" "),v("pre",{staticClass:"language-cpp"},[v("code",{pre:!0,attrs:{class:"language-cpp"}},[t._v("result "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" alpha\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" each Ri"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tt "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result交Ri"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("在F上的闭包"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("交Ri\n\t\tresult "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" result 并 t\n\t"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" result改变\n")])]),t._v(" "),v("p",[t._v("如果result包含了 \\(\\beta\\)中的所有属性，那么函数依赖 \\(\\alpha \\rightarrow \\beta\\)是被保留的")]),t._v(" "),v("h2",{attrs:{id:"3nf分解"}},[t._v("3NF分解")]),t._v(" "),v("h3",{attrs:{id:"算法"}},[t._v("算法")]),t._v(" "),v("pre",{staticClass:"language-cpp"},[v("code",{pre:!0,attrs:{class:"language-cpp"}},[t._v("Fc "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" F的正则覆盖\ni "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" each "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("alpha "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" beta"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" in Fc"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" R1到Ri都不同时包含alpha和beta"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ti "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\t\tRi "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" alpha "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" beta\n\t"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" R1到Ri都不包含R的候选键"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  i "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  Ri "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" R的任意候选键\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" R1"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Ri\n")])]),t._v(" "),v("h3",{attrs:{id:"例题"}},[t._v("例题")]),t._v(" "),v("p",[v("code",{pre:!0},[t._v("R = {SNO, SD, MN, CNO, G}")])]),t._v(" "),v("p",[t._v("F = :")]),t._v(" "),v("ul",[v("li",[t._v("SNO -> SD")]),t._v(" "),v("li",[t._v("SNO -> MN")]),t._v(" "),v("li",[t._v("SD -> MN")]),t._v(" "),v("li",[t._v("SNO, CNO -> G")])]),t._v(" "),v("p",[t._v("首先寻找最小覆盖Fc = :")]),t._v(" "),v("ul",[v("li",[t._v("SNO -> SD")]),t._v(" "),v("li",[t._v("SD -> MN")]),t._v(" "),v("li",[t._v("SNO, CNO -> G")])]),t._v(" "),v("p",[t._v("然后确定R的候选键为(SNO, CNO)")]),t._v(" "),v("p",[t._v("运行算法，得到：")]),t._v(" "),v("ul",[v("li",[v("code",{pre:!0},[t._v("R1={SNO, SD} F1={SNO -> SD}")])]),t._v(" "),v("li",[v("code",{pre:!0},[t._v("R2={SD, MN} F2={SD -> MN}")])]),t._v(" "),v("li",[v("code",{pre:!0},[t._v("R3={SNO, CNO, G} F={SNO, CNO -> G}")])])]),t._v(" "),v("h3",{attrs:{id:"分解算法的性质"}},[t._v("分解算法的性质")]),t._v(" "),v("ul",[v("li",[t._v("保证每个Ri都是3NF")]),t._v(" "),v("li",[t._v("分解是依赖保护的")]),t._v(" "),v("li",[t._v("分解是无损连接的")])]),t._v(" "),v("h2",{attrs:{id:"bcnf分解算法略"}},[t._v("BCNF分解算法（略")]),t._v(" "),v("pre",{staticClass:"language-cpp"},[v("code",{pre:!0,attrs:{class:"language-cpp"}},[t._v("result "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("R"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ndone "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n计算F闭包\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" done"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result中存在不是BCNF的schema Ri"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t令 "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("alpha "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" beta"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 为Ri中的非平凡依赖且alpha交beta不为空\n\t\tresult "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" Ri"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("并"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ri "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" beta"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" 并 "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alpha "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" beta"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" done "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),v("h2",{attrs:{id:"检测bcnf略"}},[t._v("检测BCNF（略")]),t._v(" "),v("h2",{attrs:{id:"数据库设计目标"}},[t._v("数据库设计目标")]),t._v(" "),v("p",[t._v("最优目标：")]),t._v(" "),v("ul",[v("li",[t._v("BCNF")]),t._v(" "),v("li",[t._v("无损连接")]),t._v(" "),v("li",[t._v("依赖保护")])]),t._v(" "),v("p",[t._v("如果实现不了最优，下面两种情况之一也可以接受")]),t._v(" "),v("ul",[v("li",[t._v("3NF")]),t._v(" "),v("li",[t._v("依赖保护部分缺失")])]),t._v(" "),v("h2",{attrs:{id:"设计数据库的流程"}},[t._v("设计数据库的流程")]),t._v(" "),v("ol",[v("li",[t._v("ER图生成一个table的集合R，或者令R为一个包含所有属性的表(universal relation)")]),t._v(" "),v("li",[t._v("分解R")])])])}]};t.exports={attributes:{layout:"collection",title:"Normal Forms",collection:"DatabaseConcept"},vue:{render:v.render,staticRenderFns:v.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=v.render,this.$options.staticRenderFns=v.staticRenderFns}}}}}}]);