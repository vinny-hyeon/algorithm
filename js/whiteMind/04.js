function solution(r, c) {
  const dp = Array.from({ length: r }, (x) =>
    Array.from({ length: c }, (x) => 1)
  );
  for (let i = 1; i < r; i++) {
    for (let j = 1; j < c; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[r - 1][c - 1];
}

let R = 2;
let C = 4;
solution(R, C);
