class Solution {
	equilibriumPoint(a, n) {
		let sum = a.reduce((a, b) => (a += b));
		let curSum = 0;
		for (let i = 0; i < n; i++) {
			let right = sum - a[i] - curSum;

			if (curSum === right) {
				return i + 1;
			}
			curSum += a[i];
		}
		return -1;
	}
}
