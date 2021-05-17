// 文章链接:https://blog.csdn.net/getTheCheeseOfGod/article/details/92411642
let o = {}
Object.defineProperty(o, 'key', {
  value: 1,
//     如果不指定这些属性描述符，默认都是false
//     configurable: false, // 当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
    // writable: true,
//     enumerable: false
})
console.log(o.key) // 1
console.log(delete o.key) // false 尝试两种方案删除属性
console.log(Reflect.deleteProperty(o, 'key')) // false
console.log(o.key) // 1 由于不可配置，属性未被删除
o.key = 2 // 无法修改值
console.log(o.key)
// Object.defineProperty(o, 'key', {
//   value: 3
// }) // 报错 TypeError: Cannot redefine property: key
// console.log(o.key)
console.log(Reflect.getOwnPropertyDescriptor(o, 'key')) // 使用第一次定义时设置的选项