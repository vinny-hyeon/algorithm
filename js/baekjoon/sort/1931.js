const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `11
5 9
6 10
8 11
8 12
2 13
12 14
1 3
2 3
0 3
5 7
3 8
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
let N = input();
let num = [];
while (N--) {
  num.push(
    input()
      .split(" ")
      .map((ele) => parseInt(ele))
  );
}
solution(num);

function solution(num) {
  var answer = 0;
  num.sort((a, b) => {
    if (a[1] == b[1]) {
      return a[0] - b[0];
    } else return a[1] - b[1];
  });
  let now = -1;
  for (let i = 0; i < num.length; i++) {
    if (num[i][0] >= now) {
      answer++;
      now = num[i][1];
    }
  }
  console.log(answer);
}
