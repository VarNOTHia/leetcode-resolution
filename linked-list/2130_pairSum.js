/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
  const listVal = [];
  while(head){
    listVal.push(head.val);
    head = head.next;
  }
  let highestSum = -1;
  for(let i = 0; i < listVal.length / 2; i++){
    let tempSum = listVal[i] + listVal[listVal.length - 1 - i];
    if(tempSum > highestSum){
      highestSum = tempSum;
    }
  }
  return tempSum;
};