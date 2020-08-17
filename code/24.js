/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head) {
      return head
  }
  let arr = [] // 每个元素是两个节点的子链表
  while (head && head.next) {
      let first = head
      let second = head.next
      head = head.next.next
      second.next = first
      first.next = null

      arr.push(second)
     
  }
  for (let i = 0; i < arr.length - 1; i++) {
      arr[i].next.next = arr[i+1]
  }
  if (head) {
      if (arr.length) {
          arr[arr.length - 1].next.next = head
      } else {
          return head
      }
    
  }
  return arr[0]


};