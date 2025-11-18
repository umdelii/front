// h1 태크 요소 삭제
const h1 = document.querySelector("h1");
// h1.remove();

// 글자 클릭하면 제거
// e.target : 이벤트 대상 가져오기
// h1.addEventListener("click", (e) => h1.remove());
// h1.addEventListener("mouseover", (e) => e.target.remove());

// 버튼 클릭하며 제거
// document.querySelector("button").addEventListener("click", (e) => h1.remove());

// h1 요소의 class 제거(속성 제거)
// 1. removeAttribute("제거할 속성명") : 모든 속성용
// 2. classList.remove() : class 전용
// h1.removeAttribute("class");
console.log(h1.classList);
console.log(h1.classList[0]);
h1.classList.remove("two");

// img alt속성 값 제거
const img = document.querySelector("img");
img.removeAttribute("alt");
