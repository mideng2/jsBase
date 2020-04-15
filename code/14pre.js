// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。
// 示例 1:
// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:
// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:
// 所有输入只包含小写字母 a-z 。
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let cmPre = ''
  if (!strs.length) {
    return cmPre
  }
  let first = strs[0]
  while (cmPre.length < first.length) {
    let reg = new RegExp(`^${first.substr(0, cmPre.length + 1)}`)
    for (let i = 1; i < strs.length; i++) {
      if (!reg.test(strs[i])) {
        return cmPre
      }
    }
    cmPre = first.substr(0, cmPre.length + 1)
  }

  return cmPre
};

console.log(longestCommonPrefix( ["flower","flow","flight"]))