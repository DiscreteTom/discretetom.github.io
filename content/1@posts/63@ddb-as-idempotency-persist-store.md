---
title: 使用DynamoDB实现业务逻辑幂等性
description: 通过在DDB中保存幂等ID、时间戳，并使用condition expression来实现
---

## 目标

重复的请求不会重复执行业务逻辑。

## 实现方案

使用 DynamoDB 作为持久化数据库，记录请求的唯一标识符，如果已经存在，则不执行业务逻辑。

基本思路：在请求开始时，先检查 DynamoDB 中是否存在该请求的唯一标识符，如果存在，则不执行业务逻辑，如果不存在，则执行业务逻辑，并将唯一标识符写入 DynamoDB。

DynamoDB 虽然是最终一致性数据库，但是可以在写入时指定条件，如果写入失败，则说明已经存在该唯一标识符，不执行业务逻辑。所以实际的业务流应该是：

1. 尝试向 DDB 中写入唯一标识符（而不是先查询再写入，保证原子性）并要求此标识符不能已经存在，或者已经过期，如果写入失败，则说明已经存在该唯一标识符，不执行业务逻辑。
2. 执行业务逻辑
3. 执行完毕后，把标识符的状态更新为已完成

## 实际情况

### 成功的请求

1. 首个请求成功写入，DDB 中幂等 ID 的状态更新为已完成
2. 后续请求尝试向 DDB 写入幂等 ID，失败，不执行业务逻辑

### 幂等 ID 过期

1. 首个请求成功写入，DDB 中幂等 ID 的状态更新为已完成
2. 后续请求尝试向 DDB 写入幂等 ID，幂等 ID 已经过期，所以写入成功，执行业务逻辑

### 未成功完成的请求

1. 首个请求向 DDB 写入幂等 ID，但是执行失败，DDB 中幂等 ID 的状态为未完成
2. 后续请求尝试向 DDB 写入幂等 ID，失败，不执行业务逻辑
3. 等待幂等 ID 过期后，后续请求可以成功写入，执行业务逻辑

## 测试

### DynamoDB Schema

```ts
// 这里经过了简化。实际应该包含一些请求相关的信息，比如请求的参数等
type Schema = {
  id: string; // hash key
  live: number; // 设置为DynamoDB TTL实现自动删除
};
```

### CLI

```sh
aws dynamodb pub-item --table-name test --item file://item.json --condition-expression "attribute_not_exists(id) OR live < :exp" --expression-attribute-values file://values.json
```

需要注意：此处仍然需要判断`live`是否过期，而不能依赖 DDB 的 TTL 功能。DDB 的 TTL 并不能准时删除，而是在后台异步删除，所以在写入时仍然需要判断`live`是否过期。

### 首次写入

```ts
const item = {
  id: {
    S: "123",
  },
  live: {
    N: "100",
  },
};
const values = {
  ":exp": {
    N: "0",
  },
};
```

成功

### 写入已存在的 ID

仍然使用上述参数，再次执行

报错：conditional request failed，因为主键已存在且未过期(`live > exp`)

### 过期后再次写入

```ts
const item = {
  id: {
    S: "123",
  },
  live: {
    N: "300",
  },
};
const values = {
  ":exp": {
    N: "200",
  },
};
```

写入成功

## 优化

此示例偷懒，实际上除了幂等 ID 的 TTL 之外，还应该保存一个处理中的 TTL，用来处理未成功完成的请求。但是思路都是一样的，基于 condition expression 来实现。

## 参考

- [Powertools for AWS Lambda (TypeScript)](https://docs.powertools.aws.dev/lambda/typescript/latest/utilities/idempotency/#idempotency-request-flow)
- [DynamoDB Condition expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html)
