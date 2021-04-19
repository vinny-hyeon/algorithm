const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `5 7 3
0 2 4 4
1 1 2 5
4 0 6 2
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
let [M, N, K] = input()
  .split(" ")
  .map((ele) => parseInt(ele));
let coord = [];
while (K--) {
  coord.push(
    input()
      .split(" ")
      .map((ele) => parseInt(ele))
  );
}
solution(M, N, coord);

function solution(M, N, coord) {
  let answerNum = 0;
  let answerSize = [];
  let newMap = [];
  for (let i = 0; i < M; i++) {
    let row = [];
    for (let j = 0; j < N; j++) {
      row.push(0);
    }
    newMap.push(row);
  }

  for (let i = 0; i < coord.length; i++) {
    for (let x = coord[i][0]; x < coord[i][2]; x++) {
      for (let y = coord[i][1]; y < coord[i][3]; y++) {
        newMap[y][x] = -1;
      }
    }
  }
  // DFS
  const DFS = (i, j) => {
    let stack = [];
    // 상 하 좌 우
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, -1, 1];
    stack.push(i);
    stack.push(j);
    let size = 1;
    newMap[i][j] = -1;

    while (stack.length > 0) {
      let x = stack.pop();
      let y = stack.pop();

      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx < N && nx >= 0 && ny < M && ny >= 0 && newMap[ny][nx] === 0) {
          stack.push(ny);
          stack.push(nx);
          newMap[ny][nx] = -1;
          size++;
        }
      }
    }
    return size;
  };
  // M == 5 N == 7
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (newMap[i][j] == -1) continue;
      answerSize.push(DFS(i, j));
      answerNum++;
    }
  }
  answerSize.sort((a, b) => a - b);
  console.log(answerNum);
  console.log(...answerSize);
}
