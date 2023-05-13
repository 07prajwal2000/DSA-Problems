var tripletSum = (arr, t) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let l = i + 1;
    let r = n - 1;
    while (l < r) {
      const sum = arr[l] + arr[r] + arr[i];
      if (sum == t) return [i, l, r];
      else if (sum > t) r--;
      else l++;
    }
  }
  return [-1];
};

console.log(tripletSum([1, 2, 4, 5, 6, 7], 10));