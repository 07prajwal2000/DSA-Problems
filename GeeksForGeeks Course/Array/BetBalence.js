var betBalance = (result) => {
	let amt = 4;
	let betting = 1;
	for (let c of result) {
		if (c == "W") {
			amt += betting;
			betting = 1;
		} else {
			amt -= betting;
			betting += betting;
		}
		if (amt <= 0) {
			return -1;
		}
	}
	return amt;
};

console.log(betBalance("WLWLLWLLWWLWWW"));
