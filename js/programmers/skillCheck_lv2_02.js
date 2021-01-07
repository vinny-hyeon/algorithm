// 구명보트
function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => b - a);
  let left = 0;
  let right = people.length - 1;
  for (left; left <= right; left++) {
    var sum = people[left] + people[right];
    if (sum <= limit) right--;
    answer++;
  }
  if (left === right) answer++;
  return answer;
}
people = [70, 50, 80, 50];
limit = 100;
solution(people, limit);
