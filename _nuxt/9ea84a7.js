(window.webpackJsonp=window.webpackJsonp||[]).push([[9,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631],{1347:function(t,v,_){const r={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,v=t.$createElement,r=t._self._c||v;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"预备知识"}},[t._v("预备知识")]),t._v(" "),r("p",[t._v("每个关系视为一个二维表（类似于Excel")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("元组 - 一行")])]),t._v(" "),r("li",[r("p",[t._v("数据项 - 一个单元格")])]),t._v(" "),r("li",[r("p",[t._v("属性 - 一列")])]),t._v(" "),r("li",[r("p",[t._v("superkey超键 - 任意两个元组没有相同的超键。可以视为候选键+冗余属性")])]),t._v(" "),r("li",[r("p",[t._v("candidate key候选键 - 最小超键（没有冗余属性的超键），满足唯一性、最小性")])]),t._v(" "),r("li",[r("p",[t._v("primary key主键 - 候选键中的一个（根据实际情况从候选键中选择")])]),t._v(" "),r("li",[r("p",[t._v("foreign key外键")]),t._v(" "),r("ul",[r("li",[t._v("定义外键时要给DBMS指明外键的对应关系。所以外键和外部主键的名字可以不同。可以指向自身表的主键")])])])]),t._v(" "),r("p",[t._v("支持的"),r("strong",[t._v("完整性约束(Integrity Constraint)")]),t._v(":")]),t._v(" "),r("ul",[r("li",[t._v("实体完整性约束(IC of Primary Key) - 主键取值非空（如果主键包含多个属性，则任何属性都不能为空")]),t._v(" "),r("li",[t._v("参照完整性约束(Referential IC) - 外键取值要么为空，要么为其参照的主键值")]),t._v(" "),r("li",[t._v("用户自定义完整性约束")])]),t._v(" "),r("p",[t._v("模式图：")]),t._v(" "),r("ul",[r("li",[t._v("表名")]),t._v(" "),r("li",[t._v("属性集")]),t._v(" "),r("li",[t._v("下划线 - 主键（可能由多个属性构成")]),t._v(" "),r("li",[t._v("外键引用对应关系")])]),t._v(" "),r("p",[r("img",{attrs:{src:_(735),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"关系代数"}},[t._v("关系代数")]),t._v(" "),r("h3",{attrs:{id:"概述"}},[t._v("概述")]),t._v(" "),r("p",[t._v("六大基本操作：")]),t._v(" "),r("ul",[r("li",[t._v("选择select")]),t._v(" "),r("li",[t._v("投影project")]),t._v(" "),r("li",[t._v("并unoin")]),t._v(" "),r("li",[t._v("差set difference")]),t._v(" "),r("li",[t._v("笛卡尔乘积Cartesian product")]),t._v(" "),r("li",[t._v("更名rename")])]),t._v(" "),r("p",[t._v("附加操作（可以由基本操作组合表示）：")]),t._v(" "),r("ul",[r("li",[t._v("交Set intersection")]),t._v(" "),r("li",[t._v("（自然）连接(Natural) join")]),t._v(" "),r("li",[t._v("除法Division（略")]),t._v(" "),r("li",[t._v("赋值Assignment")]),t._v(" "),r("li",[t._v("广义投影Generalized Projection")]),t._v(" "),r("li",[t._v("外连接Outer Join")]),t._v(" "),r("li",[t._v("聚集函数Aggregate Functions")])]),t._v(" "),r("h3",{attrs:{id:"选择select"}},[t._v("选择select")]),t._v(" "),r("p",[t._v("一元操作，从一个表中选出满足特定关系的元组")]),t._v(" "),r("p",[r("img",{attrs:{src:_(736),alt:""}})]),t._v(" "),r("p",[t._v("其中p是选择条件，r是一个关系")]),t._v(" "),r("p",[t._v("p中可以使用以下符号进行逻辑拼接：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(737),alt:""}})]),t._v(" "),r("p",[t._v("（下文中会使用"),r("code",{pre:!0},[t._v("and")]),t._v(" & "),r("code",{pre:!0},[t._v("or")]),t._v(" & "),r("code",{pre:!0},[t._v("not")]),t._v("表示以上三种逻辑拼接")]),t._v(" "),r("p",[t._v("p里面可以使用的操作包括"),r("code",{pre:!0},[t._v("=, !=, >, >=, <, <=")]),t._v("，操作的两侧可以是属性，也可以是常量")]),t._v(" "),r("p",[t._v("例：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(738),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"投影project"}},[t._v("投影project")]),t._v(" "),r("p",[t._v("一元操作，从一个表中取出特定的列")]),t._v(" "),r("p",[t._v("去重（可选")]),t._v(" "),r("p",[r("img",{attrs:{src:_(739),alt:""}})]),t._v(" "),r("p",[t._v("其中A1…Ak是关系中的属性名，r是关系")]),t._v(" "),r("p",[t._v("例：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(740),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"并unoin"}},[t._v("并unoin")]),t._v(" "),r("p",[t._v("二元操作，合并两个表。表头可以不一样，但是要求属性数量相同，相同位置的属性相容")]),t._v(" "),r("p",[t._v("去重（可选")]),t._v(" "),r("p",[r("img",{attrs:{src:_(741),alt:""}})]),t._v(" "),r("p",[t._v("例：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(742),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"差set-difference"}},[t._v("差set difference")]),t._v(" "),r("p",[t._v("二元操作，在删除关系r中出现在关系s中的元组。两个关系必须拥有相同的属性数量，相同位置的属性必须相容")]),t._v(" "),r("p",[r("img",{attrs:{src:_(743),alt:""}})]),t._v(" "),r("p",[t._v("例：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(744),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"笛卡尔乘积cartesian-product"}},[t._v("笛卡尔乘积Cartesian product")]),t._v(" "),r("p",[t._v("二元操作，把关系r中的每个元组与关系s中的每个元组相互组合。要求两个关系不存在相同的属性名")]),t._v(" "),r("p",[r("img",{attrs:{src:_(745),alt:""}})]),t._v(" "),r("p",[t._v("如果两个关系有相同的属性名，则需要重命名操作")]),t._v(" "),r("p",[t._v("例：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(746),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"更名rename"}},[t._v("更名rename")]),t._v(" "),r("p",[t._v("一元操作，常用于自连接")]),t._v(" "),r("p",[r("img",{attrs:{src:_(747),alt:""}})]),t._v(" "),r("p",[t._v("其中X为关系的新名字（如果仅改属性名则不必给出），A1…An为各个属性的新名字（如果仅改关系名则不必给出）。")]),t._v(" "),r("h3",{attrs:{id:"交set-intersection"}},[t._v("交Set intersection")]),t._v(" "),r("p",[t._v("二元操作，求两个关系内相同的元组。要求两个关系属性数量相同且同位置属性相容")]),t._v(" "),r("p",[r("img",{attrs:{src:_(748),alt:""}})]),t._v(" "),r("p",[t._v("可以使用基本操作表示：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(749),alt:""}})]),t._v(" "),r("p",[t._v("例：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(750),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"连接与自然连接join-natural-join"}},[t._v("连接与自然连接join & Natural join")]),t._v(" "),r("p",[t._v("连接，也叫内连接")]),t._v(" "),r("p",[t._v("二元操作，相当于笛卡尔乘积的基础上做选择操作。")]),t._v(" "),r("p",[r("img",{attrs:{src:_(751),alt:""}})]),t._v(" "),r("p",[t._v("例：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(752),alt:""}})]),t._v(" "),r("p",[t._v("自然连接 - 在两个表的相同属性上面做等值连接")]),t._v(" "),r("p",[r("img",{attrs:{src:_(753),alt:""}})]),t._v(" "),r("p",[t._v("例：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(754),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"除法division略"}},[t._v("除法Division（略")]),t._v(" "),r("p",[t._v("逆笛卡尔乘积")]),t._v(" "),r("p",[r("img",{attrs:{src:_(755),alt:""}})]),t._v(" "),r("p",[t._v("例：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(756),alt:""}})]),t._v(" "),r("p",[t._v("思想：（参考"),r("a",{attrs:{href:"https://www.geeksforgeeks.org/sql-division/"}},[t._v("这里")])]),t._v(" "),r("p",[t._v("使用上面的"),r("code",{pre:!0},[t._v("r(A, B, C, D)")]),t._v("和"),r("code",{pre:!0},[t._v("s(C, D)")]),t._v("两个关系")]),t._v(" "),r("ol",[r("li",[t._v("寻找所有"),r("code",{pre:!0},[t._v("r(A, B)")]),t._v("和"),r("code",{pre:!0},[t._v("s(C, D)")]),t._v("的组合，得到"),r("code",{pre:!0},[t._v("r1(A, B, C, D)")])])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("A")]),t._v(" "),r("th",[t._v("B")]),t._v(" "),r("th",[t._v("C")]),t._v(" "),r("th",[t._v("D")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("a")]),t._v(" "),r("td",[t._v("b")]),t._v(" "),r("td",[t._v("c")]),t._v(" "),r("td",[t._v("d")])]),t._v(" "),r("tr",[r("td",[t._v("a")]),t._v(" "),r("td",[t._v("b")]),t._v(" "),r("td",[t._v("e")]),t._v(" "),r("td",[t._v("f")])]),t._v(" "),r("tr",[r("td",[t._v("b")]),t._v(" "),r("td",[t._v("c")]),t._v(" "),r("td",[t._v("c")]),t._v(" "),r("td",[t._v("d")])]),t._v(" "),r("tr",[r("td",[t._v("b")]),t._v(" "),r("td",[t._v("c")]),t._v(" "),r("td",[t._v("e")]),t._v(" "),r("td",[t._v("f")])]),t._v(" "),r("tr",[r("td",[t._v("e")]),t._v(" "),r("td",[t._v("d")]),t._v(" "),r("td",[t._v("c")]),t._v(" "),r("td",[t._v("d")])]),t._v(" "),r("tr",[r("td",[t._v("e")]),t._v(" "),r("td",[t._v("d")]),t._v(" "),r("td",[t._v("e")]),t._v(" "),r("td",[t._v("f")])])])]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("使用r1减去r得到r2")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("A")]),t._v(" "),r("th",[t._v("B")]),t._v(" "),r("th",[t._v("C")]),t._v(" "),r("th",[t._v("D")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("b")]),t._v(" "),r("td",[t._v("c")]),t._v(" "),r("td",[t._v("c")]),t._v(" "),r("td",[t._v("d")])])])]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("使用"),r("code",{pre:!0},[t._v("r(A, B)")]),t._v("减去"),r("code",{pre:!0},[t._v("r2(A, B)")]),t._v("得到"),r("code",{pre:!0},[t._v("r3(A, B)")])])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("A")]),t._v(" "),r("th",[t._v("B")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("a")]),t._v(" "),r("td",[t._v("b")])]),t._v(" "),r("tr",[r("td",[t._v("e")]),t._v(" "),r("td",[t._v("d")])])])]),t._v(" "),r("p",[t._v("r3即为"),r("code",{pre:!0},[t._v("r/s")])]),t._v(" "),r("p",[t._v("假设关系为"),r("code",{pre:!0},[t._v("r(x, y)")]),t._v("和"),r("code",{pre:!0},[t._v("s(y)")]),t._v("，则对应的sql语句为：")]),t._v(" "),r("pre",{staticClass:"language-sql"},[r("code",{pre:!0,attrs:{class:"language-sql"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" R \n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" x "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" x "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" y "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" S "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" p "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("cross")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" \n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("distinct")]),t._v(" x "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" R"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" sp"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXCEPT")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" x "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" R"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" r "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),r("p",[t._v("或")]),t._v(" "),r("pre",{staticClass:"language-sql"},[r("code",{pre:!0,attrs:{class:"language-sql"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" R "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" sx\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" p"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" S "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" p "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXCEPT")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" sp"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("  R "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" sp "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" sp"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sx"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),r("h3",{attrs:{id:"赋值assignment"}},[t._v("赋值Assignment")]),t._v(" "),r("p",[t._v("用来保存运算的中间结果，符号为"),r("code",{pre:!0},[t._v("<-")])]),t._v(" "),r("h3",{attrs:{id:"广义投影generalized-projection"}},[t._v("广义投影Generalized Projection")]),t._v(" "),r("p",[t._v("允许对投影后的属性进行运算。允许常量出现")]),t._v(" "),r("p",[r("img",{attrs:{src:_(757),alt:""}})]),t._v(" "),r("p",[t._v("其中F1…Fn允许是算术表达式，比如两个属性（或属性和常量）的加减乘除")]),t._v(" "),r("p",[t._v("例：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(758),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"外连接outer-join"}},[t._v("外连接Outer Join")]),t._v(" "),r("p",[t._v("内连接仅挑选了符合条件的元组，会导致信息丢失。外连接保存所有元组，不符合条件的元组使用null来填充未知值")]),t._v(" "),r("p",[t._v("外连接的结果包含内连接的结果")]),t._v(" "),r("p",[t._v("可以用来检错")]),t._v(" "),r("p",[t._v("分类")]),t._v(" "),r("ul",[r("li",[t._v("左外连接")]),t._v(" "),r("li",[t._v("右外连接")]),t._v(" "),r("li",[t._v("全外连接")])]),t._v(" "),r("p",[t._v("例：已知以下两个关系：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(759),alt:""}})]),t._v(" "),r("p",[r("img",{attrs:{src:_(760),alt:""}})]),t._v(" "),r("p",[r("img",{attrs:{src:_(761),alt:""}})]),t._v(" "),r("p",[r("img",{attrs:{src:_(762),alt:""}})]),t._v(" "),r("p",[r("img",{attrs:{src:_(763),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"聚集函数aggregate-functions"}},[t._v("聚集函数Aggregate Functions")]),t._v(" "),r("p",[t._v("输入一组值，输出单个值。通常是统计函数，比如：")]),t._v(" "),r("ul",[r("li",[t._v("max")]),t._v(" "),r("li",[t._v("min")]),t._v(" "),r("li",[t._v("avg")]),t._v(" "),r("li",[t._v("sum")]),t._v(" "),r("li",[t._v("count")])]),t._v(" "),r("p",[t._v("写作：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(764),alt:""}})]),t._v(" "),r("p",[t._v("其中G1…Gn为分类条件，是一系列属性（非必需）。F1…Fn是聚集函数，A1…An是聚集的属性名")]),t._v(" "),r("p",[t._v("例：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(765),alt:""}})]),t._v(" "),r("p",[r("img",{attrs:{src:_(766),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"空值null"}},[t._v("空值null")]),t._v(" "),r("p",[t._v("使用"),r("code",{pre:!0},[t._v("null")]),t._v("表示")]),t._v(" "),r("p",[t._v("与null相关的数学表达式结果都是null")]),t._v(" "),r("p",[t._v("聚集函数通常忽略空值")]),t._v(" "),r("p",[t._v("比较值是否相等时，两个null视为相等")]),t._v(" "),r("p",[t._v("与null相关的真值表：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(767),alt:""}})]),t._v(" "),r("p",[t._v("连接语句、选择语句把null视为不满足条件")]),t._v(" "),r("p",[t._v("投影、并、交、差操作在去重时把null视为重复的因素")]),t._v(" "),r("h2",{attrs:{id:"dml"}},[t._v("DML")]),t._v(" "),r("h3",{attrs:{id:"deletion"}},[t._v("Deletion")]),t._v(" "),r("p",[r("img",{attrs:{src:_(768),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"insertion"}},[t._v("Insertion")]),t._v(" "),r("p",[r("img",{attrs:{src:_(769),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"updating"}},[t._v("Updating")]),t._v(" "),r("p",[t._v("可以使用广义投影实现")]),t._v(" "),r("p",[r("img",{attrs:{src:_(770),alt:""}})]),t._v(" "),r("p",[t._v("例：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(771),alt:""}})])])}]};t.exports={attributes:{layout:"collection",title:"relation model",collection:"DatabaseConcept"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}},735:function(t,v,_){t.exports=_.p+"img/2-1.35ca0b1.png"},736:function(t,v,_){t.exports=_.p+"img/2-2.4e54f4b.png"},737:function(t,v,_){t.exports=_.p+"img/2-3.3c192dc.png"},738:function(t,v,_){t.exports=_.p+"img/2-4.5bca7dc.png"},739:function(t,v,_){t.exports=_.p+"img/2-5.5f7556d.png"},740:function(t,v,_){t.exports=_.p+"img/2-6.5491dad.png"},741:function(t,v,_){t.exports=_.p+"img/2-7.e9f168e.png"},742:function(t,v,_){t.exports=_.p+"img/2-8.69a5b87.png"},743:function(t,v,_){t.exports=_.p+"img/2-9.3c4b3da.png"},744:function(t,v,_){t.exports=_.p+"img/2-11.34bc210.png"},745:function(t,v,_){t.exports=_.p+"img/2-10.ce58d6f.png"},746:function(t,v,_){t.exports=_.p+"img/2-12.f9c84cc.png"},747:function(t,v,_){t.exports=_.p+"img/2-13.3297415.png"},748:function(t,v,_){t.exports=_.p+"img/2-14.f7eadd1.png"},749:function(t,v,_){t.exports=_.p+"img/2-15.efcf09a.png"},750:function(t,v,_){t.exports=_.p+"img/2-16.9824cd3.png"},751:function(t,v,_){t.exports=_.p+"img/2-17.ba1c3cf.png"},752:function(t,v,_){t.exports=_.p+"img/2-18.6b4ed57.png"},753:function(t,v,_){t.exports=_.p+"img/2-19.1a1a3ac.png"},754:function(t,v,_){t.exports=_.p+"img/2-20.9dd016d.png"},755:function(t,v,_){t.exports=_.p+"img/2-21.aaa8895.png"},756:function(t,v,_){t.exports=_.p+"img/2-22.a99bc89.png"},757:function(t,v,_){t.exports=_.p+"img/2-23.a990765.png"},758:function(t,v,_){t.exports=_.p+"img/2-24.d010d8a.png"},759:function(t,v,_){t.exports=_.p+"img/2-28.ad7b2aa.png"},760:function(t,v,_){t.exports=_.p+"img/2-29.3db736b.png"},761:function(t,v,_){t.exports=_.p+"img/2-30.38290de.png"},762:function(t,v,_){t.exports=_.p+"img/2-31.392d4bf.png"},763:function(t,v,_){t.exports=_.p+"img/2-32.973b268.png"},764:function(t,v,_){t.exports=_.p+"img/2-25.b2f044a.png"},765:function(t,v,_){t.exports=_.p+"img/2-26.70295ae.png"},766:function(t,v,_){t.exports=_.p+"img/2-27.d38005b.png"},767:function(t,v,_){t.exports=_.p+"img/2-33.30ffa2b.png"},768:function(t,v,_){t.exports=_.p+"img/2-34.53b289d.png"},769:function(t,v,_){t.exports=_.p+"img/2-35.644d2e8.png"},770:function(t,v,_){t.exports=_.p+"img/2-36.f72ebab.png"},771:function(t,v,_){t.exports=_.p+"img/2-37.08276dd.png"}}]);