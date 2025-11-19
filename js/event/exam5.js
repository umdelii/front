// form submit 발생 시
// 먼저 submit 중지 => submit은 시작하자마자 값을 보내서
// 내용이 잘 입력되어 있는지 확인
// 공백이 있을 경우 포커스, 안내문구 추가(alert)

// 내용이 전부 들어있다면 원래대로 submit

document.querySelector("form").addEventListener("submit", (e) => {
  // submit 중지
  e.defaultPrevented();

  const form = e.target;

  if (form.name.value === "") {
    alert("이름을 입력하십시오(공백 불가)");
    form.name.focus();
    return;
  } else if (form.password.value === "") {
    alert("비밀번호를 입력하십시오(공백 불가)");
    form.password.focus();
    return;
  } else if (form.age.value === "") {
    alert("나이를 입력하십시오(공백 불가)");
    form.age.focus();
    return;
  }
  // submit
  e.target.submit();
});
