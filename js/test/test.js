// Run by Node.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let row = 0;
let col = 0;
let count = 0;
let arr = [];

rl.on("line", function (line) {
  if (count === 0) {
    [row, col] = [line.split(" ")[1], line.split(" ")[0]];
  } else {
    arr.push([line]);
  }
  count++;
  if (count === row + 1) {
    rl.close();
  }
}).on("close", function () {
  let answer = [];
  const search = (a, x, y, num) => {
    let newArr = a.map((ele) => ele.slice());
    if (x === row - 1 && newArr[x][y] === ".") {
      newArr[x][y] = "x";
      answer.push(num);
      return;
    }
    if (x + 1 !== row && newArr[x + 1][y] === "x") {
      if (y - 1 !== -1 && newArr[x][y - 1] === "x") {
        if (y + 1 !== col && newArr[x][y + 1] === "x") {
          return;
        }
      }
    }
    newArr[x][y] = "x";
    if (x + 1 !== row && newArr[x + 1][y] === ".") {
      search(newArr, x + 1, y, num);
    }
    if (y - 1 !== -1 && newArr[x][y - 1] === ".") {
      search(newArr, x, y - 1, num + 1);
    }
    if (y + 1 !== col && newArr[x][y + 1] === ".") {
      search(newArr, x, y + 1, num + 1);
    }
    return;
  };
  for (let start = 0; start < col; start++) {
    if (arr[0][start] === "c") {
      search(arr, 0, start, 0);
    }
  }

  console.log(Math.min(...answer));
  process.exit();
});
