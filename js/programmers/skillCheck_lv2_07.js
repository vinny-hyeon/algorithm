function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  A.forEach((ele, idx) => {
    answer += ele * B[idx];
  });

  return answer;
}
let A = [1, 7, 20];
let B = [1, 7, 20];

solution(A, B);
