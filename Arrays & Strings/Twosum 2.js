/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, t) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        const curSum = nums[left] + nums[right];
        if (curSum > t) {
            right--;
        }
        if (curSum < t) {
            left++;
        }
        if (curSum === t) {
            return [left+1, right+1];
        }
    }
    return [];
};