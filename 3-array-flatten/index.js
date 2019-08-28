// 数组扁平化
// 待扁平化数组，结果数组，深度
function flattenWithDepth (array, result, depth) {
  for (var i = 0; i < array.length; i++) {
    var value = array[i]

    if (depth > 0 && Array.isArray(value)) {
      flattenWithDepth(value, result, depth - 1)
    } else {
      result.push(value)
    }
  }
  return result
}

// 完整展开数组
function flattenForever (array, result) {
  for (var i = 0; i < array.length; i++) {
    var value = array[i]
    if (Array.isArray(value)) {
      flattenForever(value, result)
    } else {
      result.push(value)
    }
  }
  return result
}

// 最终调用
function flat (array, depth) {
  if (depth == null) {
    return flattenForever(array, [])
  }
  return flattenWithDepth(array, [], depth)
}

module.exports = flat