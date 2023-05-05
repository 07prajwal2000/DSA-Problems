/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
	let idx = -1,
		n = nums.length;
	for (let i = n - 2; i >= 0; i--) {
		if (nums[i + 1] > nums[i]) {
			idx = i;
			break;
		}
	}
	if (idx == -1) {
		reverse(nums, 0, n - 1);
		return;
	}
	for (let i = n - 1; i > idx; i--) {
		if (nums[i] > nums[idx]) {
			let t = nums[i];
			nums[i] = nums[idx];
			nums[idx] = t;
			break;
		}
	}
	reverse(nums, idx + 1, n - 1);
};

var reverse = (arr, i, j) => {
	if (i > j) return;
	let t = arr[i];
	arr[i] = arr[j];
	arr[j] = t;
	i++;
	j--;
	reverse(arr, i, j);
};

const input = [2, 3, 1];
nextPermutation(input);
console.log(input);
