# DiscreteTom's Blog

>感谢[BY](https://github.com/qiubaiying)提供的[Blog搭建教程](https://github.com/qiubaiying/qiubaiying.github.io/wiki/%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA%E8%AF%A6%E7%BB%86%E6%95%99%E7%A8%8B)与[Huxpro](https://github.com/huxpro)提供的博客模板

[点我可以查看博客](https://discretetom.github.io/)

在原有模板的基础上做了些魔改，添加了[academic页面](https://discretetom.github.io/academic/)。魔改内容如下

## 导航栏

为了保证导航栏的顺序是blog-academic-tags-about，删除了nav.html中的Liquid语句，改为了静态的HTML

```html
<li><a href="{{ site.baseurl }}/">blogs</a></li>
<li><a href="{{ site.baseurl }}/academic/">academic</a></li>
<li><a href="{{ site.baseurl }}/tags/">tags</a></li>
<li><a href="{{ site.baseurl }}/about/">about</a></li>
```

## academic页面相关实现

设置academic页面的目的是存放一些系统性强、顺序的笔记

为了按照自定义的集合来展示内容，使用了jekyll提供的[collection](https://jekyllrb.com/docs/collections/)功能。

### collections文件结构

在_config.yml文件中添加：

```yml
collections:
  collection_name1:
    output: true
    title: chinese_collection_name1
  collection_name2:
    output: true
    title: chinese_collection_name2
```

因为collection的名字不能设置为中文，所以设置了属性title保存collection的中文名。这样在Liquid中可以使用变量`collection.label`获取collection的英文名，使用变量`collection.title`获取collection的中文名

设置好配置文件后，根据配置文件在根目录创建相应的collection的文件夹，文件夹命名为`_collection_name`，即在collection的名称前面加上`_`。如我的_config.yml内容为：

```yml
collections:
  _OperatingSystem:
    output: true
    title: 操作系统
```

那么根目录下应该新建文件夹名为`_OperatingSystem`

jekyll会把collection文件夹中带有yml头的文件渲染为页面，其他文件按照原目录结构拷贝。如我的目录结构是：

```
└───_OperatingSystem
    ├───img
    │   ├───1-1.png
    │   ├───1-2.png
    │   ├───1-3.png
    │   └───2-1.png
    ├───1.md
    ├───2.md
    ├───3.md
    └───4.md
```

即我把同一个collection中的文章命名为数字，并把图片放在同目录的img文件夹下。图片命名无格式要求，我通常使用`文章编号-文章内图片编号`来命名图片。

如果在本地部署了jekyll，那么在_site文件夹中可以看到经过jekyll处理后的目录结构是（因为我的_config.yml中permalink设置的是pretty）：

```
└───_OperatingSystem
    ├───img
    │   ├───1-1.png
    │   ├───1-2.png
    │   ├───1-3.png
    │   └───2-1.png
    ├───1
    │   └───index.html
    ├───2
    │   └───index.html
    ├───3
    │   └───index.html
    └───4
        └───index.html
```

所以在原markdown文件中使用`![](../img/1-1.png)`即可访问到图片1-1.png

### collection内文章排序

jekyll默认使用文件名排序，如果你和我一样使用数字命名collection内的文章，那么数字在0-9范围内都是没有问题的。但是出现10及以上数字的时候，根据字符串排序的规则，jekyll得到的顺序是（假设数字范围1-10）：

```
1.md
10.md
11.md
2.md
3.md
4.md
5.md
6.md
7.md
8.md
9.md
```

这会导致在Liquid循环中遍历文章以及使用变量`page.previous`与变量`page.next`的时候出现顺序错误

为了解决此问题，在出现长度不等的数字文章名称时需要在文件名前面补0以保证顺序，如：

```
01.md
02.md
03.md
04.md
05.md
06.md
07.md
08.md
09.md
10.md
11.md
```

>如果像我一样使用数字命名文章文件，则可以在文件的yml头使用title变量重新给文章一个好看的名字

### academic页面

存放在文件academic.html中。使用_layout/page.html作为布局文件。使用循环以显示所有collection和collection内的所有文章。

collections使用默认排序。如果想要手动设置collections的顺序，可以在_config.yml中给每个collection设置变量index，如：

```yml
collections:
  collection_name1:
    output: true
    title: chinese_collection_name1
    index: 2
  collection_name2:
    output: true
    title: chinese_collection_name2
    index: 1
```

这样在academic页面显示collections的顺序就会根据index从小到大排序

正如[上一节](#collection内文章排序)所说，排序collection内文章的依据是**文章文件名**，显示collection内文章名时使用的是title变量。所以还是强烈建议使用者在文章中使用title给文章起个好名字的，这样可以保证在自定义文章名的前提下保证文章的顺序

### collections布局

存放在_layout/collection.html中。用来给所有collection内文章进行布局。继承了post布局（同时继承了评论功能，这可能会导致collections里面文章很多的时候你的repository有超级多的issue。解决此问题的方案挺多的此处不再赘述）

在基础的显示collection内文章内容这一功能之上添加了显示collection内文章目录的功能。此目录和academic页面的目录显示相同的顺序和内容

为了实现显示目录这一功能必须要能够找到对应的collection。所以在collection内的每篇文章的yml头中都要加入变量`collection`，值为对应的`collection.label`。如我的`_OperatingSystem`目录下的所有markdown文件的yml头中都要有`collection: OperatingSystem`

这样在collection.html中使用Liquid循环遍历`site.collections`的`label`属性即可找到对应的collection并生成其目录

### 其他魔改的地方

因为academic内的文章不像post一样必须有date属性，所以修改了_layout/post.html使其在没有提供page.date变量时仍然能够正常显示