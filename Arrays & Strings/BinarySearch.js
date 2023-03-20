/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 1) {
    if (nums[0] === target) return 0;
    return -1;
  }
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    let ele = nums[mid];
    if (ele === target) {
      return mid;
    } else if (ele > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(search([-1,0,3,5,9,12], 2));
console.log(search([2,5], 5));
console.log(search([-1,0,3,5,9,12], 9));
console.log(search([5], 5));