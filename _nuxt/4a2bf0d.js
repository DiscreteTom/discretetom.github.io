(window.webpackJsonp=window.webpackJsonp||[]).push([[34,305,306,307,308,309,310,311,312,313,314],{1241:function(t,n,e){const r={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"frontmatter-markdown"},[r("p",[t._v("原标题:如何在右键菜单里面添加cmd")]),t._v(" "),r("p",[t._v("正如原标题所说，本文只讲述如何在右键菜单添加cmd")]),t._v(" "),r("h2",{attrs:{id:"目标效果"}},[t._v("目标效果")]),t._v(" "),r("p",[t._v("在右键菜单里面添加cmd的想法来源于安装"),r("strong",[t._v("git")]),t._v("之后右键菜单出现的"),r("strong",[t._v("git bash here")]),t._v("，如果能做出这样的效果，在任何目录单击右键就能在当前目录启动cmd")]),t._v(" "),r("h2",{attrs:{id:"文件夹上的右键菜单添加cmd"}},[t._v("文件夹上的右键菜单添加cmd")]),t._v(" "),r("p",[t._v("个性化右键菜单需要修改"),r("strong",[t._v("注册表文件(registry file)")])]),t._v(" "),r("p",[t._v("使用我们熟悉的"),r("strong",[t._v("Win+R")]),t._v('打开运行窗口，运行"'),r("strong",[t._v("regedit")]),t._v('"，即'),r("strong",[t._v("注册表编辑器(registry editor)")])]),t._v(" "),r("p",[t._v("为了防止搞砸，可以先"),r("strong",[t._v("备份")]),t._v("一下目前的注册表文件")]),t._v(" "),r("p",[t._v("菜单栏-文件-导出")]),t._v(" "),r("p",[r("img",{attrs:{src:e(449),alt:"3-1"}})]),t._v(" "),r("p",[t._v("右键点击"),r("strong",[t._v("HKEY_CLASSES_ROOT/Folder/shell")]),t._v("选择"),r("strong",[t._v("新建-项")]),t._v("新建一个键值，此处命名为cmdPrompt。这个名字不重要，只要起一个好辨识且不冲突的即可")]),t._v(" "),r("p",[r("img",{attrs:{src:e(450),alt:"3-2"}})]),t._v(" "),r("p",[t._v("将其数据改为"),r("strong",[t._v("cmd")]),t._v("，这个数据的值为右键菜单中显示的名称")]),t._v(" "),r("p",[r("img",{attrs:{src:e(451),alt:"3-3"}})]),t._v(" "),r("p",[t._v("在cmdPrompt上右击，选择"),r("strong",[t._v("新建-项")]),t._v("新建一个键值，命名为"),r("strong",[t._v("command")]),t._v("，代表cmdPrompt的command命令，所以此键值的名称不能更改")]),t._v(" "),r("p",[r("img",{attrs:{src:e(452),alt:"3-4"}})]),t._v(" "),r("p",[t._v("将其数据改为")]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("cmd.exe /k "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" %1\n")])]),t._v(" "),r("p",[t._v("效果")]),t._v(" "),r("p",[r("img",{attrs:{src:e(453),alt:"3-5"}})]),t._v(" "),r("h2",{attrs:{id:"文件夹内空白处右键菜单里添加cmd"}},[t._v("文件夹内空白处右键菜单里添加cmd")]),t._v(" "),r("p",[t._v("这次定位到")]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("HKEY_CLASSES_ROOT"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Directory"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Background"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("shell"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("cmdPrompt\n")])]),t._v(" "),r("p",[t._v("重复上一小节的内容")]),t._v(" "),r("p",[r("img",{attrs:{src:e(454),alt:"3-6"}})]),t._v(" "),r("p",[t._v("但是这次command里面的指令不是"),r("code",{pre:!0},[t._v("cmd.exe /k cd %1")]),t._v("了，否则会提示错误")]),t._v(" "),r("p",[t._v("改成")]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("cmd.exe /s /k "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushd")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%V"')]),t._v("\n")])]),t._v(" "),r("p",[r("img",{attrs:{src:e(455),alt:"3-7"}})]),t._v(" "),r("p",[t._v("效果")]),t._v(" "),r("p",[r("img",{attrs:{src:e(456),alt:"3-8"}})]),t._v(" "),r("h2",{attrs:{id:"添加图标"}},[t._v("添加图标")]),t._v(" "),r("p",[t._v("在刚才的cmdPrompt里面"),r("strong",[t._v("新建-字符串值")]),t._v("，命名为"),r("strong",[t._v("Icon")]),t._v("(显然这个名称不可自定义)并赋值为"),r("strong",[t._v("cmd.exe")])]),t._v(" "),r("p",[r("img",{attrs:{src:e(457),alt:"3-9"}})]),t._v(" "),r("p",[t._v("效果")]),t._v(" "),r("p",[r("img",{attrs:{src:e(458),alt:"3-10"}})]),t._v(" "),r("h2",{attrs:{id:"最后"}},[t._v("最后")]),t._v(" "),r("p",[t._v("其实在文件夹内"),r("strong",[t._v("shift+右键")]),t._v("的菜单里面有"),r("strong",[t._v("在此处打开PowerShell窗口")]),t._v("选项")]),t._v(" "),r("p",[t._v("但是感觉用起来不顺手呀:)")]),t._v(" "),r("p",[t._v("参考:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://dongwei.iteye.com/blog/816350"}},[t._v("给右键菜单加入CMD命令行快速通道(适合win7)")])]),t._v(" "),r("li",[r("a",{attrs:{href:"http://blog.csdn.net/zyw_anquan/article/details/77712943"}},[t._v("右键打开命令行窗口CMD")])])]),t._v(" "),r("p",[r("a",{attrs:{href:"/2018/03/13/%E5%A6%82%E4%BD%95%E5%BF%AB%E9%80%9F%E5%9C%A8%E6%8C%87%E5%AE%9A%E7%9B%AE%E5%BD%95%E5%90%AF%E5%8A%A8Windows%E6%8E%A7%E5%88%B6%E5%8F%B0(part-2)/"}},[t._v("Part 2传送门")])])])}]};t.exports={attributes:{title:"如何快速在指定目录启动Windows控制台",date:"2018-03-04T00:00:00.000Z",tags:["windows"]},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}},449:function(t,n,e){t.exports=e.p+"img/3-1.b6c5237.png"},450:function(t,n,e){t.exports=e.p+"img/3-2.2147df8.png"},451:function(t,n,e){t.exports=e.p+"img/3-3.98e48b4.png"},452:function(t,n,e){t.exports=e.p+"img/3-4.7eae37a.png"},453:function(t,n,e){t.exports=e.p+"img/3-5.aa32357.png"},454:function(t,n,e){t.exports=e.p+"img/3-6.477d9b5.png"},455:function(t,n,e){t.exports=e.p+"img/3-7.96b3e71.png"},456:function(t,n,e){t.exports=e.p+"img/3-8.b5556cc.png"},457:function(t,n,e){t.exports=e.p+"img/3-9.49bfd5d.png"},458:function(t,n,e){t.exports=e.p+"img/3-10.c0f2e80.png"}}]);