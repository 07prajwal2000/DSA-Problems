// CPP - O(n) soln
// problem - https://www.codingninjas.com/codestudio/problems/traffic_6682625?leftPanelTab=0
// int traffic(int n, int m, vector<int> arr) {
// 	int c = 0, ans = 0;
// 	int j = 0;
// 	for (int i = 0; i < n; i++) {
// 		while (j < n && c <= m) {
// 			if (arr[j] == 0) {
// 				c++;
// 				if (c > m) {
// 					c--;
// 					break;
// 				}
// 			}
// 			j++;
// 		}
// 		ans = max(ans, j - i);
// 		if (arr[i] == 0) c--;
// 	}
// 	return ans;
// }


var traffic = (n, m, arr) => {
	let maxZ = 0;
	for (let i = 0; i < n; i++) {
		let j = i;
		let zeros = 0;
		let wildcard = m;
		while (j < n) {
			if (arr[j] == 1) {
				zeros++;
			} else if (wildcard > 0) {
				zeros++;
				wildcard--;
			} else {
				maxZ = Math.max(maxZ, zeros);
				break;
			}
      maxZ = Math.max(maxZ, zeros);
			j++;
		}
	}
	return maxZ;
};

console.log(traffic(3, 1, [0, 1, 1]));

console.log(
	traffic(
		36,
		32,
		[
			0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1,
			1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
		]
	)
);
