function dfs() {
  const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"],
  };

  let need_visit = [];
  let visited = [];

  need_visit.push("A");
  while (need_visit.length !== 0) {
    let node = need_visit.pop();
    if (!visited.includes(node)) {
      visited.push(node);
      need_visit = need_visit.concat(graph[node]);
    }
  }
  console.log(visited);
}
dfs();
