/**
 * decorator是语法糖，其实用的是es5的object.defineProperty(target, name, descriptor)
 * 
*/


/**
 * 1) 函数参数是类的构造函数，返回是新的构造函数
 * 2）
*/
// 装饰类
function decClass1 (ctor) {
  console.log('decClass1', ctor, ctor.prototype)
  return class extends ctor {
    constructor (props) {
      super(props)
      console.log(props)
      this.a = 222
      this.b = 12345
    }
  }
}

function decClass (param) { // 外层包的一层函数，如果@decClass没带参数，则不用包这一层
  return function (target) { // 传入的constructor
    console.log('decClass', target, target.prototype)
    target.prototype.a = param // 改变构造函数原型上的属性，原构造函数如果有这个
    target.prototype.b = 223
    target.prototype.log = (txt) => {
      console.log('日志', txt)
    }
  }
}

// 装饰方法
function decFun (target, name, descriptor) {// 传入的target是construcor的prototype
  console.log('decFun', target, name, descriptor) 
  return {
    ...descriptor,
    value (...arg) {
      console.log('decFun this', this, this.a, this.b)
      console.log('decFun target', target)
      let res = descriptor.value.apply(this, arg) // 此处的this 和add方法中的this是一致的  target不知道是那个对象,是被包装过后的类,但是原本的属性怎么都没了
      console.log('装饰方法',...arg, res)
    }
  }
}

// 装饰属性
function decProp (target, name, descriptor) {
  console.log('decProp', target, name, descriptor)
  // return {
  //   ...descriptor,
  //   value: descriptor.initializer()
  // }

  return descriptor
}


// @decClass1
@decClass(999)
class Calculate {
  constructor (num) {
    this.initNum = num || 2333
  }

  @decProp
  c = 3

  // 加
  @decFun
  add (a, b) {
    console.log('add this', this)
    console.log(this.a, this.b, this.c)
    let res = a + b + this.a + this.b
    return res
  }

  // 减
  @decFun
  minus (a, b) {
    return a - b
  }

  // 乘
  times (a, b) {
    return a * b
  }

  // 除
  divide (a, b) {
    return a / b
  }
}

let cacul = new Calculate()

cacul.add(2, 1)
cacul.minus(4, 2)

// 例一
// @log('hi')
// class MyClass { }

// function log(text) {
//   return function(target) {
//     target.prototype.logger = () =>  console.log(`${text}，${target.name} 被调用`)
//   }
// }

// const test = new MyClass()
// test.logger() 


// 例二
// @name
// class Person {
//   sayHi() {
//     console.log(`My name is: ${this.name}`)
//   }
// }

// // 创建一个继承自Person的匿名类
// // 直接返回并替换原有的构造函数
// function name(constructor) {
//   return class extends constructor {
//     name = 'Niko'
//   }
// }

// new Person().sayHi()