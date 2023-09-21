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

语法规则中可能有很多 grammar，比如`pub fn identifier '(' params ')' identifier '{' stmts '}'`，默认情况下可以通过`ParserContext.matched`基于索引访问它们：`matched[0]`表示`pub`

但是通过索引来访问很不直观，而且当语法规则被修改时，可能很多索引都要修改

所以 retsac 提供了基于 grammar 的搜索功能，可以直接定位到相应的 grammar：`ParserContext.$('identifier')[0]`和`ParserContext.matched[2]`是等价的，只不过前者更易维护

另外，还可以使用`@`为一个 grammar 命名，以便区分相同类型的 grammar。比如 `pub fn identifier@funcName '(' params ')' identifier@retType '{' stmts '}'`，那么我们可以使用`$('funcName')`来定位到第一个`identifier`。需要注意：一旦使用了`@`，就无法根据原名进行查询了

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

## 高级语法规则

我们定义语法规则时，可能希望像正则表达式一样使用`|+?*()`等元字符，比如

```ts
define({
  fn_def: `
    pub fn identifier '(' (param (',' param)*)? ')' ':' identifier '{'
      stmt*
    '}'
  `,
});
```

为了能够处理这样的定义，我们需要对这些元字符进行展开处理：

```ts
// define({ def: `a b?` });
define({ def: `a b | a` });

// define({ def: `a b*` });
define({ def: `a b+ | a` });

// define({ def: `a b+` });
define({
  def: `a __0`, // 这个情况比较复杂，我们需要引入一个占位符
  __0: `b | b __0`,
});
```

所以我们需要把上述函数定义给展开为：

```ts
define({
  fn_def: `
    pub fn identifier '(' ')' ':' identifier '{'
    '}'
    |
    pub fn identifier '(' ')' ':' identifier '{'
      __1
    '}'
    |
    pub fn identifier '(' param ')' ':' identifier '{'
    '}'
    |
    pub fn identifier '(' param __0 ')' ':' identifier '{'
    '}'
    |
    pub fn identifier '(' param ')' ':' identifier '{'
      __1
    '}'
    |
    pub fn identifier '(' param __0 ')' ':' identifier '{'
      __1
    '}'
  `,
  __0: `',' param | __0 ',' param`,
  __1: `stmt | __1 stmt`,
});
```

这样，处理后的语法规则就可以被原本的 ParserBuilder 进行处理。

retsac 提供了 `AdvancedBuilder` 用来实现展开元字符的功能：

```ts
new AdvancedBuilder()
  .define({
    fn_def: `
      pub fn identifier '(' (param (',' param)*)? ')' ':' identifier '{'
        stmt*
      '}'
    `,
  })
  .expand(); // return ParserBuilder
```

> `AdvancedBuilder` 内部也是使用 ELR Parser 来对元字符进行识别的

需要注意，因为我们会生成占位符作为非终结符，那么最终生成的 AST 中就会包含多余的节点。比如我对下面的输入进行解析：

```
pub fn main(p1: i32, p2: i32): i32 {
  let a: i32 = 1;
  let b: i32 = 2;
  let c: i32 = a + b;
  return a + b + c;
}
```

生成的 AST：

```
fn_def:
  pub: pub
  fn: fn
  identifier: main
  <anonymous>: (
  param:
    identifier: p1
    <anonymous>: :
    identifier: i32
  __0:
    <anonymous>: ,
    param:
      identifier: p2
      <anonymous>: :
      identifier: i32
  <anonymous>: )
  <anonymous>: :
  identifier: i32
  <anonymous>: {
  __1:
    __1:
      __1:
        __1:
          stmt:
            assign_stmt:
              let: let
              identifier: a
              <anonymous>: :
              identifier: i32
              <anonymous>: =
              exp:
                integer: 1
              <anonymous>: ;
        stmt:
          assign_stmt:
            let: let
            identifier: b
            <anonymous>: :
            identifier: i32
            <anonymous>: =
            exp:
              integer: 2
            <anonymous>: ;
      stmt:
        assign_stmt:
          let: let
          identifier: c
          <anonymous>: :
          identifier: i32
          <anonymous>: =
          exp:
            exp:
              identifier: a
            <anonymous>: +
            exp:
              identifier: b
          <anonymous>: ;
    stmt:
      ret_stmt:
        return: return
        exp:
          exp:
            exp:
              identifier: a
            <anonymous>: +
            exp:
              identifier: b
          <anonymous>: +
          exp:
            identifier: c
        <anonymous>: ;
  <anonymous>: }
```

