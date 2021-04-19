const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `7
6
1 2
2 3
1 5
5 2
5 6
4 7
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
// 데이터 가공 양방향으로 하기
let computerNum = input();
let connectNum = input();
const connect = {};
for (let i = 0; i < connectNum; i++) {
  let temp = input().split(" ");
  if (Object.keys(connect).indexOf(temp[0]) !== -1) {
    connect[temp[0]].push(temp[1]);
  } else {
    connect[temp[0]] = [];
    connect[temp[0]].push(temp[1]);
  }
  if (Object.keys(connect).indexOf(temp[1]) !== -1) {
    connect[temp[1]].push(temp[0]);
  } else {
    connect[temp[1]] = [];
    connect[temp[1]].push(temp[0]);
  }
}
//using dfs
function solution() {
  let answer = -1;
  let stack = [];
  const visited_computer = [];

  stack.push("1");
  while (stack.length !== 0) {
    let node = stack.pop();
    if (visited_computer.indexOf(node) === -1) {
      visited_computer.push(node);
      answer++;
      if (typeof connect[node] !== "undefined") {
        stack = stack.concat(connect[node]);
      }
    }
  }
  console.log(answer);
}

solution();
