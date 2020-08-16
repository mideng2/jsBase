/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let pre = '1'
  let reg = /(\d)\1*/g
  for (let i = 1; i < n; i++) {
    pre = pre.replace(reg , (item) => {
      return item.length + item[0]
    })
    console.log('pre', pre)
  }
  return pre
};

countAndSay(3)
// @lc code=end

