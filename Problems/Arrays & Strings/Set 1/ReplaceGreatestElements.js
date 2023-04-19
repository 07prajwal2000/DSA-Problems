/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  const ans = Array(arr.length);
  let j = 0;
  ans[arr.length - 1] = -1;
  for (let i = arr.length - 2; i >= 0; i--) {
    ans[i] = Math.max(arr[i + 1], ans[i + 1]);
  }

  return ans;
};

console.log(replaceElements([17,18,5,4,6,1]));
console.log(replaceElements([400]));