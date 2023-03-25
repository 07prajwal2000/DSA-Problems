function trailingZeros(n) {
  let res = 0;
  for (let i = 5; i <= n; i *= 5) {
    res = res + parseInt(n / i);
  }
  return res;
}

console.log(trailingZeros(100));