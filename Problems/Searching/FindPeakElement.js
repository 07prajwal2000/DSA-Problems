var peakElement = (arr) => {
	const n = arr.length;
	let l = 0,
		r = n - 1;
	while (l <= r) {
		let mid = parseInt((l + r) / 2);
		if (
			(mid == n - 1 || arr[mid + 1] <= arr[mid]) &&
			(mid == 0 || arr[mid - 1] <= arr[mid])
		) {
			return mid;
		}
		if (mid > 0 && arr[mid - 1] >= arr[mid]) {
			r = mid - 1;
		} else {
			l = mid + 1;
		}
	}
	return -1;
};

console.log(peakElement([1, 2, 3, 4, 3, 4, 5, 6]));
