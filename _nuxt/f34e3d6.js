(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{1410:function(v,_){const e={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"预备知识"}},[v._v("预备知识")]),v._v(" "),e("p",[v._v("文本文件相比二进制文件浪费空间")]),v._v(" "),e("p",[v._v("系统配置信息存放在"),e("code",{pre:!0},[v._v("/etc")]),v._v("目录下，功能上类似windows注册表")]),v._v(" "),e("p",[v._v("因特网大部分传输层(TCP)以上的网络协议都是文本型协议")]),v._v(" "),e("h2",{attrs:{id:"重定向与管道"}},[v._v("重定向与管道")]),v._v(" "),e("ul",[e("li",[v._v("输出重定向 - "),e("code",{pre:!0},[v._v(">")]),v._v("（输出到文件，即"),e("strong",[v._v("使用文件替代标准输出")])]),v._v(" "),e("li",[v._v("输入重定向 - "),e("code",{pre:!0},[v._v("<")]),v._v("（从文件输入，即"),e("strong",[v._v("使用文件替代标准输入")])]),v._v(" "),e("li",[v._v("管道 - "),e("code",{pre:!0},[v._v("|")]),v._v("（把前一个操作的标准输出作为后一个操作的标准输入")])]),v._v(" "),e("h2",{attrs:{id:"文本文件处理命令特点"}},[v._v("文本文件处理命令特点")]),v._v(" "),e("p",[v._v("通常程序从标准输入获取数据，标准输出显示数据。只有使用重定向或管道才会修改输入输出流")]),v._v(" "),e("p",[v._v("linux自带文本文件处理指令不指定处理对象文件名时从"),e("strong",[v._v("标准输入获得数据，输出到标准输出")]),v._v("，且多数命令支持指定多个文件")]),v._v(" "),e("p",[v._v("shell文件通配符"),e("code",{pre:!0},[v._v("*")]),v._v("对文件进行匹配是系统的工作，对程序不可见")]),v._v(" "),e("h2",{attrs:{id:"逐屏显示文件"}},[v._v("逐屏显示文件")]),v._v(" "),e("p",[v._v("可以使用的指令：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("pg")]),v._v(" - 已过时，废弃")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("more")]),v._v(" "),e("ul",[e("li",[v._v("使用方法："),e("code",{pre:!0},[v._v("more filename")])]),v._v(" "),e("li",[v._v("系统自带的文本处理指令，不提供filename时使用标准输入作为文件内容，所以可以结合管道使用")]),v._v(" "),e("li",[v._v("按下空格向下滚动一屏")]),v._v(" "),e("li",[v._v("按下回车向下滚动一行")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("q")]),v._v("退出")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("/pattern")]),v._v("模式匹配pattern（支持正则表达式")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("/")]),v._v("查找下一个匹配的字符串")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("h")]),v._v("显示帮助")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("ctrl+L")]),v._v("屏幕刷新")]),v._v(" "),e("li",[v._v("可以指定多个文件，多个文件依次显示")]),v._v(" "),e("li",[v._v("缺点 - 不能向上滚")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("less")]),v._v("（有些linux系统不支持\n"),e("ul",[e("li",[v._v("相比于"),e("code",{pre:!0},[v._v("more")]),v._v("指令，less可以向上滚")]),v._v(" "),e("li",[v._v("可以使用方向键、vim光标移动键、PageUp/PageDown/Home/End键定位，功能更强")]),v._v(" "),e("li",[v._v("‘less is more’ - 据说文档是这么写的")])])])]),v._v(" "),e("h2",{attrs:{id:"显示文件内容"}},[v._v("显示文件内容")]),v._v(" "),e("ul",[e("li",[v._v("cat(concatenate)\n"),e("ul",[e("li",[v._v("把文件视为文本打印")]),v._v(" "),e("li",[v._v("参数"),e("code",{pre:!0},[v._v("-n")]),v._v("显示行号")]),v._v(" "),e("li",[v._v("支持输入多个文件")]),v._v(" "),e("li",[v._v("无参数时从标准输入输入，使用ctrl+d（EOF）结束，所以可以直接使用"),e("code",{pre:!0},[v._v("cat > filename")]),v._v("进行文件输入")]),v._v(" "),e("li",[v._v("可以使用"),e("code",{pre:!0},[v._v("cat file_1 file_2 > file")]),v._v("进行文件拼接")])])]),v._v(" "),e("li",[v._v("od(octal dump)\n"),e("ul",[e("li",[v._v("按字节显示")]),v._v(" "),e("li",[v._v("参数"),e("code",{pre:!0},[v._v("-c")]),v._v("逐字符打印文件，遇到不可打印字符时打印编码（八进制")]),v._v(" "),e("li",[v._v("参数"),e("code",{pre:!0},[v._v("-t x1")]),v._v("以十六进制打印")])])]),v._v(" "),e("li",[v._v("head & tail\n"),e("ul",[e("li",[v._v("显示文件的头部和尾部")]),v._v(" "),e("li",[v._v("参数"),e("code",{pre:!0},[v._v("-n")]),v._v("选择行数\n"),e("ul",[e("li",[v._v("输入多个文件时，每个文件都输出选择的行数")]),v._v(" "),e("li",[v._v("如果输入行数为负，则把文件剩余部分均作为头/尾（类似于python中的切片")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("tail -f filename")]),v._v("实时打印文件尾被追加的内容（有些系统不支持此选项")])])]),v._v(" "),e("li",[v._v("tee\n"),e("ul",[e("li",[v._v("三通，把输入内容回显到stdout并写入文件")]),v._v(" "),e("li",[v._v("可以重定向到设备文件以实现两个屏幕同时显示")])])]),v._v(" "),e("li",[v._v("wc(word count)\n"),e("ul",[e("li",[v._v("列出文件的行数、单词数、字符数")]),v._v(" "),e("li",[v._v("输入文件超过1个时显示合计数据")]),v._v(" "),e("li",[v._v("参数"),e("code",{pre:!0},[v._v("-l")]),v._v("仅显示行")])])]),v._v(" "),e("li",[v._v("sort\n"),e("ul",[e("li",[v._v("排序文件内容，默认按照ascii码排序（67>123")]),v._v(" "),e("li",[v._v("参数"),e("code",{pre:!0},[v._v("-n")]),v._v("按照数字排序（123>67")]),v._v(" "),e("li",[v._v("有繁多的排序参数，此处略")])])]),v._v(" "),e("li",[v._v("tr\n"),e("ul",[e("li",[v._v("把标准输入的部分内容**逐字符（不是以字符串为单位）**替换后输出到标准输出（常和管道一起用\n"),e("ul",[e("li",[v._v("例1 - "),e("code",{pre:!0},[v._v("cat ls | tr abc 123")]),v._v("是把a换成1，b换成2，c换成3")]),v._v(" "),e("li",[v._v("例2 - "),e("code",{pre:!0},[v._v("cat ls | tr abb 123")]),v._v("是把a换成1，b换成2，b换成3（覆盖前面的‘b换成2’")])])]),v._v(" "),e("li",[v._v("可以使用"),e("code",{pre:!0},[v._v("'[]'")]),v._v("指定一个集合，如"),e("code",{pre:!0},[v._v("tr '[a-z]' '[A-Z]'")])]),v._v(" "),e("li",[v._v("可以使用"),e("code",{pre:!0},[v._v("\\")]),v._v("配合三个八进制数字表示一个字符，如"),e("code",{pre:!0},[v._v("tr % '\\012'")]),v._v("，注意使用"),e("strong",[v._v("单引号")])])])]),v._v(" "),e("li",[v._v("uniq\n"),e("ul",[e("li",[v._v("筛选文件中的重复行（两行必须相邻")]),v._v(" "),e("li",[v._v("经常和sort一起使用，先排序再删除相邻行，就不会出现相同的行了")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-u")]),v._v("只输出没有重复的行（unique")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-d")]),v._v("只输出重复的行，但是每行只输出一次（duplicated")]),v._v(" "),e("li",[v._v("没有"),e("code",{pre:!0},[v._v("-u")]),v._v("&"),e("code",{pre:!0},[v._v("-d")]),v._v("时，输出没有重复的行和重复的行（重复的行只输出一次")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-c")]),v._v("输出各行出现了几次")])])])]),v._v(" "),e("h2",{attrs:{id:"正则表达式"}},[v._v("正则表达式")]),v._v(" "),e("p",[v._v("不同软件的正则表达式规则可能不同")]),v._v(" "),e("p",[v._v("regular expression")]),v._v(" "),e("p",[v._v("简写：")]),v._v(" "),e("ul",[e("li",[v._v("regex")]),v._v(" "),e("li",[v._v("regexp")]),v._v(" "),e("li",[v._v("RE")])]),v._v(" "),e("h3",{attrs:{id:"原始正则表达式"}},[v._v("原始正则表达式")]),v._v(" "),e("p",[v._v("六个元字符")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v(".")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("*")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("[")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("\\")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("^")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("$")])])]),v._v(" "),e("p",[v._v("匹配规则：")]),v._v(" "),e("ul",[e("li",[v._v("单字符\n"),e("ul",[e("li",[v._v("非元字符与自身匹配")]),v._v(" "),e("li",[v._v("元字符前面加上转义字符"),e("code",{pre:!0},[v._v("\\")]),v._v("可以与自身匹配。"),e("code",{pre:!0},[v._v("\\")]),v._v("后面只能紧接着元字符，否则视为undefined")]),v._v(" "),e("li",[v._v("元字符"),e("code",{pre:!0},[v._v(".")]),v._v("可以匹配任意单字符")])])]),v._v(" "),e("li",[v._v("连接\n"),e("ul",[e("li",[v._v("顺序写就是连接，如"),e("code",{pre:!0},[v._v("abc")]),v._v("匹配"),e("code",{pre:!0},[v._v("abc")])])])]),v._v(" "),e("li",[v._v("集合\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("[]")]),v._v("中的内容视为一个集合，匹配集合中的一个字符")]),v._v(" "),e("li",[v._v("如"),e("code",{pre:!0},[v._v("[abc]")]),v._v("表示可以匹配a或b或c")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("[]")]),v._v("中的"),e("code",{pre:!0},[v._v("\\.*")]),v._v("表示其自身而不是元字符")]),v._v(" "),e("li",[v._v("取最外层匹配的方括号，所以"),e("code",{pre:!0},[v._v("[][]")]),v._v("匹配"),e("code",{pre:!0},[v._v("[")]),v._v("&"),e("code",{pre:!0},[v._v("]")])]),v._v(" "),e("li",[v._v("可以使用减号"),e("code",{pre:!0},[v._v("-")]),v._v("定义区间，如"),e("code",{pre:!0},[v._v("[a-d]")]),v._v("、"),e("code",{pre:!0},[v._v("[a-zA-Z0-9]")]),v._v("。减号前后无字符时失去区间的意义，和普通字符一样，如"),e("code",{pre:!0},[v._v("[ab-]")]),v._v("匹配a或b或-")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("^")]),v._v("在集合首时，表示求补集，如"),e("code",{pre:!0},[v._v("[^a-z]")]),v._v("表示匹配任意非小写字母。不在集合首时失去意义，如"),e("code",{pre:!0},[v._v("[a-z^]")]),v._v("匹配27个字符")])])]),v._v(" "),e("li",[v._v("星号"),e("code",{pre:!0},[v._v("*")]),v._v(" "),e("ul",[e("li",[v._v("单字符后面接"),e("code",{pre:!0},[v._v("*")]),v._v("表示此字符出现任意次（0到正无穷")]),v._v(" "),e("li",[v._v("因为集合"),e("code",{pre:!0},[v._v("[]")]),v._v("仅匹配一个字符，所以也可以使用"),e("code",{pre:!0},[v._v("*")]),v._v("，如"),e("code",{pre:!0},[v._v("[0-9]*")])])])]),v._v(" "),e("li",[v._v("锚点\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("$")]),v._v("在尾部时表示行尾，如"),e("code",{pre:!0},[v._v("123$")]),v._v("匹配行尾的123")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("^")]),v._v("在行首时表示行首，如"),e("code",{pre:!0},[v._v("^123")]),v._v("匹配行首的123")])])])]),v._v(" "),e("h3",{attrs:{id:"扩展正则表达式"}},[v._v("扩展正则表达式")]),v._v(" "),e("ul",[e("li",[v._v("因为原始正则表达式复杂而产生的扩展正则表达式ERE")]),v._v(" "),e("li",[v._v("早期Linux系统使用Perl脚本语言作为文本处理，所以也出现了PCRE: Perl-compatible RE")])]),v._v(" "),e("p",[v._v("常见扩展规则：")]),v._v(" "),e("ul",[e("li",[v._v("分组\n"),e("ul",[e("li",[v._v("使用圆括号"),e("code",{pre:!0},[v._v("()")]),v._v("表示分组，如"),e("code",{pre:!0},[v._v("(xy)*")]),v._v("可以匹配xy/xyxy/xyxyxy/…")])])]),v._v(" "),e("li",[v._v("逻辑或\n"),e("ul",[e("li",[v._v("使用"),e("code",{pre:!0},[v._v("|")]),v._v("表示逻辑或。常用于分组中，如"),e("code",{pre:!0},[v._v("(green|red)")]),v._v("表示匹配green或red")])])]),v._v(" "),e("li",[v._v("重复次数\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("+")]),v._v("表示1次或多于1次")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("?")]),v._v("表示0或1次")]),v._v(" "),e("li",[v._v("限定重复次数"),e("code",{pre:!0},[v._v("\\{m,n\\}")]),v._v("表示m到n次。转义字符"),e("code",{pre:!0},[v._v("\\")]),v._v("使大括号变成了元字符")])])]),v._v(" "),e("li",[v._v("预定义集合\n"),e("ul",[e("li",[v._v("通过扩展转义字符实现")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("\\d")]),v._v("表示数字，"),e("code",{pre:!0},[v._v("\\D")]),v._v("表示非数字")]),v._v(" "),e("li",[v._v("…")])])])]),v._v(" "),e("h3",{attrs:{id:"例vim中的re"}},[v._v("例：vim中的RE")]),v._v(" "),e("p",[v._v("如，使用替换指令："),e("code",{pre:!0},[v._v(":1,$s/[0-9]+/xx/g")])]),v._v(" "),e("p",[v._v("其中：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v(":")]),v._v("表示vim指令")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("1")]),v._v("表示指令起始位置为第一行")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("$")]),v._v("表示指令结束位置为最后一行")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("s")]),v._v("表示指令为替换")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("/")]),v._v("用来分隔替换的字符串")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("[0-9]+")]),v._v("表示匹配目标为所有长度大于0的数字")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("xx")]),v._v("表示替换目标串")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("g")]),v._v("表示如果一行中有多个这样的匹配则全部替换")])]),v._v(" "),e("h2",{attrs:{id:"文本行筛选"}},[v._v("文本行筛选")]),v._v(" "),e("p",[v._v("grep(Global RE Print) - 全局正则表达式输出")]),v._v(" "),e("p",[v._v("语法 - "),e("code",{pre:!0},[v._v("grep pattern filename(s)")]),v._v("，其中正则表达式使用单引号引起")]),v._v(" "),e("p",[v._v("参数：")]),v._v(" "),e("ul",[e("li",[v._v("-F/–fixed-strings - 直接匹配字符串而不是RE（相当于fgrep")]),v._v(" "),e("li",[v._v("-G/–basic-regexp - 匹配基础RE")]),v._v(" "),e("li",[v._v("-E/–extended-regexp - 匹配ERE")]),v._v(" "),e("li",[v._v("-P/–perl-regexp - 匹配PCRE")]),v._v(" "),e("li",[v._v("-n - 显示行号")]),v._v(" "),e("li",[v._v("-i - 忽略大小写")]),v._v(" "),e("li",[v._v("-v - 显示所有不包含模式的行（即反选")])]),v._v(" "),e("p",[v._v("相关指令")]),v._v(" "),e("ul",[e("li",[v._v("egrep - 使用ERE的grep")]),v._v(" "),e("li",[v._v("fgrep - 直接使用字符串快速搜索而不是使用RE")])]),v._v(" "),e("h2",{attrs:{id:"流编辑"}},[v._v("流编辑")]),v._v(" "),e("p",[v._v("行编辑器ed（废弃")]),v._v(" "),e("p",[v._v("流编辑器sed")]),v._v(" "),e("p",[v._v("用法：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("sed 'command' filenames")]),v._v(" - 没有文件输入时默认使用标准输入")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("sed -e 'command1' -e 'command2' filenames")]),v._v(" - 每个"),e("code",{pre:!0},[v._v("-e")]),v._v("后面可以接一个新的指令。可以使用很多"),e("code",{pre:!0},[v._v("-e")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("sed -f cmd_filename filenames")]),v._v(" - 使用文件"),e("code",{pre:!0},[v._v("cmd_filename")]),v._v("中的命令")])]),v._v(" "),e("p",[v._v("常用命令：")]),v._v(" "),e("ul",[e("li",[v._v("类似于VIM中的替换表达式"),e("code",{pre:!0},[v._v("s/raw_str/aim_str/g")]),v._v("，支持正则表达式")]),v._v(" "),e("li",[v._v("可以使用"),e("code",{pre:!0},[v._v("\\(")]),v._v("&"),e("code",{pre:!0},[v._v("\\)")]),v._v("来给提取表达式中的内容。"),e("code",{pre:!0},[v._v("\\0")]),v._v("匹配原正则表达式，"),e("code",{pre:!0},[v._v("\\n")]),v._v("表示第n个"),e("code",{pre:!0},[v._v("\\(")]),v._v("&"),e("code",{pre:!0},[v._v("\\)")]),v._v("中的内容，n只能为0-9\n"),e("ul",[e("li",[v._v("如把日期格式"),e("code",{pre:!0},[v._v("月-日-年")]),v._v("改为"),e("code",{pre:!0},[v._v("年.月.日")]),v._v("，比如"),e("code",{pre:!0},[v._v("04-26-1997 -> 1997.04.26")]),v._v("，可以使用"),e("code",{pre:!0},[v._v("s/\\([0-9][0-9]\\)-\\([0-9][0-9]\\)-\\([0-9][0-9]*\\)/\\3.\\1.\\2/g")]),v._v("。其中"),e("code",{pre:!0},[v._v("\\3")]),v._v("表示提取出的年，"),e("code",{pre:!0},[v._v("\\1")]),v._v("表示提取出的月，"),e("code",{pre:!0},[v._v("\\2")]),v._v("表示提取出的日。")])])])]),v._v(" "),e("h2",{attrs:{id:"复杂编辑"}},[v._v("复杂编辑")]),v._v(" "),e("p",[e("code",{pre:!0},[v._v("awk")]),v._v("指令 - 使用逐行处理文本的"),e("strong",[v._v("特殊语言")]),v._v("处理文本（awk是此程序三位设计者的名字的首字母")]),v._v(" "),e("p",[v._v("usage:")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("awk 'program' filenames")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("awk -f program_filename filenames")])])]),v._v(" "),e("p",[v._v("程序格式："),e("code",{pre:!0},[v._v("条件 {动作}")]),v._v("。awk自动对每行文本执行条件判断，满足条件则执行动作（内置循环")]),v._v(" "),e("p",[v._v("允许使用多段程序，程序之间使用空格或分号隔开")]),v._v(" "),e("p",[v._v("数据单元：")]),v._v(" "),e("ul",[e("li",[v._v("每行视为一个"),e("strong",[v._v("记录")]),v._v("，内置变量"),e("code",{pre:!0},[v._v("NR")]),v._v("为行号")]),v._v(" "),e("li",[v._v("每行中被分隔符分开的部分称为"),e("strong",[v._v("域")]),v._v("。分隔符可手动更改，默认为空白符（类似于python里面不加参数的"),e("code",{pre:!0},[v._v("str.split()")]),v._v("）内置变量"),e("code",{pre:!0},[v._v("$n")]),v._v("表示第n个域，"),e("code",{pre:!0},[v._v("$0")]),v._v("表示整行")])]),v._v(" "),e("p",[v._v("awk使用类似于C语言的语法，支持以下操作：")]),v._v(" "),e("ul",[e("li",[v._v("算术运算")]),v._v(" "),e("li",[v._v("关系运算")]),v._v(" "),e("li",[v._v("逻辑运算")]),v._v(" "),e("li",[v._v("正则表达式模式匹配\n"),e("ul",[e("li",[v._v("匹配运算符为"),e("code",{pre:!0},[v._v("~")]),v._v("，不匹配为"),e("code",{pre:!0},[v._v("!~")])]),v._v(" "),e("li",[v._v("比如："),e("code",{pre:!0},[v._v('$2 ~ "[1-9][0-9]*"')])])])]),v._v(" "),e("li",[v._v("关键字"),e("code",{pre:!0},[v._v("BEGIN")]),v._v("表示开始处理所有文本之前执行的操作")]),v._v(" "),e("li",[v._v("关键字"),e("code",{pre:!0},[v._v("END")]),v._v("表示处理所有文本之后执行的操作")]),v._v(" "),e("li",[v._v("自定义变量的赋值（脚本语言，不需要声明甚至不需要初始化，数字默认0")]),v._v(" "),e("li",[v._v("流程控制语句"),e("code",{pre:!0},[v._v("if")]),v._v(" & "),e("code",{pre:!0},[v._v("for")]),v._v(" & 表示程序块的"),e("code",{pre:!0},[v._v("{}")])]),v._v(" "),e("li",[v._v("输出"),e("code",{pre:!0},[v._v("print arg1, arg2, ...")]),v._v("（不需要括号，类似于python")]),v._v(" "),e("li",[v._v("格式输出"),e("code",{pre:!0},[v._v('printf("format_string", arg1, arg2, ...)')])])]),v._v(" "),e("p",[v._v("程序举例：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("awk '/guest/{printf(\"%s \", $2)}'")]),v._v(" - 对于内容存在"),e("code",{pre:!0},[v._v("guest")]),v._v("的行，输出其第二个域，输出使用空格分隔")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("awk '$1 > 2000 {print $2}'")]),v._v(" - 对于第一个域大于2000的行，输出此行第二个域")])]),v._v(" "),e("h2",{attrs:{id:"文件比较"}},[v._v("文件比较")]),v._v(" "),e("h3",{attrs:{id:"cmp"}},[v._v("cmp")]),v._v(" "),e("p",[e("code",{pre:!0},[v._v("usage: cmp file1 file2")])]),v._v(" "),e("p",[v._v("判断两个文件是否相同，文件不相同时输出第一个不同之处。文件完全相同时不输出。")]),v._v(" "),e("p",[v._v("WINDOWS系统中类似的指令为"),e("code",{pre:!0},[v._v("COMP")])]),v._v(" "),e("h3",{attrs:{id:"使用哈希算法的文件比较"}},[v._v("使用哈希算法的文件比较")]),v._v(" "),e("p",[v._v("常用于验证两个机器上的文件完整性")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("md5sum")]),v._v(" - 使用MD5算法可以生成16字节哈希值（即2^128分之一的撞车率）")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("sha1sum")]),v._v(" - 使用SHA-1算法生成20字节哈希值")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("sha512sum")]),v._v(" - 类似")])]),v._v(" "),e("p",[v._v("用法（以"),e("code",{pre:!0},[v._v("md5sum")]),v._v("为例：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("md5sum filenames")]),v._v(" - 生成哈希值。通常重定向输出到一个logfile里用来验证完整性")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("md5sum -c logfile")]),v._v(" - 使用logfile的内容检查文件夹内的文件。无误时输出OK")])]),v._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# ls")]),v._v("\na.out  test.cpp\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# md5sum a.out")]),v._v("\n84dbb852f8ec476ebb91c77dd4e52bb5  a.out\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# md5sum a.out test.cpp")]),v._v("\n84dbb852f8ec476ebb91c77dd4e52bb5  a.out\nb59e3b634fb2cbb321172de0548b5076  test.cpp\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# md5sum a.out test.cpp > log.txt")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# md5sum -c log.txt")]),v._v("\na.out: OK\ntest.cpp: OK\n")])]),v._v(" "),e("h3",{attrs:{id:"diff"}},[v._v("diff")]),v._v(" "),e("p",[v._v("使用最长公共子序列算法，列出两个文件的区别。可以用于版本管理")]),v._v(" "),e("p",[v._v("usage:")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("diff file1 file2")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("diff -u file1 file2")])])]),v._v(" "),e("p",[v._v("比较两个"),e("strong",[v._v("文本文件")]),v._v("，寻找二者差别")]),v._v(" "),e("p",[v._v("输出格式：")]),v._v(" "),e("ul",[e("li",[v._v("normal")]),v._v(" "),e("li",[v._v("unified")])]),v._v(" "),e("p",[v._v("-u参数会显示改变处前后3行的信息。-un会显示前后n行的信息，如-u0不显示前后行的信息")]),v._v(" "),e("h2",{attrs:{id:"vi"}},[v._v("vi")]),v._v(" "),e("p",[v._v("功能强大体积小。不支持编程语言的语法高亮和代码补全，仅为文本编辑器")]),v._v(" "),e("p",[v._v("两个模式：编辑模式和命令模式")]),v._v(" "),e("h3",{attrs:{id:"用户偏好设置"}},[v._v("用户偏好设置")]),v._v(" "),e("p",[v._v("用户偏好设置保存在用户目录下的"),e("code",{pre:!0},[v._v(".exrc")]),v._v("文件中（如果没有可以自行创建")]),v._v(" "),e("p",[v._v("每个用户单独一份。用户自行设置内容")]),v._v(" "),e("p",[v._v("常用内容：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("set number")]),v._v(" - 启动行标")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("set tabstop=4")]),v._v(" - 设置制表符长度为4")])]),v._v(" "),e("p",[v._v("也可以在运行时设置，命令为"),e("code",{pre:!0},[v._v(":set xxx")])]),v._v(" "),e("h3",{attrs:{id:"vi指令与命令略"}},[v._v("vi指令与命令（略")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("^")]),v._v(" - 行首")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("$")]),v._v(" - 行尾")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("ctrl+b")]),v._v(" - 向后翻页")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("ctrl+f")]),v._v(" - 向前翻页")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v(":123")]),v._v(" - 光标跳转到第123行")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v(":$")]),v._v(" - 光标跳转到文件尾")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v(".")]),v._v(" - 表示当前行号。直接按下"),e("code",{pre:!0},[v._v(".")]),v._v("表示重复上一次编辑操作")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("$")]),v._v(" - 表示最后一行行号")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("%")]),v._v(" - 括号配对")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("J")]),v._v(" - 行合并")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("ctrl+l")]),v._v(" - 刷新屏幕显示")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("ctrl+g")]),v._v(" - 显示状态")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("/pattern")]),v._v(" - 使用"),e("strong",[v._v("正则表达式")]),v._v("模式查找")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("n")]),v._v(" - 查找下一个")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("N")]),v._v(" - 查找上一个")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v(":n1,n2s/pattern/string/g")]),v._v(" - 模式替换\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("n1")]),v._v(" & "),e("code",{pre:!0},[v._v("n2")]),v._v("是行号。可以是数字，也可以使用"),e("code",{pre:!0},[v._v(".")]),v._v("表示当前行，"),e("code",{pre:!0},[v._v("$")]),v._v("表示末行")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("s")]),v._v("表示substitution，即替换")]),v._v(" "),e("li",[v._v("pattern使用正则表达式。可以用"),e("code",{pre:!0},[v._v("^")]),v._v("表示行首"),e("code",{pre:!0},[v._v("$")]),v._v("表示行尾")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("g")]),v._v("表示如果行内出现多次则行内替换所有匹配项")]),v._v(" "),e("li",[e("strong",[v._v("小心陷阱")]),v._v("：因为使用正则表达式，所以"),e("code",{pre:!0},[v._v("/a[i]/b[i]/")]),v._v("并不能把"),e("code",{pre:!0},[v._v("a[i]")]),v._v("替换为"),e("code",{pre:!0},[v._v("b[i]")])]),v._v(" "),e("li",[v._v("出现正则表达式元字符时切记使用"),e("code",{pre:!0},[v._v("\\")]),v._v("转义")]),v._v(" "),e("li",[v._v("可以把"),e("code",{pre:!0},[v._v("s")]),v._v("后面的"),e("code",{pre:!0},[v._v("/")]),v._v("改为其他字符，如"),e("code",{pre:!0},[v._v(":")]),v._v("/"),e("code",{pre:!0},[v._v("^")]),v._v("/"),e("code",{pre:!0},[v._v("$")]),v._v("等，命令格式就会变成"),e("code",{pre:!0},[v._v(":n1,n2s^pattern^string^g")]),v._v("，相当于替换了命令中的分隔符。")]),v._v(" "),e("li",[v._v("类似于sed指令，可以使用"),e("code",{pre:!0},[v._v("\\(")]),v._v(" & "),e("code",{pre:!0},[v._v("\\)")]),v._v("来保存结果，在目标string中可以使用"),e("code",{pre:!0},[v._v("\\1")]),v._v("/"),e("code",{pre:!0},[v._v("\\2")]),v._v("/…来引用")])])])]),v._v(" "),e("h2",{attrs:{id:"编辑时常遇到的异常情况"}},[v._v("编辑时常遇到的异常情况")]),v._v(" "),e("h3",{attrs:{id:"编辑器假死"}},[v._v("编辑器“假死”")]),v._v(" "),e("p",[v._v("鉴于windows系统中使用ctrl组合键实现保存，所以在linux中常常会误按"),e("code",{pre:!0},[v._v("ctrl+s")]),v._v(" & "),e("code",{pre:!0},[v._v("ctrl+z")])]),v._v(" "),e("p",[e("code",{pre:!0},[v._v("ctrl+s")]),v._v("使系统进入流量控制状态。使用"),e("code",{pre:!0},[v._v("ctrl+q")]),v._v("解除流量控制")]),v._v(" "),e("p",[e("code",{pre:!0},[v._v("ctrl+z")]),v._v("使进程被挂起suspend，暂停运行，进程处于stopped状态。在bash使用jobs或bg命令可以查看后台进程。使用"),e("code",{pre:!0},[v._v("fg n")]),v._v("或"),e("code",{pre:!0},[v._v("fg %n")]),v._v("或直接在bash输入"),e("code",{pre:!0},[v._v("%n")]),v._v("恢复n号作业")]),v._v(" "),e("h3",{attrs:{id:"backspace无法使用"}},[v._v("backspace无法使用")]),v._v(" "),e("p",[v._v("现象：输入bash命令时backspace可用，运行自己写的程序时backspace无法使用")]),v._v(" "),e("p",[v._v("原因：行律设置不正确。")]),v._v(" "),e("p",[v._v("backspace的ascii码是"),e("code",{pre:!0},[v._v("ctrl+h")]),v._v("，执行"),e("code",{pre:!0},[v._v("stty erase ^H")]),v._v("即可设定。使用"),e("code",{pre:!0},[v._v("ctrl+h")]),v._v("和backspace都可以删除")]),v._v(" "),e("h3",{attrs:{id:"屏幕乱码"}},[v._v("屏幕乱码")]),v._v(" "),e("p",[v._v("通常是把二进制文件作为文本输出导致。输出的过程中可能恰巧输出了转义字符导致终端字符集被修改。断开连接重新登录即可")]),v._v(" "),e("h3",{attrs:{id:"文本文件格式问题"}},[v._v("文本文件格式问题")]),v._v(" "),e("p",[v._v("linux文件在windows下打开，所有内容在一行内")]),v._v(" "),e("p",[v._v("因为windows识别的是回车换行，linux仅识别换行。在linux端进行格式转换即可")]),v._v(" "),e("h3",{attrs:{id:"中文编码问题"}},[v._v("中文编码问题")]),v._v(" "),e("p",[v._v("现象：从windows迁移来的文件只有中文字符乱码")]),v._v(" "),e("p",[v._v("原因：文件使用GBK编码而非UTF-8")]),v._v(" "),e("p",[v._v("检查linux系统与终端设置：linux与语言相关的环境变量"),e("code",{pre:!0},[v._v("LANG")]),v._v("应为"),e("code",{pre:!0},[v._v("en_US.UTF-8")]),v._v("。设置方法："),e("code",{pre:!0},[v._v("export LANG=en_US.UTF-8")]),v._v("。终端字符集自行设置（如在putty里面设置。注意要使用中文字体，否则字库里面没有对应编码的字形")]),v._v(" "),e("p",[v._v("或者使用命令"),e("code",{pre:!0},[v._v("iconv -f gbk -t utf8")])])])}]};v.exports={attributes:{layout:"collection",title:"文本文件处理",collection:"LinuxProgrammingEnvironment"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);