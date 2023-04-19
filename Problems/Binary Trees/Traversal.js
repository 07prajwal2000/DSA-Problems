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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
	const ans = [];
	var traverse = (r) => {
		if (r === null) return;
		traverse(r.left);
		ans.push(r.val);
		traverse(r.right);
	};
	traverse(root);
	return ans;
};

var preorderTraversal = function (root) {
	const ans = [];
	var traverse = (r) => {
		if (r === null) return;
		ans.push(r.val);
		traverse(r.left);
		traverse(r.right);
	};
	traverse(root);
	return ans;
};

var postorderTraversal = function (root) {
	const ans = [];
	var traverse = (r) => {
		if (r === null) return;
		traverse(r.left);
		traverse(r.right);
		ans.push(r.val);
	};
	traverse(root);
	return ans;
};

function TreeNode(val, left, right) {
	this.val = val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
