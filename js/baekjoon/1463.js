const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `10
`
).split("\n");

let input = parseInt(stdin[0]);

solution(input);

function solution(input) {
  var answer = 0;
  var idx = 2;
  var dp = [];
  dp.push(-1);
  dp.push(0);

  while (true) {
    let temp = [];
    if (dp.length - 1 === input) break;

    // +1 을 한 경우
    temp.push(dp[idx - 1] + 1);
    // *2 를 한 경우
    if (idx % 2 === 0) temp.push(dp[idx / 2] + 1);
    // *3 을 한 경우
    if (idx % 3 === 0) temp.push(dp[idx / 3] + 1);

    dp.push(Math.min(...temp));
    idx++;
  }
  console.log(dp[dp.length - 1]);
}
