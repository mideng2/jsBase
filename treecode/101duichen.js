// 给定一个二叉树，检查它是否是镜像对称的。

//  

// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
//  

// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3
//  

// 进阶：

// 你可以运用递归和迭代两种方法解决这个问题吗？
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 // 第一个和后续子节点 情况是不同的
var isSymmetric = function(root) {
  if (root.left !== null && root.right !== null) {
    if (root.left.right === root.right.left && root.left.right === root.right.left) {
      return isSymmetric(root.left) &&  isSymmetric(root.right)
    } else {
      return false
    }
  } else if (root.left === null && root.right !== null){
    return false
  } else if (root.left !== null && root.right === null) {
    return false
  } else if (root.left === null && root.right === null) {
    return true
  }
};


var isSymmetric = function(root) {
  if (root === null) return true;
  return help(root.left, root.right);
};

function help(left, right) {
  if (left === null && right === null) {
      return true;
  }
  if (left === null || right === null) {
      return false;
  }
  
  return left.val === right.val && help(left.left, right.right) && help(left.right, right.left);
}
