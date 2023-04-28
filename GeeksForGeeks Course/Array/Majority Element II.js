/**
 * Boyer–Moore Majority Vote Algorithm
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
	const n = nums.length;
	const div = parseInt(n / 3);
	let c1 = 0,
		c2 = 0;
	let num1 = -1,
		num2 = -1;
	for (let i = 0; i < n; i++) {
		let num = nums[i];
		if (num == num1) {
			c1++;
		} else if (num == num2) {
			c2++;
		} else if (c1 <= 0) {
			num1 = num;
			c1 = 1;
		} else if (c2 <= 0) {
			c2 = 1;
			num2 = num;
		} else {
			c2--;
			c1--;
		}
	}
	c1 = 0;
	c2 = 0;
	let ans = [];
	for (let i = 0; i < n; i++) {
		if (num1 == nums[i]) {
			c1++;
		} else if (num2 == nums[i]) {
			c2++;
		}
	}
	if (c1 > div) ans.push(num1);
	if (c2 > div) ans.push(num2);
	return ans;
};

var solution2 = (nums) => {
	let ans = [];
	const n = nums.length;
	const div = parseInt(n / 3);
	for (let i = 0; i < n; i++) {
		const num = nums[i];
		let count = 0;
		for (let j = 0; j < n; j++) {
			if (nums[i] != nums[j]) continue;
			count++;
			if (count > div) {
				!ans.includes(num) && ans.push(num);
				break;
			}
		}
	}
	return ans;
};

// Uses Hashmap of O(n) size.
var solution1 = (nums) => {
	let ans = [];
	let map = {};
	const n = nums.length;
	for (let i = 0; i < n; i++) {
		if (map[nums[i]]) {
			map[nums[i]]++;
		} else {
			map[nums[i]] = 1;
		}
	}
	for (let key in map) {
		let num = parseInt(key);
		if (map[key] > parseInt(n / 3)) {
			ans.push(num);
		}
	}
	return ans;
};

console.log(majorityElement([4, 2, 1, 1]));
