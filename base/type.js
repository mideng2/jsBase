/**
 * 类型判断专题
 *
 */
/**
 * typeof
 * 基础类型 除了null返回object，其他都能正确返回
 */

c(typeof 'string') // string
c(typeof 1) // number
c(typeof true) // boolean
c(typeof Symbol()) // symbol
c(typeof BigInt(222)) // bigint
c(typeof undefined) // undefined
c(typeof null) // object
c(typeof {}) // object
c(typeof c) // function

function c(...arg) {
  console.log(...arg)
}

var obj1 = { value: '111' }
var obj2 = { value: '222' }
function changeStuff(obj) {
  obj.value = '333'
  obj = obj2
  return obj.value
}
var foo = changeStuff(obj1)
console.log(foo) // '222' 参数obj指向了新的对象obj2console.log(obj1.value);//'333'

/** obj1仍然指向原来的对象,之所以value改变了, 
*是因为changeStuff里的第一条语句，这个时候obj是指向obj1的 . 
*再啰嗦一句，如果是按引用传递的话，这个时候obj1.value应该是等于'222'的*/
