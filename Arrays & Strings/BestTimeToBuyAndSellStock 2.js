/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let i = 0;
  let bought = 0;

	while (i < prices.length) {
		if (prices[i] > prices[i - 1]) {
      bought += (prices[i] - prices[i-1]);
		}
    i++;
	}
  return bought;
};

console.log(maxProfit([8,6,4,3,3,2,3,5,8,3,8,2,6]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit([ 1, 5, 8, 3, 2, 2])); // 4 + 
