/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if (strs.length === 0) return [['']];
  if (strs.length === 1) return [[strs[0]]];
  const result = {};
  for (let str of strs) {
      let count = Array(26);
      
      for (let i = 0; i < count.length; i++) {
      count[i] = 0;
      }
      
      for (let s of str) {
      count[s.charCodeAt(0) - 'a'.charCodeAt(0)]++;
      }

      if (result[count]) {
      result[count].push(str);
      } else {
      result[count] = [str];
      }
  }
  return Object.values(result);
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"]);