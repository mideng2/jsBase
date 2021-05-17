let arrAll = [ 93, 87, 86, 85, 76 ] //[]
// 生成测试用例
function createTestData () {
  let arr = []
  let arrAll1 = []
  while (arrAll.length < 25) {
    arrAll.push(Math.floor(Math.random() * 100))
  }
  arrAll1 = JSON.parse(JSON.stringify(arrAll))
  for (let i=0;i<5;i++) {
    arr[i] = []
    while (arr[i].length < 5) {
      arr[i].push(arrAll1.pop())
    }
  }

  return arr

}
// console.log('测试用例', createTestData())

function sortFn (a, b) {
  return b-a
}

let arr =  [ [ 61, 41, 23, 65, 8 ],
[ 21, 87, 10, 76, 85 ],
[ 72, 70, 52, 10, 45 ],
[ 86, 93, 45, 54, 67 ],
[ 20, 18, 49, 13, 4 ] ]
// createTestData()
let arrBack = []

// 只比出数字即可
function sortsort (arr) {
  arr = arr.sort((a, b) => {
    return b-a
  })
  console.log('排序-后', arr)
}

// 比赛
function compete () {
  for (let i = 0; i< 5; i++) {
    sortsort(arr[i])
  }
}

// 第一轮比赛
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

console.log(arr)

// 第二轮比赛，找出第一名，第二组的第一名和剩下的人比
compete()

let temp = arr[1][0]
arr[1][0] = arr[0][0]
arr[0][0] = temp
console.log('第一名和第二组第一名交换位置', arr)

compete()

temp = arr[2][0]
arr[2][0] = arr[1][0]
arr[1][0] = temp
// console.log('第二名和第三组第一名交换位置', arr)
console.log('第二名和第三组第一名交换位置', arr)

compete()

temp = arr[1][0]
arr[1][0] = arr[0][0]
arr[0][0] = temp
console.log('第一名和第二组第一名交换位置', arr)

compete()


temp = arr[3][0]
arr[3][0] = arr[0][0]
arr[0][0] = temp
console.log('第三名和第四组第一名交换位置', arr)

compete()


temp = arr[4][0]
arr[4][0] = arr[0][0]
arr[0][0] = temp
console.log('第四名和第五组第一名交换位置', arr)

compete()

// 前五名
let res = []
for(let i = 0;i<5;i++){
  res.push(arr[i][0])
}
console.log('总排序', arrAll.sort(sortFn).slice(0,5))
console.log('前5名', res.sort(sortFn))