var subarraySum = (nums, k) => {
  let curSum = 0;
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];
    
    while (curSum > k && left < i) {
      curSum-= nums[left];
      left++;
    }

    if (k == curSum) return true;
  }
  return false;
};

console.log(subarraySum([1, 2, 3, 4, 5, 6], 10));