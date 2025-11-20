// 탭 버튼 클릭(이벤트) 시 짝꿍 tab-content 활성화

// tab-button 찾기 + 이벤트리스너 부착 + .orange 이동
// tab-content 찾기 + .show 변경

// 일단 중도포기
const btns = document.querySelectorAll(".tab-button");

const contents = document.querySelectorAll(".tab-content");

const changeOrange = (e) => {
  btns.forEach((element) => {
    element.classList.remove("orange");
  });
  // !e.classList.remove("orange"); 이런식으로 타켓 외 다른 배열을 가르키는 코드는 없다...

  e.classList.add("orange");
};

const showContent = (i) => {
  contents.forEach((content) => {
    content.classList.remove("show");
  });

  contents[i].classList.add("show");
};

btns.forEach((btn, idx) => {
  console.log(btn);
  btn.addEventListener("click", (e) => {
    changeOrange(e.target);
    showContent(idx);
  });
});
