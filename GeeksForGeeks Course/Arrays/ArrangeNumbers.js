function arrange(arr, n) {
	for (let i = 0; i < n; i++) {
		let x = arr[i];
		let y = arr[x];
		arr[i] = x + (y % n) * n; // encoding 2 numbers in one place. We get the current number by mod
	}
	for (let i = 0; i < n; i++) {
		arr[i] = parseInt(arr[i] / n); // we get the ith number by dividing by n.
	}
}
