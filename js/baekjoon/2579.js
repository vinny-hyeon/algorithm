const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `6
10
20
15
25
10
20
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
let N = input();
let num = [];
while (N--) {
  num.push(parseInt(input()));
}
solution(num);

function solution(num) {
  var dp = [];
  dp.push(num[0]);
  dp.push(num[1] + num[0]);
  dp.push(Math.max(num[0] + num[2], num[1] + num[2]));
  for (let i = 3; i < num.length; i++) {
    dp.push(Math.max(num[i] + dp[i - 2], num[i] + num[i - 1] + dp[i - 3]));
  }
  console.log(dp[num.length - 1]);
}
