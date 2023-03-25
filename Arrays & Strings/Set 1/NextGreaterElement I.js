/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElementSlow = function (nums1, nums2) {
	const ans = [];

	for (let i = 0; i < nums1.length; i++) {
		const num1 = nums1[i];
		let j = 0;
		let greater = -1;
		while (j < nums2.length) {
			if (nums2[j] === num1) {
				j++;
				while (j < nums2.length) {
					if (nums2[j] > num1) {
						greater = nums2[j];
						break;
					}
					j++;
				}
			}
			j++;
		}
		ans.push(greater);
	}

	return ans;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
	var peek = (stack) => stack[stack.length - 1];
	var hasElements = (stack) => stack.length > 0;

	const ans = Array(nums1.length);
	for (let i = 0; i < ans.length; i++) {
		ans[i] = -1;
	}
	const map = new Map();
	const stack = [];

	nums1.forEach((x, i) => map.set(x, i));
	
	nums2.forEach((cur, i) => {
		while (hasElements(stack) && cur > peek(stack)) {
			let num = stack.pop();
			let index = map.get(num);
			ans[index] = cur;
		}
		map.has(cur) && stack.push(cur);
	});
	
	return ans;
};


console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
