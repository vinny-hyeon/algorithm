// X
const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `9
26 40 83
49 60 57
13 89 99
10 20 30
30 40 50
1000 10 300
10 2000 3000
10 20 3000
30 100 20
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
let N = input();
let num = [];
while (N--) {
  num.push(
    input()
      .split(" ")
      .map((ele) => parseInt(ele))
  );
}
solution(num);

function solution(num) {
  var dp = [];
  var color = [];
  dp.push(Math.min(...num[0]));
  let temp = 10000;
  let tempC;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === j) continue;
      if (temp > num[0][i] + num[1][j]) {
        temp = num[0][i] + num[1][j];
        tempC = i;
      }
    }
  }
  dp.push(temp);
  color.push(tempC);

  for (let nth = 2; nth < num.length; nth++) {
    temp = 10000;
    for (let i = 0; i < 3; i++) {
      if (i === color[nth - 2]) continue;
      for (let j = 0; j < 3; j++) {
        if (i === j) continue;
        if (temp > num[nth - 1][i] + num[nth][j]) {
          temp = num[nth - 1][i] + num[nth][j];
          tempC = i;
        }
      }
    }
    dp.push(dp[nth - 2] + temp);
    color.push(tempC);
  }
  console.log(color);
  console.log(dp);
  console.log(dp[num.length - 1]);
}
