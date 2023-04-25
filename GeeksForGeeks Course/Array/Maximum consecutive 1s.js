/**
 * 
 * @param {number[]} arr 
 */
var maxConsecutive1s = (arr) => {
  let ans = 0, n = arr.length;
  let i = -1;
  while (i++ < n) {
    let j = i;
    while (arr[j] == 1) {
      j++;
    }
    ans = Math.max(ans, j - i);
    i = j;
  }
  
  return ans;
};
/**
 * 
 * @param {number[]} arr 
 */
var maxConsecutive1sSolution2 = (arr) => {
  let ans = 0, n = arr.length;
  let c = 0;
  let i = -1;
  while (i++ < n) {
    if (arr[i] == 0) {
      c = 0
    } else {
      c++;
      ans = Math.max(c, ans);
    }
  }
  
  return ans;
};

console.log(maxConsecutive1sSolution2([1, 0, 0, 1, 1, 1, 1, 1, 0]));