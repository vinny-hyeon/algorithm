const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `7
3 10
5 20
1 10
1 20
2 15
4 40
2 200
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
let N = input();

let arr = [];
while (N--) {
  arr.push(
    input()
      .split(" ")
      .map((ele) => parseInt(ele))
  );
}

solution(arr);
function solution(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    // tree 조합
  }
}
