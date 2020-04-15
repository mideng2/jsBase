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