var pairSum = (arr, target) => {
	let l = 0,
		r = arr.length - 1;
	while (l < r) {
		const sum = arr[l] + arr[r];
		if (sum == target) {
			return [l, r];
		} else if (sum > target) {
			r--;
		} else {
			l++;
		}
	}
	return [-1];
};

console.log(pairSum([1, 2, 3, 4, 5, 7], 7));
