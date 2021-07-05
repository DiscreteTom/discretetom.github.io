(window.webpackJsonp=window.webpackJsonp||[]).push([[103,608],{1281:function(v,_,t){const l={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("div",{staticClass:"frontmatter-markdown"},[l("h2",{attrs:{id:"概念"}},[v._v("概念")]),v._v(" "),l("ul",[l("li",[v._v("翻译程序 - 把A语言翻译成B语言的程序\n"),l("ul",[l("li",[v._v("编译程序 - 把高级语言翻译成目标语言（通常为机器语言或汇编语言")]),v._v(" "),l("li",[v._v("汇编程序 - 把汇编语言翻译成目标语言（通常为机器语言")])])]),v._v(" "),l("li",[v._v("解释程序 - 解释执行源程序，"),l("strong",[v._v("不生成目标程序")]),v._v("而直接输出结果")])]),v._v(" "),l("p",[v._v("编译程序和解释程序的"),l("strong",[v._v("根本区别")]),v._v(" - 是否生成"),l("strong",[v._v("目标代码")])]),v._v(" "),l("ul",[l("li",[v._v("编译程序生成目标代码")]),v._v(" "),l("li",[v._v("解释程序不生成目标代码")])]),v._v(" "),l("p",[v._v("注意：二者都生成"),l("strong",[v._v("中间代码")]),v._v("，只不过解释器执行结束之后就会丢弃中间代码，而编译器把中间代码转换为目标代码")]),v._v(" "),l("p",[v._v("特例：JAVA语言先把源程序(.java)"),l("strong",[v._v("编译")]),v._v("为字节码(.class)，然后对字节码"),l("strong",[v._v("解释")]),v._v("执行，是介于编译型语言和解释型语言的语言")]),v._v(" "),l("h2",{attrs:{id:"编译过程"}},[v._v("编译过程")]),v._v(" "),l("ol",[l("li",[v._v("词法分析")]),v._v(" "),l("li",[v._v("语法分析")]),v._v(" "),l("li",[v._v("语义分析+中间代码生成")]),v._v(" "),l("li",[v._v("中间代码优化")]),v._v(" "),l("li",[v._v("目标代码生成")])]),v._v(" "),l("h2",{attrs:{id:"编译程序典型结构"}},[v._v("编译程序典型结构")]),v._v(" "),l("p",[l("img",{attrs:{src:t(803),alt:"1-1"}})]),v._v(" "),l("h2",{attrs:{id:"错误处理"}},[v._v("错误处理")]),v._v(" "),l("p",[v._v("错误等级自底向上依次为")]),v._v(" "),l("ol",[l("li",[v._v("词法错误")]),v._v(" "),l("li",[v._v("语法错误")]),v._v(" "),l("li",[v._v("语义错误")]),v._v(" "),l("li",[v._v("逻辑错误")])]),v._v(" "),l("h3",{attrs:{id:"词法错误"}},[v._v("词法错误")]),v._v(" "),l("p",[v._v("出现非法字符")]),v._v(" "),l("h3",{attrs:{id:"语法错误"}},[v._v("语法错误")]),v._v(" "),l("p",[v._v("语法不符合此语言的文法规则")]),v._v(" "),l("p",[l("strong",[v._v("关键字拼写错误属于语法错误")])]),v._v(" "),l("h3",{attrs:{id:"语义错误"}},[v._v("语义错误")]),v._v(" "),l("ul",[l("li",[v._v("静态语义错误 - 运行前出错\n"),l("ul",[l("li",[v._v("变量未定义")]),v._v(" "),l("li",[v._v("类型不匹配")])])]),v._v(" "),l("li",[v._v("动态语义错误 - 运行时出错\n"),l("ul",[l("li",[v._v("除零错误")]),v._v(" "),l("li",[v._v("空内存访问")])])])]),v._v(" "),l("h2",{attrs:{id:"其他概念"}},[v._v("其他概念")]),v._v(" "),l("h3",{attrs:{id:"前端与后端"}},[v._v("前端与后端")]),v._v(" "),l("ul",[l("li",[v._v("前端 - 从源语言到中间语言（并优化中间代码")]),v._v(" "),l("li",[v._v("后端 - 从中间语言到目标语言（并优化目标代码")])]),v._v(" "),l("p",[l("strong",[v._v("前后端分离使编译器易于移植、代码复用")]),v._v("：不同源语言只需要编译成相同中间语言，然后使用同一个后端即可；相同语言要编译到不同目标语言，可以使用相同的前端，只需要更改后端即可")]),v._v(" "),l("blockquote",[l("p",[v._v("拓展知识：有些编译器分为前中后端")]),v._v(" "),l("ul",[l("li",[v._v("前端负责处理源语言文件\n"),l("ul",[l("li",[v._v("词法分析")]),v._v(" "),l("li",[v._v("语法分析")]),v._v(" "),l("li",[v._v("语义分析")])])]),v._v(" "),l("li",[v._v("中端负责生成中间代码（并优化")]),v._v(" "),l("li",[v._v("后端负责生成目标代码（并优化")])])]),v._v(" "),l("h3",{attrs:{id:"一遍扫描与多遍扫描"}},[v._v("一遍扫描与多遍扫描")]),v._v(" "),l("p",[v._v("编译程序可以根据扫描源文件的次数分为")]),v._v(" "),l("ul",[l("li",[v._v("一遍扫描编译程序")]),v._v(" "),l("li",[v._v("多遍扫描编译程序")])]),v._v(" "),l("p",[v._v("编译的过程可能需要多遍扫描源文件。比如每个处理过程都扫描一次。"),l("strong",[v._v("多遍扫描编译需要一个总控制器")])]),v._v(" "),l("p",[v._v("也可能只扫描一次，这时需要把 "),l("strong",[v._v("语法分析器")]),v._v(" 作为主体（总控制器），把词法分析器和语义分析器（和代码生成器）作为子程序调用。")]),v._v(" "),l("p",[l("strong",[v._v("多遍扫描")]),v._v("的优缺点")]),v._v(" "),l("ul",[l("li",[v._v("优点\n"),l("ul",[l("li",[v._v("减少对内存容量的要求")]),v._v(" "),l("li",[v._v("各遍的编译子程序功能独立，相互联系简单，结构清晰")]),v._v(" "),l("li",[v._v("能够实现更充分的优化，获得高质量目标程序")]),v._v(" "),l("li",[v._v("分离前后端，为移植创造条件")])])]),v._v(" "),l("li",[v._v("缺点\n"),l("ul",[l("li",[v._v("增加了不少重复性操作。慢")])])])]),v._v(" "),l("h3",{attrs:{id:"编译程序的伙伴工具"}},[v._v("编译程序的伙伴工具")]),v._v(" "),l("ul",[l("li",[v._v("预处理器\n"),l("ul",[l("li",[v._v("宏处理")]),v._v(" "),l("li",[v._v("文件包含")]),v._v(" "),l("li",[v._v("语言扩充 - 可以自定义一些源语言没有的操作")])])]),v._v(" "),l("li",[v._v("汇编程序\n"),l("ul",[l("li",[v._v("最简单的汇编程序也要对输入进行两遍扫描")])])]),v._v(" "),l("li",[v._v("连接装配程序")])])])}]};v.exports={attributes:{layout:"collection",title:"编译概述",collection:"FundamentalsOfCompiling"},vue:{render:l.render,staticRenderFns:l.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=l.render,this.$options.staticRenderFns=l.staticRenderFns}}}}},803:function(v,_,t){v.exports=t.p+"img/1-1.d4b0bbc.png"}}]);