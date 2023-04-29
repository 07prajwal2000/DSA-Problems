var maxKSum = (arr, k) => {
  let cur = arr[0];
  const n = arr.length;
  for (let i = 1; i < k; i++) {
    cur += arr[i];
  }
  let max = cur;
  for (let i = k; i < n; i++) {
    cur = cur + arr[i] - arr[i - k];
    max = Math.max(max, cur);
  }
  return max;
};

console.log(maxKSum([1, 2, 3, 4, 5, 6], 2));