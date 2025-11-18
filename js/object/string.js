// 내장 객체(string)
// const msg = new String("hello javascript");
const msg = "hello javascript";

console.log("특정 문자 위치 반환 ", msg.charAt(1));
console.log("특정 문자 위치 찾기 ", msg.indexOf("j"));
console.log("찾을 문자 ", msg.match("ja"));
console.log("찾을 문자 ", msg.match("boy"));
console.log("특정 문자 변경 ", msg.replace("hello", "hi"));
console.log("특정 문자 찾기(위치) ", msg.search("ja"));
console.log("문자 자르기 ", msg.slice(6, 10));
console.log("문자 자르기 ", msg.substring(6, 10));
console.log("문자 공백제거 ", "    hello     ".trim());
console.log("대문자 변경 ", msg.toUpperCase());
console.log("소문자 변경 ", "ABCDEFGHI".toLowerCase());

// 사용자로부터 영문이름 소문자로 입력, 전화번호 입력(000-0000-0000)
// 이름은 대문자로 출력 / 010-1111-1111 => 010-####-1111

// const info = () => {
//   const userName = prompt("소문자로 영문이름 입력");
//   const userTel = prompt("전화번호 입력(000-0000-0000");

//   document.writeln("이름 : ", userName.toUpperCase());
//   document.writeln("<br>");
//   document.writeln("전화번호 : ", userTel.replace(userTel.slice(4, 8), "####"));
// };

// info();

// 이메일 입력받기
// 형식이 맞는 지 확인 : @
// 없는 경우 : alert("입력값 확인")
// 있는 경우 : 이메일 출력

const info2 = () => {
  const email = prompt("이메일 입력");

  if (!email.includes("@")) {
    // 아니면 (email.indexOf("@") == -1) 조건도 가능
    alert("형식을 맞춰 입력하십시오");
    info2();
  } else {
    document.writeln("이메일 : ", email);
  }
};

info2();
