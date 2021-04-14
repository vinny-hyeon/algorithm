const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `55-50+40
`
).split("\n");

let input = stdin[0];

solution(input);

function solution(input) {
  var newArr = input.split("-");
  var arr = [];
  for (let i of newArr) {
    let temp = 0;
    let value = i.split("+");
    for (let j of value) {
      temp += parseInt(j);
    }
    arr.push(temp);
  }
  var answer = arr.shift();

  for (let i of arr) {
    answer -= i;
  }
  console.log(answer);
}
