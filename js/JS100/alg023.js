// 이상한 369
// 369 게임을 하는데 조금 이상한 규칙이 있습니다. 3이나 6, 9 일 때만 박수를 쳐야합니다.
// 예를 들어 13, 16과 같이 3과 6, 9 만으로 된 숫자가 아닐 경우엔 박수를 치지 않습니다.
// 수현이는 박수를 몇 번 쳤는지 확인하고 싶습니다. 36일 때 박수를 쳤다면 박수를 친 횟수는 5번입니다.
// n을 입력하면 박수를 몇 번 쳤는지 그 숫자를 출력해주세요.

let num = "93";
let answer = 0;
for (let i = 1; i <= parseInt(num); i++) {
  let temp = (i + "").split("");
  let flag = true;
  temp.forEach((ele) => {
    if (!["3", "6", "9"].includes(ele)) flag = false;
  });
  if (flag) answer++;
}
console.log(answer);
