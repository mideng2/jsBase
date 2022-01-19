// 3.1    给定一个单向链表（长度未知），请设计一个既节省时间又节省空间的算法来找出该链表中的倒数第m个元素。

// node结构
class ListNode {
  constructor (value) {
    this.value = value
    this.next = null
  }
  setNext (node) {
    this.next = node
  }
}
// 3.1
function serchNode (nodeList, m) {
  let arr = []
  while (nodeList) {
    arr.push(nodeList)
    nodeList = nodeList.next
  }
  return arr[arr.length - m]
}

// 3.3 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 
// 示例：
 
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

// 3.3
function plus (node1, node2) {
  let num1 = parseInt(node2arr(node1).reverse().join(''))
  let num2 = parseInt(node2arr(node2).reverse().join(''))
  let sumArr = String(num1 + num2).split('')
  let header = new ListNode(sumArr.pop())
  let newNode = header
  while(sumArr.length) {
    newNode.setNext(new ListNode(sumArr.pop()))
    newNode = newNode.next
  }
  return header
}

function node2arr (node) {
  let arr = []
  while (node) {
    arr.push(node.value)
    node = node.next
  }
  return arr
}

function setNode (arr) {
  let header = new ListNode(arr.shift())
  let node = header
  while (arr.length) {
    node.next = new ListNode(arr.shift())
    node = node.next
  }
  return header
}
let arr1 = [2, 4, 3]
let arr2 = [5, 6, 4]
let node1 = setNode(arr1)
let node2 = setNode(arr2)
plus(node1, node2)

console.log(serchNode(node1, 3))



// 3.2
function isValid (s) {
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
  return arr.length ? false : true
};
