/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	return soln1(matrix, target);
	return soln2(matrix, target);
};

var soln1 = (matrix, target) => {
	let n = matrix.length;
	let m = matrix[0].length;

	let i = 0,
		j = m - 1;
	while (i < n && j >= 0) {
		if (matrix[i][j] > target) {
			j--;
		} else if (matrix[i][j] < target) {
			i++;
		} else {
			return true;
		}
	}
	return false;
};

var soln2 = (matrix, target) => {
	let n = matrix.length;
	let m = matrix[0].length;

	for (let i = 0; i < n; i++) {
		// check if the element is in the range.
		if (target >= matrix[i][0] && target <= matrix[i][m - 1]) {
			return binarySearch(matrix[i], 0, m, target);
		}
	}
	return false;
};

var binarySearch = (arr, i, j, t) => {
	if (i >= j) return false;
	let mid = (i + j) >> 1;
	if (arr[mid] == t) return true;
	else if (arr[mid] > t) {
		j = mid;
	} else {
		i = mid + 1;
	}
	return binarySearch(arr, i, j, t);
};
console.log(searchMatrix([[1, 3]], 3));
