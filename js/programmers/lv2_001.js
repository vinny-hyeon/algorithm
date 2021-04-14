// 기능개발
function solution(progresses, speeds) {
  var answer = [];
  let queue = progresses.map((ele, idx) => {
    return (100 - ele) % speeds[idx] == 0
      ? parseInt((100 - ele) / speeds[idx])
      : parseInt((100 - ele) / speeds[idx]) + 1;
  });
  while (queue.length !== 0) {
    queue = queue.map((ele) => ele - 1);
    let value = 0;
    while (queue[0] <= 0) {
      queue.shift();
      value++;
    }
    value === 0 ? null : answer.push(value);
  }
  return answer;
}
const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];
solution(progresses, speeds);
