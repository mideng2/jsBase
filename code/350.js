/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let len1 = nums1.length
  let len2 = nums2.length
  let arr = []
  if (len1 < len2) { // 遍历len1
      for (let i = 0; i < nums1.length; i++) {
          let key = nums2.indexOf(nums1[i])
          if (key >= 0) {
              arr.push(nums1[i])
              nums2.splice(key, 1)
          }
      }
  } else {
     for (let i = 0; i < nums2.length; i++) {
          let key = nums1.indexOf(nums2[i])
          if (key >= 0) {
              arr.push(nums2[i])
              nums1.splice(key, 1)
          }
      }
  }
  return arr
};


/**
 * 解法2 分别建立map，遍历其中一个map，找到对应的数字，取最小值
*/
var intersect = function(nums1, nums2) {
  let map1 = {}
  let map2 = {}
  let arr = []

  nums1.forEach((item) => {
    if (map1[item]) {
      map1[item] = map1[item] + 1
    } else {
      map1[item] = 1
    }
  })

  nums2.forEach((item) => {
    if (map2[item]) {
      map2[item] = map2[item] + 1
    } else {
      map2[item] = 1
    }
  })

  for (let key in map1) {
    if (map2[key]) {
      let num = Math.min(map1[key], map2[key])
      while (num) {
        arr.push(key)
        num--
      }
    }
  }

  return arr
}