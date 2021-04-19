function solution(k) {
  let i = 0;
  function exp(n) {
    return (n * (n + 1)) / 2;
  }
  while (++i) {
    if (exp(i) >= k) return k - exp(i - 1);
  }
}
let k = 4;
solution(k);
