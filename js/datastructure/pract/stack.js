// Stack
// 데이터를 제한적으로 접근할 수 있는 구조 - 가장 나중에 쌓은 데이터를 가장 먼저 빼낼 수 있는 데이터 구조
// LIFO 컴퓨터 내부의 프로세스 구조의 함수 동작 방식
// 장점: 구조 단순, 구현의 쉬움, 데이터 저장/읽기 속도가 빠름.
// 단점: 데이터 최대 갯수를 미리 정해야 한다. (JS의 경우 재귀 함수는 약 10000번 까지 호출 가능), 저장 공간의 낭비 가능성
// stack 구조
function recursive(data) {
  if (data < 0) console.log("end");
  else {
    console.log(data);
    recursive(data - 1);
    console.log("returned", data);
  }
}

recursive(5);
