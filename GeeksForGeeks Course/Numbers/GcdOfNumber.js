/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
var gcd = (a, b) => { // Time - O( min(a, b) )
  let ans = Math.min(a, b);
  while (ans > 0) {
    if (a % ans == 0 && b % ans == 0) {
      break;
    }
    ans--;
  }
  return ans;
};

/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
var gcdFast = (a, b) => {
  if (b == 0) return a;
  return gcd(b, a % b);
};

console.log(gcdFast(10, 15));