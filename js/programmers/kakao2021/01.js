function isAlpha_Number(str) {
  var pattern = /^[a-zA-Z0-9]+$/;
  return pattern.test(str) ? true : false;
}

function solution(new_id) {
  //1단계
  new_id = new_id.toLowerCase();
  //2단계
  new_id = new_id
    .split("")
    .map((ele) => {
      if (isAlpha_Number(ele)) return ele;
      if (ele === "-" || ele === "." || ele === "_") return ele;
    })
    .join("");
  //3단계
  let temp = "";
  if (new_id) {
    temp += new_id[0];
    for (let i = 1; i < new_id.length; i++) {
      if (new_id[i] === ".") {
        if (new_id[i - 1] === ".") {
          continue;
        }
      }
      temp += new_id[i];
    }
    new_id = temp.slice();
  }
  //4단계

  while (new_id[0] === ".") {
    new_id = new_id.substr(1, new_id.length);
  }
  while (new_id[new_id.length - 1] === ".") {
    new_id = new_id.substr(0, new_id.length - 1);
  }
  //5단계
  if (!new_id) new_id += "a";
  //6단계
  if (new_id.length >= 16) new_id = new_id.substr(0, 15);
  while (new_id[new_id.length - 1] === ".") {
    new_id = new_id.substr(0, new_id.length - 1);
  }
  //7단계
  while (new_id.length <= 2) {
    new_id += new_id[new_id.length - 1];
  }
  return new_id;
}

let new_id = "aaaaaaaaaa0aaaaa";
solution(new_id);
