// 이벤트 버블링 활용

// li 클릭 시 부모한테 전달되는 부분 이용
const parent = document.querySelector(".container");

const btns = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

parent.addEventListener("click", (e) => {
  btns.forEach((element) => {
    element.classList.remove("orange");
  });

  e.target.classList.add("orange");

  contents.forEach((content) => {
    content.classList.remove("show");
  });

  // tab-button에 tab-content와 상응하는 data- 값 부여
  contents[e.target.dataset.idx].classList.add("show");
});
