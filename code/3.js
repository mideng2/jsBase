

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  s = s.split('')
  if (s.length < 1) {
      return s.length
  }
  let left = 0
  let right = -1
  let keyMap = {}
  let max = 0

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