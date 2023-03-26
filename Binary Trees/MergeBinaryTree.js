/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (root1 === null && root2 === null) return null;
  const v1 = root1?.val || 0;
  const v2 = root2?.val || 0;
  
	const root = new TreeNode(v1 + v2, null, null);
  const l = mergeTrees(root1?.left || null, root2?.left || null);
  const r = mergeTrees(root1?.right || null, root2?.right || null);

  root.left = l;
  root.right = r;
  return root;
};

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

var tree1 = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(4, null, null), new TreeNode(5, null, null)),
	new TreeNode(3, new TreeNode(6), null)
);

var tree2 = new TreeNode(
	2,
	new TreeNode(4, null, new TreeNode(8, null, null)),
	new TreeNode(3, null, new TreeNode(2))
);
console.log("LEFT- ", tree1);
console.log('------');
console.log("RIGHT- ", tree2);
console.log('------');
const tree = mergeTrees(tree1, tree2);
console.log("ANS- ", tree);
