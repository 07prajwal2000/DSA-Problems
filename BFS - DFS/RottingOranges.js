/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
	let q = [];
	let fresh = 0;
	const n = grid.length;
	const m = grid[0].length;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			const ele = grid[i][j];
			if (ele === 1) {
				fresh++;
			} else if (ele === 2) {
				q.push([i, j]);
			}
		}
	}
	if (fresh === 0) return 0;
	let dirs = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	let len = 0;
	while (q.length > 0) {
		++len;
		const size = q.length;
		for (let i = 0; i < size; i++) {
			let [x, y] = q.shift();
			for (let d of dirs) {
				let xx = x + d[0];
				let yy = y + d[1];
				if (
					xx < 0 ||
					xx >= n ||
					yy < 0 ||
					yy >= m ||
					grid[xx][yy] === 2 ||
					grid[xx][yy] === 0
				)
					continue;
				fresh--;
				grid[xx][yy] = 2;
				q.push([xx, yy]);
			}
		}
	}
	return fresh == 0 ? len - 1 : -1;
};

console.log(
	orangesRotting([
		[2, 1, 1],
		[1, 1, 1],
		[0, 1, 2],
	])
);
