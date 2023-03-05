(window.webpackJsonp=window.webpackJsonp||[]).push([[89,777,778],{1415:function(e,v,t){const _={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("div",{staticClass:"frontmatter-markdown"},[_("h2",{attrs:{id:"概述"}},[e._v("概述")]),e._v(" "),_("p",[e._v("bash比其他shell大，运行慢，功能强")]),e._v(" "),_("p",[e._v("与高级语言相比，批处理，效率低")]),e._v(" "),_("p",[e._v("shell没有关键字，只有命令（如if，如果if不在行首则可以视为变量或其他成分")]),e._v(" "),_("p",[e._v("真.命令式语言")]),e._v(" "),_("p",[e._v("策略与机制相分离，自己不实现很多功能，由shell之外的命令或程序实现。shell仅提供替换机制")]),e._v(" "),_("p",[e._v("shell自己连四则运算都不会。。")]),e._v(" "),_("h2",{attrs:{id:"启动bash"}},[e._v("启动bash")]),e._v(" "),_("ul",[_("li",[e._v("注册 - 登录成功即可\n"),_("ul",[_("li",[e._v("启动后会执行用户主目录下的"),_("code",{pre:!0},[e._v(".bash_profile")]),e._v("进行偏好设置")]),e._v(" "),_("li",[e._v("退出时执行"),_("code",{pre:!0},[e._v(".bash_logout")]),e._v("文件")])])]),e._v(" "),_("li",[e._v("交互式 - 输入bash命令\n"),_("ul",[_("li",[e._v("启动时执行"),_("code",{pre:!0},[e._v(".bashrc")])])])])]),e._v(" "),_("p",[e._v("系统级配置文件：")]),e._v(" "),_("ul",[_("li",[e._v("注册shell启动时执行"),_("code",{pre:!0},[e._v("/etc/profile")]),e._v("文件中的命令")]),e._v(" "),_("li",[e._v("注册shell退出时执行"),_("code",{pre:!0},[e._v("/etc/bash.bash.logout")]),e._v("中的命令")]),e._v(" "),_("li",[e._v("交互式shell启动时执行"),_("code",{pre:!0},[e._v("/etc/bash.bashrc")])])]),e._v(" "),_("h2",{attrs:{id:"脚本文件概述与执行"}},[e._v("脚本文件概述与执行")]),e._v(" "),_("p",[e._v("是文本文件。会新建子进程bash，并在子进程执行脚本")]),e._v(" "),_("p",[e._v("使用参数："),_("code",{pre:!0},[e._v("bash [bash-options] script_file script_params")])]),e._v(" "),_("p",[_("code",{pre:!0},[e._v("bash -x")]),e._v("参数显示运行到第几行")]),e._v(" "),_("p",[e._v("可以给文件设置可执行属性"),_("code",{pre:!0},[e._v("chmod u+x filename")]),e._v("，然后使用"),_("code",{pre:!0},[e._v("./filename")]),e._v("即可执行（在子进程的bash中")]),e._v(" "),_("blockquote",[_("p",[e._v("为什么要用"),_("code",{pre:!0},[e._v("./filename")]),e._v("来执行文件而不是直接输入"),_("code",{pre:!0},[e._v("filename")]),e._v("？因为如果仅提供"),_("code",{pre:!0},[e._v("filename")]),e._v("，bash会把它解释为命令（bash会把第一个单词解释为命令，其他为参数），并尝试在环境变量PATH指向的文件夹中进行搜索。PATH默认是不包含当前文件夹的，所以bash找不到此命令。而"),_("code",{pre:!0},[e._v("./filename")]),e._v("则提供了一个路径，告诉bash要在这个路径找可执行文件，所以可以执行。下文中关于环境变量的地方也会提到安全性")])]),e._v(" "),_("p",[_("code",{pre:!0},[e._v(".")]),e._v("是一个命令，意为把后面的命令在"),_("strong",[e._v("当前shell运行")]),e._v("，如"),_("code",{pre:!0},[e._v(". script_name script_params")])]),e._v(" "),_("h2",{attrs:{id:"历史"}},[e._v("历史")]),e._v(" "),_("h3",{attrs:{id:"历史表"}},[e._v("历史表")]),e._v(" "),_("p",[e._v("历史表 - 保存命令历史。FIFO。大小由环境变量HISTSIZE设定。如果要修改，应该放在"),_("code",{pre:!0},[e._v(".bashrc")]),e._v("文件中")]),e._v(" "),_("p",[e._v("查看历史表 - "),_("code",{pre:!0},[e._v("history")]),e._v("命令，或者查看用户目录下的"),_("code",{pre:!0},[e._v(".bash_history")]),e._v("文件")]),e._v(" "),_("h3",{attrs:{id:"历史替换"}},[e._v("历史替换")]),e._v(" "),_("p",[e._v("人机交互的时候可以使用上下箭头获得历史命令")]),e._v(" "),_("p",[e._v("可以使用"),_("code",{pre:!0},[e._v("!!")]),e._v("引用上一命令，使用"),_("code",{pre:!0},[e._v("!str")]),e._v("引用最近的以"),_("code",{pre:!0},[e._v("str")]),e._v("开头的命令")]),e._v(" "),_("h2",{attrs:{id:"别名"}},[e._v("别名")]),e._v(" "),_("p",[e._v("别名表 - 保存别名。执行任何命令时查询别名表")]),e._v(" "),_("ul",[_("li",[e._v("查看别名表 - 使用命令"),_("code",{pre:!0},[e._v("alias")])]),e._v(" "),_("li",[e._v("添加别名 - "),_("code",{pre:!0},[e._v('alias op_name="commands"')]),e._v("，如"),_("code",{pre:!0},[e._v('alias dir="ls -flad"')]),e._v("，这样在执行dir的时候就会执行"),_("code",{pre:!0},[e._v("ls -flad")])]),e._v(" "),_("li",[e._v("取消别名 - "),_("code",{pre:!0},[e._v("unalias n")])])]),e._v(" "),_("h2",{attrs:{id:"tab补全"}},[e._v("tab补全")]),e._v(" "),_("p",[e._v("命令的首个单词会在"),_("code",{pre:!0},[e._v("$PATH")]),e._v("下搜索命令，其他情况搜索当前目录下的文件进行补全")]),e._v(" "),_("h2",{attrs:{id:"重定向"}},[e._v("重定向")]),e._v(" "),_("h3",{attrs:{id:"输入重定向"}},[e._v("输入重定向")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("cmd < filename")]),e._v(" "),_("ul",[_("li",[e._v("从数据文件filename获取stdin")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("cmd << word")]),e._v(" "),_("ul",[_("li",[e._v("如果此命令出现在脚本文件中，则从脚本直接获取数据作为stdin直到遇到定界符"),_("code",{pre:!0},[e._v("word")]),e._v("并替换其中的变量与命令")]),e._v(" "),_("li",[e._v("如果是在当前bash执行此命令，则从stdin中读取数据直到遇到定界符"),_("code",{pre:!0},[e._v("word")]),e._v("并替换其中的变量与命令")]),e._v(" "),_("li",[e._v("如果要关闭替换，使用"),_("code",{pre:!0},[e._v("cmd << 'word")]),e._v("，bash会取消替换使用原字符串")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("cmd <<< data")]),e._v(" - 把后面的参数视为stdin，如"),_("code",{pre:!0},[e._v("base64 <<< 123456")])])]),e._v(" "),_("p",[e._v("例：已知脚本文件：")]),e._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[_("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v("TOAST\nNOW: "),_("span",{pre:!0,attrs:{class:"token variable"}},[_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("date")]),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("\nMy Home Directory is "),_("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$HOME")]),e._v("\nTOAST")]),e._v("\n")])]),e._v(" "),_("p",[e._v("被bash进行重定向后，会先把其中的`date`替换为指令并执行得到当前时间，把"),_("code",{pre:!0},[e._v("$HOME")]),e._v("替换为变量得到用户目录，然后作为stdin输入到cat。则输出应该类似于：")]),e._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("NOW: Sat Apr "),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("27")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("17")]),e._v(":16:56 CST "),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("2019")]),e._v("\nMy Home Directory is /root\n")])]),e._v(" "),_("h3",{attrs:{id:"输出重定向"}},[e._v("输出重定向")]),e._v(" "),_("p",[e._v("常见输出有2个：")]),e._v(" "),_("ul",[_("li",[e._v("stdout, fd=1")]),e._v(" "),_("li",[e._v("stderr, fd=2")])]),e._v(" "),_("blockquote",[_("p",[e._v("stdin的文件指示符是0")])]),e._v(" "),_("p",[e._v("gcc的错误使用的不是stdout而是stderr，所以more指令会失效")]),e._v(" "),_("p",[e._v("可以使用"),_("code",{pre:!0},[e._v("gcc -c filename 2 > filename2")]),e._v("其中2表示stderr")]),e._v(" "),_("p",[e._v("正常信息可以通过管道，错误信息输出到屏幕")]),e._v(" "),_("p",[e._v("stdout相关输出重定向：")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("cmd > filename")]),e._v("表示stdout重定向（覆盖")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("cmd >> filename")]),e._v("表示stdout追加到文件尾")])]),e._v(" "),_("p",[e._v("stderr相关输出重定向：")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("2 > filename")]),e._v("表示把文件句柄2重定向到filename")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("2 > &1")]),e._v("表示把文件句柄2重定向到文件句柄1指向的文件")])]),e._v(" "),_("p",[e._v("允许使用除了0、1、2以外的文件进行重定向，比如命令"),_("code",{pre:!0},[e._v("./myapp 5<a.txt 6>b.txt")]),e._v("，则在程序中可以直接使用文件5和6")]),e._v(" "),_("p",[e._v("例：想把stderr和stdout存放在同一个文件，正确的做法：")]),e._v(" "),_("p",[_("img",{attrs:{src:t(877),alt:""}})]),e._v(" "),_("p",[e._v("错误的做法（顺序错误）：")]),e._v(" "),_("p",[_("img",{attrs:{src:t(878),alt:""}})]),e._v(" "),_("h3",{attrs:{id:"管道"}},[e._v("管道")]),e._v(" "),_("p",[e._v("前一命令的stdout作为后一个命令的stdin")]),e._v(" "),_("p",[e._v("注意：所有管道命令都是在子shell中运行，父shell负责提供stdout到stdin的数据传输。所以父shell无法共享子shell的局部变量。如"),_("code",{pre:!0},[e._v("echo 123 | read a")]),e._v("，执行完毕后父shell是无法访问变量a的")]),e._v(" "),_("h2",{attrs:{id:"变量"}},[e._v("变量")]),e._v(" "),_("p",[_("strong",[e._v("无数据类型，只有字符串")])]),e._v(" "),_("p",[e._v("变量名的第一个字符必须是字母，其他可以是字母、数字、下划线")]),e._v(" "),_("p",[e._v("赋值："),_("code",{pre:!0},[e._v("var1=192.168.0.1")])]),e._v(" "),_("p",[e._v("也可以使用命令"),_("code",{pre:!0},[e._v("read")]),e._v("从stdin读取用户输入给变量")]),e._v(" "),_("p",[e._v("注意赋值作为一条命令，"),_("strong",[e._v("等号两侧不允许出现空格")])]),e._v(" "),_("p",[e._v("如果赋值的字符串包含空格，应该使用双引号包裹，如"),_("code",{pre:!0},[e._v('var1="hello world"')])]),e._v(" "),_("p",[e._v("引用变量的两种方法：")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("$name")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("${name}")])])]),e._v(" "),_("p",[e._v("字符串拼接"),_("code",{pre:!0},[e._v("${name}123")])]),e._v(" "),_("p",[e._v("引用未定义的变量，变量值为空字符串")]),e._v(" "),_("p",[e._v("设置shell默认行为（在bash中执行的命令")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("set -u")]),e._v(" 使用未定义变量时报错")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("set +u")]),e._v(" 未定义变量视为空串（默认")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("set -x")]),e._v(" 执行命令前输出shell替换后的命令与参数。为了区别正常的shell输出，输出前面加"),_("code",{pre:!0},[e._v("+")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("set +x")]),e._v(" 取消"),_("code",{pre:!0},[e._v("set -x")])])]),e._v(" "),_("p",[_("code",{pre:!0},[e._v("set")]),e._v("指令，查看环境变量、局部变量和自定义函数")]),e._v(" "),_("h2",{attrs:{id:"echo-printf命令"}},[e._v("echo & printf命令")]),e._v(" "),_("blockquote",[_("p",[e._v("echo有些系统不支持，建议printf命令")])]),e._v(" "),_("p",[_("code",{pre:!0},[e._v("echo arg1 arg2 ... argn")]),e._v(" - 输出"),_("code",{pre:!0},[e._v("arg1 arg2 ... argn")]),e._v("，参数之间用空格隔开，最后打印换行符")]),e._v(" "),_("p",[e._v("可以使用"),_("strong",[e._v("转义字符")]),e._v("输出非文字字符，使用选项"),_("code",{pre:!0},[e._v("echo -e")]),e._v("。支持C语言的常用字符串转移和"),_("code",{pre:!0},[e._v("\\c")])]),e._v(" "),_("p",[e._v("常用转义：")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("\\c")]),e._v(" - 打印完毕，不换行")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("\\b")]),e._v(" - 退格")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("\\n")]),e._v(" - 换行")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("\\r")]),e._v(" - 回车")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("\\t")]),e._v(" - 水平制表")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("\\\\")]),e._v(" - 反斜线")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("\\nnn")]),e._v(" - 三个八进制数描述的字符ASCII码")])]),e._v(" "),_("p",[e._v("举例：")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("echo Beijing   China")]),e._v(" - 输出Beijing和China，中间只有一个空格")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v('echo "Beijing    China')]),e._v(" - 输出Beijing和China，中间有实际传入的空格")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("echo -e '\\065'")]),e._v(" - 输出5")])]),e._v(" "),_("p",[e._v("printf命令和C语言的printf相似，如"),_("code",{pre:!0},[e._v("printf 'My Home is %s\\n' $HOME")])]),e._v(" "),_("h2",{attrs:{id:"环境变量与局部变量"}},[e._v("环境变量与局部变量")]),e._v(" "),_("p",[e._v("默认创建的shell变量为局部变量")]),e._v(" "),_("p",[e._v("使用"),_("code",{pre:!0},[e._v("export var1")]),e._v("把局部变量变为环境变量")]),e._v(" "),_("p",[e._v("shell启动的"),_("strong",[e._v("子进程继承环境变量，不继承局部变量")])]),e._v(" "),_("p",[e._v("子进程对环境变量的修改"),_("strong",[e._v("不影响")]),e._v("父进程的环境变量")]),e._v(" "),_("p",[e._v("系统环境变量：")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("HOME")]),e._v(" - 用户主目录的路径")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("PATH")]),e._v(" - 查找命令的路径\n"),_("ul",[_("li",[e._v("与windows不同，"),_("strong",[e._v("PATH不搜索当前目录")]),e._v("，因为搜索当前目录很危险（比如当前目录有一个叫ls的程序，程序内容是删库")]),e._v(" "),_("li",[e._v("PATH的格式 - 多个目录使用"),_("code",{pre:!0},[e._v(":")]),e._v("隔开。从前向后依次搜索")]),e._v(" "),_("li",[e._v("可以在PATH中添加当前目录，只需要添加"),_("code",{pre:!0},[e._v(".")]),e._v("到PATH中就可以，但是正如上面所说，"),_("strong",[e._v("非常危险不建议使用")])])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("TERM")]),e._v(" - 终端类型")])]),e._v(" "),_("p",[e._v("相关命令：")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("set")]),e._v(" - shell内部命令。列出当前所有变量及其值、自定义函数（包括环境变量和局部变量")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("env")]),e._v(" - 外部命令，路径为"),_("code",{pre:!0},[e._v("/bin/env")]),e._v("，列出环境变量及其值")])]),e._v(" "),_("p",[e._v("可以在shell里面直接用"),_("code",{pre:!0},[e._v("=")]),e._v("给变量赋值，如"),_("code",{pre:!0},[e._v("abc=123")]),e._v("。和在脚本中一样，等号两边不允许有空格，否则就变成了执行"),_("code",{pre:!0},[e._v("abc")]),e._v("这个命令，参数是"),_("code",{pre:!0},[e._v("=")]),e._v(" & "),_("code",{pre:!0},[e._v("123")]),e._v("了")]),e._v(" "),_("p",[e._v("也可以在执行某个程序的时候给特定变量赋值，如"),_("code",{pre:!0},[e._v("abc=123 ./a")])]),e._v(" "),_("p",[e._v("main函数第三个参数是环境变量"),_("code",{pre:!0},[e._v("char ** env")])]),e._v(" "),_("h2",{attrs:{id:"shell替换"}},[e._v("shell替换")]),e._v(" "),_("p",[e._v("shell的工作内容就是替换命令然后执行命令")]),e._v(" "),_("ul",[_("li",[e._v("变量替换 - 使用"),_("code",{pre:!0},[e._v("$")]),e._v("，如"),_("code",{pre:!0},[e._v("$HOME")])]),e._v(" "),_("li",[e._v("文件名生成 - 使用文件通配符"),_("code",{pre:!0},[e._v("*")]),e._v("等，按照字典序排列。如果没有可匹配文件，则保持带有"),_("code",{pre:!0},[e._v("*")]),e._v("的原文")]),e._v(" "),_("li",[e._v("命令替换 - 使用"),_("code",{pre:!0},[e._v("`cmd`")]),e._v("，如"),_("code",{pre:!0},[e._v("now=`date`")]),e._v("会执行命令"),_("code",{pre:!0},[e._v("date")]),e._v("之后用stdout替换字符串\n"),_("ul",[_("li",[e._v("命令替换可以使用"),_("code",{pre:!0},[e._v("$(cmd)")])])])])]),e._v(" "),_("h2",{attrs:{id:"shell内部变量-位置参数"}},[e._v("shell内部变量 - 位置参数")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("$0")]),e._v(" - 脚本文件本身的名字")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("$1, $2, ...")]),e._v(" - 脚本文件的命令行参数")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("$#")]),e._v(" - 命令行参数的个数")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v('"$*"')]),e._v(" - "),_("code",{pre:!0},[e._v('"$1 $2 ..."')])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v('"$@"')]),e._v(" - "),_("code",{pre:!0},[e._v('"$1" "$2" "$3" ...')]),e._v(" "),_("ul",[_("li",[e._v("用来把变长的命令行参数传递给命令")])])])]),e._v(" "),_("p",[e._v("命令"),_("code",{pre:!0},[e._v("shift")]),e._v("所有参数左移，参数数量"),_("code",{pre:!0},[e._v("$#")]),e._v("-1。可以加上一个数字作为左移数量，如"),_("code",{pre:!0},[e._v("shift 3")])]),e._v(" "),_("h2",{attrs:{id:"shell元字符与转义"}},[e._v("shell元字符与转义")]),e._v(" "),_("ul",[_("li",[e._v("空格与制表符 - 命令行参数的分隔符")]),e._v(" "),_("li",[e._v("回车 - 执行命令")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("<>|")]),e._v(" - 重定向与管道")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v(";")]),e._v(" - 用于一行内输入多个命令")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("&")]),e._v(" - 后台运行")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("$")]),e._v(" - 引用shell变量")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("`")]),e._v(" - 用于命令替换")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("*[]?")]),e._v(" - 用于文件通配符")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("\\")]),e._v(" - 转义，取消元字符的作用")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("()")]),e._v(" - 用于定义shell函数或者在子shell中执行一组命令")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v('"')]),e._v(" - 忽略除了"),_("code",{pre:!0},[e._v("$")]),e._v("和"),_("code",{pre:!0},[e._v("`")]),e._v("之外的元字符。剩下的需要转义的字符："),_("code",{pre:!0},[e._v('\\"')]),e._v(" & "),_("code",{pre:!0},[e._v("\\$")]),e._v(" & "),_("code",{pre:!0},[e._v("\\`")]),e._v(" & "),_("code",{pre:!0},[e._v("\\\\")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("'")]),e._v(" - 忽略所有元字符，包括转义字符。所以单引号引起的字符串里面不能出现单引号")])]),e._v(" "),_("p",[_("code",{pre:!0},[e._v("()<>|;&")]),e._v("这些字符自身起到分隔符的作用")]),e._v(" "),_("p",[e._v("转义字符后面跟非特殊字符，不同场合处理方式不同")]),e._v(" "),_("ul",[_("li",[e._v("如果在引号内（单引号或双引号），则维持字面含义，交给命令去处理转义。如"),_("code",{pre:!0},[e._v('printf "\\n"')]),e._v("就会把"),_("code",{pre:!0},[e._v("\\n")]),e._v("交给printf命令处理")]),e._v(" "),_("li",[e._v("如果没有引号，则为"),_("em",[e._v("未定义")]),e._v("的情况。通常忽略"),_("code",{pre:!0},[e._v("\\")]),e._v("，如"),_("code",{pre:!0},[e._v("echo \\n")]),e._v("会把n交给echo处理")])]),e._v(" "),_("h2",{attrs:{id:"shell逻辑判断"}},[e._v("shell逻辑判断")]),e._v(" "),_("h3",{attrs:{id:"命令返回值"}},[e._v("命令返回值")]),e._v(" "),_("p",[e._v("判断依据 - 命令返回值是否为0。0表示命令执行成功")]),e._v(" "),_("p",[e._v("命令的返回值为main函数的返回值，或调用了系统调用"),_("code",{pre:!0},[e._v("exit(code)")]),e._v("进行返回。exit函数的参数取值为0-255")]),e._v(" "),_("p",[e._v("如果main函数没有return则返回随机值，不能用来作为条件判断")]),e._v(" "),_("p",[e._v("shell内部变量"),_("code",{pre:!0},[e._v("$?")]),e._v("可以获取上一个命令的返回码")]),e._v(" "),_("p",[e._v("使用管道连接的各个命令，条件判断时以最后一个命令的返回值为准")]),e._v(" "),_("h3",{attrs:{id:"复合逻辑"}},[e._v("复合逻辑")]),e._v(" "),_("p",[e._v("满足"),_("strong",[e._v("短路计算")]),e._v("特性")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("cmd1 && cmd2")]),e._v(" - 如果cmd1执行成功则执行cmd2")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("cmd1 || cmd2")]),e._v(" - 如果cmd1执行失败则执行cmd2")])]),e._v(" "),_("p",[e._v("命令"),_("code",{pre:!0},[e._v("true")]),e._v(" & "),_("code",{pre:!0},[e._v("false")]),e._v("是两个程序，返回值分别为0和非0。位置在"),_("code",{pre:!0},[e._v("/bin/true")]),e._v(" & "),_("code",{pre:!0},[e._v("/bin/false")]),e._v("。有的shell为了提高效率把这两个值设为内部命令")]),e._v(" "),_("h3",{attrs:{id:"逻辑判断命令"}},[e._v("逻辑判断命令")]),e._v(" "),_("p",[e._v("分别是命令"),_("code",{pre:!0},[e._v("[")]),e._v("和命令"),_("code",{pre:!0},[e._v("test")])]),e._v(" "),_("blockquote",[_("p",[e._v("注意"),_("code",{pre:!0},[e._v("[")]),e._v("是一个命令而不是一个词法符号。路径为"),_("code",{pre:!0},[e._v("/usr/bin/[")])])]),e._v(" "),_("p",[e._v("命令"),_("code",{pre:!0},[e._v("[")]),e._v("要求最后一个命令行参数必须为"),_("code",{pre:!0},[e._v("]")]),e._v("。其他功能和命令"),_("code",{pre:!0},[e._v("test")]),e._v("相同。有的Linux系统把"),_("code",{pre:!0},[e._v("/usr/bin/[")]),e._v("设置为指向"),_("code",{pre:!0},[e._v("test")]),e._v("的符号链接文件")]),e._v(" "),_("p",[e._v("例："),_("code",{pre:!0},[e._v("test -r /etc/motd")]),e._v("等价于"),_("code",{pre:!0},[e._v("[ -r /etc/motd ]")])]),e._v(" "),_("p",[e._v("用法：")]),e._v(" "),_("ul",[_("li",[e._v("文件特性检测\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("-f")]),e._v(" - 普通文件")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-d")]),e._v(" - 目录文件")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-r")]),e._v(" - 可读")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-w")]),e._v(" - 可写")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-x")]),e._v(" - 可执行")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-s")]),e._v(" - size>0")]),e._v(" "),_("li",[e._v("例："),_("code",{pre:!0},[e._v("[ -r /etc/motd ] && echo readable")])])])]),e._v(" "),_("li",[e._v("字符串比较\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("=")]),e._v(" - 字符串相等。可以使用"),_("code",{pre:!0},[e._v("==")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("!=")]),e._v(" - 字符串不等")]),e._v(" "),_("li",[e._v("例："),_("code",{pre:!0},[e._v('[ "$a" = "" ]')]),e._v("判断"),_("code",{pre:!0},[e._v("$a")]),e._v("是否为空。记得加引号，因为如果"),_("code",{pre:!0},[e._v("$a")]),e._v("为空被shell替换，不加引号就会忽略此参数")]),e._v(" "),_("li",[e._v("注意等号和不等号两侧的空格不能省略。因为他们是作为参数传进命令的")])])]),e._v(" "),_("li",[e._v("整数比较\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("-eq")]),e._v(" - equal")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-ne")]),e._v(" - not equal")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-gt")]),e._v(" - greater than")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-ge")]),e._v(" - greater equal")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-lt")]),e._v(" - less than")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-le")]),e._v(" - less equal")])])]),e._v(" "),_("li",[e._v("复合条件\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("!")]),e._v(" - not")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-o")]),e._v(" - or")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-a")]),e._v(" - and")])])])]),e._v(" "),_("h2",{attrs:{id:"命令组合"}},[e._v("命令组合")]),e._v(" "),_("p",[e._v("类似于C语言的复合语句，组合在一起的命令视为一个整体。可以集体管道、重定向，或者满足条件时执行多个命令")]),e._v(" "),_("p",[e._v("例：")]),e._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DIR")]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/bin\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" -d "),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$DIR")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$DIR")]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Current Directory is '),_("span",{pre:!0,attrs:{class:"token variable"}},[_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v('"')]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),_("span",{pre:!0,attrs:{class:"token variable"}},[_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("wc")]),e._v(" -l"),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(' files"')]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),e._v("\n")])]),e._v(" "),_("p",[e._v("可以使用"),_("code",{pre:!0},[e._v("{}")]),e._v("和"),_("code",{pre:!0},[e._v("()")]),e._v("进行命令组合。使用"),_("code",{pre:!0},[e._v("{}")]),e._v("表示在当前shell执行，使用"),_("code",{pre:!0},[e._v("()")]),e._v("表示在子shell执行")]),e._v(" "),_("p",[_("strong",[e._v("注意")]),e._v("："),_("code",{pre:!0},[e._v("{}")]),e._v("并不是shell的元字符，而是作为特殊的命令处理，也就是命令"),_("code",{pre:!0},[e._v("{")]),e._v("和命令"),_("code",{pre:!0},[e._v("}")]),e._v("，所以需要主动分隔大括号和普通命令。如果是在shell文件中，那么可以使用换行解决（把换行解释为"),_("code",{pre:!0},[e._v(";")]),e._v("）。如果写在同一行，那么左大括号右面要有一个空格（因为"),_("code",{pre:!0},[e._v("{")]),e._v("是命令），右大括号前面要有"),_("code",{pre:!0},[e._v(";")]),e._v("作为命令的分隔，如"),_("code",{pre:!0},[e._v("{ ls -l; ps;}")]),e._v("。而"),_("code",{pre:!0},[e._v("()")]),e._v("是shell元字符，只需要"),_("code",{pre:!0},[e._v("(ls -l;ps)")]),e._v("就行，不需要多余的空格和分号")]),e._v(" "),_("h2",{attrs:{id:"条件分支"}},[e._v("条件分支")]),e._v(" "),_("h3",{attrs:{id:"if"}},[e._v("if")]),e._v(" "),_("p",[e._v("语法：")]),e._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" condition\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("then")]),e._v("\n  list\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("elif")]),e._v(" confition\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("then")]),e._v("\n  list\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("else")]),e._v("\n  list\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("fi")]),e._v("\n")])]),e._v(" "),_("p",[e._v("其中"),_("code",{pre:!0},[e._v("if/then/elif/else/fi")]),e._v("为"),_("strong",[e._v("内部命令")]),e._v("（shell没有关键字之说）。原理应该是给shell内部某个flag变量赋值")]),e._v(" "),_("p",[e._v("合并行：")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("then")]),e._v("可以和then后面的list合并为一行")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("if")]),e._v("不可以和"),_("code",{pre:!0},[e._v("then")]),e._v("合并。但是可以通过分号合并，如"),_("code",{pre:!0},[e._v("if condition;then")])]),e._v(" "),_("li",[e._v("与C语言不同，then与else或fi配对，不需要大括号")])]),e._v(" "),_("h3",{attrs:{id:"case"}},[e._v("case")]),e._v(" "),_("p",[e._v("语法：")]),e._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("case")]),e._v(" word "),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v("\npattern1"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" list1"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\npattern2"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" list2"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("esac")]),e._v("\n")])]),e._v(" "),_("p",[e._v("注意：")]),e._v(" "),_("ul",[_("li",[e._v("word与pattern匹配使用的是shell的文件名匹配规则")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v(";;")]),e._v("是一个整体，不能在两个分号间加空格，也不能用空行代替")]),e._v(" "),_("li",[e._v("可以使用竖线表示多个模式")]),e._v(" "),_("li",[e._v("如果存在word匹配多个pattern，则仅执行第一个匹配的命令表")])]),e._v(" "),_("p",[e._v("实例：")]),e._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("case")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$1")]),e._v('"')]),e._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v("\nstart"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"start service"')]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nstop"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"stop service"')]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nforce-reload"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("restart"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$0")]),e._v(" stop\n  "),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$0")]),e._v(" start\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nstatus"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"this is the status"')]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n*"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Usage: '),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$0")]),e._v(' {start|stop|restart|force-reload|status}"')]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exit")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("esac")]),e._v("\n")])]),e._v(" "),_("h2",{attrs:{id:"注释"}},[e._v("注释")]),e._v(" "),_("p",[e._v("使用"),_("code",{pre:!0},[e._v("#")]),e._v("作为注释")]),e._v(" "),_("h2",{attrs:{id:"表达式计算"}},[e._v("表达式计算")]),e._v(" "),_("p",[e._v("shell内部只有字符串这一种数据类型。不支持四则运算、正则表达式运算等。需要借助其他命令实现")]),e._v(" "),_("p",[e._v("有的shell（包括bash）为了提高效率，提供内部命令版本的"),_("code",{pre:!0},[e._v("echo/printf/expr/test/[")]),e._v("命令。仅仅是性能优化措施。")]),e._v(" "),_("p",[_("code",{pre:!0},[e._v("expr")]),e._v("支持：")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("()")]),e._v(" - 括号")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("+-*/%")]),e._v(" - 算术运算")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("> >= < <= = !=")]),e._v(" - 关系运算")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("| &")]),e._v(" - 逻辑运算")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v(":")]),e._v(" - 正则表达式运算")])]),e._v(" "),_("p",[e._v("注意"),_("strong",[e._v("转义")]),e._v("。以及，"),_("code",{pre:!0},[e._v("expr")]),e._v("是命令，所以需要必要的空格作为分隔，如计算"),_("code",{pre:!0},[e._v("x=a*(b+c)")]),e._v("：")]),e._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("x")]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),_("span",{pre:!0,attrs:{class:"token variable"}},[_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("expr")]),e._v(" $a "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("* "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(" $b + $c "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("x")]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),_("span",{pre:!0,attrs:{class:"token variable"}},[_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("expr")]),e._v(" $a "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v("'*'")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v("'('")]),e._v(" $b + $c "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v("')'")]),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("\n")])]),e._v(" "),_("p",[e._v("正则表达式的用法："),_("code",{pre:!0},[e._v("expr string : pattern")]),e._v("，输出匹配长度。如果pattern中有使用"),_("code",{pre:!0},[e._v("\\(")]),e._v("&"),_("code",{pre:!0},[e._v("\\)")]),e._v("括起来的部分，如果匹配则打印括号内能匹配的部分，否则打印空串。例：")]),e._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[_("span",{pre:!0,attrs:{class:"token function"}},[e._v("expr")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("123")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"[0-9]*"')]),e._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# output: 3")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("expr")]),e._v(" A123 "),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"[0-9]*"')]),e._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# output: 0")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("expr")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$unit")]),e._v('"')]),e._v(" "),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('".*"')]),e._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# output: length of $unit")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("expr")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token variable"}},[_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(" "),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.*/\\([^/]*\\)$'")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# output: 路径的最后一个分量")]),e._v("\n")])]),e._v(" "),_("h2",{attrs:{id:"eval"}},[e._v("eval")]),e._v(" "),_("p",[e._v("把程序的输入或者数据作为程序来执行")]),e._v(" "),_("p",[e._v("例：")]),e._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("a")]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("b")]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("200")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("read")]),e._v(" line\n"),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("eval")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$line")]),e._v('"')]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$result")]),e._v("\n")])]),e._v(" "),_("p",[e._v("输入"),_("code",{pre:!0},[e._v("result=`expr $a + $b + 1000`")])]),e._v(" "),_("h2",{attrs:{id:"循环"}},[e._v("循环")]),e._v(" "),_("h3",{attrs:{id:"while"}},[e._v("while")]),e._v(" "),_("p",[e._v("语法：")]),e._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("while")]),e._v(" condition\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n  list\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\n")])]),e._v(" "),_("p",[e._v("实现计数：")]),e._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$#")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("then")]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Usage: '),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$0")]),e._v(' : <number>"')]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("else")]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("count")]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$1")]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("while")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$count")]),e._v(" -gt "),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n    "),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("count")]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),_("span",{pre:!0,attrs:{class:"token variable"}},[_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("expr")]),e._v(" $count - "),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("\n    "),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" -e "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),_("span",{pre:!0,attrs:{class:"token entity",title:"\\015"}},[e._v("\\015")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$count")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[e._v("\\c")]),e._v('"')]),e._v("\n    "),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("sleep")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("fi")]),e._v("\n")])]),e._v(" "),_("h3",{attrs:{id:"for"}},[e._v("for")]),e._v(" "),_("p",[e._v("语法1：")]),e._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[e._v("name")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" word1 word2 "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n  list\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\n")])]),e._v(" "),_("p",[e._v("语法2：")]),e._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" name\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n  list\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# equal to:")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# for name in $1 $2 ...")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# do")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#   list")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# done")]),e._v("\n")])]),e._v(" "),_("p",[_("code",{pre:!0},[e._v("seq")]),e._v("命令，生成数组：")]),e._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[e._v("i")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token variable"}},[_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("seq")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("99")]),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("ping")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0."),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$i")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\n")])]),e._v(" "),_("h3",{attrs:{id:"break-continue-exit"}},[e._v("break & continue & exit")]),e._v(" "),_("p",[e._v("break在循环中使用，终止循环。可以加上一个数字作为参数表示终止的循环层数")]),e._v(" "),_("p",[e._v("continue参考C语言")]),e._v(" "),_("p",[e._v("exit结束脚本程序的执行。参数为脚本返回码")]),e._v(" "),_("h2",{attrs:{id:"shell函数"}},[e._v("shell函数")]),e._v(" "),_("p",[e._v("语法："),_("code",{pre:!0},[e._v("name() { list;}")])]),e._v(" "),_("p",[e._v("函数定义完成之后可以作为一个自定义的内部命令执行。后面可以调用")]),e._v(" "),_("p",[e._v("调用的时候可以加参数，在函数体内部使用"),_("code",{pre:!0},[e._v("$1 $2 $* $@")]),e._v("等方式引用")]),e._v(" "),_("p",[e._v("函数内使用命令return设置返回值，0表示成功，1表示失败")]),e._v(" "),_("p",[e._v("函数内可以创建和修改变量。函数内的变量其他程序可以访问（即使函数已返回")])])}]};e.exports={attributes:{layout:"collection",title:"bash",collection:"LinuxProgrammingEnvironment"},vue:{render:_.render,staticRenderFns:_.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=_.render,this.$options.staticRenderFns=_.staticRenderFns}}}}},877:function(e,v,t){e.exports=t.p+"img/4-1.d94a5fa.png"},878:function(e,v,t){e.exports=t.p+"img/4-2.e48e18a.png"}}]);