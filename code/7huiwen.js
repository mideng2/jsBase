var isPalindrome = function(x) {
  if (x < 0) {
      return false
  }
  let arr = []
  let nx = x
  while (nx > 0) {
      arr.unshift(nx % 10)
      nx = parseInt(nx / 10)
  }

  for (let i = 0 ;i<Math.ceil((arr.length -1)/2); i++) {
      if (arr[i] !== arr[arr.length - 1 - i]) {
          return false
      }
  }
  return true
};

console.log(isPalindrome(121221))

/** 判断是否是回文
1)字符串，根据长度的二分之一，判断是否是一头一尾是否相等
2）数字，根据%创建数组，还是判断一头一尾是否相等
*/