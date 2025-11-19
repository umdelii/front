document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;

  if (form.name.value === "") {
    alert("이름오류");
    form.name.focus();
    return;
  } else if (form.password.value === "") {
    alert("비밀번호오류");
    form.password.focus();
    return;
  } else if (form.age.value === "") {
    alert("나이오류");
    form.age.focus();
    return;
  }

  e.target.submit();
});
