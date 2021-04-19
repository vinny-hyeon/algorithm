// 큐
// FIFO 멀티 태스킹을 위한 프로세스 스케쥴링 방식을 구현하기 위해 많이 사용된다.
// Enqueue: 큐에 데이터를 넣는다.
// Dequeue: 큐에서 데이터를 꺼낸다.

let queue = [];
// Enqueue
for (let i = 0; i < 5; i++) {
  queue.push(i);
  console.log(queue);
}
// Dequeue
while (queue.length !== 0) {
  queue.shift();
  console.log(queue);
}

// Priority 큐
// 우선순위가 높은 순서로 큐를 추출
let priority_queue = [];
priority_queue.push([5, "a"]);
priority_queue.push([1, "b"]);
priority_queue.push([10, "c"]);

const deqeue = (priority_queue) => {
  let minIndex = 99999;
  let pop_idx = -1;
  priority_queue.forEach((ele, idx) => {
    if (minIndex > ele[0]) {
      minIndex = ele[0];
      pop_idx = idx;
    }
  });
  priority_queue.splice(pop_idx, 1);
  console.log(priority_queue);
};

deqeue(priority_queue);
deqeue(priority_queue);
deqeue(priority_queue);
