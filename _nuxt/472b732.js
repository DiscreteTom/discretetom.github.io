(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{1269:function(v,_){const t={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",{staticClass:"frontmatter-markdown"},[t("h2",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),t("ul",[t("li",[v._v("多人游戏中，客户端之间的通信大多以同步状态为主要目标")]),v._v(" "),t("li",[v._v("但是因为延迟的存在，我们几乎不可能做到真正的同步，只能尽可能模拟其他玩家的动作")]),v._v(" "),t("li",[v._v("不同的同步方式会有不同的设计思路和优缺点")]),v._v(" "),t("li",[v._v("同一个游戏可能使用多种不同的同步技术，来同步不同类型的消息")])]),v._v(" "),t("h2",{attrs:{id:"状态同步"}},[v._v("状态同步")]),v._v(" "),t("h3",{attrs:{id:"流程"}},[v._v("流程")]),v._v(" "),t("ol",[t("li",[v._v("客户端把操作上传到服务器")]),v._v(" "),t("li",[v._v("服务器收到客户端操作后，根据当前状态，进行一定的计算，得到新的状态")]),v._v(" "),t("li",[v._v("服务器广播新状态给所有客户端")]),v._v(" "),t("li",[v._v("客户端更新本地状态")])]),v._v(" "),t("h3",{attrs:{id:"特点"}},[v._v("特点")]),v._v(" "),t("ul",[t("li",[v._v("服务端可以进行实时操作校验，实时发现异常（比如外挂）")]),v._v(" "),t("li",[v._v("客户端之间的同步并不严谨，仅能保证最终一致性")]),v._v(" "),t("li",[v._v("玩家之间不需要相互等待")]),v._v(" "),t("li",[v._v("玩家操作会被服务器消费，变为服务器状态的更新，然后广播状态给客户端")]),v._v(" "),t("li",[v._v("如果服务端需要复杂的处理逻辑，可能会导致延迟变高\n"),t("ul",[t("li",[v._v("可以使用优化方案，比如客户端插值预测、延迟补偿等技术，降低延迟")])])]),v._v(" "),t("li",[v._v("如果服务端需要保存状态，建议使用状态同步。常见于FPS、回合制、RPG等")])]),v._v(" "),t("h3",{attrs:{id:"延迟补偿"}},[v._v("延迟补偿")]),v._v(" "),t("p",[v._v("以FPS游戏为例，服务器需要保存玩家在各个时刻的位置（状态）。当收到客户端的射击事件时，在服务端把所有玩家回退到射击发生的时刻，校验设计是否命中。校验完毕后再把状态还原到当前时刻的状态。")]),v._v(" "),t("h2",{attrs:{id:"实时广播同步"}},[v._v("实时广播同步")]),v._v(" "),t("h3",{attrs:{id:"流程-1"}},[v._v("流程")]),v._v(" "),t("ol",[t("li",[v._v("客户端处理操作，修改本地状态（比如把按键操作响应为移动速度变更）")]),v._v(" "),t("li",[v._v("客户端将状态的变更信息提交给服务器")]),v._v(" "),t("li",[v._v("服务器广播状态给所有客户端")])]),v._v(" "),t("h3",{attrs:{id:"特点-1"}},[v._v("特点")]),v._v(" "),t("ul",[t("li",[v._v("超高速")]),v._v(" "),t("li",[v._v("无法同步校验操作，但是可以异步校验")]),v._v(" "),t("li",[v._v("客户端根据玩家操作，计算本地状态，然后交给服务器广播")]),v._v(" "),t("li",[v._v("通常用来同步FPS游戏、赛车游戏中玩家的位置（移动速度）和角度（旋转速度）")])]),v._v(" "),t("h2",{attrs:{id:"帧同步"}},[v._v("帧同步")]),v._v(" "),t("blockquote",[t("p",[v._v("又叫锁步模式、囚徒模式，英文：Lockstep，齐步行军")])]),v._v(" "),t("blockquote",[t("p",[v._v("这里讲的是最早期的原始版本lockstep: 确定性锁步同步(Deterministic Lockstep)")])]),v._v(" "),t("h3",{attrs:{id:"流程-2"}},[v._v("流程")]),v._v(" "),t("ol",[t("li",[v._v("服务器等待一段固定的时间（假设客户端帧率为30fps，那就等待1/30秒）")]),v._v(" "),t("li",[v._v("服务器将这一段时间内收集到的来自客户端的操作广播给客户端。如果没有收集到操作，也要广播一个空的指令")]),v._v(" "),t("li",[v._v("客户端收到服务器消息之后才可以进行下一帧的行动（即调用update函数）")])]),v._v(" "),t("h3",{attrs:{id:"特点-2"}},[v._v("特点")]),v._v(" "),t("ul",[t("li",[v._v("同步操作，而不是同步状态")]),v._v(" "),t("li",[v._v("由服务器驱动客户端的时间变换")]),v._v(" "),t("li",[v._v("可以同步校验操作")]),v._v(" "),t("li",[v._v("所有客户端严格同步，统一按照服务器的时钟驱动，所有客户端表现完全一样")]),v._v(" "),t("li",[v._v("像拳皇、FPS、RTS、飞行射击之类的对单帧操作极其敏感的游戏可以使用此方案")]),v._v(" "),t("li",[v._v("通常所有客户端会使用相同的帧率")]),v._v(" "),t("li",[v._v("一个客户端卡顿时，所有客户端可能都要等待，所以网络不好时可能客户端帧率下降")]),v._v(" "),t("li",[v._v("不一定要同步所有帧\n"),t("ul",[t("li",[v._v("可以由客户端ping服务器，服务器根据客户端最大延迟，设置【关键帧】，然后在关键帧进行同步")]),v._v(" "),t("li",[v._v("比如所有客户端的最大双向延迟为100ms，客户端帧率为30fps，则每3帧同步一次。假设第1帧客户端给服务器发操作，那么第4帧会收到服务器的update指令，而客户端正好该发第二次操作，这样游戏就可以流畅运行")]),v._v(" "),t("li",[v._v("所以网络通信频率和客户端实际表现的帧率可能不同。可能客户端画面是60fps，而网络通信是30次/秒")]),v._v(" "),t("li",[v._v("这就要求客户端的逻辑和表现分离")])])]),v._v(" "),t("li",[v._v("如果客户端断线重连，由于服务器没有【当前状态】的概念，可能需要从第0帧追到当前帧\n"),t("ul",[t("li",[v._v("可以结合其他同步方式，在服务器端保存状态")])])])]),v._v(" "),t("h3",{attrs:{id:"外挂与反外挂"}},[v._v("外挂与反外挂")]),v._v(" "),t("ul",[t("li",[v._v("常见外挂方案：lockahead cheats\n"),t("ul",[t("li",[v._v("客户端假装自己网络不好，使服务器设置一个比较长的时间窗口")]),v._v(" "),t("li",[v._v("客户端在收到其他玩家在当前帧的操作之后，再发送当前帧的操作")])])]),v._v(" "),t("li",[v._v("防御lockahead cheats，可以使用Lockstep protocol\n"),t("ul",[t("li",[v._v("所有玩家先发送操作的哈希(预提交单向哈希, secure on-way commitment hash)")]),v._v(" "),t("li",[v._v("收到所有玩家的哈希之后，再明文发送操作")]),v._v(" "),t("li",[v._v("收到操作后，校验操作和哈希是否匹配")]),v._v(" "),t("li",[v._v("此方案会消耗性能和带宽")])])])]),v._v(" "),t("h3",{attrs:{id:"bucket-synchronization"}},[v._v("Bucket Synchronization")]),v._v(" "),t("ul",[t("li",[v._v("也叫【乐观帧锁定】，是一个帧同步的优化方案")]),v._v(" "),t("li",[v._v("把时间按照固定长度划分为多个bucket")]),v._v(" "),t("li",[v._v("客户端的指令会被收集到bucket中，但是不立即执行，而是推迟一段时间（约等于网络延迟），等待其他玩家的Bucket到来\n"),t("ul",[t("li",[v._v("如果超过延迟了还没收到其他玩家的bucket，可以放弃处理当前操作，也可以保存起来用于外插值(Extrapolation)")])])]),v._v(" "),t("li",[v._v("优点是不用像传统lockstep一样严格等待其他玩家的命令，而是允许推迟处理本地命令，以保证其他玩家的命令和本地命令一起执行\n"),t("ul",[t("li",[v._v("比如本地在第一帧发生了玩家的操作，但是并不执行。当第4帧收到了其他玩家的操作，再一起执行")])])])]),v._v(" "),t("h3",{attrs:{id:"pipelined-lockstep-protocol"}},[v._v("Pipelined Lockstep Protocol")]),v._v(" "),t("ul",[t("li",[v._v("基于流水线思想优化Lockstep协议")]),v._v(" "),t("li",[v._v("即：当操作不可能导致冲突时，客户端就可以连续发送自己的指令而不需要等待其他人的消息")]),v._v(" "),t("li",[v._v("比如，假设一个游戏有7个格子，玩家A/B分别站在最左/最右的格子中，每次只能移动一格，那么A/B至少可以连续发送3个指令而不需要等待其他玩家的数据")])]),v._v(" "),t("h3",{attrs:{id:"time-warp"}},[v._v("Time Warp")]),v._v(" "),t("ul",[t("li",[v._v("时间扭曲")]),v._v(" "),t("li",[v._v("客户端需要保存历史操作和对应的游戏状态")]),v._v(" "),t("li",[v._v("当收到一个延迟比较高的、来自过去的操作时，根据当时的状态，重放操作，并更新当前状态")])]),v._v(" "),t("h2",{attrs:{id:"优化"}},[v._v("优化")]),v._v(" "),t("ul",[t("li",[v._v("增加客户端计算量，减少服务器计算量\n"),t("ul",[t("li",[v._v("比如客户端计算，服务端校验")])])]),v._v(" "),t("li",[v._v("压缩数据，减少网络传输")]),v._v(" "),t("li",[v._v("解耦业务和校验\n"),t("ul",[t("li",[v._v("比如业务服务器仅负责转发数据，不校验，设置专门的校验服务进行异步数据校验")]),v._v(" "),t("li",[v._v("准实时发现外挂")])])]),v._v(" "),t("li",[v._v("客户端预测未来几帧")]),v._v(" "),t("li",[v._v("如果一个操作会导致几百个单位的移动（比如RTS游戏），那就不要同步状态了，同步操作吧")]),v._v(" "),t("li",[v._v("如果同步操作而不是同步状态，由于不同的设备，精度不同，建议不要传输小数，改为传输整数，以保证相同的操作可以导致相同的状态\n"),t("ul",[t("li",[v._v("所以需要基于整数实现浮点数、向量、导航、碰撞框架等")])])]),v._v(" "),t("li",[v._v("游戏开始时同步随机数种子，以保证相同的操作可以导致相同的状态")]),v._v(" "),t("li",[v._v("如果延迟要求很高，可以使用UDP而不是TCP。可以多采样几个数据包，以避免抖动\n"),t("ul",[t("li",[v._v("现在已经存在很多可靠的UDP传输协议（Reliable UDP, RUDP），比如enet, kcp, quic, udt等")]),v._v(" "),t("li",[v._v("国内主流的是kcp")])])])]),v._v(" "),t("h2",{attrs:{id:"参考"}},[v._v("参考")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://jianshu.com/p/8cca5458c45b"}},[v._v("游戏帧同步的流程与实现")])]),v._v(" "),t("li",[t("a",{attrs:{href:"https://bilibili.com/read/cv7375199"}},[v._v("浅谈《帧同步网络游戏》之“框架”实现思路")])]),v._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/165293116"}},[v._v("关于“帧同步”说法的历史由来")])]),v._v(" "),t("li",[t("a",{attrs:{href:"http://luzexi.com/2019/07/14/Unity3D%E9%AB%98%E7%BA%A7%E7%BC%96%E7%A8%8B%E4%B9%8B%E8%BF%9B%E9%98%B6%E4%B8%BB%E7%A8%8B-%E7%BD%91%E7%BB%9C%E5%B1%826"}},[v._v("《Unity3D高级编程之进阶主程》第六章，网络层（六） - 网络同步解决方案")])]),v._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/130702310"}},[v._v("细谈网络同步再游戏历史中的发展变化（上）")])]),v._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/164686867"}},[v._v("细谈网络同步再游戏历史中的发展变化（中）")])]),v._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/336869551"}},[v._v("细谈网络同步再游戏历史中的发展变化（下）")])])])])}]};v.exports={attributes:{title:"多人游戏中的网络同步方案",description:"状态同步、实时广播同步、帧同步",tags:["Gaming / 游戏"]},vue:{render:t.render,staticRenderFns:t.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=t.render,this.$options.staticRenderFns=t.staticRenderFns}}}}}}]);