function solution(orders, course) {
  var answer = [];
  orders.sort((a, b) => a.length - b.length);
  for (let pivot = 0; pivot < orders.length; pivot++) {
    for (let comp = pivot + 1; comp < orders.length; comp++) {
      //   for(let i = 0; i < course.length; i++){
      //       if(course[i] > pivot.length) break;
      //   }
    }
  }
  return answer;
}
let orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
let course = [2, 3, 4];
solution(orders, course);
