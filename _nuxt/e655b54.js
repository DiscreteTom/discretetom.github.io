(window.webpackJsonp=window.webpackJsonp||[]).push([[103,570],{1280:function(t,e,r){const n={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"连接join"}},[t._v("连接join")]),t._v(" "),n("p",[t._v("本质是笛卡尔乘积Cartesian product")]),t._v(" "),n("p",[t._v("通常在from中使用")]),t._v(" "),n("pre",{staticClass:"language-sql"},[n("code",{pre:!0,attrs:{class:"language-sql"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" table_name1 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" table_name2 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" table_name1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attr1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" table_name2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attr1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("h3",{attrs:{id:"内连接与自然连接"}},[t._v("内连接与自然连接")]),t._v(" "),n("pre",{staticClass:"language-sql"},[n("code",{pre:!0,attrs:{class:"language-sql"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" table_name1 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("inner")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" table_name2 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" table_name1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attr1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" table_name2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attr2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" table_name1 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("natural")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" table_name2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("h3",{attrs:{id:"外连接"}},[t._v("外连接")]),t._v(" "),n("p",[t._v("使用null避免信息丢失的连接")]),t._v(" "),n("pre",{staticClass:"language-sql"},[n("code",{pre:!0,attrs:{class:"language-sql"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" table_name1 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("natural")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("outer")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" table_name2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("p",[t._v("有左外连接"),n("code",{pre:!0},[t._v("left outer join")]),t._v("、右外连接"),n("code",{pre:!0},[t._v("right outer join")]),t._v("、全外连接"),n("code",{pre:!0},[t._v("full outer join")])]),t._v(" "),n("h3",{attrs:{id:"on-using"}},[t._v("on & using")]),t._v(" "),n("p",[t._v("使用on指定连接的属性")]),t._v(" "),n("pre",{staticClass:"language-sql"},[n("code",{pre:!0,attrs:{class:"language-sql"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" T1 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" T2 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" T1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attr1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" T2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attr2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("p",[t._v("使用using简化以上语句")]),t._v(" "),n("pre",{staticClass:"language-sql"},[n("code",{pre:!0,attrs:{class:"language-sql"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" T1 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" T2 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("attr1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("h2",{attrs:{id:"view视图"}},[t._v("VIEW视图")]),t._v(" "),n("p",[t._v("也叫"),n("strong",[t._v("虚表")]),t._v(" - virtual relation")]),t._v(" "),n("p",[t._v("有时不希望某些用户看到整个逻辑模型，所以可以为其设置视图")]),t._v(" "),n("h3",{attrs:{id:"视图定义"}},[t._v("视图定义")]),t._v(" "),n("pre",{staticClass:"language-sql"},[n("code",{pre:!0,attrs:{class:"language-sql"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" view_name "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("query"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),n("p",[t._v("所有视图放在数据字典data dictionary中")]),t._v(" "),n("p",[t._v("定义view的时候不执行query语句。执行其他语句遇到视图时使用视图等价的基表替代")]),t._v(" "),n("p",[t._v("可以使用已有view定义其他view。")]),t._v(" "),n("ul",[n("li",[t._v("如果视图v2出现在定义视图v1的表达式中，则说v1是直接依赖(depend directly)v2的")]),t._v(" "),n("li",[t._v("如果视图v2被视图v1的定义所引用（直接或间接），则说v1是依赖(depend on)v2的")]),t._v(" "),n("li",[t._v("如果视图v依赖于自己，则说v是递归(recursive)的")])]),t._v(" "),n("h3",{attrs:{id:"视图的更改alter"}},[t._v("视图的更改alter")]),t._v(" "),n("p",[t._v("使用"),n("code",{pre:!0},[t._v("alter view view_name as <subquery>")]),n("strong",[t._v("重新定义")]),t._v("view，不能仅增加column")]),t._v(" "),n("h3",{attrs:{id:"视图的更新update"}},[t._v("视图的更新update")]),t._v(" "),n("p",[t._v("对视图的更新会转换成对基表的更新。但是不是所有视图都可以更新（比如使用聚集函数得到的视图则无法更新")]),t._v(" "),n("p",[t._v("可以像更新基表一样更新视图，即使用update int语句")]),t._v(" "),n("h3",{attrs:{id:"视图具体化materialized-views"}},[t._v("视图具体化Materialized Views")]),t._v(" "),n("p",[t._v("根据视图创建一个物理基表。这个物理基表不会像视图一样随着元数据的更新而自动更新，需要手动维护")]),t._v(" "),n("h2",{attrs:{id:"事务transactions"}},[t._v("事务Transactions")]),t._v(" "),n("p",[t._v("原子操作。要么成功要么失败")]),t._v(" "),n("p",[t._v("成功时commit work，失败时rollback work")]),t._v(" "),n("p",[t._v("默认情况下大多数DBMS在执行每一条SQL语句的时候都会commit一下")]),t._v(" "),n("h2",{attrs:{id:"完整性约束integrity-constraints"}},[t._v("完整性约束Integrity Constraints")]),t._v(" "),n("h3",{attrs:{id:"单个关系的完整性约束"}},[t._v("单个关系的完整性约束")]),t._v(" "),n("p",[t._v("创建表的时候能够使用以下约束：")]),t._v(" "),n("ul",[n("li",[t._v("not null")]),t._v(" "),n("li",[t._v("primary key")]),t._v(" "),n("li",[t._v("unique(attr1, attr2, …)\n"),n("ul",[n("li",[t._v("表明一系列属性能够形成候选键")]),t._v(" "),n("li",[t._v("候选键可以为空")])])]),t._v(" "),n("li",[t._v("check§")])]),t._v(" "),n("p",[t._v("例：")]),t._v(" "),n("pre",{staticClass:"language-sql"},[n("code",{pre:!0,attrs:{class:"language-sql"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" section "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tcourse_id "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tsec_id "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tsemester "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("year")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("numeric")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tbuilding "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\troom_number "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" slot id "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("course_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sec_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" semester"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("year")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("check")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("semester "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fall'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Winter'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Spring'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Summer'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("h3",{attrs:{id:"引用完整性referential-integrity"}},[t._v("引用完整性Referential Integrity")]),t._v(" "),n("p",[t._v("外键foreign key只能为一个表的一个元组的主键或null")]),t._v(" "),n("p",[t._v("修改或删除一个元组时，对于外键的三种操作：")]),t._v(" "),n("ul",[n("li",[t._v("置空set null")]),t._v(" "),n("li",[t._v("重置set default")]),t._v(" "),n("li",[t._v("级联删除cascade")])]),t._v(" "),n("p",[t._v("例：")]),t._v(" "),n("pre",{staticClass:"language-sql"},[n("code",{pre:!0,attrs:{class:"language-sql"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" t1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tid "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("integer")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" t2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tid "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreign")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" id "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("references")]),t._v(" t1\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("cascade")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("h3",{attrs:{id:"复杂check略"}},[t._v("复杂check（略")]),t._v(" "),n("p",[t._v("大多数DBMS不支持check")]),t._v(" "),n("p",[t._v("可以使用triggers实现check的功能")]),t._v(" "),n("h2",{attrs:{id:"sql数据类型相关"}},[t._v("SQL数据类型相关")]),t._v(" "),n("p",[t._v("不同的DBMS通常提供不同的内置数据类型")]),t._v(" "),n("h3",{attrs:{id:"时间相关数据类型"}},[t._v("时间相关数据类型")]),t._v(" "),n("ul",[n("li",[t._v("date\n"),n("ul",[n("li",[t._v("年月日")])])]),t._v(" "),n("li",[t._v("time\n"),n("ul",[n("li",[t._v("时分秒")])])]),t._v(" "),n("li",[t._v("timestamp\n"),n("ul",[n("li",[t._v("年月日时分秒")])])]),t._v(" "),n("li",[t._v("interval\n"),n("ul",[n("li",[t._v("时间区间")]),t._v(" "),n("li",[t._v("date/time/timestamp进行减法得到interval")])])])]),t._v(" "),n("h3",{attrs:{id:"用户自定义数据类型与域"}},[t._v("用户自定义数据类型与域")]),t._v(" "),n("pre",{staticClass:"language-sql"},[n("code",{pre:!0,attrs:{class:"language-sql"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Dollars "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("numeric")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" final"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" domain person_name "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("p",[t._v("类型和域相似。域可以包含更多限制（如not null）")]),t._v(" "),n("pre",{staticClass:"language-sql"},[n("code",{pre:!0,attrs:{class:"language-sql"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" domain degree_level "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constraint")]),t._v(" degree_level_test\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("check")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'234'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'345'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("h3",{attrs:{id:"大型对象类型large-object-types"}},[t._v("大型对象类型Large-Object types")]),t._v(" "),n("ul",[n("li",[t._v("blob - binary large object\n"),n("ul",[n("li",[t._v("存储大量二进制数据")])])]),t._v(" "),n("li",[t._v("clob - character large object\n"),n("ul",[n("li",[t._v("存储大量文本数据")])])])]),t._v(" "),n("p",[t._v("查询大型对象时通常返回一个指针而非整个对象")]),t._v(" "),n("h2",{attrs:{id:"sql授权"}},[t._v("SQL授权")]),t._v(" "),n("h3",{attrs:{id:"授权图"}},[t._v("授权图")]),t._v(" "),n("p",[n("img",{attrs:{src:r(762),alt:""}})]),t._v(" "),n("p",[t._v("root用户是DBMS的管理者(DBA: database administrator)")]),t._v(" "),n("p",[t._v("高级用户可以给下级用户授权")]),t._v(" "),n("p",[t._v("如果一个用户的授权被撤销(revoke)，则撤销所有下级用户的授权（如U1被撤销，U4和U5都被撤销，但是U5还有U2的授权所以仍然拥有一定权限")]),t._v(" "),n("h3",{attrs:{id:"权限类型"}},[t._v("权限类型")]),t._v(" "),n("p",[t._v("数据相关权限：")]),t._v(" "),n("ul",[n("li",[t._v("select(read)")]),t._v(" "),n("li",[t._v("insert")]),t._v(" "),n("li",[t._v("update")]),t._v(" "),n("li",[t._v("delete")])]),t._v(" "),n("p",[t._v("schema相关权限：")]),t._v(" "),n("ul",[n("li",[t._v("index\n"),n("ul",[n("li",[t._v("creation and deletion")])])]),t._v(" "),n("li",[t._v("resources\n"),n("ul",[n("li",[t._v("create new relations")])])]),t._v(" "),n("li",[t._v("alteration\n"),n("ul",[n("li",[t._v("add/delete attributes in a relation")])])]),t._v(" "),n("li",[t._v("drop")])]),t._v(" "),n("h3",{attrs:{id:"授权"}},[t._v("授权")]),t._v(" "),n("pre",{staticClass:"language-sql"},[n("code",{pre:!0,attrs:{class:"language-sql"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("privilege_list"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("relation_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" view_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("user_list"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("p",[t._v("其中user_list可以是：")]),t._v(" "),n("ul",[n("li",[t._v("一个user_id")]),t._v(" "),n("li",[t._v("public - 所有用户")]),t._v(" "),n("li",[t._v("一个role")])]),t._v(" "),n("p",[t._v("privilege可以是：")]),t._v(" "),n("ul",[n("li",[t._v("select")]),t._v(" "),n("li",[t._v("insert")]),t._v(" "),n("li",[t._v("update")]),t._v(" "),n("li",[t._v("delete")]),t._v(" "),n("li",[t._v("all privileges")])]),t._v(" "),n("h3",{attrs:{id:"撤销授权"}},[t._v("撤销授权")]),t._v(" "),n("pre",{staticClass:"language-sql"},[n("code",{pre:!0,attrs:{class:"language-sql"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("revoke")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("privilege_list"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("relation_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" view_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("user_list"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("p",[t._v("同样，privilege_list可以是"),n("code",{pre:!0},[t._v("all")]),t._v("，user_list可以是"),n("code",{pre:!0},[t._v("public")])]),t._v(" "),n("h3",{attrs:{id:"角色roles"}},[t._v("角色Roles")]),t._v(" "),n("pre",{staticClass:"language-sql"},[n("code",{pre:!0,attrs:{class:"language-sql"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" role instructor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("p",[t._v("权限可以授给角色")]),t._v(" "),n("pre",{staticClass:"language-sql"},[n("code",{pre:!0,attrs:{class:"language-sql"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" table1 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" instructor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("p",[t._v("角色可以相互授权以继承权限")]),t._v(" "),n("pre",{staticClass:"language-sql"},[n("code",{pre:!0,attrs:{class:"language-sql"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" role1 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" role2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("h3",{attrs:{id:"其他授权相关略"}},[t._v("其他授权相关（略")]),t._v(" "),n("p",[t._v("权限转移等")]),t._v(" "),n("p",[t._v("详见课本4.6")]),t._v(" "),n("h2",{attrs:{id:"triggers"}},[t._v("Triggers")]),t._v(" "),n("p",[t._v("Triggers会自动执行语句")]),t._v(" "),n("p",[t._v("triggers由两个部分组成：")]),t._v(" "),n("ul",[n("li",[t._v("条件conditions")]),t._v(" "),n("li",[t._v("动作actions")])]),t._v(" "),n("h3",{attrs:{id:"events"}},[t._v("events")]),t._v(" "),n("p",[t._v("event类型：")]),t._v(" "),n("ul",[n("li",[t._v("insert")]),t._v(" "),n("li",[t._v("delete")]),t._v(" "),n("li",[t._v("update")])]),t._v(" "),n("p",[t._v("trigger可以before/after一个event的时候触发")]),t._v(" "),n("pre",{staticClass:"language-sql"},[n("code",{pre:!0,attrs:{class:"language-sql"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("trigger")]),t._v(" trigger_name before "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" table_name "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])}]};t.exports={attributes:{layout:"collection",title:"Intermediate SQL",collection:"DatabaseConcept"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},762:function(t,e,r){t.exports=r.p+"img/4-1.66b9b1f.png"}}]);