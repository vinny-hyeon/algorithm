const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `5
1 3 2 -1
2 4 4 -1
3 1 2 4 3 -1
4 2 4 3 3 5 6 -1
5 4 6 -1
`
).split("\n");
// 그래프 문제였으면 어려웠을듯

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const nodeNum = input();
const connect = {};
for (let i = 1; i <= nodeNum; i++) {
  connect[i] = [];
}
for (let i = 0; i < nodeNum; i++) {
  let temp = input().split(" ");
  for (let j = 1; j < temp.length; j = j + 2) {
    if (temp[j] == -1) {
      break;
    }
    connect[temp[0]] = connect[temp[0]].concat([temp[j], temp[j + 1]]);
  }
}
console.log(connect);

function solution() {
  // DFS
  const stack = [];
  const visited_city = [];
  let max = 0;
  stack.push("1");
  while (stack.length !== 0) {
    let node = stack.pop();
    visited_city.push(node);
    const data = connect[node];
    for (let i = 0; i < data.length; i += 2) {
      if (visited_city.indexOf(data[i]) == -1) {
        stack.push(data[i]);
        max += parseInt(data[i + 1]);
      }
    }
  }
  console.log(max, visited_city);
  // backtracking하는 법 공부하기 //
}
solution();
