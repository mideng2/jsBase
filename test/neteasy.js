const { debounce } = require("lodash");

// 第一题，异步this
function A() {
  this.n = 0;
}
A.prototype.callMe = function () {
  console.log('n', this.n);
}
let a = new A();

setTimeout(a.callMe, 0) // undefined
setTimeout(() => {
  a.callMe();
}, 0) // 0
setTimeout(function () {
  a.callMe();
}, 0) // 0

var b = 1
let obj = {
  b: 2,
  f: () => {
    console.log('b', this.b)
  }
}

obj.f() // 1
let f1 = obj.f
f1() // 1



// 第二题 原型链
function G() {}
function F() {
  return {}
}
var ff = new F()
console.log(ff instanceof F)

// 第三题 实现一个debounce函数，要求能对一个事件循环内的所有调用进行防抖
// function F() {
//   console.log(1)
// }
// let G = debounce(F)
// function A () {
//   G()
//   G()
//   G()
// }
// A() // 只打印一次

// setTimeout(G, 0)
// G() // 则会打印两次
