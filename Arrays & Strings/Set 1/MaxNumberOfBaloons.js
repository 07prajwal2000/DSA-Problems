/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
	const map = {
		b: 0,
		a: 0,
		l: 0,
		o: 0,
		n: 0,
	};
	let min = Number.MAX_VALUE;
	for (let c of text) {
		if (map[c] >= 0) {
			map[c]++;
		}
	}
	map["l"] = parseInt(map["l"] / 2);
	map["o"] = parseInt(map["o"] / 2);

	for (let k in map) {
		const val = map[k];
		if (min > val) {
			min = val;
		}
	}
	return min;
};

console.log(maxNumberOfBalloons("nlaebolko"));
console.log(maxNumberOfBalloons("loonbalxballpoon"));
console.log(maxNumberOfBalloons("balon"));
