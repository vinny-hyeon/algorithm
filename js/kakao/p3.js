function solution(next_student) {
  var answer = next_student.map((ele) => 1);
  var cardSet = next_student.map((ele, idx) => [idx, ele - 1]);
  console.log(cardSet);
  while (true) {
    // 종료조건
    if (cardSet.map((ele) => ele[1]).every((val) => val === -1)) break;
    let newCardSet = cardSet.slice().map((ele) => (ele[0] = -1));
    cardSet.forEach((ele, idx) => {
      // -1인경우 아무도 안준다.
      if (ele[1] == -1) return;
      // 카드 주고 2장 이상 받은경우 idx 큰 카드 선택
      if (newCardSet[ele[1]][0] == -1) newCardSet[ele[1]][0] = ele[0];
      else {
        if (newCardSet[ele[1]][0] < ele[0]) newCardSet[ele[1]][0] = ele[0];
      }
    });
    // 자신의 카드 돌려받은경우 버린다.
    newCardSet.map((ele, idx) => {
      if (ele[0] == idx) return null;
      else return ele;
    });
    cardSet = newCardSet.slice();
    // 점수 계산
    cardSet.forEach((ele) => {
      answer[ele[0]]++;
    });
    console.log(answer);
  }
  return Math.max(...answer);
}

let next_student = [5, 9, 13, 1, 0, 0, 11, 1, 7, 12, 9, 9, 2];
solution(next_student);
