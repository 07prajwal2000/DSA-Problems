/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
	const n = matrix.length,
		m = matrix[0].length;
	let frow = 0,
		fcol = 0;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (matrix[i][j] == 0) {
				if (i == 0) frow = 1;
				if (j == 0) fcol = 1;

				matrix[0][j] = 0;
				matrix[i][0] = 0;
			}
		}
	}

	for (let i = 1; i < n; i++) {
		for (let j = 1; j < m; j++) {
			if (matrix[i][0] == 0 || matrix[0][j] == 0) {
				matrix[i][j] = 0;
			}
		}
	}

	if (frow) {
		for (let i = 0; i < m; i++) {
			matrix[0][i] = 0;
		}
	}
	if (fcol) {
		for (let i = 0; i < n; i++) {
			matrix[i][0] = 0;
		}
	}
};

console.log(setZeroes([[1, 0, 3]]));
