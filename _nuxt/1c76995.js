(window.webpackJsonp=window.webpackJsonp||[]).push([[61,847,848,849,850,851],{1035:function(v,_,t){v.exports=t.p+"img/1-1.e715799.png"},1036:function(v,_,t){v.exports=t.p+"img/1-2.45d93fd.png"},1037:function(v,_,t){v.exports=t.p+"img/1-3.640582d.png"},1038:function(v,_,t){v.exports=t.p+"img/1-4.5769210.png"},1039:function(v,_,t){v.exports=t.p+"img/1-5.d13ea24.png"},1332:function(v,_,t){const l={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("div",{staticClass:"frontmatter-markdown"},[l("h2",{attrs:{id:"基础知识"}},[v._v("基础知识")]),v._v(" "),l("ul",[l("li",[v._v("通信：传递"),l("strong",[v._v("消息")]),v._v("(message)中的"),l("strong",[v._v("信息")]),v._v("(information)")]),v._v(" "),l("li",[v._v("通信系统：完成通信过程的全部设备和传输介质")]),v._v(" "),l("li",[v._v("数字信号\n"),l("ul",[l("li",[v._v("状态数有限的信号")])])]),v._v(" "),l("li",[v._v("模拟信号\n"),l("ul",[l("li",[v._v("状态数无限的信号")])])]),v._v(" "),l("li",[v._v("基带信号 - 低频成分较多，未调制的初始信号")]),v._v(" "),l("li",[v._v("已调信号 - 适合信道传输，又称 "),l("strong",[v._v("频带信号/带通信号")]),v._v("，携带消息多，适合在信道传输")])]),v._v(" "),l("h2",{attrs:{id:"通信系统一般模型"}},[v._v("通信系统一般模型")]),v._v(" "),l("p",[l("img",{attrs:{src:t(1035),alt:"1-1"}})]),v._v(" "),l("ul",[l("li",[v._v("信源/信宿\n"),l("ul",[l("li",[v._v("信源完成非电量->电量的转换。信宿反之\n"),l("ul",[l("li",[v._v("模拟信源，输出连续模拟信号\n"),l("ul",[l("li",[v._v("话筒")]),v._v(" "),l("li",[v._v("摄像机")])])]),v._v(" "),l("li",[v._v("数字信源，输出离散数字信号\n"),l("ul",[l("li",[v._v("键盘")])])])])])])]),v._v(" "),l("li",[v._v("发送/接收设备\n"),l("ul",[l("li",[v._v("发送设备使原始的电信号变成适合在信道中传输的电信号。接收设备反之\n"),l("ul",[l("li",[v._v("很笼统的概念，信源和信道之间的所有设备都归为此类，功能繁多\n"),l("ul",[l("li",[v._v("调制解调")]),v._v(" "),l("li",[v._v("加密解密")]),v._v(" "),l("li",[v._v("编码")]),v._v(" "),l("li",[v._v("复用")]),v._v(" "),l("li",[v._v("…")])])])])])])]),v._v(" "),l("li",[v._v("信道\n"),l("ul",[l("li",[v._v("传输介质")]),v._v(" "),l("li",[v._v("会对信号造成损耗和干扰\n"),l("ul",[l("li",[v._v("无线信道\n"),l("ul",[l("li",[l("strong",[v._v("自由空间")])])])]),v._v(" "),l("li",[v._v("有线信道\n"),l("ul",[l("li",[v._v("光纤")]),v._v(" "),l("li",[v._v("电缆")]),v._v(" "),l("li",[v._v("…")])])])])])])])]),v._v(" "),l("h2",{attrs:{id:"模拟通信系统模型"}},[v._v("模拟通信系统模型")]),v._v(" "),l("p",[l("img",{attrs:{src:t(1036),alt:"1-2"}})]),v._v(" "),l("p",[v._v("包含两种重要变换：")]),v._v(" "),l("ul",[l("li",[v._v("消息<->基带信号（信源与信宿的工作")]),v._v(" "),l("li",[v._v("基带信号<->已调信号（调制解调的工作")])]),v._v(" "),l("h2",{attrs:{id:"数字通信系统模型"}},[v._v("数字通信系统模型")]),v._v(" "),l("p",[l("img",{attrs:{src:t(1037),alt:"1-3"}})]),v._v(" "),l("p",[v._v("相较于一般模型，添加了如下设备")]),v._v(" "),l("ul",[l("li",[v._v("信源编/解码器 - 模数转换 数据压缩 提高传输效率")]),v._v(" "),l("li",[v._v("加/解密器 - 保密传输 提高安全性")]),v._v(" "),l("li",[v._v("信道编/解码器 - 差错控制 提高抗干扰能力")]),v._v(" "),l("li",[v._v("调制解调器 - 使信号适合传输 复用")]),v._v(" "),l("li",[v._v("同步系统 - 保证收发双方步调一致\n"),l("ul",[l("li",[v._v("不同的同步器在模型中的位置不同，所以此处没有标出")]),v._v(" "),l("li",[v._v("分类\n"),l("ul",[l("li",[v._v("载波同步")]),v._v(" "),l("li",[v._v("码元同步")]),v._v(" "),l("li",[v._v("…")])])])])])]),v._v(" "),l("p",[v._v("上述模型是一般化模型，"),l("strong",[v._v("实际使用时可能不包含以上所有设备")])]),v._v(" "),l("blockquote",[l("p",[v._v("数字通信系统也可以使用基带通信，即不使用过多的调制，其模型和一般模型相似")])]),v._v(" "),l("p",[l("strong",[v._v("信源和信宿可以是数字的也可以是模拟的")])]),v._v(" "),l("h2",{attrs:{id:"数字通信特点"}},[v._v("数字通信特点")]),v._v(" "),l("ul",[l("li",[v._v("抗干扰性强\n"),l("ul",[l("li",[v._v("使用再生中继，噪声不积累")])])]),v._v(" "),l("li",[v._v("传输差错可控\n"),l("ul",[l("li",[v._v("能够使用差错控制策略改善传输质量")])])]),v._v(" "),l("li",[v._v("便于是用那个数学进行信号处理、变换、存储、复用")]),v._v(" "),l("li",[v._v("支持各种消息的传递")]),v._v(" "),l("li",[v._v("保密性强")]),v._v(" "),l("li",[v._v("易于集成化、小型化")]),v._v(" "),l("li",[l("strong",[v._v("缺点")]),v._v("：频带利用率低，对同步要求高，设备复杂")])]),v._v(" "),l("h2",{attrs:{id:"通信系统分类"}},[v._v("通信系统分类")]),v._v(" "),l("ul",[l("li",[v._v("单工、半双工与全双工\n"),l("ul",[l("li",[v._v("单工 - 仅单向传输")]),v._v(" "),l("li",[v._v("半双工 - 可双向传输，但不能同时收发消息")]),v._v(" "),l("li",[v._v("全双工 - 完全双向传输")])])]),v._v(" "),l("li",[v._v("并行传输与串行传输")]),v._v(" "),l("li",[v._v("数字与模拟")]),v._v(" "),l("li",[v._v("有线与无线")]),v._v(" "),l("li",[v._v("…")])]),v._v(" "),l("h2",{attrs:{id:"信息及其度量"}},[v._v("信息及其度量")]),v._v(" "),l("h3",{attrs:{id:"信息量函数"}},[v._v("信息量函数")]),v._v(" "),l("p",[v._v("信息量函数"),l("code",{pre:!0},[v._v("I = F(P(x))")])]),v._v(" "),l("ul",[l("li",[v._v("I为信息量")]),v._v(" "),l("li",[v._v("P(x)为事件x发生的概率")])]),v._v(" "),l("p",[v._v("可以看出 "),l("strong",[v._v("信息量只与事件发生概率相关")]),v._v("，与其他无关")]),v._v(" "),l("h3",{attrs:{id:"离散消息的信息量"}},[v._v("离散消息的信息量")]),v._v(" "),l("p",[l("code",{pre:!0},[v._v("I = -loga(P(x))")])]),v._v(" "),l("ul",[l("li",[v._v("a = 2时，信息量单位为比特bit")]),v._v(" "),l("li",[v._v("a = e时，信息量单位为奈特nit")]),v._v(" "),l("li",[v._v("a = 10时，信息量单位为哈特来")])]),v._v(" "),l("p",[v._v("注意："),l("strong",[v._v("信息量(bit)和数据量(bit)不同")])]),v._v(" "),l("h3",{attrs:{id:"离散信源的平均信息量"}},[v._v("离散信源的平均信息量")]),v._v(" "),l("p",[v._v("也称为"),l("strong",[v._v("熵")]),v._v("，符号为H。值为离散消息出现的概率乘离散消息的信息量，即")]),v._v(" "),l("p",[l("img",{attrs:{src:t(1038),alt:"1-4"}})]),v._v(" "),l("p",[v._v("熵的物理意义为信源不确定性。"),l("strong",[v._v("所有符号等概率出现时不确定性最大")]),v._v("，假设所有符号出现概率为"),l("code",{pre:!0},[v._v("1/M")]),v._v("，则熵为")]),v._v(" "),l("pre",{staticClass:"language-bash"},[l("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("Hmax "),l("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" log2M"),l("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("b/符号"),l("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\n")])]),v._v(" "),l("h3",{attrs:{id:"总信息量"}},[v._v("总信息量")]),v._v(" "),l("p",[v._v("设信源的熵为"),l("code",{pre:!0},[v._v("H(x)")]),v._v("，信源发送一条含n个符号的消息，平均总信息量为"),l("code",{pre:!0},[v._v("I = nH(x)")])]),v._v(" "),l("h2",{attrs:{id:"通信系统性能指标"}},[v._v("通信系统性能指标")]),v._v(" "),l("p",[v._v("主要指标为：")]),v._v(" "),l("ul",[l("li",[v._v("有效性\n"),l("ul",[l("li",[v._v("占用的信道资源")])])]),v._v(" "),l("li",[v._v("可靠性\n"),l("ul",[l("li",[v._v("信息的准确程度")])])])]),v._v(" "),l("h3",{attrs:{id:"模拟通信系统指标"}},[v._v("模拟通信系统指标")]),v._v(" "),l("ul",[l("li",[v._v("有效性指标 - 占用带宽\n"),l("ul",[l("li",[v._v("越小越好")]),v._v(" "),l("li",[v._v("多路复用时，复用越多，有效性越好")])])]),v._v(" "),l("li",[v._v("可靠性指标 - "),l("strong",[v._v("输出信噪比")]),l("code",{pre:!0},[v._v("So/No")])])]),v._v(" "),l("h3",{attrs:{id:"数字通信系统指标"}},[v._v("数字通信系统指标")]),v._v(" "),l("ul",[l("li",[v._v("有效性指标 - "),l("strong",[v._v("频带利用率")]),v._v("，即单位带宽（每赫兹）内的传输速率\n"),l("ul",[l("li",[l("img",{attrs:{src:t(1039),alt:"1-5"}})]),v._v(" "),l("li",[v._v("RB为码元速率，即传输符号的速率（波特率），"),l("code",{pre:!0},[v._v("RB = 1 / TB")]),v._v("，"),l("strong",[v._v("只和时间（码元宽度）TB有关，与进制数无关")])]),v._v(" "),l("li",[v._v("Rb为信息速率，即传输bit的速率（比特率），"),l("strong",[v._v("和码元宽度、进制数有关")])]),v._v(" "),l("li",[v._v("假设每个码元的平均信息量为H，则"),l("code",{pre:!0},[v._v("Rb = RB * H")])])])]),v._v(" "),l("li",[v._v("可靠性指标 - 差错概率，包括"),l("strong",[v._v("误码率")]),v._v("、"),l("strong",[v._v("误信率")]),v._v("等\n"),l("ul",[l("li",[v._v("误码率 - 接收错误的码元在所有传输码元中的比例Pe")]),v._v(" "),l("li",[v._v("误信率（误比特率）Pb")])])])])])}]};v.exports={attributes:{layout:"collection",title:"绪论",collection:"PrinciplesOfCommunications"},vue:{render:l.render,staticRenderFns:l.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=l.render,this.$options.staticRenderFns=l.staticRenderFns}}}}}}]);