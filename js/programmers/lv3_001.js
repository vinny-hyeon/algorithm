// 디스크 컨트롤러
function solution(jobs) {
  var answer = 0;
  // 시작 시간의 기준으로 오름차순 정렬
  jobs.sort((a, b) => a[0] - b[0]);
  let time = 0;
  let heap = [];
  let isWorking = false;
  let workingTime = 0;
  let size = jobs.length;
  let delay = 0;
  while (true) {
    // 작업 진행 가능시간이 된 경우 일단 힙에 넣음
    if (jobs.length !== 0 && jobs[0][0] === time) {
      heap.push(jobs.shift());
      // 힙 정렬
      delay = heap[0][0];
      heap.sort((a, b) => a[1] - b[1]);
      console.log(heap);
    }

    if (!isWorking && heap.length > 0) {
      workingTime = heap.shift()[1];
      isWorking = true;
    }
    if (isWorking) {
      workingTime--;

      if (workingTime === 0) {
        isWorking = false;
      }
    }
    time++;
    if (workingTime === 0) {
      answer = answer + time - delay;
    }

    if (jobs.length === 0 && heap.length === 0 && isWorking === false) break;
  }
  console.log(parseInt(answer / size));
  return parseInt(answer / size);
}
let jobs = [
  [1, 8],
  [12, 6],
  [13, 6],
];
solution(jobs);
