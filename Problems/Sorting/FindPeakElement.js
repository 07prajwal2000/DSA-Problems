/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (arr) {
	const n = arr.length;
	if (n == 1) return 0;
	if (arr[0] > arr[1]) return 0;
	if (arr[n - 1] > arr[n - 2]) return n - 1;

	let l = 0,
		r = n - 1;
	while (l <= r) {
		let mid = (l + r) >> 1;
		if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
			return mid;
		} else if (arr[mid] < arr[mid - 1]) {
			r = mid - 1;
		} else {
			l = mid + 1;
		}
	}
};
