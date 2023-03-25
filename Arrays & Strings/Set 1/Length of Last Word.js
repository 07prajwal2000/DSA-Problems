/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	let count = 0;
	for (let i = s.length - 1; i >= 0; i--) {
		const c = s[i];
		if (c === " ") {
			continue;
		} else {
			let index = i;
			while (index >= 0) {
				if (s[index] !== " ") {
					count++;
				} else {
					return count;
				}
				index--;
			}
			return count;
		}
	}
	return count;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
