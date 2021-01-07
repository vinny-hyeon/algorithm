// 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고,
// 나머지 빈 부분에는 '='을 채워 넣어주세요.

let a = "hi";
let answer = "";
let j = 0;

for (let i = 0; i < 50; i++) {
  if (i < (50 - a.length) / 2) {
    answer += "=";
  } else if (i >= (50 + a.length) / 2) {
    answer += "=";
  } else {
    answer += a[j];
    j++;
  }
}
console.log(answer);
console.log(a.padStart(25 + a.length / 2, "=").padEnd(50, "="));
