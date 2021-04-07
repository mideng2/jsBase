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
