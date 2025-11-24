// 정규표현식
// 생성
const re1 = /ab+c/;
const re2 = new RegExp("ab+c");

const regex = /Ajax/;
const origin = "JavaScript Ajax Python";

// 자바스크립트에서 정규식 사용
// 1. exec() : 일치정보를 나타내는 배열
console.log(regex.exec(origin));
console.log(regex.exec("Hello World")); // null

// 2. text()
console.log(regex.test(origin)); // true
console.log(regex.test("Hello World")); // false

// 3. match() : string 메소드
// exec() 와 같은 결과
console.log(origin.match(regex));
console.log("Hello World".match(regex));

// 4. search() : 찾으면 시작위치 리턴, 못 찾으면 -1 리턴
console.log(origin.search(regex));
console.log("Hello World".search(regex));

// 5. replace()