可以看到里面有很多嵌套的 `__0` 和 `__1`

另外，如果`+/*`修饰的不只是一个可能性，而是多个可能性，比如`(a | b)+`，那么`ab`, `aa`, `ba`, `bb`等都应该匹配这个规则。我们需要给所有可能性设置占位符（此处为`a`和`b`）。并且，`follow`集需要被修改，比如`b`现在也在`a`的 follow 集中，反之亦然

## 递归查询子节点

使用 AdvancedBuilder 时，我们如何处理 ParserContext 呢？比如我想获取 `fn_def` 里面的所有 `stmt`，就不能简单地使用 `children` 来进行获取了

```ts
new AdvancedBuilder().define(
  {
    fn_def: `
      pub fn identifier '(' (param (',' param)*)? ')' ':' identifier '{'
        stmt*
      '}'
    `,
  },
  ELR.traverser(({ children }) => {
    // 这里是无法基于children来获取stmt的
    // 因为占位符会生成很多中间节点
  })
);
```

但是我们可以使用 `$` 来进行查询。 ParserBuilder 支持 `cascadeQueryPrefix` 参数，如果在用 `$` 进行子节点查询时，子节点的类型是以 `cascadeQueryPrefix` 开头的，则会对子节点也进行递归查询

AdvancedBuilder 在生成 ParserBuilder 时，会自动设置这个参数，所以使用 AdvancedBuilder 生成的 Parser，会自动对占位符子节点进行递归查询，并按顺序返回 ASTNode 列表

```ts
new AdvancedBuilder().define(
  {
    fn_def: `
      pub fn identifier '(' (param (',' param)*)? ')' ':' identifier '{'
        stmt*
      '}'
    `,
  },
  ELR.traverser(({ $ }) => {
    $("stmt") // => 返回 stmt 节点的列表
      .forEach((stmt) => stmt.traverse()); // 可以直接对 stmt 进行遍历
  })
);
```

## 计算终结符的 Follow 集

通常我们说 First/Follow 集，都是在说非终结符。但是，终结符的 Follow 集也是需要计算的，因为有些非终结符的 Follow 集需要用到终结符的 Follow 集

举个例子：假设`test`是非终结符，`a/b/c`都是终结符，我们定义了如下语法：

```ts
new AdvancedBuilder().define({
  test: `a b c?`,
});
```

它会被展开为：

```ts
define({
  test: `a b | a b c`,
});
```

显然，此时存在 Reduce-Shift 冲突，因为当我们检测到输入串为`abc`时，我们不知道应该直接把`ab`给 reduce 为`test`，还是先进行移进，然后把`abc`给 reduce 为`test`。为了解决这个冲突，我们需要对 `test` 的 Follow 集进行检测，此时`c`应该在`test`的 Follow 集中

如果我们仅计算非终结符的 Follow 集，就无法正确得出`test`的 Follow 集。比如把终结符`b`的 Follow 集也给计算出来，才能正确计算`test`的 Follow 集

## 为高级语法规则自动解决冲突

同样是上文的例子，我们使用`a b c?`来定义`test`，但是我们通常希望这个匹配的过程是贪心的，即如果遇到了`c`，那就一定要把`abc`作为一个整体进行 reduce

所以我们在展开的时候，不仅要展开语法的定义，还应该自动解决冲突

```ts
// test: `a b c?`
define({
  test: `a b | a b c`,
}).resolveRS({ test: `a b` }, { test: `a b c` }, { next: `c`, reduce: false });
```

同理，对于`+`和`*`也要进行类似的处理：

