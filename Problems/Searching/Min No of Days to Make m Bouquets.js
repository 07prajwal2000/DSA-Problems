/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (arr, m, k) {
	const n = arr.length;
	if (m * k > n) return -1;
	let l = 1,
		r = 1e9;

	// start B.S from l->r
	while (l < r) {
		// getting the mid days,
		let mid = (l + r) >> 1;
		// calculating the total bouquets can be collected from mid-days
		let totalBq = getPossibleBq(arr, mid, k);
		// if the total bouquets are less than given 'm' bouquets,
		// we need to increase the left, as usual from B.S algo.
		if (totalBq < m) {
			l = mid + 1;
		} else {
			// here if the more bouquets are collected we just decrement the right ptr.
			r = mid;
		}
	}
	// At the end the ans is at the left ptr.
	return l;
};

// this function will count the total bouquets can be collected from given day.
function getPossibleBq(arr, day, k) {
	// to keep track of how many bouquets & flowers are collected,
	let totalBq = 0,
		flowersCollected = 0;

	for (let i of arr) {
		// here if the i day is less than mid, means we can pick the flower from ith day,
		// bcz the mid day (target day) is greater, within the mid day,
		// the flower is bloomed.
		if (i <= day) {
			flowersCollected++;
		} else {
			// we need to reset the collected flowers,
			// bcz in condition they said about adjacent flowers can only be picked.
			flowersCollected = 0;
		}
		// if the flowers count equals the target flowers need to be in bouquets,
		// increment the total bouquets collected and we need to reset the flowers collected
		// back to 0. Bcz, we can't take the flowers that are already picked.
		if (flowersCollected == k) {
			flowersCollected = 0;
			totalBq++;
		}
	}
	return totalBq;
}
