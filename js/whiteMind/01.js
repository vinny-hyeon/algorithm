function solution(numbers) {
  let hash = {};
  for (let i = 1; i <= 99; i++) {
    hash[i] = 0;
  }
  numbers.forEach((ele) => {
    hash[ele]++;
  });
  let hashArr = [];
  for (let key of Object.keys(hash)) {
    if (hash[key]) hashArr.push([key, hash[key]]);
  }
  hashArr.sort((a, b) => {
    return b[1] - a[1];
  });
  if (hashArr[0][1] <= numbers.length / 2) return -1;
  return parseInt(hashArr[0][0]);
}

let numbers = [6, 1, 6, 6, 7, 5, 6, 7];
console.log(solution(numbers));
