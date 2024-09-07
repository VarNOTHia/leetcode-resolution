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
  // 链表是引用数据类型。
  let prev = null;
  let curr = head;
  let next = null;

  // 以 null(prev)  1(curr) -> 2 ... 为例。
  while(curr){
    // null(prev)  1(curr) -> 2(next)，暂存 2 的部分以便连接。
    next = curr.next;
    // null(prev) <- 1(curr)   2(next)，切断 curr 和 next 的连接。
    curr.next = prev;
    // 移动指针，null() <- 1(prev)   2(next)。
    prev = curr;
    // 移动 curr。null() <- 1(prev)   2(curr)，next 将在下次重置。
    curr = next;
  }

  return prev;
};