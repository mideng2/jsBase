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