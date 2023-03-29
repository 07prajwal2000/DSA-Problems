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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
	var find = (r, sum) => {
		if (!r) {
			return false;
		}
		sum += r.val;
		if (!r.left && !r.right) {
			return sum === targetSum;
		}
		let left = find(r.left, sum);
		let right = find(r.right, sum);
		return left || right;
	};
	return find(root, 0);
};
