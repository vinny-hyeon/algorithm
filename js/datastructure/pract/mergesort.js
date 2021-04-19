function rec(list) {
  if (list.length === 1) return list;
  let left = list.slice(0, parseInt(list.length / 2));
  let right = list.slice(parseInt(list.length / 2), list.length);
  return merge(rec(left), rec(right));
}

function merge(left, right) {
  // console.log(left, right);
  let list = [];
  let lp = 0;
  let rp = 0;
  while (true) {
    if (lp == left.length) {
      list = list.concat(right.slice(rp, right.length));
      break;
    }
    if (rp == right.length) {
      // console.log(list);
      list = list.concat(left.slice(lp, lp.length));
      // console.log(list);
      break;
    }
    if (left[lp] > right[rp]) {
      list.push(right[rp]);
      rp++;
    } else {
      list.push(left[lp]);
      lp++;
    }
  }
  // console.log(list);
  return list;
}

function solution() {
  let list = [5, 3, 1, 2, 9, 6, 7];
  console.log(rec(list));
}
solution();
