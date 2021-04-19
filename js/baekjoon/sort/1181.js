// input 관리
const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
let N = input();
let array = [];
while (N--) {
  array.push(input());
}
solution(array);

function solution(array) {
  array.sort((a, b) => {
    if (a.length == b.length) {
      return a < b ? -1 : 1;
    }
    return a.length - b.length;
  });
  let answer = array.filter((ele, idx) => {
    return array.indexOf(ele) === idx;
  });
  for (let i of answer) {
    console.log(i);
  }
}
