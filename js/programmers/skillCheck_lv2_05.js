// 오답 DP로 풀어야 함
function solution(board) {
  var answer = [];

  const search = (row, col) => {
    let size = 0;
    while (++size <= Math.min(board.length, board[0].length)) {
      for (let i = row; i < row + size; i++) {
        if (i == board.length) return Math.pow(size - 1, 2);
        for (let j = col; j < col + size; j++) {
          if (j == board[0].length) break;
          if (board[i][j] === 0) {
            return Math.pow(size - 1, 2);
          }
        }
      }
    }
    return Math.pow(size - 1, 2);
  };
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        answer.push(search(0, 2));
      }
    }
  }

  return Math.max(...answer.filter((ele) => typeof ele !== "undefined"));
}
const board = [
  [0, 0, 1, 1],
  [1, 1, 1, 1],
];

solution(board);
