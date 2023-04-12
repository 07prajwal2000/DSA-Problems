/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	let count = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === "1") {
				dfs(grid, i, j);
				count++;
			}
		}
	}
	return count;
};

var dfs = (grid, i, j) => {
	if (
		i < 0 ||
		j < 0 ||
		grid.length <= i ||
		grid[0].length <= j ||
		grid[i][j] !== "1"
	) {
		return;
	}
	grid[i][j] = "-";
	dfs(grid, i - 1, j);
	dfs(grid, i + 1, j);
	dfs(grid, i, j - 1);
	dfs(grid, i, j + 1);
};
