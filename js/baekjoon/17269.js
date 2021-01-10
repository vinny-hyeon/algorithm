// 이름궁합 테스트
const score = [
  3,
  2,
  1,
  2,
  4,
  3,
  1,
  3,
  1,
  1,
  3,
  1,
  3,
  2,
  1,
  2,
  2,
  2,
  1,
  2,
  1,
  1,
  1,
  2,
  2,
  1,
];
// 알파벳 아스키 코드 이용해서 획 수로 변환
const getAlphaToScore = (alpha) => score[alpha.charCodeAt() - 65];

function solution(N, M, A, B) {
  let scoreArr = [];
  // 이름 번갈아 가면서 배열에 담기
  for (let i = 0; i < Math.max(N, M); i++) {
    N >= M
      ? i < M
        ? [
            scoreArr.push(getAlphaToScore(A[i])),
            scoreArr.push(getAlphaToScore(B[i])),
          ]
        : scoreArr.push(getAlphaToScore(A[i]))
      : i < N
      ? [
          scoreArr.push(getAlphaToScore(A[i])),
          scoreArr.push(getAlphaToScore(B[i])),
        ]
      : scoreArr.push(getAlphaToScore(B[i]));
  }
  // 궁합도 계산하기
  while (scoreArr.length > 2) {
    let size = scoreArr.length - 1;
    let temp = [];
    for (let i = 0; i < size; i++) {
      temp.push((scoreArr[i] + scoreArr[i + 1]) % 10);
    }
    scoreArr = temp.slice();
  }
  console.log(parseInt(scoreArr.join("")) + "%");
  return parseInt(scoreArr.join(""));
}

// 입력
const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `8 14
LEESIYUN MIYAWAKISAKURA
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input().split(" ").map(Number);
const [A, B] = input().split(" ");
solution(N, M, A, B);
