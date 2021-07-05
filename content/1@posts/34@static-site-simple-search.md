---
title: Add Simple Search Utility to Static Sites
description: Without any backend servers and databases.
tags:
  - Web
---

## A Sample Text

> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Step 1: Text Segmentation

Currently I use [nodejieba](https://github.com/yanyiwu/nodejieba) to do text segmentation for both Chinese and English.

Output `tokens`:

```json
[
  "Lorem",
  " ",
  "ipsum",
  " ",
  "dolor",
  " ",
  "sit",
  " ",
  "amet",
  ",",
  " ",
  ...
]

```

## Step 2: Remove Symbols, Deduplicate

```js
const noise = ' \\\n\t\r"\'>|?<[.,/#!$%^&*;:{}=-+_`~()]！？｡。＂＃＄％＆＇（）＊＋，－／：；＜＝＞＠［＼］＾＿｀｛｜｝～｟｠｢｣､、〃》「」『』【】〔〕〖〗〘〙〚〛〜〝〞〟〰〾〿–—‘’‛“”„‟…‧﹏.'.split('')

let words = new Set(
  tokens.filter(word => !(word.length == 0 || noise.includes(word)))
  .map(word => word.toLowerCase())
)
```

Output `words`:

```json
[
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipisicing",
  "elit",
  "sed",
  "do",
  ...
]

```

## Step 3: Consturct Search Table

```js
let searchTable = {}
words.forEach(w => {
  let start = w[0]
  if (!(start in searchTable)) {
    searchTable[start] = {}
  }
  if (!(w in searchTable[start])) {
    searchTable[start][w] = []
  }
  searchTable[start][w].push("path to this doc")
})
```

Output `searchTable`:

```json
{
  "l": {
    "lorem": ["path to this doc"],
    "labore": ["path to this doc"],
    "laboris": ["path to this doc"],
    "laborum": ["path to this doc"]
  },
  "i": {
    "ipsum": ["path to this doc"],
    "incididunt": ["path to this doc"],
    "irure": ["path to this doc"],
    "in": ["path to this doc"],
    "id": ["path to this doc"]
  },
  ...
}
```

## Step 4: Store Search Table to Static Files

```json
// file: l.json
{
  "lorem": ["path to this doc"],
  "labore": ["path to this doc"],
  "laboris": ["path to this doc"],
  "laborum": ["path to this doc"]
}

// file: i.json
{
  "ipsum": ["path to this doc"],
  "incididunt": ["path to this doc"],
  "irure": ["path to this doc"],
  "in": ["path to this doc"],
  "id": ["path to this doc"]
}

// file: d.json
{
  "dolor": ["path to this doc"],
  "do": ["path to this doc"],
  "dolore": ["path to this doc"],
  "duis": ["path to this doc"],
  "deserunt": ["path to this doc"]
}

...
```

## Step 5: Integrate with Static Sites

Whenever a user input something in the search bar, send a request using the first char of the search input.

For example, if I search `ipsum`, the site should request for `i.json` to get doc paths.





