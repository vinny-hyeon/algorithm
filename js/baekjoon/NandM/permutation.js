const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `5 2`
).split(" ");

const [N, M] = stdin;

// DFS
solution(N, M);
function solution(N, M) {
  const dfs = (L) => {
    // 종료조건
    if (L == M) console.log(...result);
    else {
      for (let i = 0; i < N; i++) {
        if (checkList[i] == 0) {
          result[L] = i + 1;
          checkList[i] = 1;
          dfs(L + 1);
          checkList[i] = 0;
        }
      }
    }
  };

  const result = Array.from({ length: M }, () => 0);
  const checkList = Array.from({ length: N }, () => 0);
  dfs(0);
}
