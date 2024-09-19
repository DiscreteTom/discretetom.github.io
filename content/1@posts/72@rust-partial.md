---
title: PartialEq vs Eq, PartialOrd vs Ord
---

## PartialEq vs Eq

> In mathematics, a partial equivalence relation is a homogeneous binary relation that is symmetric and transitive. If the relation is also reflexive, then the relation is an equivalence relation.
>
> https://en.wikipedia.org/wiki/Partial_equivalence_relation

- 对称性(symmetric)：如果`a == b`，那么`b == a`
- 传递性(transitive)：如果`a == b`且`b == c`，那么`a == c`
- 自反性(reflexive)：`a == a`

- PartialEq: 仅要求满足对称性和传递性
- Eq: 在 PartialEq 的基础上还要满足自反性

一个满足 PartialEq 但是不满足 Eq 的例子是 IEEE 浮点数，因为其中的 NaN，满足对称性和传递性，但是不满足自反性： `NaN != NaN`

rust 中也是有 [NaN](https://doc.rust-lang.org/std/primitive.f32.html#associatedconstant.NAN) 的

通过对比 rust 标准库中实现了 PartialEq 和实现了 Eq 的类型，就可以找到哪些类型实现了 PartialEq 但是没有实现 Eq。看了一圈，基本上常用的就是 f16/f32/f64/f128 了

## PartialOrd vs Ord

> A reflexive, weak, or non-strict partial order, commonly referred to simply as a partial order, is a homogeneous relation on a set that is reflexive, antisymmetric, and transitive.
>
> https://en.wikipedia.org/wiki/Partially_ordered_set#Partial_order

> In mathematics, a total order or linear order is a partial order in which any two elements are comparable.
>
> https://en.wikipedia.org/wiki/Total_order

- 自反性(reflexive)：`a <= a`
- 反对称性(antisymmetric)：如果`a <= b`且`b <= a`，那么`a == b`
- 传递性(transitive)：如果`a <= b`且`b <= c`，那么`a <= c`
- 强连接性(strongly connected / totality)：任意两个元素都是可比较的，即`a <= b`或`b <= a`

- PartialOrd: 仅要求满足反对称性和传递性，而自反性仅对`<`和`>`有 strict 的要求，对`<=`和`>=`没有 strict 的要求。也就是说，`a < a`是 false，但是`a <= a`可以是 true 也可以是 false，或者是不可比较的，所以 IEEE 浮点数是满足 PartialOrd 的
- Ord: 在 PartialOrd 的基础上还要满足强连接性，即任意两个元素都是可比较的

不难看出，在 PartialOrd 中有可能有两个元素压根无法比较，所以 rust 的 `PartialOrd::partial_cmp` 的返回值是一个 `Option<Ordering>`。而 Ord 要求任意两个元素都是可比较的，所以 `Ord::cmp` 的返回值是一个 `Ordering`

类似的，我们可以对比 rust 标准库里面哪些类型实现了 PartialOrd 但是没有实现 Ord，比如 f16/f32/f64/f128
