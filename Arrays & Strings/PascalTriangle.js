/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	const ans = [[1]];
	for (let i = 1; i < numRows; i++) {
		const a = [];
		let j = 0;
		while (j <= ans[i-1].length) {
			const left = ans[i - 1][j - 1] || 0;
			const right = ans[i - 1][j] || 0;
			a.push(left + right);
			j++;
		}

		ans.push(a);
	}
	return ans;
};

console.log(generate(5));
