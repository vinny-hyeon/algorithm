const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `2
3
911
97625999
91125426
5
113
12340
123440
12345
98346
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
let t = input();

let phone = [];
while (t--) {
  let N = input();
  let temp = [];
  while (N--) {
    temp.push(input());
  }
  phone.push(temp);
}

solution(phone);
function solution(phone) {
  //   const merge = (left, right) => {
  //     let lp = 0;
  //     let rp = 0;
  //     let list = [];
  //     while (true) {
  //       if (lp === left.length) {
  //         list = list.concat(right.slice(rp, rp.length));
  //         break;
  //       }
  //       if (rp === rp.length) {
  //         list = list.concat(left.slice(lp, lp.length));
  //         break;
  //       }
  //       if (left[lp] > right[rp]) {
  //         list.push(right[rp]);
  //         rp++;
  //       } else {
  //         list.push(left[lp]);
  //         lp++;
  //       }
  //     }
  //     return list;
  //   };
  //   const mergeSort = (ele) => {
  //     if (ele.length === 1) return ele;
  //     let left = ele.slice(0, parseInt(ele.length / 2));
  //     let right = ele.slice(parseInt(ele.length / 2), ele.length);
  //     return merge(mergeSort(left), mergeSort(right));
  //   };
  phone = phone.map((ele) => {
    //ele nLogN 으로 sort해야함 => 해도 안됨 mergeSort
    //quick sort도 안됨
    return ele.sort();
  });
  console.log(phone);
  phone.forEach((ele) => {
    let isConsistency = true;
    for (let i = 0; i < ele.length - 1; i++) {
      for (let j = i + 1; j < ele.length; j++) {
        if (ele[i].length > ele[j].length) continue;
        if (ele[i] === ele[j].substr(0, ele[i].length)) {
          isConsistency = false;
          break;
        }
      }
      if (!isConsistency) break;
    }
    if (!isConsistency) console.log("NO");
    else console.log("YES");
  });
}
