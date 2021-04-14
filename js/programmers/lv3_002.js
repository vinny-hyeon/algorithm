// 베스트앨범

function solution(genres, plays) {
  var answer = [];
  var obj = {};
  genres.forEach((genre, idx) => {
    typeof obj[genre] === "undefined"
      ? (obj[genre] = plays[idx])
      : (obj[genre] += plays[idx]);
  });
  console.log(obj);

  let sortobj = [];
  for (let i in obj) {
    sortobj.push([i, obj[i]]);
  }
  sortobj.sort(function (a, b) {
    return b[1] - a[1];
  });

  let bestGenre = [];
  for (let i = 0; i < sortobj.length; i++) {
    bestGenre.push(sortobj[i][0]);
  }
  var data = [];
  for (let i = 0; i < genres.length; i++) {
    if (bestGenre.includes(genres[i])) data.push([genres[i], plays[i], i]);
  }
  data.sort(function (a, b) {
    return b[1] - a[1];
  });
  console.log(data);
  data.forEach((ele) => {
    let index = bestGenre.indexOf(ele[0]) * 2;
    typeof answer[index] === "undefined"
      ? (answer[index] = ele[2])
      : typeof answer[index + 1] === "undefined"
      ? (answer[index + 1] = ele[2])
      : null;
  });
  return answer.filter((ele) => typeof ele !== "undefined");
}

const genres = [
  "lemon",
  "classic",
  "pop",
  "classic",
  "classic",
  "tank",
  "classic",
  "classic",
  "classic",
  "lemon",
];
const plays = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
solution(genres, plays);
