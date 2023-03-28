/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	let a = headA;
	let b = headB;
	while (a != null && b != null && a != b) {
		a = a.next;
		b = b.next;
		if (a === b) return a;

		if (a === null) a = headB;
		if (b === null) b = headA;
	}
	return a;
};
