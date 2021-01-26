const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `4
5
2 4 7 8 9
1
9
6
10 5 13 2 7 8
4
3 4 4 3
`
).split("\n");

solution();

function solution() {
  const input = (() => {
    let line = 0;
    return () => stdin[line++];
  })();
  let N = input();
  while (N--) {
    let M = input();
    let num = [];
    while (M--) {
      console.log(input());
    }
    // console.log(num);
  }
}
