/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (m, target) {
	const x = m.length;
	const y = m[0].length;
	let l = 0,
		h = x * y - 1;

	while (l <= h) {
		let mid = (l + h) >> 1;
		let i = parseInt(mid / y),
			j = mid % y;
		if (m[i][j] == target) {
			return true;
		} else if (m[i][j] < target) {
			l = mid + 1;
		} else {
			h = mid - 1;
		}
	}
	return false;
};
