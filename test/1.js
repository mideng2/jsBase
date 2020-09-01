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
console.log(obj.c) // 3
var fun1 = obj.d()
console.log(fun1()) // 2