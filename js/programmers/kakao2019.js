//오픈채팅방
function solution(record) {
  var answer = [];
  let finalNameHash = {};

  for (let i = 0; i < record.length; i++) {
    if (record[i].split(" ")[0] !== "Leave") {
      finalNameHash[record[i].split(" ")[1]] = record[i].split(" ")[2];
    }
  }

  for (let i = 0; i < record.length; i++) {
    let id = record[i].split(" ")[1];
    let action = record[i].split(" ")[0];
    let finalName = finalNameHash[id];
    if (action === "Enter") answer.push(`${finalName}님이 들어왔습니다.`);
    if (action === "Leave") answer.push(`${finalName}님이 나갔습니다.`);
  }
  return answer;
}

let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

solution(record);
