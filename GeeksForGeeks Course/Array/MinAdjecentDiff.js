var minAdjDiff = (arr, n) => {
	let ans = 1e9 + 7;
	for (let i = 1; i < n; i++) {
		let t = Math.abs(arr[i] - arr[i - 1]);
		ans = Math.min(ans, t);
	}
	ans = Math.min(ans, Math.abs(arr[n - 1] - arr[0]));
	return ans;
};
