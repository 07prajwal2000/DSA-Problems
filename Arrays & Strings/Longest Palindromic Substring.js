/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let start = 0, end = 0;
  let i = 0;
  for (i = 0; i < s.length; i++) {
    let len1 = isPalindrome(i, i, s);
    let len2 = isPalindrome(i, i + 1, s);
    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - parseInt(((len - 1) / 2));
      end = i + parseInt((len / 2));
    }
  }
  return s.substring(start, end + 1);
};

var isPalindrome = (l, r, s) => {
  if (!s || l > r) return 0;

  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return r - l - 1;
};

console.log(longestPalindrome("bb"));