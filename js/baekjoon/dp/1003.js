const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `10
35
20
39
11
23
0
7
15
19
28
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const dp = [
  { 0: 1, 1: 0 },
  { 0: 0, 1: 1 },
];
const T = parseInt(input());
for (let i = 0; i < T; i++) {
  const N = parseInt(input());
  if (dp.length - 1 < N) {
    for (let j = dp.length; j <= N; j++) {
      dp.push({
        0: dp[j - 1][0] + dp[j - 2][0],
        1: dp[j - 1][1] + dp[j - 2][1],
      });
    }
  }

  console.log(String(dp[N][0]) + " " + String(dp[N][1]));
}
