const fruits = ["apple", "mango", "banana", "watermelon", "grape"];
const others = ["fruit", 1, 1.23, new Date(), true, {}];
const array1 = new Array("a", "b", "c", "d", "e", "f");
const planet = new Array(
  "水星",
  "金星",
  "地球",
  "火星",
  "土星",
  "天王星",
  "冥王星"
);

// 배열 출력
console.log(fruits);

for (let index = 0; index < array1.length; index++) {
  const element = array1[index];
  console.log(element);
}

planet.forEach((element, idx) => {
  console.log(`${idx} : ${element}`);
});

for (const element of others) {
  console.log(element);
}

// 배열 요소 추가
// push(), unshift()
console.log("\n---------배열 요소 추가-----------");
fruits.push("melon"); // 맨 뒤에 추가
fruits.unshift("strawberry"); // 맨 앞에 추가
console.log(fruits);

// 배열 요소 변경
console.log("\n---------배열 요소 변경-----------");
fruits[5] = "kiwi";
console.log(fruits);

fruits[8] = "pineapple";
console.log(fruits);

//  배열 요소 삭제
// splice(), pop()
console.log("\n---------배열 요소 삭제-----------");
array1.pop(); // 맨 뒤 요소 삭제
console.log(array1);

array1.splice(2, 1); // 위치 지정해서 삭제
console.log(array1);

array1.splice(2, 1, "e"); // 기존 요소 교체도 가능
console.log(array1);

array1.splice(2, 0, "c"); // deleteCount에 0을 넣으면 삽입도 가능
console.log(array1);

// 배열 연결 : join()
console.log("- 문자열로 배열 연결", fruits.join("-"));

// 배열 간 연결 : concat()
console.log(fruits.concat(planet));

// 배열 요소 자르기 : slice()
console.log(fruits.slice(1, 3));

// 배열 정렬 : sort()
console.log(fruits.sort());
console.log([12, 3, 1, 4, 6, 76].sort()); // 숫자 정렬 안해준다
console.log([12, 3, 1, 4, 6, 76].sort((a, b) => a - b)); // 함수를 넣으면 해준다

// 배열 인덱스 확인 : indexOf()
console.log(fruits.indexOf("blueberry"));

// 깊은 복사 vs 얕은 복사
const fruits2 = fruits;
console.log(fruits);
console.log(fruits2);
// 원본 수정
console.log("\n얕은 복사");
fruits[2] = "car";
console.log(fruits);
console.log(fruits2); // 2도 수정이 됨, 주소복사

// ... : spread
console.log("\n깊은 복사");
const shallowCopy = [...fruits];
fruits[2] = "kiwi";
console.log(fruits);
console.log(shallowCopy); // 복사본 변경 없음, 값만 복사

// 숫자 '1' 5개를 요소로 하는 배열 생성
// const array2 = [1, 1, 1, 1, 1];
const array2 = new Array(5).fill(1);
console.log(array2);

// 조건에 만족하는 배열 요소 추출 : find()
const array3 = [12, 33, 1, 455, 6, 76];
console.log(array3.find((item) => item > 30)); // 조건에 만족하는 첫 번째 요소
console.log(array3.findIndex((item) => item > 30)); // 조건에 만족하는 첫 번째 요소의 인덱스번호

const varArr1 = ["num1", "num2"];
const varArr2 = ["num3", "num4"];

const varArr3 = [varArr1, varArr2];
console.log(varArr3); // [ [ 'num1', 'num2' ], [ 'num3', 'num4' ] ]
varArr1[0] = "num5";
console.log("복사본", varArr3);

const varArr4 = [...varArr1, ...varArr2];
console.log(varArr4); // [ 'num1', 'num2' , 'num3', 'num4' ]
