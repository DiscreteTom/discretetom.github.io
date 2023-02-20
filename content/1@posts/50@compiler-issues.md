---
title: 写编译器前端（词法分析+语法分析）踩过的坑与最佳实践
description: 绝对不是在给 retsac 打广告
---

## 前言

如果你和我一样想写编译器前端，最好不要和我一开始一样把它想得太简单。。有很多坑是在实际实现的过程中才会意识到的

本文记录了我在实现 [retsac](https://github.com/DiscreteTom/retsac) 的过程中踩过的坑，以及一些设计理念

本文中的语法分析器/parser 均使用 LR 自底向上分析法

## 正则表达式与自定义词法规则

retsac 的定位是一个**快速**构建编译器前端的工具，而正则表达式是可以快速描述词法规则的方案之一，所以 retsac 在很早期的版本就支持使用正则表达式来定义 token 的内容，这也是 retsac 选择使用 TypeScript 来构建的原因之一，毕竟 TypeScript 内置正则表达式类型

不过，虽然支持了正则表达式，使用的时候仍然需要注意以下几个问题：

- 正则表达式在解析字符串的时候是允许回溯的，这使得正则表达式的功能很强大，但是如果写的不好，会有严重的性能问题
- 正则表达式无法对流进行处理，所以我们只能先拿到完整的输入文件字符串，然后交给正则表达式进行解析
- lexer 期望每次都是从剩余字符串的头部开始解析，但是正则表达式并不是。比如使用正则表达式`/port/`对字符串`import`进行匹配，也是可以匹配成功的。所以如果用户希望从剩余字符串的头部开始匹配，需要在正则表达式里面显式使用`^`，比如`/^port/`就无法匹配`import`了

但是，虽然正则表达式很强大，有时候它也会使代码的可读性变得很差，或者有些词法规则难以使用正则表达式来实现。所以 retsac 支持使用自定义函数来对输入的字符串进行解析

## 语法规则中允许出现字面量

定义语法规则的时候，最好可以使用字面量来描述语法规则。比如`exp '+' exp`就比`exp add exp`看起来要直观的多

不过，为了能够从语法规则中解析出来这些字面量所对应的 token 类型，需要确保 lexer 是能够对这些字面量进行解析的。也就是说，其实是 lexer 在把语法规则里面的字面量变成 token

```ts
lexer.define({ add: exact("+") });
parser.define({ exp: `exp '+' exp` }); // => exp add exp
```

还要注意的是，字面量和 token type 可能并不是一一对应的，一种 token 可能会有无限种字面量，比如字符串常量或数字常量。所以，虽然我们可以直接把`exp '123' exp`解析为`exp number exp`，我们实际在解析输入字符串并根据语法规则生成语法树的时候，记得要使用字面量`123`去进行匹配，而不是直接匹配`number`类型

## 一边生成语法树一边计算结果

在整个 parse 结束后，我们会得到一个语法树，但是有时候我们希望 parse 结束的时候我们就能拿到我们想要的结果

比如，假设我们想要设计一个计算器，我们不希望先生成语法树，然后再基于语法树进行数值计算。我们希望在生成语法树的过程中，就能够把值给算出来

为了实现这个效果，语法树的每个节点都可能需要保存一个数据，当新的节点被 reduce 出来的时候，会根据子节点的数据计算新节点的数据

retsac 提供了 reducer 来实现这个效果

```ts
parser
  .define(
    { exp: `exp '+' exp` },
    ELR.reducer<number>((values) => values[0]! + values[2]!)
  )
  .define(
    { exp: `exp '-' exp` },
    ELR.reducer<number>((values) => values[0]! - values[2]!)
  );
```

## 冲突与运算符优先级

虽然 LR 分析法通常被认为是最强大的分析法，它仍然会面临无法被自动解决的冲突

比如：存在如下语法规则

```ts
parser
  .define(
    { exp: `exp '+' exp` },
    ELR.reducer<number>((values) => values[0]! + values[2]!)
  )
  .define(
    { exp: `exp '*' exp` },
    ELR.reducer<number>((values) => values[0]! * values[2]!)
  );
```

那么当我们解析`1+2*3`的时候，由于 LR 分析法是从左向右进行解析，我们会先拿到`1+2`。但是乘法的优先级理应高于加法，这时就会出现【规约(reduce)/移进(shift)冲突】，我们不知道应该先进行规约（计算`1+2`），还是先进行移进（解析后面的`2*3`）再规约（计算`1+6`）

类似的，假设我们存在如下语法规则：

```ts
parser
  .define(
    { exp: `exp '-' exp` },
    ELR.reducer<number>((values) => values[0]! + values[2]!)
  )
  .define(
    { exp: `'-' exp` },
    ELR.reducer<number>((values) => -values[1]!)
  );
```

那么当解析`1-1`的时候，我们不知道应该先计算`-1`，还是计算`1-1`，因为这两个规则都可以进行规约。这就是【规约/规约冲突】

LR(1)分析法可以**尝试**偷看(peek)后面的输入串来判断是否存在冲突，或者有时候存在冲突的两个语法规则可能并不会出现在自动机的同一个状态中。所以 LR(1)分析法是可以自动解决一些冲突的，但是**并不能解决所有冲突**

所以 retsac 给用户暴露了手动处理冲突的方案，确保所有*无法被自动解决*的冲突都被用户手动解决

```ts
parser
  .define(
    { exp: `'-' exp` },
    ELR.reducer<number>((values) => -values[1]!)
      .resolveRS({ exp: `exp '+' exp` }, { next: `'+'`, reduce: true })
      .resolveRS({ exp: `exp '-' exp` }, { next: `'-'`, reduce: true })
      .resolveRS({ exp: `exp '*' exp` }, { next: `'*'`, reduce: true })
      .resolveRS({ exp: `exp '/' exp` }, { next: `'/'`, reduce: true })
  )
  .define(
    { exp: `exp '+' exp` },
    ELR.reducer<number>((values) => values[0]! + values[2]!)
      .resolveRS({ exp: `exp '+' exp` }, { next: `'+'`, reduce: true })
      .resolveRS({ exp: `exp '-' exp` }, { next: `'-'`, reduce: true })
      .resolveRS({ exp: `exp '*' exp` }, { next: `'*'`, reduce: false })
      .resolveRS({ exp: `exp '/' exp` }, { next: `'/'`, reduce: false })
  )
  .define(
    { exp: `exp '-' exp` },
    ELR.reducer<number>((values) => values[0]! - values[2]!)
      .resolveRS({ exp: `exp '+' exp` }, { next: `'+'`, reduce: true })
      .resolveRS({ exp: `exp '-' exp` }, { next: `'-'`, reduce: true })
      .resolveRS({ exp: `exp '*' exp` }, { next: `'*'`, reduce: false })
      .resolveRS({ exp: `exp '/' exp` }, { next: `'/'`, reduce: false })
  )
  .define(
    { exp: `exp '*' exp` },
    ELR.reducer<number>((values) => values[0]! * values[2]!)
      .resolveRS({ exp: `exp '+' exp` }, { next: `'+'`, reduce: true })
      .resolveRS({ exp: `exp '-' exp` }, { next: `'-'`, reduce: true })
      .resolveRS({ exp: `exp '*' exp` }, { next: `'*'`, reduce: true })
      .resolveRS({ exp: `exp '/' exp` }, { next: `'/'`, reduce: true })
  )
  .define(
    { exp: `exp '/' exp` },
    ELR.reducer<number>((values) => values[0]! / values[2]!)
      .resolveRS({ exp: `exp '+' exp` }, { next: `'+'`, reduce: true })
      .resolveRS({ exp: `exp '-' exp` }, { next: `'-'`, reduce: true })
      .resolveRS({ exp: `exp '*' exp` }, { next: `'*'`, reduce: true })
      .resolveRS({ exp: `exp '/' exp` }, { next: `'/'`, reduce: true })
  );
```

可以看到，有时候语法带来的冲突量非常大，所以 retsac 提供一个自动生成 resolve 函数的功能，使用者只需要判断冲突时是否继续 reduce 即可

```ts
parser.generateResolver(lexer);
// output:
// .resolveRS({ exp: `'-' exp` }, { exp: `exp '+' exp` }, { next: `'+'`, reduce: true })
// .resolveRS({ exp: `'-' exp` }, { exp: `exp '-' exp` }, { next: `'-'`, reduce: true })
// .resolveRS({ exp: `'-' exp` }, { exp: `exp '*' exp` }, { next: `'*'`, reduce: true })
// .resolveRS({ exp: `'-' exp` }, { exp: `exp '/' exp` }, { next: `'/'`, reduce: true })
// .resolveRS({ exp: `exp '+' exp` }, { exp: `exp '+' exp` }, { next: `'+'`, reduce: true })
// .resolveRS({ exp: `exp '+' exp` }, { exp: `exp '-' exp` }, { next: `'-'`, reduce: true })
// ...
```

也可以把语法规则的定义放在一个文件，把冲突处理逻辑放在另一个文件，看起来就会很清爽

```ts
// file 1
parser
  .define(
    { exp: `exp '-' exp` },
    ELR.reducer<number>((values) => values[0]! + values[2]!)
  )
  .define(
    { exp: `'-' exp` },
    ELR.reducer<number>((values) => -values[1]!)
  );

// file 2
parser
  .resolveRS(
    { exp: `'-' exp` },
    { exp: `exp '+' exp` },
    { next: `'+'`, reduce: true }
  )
  .resolveRS(
    { exp: `'-' exp` },
    { exp: `exp '-' exp` },
    { next: `'-'`, reduce: true }
  );
```

## 定位语法

语法规则中可能有很多 grammar，比如`pub fn identifier '(' params ')' type '{' stmts '}'`，默认情况下可以通过`ParserContext.matched`基于索引访问它们：`matched[0]`表示`pub`

但是通过索引来访问很不直观，而且当语法规则被修改时，可能很多索引都要修改

所以 retsac 提供了基于 grammar 的搜索功能，可以直接定位到相应的 grammar：`ParserContext.$('identifier')`和`ParserContext.matched[2]`是等价的，只不过前者更易维护。如果一个语法规则中含有多个同名的 grammar，比如`id id`，那么`$('id')`会返回第一个`id`，`$('id', 1)`会返回第二个`id`。字面量也可以这样查询：`` $(`'{'`) ``

## Expectational Parser

在实现 retsac 时，一开始的设计思路为：先使用 lexer 把输入的整个字符串解析为一个很长的 token list，然后使用 parser 直接处理这个 token list

> 当然会有一个中间过程，把 Token list 转换为 ASTNode list

```ts
function lex(input: string): Token[];
function parse(buffer: ASTNode[]): ASTNode;
```

但是后来在读[此文](https://www.cnblogs.com/xuld/p/12266985.html)中的【解析过程】的时候意识到，最好由 parser 向 lexer 索取 token，而不是 lexer 先把 token 准备好。这样 parser 可以根据语法中的定义，为 lexer 提供一个期望，让 lexer 只能生成特定类型的 token

所以我为`Lexer.lex`提供了`expect`参数，可以提供期望的 token 类型。当然，有时 token 可能是没有类型的字面量，所以`expect`最好还可以提供期望的字面值

```ts
interface ILexer {
  lex(input: {
    expect?: {
      types?: string[];
      text?: string;
    };
  }): Token | null;
}
```

由于 Lexer 支持忽略一些字符，所以在使用 expect 的时候，被忽略的字符仍然需要被成功 lex 并忽略，比如：输入`   123`，使用`expect: { type: ['number'] }`时，需要先把前面的空白符成功 lex 出来并忽略，然后才能拿到所期望的`123`

还有一个坑是处理尾部空白。如果输入串只剩下被忽略的字符，比如空串：`   `，那么我们因该把它判定为空的输入，而不是再尝试去 lex 出来 token。否则我们会在 check follow 的过程中陷入死循环。为此，我为 Lexer 添加了`lexer.trimStart`功能，用来删除被忽略的字符

## Re-Lex

> 或者叫：[重新扫描问题](https://www.cnblogs.com/xuld/p/12210780.html)

在使用 Expectational Parser 的时候，虽然我们可以使用 expect 让 lexer 返回我们想要的 token 类型，但是有时候我们可能有很多种想要的 token，造成很多的可能性。如果一种 token 无法使 parse 过程继续下去，我们就需要回溯状态，尝试 expect 其他的 token。也就是说，需要让 lexer 有 re-lex 的功能，可以回溯

不过 retsac 并没有基于这种思路来做，而是给 lexer 添加了 clone（有状态复制）功能，在存在多种可能性的时候，保存多个 lexer。需要回溯的时候，直接把过去保存的 lexer 拿出来用就行。这个思路可能性能差一些，未来有机会了可以优化一下

另外，因为 re-lex 可能会导致一些`callback`函数被多次调用，可能还需要添加`rollback`机制，使对外界的操作可以回滚。retsac 的 DefinitionContext 提供了此功能

re-lex 还可能会带来运行时的性能问题，如果用户的输入很长，可能会回滚过多，导致不必要的重复处理。所以，retsac 的 parser 有 commit 功能，在用户觉得合适的时候，可以调用`parser.commit`，确认现有的修改不会再被 re-lex。为了方便使用，retsac 还在 ParserContext 中也添加了 commit 选项，可以实现【当某个语法规则被 accept 的时候自动 commit】的效果

## 优化运行时

上文提到，语法规则可能会有很多冲突需要用户处理，所以需要提供检测冲突的方案。比如 retsac 提供的`checkConflicts`函数

不过，这些检查只需要在开发阶段使用，一旦确定语法规则无误，所有冲突都被解决，就不需要再进行检测了。

这些检测非常消耗性能，可能需要反复构建 DFA，或者遍历所有规则。所以能不检测就不检测，仅在开发时进行各种检测就行

## 遍历语法树获得结果

有些时候，我们无法在生成语法树之后就直接获取结果。或者，使用 Re-Lex 之后，我们需要定义复杂的回滚操作。

这在实现一个编程语言的编译器/解析器时尤其重要，因为语句和语句之间是有序的，而 LR 分析法是在从右向左进行 reduce，而不是从左向右（从前往后）

比如，假设我们在解析如下输入：

```ts
function hello(a) {
  return a;
}
```

我们定义了如下语法规则：

```ts
const parser = new ELR.ParserBuilder<number>()
  .entry("fn_def_stmt")
  .define({
    fn_def_stmt: `
      function identifier '(' identifier ')' '{'
        stmt ';'
      '}'
    `,
  })
  .define({ stmt: `return exp` })
  .define({ exp: `identifier` });
```

那么在构造语法树的时候，会先 reduce 出来 exp，然后是 stmt，最后是 fn_def_stmt。然而，我们在 exp 里面就引用了函数的参数`a`，此时我们还没有对 fn_def_stmt 进行处理，自然找不到这个变量

为了解决这个问题，一个 workaround 是把 fn_def_stmt 拆的更零散一些，以确保参数在 stmt 之前就被处理，而不是把参数放在 fn_def_stmt 里面，但是这有悖于 retsac 简单直观的设计思想

这个时候，如果我们直接对生成的语法树进行自顶向下遍历（而不是自底向上生成），就没有那么多问题了。在遍历的过程中，我们会先遍历到 fn_def_stmt，把参数保存为一个局部变量，然后再深入里面的 stmt/exp，就可以正常解析

retsac 提供了 traverser，可以方便地进行自顶向下遍历函数的设置：

```ts
const parser = new ELR.ParserBuilder<number>()
  .entry("fn_def_stmt")
  .define(
    {
      fn_def_stmt: `
        function identifier '(' identifier ')' '{'
          stmt ';'
        '}'
      `,
    },
    ELR.traverser(({ $ }) => {
      // store the function name to the var map, with a random value to test
      varMap.set($(`identifier`)!.text!, 123);
      // store the parameter name to the var map, with a random value to test
      varMap.set($(`identifier`, 1)!.text!, 456);
      // traverse the function body
      $(`stmt`)!.traverse();
    })
  )
  .define(
    { stmt: `return exp` },
    // return expression value
    ELR.traverser(({ children }) => children![1].traverse())
  )
  .define(
    { exp: `identifier` },
    // get the value of the variable from the map
    ELR.traverser(({ children }) => varMap.get(children![0].text!)!)
  );
```

这样，在语法树构建完毕之后，我们只需要对根节点进行一次`node.traverse()`调用，就可以得到想要的结果
