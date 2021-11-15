(window.webpackJsonp=window.webpackJsonp||[]).push([[52,293,294,295,296,297],{1224:function(t,v,_){const e={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"前言"}},[t._v("前言")]),t._v(" "),e("p",[t._v("常年隐藏桌面图标，所以从桌面启动程序比较复杂")]),t._v(" "),e("p",[t._v("而且没有鼠标的时候笔记本的触摸板真是定位无力")]),t._v(" "),e("p",[t._v("以下提供三个方案以快速通过键盘启动应用程序")]),t._v(" "),e("p",[t._v("方案1和方案2快速便捷但是数量限制严重")]),t._v(" "),e("p",[t._v("方案3没有这些问题")]),t._v(" "),e("h2",{attrs:{id:"方案1-win-数字"}},[t._v("方案1: Win + 数字")]),t._v(" "),e("p",[t._v("Win + 数字 是Windows自带的热键 可以启动任务栏对应位置的应用")]),t._v(" "),e("p",[t._v("只要把常用应用固定在任务栏即可使用此快捷键实现快速启动")]),t._v(" "),e("p",[t._v("举个例子 我的任务栏")]),t._v(" "),e("p",[t._v("虽然是竖向的但是不影响效果:)")]),t._v(" "),e("p",[e("img",{attrs:{src:_(481),alt:"7-1"}})]),t._v(" "),e("p",[t._v("常年固定应用")]),t._v(" "),e("ol",[e("li",[t._v("资源管理器")]),t._v(" "),e("li",[t._v("记事本")]),t._v(" "),e("li",[t._v("chrome")]),t._v(" "),e("li",[t._v("VScode")])]),t._v(" "),e("p",[t._v("那么使用"),e("code",{pre:!0},[t._v("Win+1")]),t._v("便可以启动资源管理器 使用"),e("code",{pre:!0},[t._v("Win+2")]),t._v("便可以启动记事本 以此类推")]),t._v(" "),e("p",[t._v("此方案的缺点也很明显 就是任务栏的容量和美观性")]),t._v(" "),e("blockquote",[e("p",[t._v("ps:")]),t._v(" "),e("ol",[e("li",[t._v("Windows自带资源管理器热键Win+E")]),t._v(" "),e("li",[t._v("小键盘的数字无效")])])]),t._v(" "),e("h2",{attrs:{id:"方案2-设置快捷方式快捷键"}},[t._v("方案2: 设置快捷方式快捷键")]),t._v(" "),e("p",[t._v("打开快捷方式的属性如图")]),t._v(" "),e("p",[e("img",{attrs:{src:_(482),alt:"7-2"}})]),t._v(" "),e("p",[t._v("其中有一栏快捷方式 可以设置为")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("Ctrl + Alt + Key\n")])]),t._v(" "),e("p",[t._v("比如我可以把TIM的快捷键设置为Ctrl + Alt + T")]),t._v(" "),e("p",[t._v("相比于方案1 此方案不需要考虑美观性了")]),t._v(" "),e("p",[t._v("但是此方案仍然有容量有限的缺陷")]),t._v(" "),e("h2",{attrs:{id:"方案3-win-r-修改path"}},[t._v("方案3: Win + R + 修改Path")]),t._v(" "),e("p",[t._v("使用Win+R可以打开运行窗口")]),t._v(" "),e("p",[e("img",{attrs:{src:_(483),alt:"7-3"}})]),t._v(" "),e("p",[t._v("但是直接在这里输入应用程序名是没用的")]),t._v(" "),e("p",[t._v("因为系统不知道要到哪里去找")]),t._v(" "),e("p",[t._v("比如上图中如果我们试图直接启动TIM")]),t._v(" "),e("p",[t._v("结果如下")]),t._v(" "),e("p",[e("img",{attrs:{src:_(484),alt:"7-4"}})]),t._v(" "),e("p",[t._v("所以要告诉系统你的应用程序的路径")]),t._v(" "),e("p",[t._v("最简单的方案是把所有需要的应用程序的快捷方式扔到一个文件夹里面")]),t._v(" "),e("p",[t._v("比如我在任意位置Ctrl+Shift+N新建一个文件夹 命名为appPrompt")]),t._v(" "),e("p",[e("img",{attrs:{src:_(485),alt:"7-5"}})]),t._v(" "),e("p",[t._v("打开 此电脑-属性-高级系统设置-环境变量")]),t._v(" "),e("p",[t._v("修改环境变量Path")]),t._v(" "),e("p",[t._v("新建条目 内容为刚才的文件夹路径")]),t._v(" "),e("p",[t._v("保存")]),t._v(" "),e("p",[t._v("现在再使用Win + R就可以通过文件名启动程序:)")]),t._v(" "),e("p",[t._v("个人感觉此方案最好的地方就是不用返回桌面 在任何应用中都可以打开目标应用")]),t._v(" "),e("blockquote",[e("p",[t._v("ps:")]),t._v(" "),e("ol",[e("li",[t._v("英文文件名不需要区分大小写")]),t._v(" "),e("li",[t._v("windows 10可以使用"),e("code",{pre:!0},[t._v("WIN+S")]),t._v("启动cortana实现类似效果，但是此方案可以自定义更多的操作")])])]),t._v(" "),e("p",[t._v("参考:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.howtoip.com/5-ways-to-quickly-launch-programs-on-windows/"}},[t._v("在Windows上快速启动程序的5种方法")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/bat67/article/details/76396321"}},[t._v("如何使用WIN+R快速启动程序")])])])])}]};t.exports={attributes:{date:"2018-04-07T00:00:00.000Z",title:"Windows下使用快捷键启动应用程序",tags:["windows"]},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}},481:function(t,v,_){t.exports=_.p+"img/7-1.cd165b5.png"},482:function(t,v,_){t.exports=_.p+"img/7-2.b1b9be8.png"},483:function(t,v,_){t.exports=_.p+"img/7-3.87510c4.png"},484:function(t,v,_){t.exports=_.p+"img/7-4.27e4eea.png"},485:function(t,v,_){t.exports=_.p+"img/7-5.e7bdf49.png"}}]);