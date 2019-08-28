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
array.flag(2)
array.flag(Infinity)
```
