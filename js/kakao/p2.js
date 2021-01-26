function solution(m, v) {
  var answer = 1;
  let stack = [];
  stack.push(m - v[0]);
  v.shift();
  for (let block of v) {
    let isNewFloor = true;
    let start = stack.length - 1;
    for (let floor = stack.length - 1; floor >= 0; floor--) {
      if (block <= stack[floor]) {
        start--;
      } else {
        break;
      }
    }

    for (let floor = start + 1; floor < stack.length; floor++) {
      if (block <= stack[floor]) {
        isNewFloor = false;
        stack[floor] = stack[floor] - block;
        break;
      }
    }
    if (isNewFloor) {
      stack.push(m - block);
      answer++;
    }
  }
  return answer;
}

m = 4;
v = [4, 3, 2, 3, 1];
solution(m, v);
