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
 * @return {TreeNode}
 */
var invertTree = function (root) {
	var invert = (r) => {
		if (r === null) return;
		let temp = r.left;
		r.left = r.right;
		r.right = temp;
		invert(r.left);
		invert(r.right);
	};
	invert(root);
	return root;
};
