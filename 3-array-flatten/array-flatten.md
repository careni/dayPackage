# 数组扁平化

## 来源
express框架的依赖包

## 参数
  1.目标数组

  2.深度

## 使用方式
```javascript
const flat = require('array-flatten')
var array = [1, 2, [3,4], [5,[6, [7, 8]]]]
flag(array) // 全部展开 [1, 2, 3, 4, 5, 6, 7, 8]
flag(array, Infinity) //全部展开 [1, 2, 3, 4, 5, 6, 7, 8]
flag(array, 2) // 展开深度为2 [1, 2, 3, 4, 5, 6, [7, 8]]
```

## 相关API
Array.isArray严格判断是否为数组对象


## 其他实现方式
关于数组扁平化是面试的一个考点，实现数组扁平化的方式是非常多的。array-flatten中的实现是运用了递归的方式进行实现，并且没有过多的调用Array本身所有的原生API

>方法一：Array.prototype.flat

Array对象的标准API方法：按照指定深度递归数组，实现扁平化并返回新数组,深度默认为1
```javascript
var array = [1, 2, [3,4], [5,[6, [7, 8]]]]
array.flat(2)
array.flat(Infinity)
```

>方法二：Array.prototype.reduce + Array.prototype.concat

```javascript
function flatDepth(array, depth) {
  if (depth == null) depth = Infinity
  return array.reduce((acc, value) => {
    return (Array.isArray(value) && depth > 1) ? acc.concat(flag(value, depth - 1)) : acc.concat(value)
  }, [])
}
```

>方法3：非递归，无限嵌套的方式

```javascript
function flatten (array) {
  var stack = [...array]
  var res = []
  while (stack.length) {
    var value = stack.pop()
    if (Array.isArray(value)) {
      stack.push(...value)
    } else {
      res.push(value)
    }
  }
  return res.reverse()
}
```

## 方法总结
除去以上方法针对某些特殊的数组，比方说['a', ['b', 'c']]等等，完全可以转换成字符串然后分割。最常见的还是以递归的方式来实现数组扁平化。
