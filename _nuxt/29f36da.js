(window.webpackJsonp=window.webpackJsonp||[]).push([[79,347,348],{1291:function(t,n,e){const r={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"泛型函数"}},[t._v("泛型函数")]),t._v(" "),r("p",[t._v("我需要实现一个函数，判断某个"),r("code",{pre:!0},[t._v("GameObject")]),t._v("是否包含"),r("code",{pre:!0},[t._v("ComponentA")]),t._v("，如果不包含则添加"),r("code",{pre:!0},[t._v("ComponentB")]),t._v("，也就是：")]),t._v(" "),r("pre",{staticClass:"language-cs"},[r("code",{pre:!0,attrs:{class:"language-cs"}},[r("span",{pre:!0,attrs:{class:"token class-name"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" component "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token generic-method"}},[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetComponent")]),r("span",{pre:!0,attrs:{class:"token generic class-name"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ComponentA"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("component "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gameObject"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token generic-method"}},[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddComponent")]),r("span",{pre:!0,attrs:{class:"token generic class-name"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ComponentB"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),r("p",[t._v("为了把它封装成函数复用，使用了歪门邪道的泛型（以避免写复杂的反射代码）")]),t._v(" "),r("p",[r("strong",[t._v("仅使用")]),t._v("参数的"),r("strong",[t._v("类型")]),t._v("，而"),r("strong",[t._v("不使用")]),t._v("参数的"),r("strong",[t._v("值")]),t._v("：")]),t._v(" "),r("pre",{staticClass:"language-cs"},[r("code",{pre:!0,attrs:{class:"language-cs"}},[r("span",{pre:!0,attrs:{class:"token return-type class-name"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),r("span",{pre:!0,attrs:{class:"token generic-method"}},[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),r("span",{pre:!0,attrs:{class:"token generic class-name"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("A"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" B"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),t._v(" _"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("B")]),t._v(" __"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token class-name"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" component "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token generic-method"}},[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetComponent")]),r("span",{pre:!0,attrs:{class:"token generic class-name"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("A"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("component "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gameObject"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token generic-method"}},[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddComponent")]),r("span",{pre:!0,attrs:{class:"token generic class-name"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("B"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),r("p",[t._v("调用的时候使用"),r("code",{pre:!0},[t._v("null")]),t._v("加上强制类型转换：")]),t._v(" "),r("pre",{staticClass:"language-cs"},[r("code",{pre:!0,attrs:{class:"language-cs"}},[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ComponentA"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ComponentB"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),r("h2",{attrs:{id:"报错"}},[t._v("报错")]),t._v(" "),r("p",[t._v("上面的代码看起来没有问题，但是实际执行的时候，"),r("code",{pre:!0},[t._v("component == null")]),t._v("永远都是"),r("code",{pre:!0},[t._v("false")]),t._v("，即使此 Component 并不存在")]),t._v(" "),r("p",[t._v("进入 Debug 模式，可以看到"),r("code",{pre:!0},[t._v("GetComponent<>")]),t._v("确实返回了一个"),r("code",{pre:!0},[t._v("null")]),t._v("，但是这个"),r("code",{pre:!0},[t._v("null")]),t._v("和 CSharp 语言原生的"),r("code",{pre:!0},[t._v("null")]),t._v("并不相等，甚至还有内部结构")]),t._v(" "),r("p",[r("img",{attrs:{src:e(475),alt:"39-2"}})]),t._v(" "),r("p",[r("img",{attrs:{src:e(476),alt:"39-1"}})]),t._v(" "),r("h2",{attrs:{id:"原因"}},[t._v("原因")]),t._v(" "),r("p",[t._v("通常情况下，"),r("code",{pre:!0},[t._v("GetComponent")]),t._v("返回的"),r("code",{pre:!0},[t._v("null")]),t._v("是一个"),r("code",{pre:!0},[t._v("UnityEngine.Object")]),t._v("，而不是语言原生的"),r("code",{pre:!0},[t._v("null")])]),t._v(" "),r("p",[t._v("Unity 封装的"),r("code",{pre:!0},[t._v("UnityEngine.Object")]),t._v("重载了运算符"),r("code",{pre:!0},[t._v("==")]),t._v("和"),r("code",{pre:!0},[t._v("!=")]),t._v("，所以它和语言原生的"),r("code",{pre:!0},[t._v("null")]),t._v("进行比较的时候可以正常工作")]),t._v(" "),r("p",[t._v("但是因为我的函数代码使用了泛型，所以编译器在编译期无法判断返回的"),r("code",{pre:!0},[t._v("null")]),t._v("是"),r("code",{pre:!0},[t._v("UnityEngine.Object")]),t._v("，所以没有使用重载的运算符，导致此异常")]),t._v(" "),r("h2",{attrs:{id:"解决方案"}},[t._v("解决方案")]),t._v(" "),r("p",[t._v("加上类型约束，实现静态类型检查：")]),t._v(" "),r("pre",{staticClass:"language-cs"},[r("code",{pre:!0,attrs:{class:"language-cs"}},[r("span",{pre:!0,attrs:{class:"token return-type class-name"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),r("span",{pre:!0,attrs:{class:"token generic-method"}},[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),r("span",{pre:!0,attrs:{class:"token generic class-name"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("A"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" B"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),t._v(" _"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("B")]),t._v(" __"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token type-list"}},[r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UnityEngine"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Object")])]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),r("h2",{attrs:{id:"参考"}},[t._v("参考")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://answers.unity.com/questions/1243356/getcomponent-returns-null-however-comparison-to-nu.html"}},[t._v("GetComponent returns null however comparison to null returns false")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/constraints-on-type-parameters"}},[t._v("Constraints on type parameters (C# Programming Guide)")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/Object.html"}},[t._v("Unity Scripting API: Object")])])])])}]};t.exports={attributes:{title:"Unity3D中null不等于null的问题",description:"因为歪门邪道的泛型代码引发的问题",tags:["Gaming / 游戏","Unity3D"]},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}},475:function(t,n,e){t.exports=e.p+"img/39-2.1264569.png"},476:function(t,n,e){t.exports=e.p+"img/39-1.b334310.png"}}]);