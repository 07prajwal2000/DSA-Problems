/**
 * @param {number[]} arr
 * @return {number}
 */
var trap = function (arr) {
	const n = arr.length;
	let lMax = Array(n); // Pre calculating the left max
	lMax[0] = arr[0]; // can't store water at left-most side

	let rMax = Array(n);
	rMax[n - 1] = arr[n - 1]; // can't store water at right-most side

	let res = 0;
	for (let i = 1; i < n; i++) {
		lMax[i] = Math.max(lMax[i - 1], arr[i]);
	}
	for (let i = n - 2; i >= 0; i--) {
		rMax[i] = Math.max(rMax[i + 1], arr[i]);
	}

	for (let i = 1; i < n - 1; i++) {
		res += Math.min(rMax[i], lMax[i]) - arr[i];
	}
	return res;
};
