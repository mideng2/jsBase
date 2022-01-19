// 参数 子类构造函数，基类构造函数
function extend(sup, base) {
  // 获取基类原型描述
  var descriptor = Object.getOwnPropertyDescriptor(base.prototype, 'constructor')
  // 基类的原型改成 子类
  base.prototype = Object.create(sup.prototype)

  // 拼装handler
  var handler = {
    // 在new的时候，
    construct: function (target, args) {
      var obj = Object.create(base.prototype)
      console.log('construct apply', target.toString())
      this.apply(target, obj, args) // obj，被调用时的上下文
      return obj
    },
    apply: function (target, that, args) {
      // 所以这个target全程没用到？输出一下target是啥
      console.log('apply apply', target.toString())
      sup.apply(that, args) // that调用sup方法，并传入参数args
      base.apply(that, args) // that调用base方法，并传入参数args
    }
  }
  var proxy = new Proxy(base, handler)
  descriptor.value = proxy
  Object.defineProperty(base.prototype, 'constructor', descriptor)
  return proxy
}

var Person = function (name) {
  this.name = name
}

var Boy = extend(Person, function (name, age) {
  this.age = age
})

Boy.prototype.sex = 'M'

var Peter = new Boy('Peter', 13)
console.log(Peter.sex) // "M"
console.log(Peter.name) // "Peter"
console.log(Peter.age) // 13
