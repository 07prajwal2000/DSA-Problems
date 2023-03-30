/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
	let islands = 0;
	let neighbour = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === 0) continue;
			islands++;
			if (i != 0 && grid[i - 1][j] === 1) neighbour++;
			if (j != 0 && grid[i][j - 1] === 1) neighbour++;
		}
	}
	return 4 * islands - 2 * neighbour;
};
