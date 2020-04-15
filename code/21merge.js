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
var mergeTwoLists = function(l1, l2) {
  // let initVal = l1.val < l2.val ? l1.val : l2.val
  // let ln = new ListNode(initVal)
  // let l1next = l1.next
  // let l2next = l2.next
  // while (l1next || l2next) {
    
  // }
  let ln = []
  while (l1.length > 0 && l2.length > 0) {
    if (l1[0] < l2[0]) {
      ln.push(l1.shift())
    } else {
      ln.push(l2.shift())
    }
  }
  if (l1.length) {
    ln = ln.concat(l1)
  }
  if (l2.length) {
    ln = ln.concat(l2)
  }
  return ln

};

console.log(mergeTwoLists([1,2,4],[1,3,4]))

// function ListNode () {
//   this.val = val
//   this.next = null
// }
var mergeTwoLists1 = function(l1, l2) {
  if(l1 == null) {
    return l2;
  }
  if(l2 == null) {
    return l1;
  }

  if(l1.val < l2.val) {
    l1.next = mergeTwoLists1(l1.next, l2);
    console.log('l1', l1)
    return l1;
  } else {
    l2.next = mergeTwoLists1(l1, l2.next);
    console.log('l2', l2)
    return l2;
  }
}
console.log(mergeTwoLists1([1,2,4],[1,3,4]))