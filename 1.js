// Run by Node.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let N = 0;
let duration = "";
let input = [];

rl.on("line", function (line) {
  if (count === 0) {
    [N, duration] = line.split(" ");
  } else {
    input.push(line);
  }
  count++;
  if (count == N + 1) {
    rl.close();
  }
}).on("close", function () {
  if (N == 1) {
    console.log("1 1");
    process.exit();
  }

  let totalSec = 0;
  duration.split(":").forEach((ele, idx) => {
    totalSec += parseInt(ele) * Math.pow(60, 2 - idx);
  });
  const minToSec = (time) => {
    let sec = 0;
    time.split(":").forEach((ele, idx) => {
      sec += parseInt(ele) * Math.pow(60, 1 - idx);
    });
    return sec;
  };

  const arr = [];
  const period = [];
  let startpos = 1;
  let endpos = 1;
  arr.push(minToSec(input[0]));
  for (let i = 1; i < N; i++) {
    let sum = arr.reduce((acc, cur) => acc + cur);
    if (sum < totalSec) {
      arr.push(minToSec(input[i]));
      endpos++;
    } else {
      if (minToSec(input[i]) == 0) {
        arr.push(minToSec(input[i]));
        endpos++;
      } else {
        let removedTime = 0;
        while (true) {
          removedTime += arr.shift();
          startpos++;
          if (removedTime >= minToSec(input[i])) {
            arr.push(minToSec(input[i]));
            endpos++;
            break;
          }
        }
      }
    }
    period.push([startpos, endpos]);
  }
  let answerL = 0;
  let answerS = 0;
  period.forEach((time) => {
    let dur = time[1] - time[0] + 1;
    if (dur > answerL) {
      answerL = dur;
      answerS = time[0];
    }
  });
  console.log(answerL + " " + answerS);
  process.exit();
});
