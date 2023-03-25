/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    let right = 0;
    while (haystack[i + right] === needle[right] && right < haystack.length) {
      right++;
      if (right === needle.length) {
        return i;
      }
    }
  }
  return -1;
};

console.log(strStr('sadbutsad', 'sad'));
console.log(strStr('prajwal_aradhya', '_arad')); //7
console.log(strStr('____aradhya', '__arad')); //2