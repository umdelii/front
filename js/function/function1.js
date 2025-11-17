// 함수(단독) == 메소드(객체 내에 포함)
// function name(params) {}
// const func = function () {};
// const func1 = () => {};
function showMsg() {
  console.log("Hi");
}

showMsg();

// 파라메터 있는 경우
function multiply(a, b) {
  console.log(a, b);
  return a * b;
}

console.log(multiply(2, 3));

function showDialog(greeting, name) {
  console.log(`${greeting}!! ${name}`);
}

showDialog("hello", "kim");

// 매개변수 기본값
function multiply(a, b = 5) {
  console.log(a, b);
  b = b || 5;
  return a * b;
}
console.log(multiply(3));
console.log(multiply(5, 6));

// 함수 안에 함수 작성
function a() {
  function b() {
    console.log("b function");
  }
  if (true) {
    function c() {}
  }
}
