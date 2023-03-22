/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  let temp = new ListNode(0);
  temp.next = head;
  let slow = temp;
  let fast = head;
  while (n-- > 0 && fast) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next?.next;
  return temp.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 2 -> 50 -> 10 -> 12 -> 
const head = new ListNode(1);
const n1 = new ListNode(2);
const n2 = new ListNode(3);
const n3 = new ListNode(4);
const n4 = new ListNode(5);

head.next = n1;
// n1.next = n2;
// n2.next = n3;
// n3.next = n4;

console.log(removeNthFromEnd(head, 2));