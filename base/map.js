let cache = new Map()

let list = [1, 2, 3, 4, 5]

list.forEach(item => {
  cache.set(`key_${item}`, item)
})
console.log('cache', cache)
console.log('keys', cache.keys())
let it = cache.keys()
let a = it.next()
// 如果删除其中一个key，则1的next为3，链表能自动衔接上
cache.delete(`key_2`)
let b = it.next()
let c = it.next()
// let b = a.next()
// let c = b.next()
// console.log('keys next', a = cache.keys().next())
// console.log('keys next', b = a.next())
// console.log('keys next', c = b.next())

console.log('a', a)
console.log('b', b)
console.log('c', c)

// Next 不是我想象的链式调用啊，只能在iterator上去调用next，而且得是同一个iterator