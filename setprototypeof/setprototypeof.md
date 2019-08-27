# 设置对象原型

## 来源
express框架的依赖包

## 参数
  1.目标对象

  2.原型对象

## 使用方式
```javascript
const setPrototypeOf = require('setPrototypeOf')
var obj = {}
var proto = { speak: function () { console.log('Hello,World') }}
setPrototypeOf(obj, proto)
obj.speak() // 'Hello,World'
```

## 相关API
1.Object.hasOwnProperty

2.Object.setPrototypeOf

## 讲解
```javascript
module.exports = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties)
```

‘{ \_\_proto\_\_: [] } instanceof Array’的意思是为检测当前环境中，‘\_\_proto\_\_’属性是否被支持。因为‘\_\_proto\_\_’并不是标准属性，在IE中是不支持的，应当调用Object.getPrototypeOf()获取对象的原型。所以才会有setProtoOf和mixinProperties两种方法

## 缺陷
调用Object.setPrototypeOf是非常耗时的，在各个浏览器和javascript引擎中，更改原型都是复杂缓慢的操作。如果更关心性能的话就应该避免使用改方法，转而使用Object.create方法创建带有某个原型对象的新对象。

### 修改方式
使用Object.create(obj, proto)