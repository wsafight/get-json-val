# get-json-val

At the same time, it is a function to judge whether it is a JSON string and the result of parsing the JSON string.

## Install

```bash
npm install get-json-val
```

or

```bash
yarn install get-json-val
```

## Usage

### parameter

| parameter                 | desc                 | type                 | default                      |
| :----------------- | :----------------- | :----------------- | :----------------------- |
| val       |   JSON string    | string | -                        |

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

## Changelog
- 0.0.2 Complete basic functions


