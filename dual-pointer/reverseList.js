/**
 * LEETCODE 206. 翻转链表。（原地）
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null;
  let curr = head;
  let temp;

  // 以 null(prev) -> 1(curr) -> 2 ... 为例。
  while(curr){
    // null(prev) -> 1(curr) -> 2(temp)，暂存 2 的部分以便连接。
    temp = curr.next;
    // null(prev) <- 1(curr)   (temp)2 -> 3... 切断接下来要做 curr 的部分与现在的元素。
    curr.next = prev;
    // null <- 1(prev)  (temp) 2 -> 3...
    prev = curr;
    // null <- 1(prev)  (curr) 2 -> 3 
    curr = temp;
  }

  return prev;
};