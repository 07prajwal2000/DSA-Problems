/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const visited = new Set();
  let max = -Infinity;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (visited.has(`${i}, ${j}`)) {
        continue;
      }
      const m = getMax(grid, i, j, visited);
      max = Math.max(max, m);
    }
  }
  return max;
};

function getMax(grid, x, y, visited) {
  if (grid.length <= x || x < 0 || grid[0].length <= y || y < 0 || grid[x][y] === 0 || visited.has(`${x}, ${y}`)) return 0;
  visited.add(`${x}, ${y}`);
  return 1 + getMax(grid, x + 1, y, visited) + getMax(grid, x - 1, y, visited) + getMax(grid, x, y + 1, visited) + getMax(grid, x, y - 1, visited);
}

console.log(
	maxAreaOfIsland([
		[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
		[0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
		[0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
	])
);
