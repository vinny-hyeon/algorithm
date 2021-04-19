// 스택 수열

// input 관리
const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `8
4
3
6
8
7
5
2
1
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

// 알고리즘 구현
function solution(num) {
  let permutation = [];
  let prevStack = 0;
  let order = 1;
  while (num.length !== 0) {
    if (num[0] >= prevStack) {
      if (order <= num[0]) {
        console.log("+");
        if (order === num[0]) {
          console.log("-");
          prevStack = num[0];
          permutation.push(num.shift());
        }
      }
      order++;
    } else {
      if (!permutation.includes(num[0] + 1)) {
        console.log("NO");
        return false;
      }
      console.log("-");
      permutation.push(num.shift());
    }
  }
}
