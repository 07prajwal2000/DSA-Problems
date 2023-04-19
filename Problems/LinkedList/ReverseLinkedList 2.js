/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let dummy = new ListNode(0, head);
	let prev = dummy;
  let cur = head;

  while (cur) {
    if (cur.val === left) break;
    prev = cur;
    cur = cur.next;
  }

  let p = null;
  let tmp = null;
  while (cur && cur.val !== right) {
    tmp = cur.next;
    cur.next = p;
    p = cur;
    cur = tmp;
  }
  dummy.next.next = cur;

};

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}
const print = (head) => {
	while (head) {
		console.log(head.val + " ->");
    head = head.next;
	}
};

// 2 -> 50 -> 5 -> 12 ->
const head = new ListNode(2);
const n1 = new ListNode(50);
const n2 = new ListNode(5);
const n3 = new ListNode(12);
const n4 = new ListNode(4);

head.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n3;

print(reverseBetween(head, 50, 12));