# get-json-val

Read this in other languages:
[English](https://github.com/wsafight/get-json-val/blob/main/README.EN.md)

同时判断是否是 JSON 字符串以及解析 JSON 字符串的结果的函数。

## 安装

```bash
npm install get-json-val
```

或者

```bash
yarn install get-json-val
```

## 用法

### 参数

| 参数                 | 说明                 | 类型                 | 默认值                      |
| :----------------- | :----------------- | :----------------- | :----------------------- |
| val       |   JSON 字符串    | string | -                        |

```ts
import { getJSONVal } from 'get-json-val'

getJSONVal(null as any)
// [new Error('value must be a string'), null]

getJSONVal('')
// [new Error('value must be a string'), null]

getJSONVal('a: 1')
// [new SyntaxError('Unexpected token a in JSON at position 0'), null]

getJSONVal('{"a":1}')
// [null, { a: 1 }]
```

## 升级日志
- 0.0.2 完成基本功能


