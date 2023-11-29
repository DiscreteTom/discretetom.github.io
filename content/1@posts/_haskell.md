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

## Monad

`>>=`函数是一个特殊的函数，称为`bind`

Monad 相当于一个盒子，bind 相当于把盒子里面的值取出来（拆箱），执行操作，然后再装回去（装箱）

```hs
(>>=) :: Monad m => m a -> (a -> m b) -> m b

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

```hs
-- 另一个Monad的重要函数是`>>`
(>>) :: Monad m => m a -> m b -> m b
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
