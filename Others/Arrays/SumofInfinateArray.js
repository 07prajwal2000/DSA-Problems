/**
 * 
 * @param {number[]} arr 
 * @param {number} start 
 * @param {number} end 
 */
function SumOfInfinate(arr, start, end) {
  const mod = 1e9 + 7;
  let startIndex = (start - 1) % arr.length;
  const iterations = end - start + 1;
  let sum = 0;
  for (let i = 0; i < iterations; i++) {
    sum += arr[startIndex];
    startIndex ++;
    startIndex %= arr.length;
  }
  return sum % mod;
}

console.log(SumOfInfinate([5, 2, 6, 9], 1, 5));
console.log(SumOfInfinate([5, 2, 6, 9], 10, 13));
console.log(SumOfInfinate([5, 2, 6, 9], 7, 11));
console.log(SumOfInfinate([1, 2, 3], 1, 3));
console.log(SumOfInfinate([1, 2, 3], 1, 5));
console.log(SumOfInfinate([10], 1, 1));
console.log(SumOfInfinate([10], 3, 5));
console.log(SumOfInfinate([10], 1, 2));
console.log(SumOfInfinate([11], 1, 2));

(function () {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');

  var input_stdin = "";
  var input_stdin_array = "";
  var input_currentline = 0;

  process.stdin.on('data', function (data) {
  input_stdin += data;
  });

  process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();    
  });

  function readLine() {
  return input_stdin_array[input_currentline++];
  }

  const mod = 1e9 + 7;
  function main() {
      const totalIters = parseInt(readLine());


      for (let i = 0; i < totalIters; i++) {
          // const answer = [];
          parseInt(readLine());
          const arr = readLine().split(' ').map(x => parseInt(x));
          const totalTestCases = parseInt(readLine());
          
          let ans = '';
          for (let i = 0; i < totalTestCases; i++) {
              const [startIndex, endIndex] = readLine().split(' ').map(x => parseInt(x));
              ans += (SumOfInfinate(arr, startIndex, endIndex) % mod).toString() + ' ';
          }
          console.log(ans.trim());
      }
  }

  function SumOfInfinate(arr, start, end) {
    let startIndex = (start - 1) % arr.length;
    const iterations = end - start + 1;
    let sum = 0;
    for (let i = 0; i < iterations; i++) {
      sum += arr[startIndex];
      startIndex ++;
      startIndex %= arr.length;
    }
    return sum;
  }
})// from portal