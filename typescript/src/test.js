function add(num1, num2) {
  console.log(num1 + num2);
}

add(); // NaN
add(1); // NaN
add(1, 2); // 3
add(3, 4, 5); // 7
add("hello", " world"); // hello world

function showItems(arr) {
  arr.forEach((item) => {
    console.log(item);
  });
}

showItems([1, 2, 3, 4, 5]);
showItems(1, 2, 3, 4, 5); // TypeError: arr.forEach is not a function

// js 동적언어 : 런타임에 타입 결정 => 실행 시 오류 발생
