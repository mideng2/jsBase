

/**
 * @param {string} s
 * @return {number}
 */
// 最长字串长度
var lengthOfLongestSubstring = function(s) {
  s = s.split('')
  if (s.length < 1) {
      return s.length
  }
  let left = 0
  let right = -1
  let keyMap = {}
  let max = 0
// 判断条件应该是下一个是不是和当前的一样，一样的
  while (left < s.length) {
    console.log(keyMap)
      let next = s[right + 1]
      if (next != undefined && !keyMap[next]) {
          keyMap[next] = 1
          right++
      } else {
          // delete keyMap[s[left]]
          keyMap[s[left]] = 0
          left++
          
      }
      max = Math.max(max, right - left + 1)
      console.log(max)
  }
  
  // let arr = Object.keys(keyMap)
  // arr = arr.filter((item) => {
  //   return item > 0
  // })
  
  return max
};

lengthOfLongestSubstring("pwwkew")