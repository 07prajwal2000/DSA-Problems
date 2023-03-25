/**
  * @param {string[]} strs
  * @returns {string}
*/
function encode(strs) {
  let encoded = '';
  for (let c of strs) {
    encoded += `${c.length}#${c}`;
  }
  return encoded;
}

/**
 * 
 * @param {string} str 
 * @returns {string[]}
 */
function decode(str) {
  let decoded = [];
  let j = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == '#') {
      const len = parseInt(str.slice(j, i));

      const val = str.slice(i + 1, i + 1 + len);
      decoded.push(val);
      j = i + len + 1;
    }
  }
  return decoded;
}
const input = ["lint","code","love","you"];
const enc = encode(input);
console.log("ENCODED- ", enc);

const dec = decode(enc);
console.log("INPUT-   ", input);
console.log("DECODED- ", dec);