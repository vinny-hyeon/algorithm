const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `3
5 10 13
`
).split("\n");

let N = stdin[0];
let num = [];
while (N--) {
  num = stdin[1].split(" ").slice();
}
solution(num);
function solution(num) {
  let answer = 0;
  let temp = 0;
  num = num.sort((a, b) => a - b).map((ele) => parseInt(ele));
  for (let i = 0; i < num.length; i++) {
    temp += num[i];
    answer += temp;
  }
  console.log(answer);
}
