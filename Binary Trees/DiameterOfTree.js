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
 * @return {number}
 */
// var diameterOfBinaryTree = function (root) {
// 	if (!root) return 0;
// 	let left = diameterOfBinaryTree(root.left);
// 	let right = diameterOfBinaryTree(root.right);
// 	let h = height(root.left) + height(root.right);
// 	return Math.max(h, left, right);
// };
// function height(r) {
// 	if (!r) return 0;
// 	let l = height(r.left);
// 	let ri = height(r.right);
// 	return Math.max(l, ri) + 1;
// }

// FASTER
var diameterOfBinaryTree = function (root) {
	return diam(root).d;
};

function Info(h, d) {
	this.h = h;
	this.d = d;
}

var diam = (root) => {
	if (!root) return new Info(0, 0);
	let left = diam(root.left);
	let right = diam(root.right);
	let height = Math.max(left.h, right.h) + 1; // calculating height. 1 is cur node's height

	let ld = left.d;
	let rd = right.d;
	let d = Math.max(ld, rd, left.h + right.h); // calc diameter

	return new Info(height, d);
};
