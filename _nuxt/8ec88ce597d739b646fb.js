(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{1086:function(_,v){const e={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",[_._v("图灵机基础")]),_._v(" "),e("p",[_._v("图灵机与双向有限自动机的区别：图灵机可以改变“带(tape)”上的符号")]),_._v(" "),e("p",[_._v("图灵机TM(Turing Machine)的形式定义：一个七元组"),e("code",{pre:!0},[_._v("M = (Q, T, Σ, δ, q0, B, F)")])]),_._v(" "),e("ul",[e("li",[_._v("Q 有限状态集")]),_._v(" "),e("li",[_._v("T 有限输入符号集")]),_._v(" "),e("li",[_._v("Σ 有限带符号集")]),_._v(" "),e("li",[_._v("δ 转移函数")]),_._v(" "),e("li",[_._v("q0 初始状态")]),_._v(" "),e("li",[_._v("B 特殊带符：空白符")]),_._v(" "),e("li",[_._v("F 终态集合")])]),_._v(" "),e("p",[_._v("δ函数示例："),e("code",{pre:!0},[_._v("δ(q, a) = (p, B, L)")]),_._v("表示状态q接收输入a时转换为状态p，把带上面的a改写为B(空白符)，然后指针左移(L)")]),_._v(" "),e("p",[_._v("图灵机的格局：使用w1qw2来描述图灵机的格局，其中q为当前状态，w1与w2为指针左侧和右侧带上的字符串。约定：w1qw2表示正在扫描w2的最左字符，也就是指针指向w2的最左字符。"),e("code",{pre:!0},[_._v("w2 = ε")]),_._v("时视为扫描空白符")]),_._v(" "),e("p",[_._v("图灵机的初态：处于状态q0（初始状态），指针在带的最左单元")]),_._v(" "),e("p",[_._v("图灵机接受的语言：能够使图灵机进入终止状态的串")]),_._v(" "),e("p",[_._v("停机：输入被接受时，图灵机将停止")]),_._v(" "),e("h2",[_._v("停机问题")]),_._v(" "),e("p",[_._v("停机问题：任意给定一个图灵机和一个输入的串ω，问此串能否使此图灵机停机？")]),_._v(" "),e("p",[_._v("结论：停机问题不可解，即不可判定能否停机")]),_._v(" "),e("h2",[_._v("使用图灵机构造整数函数计算机")]),_._v(" "),e("p",[_._v("使用一进制表示数，即整数k被表示为k个0")]),_._v(" "),e("p",[_._v("这样所有整数都可以通过不同数量的0（或其他字符）表示")]),_._v(" "),e("p",[_._v("图灵机可以实现整数函数的构造。举例：用图灵机实现求真减法：")]),_._v(" "),e("pre",[e("code",{pre:!0},[_._v("if x > y then output x - y\nelse output 0\n")])]),_._v(" "),e("p",[_._v("那么初始带上的串应为"),e("code",{pre:!0},[_._v("0^x 1 0^y")])]),_._v(" "),e("p",[_._v("思路：自动机把最左端的0改为空白符，然后寻找1后面的0，把它改成1，然后再向左搜索，找到空白符，把空白符之后的0改成空白符，再向右搜，收到1后面的0改成1。。。如果最后发现左侧没有0而右侧还有0就把右侧的所有0变成1。最后统计带子上面的0的个数就是结果")]),_._v(" "),e("p",[_._v("例2：设计图灵机接受"),e("code",{pre:!0},[_._v("L = {0^m | m = 2^n, n >= 0}")])]),_._v(" "),e("p",[_._v("思路：从左到右扫描，每隔一个0消除一个0，以此达到消除2^n个0的作用")]),_._v(" "),e("h2",[_._v("拓展图灵机")]),_._v(" "),e("p",[_._v("使用新的概念与技术简化δ函数")]),_._v(" "),e("h3",[_._v("拥有存储能力的控制器")]),_._v(" "),e("p",[_._v("拓展状态，使状态中可以保存有限个字符，这样状态就可以带着字符一起移动")]),_._v(" "),e("p",[_._v("状态使用一个二元组"),e("code",{pre:!0},[_._v("[q, a]")]),_._v("表示，其中q为原来的控制状态，a为状态中保存的字符（串）")]),_._v(" "),e("p",[_._v("举例：设计图灵机要求如下：如果带后面出现过带头第一个字符，则接受此串")]),_._v(" "),e("p",[_._v("假设输入字符为26个小写字母，如果使用原生图灵机，在接受第一个字符时，针对每一个字符都要构造一个状态，即"),e("code",{pre:!0},[_._v("δ(q0, a) = (q1, a, R), δ(q0, b) = (q2, b, R), ..., δ(q0, z) = (q26, z, R)")]),_._v("，然后针对每一个q1-q26，需要"),e("code",{pre:!0},[_._v("δ(q1, 不是a) = (q1, 不改变字符, R), δ(q2, 不是b) = (q2, 不改变字符, R)...")])]),_._v(" "),e("p",[_._v("如果使用具有存储功能的读写头，则只需要一个控制状态，即读第一个字符的函数为："),e("code",{pre:!0},[_._v("δ([q0, B], a) = ([q1, a], a, R), δ([q0, B], b)= ([q1, b], b, R)...")]),_._v("，检测重复字符的函数为："),e("code",{pre:!0},[_._v("δ([q1, a], 不是a) = ([q1, a], 不改变字符, R), ..., δ([q1, a], a) = ([q1, B], B, R), ...")]),_._v("，即终态为[q1, B]")]),_._v(" "),e("h3",[_._v("多道图灵机")]),_._v(" "),e("p",[_._v("multiple tracks")]),_._v(" "),e("p",[_._v("输入带分为n条，每次读入并改写n个字符，称为n道机")]),_._v(" "),e("p",[_._v("举例：使用三道机，判断某个数"),e("code",{pre:!0},[_._v("n > 2")]),_._v("是否为素数")]),_._v(" "),e("p",[_._v("思路：")]),_._v(" "),e("ol",[e("li",[_._v("把n以二进制形式写在第一道上。数的两段用特殊符号定界")]),_._v(" "),e("li",[_._v("在第二道上写二进制数2")]),_._v(" "),e("li",[_._v("把第一道的内容复制到第三道")]),_._v(" "),e("li",[_._v("第三道减第二道，结果保留在第三道，直到第三道的数不大于第二道。如果第三道结果为0则说明原第一道的数可以使用m此第二道的数相加得到，也就是说n不是素数")]),_._v(" "),e("li",[_._v("如果第三道的结果小于第二道，令第二道的数加1，如果此时第一道与第二道的数相同，则n为素数。否则，返回步骤3")])]),_._v(" "),e("h3",[_._v("核对符")]),_._v(" "),e("p",[_._v("使用双道机，第二道上面使用核对符"),e("code",{pre:!0},[_._v("√")]),_._v("来判断某个字符是否已经被核对。可以用来检测句子中的重复部分")]),_._v(" "),e("p",[_._v("例：设计图灵机识别语言"),e("code",{pre:!0},[_._v("{wtw | w ∈ {a, b}*}")]),_._v("，其中t为分界符")]),_._v(" "),e("p",[_._v("假设同时使用了具有存储能力的控制器，只要在分界符左侧识别到一个没有被核对的最左侧的字符，把它放入控制器，再与分界符右侧第一个没有被核对的字符进行比较即可")]),_._v(" "),e("h3",[_._v("移位")]),_._v(" "),e("p",[_._v("使图灵机具备移位功能，对输入带上的字符进行移位操作。当需要在输入带上留出一部分空间时可以将输入带上的非空白字符右移若干单元")]),_._v(" "),e("p",[_._v("实际上是通过具有存储能力的控制器实现的")]),_._v(" "),e("p",[_._v("举例："),e("code",{pre:!0},[_._v("M = (Q, T, Σ, δ, q0, B, F)")]),_._v("，其中"),e("code",{pre:!0},[_._v("Q = {[q, D1, D2] | q = q0或q1, D1, D2为带上字符}")]),_._v("，要求把abcd右移两位变成zzabcd")]),_._v(" "),e("p",[_._v("思路：在控制器中保存两个字符，当读入第三个字符是把第一个字符写下来，就可以实现字符串右移两位。如控制器中已经读入了ab，读c时应该把a写下，控制器中保存bc")]),_._v(" "),e("h3",[_._v("子程序")]),_._v(" "),e("p",[_._v("已知一个图灵机L1的起始状态是q1，终止状态是q2，可以把q1、q2放置到另一个图灵机L2中，这样L2就可以把L1作为子程序调用")])])}]};_.exports={attributes:{layout:"collection",title:"图灵机",collection:"FormalLanguageAndAutomata"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(_){return this.templateRender?this.templateRender():_("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);