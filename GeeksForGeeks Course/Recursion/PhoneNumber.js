var possibleWords = (a, n) => {
	
	let phone = {
		2: "abc",
		3: "def",
		4: "ghi",
		5: "jkl",
		6: "mno",
		7: "pqrs",
		8: "tuv",
		9: "wxyz",
	};
	let ans = [];

	var f = (i, temp) => {
		if (i == n) {
			ans.push(temp);
			return;
		}
    let k = phone[a[i]];
		for (let j = 0; j < k.length; j++) {
			f(i + 1, temp + phone[a[i]][j]);
		}
	};
	f(0, "");
	return ans;
};

console.log(possibleWords([2, 3, 4], 3));