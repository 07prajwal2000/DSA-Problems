function TreeNode(left, right, value) {
  this.left = left;
  this.right = right;
  this.value = value;

  /**
   * 
   * @param {TreeNode} head 
   */
  this.dfs = (head) => {
    if (!head) return;
    console.log(head.value);
    this.dfs(head.left);
    this.dfs(head.right);
  };

  /**
   * 
   * @param {TreeNode} head 
   */
  this.bfsPreorder = (head) => {
    let q = [head];
    while (q.length > 0) {
      const node = q[0];
      q = q.filter(x => x != node);
      if (!node) continue;
      console.log(node.value);
      q.push(node.left);
      q.push(node.right);
    }
  }

  /**
   * 
   * @param {TreeNode} head 
   */
  this.bfsInorder = (head) => {
    let q = [head];
    while (q.length > 0) {
      const node = q[0];
      q = q.filter(x => x != node);
      if (!node) continue;
      q.push(node.left);
      console.log(node.value);
      q.push(node.right);
    }
  }

  /**
   * 
   * @param {TreeNode} head 
   */
  this.bfsPostorder = (head) => {
    let q = [head];
    while (q.length > 0) {
      const node = q[0];
      q = q.filter(x => x != node);
      if (!node) continue;
      q.push(node.left);
      q.push(node.right);
      console.log(node.value);
    }
  }
}
const l2 = new TreeNode(null, null, 52);
const r2 = new TreeNode(null, null, 20);

const l3 = new TreeNode(null, null, 12);
const r3 = new TreeNode(null, null, 8);

const l1 = new TreeNode(l2, r2, 50)
const r1 = new TreeNode(l3, r3, 5)

const head = new TreeNode(l1, r1, 2);
// head.dfs(head);
head.bfsPreorder(head);
// console.log(head.value);