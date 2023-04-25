function stockBuySell(a, n) {
	let buy = 0,
		sell = 0;
	let ans = []; // Pairs of [buy, sell] day as index.
	for (let i = 0; i < n - 1; i++) {
		if (a[i + 1] > a[i]) { // until we have profit we increment the sell day index.
			sell++;
		} else { // now we sell the stock, bcz current day's stock is went down. 
			if (sell > buy) { // here we check if sell Day is greater than buy day.
				ans.push([buy, sell]);
			}
			buy = i + 1; // now we move the buy and sell index to next day.
			sell = i + 1;
		}
	}
	if (sell > buy) {
		ans.push([buy, sell]); // at end we might be missed last one, 
	}
	return ans;
}
