var connect = function(root) {
  let cur = root, next = root?.left || null;
  while (cur && next) {
    cur.left.next = cur.right;
    if (cur.next) {
      cur.right.next = cur.next.left;
    }
    cur = cur.next;
    if (!cur) {
      cur = next;
      next = cur.left;  
    }
  }
  return root;
};