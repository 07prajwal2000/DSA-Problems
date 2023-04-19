/**
 * @param {number[]} arr
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (arr, n) {
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		const left = arr[i - 1] || 0;
		const right = arr[i + 1] || 0;
		const cur = arr[i];
		
		if (left === 0 && right === 0 && cur !== 1) {
			arr[i] = 1;
			count++;
		}
	}
	return count >= n;
};

console.log(canPlaceFlowers([0], 2));
console.log([0, 0, 1, 0, 1], '-', 1, '-', canPlaceFlowers([0, 0, 1, 0, 1], 1));
console.log([1, 0, 0, 0, 1], '-', 1, '-', canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log([1, 0, 0, 0, 1], '-', 2, '-', canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log([1, 0, 0, 0, 0, 1], '-', 2, '-', canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
console.log([1, 0, 1, 0, 1], '-', 1, '-', canPlaceFlowers([1, 0, 1, 0, 1], 1));
