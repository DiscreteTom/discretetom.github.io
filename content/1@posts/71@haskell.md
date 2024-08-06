---
title: Haskell 101
description: 汗流浃背了吧初学者
---

## 前言

本文是观看[此视频](https://www.bilibili.com/video/BV1uG411u76W)时的笔记

## 概述

- 纯函数式语言
- 数据（变量）不可变
- 没有副作用
  - 输入/输出也算是副作用。这部分代码会被隔离出来，不会和纯函数混在一起
- 声明式，非命令式
- 惰性求值
  - 即使一个函数被调用了，如果它没有被使用，那么它不会被执行
- 强类型

## 惰性

```hs
func arg =
  let x = func1 arg
      y = func2 arg
      z = func3 arg
  in
  if z then x else y
```

在如上例子中，我们看似先计算了 x/y/z，然后根据 z 的值返回 x/y。但是实际上，如果 z 为真，那么 y 就不会被计算，反之亦然。

相比于传统的命令式语言：

```c
int func(int arg) {
  int x = func1(arg);
  int y = func2(arg);
  int z = func3(arg);
  return z ? x : y;
}
```

如果我们这么写，x/y/z 都会被求值

## 函数

```hs
-- 定义函数
name arg1 arg2 ... argn = <expr>

-- 调用函数
name arg1 arg2 ... argn

-- 比如，定义一个函数 in_range，有三个参数：min/max/x
in_range min max x = x >= min && x <= max

-- 调用in_range函数
in_range 0 5 3 -- 返回 True
```

## 类型声明

### 变量的类型

```hs
-- 格式
name :: <type>

-- 基础类型
x :: Integer
x = 1
y :: Bool
y = True
z :: Float
z = 1.1
```

### 函数的类型与柯里化

```hs
-- 使用`->`串联所有的参数和返回值
in_range :: Integer -> Integer -> Integer -> Bool
in_range min max x = x >= min && x <= max
```

为啥不是用`,`分割参数？因为对于一个函数，它可以接受部分参数并返回一个新的函数，这个新的函数可以接受剩余的参数并返回最终的结果

```hs
-- 以上述的in_range为例，如果部分调用in_range，就会得到一个新的函数
in_range_1_5 = in_range 1 5 -- 返回一个新的函数，这个函数接受一个参数并返回一个Bool值
in_range_1_5 :: Integer -> Bool

-- 所以对于in_range函数，它的参数列表可以有很多种解读方式

-- 接受三个参数，返回一个Bool值
in_range:: (Integer -> Integer -> Integer) -> Bool
-- 接受一个参数，返回一个函数，这个函数还可以接受两个参数，返回一个Bool值
in_range:: Integer -> (Integer -> Integer -> Bool)
-- 还有其他解读方式，略

-- 使用部分参数构造新函数，也被称为 柯里化
```

### 泛型

```hs
-- 普通的类型必须使用大写字母开头，因为小写字母都会被视为泛型参数
head :: [a] -> a -- 此处的a表示泛型参数，可以是任意类型
```

### 类型类

类似于其他语言里面的泛型约束

```hs
-- 此处定义了一个函数elem
-- 它的第一个参数是一个类型为a的值
-- 但是a要满足Eq类型类的要求
elem :: (Eq a) => a -> [a] -> Bool

-- 此处Num类型类要求a必须是数字类型
(+) :: Num a => a -> a -> a
```

## Let Where Bindings

用来给一个表达式起一个别名，以便多次使用，或者整理代码

```hs
-- let bindings
-- 先定义后使用
in_range min max x =
  let in_lower_bound = min <= x
      in_upper_bound = max >= x
  in
  in_lower_bound && in_upper_bound

-- where bindings
-- 先使用后定义
in_range min max x = in_lower_bound && in_upper_bound
  where
    in_lower_bound = min <= x
    in_upper_bound = max >= x
```

在 let 中也可以使用模式匹配

## If

If 必须有 Else。所以更类似于三元运算符`?:`，而不是`if`/`else`语句.

整个 if/else 也会有一个返回值

```hs
in_range min max x = if in_lower_bound then in_upper_bound else False
  where
    in_lower_bound = min <= x
    in_upper_bound = max >= x
```

## 中缀表达式

```hs
-- 普通函数调用是前缀表达式
name arg1 arg2

-- 如果一个函数只有两个参数，那么可以使用中缀表达式
-- 函数名使用反引号包裹
arg1 `name` arg2

-- 数学函数通常是中缀的
1 + 2
1 - 2
1 `div` 2

-- 也可以用前缀的方式调用
(+) 1 2
(-) 1 2
```

## 递归代替循环

### 基础

Haskell 里面没有循环，可以使用递归来代替循环

```hs
-- 阶乘函数
fac n = if n <= 1 then 1 else n * fac (n-1)
```

### Guards

```hs
-- if/else太丑了，使用Guards进行条件判断
-- 自上而下进行匹配，匹配成功时执行对应的表达式
fac n
  | n <= 1    = 1
  | otherwise = n * fac (n-1)
```

### Accumulator

一个用来避免栈溢出的小技巧

如果无节制地使用递归，在传统计算机的体系结构中，容易出现栈溢出。但是如果我们使用 Accumulator 的模式来写代码，聪明的编译器应该会把代码中的递归给消除

```hs
fac n = aux n 1
  where
    aux n acc
      | n <= 1    = acc -- 返回accumulator，也就是结果
      | otherwise = aux (n-1) (n*acc) -- 计算n*acc作为新的accumulator的值，并把参数n-1传递给下一次递归
```

聪明的编译器可以使用循环来代替这里的递归

```js
function fac(n) {
  let acc = 1;
  while (true) {
    if (n <= 1) return acc;
    n = n - 1;
    acc = n * acc;
  }
}
```

## List

```hs
-- 创建一个list
-- 所有元素的类型必须相同
[1, 2, 3, 4, 5]

-- 空list
[]

-- List的类型
a :: [Integer]
a = [1, 2, 3, 4, 5]

-- 向List中添加元素（添加到头部）
1 : [2, 3, 4, 5] -- [1, 2, 3, 4, 5]

-- 下面这两个是等价的
[1, 2, 3]
1 : 2 : 3 : []

-- 示例：使用函数生成list
asc :: Int -> Int -> [Int]
asc n m
  | m < n  = []
  | m == n = [m]
  | m > n  = n : asc (n+1) m -- 使用递归并向列表中添加元素

-- 生成从1到3的list
asc 1 3 -- [1, 2, 3]
```

### 内置 List 相关函数

```hs
import Data.List

-- head 返回list的第一个元素
head :: [a] -> a -- 此处的a表示泛型参数，可以是任意类型
head [1, 2, 3] -- 1

-- tail 返回list除了第一个元素之外的所有元素
tail :: [a] -> [a]
tail [1, 2, 3] -- [2, 3]

-- length 返回list的长度
length :: [a] -> Int
length [1, 2, 3] -- 3

-- init 返回list除了最后一个元素之外的所有元素
init :: [a] -> [a]
init [1, 2, 3] -- [1, 2]

-- null 判断list是否为空
null :: [a] -> Bool
null [] -- True
null [1, 2, 3] -- False

-- and 判断list中的所有元素是否都为真
and :: [Bool] -> Bool
and [True, True, True] -- True

-- or 判断list中的所有元素是否有一个为真
or :: [Bool] -> Bool
or [True, False, False] -- True
```

### List Comprehension

类似 python 中的列表推导式

```hs
-- 格式
-- <gen>是生成器，<elem>是元素，<filter>是过滤器
-- list和filter都可以有多个
-- filter是可选的
[<gen> | <elem> <- <list>, ..., <filter>, ...]

-- 举例
[2 * x | x <- [1,2,3]] -- [2, 4, 6]
[2 * x | x <- [1,2,3], x > 1] -- [4, 6]

-- 如果有多个list，结果是笛卡尔乘积
[(x, y) | x <- [1,2,3], y <- [4,5]] -- [(1, 4), (1, 5), (2, 4), (2, 5), (3, 4), (3, 5)]
```

### List 的模式

```hs
-- 匹配空list
[]

-- 把一个非空的List解构为
-- x 第一个元素
-- xs 剩余的元素
x:xs

-- 定义函数时可以使用模式匹配
sum :: [Int] -> Int
sum [] = 0 -- 匹配空list
sum (x:xs) = x + sum xs -- 匹配非空list
```

## Tuples

可以有不同类型的元素，但是元素的数量是固定的

```hs
(1,2) :: (Int, Int)
```

### 内置 Tuples 相关函数

```hs
-- fst 返回tuple的第一个元素
fst :: (a,b) -> a -- 类型定义
fst (x,_) = x -- 函数的实现。此处下划线表示不需要的参数

-- snd 返回tuple的第二个元素
snd :: (a,b) -> b
snd (_,y) = y
```

## 高阶函数

可以【把函数作为参数，或者返回函数】的函数。略

## 匿名函数

使用`\`来定义匿名函数（因为`\`长得像希腊字母 lambda `λ`）

```hs
-- 格式
(\<args> -> <expr>)

-- 举例
add1 = (\x -> x + 1)
add_xyz = (\x y z -> x + y + z)

-- 举例：配合高阶函数使用
-- 定义一个apply函数，接受一个函数和一个参数，然后调用这个函数并传入参数
apply :: (a -> b) -> a -> b
apply f x = f x
apply (\x -> x + 1) 1 -- 2
```

### 匿名函数与柯里化

```hs
-- 以下几个表达方式是等价的
add :: Int -> Int -> Int
add x y = x + y

add :: Int -> (Int -> Int)
add x = (\y -> x + y)

add :: (Int -> (Int -> Int))
add = (\x -> (\y -> x + y))
```

可以把函数的参数转移到函数体的匿名函数中，实现柯里化

## Function Composition

```hs
-- `.`是一个特殊的函数，用来组合两个函数
(.) :: (b -> c) -> (a -> b) -> a -> c
-- 相当于从右向左应用两个函数

-- 以下两个表达是等价的
(f.g)
(\x -> f(g x))

-- 举例
descSort = reverse.sort -- 先sort再reverse
```

## Dollar Sign

```hs
-- `$`是一个特殊的函数，用来调用后面的函数
($) :: (a -> b) -> a -> b

-- 可以用来减少括号
-- 比如：以下两个表达是等价的
map (\x -> x + 1) (filter (\x -> x > 1) xs)
map (\x -> x + 1) $ filter (\x -> x > 1) xs
```

## MapReduce

### map

```hs
-- 对一个a类型的list应用一个函数，使每个元素都变成b类型
map :: (a -> b) -> [a] -> [b]

map (\(x, y) -> x + y) [(1,2), (2,3)] -- [3, 5]
```

类似的列表处理函数还有 filter

map/filter 和 JS 中的 map/filter 类似，略

### fold

```hs
-- fold right，从右向左reduce
foldr :: (a -> b -> b) -> b -> [a] -> b
foldr (\elem acc -> <term>) <start_acc> <list>

-- 举例
foldr (+) 0 [1,2,3] -- 1 + 2 + 3 + 0

-- 通过foldr可以快速实现一些常用的函数
sum = foldr (+) 0
and = foldr (&&) True
or = foldr (||) False
length = foldr (\x -> (+) 1) 0
map f = foldr ((:) . f) []

-- fold还经常和const一起使用
length = foldr (const $ (+) 1) 0

-- fold left，从左向右reduce
foldl :: (b -> a -> b) -> b -> [a] -> b
foldl (\acc elem -> <term>) <start_acc> <list>
```

## Datatype & Record

类似 TypeScript 里面的 union type 和 rust 里面的 enum

```hs
-- 注意Name需要大写开头
data Name = Constructor1 args | Constructor2 args | ...

-- 举例
data Calculation =
  Add Int Int | Sub Int Int | Mul Int Int | Div Int Int

-- 可以很方便地用在模式匹配中
calc :: Calculation -> Int
calc (Add x y) = x + y
calc (Sub x y) = x - y
calc (Mul x y) = x * y
calc (Div x y) = x `div` y

-- 类型的定义可以递归
-- 可以使用小写字母作为泛型参数
data Tree a = Leaf | Node (Tree a) a (Tree a)
tree :: Tree Int -- 声明一个Tree类型的变量
tree = Node (Node Leaf 1 Leaf) 2 (Node Leaf 3 Leaf) -- 定义变量的值

-- 使用Record创建带有字段名的data type
data Person = Person { name :: String, age :: Int }
-- 这会自动生成以下函数
name :: Person -> String
age :: Person -> Int
-- 举例，创建一个greet函数实现字符串拼接
greet :: Person -> [Char]
greet person = "Hi " ++ name person -- `++`是字符串拼接的函数
greet (Person n _) = "Hi " ++ n -- 使用模式匹配提取第一个字段

-- 为自定义的类型实现类型类
data Temperature = C Float | F Float
instance Eq Temperature where
  (==) (C n ) (C m) = n == m
  (==) (F n ) (F m) = n == m
  (==) (C n ) (F m) = n == (m - 32) * 5 / 9
  (==) (F n ) (C m) = (n - 32) * 5 / 9 == m

-- 使用derive快速实现类型类
-- 但是自动的不一定是对的，比如这里自动实现的Eq就是错的
data Temperature = C Float | F Float deriving (Show, Eq)
```

### Maybe

类似 Rust 里面的 Option

```hs
data Maybe a = Nothing | Just a

-- 举例
safediv :: Integral a => a -> a -> Maybe a
safediv _ 0 = Nothing
safediv x y = Just (x `div` y)

-- 常用函数
import Data.Maybe
isJust :: Maybe a -> Bool -- 判断是否是Just
isNothing :: Maybe a -> Bool -- 判断是否是Nothing
fromJust :: Maybe a -> a -- 从Maybe中提取值，如果是Nothing则会抛出异常
fromMaybe :: a -> Maybe a -> a -- 从Maybe中提取值，如果是Nothing则返回默认值
```

## IO

IO 不是函数！Haskell 里面的函数都是没有副作用的，而 IO 是有副作用的，所以 IO 不是函数，而是一种 action

```hs
putStrLn :: String -> IO () -- 返回的`()`是一个空的tuple
putStrLn "Hello World" -- 打印Hello World并换行

getLine :: IO String -- 从stdin读取一行

-- 在执行这些action的时候，必须在一个`do`的块里面
greet :: IO ()
greet = do
  putStrLn "What's your name?"
  name <- getLine -- 从stdin读取一行并赋值给name
  let uname = map toUpper name
  putStrLn ("Hi " ++ uname)
-- 在do的块里面let仍然可以使用，并且不需要`in`
-- let仍然会被lazy执行
```

同理，main 函数也是一个 IO action

```hs
main :: IO ()
main = do
  i <- getLine
  if i /= "quit" then do -- 这里也需要do
    putStrLn ("You said " ++ i)
    main -- 递归调用main而不是循环
  else
    return () -- action返回一个tuple
```

## 类型推断

编译器如何根据源代码进行类型推断？步骤如下：

1. 给所有变量一个不同的类型
2. 给所有函数的泛型参数一个不同的类型
3. 看看哪些类型是一样的，减少类型的数量，直到无法减少

比如：

```hs
-- 定义一个函数
f x y z = (x + y) : z

-- 编译器会给变量x/y/z分别赋予不同的类型，假设是a/b/c
x :: a
y :: b
z :: c

-- 由于加法的定义是：
(+) :: Num d => d -> d -> d
-- （此处由于a/b/c都已经被使用了，假设加法的泛型参数是d）

-- 那么在我们的函数f中，x和y进行了加法操作，所以
a = d
b = d

-- 类似的，由于`:`的定义是：
(:) :: e -> [e] -> [e]

-- 那么在我们的函数f中，(x+y)的结果类型`d`和z的类型`c`进行了`:`操作，所以
d = e
c = [e]

-- 总结下来
f :: Num d => d -> d -> [d] -> [d]
```

使用这种方法也可以发现类型错误，比如发现某两个不兼容的类型竟然是相等的，比如`b = [b]`，那就是出现了类型错误

## Monad

### 概述

Monad 相当于一个盒子，比如 Maybe（或者 Rust 里面的`Option`）就是一个 Monad。这个盒子里面可能有值，也可能没有值

在 haskell 中一个 monad 需要实现四个函数（可以使用`:info Monad`查看）：

- `>>=` bind: 用来把盒子里面的值取出来，执行操作，然后再装回去
- `>>` anonymous bind: 在没有出现异常的时候顺序执行，出现异常的时候传播异常
- `return` 将一个值装箱
- `fail` 处理异常

其中只有`>>=`是必须实现的，其他三个都有默认实现

### bind

`>>=`函数是一个特殊的函数，称为`bind`

bind 相当于把盒子里面的值取出来（拆箱），执行操作，然后再装回去（装箱）

```hs
-- bind要求泛型m必须是一个Monad
(>>=) :: Monad m => m a -> (a -> m b) -> m b
```

翻译为 Rust 类似于：

```rs
fn bind<A, B, M: Monad>(m: M<A>, f: fn(A) -> M<B>) -> M<B>;

// 实例
fn bind(m: Option<String>, f: fn(String) -> Option<i32>) -> Option<i32>;

// 其实和Option::and_then是一样的
impl<T> Option<T> {
  pub fn and_then<U>(self, f: impl FnOnce(T) -> Option<U>) -> Option<U> {
    match self {
        Some(x) => f(x),
        None => None,
    }
  }
}
```

回到 Haskell：

```hs
Just 1 >>= (\x -> Just x) -- Just 1
-- Maybe是一个Monad
-- 相当于我们把Maybe里面的1取出来，执行操作，然后再装回去

Nothing >>= (\x -> Just x) -- Nothing
-- Nothing里面没有值，所以取不出来，所以直接返回Nothing

-- 举例：我们可以创建一个maybe add函数，把一个maybe和一个数字相加
-- 如果maybe是Nothing，那么返回Nothing
-- 如果maybe是Just x，那么返回Just (x + n)
maybeAdd :: Num a => Maybe a -> a -> Maybe a
maybeAdd Nothing _ = Nothing
maybeAdd (Just x) n = Just (x + n)

-- 或者我们可以使用bind来实现maybeAdd
maybeAdd mx y = mx >>= (\x -> Just (x + y))

-- 如果我们允许两个参数都是Maybe，那么我们可以这么写
maybeAdd :: Num a => Maybe a -> Maybe a -> Maybe a
maybeAdd mx my = mx >>= (\x -> my >>= (\y -> Just (x + y)))

-- IO也是一个Monad。如果我们希望我们的maybeAdd可以作用在任意Monad而不仅是Maybe上，那么我们可以这么写
monadAdd :: (Monad m, Num a) => m a -> m a -> m a
monadAdd mx my = mx >>= (\x -> my >>= (\y -> return (x + y))) -- return相当于把值装回盒子里面

-- 我们在IO里面使用的`do`和`<-`其实就是bind的语法糖，可以简化上面的写法
monadAdd :: (Monad m, Num a) => m a -> m a -> m a
monadAdd mx my = do
  x <- mx -- 如果mx里面有值，那么就把值取出来赋值给x
  y <- my -- 如果my里面有值，那么就把值取出来赋值给y
  return (x + y) -- 把x+y装回盒子里面

-- Maybe具体是如何实现Monad的？
instance Monad Maybe where
  m >>= f = case m of -- case是另一种模式匹配的语法
    Nothing -> Nothing -- 短路
    Just x -> f x -- 执行f x
  return x = Just x -- return相当于把值装回盒子里面
```

因为 Monad 可以保证调用环境的纯洁性，所以可以用来处理副作用。通常用来处理 IO，或者其他拥有内部状态的操作

### anonymous bind

另一个 Monad 的重要函数是`>>`

```hs
(>>) :: Monad m => m a -> m b -> m b
-- 可以使用bind来实现anonymous bind
a >> b = a >>= (\_ -> b) -- 如果a有值，把a的值丢弃，然后把b的值装箱返回

-- 举例
Nothing >> Just 1 -- Nothing
Just 1 >> Just 2 -- Just 2
Just 1 >> Nothing -- Nothing

-- 如果在do里面没有接受返回值，就相当于使用了`>>`
main :: IO ()
main = do
  putStrLn "Hello"
  putStrLn "World"
  return ()
-- 相当于
main = putStrLn "Hello" >> putStrLn "World" >> return ()
-- 可以看出，我们仅关注action是否返回了异常（比如Nothing）。一旦发生异常，就会短路并向外传播，否则就继续执行
```

类似于 Rust 中的`Option::and_then`只不过丢弃了`Some`的内容

### fail

`fail`函数用来处理异常，函数签名是：

```hs
fail :: String -> m a
```

默认情况下，fail 会接受一个字符串（错误信息），然后直接终止程序。但是如果你的 monad 可以处理这个异常，那么你可以重载这个函数，让它返回一个 monad

### Monad Laws

如果我们实现了一个 Monad，那么我们需要保证它满足以下三个定律

```hs
-- Left Identity
return x >>= f = f x

-- Right Identity
m >>= return = m

-- Associativity
m >>= (\x -> f x >>= g) = (m >>= f) >>= g
```

比如对于 Rust 中的 Option 来说：

```rs
// left identity
let f = |x| Some(x + 1);
Some(1).and_then(f) == f(1)

// right identity
Some(1).and_then(Some) == Some(1)

// associativity
let f = |x| Some(x + 1);
let g = |x| Some(x * 2);
Some(1).and_then(f.and_then(g)) ==
Some(1).and_then(f).and_then(g)
// 也就是说，在monad内部运算f/g和在monad外部运算f/g是等价的
```

## QuickCheck

用来在 ghci 里面快速测试函数是否正常，或者在重构的时候判断两个函数是否等价

安装：

```sh
cabal install QuickCheck
```

导入：

```hs
import Test.QuickCheck
```

使用例：

```hs
-- 正常的函数
f a b = (a+b) == (b+a)
quickCheck f

-- 错误的函数
f xs = (length $ tail xs) == ((length xs) - 1)
quickCheck f
-- 报错，因为 tail [] 会抛出异常

-- 设置例外，这里的`==>`其实是quickCheck的一个操作符，定义了过滤条件
f xs =
  not (null xs) ==>
  (length $ tail xs) == ((length xs) - 1)
quickCheck f

-- verbose
quickCheck (verbose f)

-- 前面的例子使用`==`相当于rust中的`assert`，仅判断`==>`后面是否为true
-- 使用`===`代替`==`相当于rust中的`assert_eq`，虽然都是判断是否相等
-- 但是`===`会输出更多的信息，比如左右的值各是多少
f xs =
  not (null xs) ==>
  (length $ tail xs) == ((length xs) - 1)
```

其他 util functions:

- collect: 打印测试数据的一些信息
- classify: 为测试数据分类

还可以使用`where`指定数据类型

## 无限列表

由于函数式编程的惰性求值，我们可以创建无限列表

```hs
-- 一个拥有无限个1的列表
ones = 1 : ones

-- 用例
take 5 ones -- [1, 1, 1, 1, 1]
```

就像是一些编程语言里面的 generator 一样

以下是自然数、偶数、奇数的无限列表（这种写法不一定是最高效的，只是为了演示 map/filter 之类的功能可以正常使用）

```hs
nat = asc 1
  where
    asc n = n : asc (n+1)

evens = map (*2) nat

odds = filter (\x -> mod x 2 == 0) nat
```

但是需要注意：虽然我们可以 map/filter/take 等操作无限列表，但是如果我们使用了`length`这种需要遍历整个列表的操作，那么程序就会陷入无限循环，所以不要 evaluate the whole list or evaluate the end

其他常见无限列表：

- 素数
- 斐波那契数列
- 不一定是数字，也可以是字符、字符串等

应用：

```rs
let mut i = 0;
loop {
  if p(i) {
    break;
  }
  i++;
}
```

可以使用无限列表简写为：

```hs
find p nat
```

## newtype

使用 newtype 可以用来创建同构的类型，比如：

```hs
newtype Name = Name String
```

newtype 要求：只能有一个 constructor，只能有一个成员（以此来保证新类型和内部类型同构）

newtype 只会在编译期检查类型，在运行时会被擦除

## Eigher

```hs
data Either a b = Left a | Right b
```

曾经 Rust 中也有 Either，但是由于 Left/Right 这两个名字太 general，所以被从 std 中移除了。开发者应该创建自己的数据类型，并给 Left/Right 起一个更加具体的名字

## Thunk

Thunk 是 Haskell 中的一个概念，类似于 Rust 中的闭包。Thunk 是一个延迟计算的表达式，只有在需要的时候才会被计算

```hs
-- 举例
f x y = if x > 0 then x else y
f (1 + 1) (2 + 1)
```

在命令式语言中会先计算 1+1 和 2+1，然后再调用 f

但是在 Haskell 中，1+1 和 2+1 都是 Thunk，只有在 f 需要的时候才会被计算。那么在上面的例子中，1+1 会先被计算，但是因为 x>0，所以 2+1 就不会被计算

但是这个特性可能会导致内存中保存太大的 thunk 而没有计算，导致内存的浪费，所以有些函数提供了 strict 版本，不延迟计算，而是立即计算。比如`foldl`就提供了 strict 版本的`foldl'`

```hs
foldl (+) 0 [1,2,3]
==> foldl (+) (0+1) [2,3]
==> foldl (+) ((0+1)+2) [3]
==> foldl (+) (((0+1)+2)+3) [] -- 越来越大的 thunk

foldl' (+) 0 [1,2,3]
==> foldl' (+) 1 [2,3] -- 立即计算
==> foldl' (+) 3 [3]
==> foldl' (+) 6 []
```

这是通过 `seq` 函数实现的：

```hs
seq :: a -> b -> b
seq a b = b
```

看起来好像只是丢弃了第一个参数，但是实际上会强制计算第一个参数，然后返回第二个参数。这是 haskell 中唯一一个会强制计算参数的函数（在编译器里面实现，源代码看不出来）

我们会说 `a` 是 strict 的（ `b` 是 lazy 的），或者 "`seq` is strict in its first argument"

类似的，`$!` 是一个 strict 的 `$`，会强制计算它的参数。比如`$! f x`会强制计算`x`，然后再调用`f`

另外，不要 abuse seq! 编译器很多时候已经足够聪明了，特别是启动优化的时候

## Exception

```hs
data MyError = ErrorA | ErrorB deriving Show
instance Exception MyError

-- 抛出异常
throw ErrorA
```

只有 IO monad 可以捕获异常。纯函数无法捕获异常，因为纯函数是没有副作用的

## 并发

Haskell 98 不支持并发，但是有扩展可以让 Haskell 支持并发，并且默认其实就是启用的，所以直接用就行

- 使用`forkIO` fork 一个线程
- 使用`MVar` 用来在线程之间传递数据（类似 mutex 和 queue，有原子性，但是只能存一个数据）
- 使用`Chan` 用来在线程之间传递数据（类似 queue，可以存多个数据）
- 使用`QSem/QSemN`作为信号量

### 乐观锁

默认情况下的锁是悲观的：线程 A 因为担心线程 B 在 A 修改数据的同时修改数据，所以线程 A 在获取数据的时候就给数据加一个锁，让线程 B 无法修改数据，这样线程 A 就可以安全地修改数据了

悲观锁的缺点是 blocking，在线程 A 处理的时候线程 B 都无法处理，导致效率低下

乐观锁：线程 A 不担心线程 B 在线程 A 修改数据的同时修改数据，所以线程 A 先拿到数据，不上锁。当 A 完成了处理，把数据写回的时候，再判断数据是否被 B 修改过。如果没有，那么就写回，如果有，那么就重试

乐观锁的优点是避免了死锁，还能保证原子性、一致性和隔离性

乐观锁也叫 Transactional Memory，通常由硬件实现，也可以由软件实现

在 haskell 中，使用`STM`作为乐观锁（software transactional memory），它是一个 Monad

## Semigroup and Monoid

- Magma: A set `S` with a closed binary operation (the operation produces elements that are in `S`)
- Semigroup: An associative magma
  - e.g. `(a + b) + c` = `a + (b + c)`
  - 一个类型可能有多个 Semigroup 实例，比如 Int 可以有 `+` 和 `*` 两个 Semigroup 实例
  - 不一定是数字，比如数组拼接也是一个 Semigroup
- Monoid: A semigroup with an identity element
  - 比如加法里面的 0，乘法里面的 1，数组拼接里面的空数组

```hs
-- 在haskell中使用 `<>` 表示这个 semigroup 中的具有结合性的操作
instance Semigroup [a] where
  (<>) = (++)

class Semigroup a => Monoid a where
  mempty :: a -- 只有这个是必须的
  mappend :: a -> a -> a
  mconcat :: [a] -> a
```

一个类型可能没有符合 semigroup 的操作，也可能有多个符合 semigroup 的操作（比如整数可以有加法和乘法）。可以使用 newtype 创建新的类型，就可以给整数实现多个 semigroup/monoid

为什么要抽象这两个定义出来？

- 为了让代码更加通用
  - 比如定义一个分布式算法，只接受 monoid 类型的参数，这个分布式算法可以自由安排计算顺序，因为 monoid 是满足结合律的，然后把计算任务分配到不同算力的机器上，最后再合并结果
- 可以从理论上证明代码的正确性
  - 比如 `mempty <> x = x`，`x <> mempty = x`，`x <> (y <> z) = (x <> y) <> z`

## Category Theory

在 category theory 中会研究两个概念：object 和 morphism(arrow)

不同的 object 之间可以通过 morphism 连接起来，形成一个 category。每个 object 都有一个 identity morphism 用来连接自己

延申学习资料：[Programming with Categories](https://www.youtube.com/playlist?list=PLhgq-BqyZ7i7MTGhUROZy3BOICnVixETS)

书籍：《category theory for programmers》《seven sketches in compositionality: an invitation to applied category theory》

Rust crate: [fmap](https://docs.rs/fmap/latest/fmap/index.html)

### Functor

一个 category 到另一个 category 的映射

```hs
class Functor (f :: * -> *) where
  fmap :: (a -> b) -> (f a -> f b) -- 必须实现
  (<$) :: a -> f b -> f a

-- 举例
instance Functor Maybe where
  fmap f (Just x) = Just (f x)
  fmap _ Nothing = Nothing

instance Functor [] where
  fmap = map
```

基于这种抽象，我们就多个一个从理论上证明算法正确性的工具。比如我们可以证明对于任意列表，`map (f.g) == map f (map g)`。或者说，对于任意 Functor，`fmap (f.g) == fmap f . fmap g`

### Monoidal

```hs
class Functor f => Monoidal f where
  unit :: f ()
  (**) :: (f a -> f b) -> f (a, b)

-- 举例
instance Monoidal [] where
  unit = [()]
  (**) as bs = [(a, b) | a <- as, b <- bs]
```

### Applicative

可以用来提升`f`

```hs
class Functor f => Applicative (f :: * -> *) where
  pure :: a -> f a
  (<*>) :: f (a -> b) -> (f a -> f b)
```

### 再看 Monad

```hs
class Applicative m => Monad (m :: * -> *) where
  (>>=) :: m a -> (a -> m b) -> m b
  (>>) :: m a -> m b -> m b
  return :: a -> m a
```

### Arrow

没看明白，以后再看
