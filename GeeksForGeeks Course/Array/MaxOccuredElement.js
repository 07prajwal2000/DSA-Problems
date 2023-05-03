var maxOccured = (L, R, n, maxx) => {
	const arr = Array(maxx + 1).fill(0);
	for (let i = 0; i < n; i++) {
		arr[L[i]]++;
		arr[R[i] + 1]--;
	}
	let ans = 0;
	for (let i = 1; i < maxx; i++) {
		arr[i] = arr[i - 1] + arr[i];
		if (arr[i] > arr[ans]) {
			ans = i;
		}
	}
	return ans;
};

var maxOccuredV2 = (L, R, n, maxx) => {
	let ans = Array(maxx + 1).fill(0); // to keep track of element's count
	for (let i = 0; i < n; i++) {
		let r1 = L[i]; // left-bound range
		let r2 = R[i]; // right-bound range
		for (let j = r1; j <= r2; j++) {
			ans[j]++; // incrementing counter to get the max occured element.
		}
	}
	let cur = 0;
	for (let i = 0; i <= maxx; i++) {
		if (ans[i] > ans[cur]) { // get the max count index
			cur = i;
		}
	}
	return cur;
};
