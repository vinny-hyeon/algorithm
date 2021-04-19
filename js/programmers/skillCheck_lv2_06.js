function solution(s) {
  console.log(
    Math.min(...s.split(" ").map((ele) => parseInt(ele))) +
      " " +
      Math.max(...s.split(" ").map((ele) => parseInt(ele)))
  );
}
let s = "-1 -2 -3 -4";
solution(s);
