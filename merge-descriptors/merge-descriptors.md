# 并入函数

## 来源
express框架的依赖包

## 参数
  1.目标对象

  2.并入源对象

  3.是否重新定义目标对象与并入源对象的相同部分(默认为true)

## 使用方式
```javascript
var mixin = require('merge-descriptors')
// 目标0
var target = {
  name: 'Tom',
  age: '24'
}
// 目标1
var target1 = {
  name: 'Tom',
  age: '24'
}

// 创建Symbol对象
var symm = Symbol()
var src = {
  country: 'America',
  job: 'doctor',
  age: '25',
  [symm]: 'hello world' // symbol属性

}
mixin(target, src) // target = {name: 'Tom', age: '25', country: 'America', job: 'doctor'}
mixin(target, src, false) // arget = {name: 'Tom', age: '24', country: 'America', job: 'doctor'}
```

## 相关API
1.Object.getOwnPropertyNames

2.Object.hasOwnProperty

3.Object.getOwnPropertyDescriptor

4.Object.defineProperty

## 缺陷
Object.getOwnPropertyNames方法只能获取到对象上非symbol类型的属性名称，所以在源对象上存在symbol类型的值时，是无法并入到目标对象上的

### 修改方式
  Object.getOwnPropertyNames(src).concat(Object.getOwnPropertySymbols(src))
  或者
  Reflect.ownKeys(src)
