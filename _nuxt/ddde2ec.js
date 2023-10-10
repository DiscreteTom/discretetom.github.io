(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{1306:function(e,t){const n={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"概述"}},[e._v("概述")]),e._v(" "),n("p",[e._v("本文是阅读"),n("a",{attrs:{href:"http://www.lecloud.net/tagged/scalability/chrono"}},[e._v("这些文章")]),e._v("时整理的笔记。（似乎需要魔法上网才能访问原文")]),e._v(" "),n("h2",{attrs:{id:"镜像与副本"}},[e._v("镜像与副本")]),e._v(" "),n("p",[e._v("因为负载均衡的存在，用户的请求可能被分发到不同的服务器，但是得到的响应应该是与后端服务器无关的。所以"),n("strong",[e._v("可扩展性的一个原则：业务逻辑服务器应仅保存相同的业务逻辑代码而不应在其存储设备上保存任何用户信息")]),e._v("（存储设备包括内存和外存，用户信息包括session、用户头像等")]),e._v(" "),n("p",[e._v("session信息应该保存在一个所有业务逻辑服务器都能够访问的地方，比如一个"),n("strong",[e._v("非业务逻辑")]),e._v("的数据库服务器或某个"),n("strong",[e._v("非业务逻辑")]),e._v("服务器的cache（基于redis/memcached）")]),e._v(" "),n("p",[e._v("使用"),n("a",{attrs:{href:"https://capistranorb.com/"}},[e._v("Capistrano")]),e._v("实现自动化在所有服务器上同步部署相同代码以保证业务逻辑正确性。")]),e._v(" "),n("p",[e._v("因为所有业务逻辑服务器的代码相同，我们可以保存服务器镜像(image, 在AWS中有现成的服务AMI: Amazon Machine Image)，然后快速克隆出多个业务逻辑服务器。")]),e._v(" "),n("h2",{attrs:{id:"使用nosql"}},[e._v("使用NoSQL")]),e._v(" "),n("p",[e._v("在上文基础上，业务逻辑服务器可以很快的水平扩展，数据库很快变成了性能瓶颈")]),e._v(" "),n("p",[e._v("优化方案：")]),e._v(" "),n("ol",[n("li",[e._v("雇佣一个DBA(Database Administrator)，启动master-slave架构，master处理write请求，slave处理read请求，给master添加大内存和cache。一段时间过后，数据量更大，DBA提出使用数据库分区、非规范化、SQL tuning等方案使维护数据库的工作越发复杂。在数据量大了之后进行上述改变的成本会非常高，不如在数据量还很小的时候迁移到下述方案2")]),e._v(" "),n("li",[e._v("非规范化数据库，放弃一切SQL请求中的join操作，把SQL当作NoSQL用，或者直接使用NoSQL比如MongoDB或CouchDB。SQL中的join操作需要在业务逻辑代码中完成。")])]),e._v(" "),n("h2",{attrs:{id:"cache"}},[e._v("cache")]),e._v(" "),n("p",[e._v("此处的cache指的是内存中的缓存，即Redis&Memcached。"),n("strong",[e._v("永远不要使用基于文件的cache")]),e._v("（基于文件的cache与动态内容静态化不同。此处基于文件的cache指把从数据库获取的内容暂时保存到文件中")]),e._v(" "),n("p",[e._v("cache使用key-value对存储，作为业务逻辑与持久化的中间层")]),e._v(" "),n("p",[e._v("两种缓存策略：")]),e._v(" "),n("ol",[n("li",[e._v("缓存数据库query - 这是最常用的缓存策略。"),n("code",{pre:!0},[e._v("key-value")]),e._v("分别是"),n("code",{pre:!0},[e._v("hash后的query语句-query结果")]),e._v("。缺点：难以应对数据库数据的改变，可能需要设置过期时间")]),e._v(" "),n("li",[e._v("缓存object - "),n("strong",[e._v("推荐使用此方案")]),e._v("。把代码中的对象（object）进行缓存。cache在访问数据库之后首先构造object，然后缓存这个object。参考object：用户session（不要使用数据库保存session）、完全渲染的博客文章、活动流(activity streams)、用户的好友关系网（像QQ这样的社交应用当然不会每次拉取好友动态就访问数据库）。")])]),e._v(" "),n("h2",{attrs:{id:"异步"}},[e._v("异步")]),e._v(" "),n("p",[e._v("如果某个操作非常费时，用户就需要一直等待。服务器长时间无响应显然不是一个好现象。")]),e._v(" "),n("p",[e._v("解决方案：")]),e._v(" "),n("ol",[n("li",[e._v("提前进行耗时的操作，用户请求的时候费时操作已经完成。比如把动态内容转为静态内容（比如提前渲染静态HTML页面然后保存到AWS S3或CDN上）")]),e._v(" "),n("li",[e._v("有时候耗时的操作无法完全被预见，比如用户请求的结果需要根据用户的请求动态生成。这种情况服务器可以设置一个异步事件队列，接受请求之后立即返回“your job is running”。客户端不断请求以获取服务器状态，在任务结束时获得结果。")])]),e._v(" "),n("h2",{attrs:{id:"参考"}},[e._v("参考")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.lecloud.net/tagged/scalability"}},[e._v("scalability - Le Cloud Blog")])])])])}]};e.exports={attributes:{date:"2019-10-12T00:00:00.000Z",title:"系统设计中的可扩展性-part2",description:"镜像与副本、NoSQL、cache、异步",tags:["系统设计"]},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);