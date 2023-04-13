/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	return lca(root, p, q);
};

var lca = (r, p, q) => {
	if (!r || r == p || r == q) {
		return r;
	}
	let left = lca(r.left, p, q);
	let right = lca(r.right, p, q);
	if (!left) return right;
	else if (!right) return left;
	else return r;
};
