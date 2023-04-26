var evenOddSubarray = (arr) => {
	const n = arr.length;

	let maxIdx = 0;
	let cur = 1; // 1 is bcz we initially have even OR odd.
	for (let i = 1; i < n; i++) {
		if (
			(arr[i] & 1 && !(arr[i - 1] & 1)) ||
			(!(arr[i] & 1) && arr[i - 1] & 1)
		) {
			cur++;
			maxIdx = Math.max(maxIdx, cur);
		} else {
			cur = 1; // same reason
		}
	}
	return maxIdx;
};

console.log(evenOddSubarray([1, 2, 3, 3, 4, 4, 5]));
