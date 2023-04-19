/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
	let ans = [];
	
  var combination = (start, res) => {
    if (res.length === k) {
      ans.push([...res]);
      return;
    }
    for (let i = start; i <= n; i++) {
      res.push(i);
      combination(i + 1, res);
      res.pop();
    }
  };
  combination(1, []);
	return ans;
};

console.log(combine(4, 2));