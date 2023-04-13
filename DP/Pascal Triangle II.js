/**
 * @param {number} k
 * @return {number[]}
 */
var getRow = function (k) {
	let ans = Array(k + 1).fill(0);
	ans[0] = 1;

	for (let i = 1; i <= k; i++) {
		for (let j = i; j >= 1; j--) {
			ans[j] += ans[j - 1];
		}
	}

	return ans;
};

// i = 1, j = 1, ans[1] = 0+1 => 1

// i = 2, j = 2, ans[2] += ans[1] => 1
// i = 2, j = 1, ans[1] += ans[0] => 1 + 1 => 2.

// i = 3, j = 3, ans[3] += ans[2] => 1
// i = 3, j = 2, ans[2] += ans[1] => 1 + 2 => 3
// i = 3, j = 1, ans[1] += ans[0] => 1 + 0 => 1
