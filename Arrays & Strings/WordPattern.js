/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(' ');
  if (pattern.length !== words.length) return false;

  const charToWord = new Map();
  const wordToChar = new Map();
  
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const c = pattern[i];

    if (wordToChar.has(word) && wordToChar.get(word) !== c) return false;
    if (charToWord.has(c) && charToWord.get(c) !== word) return false;
    
    wordToChar.set(word, c);
    charToWord.set(c, word);
  }
  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
