/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
	let totalSum = 0;
  let leftSum = 0;
	
	nums.forEach((x) => (totalSum += x));
  let idx = -1;
	for (let i = 0; i < nums.length; i++) {
    let x = nums[i];
		let rightSum = totalSum - x - leftSum;
		if (leftSum === rightSum) {
      idx = i;
			break;
		}
		leftSum += x;
	}
	return idx;
};

console.log(pivotIndex([-1,-1,-1,-1,-1,0])); // 2
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
