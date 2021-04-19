// 큰 수 만들기
// split과 splice 단일문장에서 쓰면 논리적으로 꼬임

// 재귀로 할 경우 n = 1000000 이라서 런타임오류 발생
function newProb(number, k, idx) {
  if (k === 0) return number;
  if (idx === number.length - 1) {
    return number.slice(0, number.length - k);
  }
  if (number[idx] < number[idx + 1]) {
    let arr = number.split("");
    arr.splice(idx, 1);
    number = arr.join("");
    return newProb(number, --k, idx === 0 ? 0 : --idx);
  } else if (number[idx] >= number[idx + 1]) {
    return newProb(number, k, ++idx);
  }
}

// 배열 순차적으로 탐색하면 test10에서 시간초과 발생
function solution1(number, k) {
  var answer = "";
  let idx = 0;
  let arr = number.split("");
  while (k !== 0) {
    // 또 다른 종료조건
    if (idx >= arr.length - 1) {
      number = arr.join("");
      answer = number.slice(0, number.length - k);
      return answer;
    }

    if (arr[idx] < arr[idx + 1]) {
      arr.splice(idx, 1);
      k--;
      if (idx === 0) {
        idx = 0;
        continue;
      }
      idx--;
      continue;
    }
    idx++;
  }
  answer = arr.join("");
  return answer;
}

function solution(number, k) {
  let answer = "";
  let stack = [];
  for (let i = 0; i < number.length; i++) {
    while (stack.length != 0) {
      if (k === 0) break;
      if (stack[stack.length - 1] < number[i]) {
        k--;
        stack.pop();
      } else break;
    }
    stack.push(number[i]);
  }
  answer = stack.join("").slice(0, number.length - k);
  console.log(answer);
  return answer;
}
let number = "4177252841";
let k = 4;
solution(number, k);
