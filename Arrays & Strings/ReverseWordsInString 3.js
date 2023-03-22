/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  s = s.split(' ');
  let rev = '';
  for (let i=0; i<s.length; i++) {
      const ele = s[i];
      rev += reverse(ele) + ' ';
  }
  return rev.trim();
};

const reverse = (s) => {
  let str = '';
  for (let i = s.length - 1; i >= 0; i--) {
    str += s[i];
  }
  return str;
};

console.log(reverseWords('God Ding'));