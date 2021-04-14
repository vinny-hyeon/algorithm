const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `5
1 1 1 6 0
2 7 8 3 1
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
let N = input()
  .split(" ")
  .map((ele) => parseInt(ele));
let A = [];
let B = [];

A.push(
  ...input()
    .split(" ")
    .map((ele) => parseInt(ele))
);
B.push(
  ...input()
    .split(" ")
    .map((ele) => parseInt(ele))
);
solution(N, A, B);
function solution(N, A, B) {
  let order = B.map((ele, idx) => [ele, idx])
    .sort((a, b) => a[0] - b[0])
    .map((ele) => ele[1]);
  A.sort((a, b) => b - a);
  let answer = 0;
  A.forEach((ele, idx) => {
    answer += ele * B[order[idx]];
  });
  console.log(answer);
}
