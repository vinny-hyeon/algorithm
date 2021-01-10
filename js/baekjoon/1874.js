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
  let stack = [];
  let prevStack = 0;
  let order = 1;
  while (num.length !== 0) {
    if (num[0] >= prevStack) {
      if (order <= num[0]) {
        stack.push("+");
        if (order === num[0]) {
          stack.push("-");
          prevStack = num[0];
          num.shift();
        }
      }
      order++;
    } else {
      for (let ele of num) {
        if (num[0] < ele && ele < prevStack) {
          console.log("NO");
          return false;
        }
      }
      stack.push("-");
      num.shift();
    }
  }
  stack.forEach((ele) => console.log(ele));
  return stack;
}
