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
 * @return {boolean}
 */
var isValidBST = function (root) {
	return valid(root, null, null);
};

var valid = (root, min, max) => {
	if (root === null) return true;
	if ((max != null && root.val >= max) || (min !== null && root.val <= min)) {
		return false;
	}
	return valid(root.left, min, root.val) && valid(root.right, root.val, max);
};
