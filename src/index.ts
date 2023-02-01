const getJSONVal = (val: string): [Error | null, any] => {
  if (!val || typeof val !== 'string') {
    return [new Error('value must be a string'), null]
  }

  let result = null
  let error = null

  try {
    result = JSON.parse(val)
  } catch (err) {
    error = err as Error
  }
  return [error, result]
}


export {
  getJSONVal
}

export default getJSONVal