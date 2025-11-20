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

// a 태그 비활성화
document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault();

  // href 값 가져오기
  console.log("e.target.href", e.target.href);
  // target 값 가져오기
  console.log("e.target.target", e.target.target);
  // data-link 값 가져오기
  console.log("e.target.data-link ", e.target.dataset.link);
  // data-class-name 값 가져오기
  console.log("e.target.data-class-name ", e.target.dataset.className);

  // 주소가 naver라면 naver 이동, 아니라면 google로 이동
  //   if (e.target.href.includes("naver")) {
  //     location.href = e.target.href;
  //   } else {
  //     location.href = "http://google.com";
  //   }
});
