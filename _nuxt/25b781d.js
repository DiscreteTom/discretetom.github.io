(window.webpackJsonp=window.webpackJsonp||[]).push([[33,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023],{1108:function(v,_,t){v.exports=t.p+"img/5-1.bad4934.png"},1109:function(v,_,t){v.exports=t.p+"img/5-2.f9e8ccd.png"},1110:function(v,_,t){v.exports=t.p+"img/5-3.59c21ae.png"},1111:function(v,_,t){v.exports=t.p+"img/5-4.1c36b8b.png"},1112:function(v,_,t){v.exports=t.p+"img/5-5.b0cf1ab.png"},1113:function(v,_,t){v.exports=t.p+"img/5-6.439d831.png"},1114:function(v,_,t){v.exports=t.p+"img/5-7.71203f6.png"},1115:function(v,_,t){v.exports=t.p+"img/5-8.4017266.png"},1116:function(v,_,t){v.exports=t.p+"img/5-9.4955039.png"},1117:function(v,_,t){v.exports=t.p+"img/5-10.08fcdad.png"},1118:function(v,_,t){v.exports=t.p+"img/5-11.e2cc6db.png"},1457:function(v,_,t){const n={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,n=v._self._c||_;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),n("p",[v._v("调制 - 改变基带信号的某些属性使其适合被信道传输")]),v._v(" "),n("p",[v._v("本章介绍的是使用正弦载波"),n("code",{pre:!0},[v._v("c(t) = Acos(ωct + φ0)")]),v._v("携带模拟调制信号"),n("code",{pre:!0},[v._v("m(t)")]),v._v("的模拟调制，分为：")]),v._v(" "),n("ul",[n("li",[v._v("幅度调制（线性调制）\n"),n("ul",[n("li",[v._v("调幅AM")]),v._v(" "),n("li",[v._v("双边带DSB")]),v._v(" "),n("li",[v._v("单边带SSB")]),v._v(" "),n("li",[v._v("残留边带VSB")])])]),v._v(" "),n("li",[v._v("角度调制（非线性调制\n"),n("ul",[n("li",[v._v("调频FM")]),v._v(" "),n("li",[v._v("调幅PM")])])])]),v._v(" "),n("h2",{attrs:{id:"幅度调制"}},[v._v("幅度调制")]),v._v(" "),n("h3",{attrs:{id:"概述-1"}},[v._v("概述")]),v._v(" "),n("p",[v._v("幅度调制是把高频载波叠加到调制信号上，"),n("strong",[v._v("使高频载波的幅度随调制信号的瞬时值变化")])]),v._v(" "),n("p",[n("img",{attrs:{src:t(1108),alt:"5-1"}})]),v._v(" "),n("p",[v._v("从频域上看只是乘了一个正弦波，体现为频谱的搬移，故称为线性调制")]),v._v(" "),n("p",[v._v("线性调制通用模型：")]),v._v(" "),n("p",[n("img",{attrs:{src:t(1109),alt:"5-2"}})]),v._v(" "),n("p",[v._v("使用高频乘性干扰cosωct作用于调制信号m(t)，然后使用滤波器h(t)<->H(ω)进行滤波得到输出")]),v._v(" "),n("h3",{attrs:{id:"标准调幅am"}},[v._v("标准调幅AM")]),v._v(" "),n("p",[v._v("思想：叠加直流分量A0，然后使用高频乘性干扰cosωc(t)，得到已调信号：")]),v._v(" "),n("p",[n("img",{attrs:{src:t(1110),alt:"5-3"}})]),v._v(" "),n("p",[v._v("频域特性：已知A0的频域特性为"),n("code",{pre:!0},[v._v("A0*2πδ(ω)")]),v._v("为原点冲激函数，假设m(t)带宽为ωH，m(t)的频谱：")]),v._v(" "),n("p",[n("img",{attrs:{src:t(1111),alt:"5-4"}})]),v._v(" "),n("p",[v._v("乘上cosωc(t)相当于卷积其频谱"),n("code",{pre:!0},[v._v("π(δ(ω - ωc) + δ(ω + ωc))")]),v._v("，即原频谱图像搬移ωc的距离，振幅减半：")]),v._v(" "),n("p",[n("img",{attrs:{src:t(1112),alt:"5-5"}})]),v._v(" "),n("p",[v._v("滤波器特性H(ω)=1，即调制的时候不对上述波形进行处理")]),v._v(" "),n("ul",[n("li",[v._v("可以使用包络检波解调，简单")]),v._v(" "),n("li",[v._v("信号由对称的上下两个边带组成（上边带为正频域频率大的边带），需要带宽为"),n("code",{pre:!0},[v._v("B(AM)=2fH")]),v._v("，fH为原信号带宽，也是原信号最高频率（因为原信号关于原点对称，所以调制后需要的带宽加倍")]),v._v(" "),n("li",[n("strong",[v._v("平均功率P")]),v._v("(AM) = Pc + Ps，其中Pc=A0^2/2，为"),n("strong",[v._v("载波功率")]),v._v("，Ps = m^2(t)/2，为"),n("strong",[v._v("边带功率")])]),v._v(" "),n("li",[n("strong",[v._v("调制效率")]),v._v("（即功率利用率）ηAM = Ps / P(AM) = Ps / (Pc + Ps) = m^2(t) / (A0^2 + m^2(t))\n"),n("ul",[n("li",[v._v("当m(t)=Amcosωm(t)（单音余弦信号）时m^2(t)=Am^2/2，因此令"),n("strong",[v._v("调幅系数")]),v._v("m=Am/A0，则ηAM=m^2/(2+m^2)")])])]),v._v(" "),n("li",[v._v("m=1时称为"),n("strong",[v._v("满调幅")]),v._v("，此时调制效率ηAM最大，但仅为1/3，所以"),n("strong",[v._v("AM信号的功率利用率很低")]),v._v("，原因是引入了直流信号消耗大量功率")]),v._v(" "),n("li",[v._v("主要应用于中短波调幅广播（因为远距离太浪费功率")])]),v._v(" "),n("h3",{attrs:{id:"dsb双边带信号抑制载波双边带调幅"}},[v._v("DSB双边带信号（抑制载波双边带调幅")]),v._v(" "),n("p",[v._v("解决AM中功率利用率低的问题")]),v._v(" "),n("p",[v._v("主要思想："),n("strong",[v._v("去掉AM中的A0")]),v._v("，直接乘高频载波cosωc(t)。要求调制信号m(t)为不带直流的信号（直流可以使用隔直电路滤掉")]),v._v(" "),n("p",[n("img",{attrs:{src:t(1113),alt:"5-6"}})]),v._v(" "),n("p",[v._v("时域与频域图示：")]),v._v(" "),n("p",[n("img",{attrs:{src:t(1114),alt:"5-7"}})]),v._v(" "),n("p",[v._v("特点：")]),v._v(" "),n("ul",[n("li",[v._v("包络不再与m(t)成正比，且m(t)改变符号时载波相位反转，"),n("strong",[v._v("不能再使用包络检波")]),v._v("，"),n("strong",[v._v("使用相干解调")]),v._v("（复杂")]),v._v(" "),n("li",[v._v("占用的带宽和AM一样，B(DSB)=B(AM)=2fH")]),v._v(" "),n("li",[v._v("调制效率高，为100%，因为不含载波分量A0，所以全部功率用于信息传输")])]),v._v(" "),n("h3",{attrs:{id:"ssb单边带信号单边带调幅"}},[v._v("SSB单边带信号（单边带调幅")]),v._v(" "),n("p",[v._v("提升DSB的带宽性能（信道利用率）。DSB的带宽是2fH，SSB带宽是fH")]),v._v(" "),n("p",[v._v("使用一个滤波器实现，原理电路：")]),v._v(" "),n("p",[n("img",{attrs:{src:t(1115),alt:"5-8"}})]),v._v(" "),n("p",[v._v("H(ω)是理想低通滤波器时提取下边带，为理想高通时提取理想下边带。")]),v._v(" "),n("p",[v._v("频域原理图：")]),v._v(" "),n("p",[n("img",{attrs:{src:t(1116),alt:"5-9"}})]),v._v(" "),n("ul",[n("li",[v._v("SSB最突出的优点就是占用带宽窄，适合短波通信（高频")]),v._v(" "),n("li",[v._v("因为不传送载波和另一个边带，节省发送功率")]),v._v(" "),n("li",[v._v("缺点是设备复杂，需要相干解调")])]),v._v(" "),n("h3",{attrs:{id:"vsb残留边带信号残留边带调幅"}},[v._v("VSB残留边带信号（残留边带调幅")]),v._v(" "),n("p",[v._v("弥补SSB需要理想滤波器的缺陷，VSB使用边带滤波器来实现")]),v._v(" "),n("p",[v._v("H(ω)是残留边带滤波器，满足关于ωc点"),n("strong",[v._v("奇对称互补")]),v._v("，频域图表示：")]),v._v(" "),n("p",[n("img",{attrs:{src:t(1117),alt:"5-10"}})]),v._v(" "),n("p",[v._v("图a为残留部分上边带滤波器，b为残留部分下边带滤波器")]),v._v(" "),n("ul",[n("li",[v._v("VSB解决了DSB的带宽问题和SSB实现上的困难")]),v._v(" "),n("li",[v._v("调制效率100%，带宽介于DSB和SSB之间")]),v._v(" "),n("li",[v._v("广泛用于电视广播系统中的图像信号传输，因为低频分量丰富")])]),v._v(" "),n("h3",{attrs:{id:"解调"}},[v._v("解调")]),v._v(" "),n("ul",[n("li",[v._v("相干解调（也称为"),n("strong",[v._v("同步检波")]),v._v(" "),n("ul",[n("li",[v._v("叠加乘性干扰把频谱再次搬回原点")]),v._v(" "),n("li",[v._v("使用乘法器和低通滤波器LPF实现")]),v._v(" "),n("li",[v._v("适用AM/DSB/SSB/VSB的解调")]),v._v(" "),n("li",[v._v("信、噪分开处理，无门限效应")]),v._v(" "),n("li",[v._v("要求载波同步，即接收方必须提供一个严格同步的相干载波")])])]),v._v(" "),n("li",[v._v("包络检波\n"),n("ul",[n("li",[v._v("使用整流器和低通滤波器实现")]),v._v(" "),n("li",[v._v("仅使用于AM且要求Am<=A0")]),v._v(" "),n("li",[v._v("优点 - 简单，不需要载波同步")])])])]),v._v(" "),n("h2",{attrs:{id:"线性调制的抗噪性能"}},[v._v("线性调制的抗噪性能")]),v._v(" "),n("p",[v._v("令输入白噪声n(t)的单边功率谱密度是n0，BPF是高度为1带宽为B的理想矩形函数，则"),n("strong",[v._v("解调器输入噪声功率")]),n("code",{pre:!0},[v._v("Ni=n0*B")])]),v._v(" "),n("p",[n("strong",[v._v("制度增益")]),n("code",{pre:!0},[v._v("G=(So/No)/(Si/Ni)")]),v._v("，即输出的信噪比比输入的信噪比多了多少")]),v._v(" "),n("p",[v._v("DSB解调输出为m(t)/2，SSB的解调输出为m(t)/4，所以DSB输出功率为1/4原功率，SSB为1/16原功率")]),v._v(" "),n("p",[v._v("恒成立的等式："),n("code",{pre:!0},[v._v("No = Ni/4 = n0*B/4")])]),v._v(" "),n("p",[v._v("以上计算可得"),n("code",{pre:!0},[v._v("G(DSB)=2")]),v._v("，"),n("code",{pre:!0},[v._v("G(SSB)=1")])]),v._v(" "),n("p",[v._v("分析：")]),v._v(" "),n("ul",[n("li",[v._v("DSB的制度增益为2，即输出信噪比是输入的2倍，因为相干解调把噪声中的正交分量相互抑制，导致噪声功率减半")]),v._v(" "),n("li",[v._v("SSB的制度增益为1是因为噪声和信号功率都被减半")]),v._v(" "),n("li",[v._v("虽然G(DSB)>G(SSB)，但是不能说明DSB优于SSB，实际二者输出信噪比相似，即二者抗噪声性能相同")]),v._v(" "),n("li",[v._v("VSB的分析方法类似于SSB")])]),v._v(" "),n("p",[v._v("AM的包络检波在大信噪比时性能和AM的相干解调差不多，但是输出信噪比均比以上二者差")]),v._v(" "),n("h2",{attrs:{id:"角度调制"}},[v._v("角度调制")]),v._v(" "),n("h3",{attrs:{id:"概述-2"}},[v._v("概述")]),v._v(" "),n("p",[n("img",{attrs:{src:t(1118),alt:"5-11"}})]),v._v(" "),n("p",[v._v("把调制信号作为瞬时相移，置入高频正弦波")]),v._v(" "),n("p",[v._v("FM的输出信噪比最优")]),v._v(" "),n("h3",{attrs:{id:"fm信号的产生与解调"}},[v._v("FM信号的产生与解调")]),v._v(" "),n("ul",[n("li",[v._v("直接调频")]),v._v(" "),n("li",[v._v("锁相调频")]),v._v(" "),n("li",[v._v("间接调频\n"),n("ul",[n("li",[v._v("将m(t)进行积分后对载波进行调相，从而产生一个窄带调频(NBFM)信号，然后n次倍频，提高调频指数，实现宽带调频")])])])]),v._v(" "),n("p",[v._v("调频信号的解调是要产生一个与输入调频信号的频率呈线性关系的输出电压，完成这一"),n("strong",[v._v("频率<->电压")]),v._v("转换的器件为"),n("strong",[v._v("鉴频器")]),v._v("。这种解调方法属于非相干解调，对窄带调频NBFM和宽带调频WBFM均适用。NBFM也可以使用相干解调")]),v._v(" "),n("h3",{attrs:{id:"调频系统的抗噪性能"}},[v._v("调频系统的抗噪性能")]),v._v(" "),n("p",[v._v("解调器输入信噪比"),n("code",{pre:!0},[v._v("Si/Ni=A^2/(2n0B(FM))")])]),v._v(" "),n("ul",[n("li",[v._v("大信噪比时制度增益随带宽增大而增大，"),n("strong",[v._v("调频系统可以通过增加传输带宽改善抗噪性能")])]),v._v(" "),n("li",[v._v("但是这样的改造不是无止境的，一直使用会出现门限效应")]),v._v(" "),n("li",[v._v("小信噪比时，当输入信噪比低于门限值时，鉴频器也会出现门限效应")]),v._v(" "),n("li",[v._v("门限效应是所有非相干解调器都存在的一种特性，相干解调器不存在门限效应")])]),v._v(" "),n("h2",{attrs:{id:"模拟调制系统性能比较"}},[v._v("模拟调制系统性能比较")]),v._v(" "),n("ul",[n("li",[v._v("抗噪性\n"),n("ul",[n("li",[v._v("FM最好")]),v._v(" "),n("li",[v._v("DSB、SSB、VSB次之")]),v._v(" "),n("li",[v._v("AM最差")])])]),v._v(" "),n("li",[v._v("频谱利用率\n"),n("ul",[n("li",[v._v("SSB最高")]),v._v(" "),n("li",[v._v("VSB次高")]),v._v(" "),n("li",[v._v("DSB、AM次之")]),v._v(" "),n("li",[v._v("FM最差")])])]),v._v(" "),n("li",[v._v("功率利用率\n"),n("ul",[n("li",[v._v("FM最高")]),v._v(" "),n("li",[v._v("DSB、SSB、VSB次之")]),v._v(" "),n("li",[v._v("AM最差")])])]),v._v(" "),n("li",[v._v("设备复杂度\n"),n("ul",[n("li",[v._v("AM最简单")]),v._v(" "),n("li",[v._v("DSB、FM次之")]),v._v(" "),n("li",[v._v("VSB较复杂")]),v._v(" "),n("li",[v._v("SSB最复杂")])])])]),v._v(" "),n("table",[n("thead",[n("tr",[n("th",[v._v("调制方式")]),v._v(" "),n("th",[v._v("B")]),v._v(" "),n("th",[v._v("G")])])]),v._v(" "),n("tbody",[n("tr",[n("td",[v._v("AM")]),v._v(" "),n("td",[v._v("2f")]),v._v(" "),n("td",[v._v("2/3")])]),v._v(" "),n("tr",[n("td",[v._v("DSB")]),v._v(" "),n("td",[v._v("2f")]),v._v(" "),n("td",[v._v("2")])]),v._v(" "),n("tr",[n("td",[v._v("SSB")]),v._v(" "),n("td",[v._v("f")]),v._v(" "),n("td",[v._v("1")])]),v._v(" "),n("tr",[n("td",[v._v("VSB")]),v._v(" "),n("td",[v._v("略大于f")]),v._v(" "),n("td",[v._v("近似SSB")])])])]),v._v(" "),n("h2",{attrs:{id:"频分复用"}},[v._v("频分复用")]),v._v(" "),n("p",[v._v("为了防止相邻信号出现干扰，相邻信号之间应有防护频带fg。令B1为单路带宽，则复用n路带宽为")]),v._v(" "),n("p",[n("code",{pre:!0},[v._v("Bn = nB1 + (n-1)fg")])])])}]};v.exports={attributes:{layout:"collection",title:"模拟调制系统",collection:"PrinciplesOfCommunications"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);