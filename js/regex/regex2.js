const regEx = /d(b+)d/g;
const origin = "cdbbdbsbz";

console.log(regEx.exec(origin));
console.log(origin.match(regEx));

// 캡쳐링 : 패턴이 적용된 결과값을 가리키는데 사용 / 패턴을 여러번 적용하는데 사용
// 비캡쳐링 : (?:ko)+
const regEx1 = /(ko)+/;
const origint1 = "kokokoko";

console.log("캡쳐링");
console.log(origint1.match(regEx1));

console.log("비캡쳐링");
console.log(origint1.match(/(?:ko)+/));

const name = "John Smith";
const regEx2 = /(\w+)\s(\w+)/;
console.log(name.match(regEx2));
const newNm = name.replace(regEx2, "$2,$1");
console.log(newNm);

// form이 전송 시 submit 기능 중시
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  // 이름 입력값 확인 : 한글, 최대 5자
  const form = e.target;
  const name = form.name.value;
  const regName = /^[가-힣]{2,5}$/;
  const tel = form.tel.value;
  const regTel = /^\d{3}-\d{4}-\d{4}$/;

  if (!regName.test(name)) {
    alert("이름 입력 오류(한글 2~5자 이내)");
    form.name.focus();
    return;
  } else if (!regTel.test(tel)) {
    // 전화번호 입력값 확인 : 000-0000-0000
    alert("전화번호 입력 오류(예: 010-1234-5678)");
    form.tel.focus();
    return;
  }
});
