(window.webpackJsonp=window.webpackJsonp||[]).push([[23,998,999,1e3,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012],{1117:function(v,_,t){v.exports=t.p+"img/6-1.4dfe621.png"},1118:function(v,_,t){v.exports=t.p+"img/6-2.c5f2085.png"},1119:function(v,_,t){v.exports=t.p+"img/6-3.224af69.png"},1120:function(v,_,t){v.exports=t.p+"img/6-4.a8d7b6f.png"},1121:function(v,_,t){v.exports=t.p+"img/6-5.c758143.png"},1122:function(v,_,t){v.exports=t.p+"img/6-9.76e28ce.png"},1123:function(v,_,t){v.exports=t.p+"img/6-6.501a359.png"},1124:function(v,_,t){v.exports=t.p+"img/6-7.c5f10b2.png"},1125:function(v,_,t){v.exports=t.p+"img/6-8.119e582.png"},1126:function(v,_,t){v.exports=t.p+"img/6-10.3228071.png"},1127:function(v,_,t){v.exports=t.p+"img/6-11.3729588.png"},1128:function(v,_,t){v.exports=t.p+"img/6-12.de2bc0e.png"},1129:function(v,_,t){v.exports=t.p+"img/6-13.851c475.png"},1130:function(v,_,t){v.exports=t.p+"img/6-14.c53e2e9.png"},1131:function(v,_,t){v.exports=t.p+"img/6-15.98071c5.png"},1432:function(v,_,t){const l={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("div",{staticClass:"frontmatter-markdown"},[l("h2",{attrs:{id:"基带信号波形"}},[v._v("基带信号波形")]),v._v(" "),l("p",[l("strong",[v._v("占空比")]),v._v("为脉冲宽度τ/码元宽度TB")]),v._v(" "),l("ul",[l("li",[v._v("单极性不归零码，1-正电位，0-零电位\n"),l("ul",[l("li",[v._v("优点 - 易于产生")]),v._v(" "),l("li",[v._v("缺点 - 存在直流和低频分量")]),v._v(" "),l("li",[v._v("占空比100%")]),v._v(" "),l("li",[l("img",{attrs:{src:t(1117),alt:"6-1"}})])])]),v._v(" "),l("li",[v._v("双极性不归零码，1-正电位，0-负电位\n"),l("ul",[l("li",[v._v("等概时无直流分量，抗噪能力优于单极性不归零")]),v._v(" "),l("li",[v._v("占空比100%")]),v._v(" "),l("li",[l("img",{attrs:{src:t(1118),alt:"6-2"}})])])]),v._v(" "),l("li",[v._v("单极性归零码，1-正脉冲，0-零电位\n"),l("ul",[l("li",[v._v("含有丰富的位同步信息，是其他码型提取同步信息常用的过渡波形")]),v._v(" "),l("li",[v._v("占空比<100%")]),v._v(" "),l("li",[l("img",{attrs:{src:t(1119),alt:"6-3"}})])])]),v._v(" "),l("li",[v._v("双极性归零码，1-正脉冲，0-负脉冲\n"),l("ul",[l("li",[l("img",{attrs:{src:t(1120),alt:"6-4"}})])])]),v._v(" "),l("li",[v._v("差分码（相对码），（以传号差分波为例）1-跳变，0-保持\n"),l("ul",[l("li",[v._v("可以消除设备初态影响")]),v._v(" "),l("li",[v._v("可以分为传号差分波（跳变表示1）和空号差分波（跳变表示0）")]),v._v(" "),l("li",[l("img",{attrs:{src:t(1121),alt:"6-5"}})])])])]),v._v(" "),l("h2",{attrs:{id:"基带传输码型"}},[v._v("基带传输码型")]),v._v(" "),l("p",[v._v("原则：")]),v._v(" "),l("ul",[l("li",[v._v("不含直流分量，低频分量小")]),v._v(" "),l("li",[v._v("有丰富的定时信息")]),v._v(" "),l("li",[v._v("功率谱主瓣宽度窄，节省传输频带")]),v._v(" "),l("li",[v._v("不受信息源统计特性影响")]),v._v(" "),l("li",[v._v("有一定的自检能力")]),v._v(" "),l("li",[v._v("编译码简单，降低延时和成本")])]),v._v(" "),l("p",[v._v("常用的：")]),v._v(" "),l("ul",[l("li",[v._v("AMI码（传号交替反转码）\n"),l("ul",[l("li",[v._v("规则 - 1（传号）使用+1和-1交替，0（空号）使用0")]),v._v(" "),l("li",[v._v("译码 - 把所有非0译为1")]),v._v(" "),l("li",[v._v("无直流分量，高、低频分量小")]),v._v(" "),l("li",[v._v("编译码简单")]),v._v(" "),l("li",[v._v("具有宏观检错能力（因为1的正负交替")]),v._v(" "),l("li",[v._v("缺点：连续的0难以获取定时信号")])])]),v._v(" "),l("li",[v._v("HDB3码（3阶高密度双极性码\n"),l("ul",[l("li",[v._v("规则 - 在AMI的基础上，把四个连续的0使用"),l("code",{pre:!0},[v._v("000V")]),v._v("或"),l("code",{pre:!0},[v._v("B00V")]),v._v("替代。破坏脉冲V（取值可正可负）和前一个非0脉冲极性相同，且相邻的V极性必须交替。如果不能实现，则使用B（取值和后面的V一致）解决V的冲突")]),v._v(" "),l("li",[v._v("译码 - 如果三个0前后的脉冲同极性，则为"),l("code",{pre:!0},[v._v("000V")]),v._v("，将其译为"),l("code",{pre:!0},[v._v("0000")]),v._v("。如果两个连续0的前后极性相同，则为"),l("code",{pre:!0},[v._v("B00V")]),v._v("，将其译为"),l("code",{pre:!0},[v._v("0000")]),v._v("。然后把所有非0译为1")]),v._v(" "),l("li",[v._v("保留了AMI的优点，且连续0的个数不超过3，有利于定时信息的提取")])])])]),v._v(" "),l("p",[l("img",{attrs:{src:t(1122),alt:"6-9"}})]),v._v(" "),l("h2",{attrs:{id:"基带信号的频谱特征"}},[v._v("基带信号的频谱特征")]),v._v(" "),l("p",[v._v("公式略")]),v._v(" "),l("p",[v._v("令g1(t)为0码元以概率P出现，g2(t)为1码元以概率(1-P)出现")]),v._v(" "),l("p",[v._v("结论：")]),v._v(" "),l("ul",[l("li",[v._v("二进制随机脉冲序列的功率谱包括"),l("strong",[v._v("连续谱")]),l("code",{pre:!0},[v._v("Pu(f)")]),v._v("和"),l("strong",[v._v("离散谱")]),l("code",{pre:!0},[v._v("Pv(f)")])]),v._v(" "),l("li",[v._v("连续谱总是存在，形状取决于g1(t)和g2(t)的频谱与概率P")]),v._v(" "),l("li",[v._v("离散谱通常也存在，只有"),l("code",{pre:!0},[v._v("P=1/(1-g1(t)/g2(t))")]),v._v("的时候离散谱消失，如"),l("strong",[v._v("等概双极性")]),v._v("信号就"),l("strong",[v._v("没有离散谱")])]),v._v(" "),l("li",[v._v("通常根据连续谱确定信号带宽，根据离散谱确定信号是否有直流分量和位定时分量")])]),v._v(" "),l("p",[v._v("例1：01等概单极性不归零和归零波形的功率谱：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(1123),alt:"6-6"}})]),v._v(" "),l("p",[v._v("结论：")]),v._v(" "),l("ul",[l("li",[v._v("01等概单极性不归零\n"),l("ul",[l("li",[v._v("有直流（图中存在脉冲")]),v._v(" "),l("li",[v._v("无定时（脉冲只在原点")]),v._v(" "),l("li",[v._v("以主瓣宽度作为近似带宽时，B=fB")])])]),v._v(" "),l("li",[v._v("01等概单极性归零\n"),l("ul",[l("li",[v._v("有直流（图中存在脉冲")]),v._v(" "),l("li",[v._v("有定时（最近的两个脉冲的距离")]),v._v(" "),l("li",[v._v("以主瓣宽度作为近似带宽时，B=2fB")])])])]),v._v(" "),l("p",[v._v("例2：01等概双极性不归零和归零波形的功率谱：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(1124),alt:"6-7"}})]),v._v(" "),l("p",[v._v("结论：")]),v._v(" "),l("ul",[l("li",[v._v("01等概双极性不归零\n"),l("ul",[l("li",[v._v("无直流（图中无脉冲")]),v._v(" "),l("li",[v._v("无定时")]),v._v(" "),l("li",[v._v("以主瓣宽度作为近似带宽时B=fB")])])]),v._v(" "),l("li",[v._v("01等概双极性归零\n"),l("ul",[l("li",[v._v("无直流（无脉冲")]),v._v(" "),l("li",[l("strong",[v._v("无定时")])]),v._v(" "),l("li",[v._v("以主瓣宽度作为近似带宽时B=2fB")])])])]),v._v(" "),l("p",[v._v("例3：AMI码和HDB3码的功率谱（主瓣部分")]),v._v(" "),l("p",[l("img",{attrs:{src:t(1125),alt:"6-8"}})]),v._v(" "),l("p",[v._v("结论：")]),v._v(" "),l("ul",[l("li",[v._v("无直流")]),v._v(" "),l("li",[l("strong",[v._v("无定时")]),v._v("（需要分析信号得到定时信息，信号不自带")]),v._v(" "),l("li",[v._v("B=fB")]),v._v(" "),l("li",[v._v("能量集中")])]),v._v(" "),l("p",[v._v("总结：")]),v._v(" "),l("ul",[l("li",[v._v("占空比越小，频带越宽")]),v._v(" "),l("li",[v._v("01等概双极性码无直流，无定时")]),v._v(" "),l("li",[l("strong",[v._v("单极性归零码有定时")]),v._v("，不含定时信息的可以"),l("strong",[v._v("在接收端转换成单极性归零码")])])]),v._v(" "),l("h2",{attrs:{id:"码间串扰isi"}},[v._v("码间串扰ISI")]),v._v(" "),l("p",[v._v("ISI: InterSymbol Interference - 前面的码元波形的拖尾蔓延到当前码元的抽样时刻，导致对码元的判决产生干扰（如波峰被削弱")]),v._v(" "),l("p",[l("img",{attrs:{src:t(1126),alt:"6-10"}})]),v._v(" "),l("p",[v._v("主要原因是系统传输总特性H(ω)不理想，导致码元畸变、展宽和拖尾")]),v._v(" "),l("h2",{attrs:{id:"消除码间串扰"}},[v._v("消除码间串扰")]),v._v(" "),l("h3",{attrs:{id:"消除isi的条件"}},[v._v("消除ISI的条件")]),v._v(" "),l("ul",[l("li",[v._v("时域条件\n"),l("ul",[l("li",[v._v("单个码元在其抽样时刻有值，在其他码元的抽样时刻无值")])])]),v._v(" "),l("li",[v._v("频域条件\n"),l("ul",[l("li",[v._v("如果一个H(ω)能够等效成一个理想矩形低通滤波器，在可实现无码间串扰")]),v._v(" "),l("li",[v._v("称为"),l("strong",[v._v("奈奎斯特准则")])])])])]),v._v(" "),l("h3",{attrs:{id:"无isi的基带传输特性"}},[v._v("无ISI的基带传输特性")]),v._v(" "),l("p",[v._v("满足上述奈奎斯特准则的传输函数的频域与时域图像：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(1127),alt:"6-11"}})]),v._v(" "),l("p",[v._v("传输速率高于1/TB时存在码间串扰")]),v._v(" "),l("p",[v._v("此理想系统的带宽（奈奎斯特带宽）为fN=1/(2TB)")]),v._v(" "),l("p",[v._v("最高码元速率（奈奎斯特速率）为RB=1/TB=2fN(波特)，即奈奎斯特带宽为fN的信道每秒最多传输2fN个符号，最高频带利用率为2Baud/Hz")]),v._v(" "),l("p",[l("strong",[v._v("但是上述理想情况无法实现")]),v._v("，实际采用："),l("strong",[v._v("升余弦滚降")]),v._v("传输：")]),v._v(" "),l("p",[v._v("传输函数：（不需要背")]),v._v(" "),l("p",[l("img",{attrs:{src:t(1128),alt:"6-12"}})]),v._v(" "),l("p",[v._v("对应的频谱图：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(1129),alt:"6-13"}})]),v._v(" "),l("p",[v._v("其中α为"),l("strong",[v._v("滚降系数")]),v._v("，定义为"),l("code",{pre:!0},[v._v("f(delta)/fN")])]),v._v(" "),l("ul",[l("li",[v._v("α越大，拖尾衰减越快，对位定时的精度要求就越低。代价是带宽增大，频带利用率降低")]),v._v(" "),l("li",[v._v("升余弦滚降系统的带宽为"),l("code",{pre:!0},[v._v("B=fN+f(delta)=(1+α)fN")])]),v._v(" "),l("li",[v._v("无ISI的最高频带利用率为"),l("code",{pre:!0},[v._v("η=RB/B=2/(1+α) Baud/Hz")])])]),v._v(" "),l("h2",{attrs:{id:"部分响应系统"}},[v._v("部分响应系统")]),v._v(" "),l("p",[v._v("使用相关编码人为地引入某种相关性，使系统达到2Baud/Hz的最高频带利用率。常用的是第I类和第IV类")]),v._v(" "),l("p",[v._v("假设使用的是L进制系统")]),v._v(" "),l("p",[v._v("整个过程为"),l("strong",[v._v("预编码-相关编码-模L判决")]),v._v("（如果是2进制系统则为"),l("strong",[v._v("模二判决")])]),v._v(" "),l("h3",{attrs:{id:"第i类"}},[v._v("第I类")]),v._v(" "),l("p",[v._v("编码时"),l("strong",[v._v("人为地引入码间串扰")]),v._v("，使当前码元只对下一个码元产生码间串扰。这样有规律的码间串扰可以通过"),l("strong",[v._v("预编码")]),v._v("和"),l("strong",[v._v("模L判决")]),v._v("来消除")]),v._v(" "),l("p",[v._v("预编码的作用是为了避免因相关编码引起差错传播现象，先把输入信码ak转换成相对码bk")]),v._v(" "),l("ul",[l("li",[v._v("预编码公式 - bk = ak xor b(k-1) （模L加")]),v._v(" "),l("li",[v._v("相关编码公式 - Ck = bk + b(k-1)")]),v._v(" "),l("li",[v._v("接收端对Ck进行模L判决恢复ak - ak = Ck mod L")])]),v._v(" "),l("h3",{attrs:{id:"第iv类"}},[v._v("第IV类")]),v._v(" "),l("ul",[l("li",[v._v("预编码 - bk = ak xor b(k - 2) （模L加")]),v._v(" "),l("li",[v._v("相关编码 - Ck = bk - b(k - 2)")]),v._v(" "),l("li",[v._v("模L判决 - ak = Ck mod L")])]),v._v(" "),l("h3",{attrs:{id:"评价"}},[v._v("评价")]),v._v(" "),l("ul",[l("li",[v._v("优点 - 消除码间串扰")]),v._v(" "),l("li",[v._v("缺点 - 输入数据为L进制的时候，相关编码的电平数量超过L（如I和IV的电平数为2L-1），使抗噪性能变差")])]),v._v(" "),l("h2",{attrs:{id:"无isi基带系统的抗噪性能"}},[v._v("无ISI基带系统的抗噪性能")]),v._v(" "),l("p",[v._v("研究不考虑ISI的情况下，由加性白噪声n(t)引起的误码率")]),v._v(" "),l("p",[v._v("结论：")]),v._v(" "),l("ul",[l("li",[v._v("双极性系带系统的误码率比单极性的低")])]),v._v(" "),l("h2",{attrs:{id:"眼图"}},[v._v("眼图")]),v._v(" "),l("p",[v._v("眼图是一种宏观评价系统性能（ISI和噪声影响程度）的实验手段")]),v._v(" "),l("p",[l("img",{attrs:{src:t(1130),alt:"6-14"}})]),v._v(" "),l("ul",[l("li",[v._v("最佳抽样时刻是眼睛张开最大的时刻")]),v._v(" "),l("li",[v._v("定时误差灵敏度是眼眶的斜率。斜率越大，对位定时误差越敏感")]),v._v(" "),l("li",[v._v("（信号失真）抽样失真反应了抽样时刻上信号受噪声干扰的畸变程度")]),v._v(" "),l("li",[v._v("判决门限电平是图中央横轴的位置")]),v._v(" "),l("li",[v._v("噪声容限是指系统能容忍的噪声的最大限度，如果噪声的瞬时值超过它就可能发生错判")])]),v._v(" "),l("p",[v._v("眼图实例：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(1131),alt:"6-15"}})])])}]};v.exports={attributes:{layout:"collection",title:"数字基带传输系统",collection:"PrinciplesOfCommunications"},vue:{render:l.render,staticRenderFns:l.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=l.render,this.$options.staticRenderFns=l.staticRenderFns}}}}}}]);