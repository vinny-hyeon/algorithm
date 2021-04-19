// Run by Node.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let totalItem = 0;
let totalQues = 0;
const relativeArr = [];
const questionArr = [];

rl.on("line", function (line) {
  if (count === 0) {
    [totalItem, totalQues] = line.split(" ").map(Number);
  } else if (count < totalItem) {
    relativeArr.push(line.split(" "));
  } else {
    questionArr.push(line.split(" "));
  }
  count++;
  if (count == totalItem + totalQues) {
    rl.close();
  }
}).on("close", function () {
  let obj = {};
  for (let i = 0; i < relativeArr.length; i++) {
    if (!obj[relativeArr[i][0]]) {
      obj[relativeArr[i][0]] = [];
    }
    if (obj[relativeArr[i][0]]) {
      obj[relativeArr[i][0]].push(relativeArr[i][1]);
    }
  }
  questionArr.forEach((ele) => {
    const keyNum = ele[0];
    const findNum = ele[1];
    let stack = [];
    let isFind = false;
    stack.push(keyNum);
    while (stack.length > 0) {
      let node = stack.pop();
      if (findNum == node) {
        console.log("yes");
        isFind = true;
        stack = [];
      } else {
        if (obj[node]) {
          stack = stack.concat(obj[node]);
        }
      }
    }
    if (!isFind) {
      console.log("no");
    }
  });
  process.exit();
});
