// h1 요소의 클래스명 호출
const h1 = document.querySelector("h1");
console.log(h1.classList);

// h1 클래스 중 one => four 변경
h1.classList.replace("one", "four");

// h1 클래스명 'five' 추가
h1.classList.add("five");

// h1 'one' 클래스명 추가(없다면 붙이고 있다면 제거)
h1.classList.toggle("four");

// h1 클래스명 제거
h1.classList.remove("five");
