export {};

// let car = "BMW"; // 자동적으로 string 유추
let car: string = "BMW"; // 명시적으로 string 타입 선언
// car = 3;

let age: number = 30;
// age = "45";
// age = true;

let isAdult: boolean;
isAdult = true;
// isAdult = 3;

let n: null = null;
// n=undefined;

let u: undefined;
u = undefined;
// u = 123;

// let fruits = ["apple", "banana", "cherry"];
let fruits: string[] = ["apple", "banana", "cherry"];
// fruits = "melon";
let fruits2: Array<string> = ["apple", "banana", "cherry"];

// fruits.push(1)

let score1: number[] = [90, 80, 48, 19];

// 二つ以上のタイプを配列に
let mixed: (string | number)[] = ["apple", 45, "banana", 242];

// push 禁止 配列
const vegetables: readonly string[] = ["carrot", "broccoli", "spinach"];
let vegetables2: readonly string[] = ["carrot", "broccoli", "spinach"];
// vegetables.push()

const newArray = [...vegetables, "potato"];
console.log(newArray);

// typescript tuple
let person: [string, number];
// person = [24, "alice"];
person = ["alice", 24];
console.log(person[0].length);

function getUserInfo(): [string, number, boolean] {
  // 名前、年齢、成人確認
  return ["Jayce", 30, true];
}

console.log(getUserInfo());

const [name1, age1, adult1] = getUserInfo();
console.log(`name : ${name1}, age : ${age1}, isAdult : ${adult1}`);

console.log("配列とtuple比較");
const inferredArray = [1, "two"];
const inferredTuple = [1, "two"] as const; // as const 修正不可 = readonly

inferredArray.push("three");
inferredArray.push("four");
inferredArray.push(4);
console.log(inferredArray);

// Cannot assign to '0' because it is a read-only property.
// inferredTuple[0] = 2;

const explicitTuple: [number, string] = [1, "two"];
explicitTuple[0] = 2;
explicitTuple[1] = "three";
console.log(explicitTuple);

// any
let num; // タイプが何なのか推論不可能
num = 95;
num = "Five";

let randomValue: any = 10;
randomValue = "hello";
randomValue = true;

// unknown
let unknownValue: unknown = 10;
unknownValue = true;
unknownValue = "hello";
// let strLength:number = unknownValue.length;
if (typeof unknownValue === "string") {
  let strLength: number = unknownValue.length;
  console.log("length ", strLength);
}
if (typeof unknownValue === "string") {
  console.log(unknownValue.slice(1, 4));
}
// as : 타입을 단언시키기
let someValue: unknown = "This is a string";
let strLength = (someValue as string).length;
strLength = (<string>someValue).length;

// void
function logMsg(messege: string): void {
  console.log(`${messege}`);
}

logMsg("log message");

// 전달인자(引数)가 string 혹은 null, 반환값 없음
function printLength(text: string | null): void {
  //   console.log(`text length ${text.length}`);
  // text? : textはnullかもしれません
  console.log(`text length ${text?.length}`);
}

printLength("Hello typescript");
printLength(null);

// never
function error(message: string): never {
  throw new Error(message);
}
// error("これらはエラーです");
let doc: string = "文書"; // Unreachable code detected.

let i = 0;
function infiniteLoop(): never {
  while (true) {
    i++;
  }
}
// infiniteLoop();

function handleValue(x: string | number | boolean): void {
  if (typeof x === "string") {
    console.log("string value : " + x);
  } else if (typeof x === "number") {
    console.log("number value : " + x);
  } else if (typeof x === "boolean") {
    console.log("boolean value : " + x);
  } else {
    const Unreachable: never = x;
    throw new Error("Unhandled type :" + Unreachable);
  }
}
handleValue("hello");
handleValue(25);
handleValue(true);

// enum
enum Color {
  Red,
  Blue,
  Green,
}
console.log(Color.Blue);
console.log(Color["Blue"]);

let myColor: Color;
myColor = Color.Green;
// myColor = "Red";

// type
type Addr = string | number;
let userAddr: Addr;
userAddr = "東京都渋谷区";

type status = "idle" | "loading" | "success" | "error";
let currentStatus: status;
currentStatus = "success";

type PointTuple = [number, number];
let point: PointTuple = [10, 359];
// point = [10,390,90]
// point = [10, "20"];

// & : 교차타입
type Name = {
  firstName: string;
  lastName: string;
};

type Employee = Name & {
  employeeId: number;
};

let employee: Employee;
employee = { firstName: "John", lastName: "josep", employeeId: 39 };

// Memberのpropertyが確かめていない場合
type Member = {
  [key: string]: string;
};

let member: Member = {
  id: "user01",
};

member = {
  id: "user02",
  name: "イアン",
};
