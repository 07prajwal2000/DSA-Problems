const str = 'A man, a plan, a canal: Panama';

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let j = s.length - 1;
    let i = 0;

    while (j > i) {
      while (j > i && !isAlphaNumeric(s[i])) {
        i++;
      }

      while (j > i && !isAlphaNumeric(s[j])) {
        j--;
      }
      
      if (s[i].toLowerCase() !== s[j].toLowerCase()) {
        return false;
      }
      i++;
      j--;
    }
    return true;
};

/**
 * 
 * @param {string} char 
 * @returns {boolean}
 */
function isAlphaNumeric(char) {
  const asciiVal = char.charCodeAt();
  
  return (asciiVal >= 'a'.charCodeAt() && asciiVal <= 'z'.charCodeAt()) || (asciiVal >= 'A'.charCodeAt() && asciiVal <= 'Z'.charCodeAt()) || (asciiVal >= '0'.charCodeAt() && asciiVal <= '9'.charCodeAt());
}

console.log(isPalindrome(str));