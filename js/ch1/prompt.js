// 함수
// alert("사용자에게 메세지 전달");

// input
// let input = prompt("숫자 입력", 100);
// console.log("사용자 입력 값", input);

// let isBoss = confirm("당신이 주인입니까");
// console.log(isBoss ? "주인" : "주인아님");

// 게임의사 물어보기
// if (confirm("게임 한 판 하실래요?")) {
//   document.writeln("좋습니다. 게임 한 판 하시죠");
// } else {
//   document.writeln("나중에 하시죠");
// }

// 사용자에게 숫자를 입력받아 양수, 음수, 0 판별
// alert("숫자를 입력하시오");
// let num = Number(prompt("숫자 입력"));
// if (num > 0) {
//   document.writeln("양수");
//   console.log("양수");
// } else if (num < 0) {
//   document.writeln("음수");
//   console.log("음수");
// } else if (num == 0) {
//   document.writeln("0");
//   console.log("0");
// } else if (isNaN(num)) {
//   document.writeln("숫자가 아님");
//   console.log("숫자가 아님");
// }

// 숫자를 입력받아 홀짝 구분하기
// let input = Number(prompt("숫자 입력"));

// 방법1
// document.writeln(input % 2 == 0 ? "짝수" : "홀수");

// 방법2
// if (input % 2 == 0) {
//   document.writeln("짝수");
// } else if (input % 2 == 1) {
//   document.writeln("홀수");
// } else {
//   document.writeln("숫자가 아닙니다");
// }

// 숫자 3개를 입력받아 평균이 >=90 A, >=80 B, >=70 C, >=60 D, F
alert("평균을 구합니다");
let input1 = Number(prompt("첫 번째 숫자 입력"));
let input2 = Number(prompt("두 번째 숫자 입력"));
let input3 = Number(prompt("세 번째 숫자 입력"));
let avg = (input1 + input2 + input3) / 3;

// 방법1 if
// if ((input1 + input2 + input3) / 3 >= 90) {
//   document.writeln("A");
// } else if ((input1 + input2 + input3) / 3 >= 80) {
//   document.writeln("B");
// } else if ((input1 + input2 + input3) / 3 >= 70) {
//   document.writeln("C");
// } else if ((input1 + input2 + input3) / 3 >= 60) {
//   document.writeln("D");
// } else {
//   document.writeln("F");
// }

// 방법2 switch
switch (parseInt(avg / 10)) {
  case 10:
  case 9:
    document.writeln("A");
    break;
  case 8:
    document.writeln("B");
    break;
  case 7:
    document.writeln("C");
    break;
  case 6:
    document.writeln("D");
    break;
  default:
    document.writeln("F");
    break;
}
