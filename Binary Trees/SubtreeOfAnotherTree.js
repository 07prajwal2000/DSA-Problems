/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
	if (!root && !subRoot) return false;
	if (!root || !subRoot) return false;
	if (equals(root, subRoot)) {
		return true;
	}
	let l = isSubtree(root.left, subRoot);
	let r = isSubtree(root.right, subRoot);
	return l || r;
};

var equals = function (p, q) {
	if (!p && !q) return true;
	if (!q || !p) return false;
	if (p.val !== q.val) return false;

	let l = equals(p.left, q.left);
	let r = equals(p.right, q.right);
	return l && r;
};
