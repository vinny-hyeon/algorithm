const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
let T = input();
while (T--) {
  let answer = 0;
  const [row, col, num] = input().split(" ");
  const yard = Array.from({ length: row }, (ele) =>
    Array.from({ length: col }, (ele) => 0)
  );
  for (let i = 0; i < num; i++) {
    const [x, y] = input().split(" ");
    yard[x][y] = 1;
  }

  const bfs = (i, j) => {
    if (yard[i][j] == 0) return;
    if (yard[i][j] == 1) {
      yard[i][j] = 0;
    }
    if (i + 1 < row && yard[i + 1][j] == 1) bfs(i + 1, j);
    if (j + 1 < col && yard[i][j + 1] == 1) bfs(i, j + 1);
    if (i - 1 >= 0 && yard[i - 1][j] == 1) bfs(i - 1, j);
    if (j - 1 >= 0 && yard[i][j - 1] == 1) bfs(i, j - 1);
  };
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (yard[i][j] === 1) {
        bfs(i, j);
        answer++;
      }
    }
  }
  console.log(answer);
}
