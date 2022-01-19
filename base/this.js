/**
 * 来复习一下this相关知识点 哈哈
 * this 执行上下文
 * 由于node和浏览器中的环境不同，两家
*/


// 1、全局上下文
// nodejs 和 浏览器中，全局this很不一样
c(this == globalThis) // globalThis需要node 12+才能使用
c(globalThis) // global
c(this) // {}
this.num = 10
c(globalThis.num) // undefined
c(this.num) // 10

// 2、函数上下文

// 3、构造函数






function c(...arg) {
  console.log(...arg)
}






// 不知道啥时候写的test
var a = 1000
var obj = {
  a: 2,
  b: () => {
    return this.a
  },
  c: this.a + 1,
  d: function() {
    return ()=>{
      console.log(this.a)
    }
  }
}
var fun = obj.b
console.log(fun()) // 1000
console.log(obj.b()) // 1000
console.log(obj.c) // 1001
var fun1 = obj.d // 返回的箭头函数中的this永远是d匿名函数中的this，匿名函数的this在改变的时候，箭头函数的this随之改变
console.log(fun1()()) // 2