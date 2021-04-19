function solution(sticker) {
  var answer = 0;
  for (let i = 0; i < sticker.length; i++) {
    if (i === sticker.length - 1 && sticker[i] >= sticker[i - 1] + sticker[0]) {
      answer += sticker[i];
      sticker[i] = 0;
      sticker[i - 1] = 0;
      sticker[0] = 0;
    } else if (sticker[i] >= sticker[i - 1] + sticker[i + 1]) {
      answer += sticker[i];
      sticker[i] = 0;
      sticker[i - 1] = 0;
      sticker[i + 1] = 0;
    }
  }
  let start = 0;
  sticker.forEach((ele, idx) => {
    if (ele === Math.max(...sticker)) {
      start = idx;
    }
  });
  let i = sticker.indexOf(0) === -1 ? start : sticker.indexOf(0);
  while (sticker.reduce((acc, cur) => acc + cur) !== 0) {
    i = i % sticker.length;
    if (sticker[i] === 0) {
      i++;
      continue;
    }
    if (sticker[i - 1] === 0 && sticker[(i + 1) % sticker.length] === 0) {
      answer += sticker[i];
      sticker[i] = 0;
    } else if (
      sticker[i - 1] === 0 &&
      sticker[(i + 2) % sticker.length] === 0
    ) {
      if (sticker[i] >= sticker[(i + 1) % sticker.length]) {
        answer += sticker[i];
      } else {
        answer += sticker[(i + 1) % sticker.length];
      }
      sticker[i] = 0;
      sticker[(i + 1) % sticker.length] = 0;
    } else {
      if (
        sticker[i] + sticker[(i + 2) % sticker.length] >=
        sticker[(i + 1) % sticker.length] + sticker[(i + 3) % sticker.length]
      ) {
        answer = answer + sticker[i] + sticker[(i + 2) % sticker.length];
      } else {
        answer =
          answer +
          sticker[(i + 1) % sticker.length] +
          sticker[(i + 3) % sticker.length];
      }
      sticker[i - 1] = 0;
      sticker[i] = 0;
      sticker[(i + 1) % sticker.length] = 0;
      sticker[(i + 2) % sticker.length] = 0;
      sticker[(i + 3) % sticker.length] = 0;
    }
  }
  return answer;
}

sticker = [14, 6, 5, 11, 3, 9, 2, 10];
solution(sticker);
