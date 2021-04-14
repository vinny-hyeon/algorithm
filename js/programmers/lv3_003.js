// Network
function solution(n, computers) {
  var answer = 0;
  var stack = [];
  var visited = [];
  for (let i = 0; i < n; i++) {
    if (~visited.indexOf(i)) continue;
    else {
      answer++;
      stack.push(i);
    }
    while (stack.length) {
      var num = stack.pop();
      computers[num].forEach((ele, idx) => {
        if (ele === 1 && !~visited.indexOf(idx)) {
          visited.push(idx);
          stack.push(idx);
        }
      });
    }
  }
  return answer;
}

let n = 3;
let computers = [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
];
solution(n, computers);
