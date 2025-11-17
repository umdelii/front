// 내장함수
// window.confirm(), window.alert()
// isNaN(), parseInt(), parseFloat()

// 문자 인코딩 : a -> 97 -> 10021
// 문자 디코딩 : a <- 97 <- 10021
// encodeURI() : 영문,숫자,일부기호 제외
// encodeURIComponent() : 영문,숫자만 제외
console.log(
  encodeURI("https://localhost:8080/basic/info/html?name=홍길동&age=15")
); // https://localhost:8080/basic/info/html?name=%ED%99%8D%EA%B8%B8%EB%8F%99&age=15
console.log();
console.log(
  encodeURIComponent(
    "https://localhost:8080/basic/info/html?name=홍길동&age=15"
  )
); // https%3A%2F%2Flocalhost%3A8080%2Fbasic%2Finfo%2Fhtml%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99%26age%3D15

// 디코딩
console.log("디코딩");
console.log(
  decodeURI(
    "https://localhost:8080/basic/info/html?name=%ED%99%8D%EA%B8%B8%EB%8F%99&age=15"
  )
);
console.log(
  decodeURIComponent(
    "https%3A%2F%2Flocalhost%3A8080%2Fbasic%2Finfo%2Fhtml%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99%26age%3D15"
  )
);

// 2초가 지난 뒤, "안녕" 출력
console.log("시작");
setTimeout(() => {
  console.log("안녕");
}, 2000);
console.log("종료");

// 일정시간 간격으로 처리
console.log("시작");
setInterval(() => {
  console.log("3초가 지났습니다.");
}, 3000);
console.log("종료");
