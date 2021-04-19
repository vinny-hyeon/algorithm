// 조이스틱 재귀로해도되려나? 어렵  

function treeMgmt(names) {
  let answer = [];
  Left(names, 0, answer);
  Right(names, 0, answer);
  return answer;
}

function Left(names, idx, answer) {
  // 모든 요소가 A이면 리턴
  if (names.every((ele) => ele == "A")) return;
  // idx가 음수면 idx 끝에서부터 거꾸로되도록 처리
  if (idx < 0) idx = names.length + idx;
  for(let i = idx; )
  let arr = names.slice();
}

function Right(names, idx, answer) {
  if (names.every((ele) => ele == "A")) return;
  if (idx < 0) idx = names.length + idx;

  let arr = names.slice();
}

function solution(names) {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var answer = 0;
  // 위아래 최소 움직임
  for (let i = 0; i < names.length; i++) {
    answer +=
      alpha.indexOf(names[i]) > 13
        ? 26 - alpha.indexOf(names[i])
        : alpha.indexOf(names[i]);
  }

  // 좌우 최소 움직임 (전부다 해봐야 하나?)
  answer = treeMgmt(names);
  return Math.min(...answer);
}

let names = "JEROEN";
solution(names);
