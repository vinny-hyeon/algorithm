// [카카오 인턴] 수식 최대화
function solution(expression) {
  var answer = [];
  var op1 = ["+", "-", "*"];
  var op2 = ["+", "*", "-"];
  var op3 = ["*", "+", "-"];
  var op4 = ["*", "-", "+"];
  var op5 = ["-", "+", "*"];
  var op6 = ["-", "*", "+"];
  var ops = [op1, op2, op3, op4, op5, op6];
  var order = [];
  var value = expression
    .split("-")
    .join(",")
    .split("+")
    .join(",")
    .split("*")
    .join(",")
    .split(",")
    .map((ele) => parseInt(ele));
  var operation = [];

  for (let i = 0; i < expression.length; i++) {
    if (["-", "+", "*"].indexOf(expression[i]) !== -1) {
      operation.push(expression[i]);
    }
  }
  ops.forEach((ele) => {
    let temp = [];
    operation.forEach((cal, idx) => {
      temp.push(ele.indexOf(cal));
    });
    order.push(temp);
  });
  console.log(value);
  console.log(operation);
  console.log(order);
  order.forEach((opRow, nth) => {
    let operand = value.slice();
    for (let pri = 0; pri < 3; pri++) {
      let idx = 0;
      while (opRow.indexOf(pri) !== -1) {
        if (pri === opRow[idx] && ops[nth][pri] == "+") {
          operand.splice(idx, 2, operand[idx] + operand[idx + 1]);
          opRow.splice(idx, 1);
          idx = 0;
          continue;
        } else if (pri === opRow[idx] && ops[nth][pri] == "*") {
          operand.splice(idx, 2, operand[idx] * operand[idx + 1]);
          opRow.splice(idx, 1);
          idx = 0;
          continue;
        } else if (pri === opRow[idx] && ops[nth][opRow[idx]] == "-") {
          operand.splice(idx, 2, operand[idx] - operand[idx + 1]);
          opRow.splice(idx, 1);
          idx = 0;
          continue;
        }
        idx++;
      }
    }
    answer.push(operand);
  });
  return Math.max(...answer.map((ele) => Math.abs(ele)));
}

let expression = "100-200*300-500+20";
solution(expression);
