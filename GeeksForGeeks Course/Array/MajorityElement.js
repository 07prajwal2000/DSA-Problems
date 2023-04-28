// Boyer–Moore Majority Vote Algorithm
var majority = (arr) => {
  const n = arr.length;
  let count = 1, res = 0;
  for (let i = 1; i < n; i++) {
    if (arr[res] == arr[i]) {
      count++;
    } else {
      count--;
    }
    if (count <= 0) {
      count = 1;
      res = i;
    }
  }
  // validating if the current element is majority
  count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == arr[res]) {
      count++;
    }
  }
  return count > (n >> 1) ? arr[res] : -1;
  
  // O(n2)
  for (let i = 0; i < n; i++) {
    let count = 1;
    for (let j = 0; j < n; j++) {
      if (arr[i] != arr[j]) continue;
      count++;
    }
    if (count > (n >> 1)) {
      return arr[i];
    }
  }
  return -1;
};

console.log(majority([8, 7, 6, 8, 6, 6, 6, 6, 6]));