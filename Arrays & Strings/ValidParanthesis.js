/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	const stack = [];
	for (let i of s) {
		if (i === "{") {
			stack.push("}");
		} else if (i === "(") {
			stack.push(")");
		} else if (i === "[") {
			stack.push("]");
		} else if (stack.length === 0 || stack.pop() !== i) {
			return false;
		}
	}
	return stack.length === 0;
};

console.log(isValid('()[]{}'));