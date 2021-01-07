//코딩테스트 연습2020 KAKAO BLIND RECRUITMENT 문자열 압축

//두번째 풀이
function solution(s) {
  var answer = [];
  if (s.length === 1) return 1;
  for (let i = 1; i < s.length / 2 + 1; i++) {
    let sameNumber = 1;
    let same = s.slice(0, i);
    let temp = "";
    for (let check = 0; check < s.length; check = check + i) {
      if (check > 0) {
        if (same === s.slice(check, check + i)) {
          sameNumber++;
        } else {
          sameNumber !== 1
            ? (temp = temp + sameNumber + same)
            : (temp = temp + same);
          sameNumber = 1;
          same = "";
          for (let j = check; j < i + check; j++) {
            if (typeof s[j] === "undefined") break;
            same += s[j];
          }
        }
        if (check + i >= s.length) {
          sameNumber !== 1
            ? (temp = temp + sameNumber + same)
            : (temp = temp + same);
        }
      }
    }
    answer.push(temp);
  }
  return Math.min(...answer.map((ele) => ele.length));
}

// 처음 푼 풀이
// function solution(s) {
//   if (s.length == 1) {
//     return 1;
//   }
//   var answer = Array.from({ length: s.length / 2 }, () => "");
//   var token = "";
//   for (let i = 1; i <= s.length / 2; i++) {
//     token = s.slice(0, i);
//     let repeat = 1;
//     for (let j = i; j <= s.length; j = j + i) {
//       if (s.slice(j, j + i) === token) {
//         repeat++;
//       } else {
//         if (repeat > 1) answer[i - 1] = answer[i - 1] + repeat + token;
//         else answer[i - 1] = answer[i - 1] + token;
//         repeat = 1;
//         token = s.slice(j, j + i);
//       }
//       if (j + i > s.length) {
//         answer[i - 1] = answer[i - 1] + token;
//         break;
//       }
//     }
//   }
//   return Math.min(...answer.map((val) => val.length));
// }

let s = "aabbaccc";
solution(s);
