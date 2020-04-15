// 「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。前五项如下：

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221

// 1 被读作  "one 1"  ("一个一") , 即 11。
// 11 被读作 "two 1s" ("两个一"）, 即 21。
// 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。

// 给定一个正整数 n（1 ≤ n ≤ 30），输出外观数列的第 n 项。

// 注意：整数序列中的每一项将表示为一个字符串。

//  

// 示例 1:
// 输入: 1
// 输出: "1"
// 解释：这是一个基本样例。

// 示例 2:
// 输入: 4
// 输出: "1211"
// 解释：当 n = 3 时，序列是 "21"，其中我们有 "2" 和 "1" 两组，"2" 可以读作 "12"，也就是出现频次 = 1 而 值 = 2；类似 "1" 可以读作 "11"。所以答案是 "12" 和 "11" 组合在一起，也就是 "1211"。


/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  // let arr = ['1']
  // for (let i = 1; i < n; i++) {
  //   let pre = arr[i - 1]

  //   let str = ''
    
  //   while (pre.length) {
  //     console.log(pre, pre.length)
  //     if (pre.length === 1) {
  //       str = str + 1 + pre.charAt(0)
  //       pre = ''
  //     } else {
  //       for (let j = 1; j < pre.length; j++) {
  //         let num = 0
  //         if (pre.charAt(j - 1) !== pre.charAt(j)) { // 不等于
  //           str = str + j + pre.charAt(j)
  //           pre = pre.substr(j)
  //           console.log(pre)
  //           break
  //         } else {
  //           // str = str + j + pre.charAt(j)
  //           // pre = ''
  //           num = num + 1
  //         }
  //       }
  //     }
  //   }
  //   arr.push(str)
  // }
  // return arr[n - 1]

  // 尽可能的匹配多的字符
    let prev = '1211'
    for(let i = 1; i < n; i++){
        // prev = prev.replace(/(\d)\1*/g, item =>`${item.length}${item[0]}`)
        prev = prev.replace(/(\d)\1*/g, (item) => { 
          console.log(i, item)
          // 组，重复多少次 \1代表第一个括号匹配的内容，每次匹配到都会执行后面的回调函数
          // console.log('item', i, item, `${item.length}${item[0]}`, prev)

          return `${item.length}${item[0]}`
        })
        console.log(i, prev)
    }
    return prev



};

console.log(countAndSay(2))
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221


// let prev = '1'.replace(/((\d)\1)+/g, (item) => {
//   console.log('itemfff', item)
//   return `${item.length}${item[0]}`
// })
// console.log('p', prev)

let reg = /(\d)\1*/g  // new RegExp('(\d)\1*', 'g')

let str = '1121'
let arr = str.match(reg)
console.log('arr', arr)