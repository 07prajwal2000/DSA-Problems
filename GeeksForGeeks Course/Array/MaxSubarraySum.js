/**
 * @param {number[]} arr
 */
function maxSum(arr) {
	const n = arr.length;
	let res = arr[0];
	for (let i = 1; i < n; i++) {
		arr[i] = Math.max(arr[i-1] + arr[i], arr[i]);
    res = Math.max(arr[i], res);
	}
	return res;
}
/**
 * @param {number[]} arr
 */
function maxSumSlow(arr) {
	const n = arr.length;
	let res = arr[0];
	for (let i = 0; i < n; i++) {
		let curSum = 0;
		for (let j = i; j < n; j++) {
			curSum += arr[j];
			res = Math.max(curSum, res);
		}
	}
	return res;
}

console.log(maxSum([1, -2, 3, -1, 2]));
