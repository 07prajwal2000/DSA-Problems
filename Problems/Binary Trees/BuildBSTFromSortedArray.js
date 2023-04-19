/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
	var build = (l, r) => {
		if (l > r) return null;
		let mid = parseInt((l + r) / 2);
		let node = new TreeNode(nums[mid]);
		node.left = build(l, mid - 1);
		node.right = build(mid + 1, r);
		return node;
	};
	return build(0, nums.length - 1);
};
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
