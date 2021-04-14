function solution(n, record) {
  var answer = [];
  let newRecord = [];
  record.forEach((ele) => {
    let s = ele.split(" ");
    newRecord.push(s);
  });
  newRecord.sort((a, b) => a[0] - b[0]);
  // 중복 제거하면서 5개 유지하면서 넣기
  let idx = 0;
  for (let server = 1; server <= n; server++) {
    let temp = [];
    for (let i = idx; i < newRecord.length; i++) {
      if (newRecord[i][0] != server) {
        idx = i;
        break;
      }
      if (temp.length < 5 && temp.includes(newRecord[i][1])) continue;
      else if (
        temp.length >= 5 &&
        temp.slice(temp.length - 5, temp.length).includes(newRecord[i][1])
      )
        continue;
      temp.push(newRecord[i][1]);
    }
    if (temp.length > 5) answer.push(temp.slice(temp.length - 5, temp.length));
    else answer.push(...temp);
  }
  let result = [];
  for (let i = 0; i < answer.length; i++) {
    result = result.concat(answer[i]);
  }
  console.log(result);
  return answer;
}

let n = 4;
let record = [
  "1 a",
  "1 b",
  "1 abc",
  "3 b",
  "3 a",
  "1 abcd",
  "1 abc",
  "1 aaa",
  "1 a",
  "1 z",
  "1 q",
  "3 k",
  "3 q",
  "3 z",
  "3 m",
  "3 b",
];
solution(n, record);
