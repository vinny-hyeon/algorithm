function solution(n) {
  const checkOne = (num) => {
    let result = 0;
    while (true) {
      if (num === 1) return result;
      if (num % 2 === 1) {
        result++;
      }
      num = parseInt(num / 2);
    }
  };
  var oneNum = checkOne(n);
  while (true) {
    n++;
    if (checkOne(n) === oneNum) return n;
  }
}

let n = 78;
solution(n);
