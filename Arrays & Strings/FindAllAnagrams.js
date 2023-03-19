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
 * @param {string} p
 * @return {number[]}
*/
var findAnagrams = function(s, p) {
  if (s.length < p.length) return [];
  let strMap = {};
  let patternMap = {};
  
  for (let i = 0; i < p.length; i++) {
    const element1 = p[i];
    const element2 = s[i];
    patternMap[element1] = patternMap[element1] ? patternMap[element1] + 1 : 1;
    strMap[element2] = strMap[element2] ? strMap[element2] + 1 : 1;
  }

  let left = 0;
  const ans = Object.equals(strMap, patternMap) ? [0] : [];
  
  for (let i = p.length; i < s.length; i++) {
    const c = s[i];
    strMap[c] = strMap[c] ? strMap[c] + 1 : 1;
    strMap[s[left]] -= 1;

    if (strMap[s[left]] === 0) {
      delete strMap[s[left]];
    }
    left++;
    if (Object.equals(strMap, patternMap)) {
      ans.push(left);
    }
  }
  return ans;
};


var isAnagram = (pattren, input, index) => {

  for (let i = index; i < (index + pattren.length); i++) {
    if (!pattren.includes(input[i])) return false;
    strMap[input[i]] = strMap[input[i] ]? strMap[input[i]] + 1 : 1;
  }

  for (let i in strMap) {
    if (strMap[i] !== patternMap[i]) return false;
  }
  return true;
};


console.log(findAnagrams('abab', 'ab'));
console.log(findAnagrams('cbaebabacd', 'abc'));