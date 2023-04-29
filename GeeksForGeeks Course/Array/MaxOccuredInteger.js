var maxOccured = (L, R, n, maxx) => {
	let ans = Array(maxx + 1).fill(0);
	for (let i = 0; i < n; i++) {
		let r1 = L[i];
		let r2 = R[i];
		for (let j = r1; j <= r2; j++) {
			ans[j]++;
		}
	}
	let cur = 0;
	for (let i = 0; i <= maxx; i++) {
		if (ans[i] > ans[cur]) {
			cur = i;
		}
	}
	return cur;
};
