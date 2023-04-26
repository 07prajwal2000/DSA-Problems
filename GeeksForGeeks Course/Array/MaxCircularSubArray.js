var maxSumSubarray = (arr) => {
  let sum = arr[0], cur = arr[0];
  for (let i = 1; i < arr.length; i++) {
    cur = Math.max(arr[i], arr[i] + cur);
    sum = Math.max(sum, cur);
  }
  return sum;
};

var circularSum = (arr) => {
  let maxNormal = maxSumSubarray(arr);
  if (maxNormal < 0) return maxNormal;

  let allSum = 0;
  for (let i = 0; i < arr.length; i++) {
    allSum += arr[i];
    arr[i] = -arr[i];
  }
  
  let maxCircular = allSum + maxSumSubarray(arr);
  return Math.max(maxCircular, maxNormal);
};

console.log(circularSum([8, 8, 3, -5, 4]));