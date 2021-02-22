const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `10
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let N = input();

solution(N);

function solution(N) {
  const a = [0, 0];

  const countDiv = (num) => {
    let isTwo = true;
    let isFive = true;
    while (true) {
      isTwo = false;
      isFive = false;
      if (num % 2 === 0) {
        a[0]++;
        num = num / 2;
        isTwo = true;
      }
      if (num % 5 === 0) {
        a[1]++;
        num = num / 5;
        isFive = true;
      }
      if (isTwo == false && isFive == false) break;
    }
  };

  for (let i = 2; i <= N; i++) {
    countDiv(i);
  }
  console.log(Math.min(...a));
}
