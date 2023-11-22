/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
	let high = piles.reduce((x, max) => Math.max(x, max));
	let low = 1;

	while (low <= high) {
		let mid = (low + high) >> 1;
		let hrs = getTotalHours(piles, mid);
		if (hrs <= h) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return low;
};

function getTotalHours(piles, mid) {
	let hrs = 0;
	for (let p of piles) {
		hrs += Math.ceil(p / mid);
	}
	return hrs;
}

console.log(minEatingSpeed([30,11,23,4,20], 5)); // output: 30