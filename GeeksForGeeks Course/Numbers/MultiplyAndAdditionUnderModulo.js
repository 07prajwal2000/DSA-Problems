/**
 * 
 * @param {BigInt} a 
 * @param {BigInt} b 
 * @returns 
 */
var multiplicationUnderModulo = (a, b) => {
	// code here
	a = BigInt(a);
	b = BigInt(b);
	const m = BigInt(1e9 + 7);
	return ((a % m) * (b % m)) % m;
}

/**
 * 
 * @param {BigInt} a 
 * @param {BigInt} b 
 * @returns 
*/
var additionUnderModulo = (a, b) => {
	// code here
	a = BigInt(a);
	b = BigInt(b);
	const m = BigInt(1e9 + 7);
	return ((a % m) + (b % m)) % m;
}
console.log(multiplicationUnderModulo(92233720368547758, 92233720368547758));

console.log(additionUnderModulo(92233720368547758, 92233720368547758));