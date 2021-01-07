// N개 최소공배수
function solution(arr) {
  var answer = arr[0];
  const greatest = (a, b) => {
    if (b === 0) return a;
    return greatest(b, a % b);
  };
  const least = (a, b) => (a * b) / greatest(a, b);
  for (let i = 0; i < arr.length - 1; i++) {
    answer = least(answer, arr[i + 1]);
  }
  return answer;
}
arr = [2, 6, 8, 14];
solution(arr);
