// 문제73 : 최단 경로 찾기
// 다음과 같이 노드의 연결 관계가 리스트 형태로 주어집니다. 그다음 경로를 구할 두 정점이 공백으로 구분되어 주어질 것입니다.
// 두 정점 사이를 이동할 수 있는 최단 거리를 출력하는 프로그램을 작성해 주세요.
// 이때 최단 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 갈 수 있는 가장 적은 간선의 수를 의미합니다.

graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

const [start, end] = ["A F".split(" ")[0], "A F".split(" ")[1]];

function mixLength(start, end, graph) {
  let queue = [start];
  let visited = [start];
  let count = -1;
  while (queue.length !== 0) {
    count++;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node === end) return count;

      for (let next_node in graph[node]) {
        if (!visited.includes(graph[node][next_node])) {
          queue.push(graph[node][next_node]);
          visited.push(graph[node][next_node]);
        }
      }
    }
  }
}

console.log(mixLength(start, end, graph));
