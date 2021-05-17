let arrAll = []
let temp // 用于交换

// 生成测试用例
function createTestData (n = 5) {
  let arr = []
  let arrItem = []
  while (arrAll.length < n * n) {
    let num = Math.floor(Math.random() * 100)
    arrAll.push(num)
    arrItem.push(num)
    // n个一组
    if (arrAll.length % n === 0) {
      arr.push(arrItem)
      arrItem = []
    }
  }
  arrAll = arrAll.sort(sortFn)
  return arr
}

function sortFn (a, b) {
  return b-a
}

let arr = createTestData()
console.log('测试用例', arr)
let arrBack = []

// 比赛
function compete () {
  for (let i = 0; i< 5; i++) {
    arr[i] = arr[i].sort(sortFn)
  }
  console.log('比赛结果', arr)
}

// 第一轮比赛
console.log('===第一次比赛===')
compete()

// 分析比赛结果
for (let i = 0; i<5;i++) {
  arrBack.push([])
  for(let j = 0;j<5;j++){
    arrBack[i].push(arr[j][i])
  }
}
arr = arrBack
arrBack = []
console.log('将各组第n名放在第n队', arr)

// 第二轮比赛，找出第一名
console.log('===第二次比赛===')
compete()

// a[0][0] 换到最后一排第一位，
temp = arr[0][0]
arr[0][0] = arr[1][0]
arr[1][0] = arr[2][0]
arr[2][0] = arr[3][0]
arr[3][0] = arr[4][0]
arr[4][0] = temp
console.log('第一排第一名换到最后一排第一名，剩下每排第一名往上一排进一名', arr)


console.log('===第三次比赛===')
compete()

temp = arr[0][0]
arr[0][0] = arr[1][0]
arr[1][0] = arr[2][0]
arr[2][0] = arr[3][0]
arr[3][0] = temp

console.log('第一排第一名换到倒数第二排第一名，剩下除了最后一排不动，每排第一名往上一排进一名', arr)

console.log('===第四次比赛===')
compete()


temp = arr[0][0]
arr[0][0] = arr[1][0]
arr[1][0] = arr[2][0]
arr[2][0] = temp

console.log('第一排第一名换到倒数第三排第一名，剩下除了最后两排不动，每排第一名往上一排进一名', arr)

console.log('===第五次比赛===')
compete()


temp = arr[0][0]
arr[0][0] = arr[1][0]
arr[1][0] = temp

console.log('第一排第一名换到倒数第四排第一名，剩下除了最后三排不动，每排第一名往上一排进一名', arr)

console.log('===第六次比赛===')
compete()




// 前五名
let res = []
for(let i = 0;i<5;i++){
  res.push(arr[i][0])
}
res = res.sort(sortFn)


console.log('总排序', arrAll.slice(0,5))
console.log('前5名', res)
console.log('正确',arrAll.slice(0,5).join() == res.join())


