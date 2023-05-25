function findKRotation(arr, n) {
	if (arr[0] <= arr[n - 1]) return 0;
	let l = 0,
		r = n - 1;

	while (l < r) {
		let mid = (l + r) >> 1;
		if (arr[mid] < arr[mid - 1]) {
			return mid;
		}
		if (arr[mid + 1] < arr[mid]) {
			return mid + 1;
		}
		if (arr[mid] >= arr[l]) {
			l = mid + 1;
		} else {
			r = mid - 1;
		}
	}
	return l;
}

console.log(
	findKRotation(
		[
			66, 72, 79, 86, 95, 104, 106, 110, 119, 123, 124, 129, 132, 136,
			137, 142, 150, 2, 12, 14, 17, 26, 30, 36, 38, 46, 52, 60,
		],
		28
	)
);
console.log(findKRotation([5, 1, 2, 3, 4], 5));
console.log(findKRotation([4, 5, 1, 2, 3], 5));
