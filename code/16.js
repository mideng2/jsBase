var threeSumClosest = function(nums, target) {
  // 排序
  console.time('time')
  nums = nums.sort((a, b) => {
      return a - b
  })

  console.log(nums.length)
  let len = nums.length
  let min = Infinity
  let sum = 0
  for (let i = 0; i <= len - 3; i++) {
      let a = nums[i]
      bianli(a, i+1, len-1)
      // console.log('minq', min)
  }
  // console.log('sum', sum)
  console.timeEnd('time')
  return sum

  function bianli (a, bkey, ckey) {
      if (bkey === ckey) {
        // console.log('相等')
          return
      }
      let b = nums[bkey]
      let c = nums[ckey]

      let distance = Math.abs(a + b + c - target)
      // console.log(a,b,c)
      // console.log('target', target)
      // console.log('distance', distance)
      // console.log('min', min)
      
      if (distance < Math.abs(min)) {
        min = a + b + c - target
        sum = a + b + c
      }
      if (a + b + c - target > 0) { // 比目标值大，大数变小
        bianli(a, bkey, ckey - 1)
      } else { // 比目标值小，小数变大
          bianli(a, bkey + 1, ckey)
      }
  }

};

threeSumClosest([-12,-10,32,88,4,64,-57,-57,62,0,74,95,-23,10,-21,80,-74,36,-54,17,-97,-8,-86,43,95,-76,-18,-43,-43,31,-64,-96,-66,-42,-88,-44,-6,-2,16,-6,90,-45,52,48,-6,58,21,7,-18,73,-75,-90,-34,6,3,94,26,33,-92,73,-25,-67,16,-99,-90,-40,19,-78,-53,-36,28,82,33,66,-27,54,-34,-30,27,51,-32,-13,-52,37,-41,-95,68,56,23,57,25,-69,-65,43,-60,-41,-51,77,44,-6,-19,-87,-43,-54,97,82,-54,-13,82,43,-83,100,37,-34,-56,-65,-7,27,-25,-82,91,-76,46,-29,-78,69,-21,25,-10,71], 129)
// threeSumClosest([0,2,1,-3], 1)
// -3 0 1 2 
// threeSumClosest([-1,2,1,-4], 1)
// -4 -1 1 2



/** 大佬的算法
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function (nums, target) {
  let n = nums.length
  if (n === 3) {
    return getSum(nums)
  }
  // 先升序排序 此为解题的前置条件
  nums.sort((a, b) => a - b)

  let min = Infinity // 和 target 的最小差
  let res

  // 从左往右依次尝试定一个基础指针 右边至少再保留两位 否则无法凑成3个
  for (let i = 0; i <= nums.length - 3; i++) {
    let basic = nums[i]
    let left = i + 1 // 左指针先从 i 右侧的第一位开始尝试
    let right = n - 1 // 右指针先从数组最后一项开始尝试

    while (left < right) {
      let sum = basic + nums[left] + nums[right] // 三数求和
      // 更新最小差
      let diff = Math.abs(sum - target)
      if (diff < min) {
        min = diff
        res = sum
      }
      if (sum < target) {
        // 求出的和如果小于目标值的话 可以尝试把左指针右移 扩大值
        left++
      } else if (sum > target) {
        // 反之则右指针左移
        right--
      } else {
        // 相等的话 差就为0 一定是答案
        return sum
      }
    }
  }

  return res
}

function getSum(nums) {
  return nums.reduce((total, cur) => total + cur, 0)
}
