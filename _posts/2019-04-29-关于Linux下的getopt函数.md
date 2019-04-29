---
layout: post
author: DiscreteTom
subtitle: '参数重排序、区分选项与实参、无效选项相关'
catalog: true
tags:
  - Linux
---

## 写在前面

网上相关的博客挺多的。此处写三个似乎不是很容易查到的点

## 重排序参数

### 现象

[官方文档](http://man7.org/linux/man-pages/man3/getopt.3.html)有这么一段话:

>If there are no more option characters, getopt() returns -1. Then optind is the index in argv of the first argv-element that is not an option.

如果命令行选项在实参前面，这句话似乎没什么重要的。但是如果命令行选项写在了实参后面，比如`ls .. -R`，那么经过getopt遍历解析之后的argv数组会变成`ls -R ..`以便用户在分析命令行选项之后使用optind变量直接访问非选项部分

### 实验代码

```c
#include <getopt.h>
#include <unistd.h>
#include <time.h>
#include <stdio.h>

static const char *optString = "ral:h:m:";

int main(int argc, char ** argv)
{
  int opt;
  while ((opt = getopt(argc, argv, optString)) != -1)
  {
    switch (opt)
    {
    case 'r':
      printf("get r\n");
      break;
    case 'a':
      printf("get a\n");
      break;
    case 'l':
      printf("get l and %s\n", optarg);
      break;
    case 'h':
      printf("get h and %s\n", optarg);
      break;
    case 'm':
      printf("get m and %s\n", optarg);
      break;
    }
  }

  int i;
  for (i = 0; i < argc; ++i)
    printf("%s\n", argv[i]);
  return 0;
}
```

保存为test.c进行make然后执行，效果如下：

```bash
# ./test 123 -a -r
get a
get r
./test
-a
-r
123
```

## 区分命令行选项与实参

Linux系统文件名可以是除了`/`的任意字符组合（甚至不可打印字符）。如果文件名是`-R`，那么`ls -R`便不是打印`-R`而是递归输出当前目录了

解决方案是在参数里面加上`--`，那么`--`以后的参数都会视为实参而不是选项。比如上例，可以使用`ls -- -R`解决

如果使用getopt函数，它是可以识别`--`的，并会把`--`**及**后面的参数视为实参。所以`--`也会作为实参之一。

使用上文中的测试程序进行测试，效果如下：

```bash
# ./test 123 -a -r -- -m 123
get a
get r
./test
-a
-r
--
123
-m
123
```

可以看到如果`--`前面还有实参，getopt也会把`--`作为第一个实参以便进行处理。可以说是非常贴心了

## 无效的命令行选项

结论：**无效的命令行选项仍然视为选项**，不会作为实参进行重排序然后放到选项后面

测试：

```bash
# ./test 123 -a -b -r
get a
./test: invalid option -- 'b'
get r
./test
-a
-b
-r
123
```