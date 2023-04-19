/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let i = 0;
  let j = 0;

  while (s.length > i && t.length > j) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === (s.length);
};

console.log(isSubsequence('b', 'abc'));
console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));
console.log(isSubsequence('acb', 'ahbgdc'));