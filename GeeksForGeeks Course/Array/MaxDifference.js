var getMax = (arr) => {
  let n = arr.length;
  // FASTER
  let max = arr[1] - arr[0], min = arr[0];
  
  for (let i = 0; i < n; i++) {
    max = Math.max(max, arr[i] - min);
    min = Math.min(min, arr[i]);
  }
  return max;
  
  // let ans = Number.MIN_SAFE_INTEGER;
  
  // for (let i = 0; i < n; i++) {
  //   for (let j = i; j < n; j++) {
  //     ans = Math.max(ans, arr[j]- arr[i]);
  //   }
  // }
  // return ans;
};

console.log(getMax([1, 2, 3]));