function solution(s) {
  var answer = "";
  let arr = s.split(" ");
  function isAlpha(str) {
    var pattern = /^[a-zA-Z]+$/;
    return pattern.test(str) ? true : false;
  }

  answer = arr
    .map((ele) => {
      if (ele.length === 0) return;
      let temp = ele.slice().toLowerCase();
      if (isAlpha(temp[0])) {
        temp = temp.replace(temp[0], temp[0].toUpperCase());
      }
      return temp;
    })
    .join(" ");
  return answer;
}
let s = "3people unFollowed me";
solution(s);
