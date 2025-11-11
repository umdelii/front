// 연산자
let a = 4,
  b = 5;
// 산술연산자
console.log("\n산술연산");
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b); // 0.8
console.log("a % b = ", a % b);

// 비교
console.log("\n비교연산");
console.log("a == b = ", a == b);
console.log("a === b = ", a === b); // false
console.log("a != b = ", a != b);
console.log("a !== b = ", a !== b); // true
let c = "4";
console.log("a == c = ", a == c); // true 4 == "4"
console.log("a === c = ", a === c); // false , 값하고 타입까지 자료형까지 같이 비교를 함
console.log("a != c = ", a != c);
console.log("a !== c = ", a !== c);

// 연결
console.log("\n연결연산");
console.log("a + c = ", a + c);
let d = "5";
console.log("d + c = ", d + c);

// 단항
console.log("\n단항연산");
let i = 0;
while (i < 10) {
  i++;
  if (i == 5) continue;
  console.log(i);
}
