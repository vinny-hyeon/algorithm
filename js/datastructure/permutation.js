// 순열
// 3P2

// 1 2, 1 3, 2 1, 2 3, 3 1, 3 2  6개

// DFS, CheckOutList이용

let n = [1, 2, 3];
let r = 1;
let result = Array.from({ length: r }, () => 0);
let checkList = Array.from({ length: n.length }, () => 0);
function DFS(L) {
  // 종료조건: 명확한경우 (애매하면 BFS)
  if (L == r) {
    console.log(result);
  } else {
    for (let i in n) {
      if (checkList[i] == 0) {
        result[L] = n[i];
        checkList[i] = 1;
        DFS(L + 1);
        checkList[i] = 0;
      }
    }
  }
}

function permutation() {
  DFS(0);
}
permutation();
