// 행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
// 곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.
let a = [
  [1, 2],
  [2, 4],
];

let b = [
  [1, 0],
  [0, 3],
];

let answer = [];

if (a[0].length === b.length) {
  for (let i = 0; i < a.length; i++) {
    let row = [];
    for (let j = 0; j < b.length; j++) {
      let ele = 0;
      for (let k = 0; k < a[i].length; k++) {
        ele += a[i][k] * b[k][j];
      }
      row.push(ele);
    }
    answer.push(row);
  }
} else {
  console.log(-1);
}
console.log(answer);
