function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (head === null || head.next === null || head.next.next === null) return null;
  let left = head;
  let right = head;
  while (left != null && right != null && right.next != null) {
      left = left.next;
      right = right.next.next;
      if (left === right) {
          break;
      }
  }
  if (left != right) {
      return null;
  }

  right = head;

  while (right != left) {
      right = right.next;
      left = left.next;
  }

  return right;
};
// 2 -> 50 -> 122 -> 10 -> 12 -> cycled (122)
const head = new ListNode(2);
const n1 = new ListNode(50);
const cycled = new ListNode(122);
const n2 = new ListNode(10);
const n3 = new ListNode(12);

head.next = n1;
n1.next = cycled;
cycled.next = n2;
n2.next = n3;
n3.next = cycled;

console.log(detectCycle(head).val);