```ts
// test: `a b c+`
define({
  test: `a b __0`,
  __0: `c | c __0`,
}).resolveRS({ __0: `c` }, { __0: `c __0` }, { next: `c`, reduce: false });

// test: `a b c*`
define({
  test: `a b | a b __0`,
  __0: `c | c __0`,
})
  .resolveRS({ test: `a b` }, { test: `a b __0` }, { next: `c`, reduce: false })
  .resolveRS({ __0: `c` }, { __0: `c __0` }, { next: `c`, reduce: false });
```

以上是`+*?`出现在末尾的情况。如果`+*?`出现在语法规则的开头，可能也需要进行处理

```ts
// test: `a? b c`
define({
  test: `b c | a b c`,
}); // => 存在RR冲突？
```

但是实际情况中，这些头部冲突通常会被自动解决（Follow 集不重叠，或者不会出现在同一个 DFA State 里）

## 使用星号解决所有冲突

我们继续来讨论`+*?`出现在末尾的情况。有时候，我们直接指定`next`，可能并不能解决所有冲突。比如：

```ts
new AdvancedBuilder().define({
  test: `a+`,
  a: `b | c`,
});

// expand
define({
  test: `__0`,
  __0: `a | a __0`,
  a: `b | c`,
}).resolveRS({ __0: `a` }, { __0: `a __0` }, { next: `a`, reduce: false });
```

在这个例子里，`a`是非终结符，而不是终结符。所以这里`next: a`并不能 cover 所有的情况，我们需要判断`a`的 follow 集和`__0`的 first 集的交集，并且都`reduce: false`

所以，生成的 Resolver 不能仅把`next`设置为`a`。可以设置为一个特殊值：`*`。需要注意：`*`并不是表示【任何情况】，而仅仅是【会引起冲突的 next】

```ts
define({
  test: `__0`,
  __0: `a | a __0`,
  a: `b | c`,
}).resolveRS({ __0: `a` }, { __0: `a __0` }, { next: `*`, reduce: false });
```

同理，如果我们在 RR 冲突里面指定了`*`，那么`*`表示的也是【会引起冲突的 next】

## 高级 resolver

直接使用`resolveRS/resolveRR`可能比较麻烦。通常我们会给运算符设置优先级，比如`*/`的优先级比`+-`要高

不过在 retsac 里面，我们不是按照运算符来定义语言，而是语法规则，所以可以给语法规则设置优先级：`exp '*' exp`比`exp '+' exp`的优先级高。使用如下语句：

```ts
builder.priority({ exp: `exp '*' exp` }, { exp: `exp '+' exp` });
```

这个语句意味着，在任何情况下，我们都应该先对`exp '*' exp`进行 reduce，然后再对`exp '+' exp`进行 reduce，也就是说：

```ts
builder.resolveRS(
  { exp: `exp '*' exp` },
  { exp: `exp '+' exp` },
  { next: `*`, reduce: true }
);
builder.resolveRR(
  { exp: `exp '*' exp` },
  { exp: `exp '+' exp` },
  { next: `*`, reduce: true, handleEnd: true }
);
builder.resolveRS(
  { exp: `exp '+' exp` },
  { exp: `exp '*' exp` },
  { next: `*`, reduce: false }
);
builder.resolveRR(
  { exp: `exp '+' exp` },
  { exp: `exp '*' exp` },
  {
    next: `*`,
    reduce: false,
    handleEnd: true,
  }
);
```

除此之外，还可能多个语法规则有相同的优先级。比如`exp '+' exp`和`exp '-' exp`有相同的优先级，并且优先级都比`exp '*' exp`低，我们可一个给 priority 传入 array 来表明语法规则的优先级相同

```ts
builder.priority(
  { exp: `'-' exp` }, // 优先级最高
  [{ exp: `exp '*' exp` }, { exp: `exp '/' exp` }],
  [{ exp: `exp '+' exp` }, { exp: `exp '-' exp` }] // 优先级最低
);
```

所以，它会被展开为一个`1 * 2 * 2`的笛卡尔乘积

另外，相同优先级的语法规则也需要被处理一下，以`exp '+' exp | exp '-' exp`为例

