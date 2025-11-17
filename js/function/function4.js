// 화살표 함수
const mult = (a, b) => x * y; // return 생략됨
const mult2 = (a, b) => {
  return x * y;
};

const planet = new Array(
  "水星",
  "金星",
  "地球",
  "火星",
  "土星",
  "天王星",
  "冥王星"
);

planet.forEach((element, idx) => console.log(`${idx} : ${element}`));

const array3 = [12, 33, 1, 455, 6, 76];
console.log(array3.find((item) => item > 30));
console.log(array3.findIndex((item) => item > 30));

const showMsg = () => console.log("hi");
showMsg();

const fruits = ["apple", "mango", "banana", "watermelon", "grape"];
const elements = [];

fruits.forEach((item) => elements.push(item));
console.log(elements);

// map(),filter()
const arr1 = [1, 4, 9, 16];
// 각 요소에 *2를 한 결과를 저장한 새로운 배열 생성
const arr2 = [];
arr1.forEach((item) => arr2.push(item * 2));
console.log(arr2);

// map
const arr3 = arr1.map((item) => item * 2);
console.log(arr3);

// filter
const arr4 = arr1.filter((i) => i > 5);
console.log(arr4);
