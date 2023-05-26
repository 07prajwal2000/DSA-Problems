/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
	let n = mat.length,
		m = mat[0].length,
		i = 0,
		j = m - 1;
	while (i <= j) {
		let mid = (i + j) >> 1;
		let maxRow = 0;
		for (let i = 0; i < n; i++) {
			if (mat[maxRow][mid] < mat[i][mid]) {
				maxRow = i;
			}
		}
		if (
			(mid == 0 || mat[maxRow][mid] > mat[maxRow][mid - 1]) &&
			(mid == m - 1 || mat[maxRow][mid] > mat[maxRow][mid + 1])
		) {
			return [maxRow, mid];
		} else if (mid > 0 && mat[maxRow][mid - 1] > mat[maxRow][mid]) {
			j = mid - 1;
		} else {
			i = mid + 1;
		}
	}
};
