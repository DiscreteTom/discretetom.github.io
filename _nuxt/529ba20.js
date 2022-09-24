(window.webpackJsonp=window.webpackJsonp||[]).push([[26,996,997,998,999,1e3,1001,1002,1003,1004,1005,1006,1007,1008],{1129:function(v,_,t){v.exports=t.p+"img/7-1.8df021c.jpg"},1130:function(v,_,t){v.exports=t.p+"img/7-4.2b00a3c.png"},1131:function(v,_,t){v.exports=t.p+"img/7-2.638fa14.jpg"},1132:function(v,_,t){v.exports=t.p+"img/7-5.d4ed0dc.png"},1133:function(v,_,t){v.exports=t.p+"img/7-3.ce351d3.jpg"},1134:function(v,_,t){v.exports=t.p+"img/7-6.6790a08.png"},1135:function(v,_,t){v.exports=t.p+"img/7-7.c41c49f.png"},1136:function(v,_,t){v.exports=t.p+"img/7-8.d509a29.png"},1137:function(v,_,t){v.exports=t.p+"img/7-9.84ba0e6.png"},1138:function(v,_,t){v.exports=t.p+"img/7-10.0f22e41.png"},1139:function(v,_,t){v.exports=t.p+"img/7-11.1981bb2.png"},1140:function(v,_,t){v.exports=t.p+"img/7-12.7571f9e.png"},1141:function(v,_,t){v.exports=t.p+"img/7-13.5d69f2b.png"},1416:function(v,_,t){const r={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("数字调制")]),v._v(" - 把"),r("strong",[v._v("数字基带信号")]),v._v("变换为"),r("strong",[v._v("数字带通信号")]),v._v("的过程。也称为 "),r("strong",[v._v("数字连续波调制")]),v._v(" 或 "),r("strong",[v._v("正弦载波数字调制")])]),v._v(" "),r("li",[v._v("数字带通传输系统 - 指包括调制解调过程的数字传输系统")]),v._v(" "),r("li",[v._v("数字调制方法：\n"),r("ul",[r("li",[v._v("模拟调制法 - 利用模拟调制的方法实现数字式调制")]),v._v(" "),r("li",[v._v("数字键控法 - 利用数字信号的离散取值特点，通过开关键控载波实现数字调制")])])]),v._v(" "),r("li",[v._v("数字调制基本类型\n"),r("ul",[r("li",[v._v("对正弦载波的振幅、频率或相位进行键控，得到"),r("strong",[v._v("振幅键控ASK")]),v._v("、"),r("strong",[v._v("频移键控FSK")]),v._v("、"),r("strong",[v._v("相移键控PSK/DPSK")]),v._v("三种基本的数字调制方式")])])]),v._v(" "),r("li",[v._v("二进制调制 - 指载波的幅度、频率、相位受调制后只有两种状态。对应的调制方式有2ASK、2PSK、2FSK、2DPSK")]),v._v(" "),r("li",[v._v("多进制调制 - M进制调制就有MASK/MFSK/MPSK/MDPSK")])]),v._v(" "),r("h2",{attrs:{id:"二进制数字调制原理"}},[v._v("二进制数字调制原理")]),v._v(" "),r("h3",{attrs:{id:"二进制振幅键控2ask"}},[v._v("二进制振幅键控2ASK")]),v._v(" "),r("p",[v._v("使用不同振幅（0和非0）表示0和1")]),v._v(" "),r("p",[r("img",{attrs:{src:t(1129),alt:"7-1"}})]),v._v(" "),r("p",[v._v("如果电平为1的概率为P，为0的概率为1-P，则2ASK信号也称为OOK信号")]),v._v(" "),r("p",[v._v("数字键控法电路实现：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(1130),alt:"7-4"}})]),v._v(" "),r("p",[v._v("解调方案：")]),v._v(" "),r("ul",[r("li",[v._v("非相干解调（包络检波")]),v._v(" "),r("li",[v._v("相干解调（同步检测")])]),v._v(" "),r("h3",{attrs:{id:"二进制频移键控2fsk"}},[v._v("二进制频移键控2FSK")]),v._v(" "),r("p",[v._v("使用不同频率表示0和1")]),v._v(" "),r("p",[r("img",{attrs:{src:t(1131),alt:"7-2"}})]),v._v(" "),r("p",[v._v("数字键控法电路实现：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(1132),alt:"7-5"}})]),v._v(" "),r("p",[v._v("解调方案：")]),v._v(" "),r("ul",[r("li",[v._v("非相干解调（包络检波")]),v._v(" "),r("li",[v._v("相干解调")]),v._v(" "),r("li",[v._v("过零法检测")])]),v._v(" "),r("h3",{attrs:{id:"二进制绝对相移键控2psk"}},[v._v("二进制（绝对）相移键控2PSK")]),v._v(" "),r("p",[v._v("使用不同相位表示0和1")]),v._v(" "),r("p",[r("img",{attrs:{src:t(1133),alt:"7-3"}})]),v._v(" "),r("p",[v._v("数字键控法电路实现：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(1134),alt:"7-6"}})]),v._v(" "),r("p",[v._v("解调：相干解调")]),v._v(" "),r("p",[r("strong",[v._v("问题")]),v._v("：2PSK存在 "),r("strong",[v._v("倒π现象")]),v._v(" 或 "),r("strong",[v._v("反相工作")]),v._v("，因为在载波恢复的时候存在180度的相位模糊。实际应用的时候使用2DPSK解决")]),v._v(" "),r("h3",{attrs:{id:"二进制差分相移键控2dpsk"}},[v._v("二进制差分相移键控2DPSK")]),v._v(" "),r("p",[v._v("相位变化表示1，不变表示0。"),r("strong",[v._v("解决相位模糊")])]),v._v(" "),r("p",[r("img",{attrs:{src:t(1135),alt:"7-7"}})]),v._v(" "),r("p",[v._v("产生方法：将绝对码进行变换得到相对码，然后再2PSK即可。所以电路为：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(1136),alt:"7-8"}})]),v._v(" "),r("ul",[r("li",[v._v("解调方案1 - 相干解调（极性比较），先恢复相对码再计算绝对码")]),v._v(" "),r("li",[v._v("解调方案2 - 差分相干解调（相位比较），此方案不需要专门的相干载波")])]),v._v(" "),r("h2",{attrs:{id:"二进制数字已调信号的频谱与带宽"}},[v._v("二进制数字已调信号的频谱与带宽")]),v._v(" "),r("h3",{attrs:{id:"2ask"}},[v._v("2ASK")]),v._v(" "),r("p",[r("img",{attrs:{src:t(1137),alt:"7-9"}})]),v._v(" "),r("p",[v._v("2ASK的带宽基带信号带宽的2倍，所以2ASK的传输带宽是码元速率的2倍")]),v._v(" "),r("h3",{attrs:{id:"2fsk"}},[v._v("2FSK")]),v._v(" "),r("p",[v._v("功率谱可以视为是中心频率分别为f1和f2的两个2ASK频谱的组合（图略），带宽近似"),r("code",{pre:!0},[v._v("|f2 - f1| + 2fB")])]),v._v(" "),r("h3",{attrs:{id:"2psk-2dpsk"}},[v._v("2PSK & 2DPSK")]),v._v(" "),r("p",[v._v("2PSK和2ASK表达式形式完全一样，区别是基带信号不同，2ASK是单极性，2PSK是双极性")]),v._v(" "),r("p",[r("img",{attrs:{src:t(1138),alt:"7-10"}})]),v._v(" "),r("p",[v._v("2DPSK和2PSK的一样")]),v._v(" "),r("p",[v._v("带宽也是基带信号的2倍")]),v._v(" "),r("h2",{attrs:{id:"二进制数字调制系统的抗噪性能"}},[v._v("二进制数字调制系统的抗噪性能")]),v._v(" "),r("p",[v._v("定义解调器输入端信噪比：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(1139),alt:"7-11"}})]),v._v(" "),r("p",[v._v("其中：")]),v._v(" "),r("ul",[r("li",[v._v("A为解调器输入端信号的振幅")]),v._v(" "),r("li",[v._v("(σn)^2=n0B为解调器输入端噪声功率")])]),v._v(" "),r("h2",{attrs:{id:"二进制数字调制系统的性能比较"}},[v._v("二进制数字调制系统的性能比较")]),v._v(" "),r("h3",{attrs:{id:"抗噪性能"}},[v._v("抗噪性能")]),v._v(" "),r("ul",[r("li",[v._v("同一种调制方式，相干解调误码率低于非相干解调误码率。但随着r增大，两者性能相差不大")]),v._v(" "),r("li",[v._v("使用相同的解调方式，抗加性高斯白噪声的能力从优到劣为2PSK-2DPSK-2FSK-2ASK")]),v._v(" "),r("li",[v._v("在误码率相同的情况下对信噪比r的要求：\n"),r("ul",[r("li",[v._v("2ASK-2FSK=3dB")]),v._v(" "),r("li",[v._v("2FSK-2PSK=3dB")])])])]),v._v(" "),r("h3",{attrs:{id:"带宽和频带利用率"}},[v._v("带宽和频带利用率")]),v._v(" "),r("p",[v._v("令码元宽度为TB，则")]),v._v(" "),r("ul",[r("li",[v._v("B(2ASK)=B(2PSK)=B(2DPSK)=2/TB")]),v._v(" "),r("li",[v._v("B(2FSK)=|f2-f1|+2/TB")])]),v._v(" "),r("p",[v._v("可见2FSK的频带利用率最差，有效性最差")]),v._v(" "),r("h3",{attrs:{id:"对信道特性变化的敏感性"}},[v._v("对信道特性变化的敏感性")]),v._v(" "),r("ul",[r("li",[v._v("2ASK易受影响，不适合随参信道")]),v._v(" "),r("li",[v._v("2PSK不易受影响")]),v._v(" "),r("li",[v._v("2FSK不受影响，最适合在随参信道传输")])]),v._v(" "),r("h3",{attrs:{id:"设备复杂度"}},[v._v("设备复杂度")]),v._v(" "),r("ul",[r("li",[v._v("非相干方式比相干简单")])]),v._v(" "),r("p",[v._v("常用的是相干2DPSK和非相干2FSK")]),v._v(" "),r("h2",{attrs:{id:"多进制数字调制原理"}},[v._v("多进制数字调制原理")]),v._v(" "),r("h3",{attrs:{id:"mask略"}},[v._v("MASK（略")]),v._v(" "),r("p",[v._v("很少用")]),v._v(" "),r("h3",{attrs:{id:"mfsk略"}},[v._v("MFSK（略")]),v._v(" "),r("p",[v._v("抗衰落能力强，但是占用带宽大")]),v._v(" "),r("h3",{attrs:{id:"mpsk"}},[v._v("MPSK")]),v._v(" "),r("p",[v._v("以4PSK为例，使用4种不同的相位表示数字信息")]),v._v(" "),r("p",[v._v("参考表格：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(1140),alt:"7-12"}})]),v._v(" "),r("p",[v._v("相位矢量表示图：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(1141),alt:"7-13"}})]),v._v(" "),r("h4",{attrs:{id:"mdpsk"}},[v._v("MDPSK")]),v._v(" "),r("p",[v._v("把每一个二进制位进行2DPSK即可")])])}]};v.exports={attributes:{layout:"collection",title:"数字带通传输系统",collection:"PrinciplesOfCommunications"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}}}]);