// 카펫
function solution(brown, yellow) {
  var answer = [];
  var area = brown + yellow;
  let width = 0;
  let heigth = 0;
  for (let i = 3; i <= Math.sqrt(area); i++) {
    if (area % i === 0) {
      width = area / i;
      heigth = i;
      if ((width + heigth) * 2 - 4 === brown) {
        return [width, heigth];
      }
    }
  }
}
const brown = 8;
const yellow = 1;
solution(brown, yellow);
