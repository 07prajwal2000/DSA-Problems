/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function (rect) {
	const map = {};

	for (let i = 0; i < rect.length; i++) {
		const [l, r] = rect[i];
		map[l / r] = map[l / r] ? map[l / r] + 1 : 1;
	}
	let result = 0;
	for (let k in map) {
		const v = map[k];
		if (v <= 1) continue;
		result += parseInt((v * (v - 1)) / 2);
	}
	return result;
};

console.log(
	interchangeableRectangles([
		[4, 8],
		[3, 6],
		[10, 20],
		[15, 30],
	])
);