```ts
builder.resolveRS(
  { exp: `exp '+' exp` },
  { exp: `exp '-' exp` },
  { next: `*`, reduce: true }
);
builder.resolveRR(
  { exp: `exp '+' exp` },
  { exp: `exp '-' exp` },
  { next: `*`, reduce: true, handleEnd: true }
);
builder.resolveRS(
  { exp: `exp '-' exp` },
  { exp: `exp '+' exp` },
  { next: `*`, reduce: true }
);
builder.resolveRR(
  { exp: `exp '-' exp` },
  { exp: `exp '+' exp` },
  { next: `*`, reduce: true, handleEnd: true }
);
```

最后，有些语法规则和自己冲突，比如`exp '+' exp`就和自己有 RS 冲突。retsac 提供了`leftSA/rightSA`函数，用来定义语法规则是【左自结合/left self association】还是【右自结合/right self association】

```ts
// 这些规则都是左自结合的
builder.leftSA(
  { exp: `exp '*' exp` },
  { exp: `exp '/' exp` },
  { exp: `exp '+' exp` },
  { exp: `exp '-' exp` }
);
```

每一个被标记为`leftSA`的都会添加一个类似这样的 resolver:

```ts
builder.resolveRS(
  { exp: `exp '+' exp` },
  { exp: `exp '+' exp` },
  { next: `*`, reduce: true }
);
```

如果是右自结合，则`reduce`是`false`

## 判定冲突是否存在，再 reject

一旦我们提供了`*`作为 next 的值，我们就需要对`*`进行展开，把它变成会引起冲突的 next

这个过程，需要判断冲突是否存在，因为有些冲突看起来存在，其实不存在

比如数学计算里面的`exp '-' exp`和`'-' exp`，看起来它们是 RR 冲突，然而它们并不会出现在同一个 DFA 的状态里面，这就导致它们并不构成冲突。所以一旦使用了`*`，我们就要把整个 DFA 的所有状态都构造出来，才能判断冲突是否真实存在

如果不这么做，会存在 bug。比如`exp '-' exp`和`'-' exp`在 handle end 的时候，是不看 next 的，而是直接根据是否到达 EOF 而进行 reject。如果我们以为它们存在冲突，那么`exp '-' exp`在 EOF 的时候一定会被拒绝，而`'-' exp`并不一定是我们希望使用的语法规则，从而导致 parse 失败

## 顶级非终结符是否应该忽略 follow 集，直接接受？

假设有如下语法规则：

```ts
define({
  exp_stmt: `int identifier '=' exp ';'`,
}).entry("exp_stmt");
```

那么它是无法解析如下输入的：

```txt
int a = 1;
int b = 1;
```

因为 exp_stmt 是顶级非终结符，它的 follow 集是空。当我们解析完`int a = 1;`后，发现下一个 token 是 int，无法匹配 exp_stmt 的 follow 集，所以被 reject

为了解决这个问题，可以设置：顶级非终结符忽略 follow 集，直接接受。这样，我们一旦得到了 exp_stmt，就会立即接受，而不是检查下一个 token 是否在 follow 集中。
此时，解析上述输入，第一次会解析出来一个 exp_stmt。我们需要先把它从 parser buffer 取出来，然后进行下一次解析，得到第二个 exp_stmt

但是它仍然存在问题：过于保守。比如我们定义了如下语法规则：

```ts
define({
  gr: `grammar | grammar rename`,
}).entry("gr");
```

那么当我们得到`grammar`之后，因为`grammar`可以被 reduce 为`gr`，并且`gr`是顶级非终结符，所以根本不会检查后面的 token 是不是 rename，就会直接接受。这样就导致了`grammar`后面的 rename 会被忽略

从上面的推导可以看出，当我们尝试 reduce 出顶级非终结符时，有以下几种策略可以选择：

- 忽略 follow 集，直接接受
  - 可能会有过于保守的问题，可能后面还有更多的内容可以被 reduce 到当前的顶级非终结符里面
- 检查 follow 集，如果不在 follow 集中，则 reject
  - 无法实现解析部分输入，只能把输入作为一个整体进行解析

这两种策略都是有用武之地的，所以 retsac 提供了`ignoreEntryFollow`参数，可以让用户自己选择。默认值是`false`，也就是说会检查 follow 集

> 是否可以添加一个 greedy 选项？可能需要 re-parse 功能才行
