/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
	let total = 0,
		prev = 0;
	for (let i of arr) {
		total += i - prev - 1;
		prev = i;
		let t = i - 1;
		// got the ans.
		let flag = total >= k;
		while (flag) {
			if (total == k) {
				return t;
			}
			t--;
			total--;
		}
	}
	return arr[arr.length - 1] + k - total;
};
