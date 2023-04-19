/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
	if (!p && !q) return true;
	if (!q || !p) return false;
	if (p.val !== q.val) return false;

	let l = isSameTree(p.left, q.left);
	let r = isSameTree(p.right, q.right);
	return l && r;
};
