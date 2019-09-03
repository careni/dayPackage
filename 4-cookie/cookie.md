# cookie字符串解析以及cookie对象的序列化

## 来源
express框架的依赖包

## cookie讲解
该包的实现比较简单，没有什么难点，在此就不再解析。

  前端设置cookie的方式是通过document.cookie.cookie包含以下参数：

  1.name
  >需要设置的键名 username

  2.value
  >需要设置的键值 'ronnie'

  3.Domian
  >cookie所在的域名 'baidu.com'

  4.Path
  >cookie所访问的路径 '/'

  5.Expires
  >cookie的过期时间，时间戳'2027-10-21T07:48:25.783Z'

  6.Max-Age
  >cookie的有效时间，默认为-1（当次会话有效）以秒为单位 3600

  7.Secure
  >只有在https协议下，cookie才会被带在请求中发送到服务器

  8.HttpOnly
  >是否允许javascript操作cookie

  9.SameSite
  >是否允许携带cookie，有两个可选值Strict，Lax。Strict模式下任何请求都不允许携带cookie，Lax模式下一些安全的Http请求可以携带，例如\<a\>,\<link\>, \<form get\>这些，想ajax，post，\<img\>都是不可携带的

## cookie的拼接
根据以上的讲解我们可以拼接一个如下的字符串
```javascript
var ck = 'username=ronnie;domain=baidu.com;path=/;expires=2027-10-21T07:48:25.783Z;max-age=3600;secure;sameSite=Lax'

document.cookie = ck;
// 其中httponly需由服务端设置
````
