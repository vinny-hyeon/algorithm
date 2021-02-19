function solution(s) {
  const arr = [];
  for (let i = 1; i <= s; i++) {
    if (s % i === 0) {
      arr.push(i);
    }
  }
  const mid = parseInt(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[mid] + arr[mid - 1]) * 2;
  } else {
    return 4 * arr[mid];
  }
}
let s = 17;
solution(s);
