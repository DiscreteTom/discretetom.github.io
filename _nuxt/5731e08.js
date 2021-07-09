(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{1188:function(t,e){const n={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"目标"}},[t._v("目标")]),t._v(" "),n("p",[t._v("最近在写"),n("a",{attrs:{href:"https://pypi.org/project/refdict/"}},[t._v("refdict")]),t._v("，希望兼容"),n("code",{pre:!0},[t._v("dict")]),t._v("/"),n("code",{pre:!0},[t._v("list")]),t._v("/"),n("code",{pre:!0},[t._v("tuple")]),t._v("/"),n("code",{pre:!0},[t._v("str")])]),t._v(" "),n("p",[t._v("目标："),n("code",{pre:!0},[t._v("refdict")]),t._v("的根元素是"),n("code",{pre:!0},[t._v("dict")]),t._v("时可以像使用"),n("code",{pre:!0},[t._v("dict.pop()")]),t._v("和"),n("code",{pre:!0},[t._v("dict.keys()")]),t._v("一样使用"),n("code",{pre:!0},[t._v("refdict.pop()")]),t._v("和"),n("code",{pre:!0},[t._v("refdict.keys()")]),t._v("，根元素是"),n("code",{pre:!0},[t._v("list")]),t._v("时可以像使用"),n("code",{pre:!0},[t._v("list.pop()")]),t._v("和"),n("code",{pre:!0},[t._v("list.append()")]),t._v("一样使用"),n("code",{pre:!0},[t._v("refdict.pop()")]),t._v("和"),n("code",{pre:!0},[t._v("refdict.append()")])]),t._v(" "),n("p",[t._v("而如果"),n("code",{pre:!0},[t._v("refdict")]),t._v("根元素是"),n("code",{pre:!0},[t._v("dict")]),t._v("时不能使用"),n("code",{pre:!0},[t._v("append")]),t._v("，根元素是"),n("code",{pre:!0},[t._v("list")]),t._v("时不能使用"),n("code",{pre:!0},[t._v("keys")])]),t._v(" "),n("p",[t._v("即，"),n("code",{pre:!0},[t._v("refdict")]),t._v("可以调用"),n("strong",[t._v("根元素的任意非内置函数")])]),t._v(" "),n("h2",{attrs:{id:"实现"}},[t._v("实现")]),t._v(" "),n("h3",{attrs:{id:"背景知识"}},[t._v("背景知识")]),t._v(" "),n("p",[t._v("python类有一个内置函数（钩子）"),n("code",{pre:!0},[t._v("__getattr__")]),t._v("，在形如"),n("code",{pre:!0},[t._v("someclass.undefined")]),t._v("出现的时候被调用。比如"),n("code",{pre:!0},[t._v("str.keys")]),t._v("，因为"),n("code",{pre:!0},[t._v("str")]),t._v("类没有"),n("code",{pre:!0},[t._v("keys")]),t._v("这一成员，所以会调用"),n("code",{pre:!0},[t._v("str")]),t._v("类的"),n("code",{pre:!0},[t._v("__getattr__")]),t._v("函数，把"),n("code",{pre:!0},[t._v("keys")]),t._v("作为字符串传入"),n("code",{pre:!0},[t._v("__getattr__")]),t._v("函数")]),t._v(" "),n("h3",{attrs:{id:"代码与分析"}},[t._v("代码与分析")]),t._v(" "),n("pre",{staticClass:"language-python"},[n("code",{pre:!0,attrs:{class:"language-python"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\tself"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("__getattr__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("eval")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'self.data.'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nt "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" T"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# == dict.pop('key')")]),t._v("\n")])]),t._v(" "),n("p",[t._v("执行"),n("code",{pre:!0},[t._v("t.pop('key')")]),t._v("的时候，因为"),n("code",{pre:!0},[t._v("T")]),t._v("类本身没有"),n("code",{pre:!0},[t._v("pop")]),t._v("成员，所以调用"),n("code",{pre:!0},[t._v("__getattr__")]),t._v("函数，把"),n("code",{pre:!0},[t._v("pop")]),t._v("以字符串的形式作为参数"),n("code",{pre:!0},[t._v("value")]),t._v("。那么"),n("code",{pre:!0},[t._v("'self.data.' + value")]),t._v("就是"),n("code",{pre:!0},[t._v("'self.data.pop'")]),t._v("，通过"),n("code",{pre:!0},[t._v("eval")]),t._v("函数返回"),n("code",{pre:!0},[t._v("dict.pop")]),t._v("函数，这样"),n("code",{pre:!0},[t._v("t.pop")]),t._v("就变成了"),n("code",{pre:!0},[t._v("dict.pop")]),t._v("，就可以正确执行"),n("code",{pre:!0},[t._v("dict.pop('key')")])]),t._v(" "),n("h3",{attrs:{id:"效果"}},[t._v("效果")]),t._v(" "),n("pre",{staticClass:"language-python"},[n("code",{pre:!0,attrs:{class:"language-python"}},[t._v("t1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" T"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nt1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# == t1.data.keys() => ['key']")]),t._v("\nt1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# == t1.data.append('123') => error")]),t._v("\n\nt2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" T"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nt2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("456")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# == t2.data.append(456)")]),t._v("\nt2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# == t2.data.keys() => error")]),t._v("\n")])]),t._v(" "),n("p",[t._v("相比于多继承，此模板方案在没有对应函数的时候可以报错，不会出现多继承时出现的函数同名冲突")]),t._v(" "),n("h3",{attrs:{id:"缺陷"}},[t._v("缺陷")]),t._v(" "),n("p",[t._v("仅能调用非内置函数，对于内置函数（比如"),n("code",{pre:!0},[t._v("__str__")]),t._v("或者"),n("code",{pre:!0},[t._v("__contains__")]),t._v("）无效。即"),n("code",{pre:!0},[t._v("print(t)")]),t._v("调用"),n("code",{pre:!0},[t._v("t.__str__")]),t._v("并不会触发"),n("code",{pre:!0},[t._v("t.__getattr__")]),t._v("，所以对于内置函数还是需要手动实现一遍")]),t._v(" "),n("h2",{attrs:{id:"参考"}},[t._v("参考")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://blog.csdn.net/goodlixueyong/article/details/52589979"}},[t._v("浅析Python运算符重载")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.jianshu.com/p/885d59db57fc"}},[t._v("Python"),n("code",{pre:!0},[t._v("__getattribute__")]),t._v("vs"),n("code",{pre:!0},[t._v("__getattr__")]),t._v("浅谈")])])])])}]};t.exports={attributes:{date:"2019-05-24T00:00:00.000Z",title:"使用python实现模板类",description:"可以调用目标类的非内置函数",tags:["python"]},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);