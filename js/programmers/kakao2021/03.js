// 효율성 0
function solution(info, query) {
  var answer = [];
  info = info.map((ele) => ele.split(" "));
  query.forEach((ele) => {
    let lang = ele.split(" and ")[0];
    let kind = ele.split(" and ")[1];
    let exp = ele.split(" and ")[2];
    let soul = ele.split(" and ")[3].split(" ")[0];
    let score = ele.split(" and ")[3].split(" ")[1];
    let result = 0;
    for (let i = 0; i < info.length; i++) {
      if (
        (lang == info[i][0] || lang == "-") &&
        (kind == info[i][1] || kind == "-") &&
        (exp == info[i][2] || exp == "-") &&
        (soul == info[i][3] || soul == "-") &&
        parseInt(score) <= parseInt(info[i][4])
      ) {
        result++;
      }
    }
    answer.push(result);
  });
  return answer;
}

const info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];

const query = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];
solution(info, query);
