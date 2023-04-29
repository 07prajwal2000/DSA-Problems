/**
 * Returns the start and end (INCLUSIVE) indexes of array.
 * @param {number[]} arr
 * @returns
 */
var findGroups = (arr) => {
	let ans = [];
	const n = arr.length;
	let ele = arr[0];
	let prevIdx = 0;
	let i = 0;
	for (i = 0; i < n; i++) {
		while (i < n && ele == arr[i]) {
			i++;
		}

		i < n && (ele = arr[i]);
		ans.push([prevIdx, i - 1]);
		prevIdx = i;
	}
	if (ans[ans.length - 1][1] != n - 1) {
		ans.push([n - 1, n - 1]);
	}
	return ans;
};
