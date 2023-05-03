var searchPattern = (str, pat) => {
	let i = 0,
		n = str.length;
	while (i < n) {
		let j = 0;
    let inc = false;
    let k = i;
		while (k < n && j < pat.length && str[k] == pat[j]) {
			j++;
			k++;
      inc = true;
		}
		if (j == pat.length) {
			return true;
		}
    i++;
	}
	return false;
	return str.includes(pat); // built-in way
};

console.log(searchPattern('abcxabcdabxabcdabcdabcy', 'abcdabcy'));