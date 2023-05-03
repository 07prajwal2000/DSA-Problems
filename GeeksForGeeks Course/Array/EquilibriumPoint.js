var equilibriumPoint = (arr, n) => {
	const sum = arr.reduce((a, b) => (a += b)); // total sum for calc rightSide of sum
	let cur = 0; // to calc left sum

	for (let i = 0; i < n; i++) {
		const leftSum = cur;
		// to get right sum we need to subtract from totalSum and leftSum and current element.
		// current element doesn't count for mid point.
		const rightSum = sum - leftSum - arr[i];
		if (leftSum == rightSum) {
			return i + 1;
		}
		cur += arr[i];
	}
	return -1;
};

console.log(equilibriumPoint([1, 3, 5, 2, 2], 5));
console.log(equilibriumPoint([1], 1));
console.log(equilibriumPoint([4, 2, -2], 3));
