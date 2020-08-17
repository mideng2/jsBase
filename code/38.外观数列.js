/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 * 对一个正则表达式模式或部分模式两边添加圆括号将导致相关匹配存储到一个临时缓冲区中，所捕获的每个子匹配都按照在正则表达式模式中从左到右出现的顺序存储。缓冲区编号从 1 开始，最多可存储 99 个捕获的子表达式。每个缓冲区都可以使用 \n 访问，其中 n 为一个标识特定缓冲区的一位或两位十进制数。
 */
var countAndSay = function(n) {
  let pre = '1'
  let reg = /(\d)\1*/g
  for (let i = 1; i < n; i++) {
    console.log(pre.match(reg))
    pre = pre.replace(reg , (item) => {
      console.log('item', item)
      return item.length + item[0]
    })
    console.log(pre)
  }
  return pre
};

countAndSay(5)
// @lc code=end

