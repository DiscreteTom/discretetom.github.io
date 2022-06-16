(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{1338:function(e,t){const n={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"引子"}},[e._v("引子")]),e._v(" "),n("p",[e._v("ε表示空串")]),e._v(" "),n("p",[e._v("绝对值符号表示串长")]),e._v(" "),n("p",[e._v("即"),n("code",{pre:!0},[e._v("|ε|=0")])]),e._v(" "),n("p",[e._v("元语言：描述语言的语言")]),e._v(" "),n("h2",{attrs:{id:"文法"}},[e._v("文法")]),e._v(" "),n("p",[e._v("文法G是一个四元组"),n("code",{pre:!0},[e._v("G=(N, T, P, S)")]),e._v("，其中")]),e._v(" "),n("ul",[n("li",[e._v("N 非终结符的有限集合")]),e._v(" "),n("li",[e._v("T 终结符的有限集合")]),e._v(" "),n("li",[e._v("P 形式为a->b的生成式的有限集合")]),e._v(" "),n("li",[e._v("S 起始符，属于非终结符")])]),e._v(" "),n("p",[e._v("文法可以分为0型、1型、2型和3型文法，对生成式的要求越来越高")]),e._v(" "),n("ul",[n("li",[e._v("0型文法\n"),n("ul",[n("li",[e._v("无限制文法")]),e._v(" "),n("li",[e._v("生成递归可枚举语言")]),e._v(" "),n("li",[e._v("等价于图灵机")])])]),e._v(" "),n("li",[e._v("1型文法\n"),n("ul",[n("li",[e._v("上下文有关文法(CSG: Context-sensitive Grammar)")]),e._v(" "),n("li",[e._v("生成式要求：左侧串长度小于等于右侧")]),e._v(" "),n("li",[e._v("生成上下文有关语言(CSL: Context-sensitive Language)")]),e._v(" "),n("li",[e._v("不考虑空串时，等价于线性有界自动机(LBA: Linear Bounded Automaton)")])])]),e._v(" "),n("li",[e._v("2型文法\n"),n("ul",[n("li",[e._v("上下文无关文法(CFG: Context-free Grammar)")]),e._v(" "),n("li",[e._v("生成式要求：左侧串为一个非终结符")]),e._v(" "),n("li",[e._v("生成上下文无关语言(CFL: Context-free Language)")]),e._v(" "),n("li",[e._v("等价于下推自动机(PDA: Pushdown Automaton)")])])]),e._v(" "),n("li",[e._v("3型文法\n"),n("ul",[n("li",[e._v("正则文法\n"),n("ul",[n("li",[e._v("右线性文法(Right-linear Grammar)\n"),n("ul",[n("li",[e._v("生成式要求：左侧串为一个非终结符，右侧串为终结符串（可以为空）或终结符串后接一个非终结符")])])]),e._v(" "),n("li",[e._v("左线性文法(Left-linear Grammar)\n"),n("ul",[n("li",[e._v("生成式要求：左侧串为一个非终结符，右侧串为终结符串或一个非终结符后接一个终结符串")])])])])]),e._v(" "),n("li",[e._v("生成正则语言")]),e._v(" "),n("li",[e._v("等价于有限自动机(Finite Automaton)")])])])]),e._v(" "),n("p",[e._v("对生成式要求的变化：")]),e._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("无要求-"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("左侧串小于右侧串-"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("左侧串为一个非终结符-"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("左侧串为一个非终结符且右侧串只能为一个终结符串或终结符串接一个非终结符\n")])])])}]};e.exports={attributes:{layout:"collection",title:"语言与文法",collection:"FormalLanguageAndAutomata"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);