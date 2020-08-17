/**
 * 定义：当前根节点的左边全部比根节点小，当前根节点的右边全部比根节点大。
 * 动态创建二叉查找树
 * 不考虑有重复数字的情况
*/

const { get } = require("lodash")

class TreeNode {
  constructor (value) {
    this.value = value
    this.leftChild = null
    this.rightChild = null
  }

  setLeftChild (node) {
    this.leftChild = node
  }

  setRightChild (node) {
    this.rightChild = node
  }
}


function createSearchTree (arr) {
  let value = arr.shift()
  let tree = new TreeNode(value)

  for (let i = 0; i < arr.length; i++) {
    addNode(tree, arr[i])
  }
  return tree
}

function addNode (root, value) {
  let currRoot = root
  let node = new TreeNode(value)
 
  while (currRoot != null) {
    if (value > currRoot.value) {
      if (!currRoot.rightChild) {
        currRoot.setRightChild(node)
        return
      } else {
        currRoot = currRoot.rightChild
      }
    } else {
      if (!currRoot.leftChild) {
        currRoot.setLeftChild(node)
        return
      } else {
        currRoot = currRoot.leftChild
      }
    }
  }
}

/**
 * 获取数的高度
 * 左子树 和 右子树 的高度 max值
*/

function getHeight (node) {
  if (!node) {
    return 0
  } else {
    let left = getHeight(node.leftChild)
    let right = getHeight(node.rightChild)

    let max = Math.max(left, right)
    return max + 1
  }
}

/**
 * 先序遍历
*/

function preOrder (node) {
  if (!node) {
    return
  } else {
    console.log(node.value)
    preOrder(node.leftChild)
    preOrder(node.rightChild)
  }
}

/**
 * 中序遍历
*/

function midOrder (node) {
  if (!node) {
    return
  } else {
    midOrder(node.leftChild)
    console.log(node.value)
    midOrder(node.rightChild)
  }
}


/**
 * 后序遍历
*/

function backOrder (node) {
  if (!node) {
    return
  } else {
    backOrder(node.leftChild)
    backOrder(node.rightChild)
    console.log(node.value)
  }
}


let tree = createSearchTree([9, 3, 11, 7])
let height = getHeight(tree)
console.log('tree', JSON.stringify(tree))
console.log('height', height)
console.log('先序遍历')
preOrder(tree)
console.log('中序遍历') // 中序遍历是排好序的！
midOrder(tree)
console.log('后序遍历')
backOrder(tree)

console.log(getMax(tree))


/**
 * 非二叉查找树
 * 查找最大值 左子树最大值 右子树最大值 根节点 相比较
*/
function getMax (node) {
  if (!node) {
    return -Infinity // 会有负数吗
  } else {
    let left = getMax(node.leftChild)
    let right = getMax(node.rightChild)
    let max = Math.max(left, right, node.value)
    return max
  }
}
