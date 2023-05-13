var search = (arr, num) => {
  if (arr[0] == num) {
    return 0;
  }
  let i = 1;
  while (true) {
    if (arr[i] == num) return i;
    else if (arr[i] > num) break;
    else if (arr[i] == undefined) return -1;
    i *= 2;
  }
  return binarySearch(arr, num, parseInt(i / 2), i);
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

console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 9));