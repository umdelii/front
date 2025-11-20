// !myanswer

// 탭 버튼 클릭(이벤트) 시 짝꿍 tab-content 활성화

// tab-button 찾기 + 이벤트리스너 부착 + .orange 이동
const btns = document.querySelectorAll(".tab-button");

// tab-content 찾기 + .show 변경
const contents = document.querySelectorAll(".tab-content");

btns.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    // 어느 tab-button이 클릭됐는 지 확인
    // 모든 tab-button orange 제거
    btns.forEach((element) => {
      element.classList.remove("orange");
    });

    // e.targetdp orange cnrk
    e.target.classList.add("orange");

    // tab-content show 제거
    contents.forEach((content) => {
      content.classList.remove("show");
    });

    contents[idx].classList.add("show");
  });
});
