const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `18
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
let N = input();

solution(N);

function solution(N) {
  let dp = Array.from({ length: N }, () => 0);
  dp[3] = 1;
  dp[5] = 1;
  for (let i = 6; i <= N; i++) {
      
  }
}
