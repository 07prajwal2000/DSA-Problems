/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (s) {
	let pq = s.sort((a, b) => a - b);
	while (pq.length > 1) {
		let x = pq.pop();
		let y = pq.pop();
		if (x != y) {
			pq.push(x - y);
			pq = pq.sort((a, b) => a - b);
		}
	}
	return pq[0] ? pq[0] : 0;
};
