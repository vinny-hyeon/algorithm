// Run by Node.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let totalString = 0;
let totalQues = 99999;
const stringArr = [];
const questionArr = [];

rl.on("line", function (line) {
  if (count === 0) {
    totalString = parseInt(line);
  } else if (count <= totalString) {
    stringArr.push(line);
  } else if (count == totalString + 1) {
    totalQues = parseInt(line);
  } else {
    questionArr.push(line);
  }
  count++;
  if (count === totalString + totalQues + 2) {
    rl.close();
  }
}).on("close", function () {
  console.log(stringArr, questionArr);
  const check = (ques, str) => {
    if (ques.length > str.length) {
      return false;
    }
    if (str.indexOf(ques) !== -1) {
      return true;
    }
    return false;
  };

  for (let i = 0; i < questionArr.length; i++) {
    let answer = 0;
    for (let j = 0; j < stringArr.length; j++) {
      if (check(questionArr[i], stringArr[j]) === true) {
        answer++;
      }
    }
    console.log(answer);
  }
  process.exit();
});

// // Run by Node.js
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let count = 0;
// let totalString = 0;
// let totalQues = 99999;
// const stringArr = [];
// const questionArr = [];

// rl.on('line', function (line) {
//     if(count === 0){
// 			totalString= parseInt(line);
// 		} else if(count <= totalString){
// 			stringArr.push(line);
// 		} else if(count == totalString + 1){
// 			totalQues = parseInt(line);
// 		} else{
// 			questionArr.push(line);
// 		}
// 	count++;
// 	if(count === totalString + totalQues + 2){
// 		rl.close();
// 	}
//   })
//   .on('close', function () {
// 		const check = (ques, str) => {
// 			if(ques.length > str.length){
// 				return false;
// 			}
// 			for(let i = 0; i < str.length - ques.length + 1; i++){
// 				let isIndex = true;
// 				for(let j = 0; j < ques.length; j++){
// 					if(str[i + j] !== ques[j]){
// 						isIndex = false;
// 						break;
// 					}
// 				}
// 				if(isIndex){
// 					return true;
// 				}
// 			}
// 			return false;
// 		}

// 		for(let i = 0; i < questionArr.length; i++){
// 			let answer = 0;
// 			for(let j = 0; j < stringArr.length; j++){
// 				if(check(questionArr[i], stringArr[j]) === true){
// 					answer++;
// 				}
// 			}
// 			console.log(answer);
// 		}
//     process.exit();
// });
