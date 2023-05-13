function twoSum(nums, target) {
    let answer = {};

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const num = target - n;
        if (num in answer) {
            return [answer[num], i]
        }
        answer[n] = i;
    }
    return [];
};

console.log(twoSum([2,7,11,15], 9));
