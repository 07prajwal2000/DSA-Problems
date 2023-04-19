/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
  let i = 0;
  let j = s.length - 1;
  while (j > i) {
      if (s[i] !== s[j]) {
          return isPalindrome(s, i+1, j) || isPalindrome(s, i, j-1);
      }
      i++;
      j--;
  }
  return true;
};

const isPalindrome = (s, i, j) => {
  while (j > i) {
      if (s[i] !== s[j]) {
          return false;
      }
      i++;
      j--;
  }
  return true;
};