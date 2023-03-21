/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
	this.preSum = Array();
  matrix.forEach((x, i) => {
    const arr = [];
    let sum = 0;
    
    matrix[i].forEach((y, j) => {
      sum += y;
      const pre = i-1 < 0 ? 0 : this.preSum[i-1][j];
      arr.push(sum + pre);
    });
    this.preSum.push(arr);

  });
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
	const bottom = this.preSum[col2][row2];
  const top = (row1 - 1 < 0 || col2 - 1 < 0) ? 0 : this.preSum[row1-1][col2];
  const topLeft = (row1 - 1 < 0 || col1 - 1 < 0) ? 0 : this.preSum[row1-1][col1-1];
  const left = (col1-1 < 0) ? 0 : this.preSum[col2][col1-1];
  return bottom - top - left + topLeft;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

const ans = new NumMatrix([
	[3, 0, 1, 4, 2],
	[5, 6, 3, 2, 1],
	[1, 2, 0, 1, 5],
	[4, 1, 0, 1, 7],
	[1, 0, 3, 0, 5],
]).sumRegion(2, 1, 3, 4);
console.log(ans);