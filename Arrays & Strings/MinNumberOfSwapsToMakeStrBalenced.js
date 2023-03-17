/**
 * @param {string} s
 * @return {number}
 */
 var minSwaps = function(s) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    count = c === '[' ? count - 1 : count + 1;
    max = Math.max(max, count);
  }
  return parseInt((max + 1) / 2)
};

console.log(minSwaps('][]['));