// 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.
let a = "aaabbbbcdddd";
let answer = "";
let acc = 1;
for (let i = 0; i < a.length; i++) {
  if (a[i] == a[i + 1]) {
    acc++;
  } else if (a[i] != a[i + 1]) {
    answer = answer + a[i] + acc;
    acc = 1;
  }
}
console.log(answer);
