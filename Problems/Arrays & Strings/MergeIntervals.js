/**
 * @param {number[][]} arr
 * @return {number[][]}
 */
var merge = function (arr) {
	arr.sort((a, b) => {
		if (a[0] == b[0]) {
			return a[1] - b[1];
		}
		return a[0] - b[0];
	});
	let ans = [];
	const n = arr.length;
	let s = arr[0][0],
		e = arr[0][1];

	for (let i = 1; i < n; i++) {
		let t = arr[i];
		if (t[0] <= e) {
			e = Math.max(t[1], e);
		} else {
			ans.push([s, e]);
			s = t[0];
			e = Math.max(t[1], e);
		}
	}
	ans.push([s, e]);
	return ans;
};

console.log(
	merge([
		[1, 4],
		[2, 3],
	])
);
