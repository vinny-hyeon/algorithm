let answer = [];

function search(board, i, j, prev) {
  let score = prev;
  let now = board[i][j];
  let flag = false;
  if (now === 0) {
    answer.push(score);
    return;
  }
  if (j >= 1) {
    if (now === board[i][j - 1]) {
      flag = true;
      let new_board = board.slice();
      new_board[i][j] = 0;
      search(new_board, i, j - 1, score + now);
    }
  }
  if (i >= 1) {
    if (now === board[i - 1][j]) {
      flag = true;
      let new_board = board.slice();
      new_board[i][j] = 0;
      search(new_board, i - 1, j, score + now);
    }
  }
  if (i <= 2) {
    if (now === board[i + 1][j]) {
      flag = true;
      let new_board = board.slice();
      new_board[i][j] = 0;
      search(new_board, i + 1, j, score + now);
    }
  }
  if (j <= 2) {
    if (now === board[i][j + 1]) {
      flag = true;
      let new_board = board.slice();
      new_board[i][j] = 0;
      search(new_board, i, j + 1, score + now);
    }
  }
  if (flag == false) {
    answer.push(score);
    return score;
  }
  answer.push(score);
  return score;
}

function solution(board) {
  let flag = false;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let now = board[i][j];
      if (j >= 1) {
        if (now === board[i][j - 1]) {
          flag = true;
          let new_board = board.slice();
          new_board[i][j] = 0;
          search(new_board, i, j - 1, now);
        }
      }
      if (i >= 1) {
        if (now === board[i - 1][j]) {
          flag = true;
          let new_board = board.slice();
          new_board[i][j] = 0;
          search(new_board, i - 1, j, now);
        }
      }
      if (i <= 2) {
        if (now === board[i + 1][j]) {
          flag = true;
          let new_board = board.slice();
          new_board[i][j] = 0;
          search(new_board, i + 1, j, now);
        }
      }
      if (j <= 2) {
        if (now === board[i][j + 1]) {
          flag = true;
          let new_board = board.slice();
          new_board[i][j] = 0;
          search(new_board, i, j + 1, now);
        }
      }
    }
  }
  console.log(answer);
  if (flag === false) return -1;
  return Math.max(...answer);
}
board = [
  [3, 2, 3, 2],
  [2, 1, 1, 2],
  [1, 1, 2, 1],
  [4, 1, 1, 1],
];
solution(board);
