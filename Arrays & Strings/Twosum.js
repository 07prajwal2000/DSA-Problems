function twoSum(nums, target) {
    let answer = {};

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const num = target - n;
        if (contains(num, answer)) {
            return [answer[num], i]
        }
        answer[n] = i;
    }
    return [];
};

function contains(value, vals) {
    let flag = false;
    Object.keys(vals).forEach(x => {
        if (x == value) {
            flag = true;
            return;
        }
    })
    return flag;
}

console.log(twoSum([2,7,11,15], 9));
