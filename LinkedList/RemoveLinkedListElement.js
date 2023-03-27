/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
	let dummy = new ListNode(0, head);
	let prev = dummy;
	let cur = head;
	while (cur) {
		if (cur.val === val) {
			prev.next = cur.next;
			cur = cur.next;
			continue;
		}
		prev = cur;
		cur = cur.next;
	}
	return dummy.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElementsRecursive = function (head, val) {
	if (head === null) return head;
	head.next = removeElements(head.next, val);
	if (head.val === val) {
		return head.next;
	} else {
		return head;
	}
};
