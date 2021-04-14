// 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

// 示例：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
// todo:
// 这题应该在网站里进行调试
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val
  this.next = null
}
var mergeTwoLists = function (l1, l2) {
  let initVal, head, ln
  if (l1.val < l2.val) {
    initVal = l1.val
    l1 = l1.next
  } else {
    initVal = l2.val
    l2 = l2.next
  }
  head = ln = new ListNode(initVal)

  while (l1 && l2) {
    if (l1.val < l2.val) {
      let tmp = l1
      l1 = l1.next
      tmp.next = null
      ln.next = tmp
    } else {
      let tmp = l2
      l2 = l2.next
      tmp.next = null
      ln.next = tmp
    }
    ln = ln.next
  }
  if (l1) {
    ln.next = l1
  }
  if (l2) {
    ln.next = l2
  }

  return head
}

let l1 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 7,
      next: null
    }
  }
}

let l2 = {
  val: 2,
  next: {
    val: 3,
    next: {
      val: 5,
      next: {
        val: 8,
        next: null
      }
    }
  }
}

// console.log(JSON.stringify(mergeTwoLists(l1, l2)))

// let ln = mergeTwoLists(l1, l2)
// while(ln){
//   console.log(ln.val)
//   ln = ln.next
// }

// ================方法二=================
/**
 * 递归
 * 1）终止条件
 * 2）
*/
var mergeTwoLists1 = function (l1, l2) {
  if (l1 == null) {
    return l2
  }
  if (l2 == null) {
    return l1
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists1(l1.next, l2)
    console.log('l1', l1)
    return l1
  } else {
    l2.next = mergeTwoLists1(l1, l2.next)
    console.log('l2', l2)
    return l2
  }
}
// console.log(mergeTwoLists1(l1, l2))

let ln = mergeTwoLists1(l1, l2)
while(ln){
  console.log(ln.val)
  ln = ln.next
}
