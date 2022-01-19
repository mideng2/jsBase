/**
 * 1、将字符串转为二进制流，buffer
 * 2、流中每一个字节由16进制转为2进制
 * 3、将所有字节2进制拼接成一个字符串
 * 4、字符串6个字符一组分割，每组转换成1个10进制数字
 * 5、按照上一步的数组，在base64字符集中找到对应的字符，拼成base64字符串
 * 
*/

let str = '阿炸炸炸'
let buf = Buffer.from(str)
c(buf.toJSON()) // e9 98 bf e7 82 b8 e7 82 b8 e7 82 b8


let arr = buf.toJSON().data.map((item) => {
  // item.toString(16)  -> e9
  // 0xe9
  // 11101001
  return Number(`0x${item.toString(16)}`).toString(2)
})

let binaryStr = arr.join('')
c(arr)
c(binaryStr)

let arr6 = []
// 6个一组
while (binaryStr.length) {
  let item = binaryStr.slice(0, 6)
  binaryStr = binaryStr.slice(6, binaryStr.length)
  arr6.push(`00${item}`)
}
c(arr6)

let arr2 = arr6.map((item) => {
  return parseInt(item, 2)
})

c(arr2)

let base64collection = 'ABCDEFGHIGKLMNOPQRSTUVWSYZ'
base64collection += base64collection.toLowerCase() // 小写字符拼接一次
base64collection += '0123456789+/' // 数字拼接一次

let res = ''
arr2.forEach((item) => {
  res = res + base64collection[item]
})

c(res) // 6Zi/54K454K454K4






function c (...value) {
  console.log(11 ,value)
  console.log(value)
}