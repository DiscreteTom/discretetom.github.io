(window.webpackJsonp=window.webpackJsonp||[]).push([[51,350,351,352,353,354],{1293:function(t,e,r){const n={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"背景"}},[t._v("背景")]),t._v(" "),n("p",[t._v("刚安装的Android Studio 3.1.0.0，没有内置SDK。手动安装SDK后新建项目却一直显示Gradle同步失败")]),t._v(" "),n("h2",{attrs:{id:"解决connection-time-out错误"}},[t._v("解决connection time out错误")]),t._v(" "),n("p",[t._v("AS自动生成的"),n("code",{pre:!0},[t._v("gradle-wrapper.properties")]),t._v("文件中有一项"),n("code",{pre:!0},[t._v("distributionUrl")]),t._v("，原本的值为"),n("code",{pre:!0},[t._v("https\\://services.gradle.org/distributions/gradle-4.4-all.zip")]),t._v("（也就是说我的gradle版本为4.4），但是登录gradle的官方网站可以发现gradle的产品下载链接更新了，把原网址中的"),n("code",{pre:!0},[t._v("services")]),t._v("改为"),n("code",{pre:!0},[t._v("downloads")]),t._v("即可")]),t._v(" "),n("p",[t._v("也就是说我的文件内容更改之后应该是")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("distributionUrl")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("://downloads.gradle.org/distributions/gradle-4.4-all.zip\n")])]),t._v(" "),n("p",[t._v("一定要注意此处"),n("code",{pre:!0},[t._v("https")]),t._v("后面的冒号前面"),n("strong",[t._v("有一个反斜杠")])]),t._v(" "),n("h2",{attrs:{id:"解决connection-refused错误"}},[t._v("解决connection refused错误")]),t._v(" "),n("p",[t._v("展开错误信息可以发现错误详情是")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("Connect to "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:1080 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/127.0.0.1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" failed: Connection refused: connect\n")])]),t._v(" "),n("p",[t._v("原因是"),n("code",{pre:!0},[t._v("gradle.properties")]),t._v("文件中使用了代理。我的"),n("code",{pre:!0},[t._v("gradle.properties")]),t._v("文件含有以下内容")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("systemProp.http.proxyHost"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1\nsystemProp.https.proxyPort"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8787")]),t._v("\nsystemProp.https.proxyHost"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1\nsystemProp.http.proxyPort"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8787")]),t._v("\n")])]),t._v(" "),n("p",[t._v("把它们全部注释掉，即在每一行前面加上井号"),n("code",{pre:!0},[t._v("#")])]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#systemProp.http.proxyHost=127.0.0.1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#systemProp.https.proxyPort=8787")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#systemProp.https.proxyHost=127.0.0.1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#systemProp.http.proxyPort=8787")]),t._v("\n")])]),t._v(" "),n("h2",{attrs:{id:"更改hosts以访问dlgooglecom"}},[t._v("更改Hosts以访问dl.google.com")]),t._v(" "),n("p",[t._v("如果没有魔法上网，上面的问题解决后会发现"),n("code",{pre:!0},[t._v("dl.google.com")]),t._v("一直访问不上")]),t._v(" "),n("p",[t._v("通过更改Hosts，把"),n("code",{pre:!0},[t._v("dl.google.com")]),t._v("的IP地址解析到国内的谷歌代理服务器即可")]),t._v(" "),n("p",[t._v("使用站长工具的"),n("a",{attrs:{href:"http://ping.chinaz.com/"}},[t._v("超级ping")]),t._v("，取消选择海外，ping一下"),n("code",{pre:!0},[t._v("dl.google.com")])]),t._v(" "),n("p",[n("img",{attrs:{src:r(440),alt:"12-3"}})]),t._v(" "),n("p",[t._v("我得到了如下结果")]),t._v(" "),n("p",[n("img",{attrs:{src:r(441),alt:"12-4"}})]),t._v(" "),n("p",[t._v("北京谷翔信息技术有限公司的BGP结点。没毛病")]),t._v(" "),n("p",[t._v("我选择了第一个IP地址，用本机的cmd来ping一下试试")]),t._v(" "),n("p",[n("img",{attrs:{src:r(442),alt:"12-5"}})]),t._v(" "),n("p",[t._v("能ping通，妙啊。接下来只要把这个IP地址写入Hosts文件就行了")]),t._v(" "),n("p",[n("strong",[t._v("管理员身份")]),t._v("启动记事本，打开Hosts，添加如下行。这里的IP地址不一定是我这个IP地址，读者可以自行选择一个自己能ping通的IP地址")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("203.208")]),t._v(".41.169 dl.google.com\n")])]),t._v(" "),n("p",[t._v("这样就可以访问"),n("code",{pre:!0},[t._v("dl.google.com")]),t._v("了")]),t._v(" "),n("h2",{attrs:{id:"最后"}},[t._v("最后")]),t._v(" "),n("p",[t._v("再次同步Gradle，可能还会出现如下错误（因为我的AS是刚装的，很多组件都没有下载）")]),t._v(" "),n("p",[n("img",{attrs:{src:r(443),alt:"12-1"}})]),t._v(" "),n("p",[t._v("因为我们已经可以访问"),n("code",{pre:!0},[t._v("dl.google.com")]),t._v("了，直接点击错误中的蓝色链接进行下载安装即可。可能会多次出现类似的组件缺失的错误，都点击蓝色链接全部下载安装即可")]),t._v(" "),n("p",[t._v("最后，Gradle终于同步成功")]),t._v(" "),n("p",[n("img",{attrs:{src:r(444),alt:"12-2"}})]),t._v(" "),n("p",[t._v("参考：")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://blog.csdn.net/Rainminism/article/details/79713788"}},[t._v("Android Studio错误：Connect to 127.0.0.1:1080 [/127.0.0.1] failed: Connection refused: connect")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://blog.csdn.net/huweijian5/article/details/45867917"}},[t._v("解决连不上dl.google.com和dl-ssl.google.com")])])])])}]};t.exports={attributes:{date:"2018-07-08T00:00:00.000Z",title:"Android Studio解决Gradle同步失败的相关问题",tags:["android"]},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},440:function(t,e,r){t.exports=r.p+"img/12-3.b74a85a.png"},441:function(t,e,r){t.exports=r.p+"img/12-4.b0c0efb.png"},442:function(t,e,r){t.exports=r.p+"img/12-5.ccbeceb.png"},443:function(t,e,r){t.exports=r.p+"img/12-1.95bd4a2.png"},444:function(t,e,r){t.exports=r.p+"img/12-2.4bcd8fe.png"}}]);