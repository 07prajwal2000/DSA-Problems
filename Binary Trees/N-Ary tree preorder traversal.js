/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
	if (!root) return [];
	const ans = [];
	let stack = [root];
	while (stack.length > 0) {
		const n = stack.pop();
		ans.push(n.val);
		// n.children?.reverse().forEach(stack.push); // less Code way
		const len = n.children?.length || -1;
		for (let i = len - 1; i >= 0; i--) {
			stack.push(n.children[i]);
		}
	}
	return ans;
};
