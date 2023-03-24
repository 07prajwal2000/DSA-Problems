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
 * @param {string} s1 key
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	if (s1.length > s2.length) return false;
	const m1 = {};
  const m2 = {};

	for (let i=0; i<s1.length; i++) {
    const c1 = s1[i], c2 = s2[i];
		m1[c1] = m1[c1] ? m1[c1] + 1 : 1;
		m2[c2] = m2[c2] ? m2[c2] + 1 : 1;
	}

	let l = 0;
	for (let r = s1.length - 1; r < s2.length;) {
    if (Object.equals(m1, m2)) {
      return true;
    }
    r++;
    const c1 = s2[r];
    const c2 = s2[l];
    if (m2[c2]) {
      m2[c2]--;
      if (m2[c2] === 0) {
        delete m2[c2];
      }
    }
		m2[c1] = m2[c1] ? m2[c1] + 1 : 1;
    l++;
	}

	return false;
};

console.log(checkInclusion("ab", "besaoboa"));
