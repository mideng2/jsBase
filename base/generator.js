function * gen () {
  const data = yield '请求数据'
  console.log('aaa',data)
  return data
}

const iterator = gen()

const command = iterator.next({a:3})
iterator.next({a:1})
console.log('接收到的命令：', command, iterator)


const it2 = gen()
// console.log('it2', it2, it2.next({a:2}))

it2.next()
it2.next(1)