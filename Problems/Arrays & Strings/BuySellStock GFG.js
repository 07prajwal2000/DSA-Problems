var stockBuySell = (a, n) => {
	
	let buy = 0, sell = 0;
  let ans = [];
	for (let i = 0; i < n - 1; i++) {
		if (a[i + 1] > a[i]) {
      sell++;
    } else {
      if (sell > buy) {
        ans.push([buy, sell]);
      }
      buy = i + 1;
      sell = i + 1;
    }
	}
  if (sell > buy) {
    ans.push([buy, sell]);
  }
	return ans;
};

console.log(stockBuySell([100, 180, 260, 310, 40, 535, 695], 7));