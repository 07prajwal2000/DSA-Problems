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
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const m1 = {};
    const m2 = {};
    for (let i = 0; i < s.length; i++) {
        m1[s[i]] = m1[s[i]] ? m1[s[i]] + 1 : 1;
        m2[t[i]] = m2[t[i]] ? m2[t[i]] + 1 : 1;
    }
    return Object.equals(m1, m2);
};