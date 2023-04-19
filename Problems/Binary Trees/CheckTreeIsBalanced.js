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
var isBalanced = function (root) {
	return dfs(root) !== -1;
};

var dfs = (root) => {
	if (!root) return 0;
	let left = dfs(root.left);
	let right = dfs(root.right);
	if (left === -1 || right === -1) return -1;
	if (Math.abs(left - right) > 1) return -1;

	return Math.max(left, right) + 1;
};

// slow
// var isBalanced = function(root) {
//     if (!root) return true;

//     let lh = height(root.left);
//     let rh = height(root.right);

//     if (Math.abs(lh-rh) > 1) return false;

//     if (!isBalanced(root.left)) return false;
//     if (!isBalanced(root.right))return false;

//     return true;
// };

// var height = (r) => {
//     if (!r) return 0;
//     let left = height(r.left);
//     let right = height(r.right);
//     return Math.max(left, right) + 1;
// };
