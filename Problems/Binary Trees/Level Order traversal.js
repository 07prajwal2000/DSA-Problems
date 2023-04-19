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
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (!root) return [];
	const ans = [];
	let q = [root];
	while (q.length > 0) {
		let size = q.length;
		const level = [];
		for (let i = 0; i < size; i++) {
			const n = q.shift();
			n.left && q.push(n.left);
			n.right && q.push(n.right);
			level.push(n.val);
		}
		ans.push(level);
	}
	return ans;
};
