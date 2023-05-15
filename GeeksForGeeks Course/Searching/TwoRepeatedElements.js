var findRepeatedElement = (arr) => {
	let slow = arr[0], fast = arr[0];
	do {
		slow = arr[slow];
		fast = arr[arr[fast]];
	} while(slow != fast)
	
	fast = arr[0];
	while (slow != fast) {
		slow = arr[slow];
		fast = arr[fast];
	}
	return fast;
};

console.log("INPUT - [1,2,3,4,2]\nRepeated Element - ", findRepeatedElement([1,2,3,4,2]));

var twoRepeated = (a, N) => {
	let ans = Array(N + 1).fill(0);
	let res = [];
	for (let i of a) {
		if (res.length == 2) break;
		ans[i]++;
		if (ans[i] == 2) {
			res.push(i);
		}
	}
	return res;
};

console.log(twoRepeated([1,2,1,3,4,3], 4));