/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (op) {
	const score = [];
	for (let i of op) {
		if (i == "C") {
			score.pop();
		} else if (i == "D") {
			score.push(score[score.length - 1] * 2);
		} else if (i == "+") {
			score.push(score[score.length - 1] + score[score.length - 2]);
		} else {
			score.push(parseInt(i));
		}
	}
  let sum = 0;
  score.forEach(x => sum += x);
  return sum;
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
