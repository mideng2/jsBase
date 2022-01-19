/**
 * 1、将字符串转为二进制流，buffer
 * 2、流中每一个字节由16进制转为2进制
 * 3、将所有字节2进制拼接成一个字符串
 * 4、字符串6个字符一组分割，每组转换成1个10进制数字
 * 5、按照上一步的数组，在base64字符集中找到对应的字符，拼成base64字符串
 * 
*/

let str = '6Zi/54K454K454K4'

let base64collection = 'ABCDEFGHIGKLMNOPQRSTUVWSYZ'
base64collection += base64collection.toLowerCase() // 小写字符拼接一次
base64collection += '0123456789+/' // 数字拼接一次

// 根据元素找到对应的位置
let arr10 = []
str.split('').forEach((item) => {
  let idx = base64collection.indexOf(item)
  arr10.push(idx)
})
c(arr10)

let arr2 = []
arr10.forEach((item) => {
  arr2.push((Number(item).toString(2)).padStart(6, '0'))
})
c(arr2)

let binaryStr = arr2.join('')

let arr16 = []
// 8个一组
while (binaryStr.length) {
  let item = binaryStr.slice(0, 8)
  binaryStr = binaryStr.slice(8, binaryStr.length)
  arr16.push(item)
}
c(arr16)

let data = []
arr16.map((item) => {
  // 2进制 转为10进制 再转为2进制 转为 16进制
  data.push(parseInt(item, 2))
})

let json = {
  type: 'Buffer',
  data
}

c('json1', json)
let res = Buffer(json)
c('res', res.toString())





function c (...value) {
  console.log(...value)
}