/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null || head.next === null) return true;
  let midNode = mid(head);
  let right = reverse(midNode);
  let left = head;
  while (right != null) {
    if (left.val === right.val) {
      left = left.next;
      right = right.next;
    } else {
      return false;
    }
  }
  return true;
};

var mid = (head) => {
  let slow = head, fast = head.next;
  while (fast) {
    slow = slow.next;
    fast = fast.next?.next;
  }
  return slow;
};

/**
 * 
 * @param {ListNode} head 
 */
var reverse = (head) => {
  let prev = null, cur = head;
  while (cur) {
    const temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
};

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

// 2 -> 50 -> 10 -> 12 -> 
const head = new ListNode(2);
const n1 = new ListNode(50);
const n2 = new ListNode(50);
const n3 = new ListNode(22);

head.next = n1;
n1.next = n2;
n2.next = n3;


console.log(isPalindrome(head));