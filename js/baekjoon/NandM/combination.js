const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `5 2`
).split(" ");

const [N, M] = stdin;

// DFS
solution(N, M);
function solution(N, M) {
  const dfs = (L, pivot) => {
    // 종료조건
    if (L == M) console.log(...result);
    else {
      for (let i = pivot; i < N; i++) {
        result[L] = i + 1;
        dfs(L + 1, i + 1);
      }
    }
  };

  const result = Array.from({ length: M }, () => 0);
  dfs(0, 0);
}
