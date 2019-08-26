// function: merge the property descriptors of src into dest

var hasOwnProperty = Object.prototype.hasOwnProperty

// 目标对象，复制对象，是否重新定义
function merge (dest, src, redefine) {
  if (!dest) {
    throw new Error('arguments dest is required')
  }

  if (!src) {
    throw new Error('arguments src is required')
  }

  if (redefine === undefined) {
    // 默认为true
    redefine = true
  }

  Object.getOwnProperty(src).forEach(function forEachOwnPropertyName(name) {
    if (!redefine && hasOwnProperty.call(dest, name)) {
      // 如果不同重新定义
      return
    }

    // 实现复制
    var descriptor = Object.getOwnPropertyDescriptor(src, name)
    Object.defineProperty(dest, name, descriptor)
  })

  // 最后返回dest对象
  return dest
}