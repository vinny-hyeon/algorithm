// 멀쩡한 사각형
// 전체 정사각형 횟수 - 평행선에 대각선이 닿는 횟수
function solution(w, h) {
  const getMinus = (w, h) => {
    let i = 1;
    let result = 0;
    while (true) {
      let check = (h / w) * i;
      if (check > h) break;
      if (check % 1 == 0 && check <= h) {
        result++;
      }
      i++;
    }
    return result;
  };
  var size = w * h;
  var minus = w + h - getMinus(w, h);
  return size - minus;
}
let w = 3;
let h = 5;
// solution(w, h);
console.log((77 / 12) * 11);
