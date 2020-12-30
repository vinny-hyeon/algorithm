// 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

const koreaWidth = nationWidth.korea;
delete nationWidth.korea;

const entry = Object.entries(nationWidth);
const values = Object.values(nationWidth);
let maxWidth = Math.max(...values);
let item = [];

for (let i in entry) {
  if (maxWidth > Math.abs(entry[i][1] - koreaWidth)) {
    maxWidth = Math.abs(entry[i][1] - koreaWidth);
    item = entry[i];
  }
}
console.log(item[0], item[1] - koreaWidth);
