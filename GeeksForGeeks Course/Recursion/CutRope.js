var cut = (n, a, b, c) => {
  if (n < 0) return -1;
  if (n == 0) return 0;
  let left = cut(n-a, a, b,c);
  let mid = cut(n-b, a, b,c);
  let right = cut(n-c, a, b,c);
  
  let ans = Math.max(left, mid, right);
  if (ans < 0) return -1;
  return ans + 1;
};

console.log(cut(20, 11, 9, 12));