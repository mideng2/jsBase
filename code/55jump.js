// 给定一个非负整数数组，你最初位于数组的第一个位置。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个位置。

// 示例 1:
// 输入: [2,3,1,1,4]
// 输出: true
// 解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。

// 示例 2:
// 输入: [3,2,1,0,4]
// 输出: false
// 解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (!nums.length) {
    return false
  }
  if (nums[0] === 0) {
    if (nums.length === 1) {
      return true
    } else {
      return false
    }
  }
  let isHasZero = false
  for (let i = nums.length - 2; i > 0; i--) {
    if (nums[i] === 0) {
      for (let j = 0; j<i;j++) {
        
      }
      if (nums[i - 1] < 2) {
        return false
      }
    }
  }
  return true
};

/**
 * last 最后一个元素的位置，也就是数组的长度-1
 * 不会要使用穷举法吧……
 * 如果都大于1，ok
 * 有一个等于0，那要看它前一个是否大于等于2
 * 如果前一个小yu2，那得看再前一个是否大于等于3
 * 
*/

// 第三位的最大值 必须大于 
console.log(canJump([3,0,0,0]))

// 当前可到达元素小于遍历当前下标，则说明不可达，否则更新可到达的最大元素
// 找到i下标能到的最原距离，然后和之前的最大值比较，取较大者
var canJumpAnswer = function(nums) {
  let max = nums[0];
  for (let i = 0, len = nums.length; i < len; i++) {
    if (max > len) return true;
    if (max < i) {
      console.log('max < i', i)
      return false;
    } else {
      max = Math.max(max, i + nums[i]);
      console.log('max: ', max)
    }
  }
  return true;
}
console.log(canJumpAnswer([0,1,2,3]))

/**
 * 
 * 太难过了，我太废了
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump2 = function(nums) {
  var arr = new Array(nums.length); 
  arr[nums.length-1] = true;
  return canJumpFromWhere(0,nums,arr);
}
const canJumpFromWhere = function(position,nums,arr){
  if(arr[position] != undefined){ // 如果该位置已经走过，则直接返回，不用再走下面的遍历，节省了重复递归的时间
      return arr[position];
  }
  var cur = Math.min(position+nums[position],nums.length - 1);
  for(var i = position+1;i<=cur;i++){
      if(canJumpFromWhere(i,nums,arr)){
          arr[position] = true;
          return true;
      }
  }
  arr[position] = false;
  return false;
}
