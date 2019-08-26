# 并入函数

## 来源
express框架的依赖包

## 参数
  1.目标对象

  2.并入源对象

  3.是否重新定义目标对象与并入源对象的相同部分(默认为true)

## 使用方式
```javascript
var mixin = require('merge-descriptors');
var target = {
  name: 'Tom',
  age: '24'
}
var src = {
  country: 'America',
  job: 'doctor',
  age: '25'
}
mixin(target, src) // target = {name: 'Tom', age: '25', country: 'America', job: 'doctor'}
mixin(target, src, false) // arget = {name: 'Tom', age: '24', country: 'America', job: 'doctor'}
```

## 相关API
1.getOwnProperty

2.hasOwnProperty

3.getOwnPropertyDescriptor

4.defineProperty
