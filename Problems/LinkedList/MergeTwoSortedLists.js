/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	let dummy = new ListNode(0);
	let head = new ListNode(0, dummy);
	while (true) {
		if (list1 === null || list2 === null) {
			break;
		}
		if (list1.val < list2.val) {
			dummy.next = list1;
			list1 = list1.next;
		} else {
			dummy.next = list2;
			list2 = list2.next;
		}
		dummy = dummy.next;
	}
	if (list1) {
		dummy.next = list1;
		list1 = list1.next;
	}
	if (list2) {
		dummy.next = list2;
		list2 = list2.next;
	}
	return head.next?.next;
};
