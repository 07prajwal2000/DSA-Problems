/**
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
 var middleNode = function(head) {
  let slow = head;
  let fast = head.next;
  while (fast != null) {
    slow = slow.next;
    fast = fast.next?.next;
  }
  return slow;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 2 -> 50 -> 10 -> 12 -> 
const head = new ListNode(2);
const n1 = new ListNode(50);
const n2 = new ListNode(10);
const n3 = new ListNode(12);

head.next = n1;
n1.next = n2;
n2.next = n3;

console.log(middleNode(head).val);