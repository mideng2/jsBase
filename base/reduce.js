const { c } = require('../utils')

// 来总结一下数组reduce的用法  Array.prototype.reduce  reduce不会改变原数组
// reduce 接收 2 个参数： 第一个参数是回调函数（必选），第二个参数是初始值 initialValue（可选） 
// 而第一个参数（回调函数），接收下面四个参数：

// Accumulator (acc) (累计器)
// Current Value (cur) (当前值)
// Current Index (idx) (当前索引)
// Source Array (src) (源数组)

// 容易遗忘的点：1）初始值 2）返回值

/**
 * 没有讲到reduce的高级特性，有点失望。
 * 1、reduce 和 for 的性能比较，一般情况下，reduce性能貌似要高一些，v8引擎对reduce的优化比较友好。一开始我也觉得怎么可能，试了之后发现，还真是这样。
 * 2、reduce 的第一个参数，可以是async 函数，这个函数内部可以写await，能以预期的方式执行下去。从这个角度来看，这就比forEach、map、filter之流要高级。
 * 另外，reduce还有个双胞胎兄弟，reduceRight，这个貌似大家都知道。
*/
let testArr = [1, 2, 3]
let testCB = (item, index) => {
  return item + index
}

// ============*reduce -> map*==============
// map方法接收一个回调函数，函数内接收三个参数，当前项、索引、原数组，返回一个新的数组，并且数组长度不变。
c('map', testArr.map(testCB))

Array.prototype.reduceMap = function (cb) { // 返回的是一个算好的值
  return this.reduce((acc, cur, idx, src) => {
    let item = cb(cur, idx, src)
    acc.push(item)
    return acc
  }, [])
}
c('reduceMap', testArr.reduceMap(testCB, []))

// ============*reduce -> forEach*==============
// forEach接收一个回调函数作为参数，函数内接收四个参数当前项、索引、原函数、当执行回调函数 callback 时，用作 this 的值，并且不返回值。
let cbForeach = (item, idx, array) => {
  console.log(item, idx, array)
}
testArr.forEach(cbForeach)

Array.prototype.reduceForEach = function (cb) {
  this.reduce((acc, cur, idx, src) => {
    cb(cur, idx, src)
  }, [])
}
testArr.reduceForEach(cbForeach)

// ============*reduce -> filter*==============
// filter接收一个回调函数，回调函数返回 true 则返回当前项，反之则不返回。
let cbFilter = (item, idx, array) => {
  return item > array[0]
}
c('filter', testArr.filter(cbFilter))

Array.prototype.reduceFilter = function (cb) {
  return this.reduce((acc, cur, idx, src) => {
    if (cb(cur, idx, src)) {
      acc.push(cur)
    }
    return acc
  }, [])
}
c('reduceFilter', testArr.reduceFilter(cbFilter))

// 实用方法
// 1、将二维数组转换为一维数组
let arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
c('二维数组转一维数组', arr1.reduce((acc, cur, idx, src) => {
  return acc.concat(cur)
}, []))

// 2、计算数组中每个元素出现的个数
let arr2 = [1, 1, 2, 3, 4, 5, 5, 5]
c(arr2.reduce((acc, cur, idx, src) => {
  if (acc[cur]) {
    acc[cur] = acc[cur] + 1
  } else {
    acc[cur] = 1
  }
  return acc
}, {}))

// 3、数组去重
c('arr2', arr2)
c(arr2.reduce((acc, cur, idx, src) => {
  if (!acc.includes(cur)) {
    acc.push(cur)
  }
  return acc
}, []))

// 异步 reduce第一个参数支持async函数
let arr3 = [1000, 2000, 3000]
let sleep = (delay) => {
  return new Promise((resovle, reject) => {
    setTimeout(() => {
      resovle()
    
    }, delay)
  })
} 
// 事实证明，每个循环体中的函数可以是异步函数，但是整个循环是
let asyncFun = async () => {
  console.time('async')
  let res = await arr3.reduce(async (acc, cur, idx, src) => {
    let delay = await acc + cur
    console.log('delay', delay)
    await sleep(delay)
    return delay
  }, 0)
  console.timeEnd('async')
  c(res)
}


asyncFun()
