/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
	let q = [];

	const n = mat.length;
	const m = mat[0].length;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			const ele = mat[i][j];
			if (ele === 0) {
				q.push([i, j]);
			} else {
				mat[i][j] = -1;
			}
		}
	}

	const dirs = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];

	let c = 0;
	while (q.length > 0) {
		c++;
		const xy = q.shift();
		for (let i = 0; i < dirs.length; i++) {
			const x = xy[0] + dirs[i][0];
			const y = xy[1] + dirs[i][1];
			if (x < 0 || x >= n || y < 0 || y >= m || mat[x][y] !== -1) continue;
			mat[x][y] = mat[xy[0]][xy[1]] + 1;
			q.push([x, y]);
		}
	}
	
	return mat;
};
console.log(
	updateMatrix([
		[0, 0, 0],
		[0, 1, 0],
		[1, 1, 1],
	])
);
