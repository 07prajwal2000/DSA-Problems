var squareRoot = (n) => {
  let l = 0, r = n;
  let ans = -1;
  while (l <= r) {
    const mid = parseInt((l + r) / 2);
    const sqr = mid * mid;
    if (sqr == n) {
      return mid;
    } else if (sqr > n) {
      r = mid - 1;
    } else {
      l = mid + 1;
      ans = mid;
    }
  }
  return ans;
};

console.log(squareRoot(90));