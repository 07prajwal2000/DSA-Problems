var maxStep = (arr, N) => {
	let max = 0;
	for (let i = 0; i < N - 1; i++) {
		let cur = 0;
		while (i + 1 < N && arr[i + 1] > arr[i]) {
			cur++;
			i++;
		}
		max = Math.max(cur, max);
	}
	return max;
};

console.log(maxStep([1,2,3,4], 4)); // 3