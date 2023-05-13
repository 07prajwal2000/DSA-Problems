var search = (arr, num) => {
  let l = 0, r = arr.length;
  let mid = parseInt((l + r) / 2);
  if (arr[mid] == num) return mid;
  else if (arr[l] > num) l = mid;
  else r = mid;
  return binarySearch(arr, num, l, r);
};

var binarySearch = function(nums, target, left, right) {
  if (nums.length === 1) {
    if (nums[0] === target) return 0;
    return -1;
  }
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

console.log(search([10, 20, 40, 60, 5, 8], 5));