import { getJSONVal } from '../src'

describe('getJSONVal', () => {
  it('null', () => {
    expect(getJSONVal(null as any)).toEqual([
      new Error('value must be a string'),
      null,
    ])
  })

  it('undefined', () => {
    expect(getJSONVal(undefined as any)).toEqual([
      new Error('value must be a string'),
      null,
    ])
  })

  it('empty string', () => {
    expect(getJSONVal('')).toEqual([new Error('value must be a string'), null])
  })

  it('error', () => {
    expect(getJSONVal('a: 1')).toEqual([
      new SyntaxError('Unexpected token a in JSON at position 0'),
      null,
    ])
  })

  it('success', () => {
    expect(getJSONVal('{"a":1}')).toEqual([null, { a: 1 }])
  })
})
