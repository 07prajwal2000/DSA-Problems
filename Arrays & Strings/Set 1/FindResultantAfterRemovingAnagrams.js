Object.prototype.equals = (o1, o2) => {
	for (let k in o1) {
		if (!o2[k]) return false;
		if (o1[k] !== o2[k]) return false;
	}
	for (let k in o2) {
		if (!o1[k]) return false;
		if (o1[k] !== o2[k]) return false;
	}
	return true;
};
/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
	const ans = [];
	for (let i = 0; i < words.length;) {
    let j = i + 1;
    while (j < words.length && isAnagram(words[i], words[j])) {
      j++;
    }
    ans.push(words[i]);
    i = j;
  }
	return ans;
};

var isAnagram = function (s, t) {
	if (s.length !== t.length) return false;
	const m1 = {};
	const m2 = {};
	for (let i = 0; i < s.length; i++) {
		m1[s[i]] = m1[s[i]] ? m1[s[i]] + 1 : 1;
		m2[t[i]] = m2[t[i]] ? m2[t[i]] + 1 : 1;
	}
	return Object.equals(m1, m2);
};

console.log(removeAnagrams(["a","b","c","d","e"]));