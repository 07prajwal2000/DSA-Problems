/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
	let ans = "";
  let foundNumber = false;

	for (let i of s) {
		if (i === ".") {
			ans += i;
		}
		if (i === " ") {
      if (foundNumber) return getAns(ans);
      continue;
    }
		if (isValid(i)) {
			ans += i;
      foundNumber = true;
		} else {
			break;
		}
	}
	return getAns(ans);
};

const getAns = (ans) => {
  if (isNaN(parseInt(ans))) {
		return 0;
	} else if (2147483647 < parseInt(ans)) {
		return 2147483647;
	} else if (-2147483648 > parseInt(ans)) {
		return -2147483648;
	} else {
		return parseInt(ans);
	}
}

var isValid = (c) => {
	const curValue = c.charCodeAt(0);
	const zeroValue = "0".charCodeAt(0);
	const nineValue = "9".charCodeAt(0);

	if (curValue >= zeroValue && nineValue >= curValue) {
		return true;
	}
	if (curValue === "-".charCodeAt(0) || "+".charCodeAt(0) === curValue) {
		return true;
	}
	return false;
};

console.log(myAtoi("   +0 123"));
console.log(myAtoi("4555 with words"));
