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
 * @return {string}
 */
var tree2str = function (root) {
	let str = "";
	var build = (r) => {
		if (!r) {
			return;
		}
		str += "(" + r.val.toString();
		if (!r.left && r.right) {
			str += "()";
		}
		build(r.left);
		build(r.right);
		str += ")";
	};
	build(root);
	return str.substring(1, str.length - 1);
};
