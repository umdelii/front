// add(a,b) 함수 : 더한 결과 리턴 (함수 선언 방식)
function add(a, b) {
  return a + b;
}

console.log(add(5, 4));

// add => add2 함수표현식으로 변경
const add2 = function (a, b) {
  return a + b;
};

// 1 ~ 10까지 더한 결과를 리턴하는 함수 작성(함수표현식)
const sum = function () {
  let x = 0;
  for (let index = 1; index < 11; index++) {
    x += index;
    return x;
  }
};

console.log(sum());

// 3의 배수 찾기
// multiple(num) : num이 3의 배수라면 '박수' 출력 / 아닌 경우 '통과'
function multiple(num) {
  console.log(num % 3 == 0 ? "박수" : "통과");
}

console.log(multiple(3));
console.log(multiple(7));

// multiple2(num)
// 3의 배수인 경우 박수, 9의 배수인 경우 '박수x2', 아닌 경우 '통과'
function multiple2(num) {
  if (num % 3 == 0) {
    if (num % 9 == 0) {
      console.log("박수x2");
    } else console.log("박수");
  } else {
    console.log("통과");
  }
}

console.log(multiple(3));
console.log(multiple(7));
console.log(multiple(9));

// 두 과목의 점수를 입력하면 합격 여부를 알려주는 함수
// pass(outline, law)
// 두 과목 합계 120이상이면 합격 출력, 한 과목이 40점 미만이면 '과락' 출력
function pass(outline, law) {
  if (outline + law >= 120) {
    if (outline < 40 || law < 40) {
      console.log("과락");
    } else console.log("합격");
  } else if (outline + law < 120) {
    console.log("불합격");
  }
}

console.log(pass(80, 70));
console.log(pass(90, 30));
console.log(pass(50, 30));
