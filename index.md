# DiscreteTom Blog

欢迎来我的博客:)

## Contents

- [DiscreteTom Blog](#discretetom-blog)
	- [Contents](#contents)
	- [About Android Studio](#about-android-studio)
	- [About QT](#about-qt)
	- [About Windows](#about-windows)
	- [Academic Materials](#academic-materials)
	- [Others](#others)
	- [Notes](#notes)
	- [Donate](#donate)
	- [Contact me](#contact-me)

## About Android Studio

- [AS解决Gradle同步失败的相关问题 2018-7-8](12.md)

## About QT
- [Qt-关闭QMessageBox之后程序自动关闭了? 2018-5-8](9.md)
- [Qt-Windows应用开机自启动相关 2018-4-9](8.md)
- [Qt-自定义Object如何支持中英文键盘输入 2018-3-28](6.md)
- [Qt-设置与取消窗口置顶 2018-3-21](5.md)
- [Qt-添加图标、资源文件相关、最小化到托盘 2018-3-4](2.md)

## About Windows

- [Windows防止应用双开 2018-5-26](11.md)
- [屏蔽Windows任务栏 2018-5-25](10.md)
- [Windows下使用快捷键启动应用程序 2018-4-7](7.md)
- [如何快速在指定目录启动Windows控制台(part 2) 2018-3-13](4.md)
- [如何快速在指定目录启动Windows控制台 2018-3-4](3.md)

## Academic Materials

- 大二第二学期知识点
	- [计算机网络](Study/2ndYear2ndSemester/ComputerNetwork/Chapter1.md)
	- [计算机组成原理](Study/2ndYear2ndSemester/ComputerOrganizationPrinciple/Chapter1.md)
	- [算法设计与分析](Study/2ndYear2ndSemester/AlgorithmDesignAndAnalyze/Chapter1.md)
	- [形式语言与自动机](Study/2ndYear2ndSemester/FormalLanguageAndAutomata/Chapter1.md)
	- [VHDL基础](Study/2ndYear2ndSemester/VHDL/vhdl.md)
- 大三第一学期知识点
  - [自然语言处理NLP](Study/3rdYear1stSemester/NaturalLanguageProcessing/Chapter1.md)

## Others

- [如何利用GitHub创建博客 2018-3-4](1.md)

## Notes

- 如果Qt在debug的时候只显示变量窗口不显示局部变量，检查构建套件Kit和Debugger是否一致
- Windows中Hosts文件的位置：`C:\Windows\System32\drivers\etc`。更改Hosts文件需要**以管理员身份打开**
- 安装SDK时如果JDK已经安装但是SDK显示找不到JDK，可能是JDK版本太新。尝试安装旧版本JDK，如**JDK8u171**
- C++中把字面字符串"Hello"转换为LPCWSTR，可以直接在字符串前面加L，即L"Hello"
- Qt中使用[QHotkey](https://github.com/xtuer/QHotkey)添加全局热键，不要使用qxtglobalshortcut，后者已停止更新，不支持Qt5.3.1以上版本
- C4D渲染到*图片查看器*后需要手动保存。如果不想手动保存，应选择*添加到渲染队列*
- C++容器vector.size()的返回值无符号 如果vector长度为0则vector.size()-1的值不是-1而是一个非常大的数
- clock()函数精度只有15ms 高精度计时应使用chrono::steady_clock

## Donate

如果觉得本博客有用欢迎[打赏](donate.md)支持:)

## Contact me

discrete_tom@bupt.edu.cn