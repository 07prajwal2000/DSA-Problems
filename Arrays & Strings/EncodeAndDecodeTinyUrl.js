const map = new Map();

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  let hash = '';
  const hashLength = 8;
  for (let i = 0; i < hashLength; i++) {
    let rand = parseInt(Math.random() * 100);
    if (rand % 2 === 0) {
      hash += random(1, 9).toString();
    } else {
      hash += String.fromCharCode('a'.charCodeAt(0) + random(1, 26));
    }
  }
  const url = 'https://tinyurl.com/' + hash;
  map.set(hash, longUrl);
  return url;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  const hash = shortUrl.substring(shortUrl.length - 8);
  const originalUrl = map.get(hash);
  return originalUrl;
};

/**
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function random(min, max) {
	return parseInt(min + Math.random() * (max - min));
}
const encodedUrl = encode('https://www.w3schools.com/jsref/jsref_fromcharcode.asp');
console.log(encodedUrl);
const decodedUrl = decode(encodedUrl);
console.log(decodedUrl);