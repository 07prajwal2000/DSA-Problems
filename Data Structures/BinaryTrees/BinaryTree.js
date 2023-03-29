function TreeNode(value, left, right) {
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

const head = buildTree([1, 2, 3, 4, null, 5, 6]);
// head.dfs(head);
head.bfsPreorder(head);
// console.log(head.value);

function buildTree(arr) {
  let i = -1;
  function build() {
    i++;
    if (i >= arr.length || arr[i] === null) {
      return null;
    }
    let n = new TreeNode(arr[i]);
    n.left = build();
    n.right = build();
    return n;
  }
  return build();
}