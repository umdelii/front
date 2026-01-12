export {};
// add 함수 정의 : 2개의 숫자 타입 전달인자, 덧셈 결과 출력
// function add(num1: number, num2: number):void {
//   console.log(num1 + num2);
// }
const add = (num1: number, num2: number): void => {
  console.log(num1 + num2);
};

add(4, 5);

// add2 : 리턴값 num1+num2
const add2 = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(add2(138, 499));

// age 값을 받아서 >19면 true isAdult함수 정의
const isAdult = (age: number): boolean => {
  return age > 19;
};

console.log(isAdult(18));
console.log(isAdult(27));

// name(없을수도있음)을 받아 있으면 "Hello ${name}" : Guest
// || : 기본값
const hello = (name?: string): void => {
  console.log(`Hello ${name || "Guest"}`);
};

hello("user");
hello();

// defualt 값 사용
const hello2 = (name = "Guest"): void => {
  console.log(`Hello ${name}`);
};

hello2();
hello2("user2");

// 선택적 매개변수가 필수 매개변수보다 앞에 올 수 없음
// const hello3 = (name?: string, age: number): void => {
//   console.log(`Hello ${name || "Guest"}`);
// };

const hello3 = (name: string | undefined, age: number): void => {
  console.log(`Hello ${name}, age ${age}`);
};

hello3(undefined, 25);
hello3("Tom", 29);

// 나머지 매개변수 : ... => 배열 형태로 전달
// 매개변수의 개수가 정해져 있지 않을 경우 유용
const sum = (...nums: number[]): number => {
  let total = 0;
  nums.forEach((element) => {
    total += element;
  });
  return total;
};

let total = sum(1, 2, 3);
console.log(total);
total = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(total);

//
interface User {
  name: string;
  age: number;
}

const join = (name: string, age: number | string): User | string => {
  if (typeof age === "number") {
    return { name, age };
  } else {
    return "年齢を確認してください";
  }
};

const sam = join("Sam", 30);
const jane = join("Jane", "30");
console.log(sam);
console.log(jane);

// 변수 선언
let userName = "Bob";
// type & interface
type Job = "developer" | "designer" | "manager";

interface Person {
  name: string;
  job: Job;
}

let person: Person = {
  name: "Ian",
  job: "developer",
};
console.log(person);

// & : 교차타입
interface Developer {
  name: string;
  skills: string[];
}

interface Manager {
  name: string;
  age: number;
  manage(): void;
}

let person1: Developer & Manager;
person1 = {
  name: "String",
  skills: ["1", "2", "3"],
  age: 33,
  manage() {
    console.log("qwer");
  },
};
