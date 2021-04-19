// 조합
// 3C2

// DFS 트리 이용
// 다음 Depth에서의 시작값

let n = [1, 2, 3];
let r = 2;
let result = Array.from({ length: r }, () => 0);

DFS(0, 0);

function DFS(L, BeginWith) {
  // 종료조건
  if (L == r) console.log(result);
  for (let i = BeginWith; i < n.length; i++) {
    result[L] = i;
    DFS(L + 1, i + 1);
  }
}
