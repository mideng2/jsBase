// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:

// 输入: "(]"
// 输出: false
// 示例 4:

// 输入: "([)]"
// 输出: false
// 示例 5:

// 输入: "{[]}"
// 输出: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let obg = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  let arr = []
  s = s.split('')
  for (let i=0;i<s.length;i++) {
    if (i === 0) {
      arr.push(s[i])
      continue
    }
    if (arr.length > 0 && obg[arr[arr.length -1]] === s[i]) {
      arr.pop()
    } else {
      arr.push(s[i])
    }

  }
  console.log(arr)
  return arr.length ? false : true
};

console.log(isValid('{[]}'))