/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
	let q = [s];
	const n = s.length;

	for (let i = s.length - 1; i >= 0; i--) {
		const c = s[i];

		if (!isChar(c)) continue;

		let size = q.length;
		while (size-- > 0) {
			let s = q.shift();
			let l = s.substring(0, i);
			let r = s.substring(i + 1, n);
			q.push(l + c.toUpperCase() + r);
			q.push(l + c.toLocaleLowerCase() + r);
		}
	}
	return q;
};

var isChar = (c) => {
	return (
		(ascii(c) >= ascii("a") && ascii(c) <= ascii("z")) ||
		(ascii(c) >= ascii("A") && ascii(c) <= ascii("Z"))
	);
};

var ascii = (c) => c.charCodeAt(0);

console.log(letterCasePermutation("abc"));
