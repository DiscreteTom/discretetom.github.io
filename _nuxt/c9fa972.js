(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{1197:function(v,_){const l={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("div",{staticClass:"frontmatter-markdown"},[l("h2",{attrs:{id:"网络模式"}},[v._v("网络模式")]),v._v(" "),l("ul",[l("li",[v._v("三种网络模式\n"),l("ul",[l("li",[v._v("中心式网络\n"),l("ul",[l("li",[v._v("所有节点连到同一个中心")]),v._v(" "),l("li",[v._v("星型拓扑")])])]),v._v(" "),l("li",[v._v("分散式网络\n"),l("ul",[l("li",[v._v("多层结构，每一层一个中心")]),v._v(" "),l("li",[v._v("比如黑帮")])])]),v._v(" "),l("li",[v._v("分布式网络\n"),l("ul",[l("li",[v._v("完全 P2P")])])])])]),v._v(" "),l("li",[v._v("自然形成的网络通常是前两种网络\n"),l("ul",[l("li",[v._v("天然形成的网络也叫做：小世界网络")])])])]),v._v(" "),l("h2",{attrs:{id:"结构洞"}},[v._v("结构洞")]),v._v(" "),l("ul",[l("li",[v._v("总会有人同时处于多个圈子中，为两个圈子的人起到桥梁作用\n"),l("ul",[l("li",[v._v("这种人所处的位置被称为：结构洞 / structural hole")])])]),v._v(" "),l("li",[v._v("如果一个人起到了连接不同群体的作用，他就占据了结构洞，从而变得重要\n"),l("ul",[l("li",[v._v("比如一个跨学科的人，在工作的时候，可以作为不同部门之间沟通的桥梁")])])])]),v._v(" "),l("h2",{attrs:{id:"中心度"}},[v._v("中心度")]),v._v(" "),l("ul",[l("li",[v._v("一个用来衡量节点重要程度的指标")]),v._v(" "),l("li",[v._v("centrality")]),v._v(" "),l("li",[v._v("衡量中心度的方案\n"),l("ul",[l("li",[v._v("度中心度\n"),l("ul",[l("li",[v._v("即节点有多少连线")]),v._v(" "),l("li",[v._v("比如微博的粉丝量")])])]),v._v(" "),l("li",[v._v("特征向量中心度\n"),l("ul",[l("li",[v._v("除了节点的连线数量，同时注重连线的质量")]),v._v(" "),l("li",[v._v("相当于每个节点都有一个权重，这样就可以量化了")])])]),v._v(" "),l("li",[v._v("传播中心度\n"),l("ul",[l("li",[v._v("影响范围")]),v._v(" "),l("li",[v._v("如果一个人认识很多微博大 V，那他的影响范围会比单个大 V 还要大\n"),l("ul",[l("li",[v._v("二度人脉、三度人脉、X 度人脉")])])]),v._v(" "),l("li",[v._v("如果要量化计算，就先设定 X 度联系人，然后加权计算所有人的影响力")])])]),v._v(" "),l("li",[v._v("中介中心度\n"),l("ul",[l("li",[v._v("类似结构洞，作为桥梁")])])])])])]),v._v(" "),l("h2",{attrs:{id:"弱联系与强联系"}},[v._v("弱联系与强联系")]),v._v(" "),l("ul",[l("li",[v._v("weak ties & strong ties")]),v._v(" "),l("li",[v._v("弱联系，就是认识但是不太熟的人")]),v._v(" "),l("li",[v._v("强联系，就是熟的，平时可以经常联系的人")]),v._v(" "),l("li",[v._v("相似的人，容易形成强联系")]),v._v(" "),l("li",[v._v("弱联系可以关联不同的小群体\n"),l("ul",[l("li",[v._v("关系不强，力量不弱")])])])]),v._v(" "),l("h2",{attrs:{id:"小世界网络"}},[v._v("小世界网络")]),v._v(" "),l("ul",[l("li",[v._v("真实的人类世界就是小世界网络\n"),l("ul",[l("li",[v._v("存在边缘的节点")]),v._v(" "),l("li",[v._v("人以群分，有各种小团体")]),v._v(" "),l("li",[v._v("当然小世界网络并不是人类世界网络的唯一属性")])])]),v._v(" "),l("li",[v._v("与之对应的是：随机网络")])]),v._v(" "),l("h2",{attrs:{id:"无尺度网络"}},[v._v("无尺度网络")]),v._v(" "),l("ul",[l("li",[v._v("除了是小世界网络，人类社会还是无尺度网络")]),v._v(" "),l("li",[v._v("链接呈现幂律分布，而不是正态分布\n"),l("ul",[l("li",[v._v("大多数人的链接比较少")]),v._v(" "),l("li",[v._v("很少人的链接非常多")]),v._v(" "),l("li",[v._v("类似 82 定律")])])]),v._v(" "),l("li",[v._v("无尺度网络的形成条件\n"),l("ul",[l("li",[v._v("不断扩张")]),v._v(" "),l("li",[v._v("新加入的节点会希望和链接数多的节点建立连接")])])])]),v._v(" "),l("h2",{attrs:{id:"适应度模型"}},[v._v("适应度模型")]),v._v(" "),l("ul",[l("li",[v._v("在无尺度网络中，具有先发优势的节点会赢家通吃\n"),l("ul",[l("li",[v._v("但是现实显然不是这样，因为现实生活还需要使用适应度模型")])])]),v._v(" "),l("li",[v._v("适应度模型，简单来说就是有人喜欢追逐新体验，有新的节点可以颠覆旧的节点\n"),l("ul",[l("li",[v._v("比如拼多多、苹果手机")])])]),v._v(" "),l("li",[v._v("开辟新的赛道，实现弯道超车\n"),l("ul",[l("li",[v._v("通常，价值网络会被重构")])])])]),v._v(" "),l("h2",{attrs:{id:"价值网络"}},[v._v("价值网络")]),v._v(" "),l("ul",[l("li",[v._v("value network")]),v._v(" "),l("li",[v._v("开辟新的赛道，通常会导致上下游企业都需要重构")]),v._v(" "),l("li",[v._v("一个完全新的企业，没有上下游的绑定，在开辟新赛道的时候可能更加成功")])]),v._v(" "),l("h2",{attrs:{id:"基本再生数"}},[v._v("基本再生数")]),v._v(" "),l("ul",[l("li",[v._v("用来衡量一个感染者会让多少其他人受到感染\n"),l("ul",[l("li",[v._v("如果大于 1，疾病就会不断蔓延")]),v._v(" "),l("li",[v._v("如果小于 1，疾病就会消亡")])])]),v._v(" "),l("li",[v._v("如果一个人的人脉超过某个阈值，就会不断膨胀")]),v._v(" "),l("li",[v._v("其他事物同理，可以用来评估一个事物是否会成长或消亡")])]),v._v(" "),l("h2",{attrs:{id:"差序格局"}},[v._v("差序格局")]),v._v(" "),l("ul",[l("li",[v._v("中国人际关系模型\n"),l("ul",[l("li",[v._v("中心是我")]),v._v(" "),l("li",[v._v("我之外是家人，使用需求法则，基本有求必应")]),v._v(" "),l("li",[v._v("家人之外是熟人，使用人情法则，比较模糊")]),v._v(" "),l("li",[v._v("熟人之外是弱关系，使用公平法则，比较精确，讲究契约")])])]),v._v(" "),l("li",[v._v("如果想和陌生人建立关系，显然应该基于利益交换\n"),l("ul",[l("li",[v._v("“有什么我可以帮你的”")])])]),v._v(" "),l("li",[v._v("如果想进一步把弱关系变为强关系，就可以做得更多，形成隐形人情债，打破公平法则")])]),v._v(" "),l("h2",{attrs:{id:"非正式组织"}},[v._v("非正式组织")]),v._v(" "),l("ul",[l("li",[v._v("以情感、兴趣、爱好和需求为中心建立的组织")]),v._v(" "),l("li",[v._v("没有正式文件")]),v._v(" "),l("li",[v._v("除了正式组织，也可以通过非正式组织，建立人脉")])])])}]};v.exports={attributes:{title:"社会网络学",description:"三种网络模式、结构洞、中心度、弱联系、小世界网络、无尺度网络、适应度模型、价值网络、基本再生树、差序格局、非正式组织"},vue:{render:l.render,staticRenderFns:l.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=l.render,this.$options.staticRenderFns=l.staticRenderFns}}}}}}]);