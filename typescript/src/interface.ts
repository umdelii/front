export {};

// object
let user1: object;
user1 = {
  name: "Alice",
  age: 25,
};
console.log(user1);
// console.log(user1.name); //Property 'name' does not exist on type 'object'

interface User {
  name: string;
  age: number;
  gender?: string;
}
let user2: User = {
  name: "Alice",
  age: 25,
};
console.log(user2.name);

console.log((<User>user1).age);

let user3: User = {
  name: "Alex",
  age: 48,
  gender: "male",
};
console.log(user2);
console.log(user3);
user3.gender = "female";
console.log(user3);

interface Car {
  readonly model: string;
  year: number;
}

let myCar: Car = {
  model: "Toyota",
  year: 2020,
};

// myCar.model =

interface Student {
  name: string;
  id: number;
  [key: number]: string;
}

// A ~ D 점수부여
let student: Student = {
  name: "john",
  id: 123,
  1: "A",
  2: "B",
  3: "C",
  4: "D",
};

type Score = "A+" | "A" | "B" | "C" | "D";
interface Student2 {
  name: string;
  id: number;
  [key: number]: Score;
}

let student2: Student2 = {
  id: 1234,
  name: "eijwo",
  3: "B",
  // 4:'F'
};

interface Car2 {
  color: string;
  wheels: number;
  start(): void;
}

class Truck implements Car2 {
  color: string;
  wheels: number;

  // 生成者
  constructor(color: string, wheels: number) {
    this.color = color;
    this.wheels = wheels;
  }

  start(): void {
    console.log("truck start");
  }
}

const myCar2 = new Truck("white", 4);
console.log(myCar2);

interface Person {
  name: string;
  age: number;
}

// Employee
interface Employee extends Person {
  employeeId: number;
  department: string;
}

let employee: Employee = {
  name: "Jane",
  age: 29,
  employeeId: 1001,
  department: "HR",
};
console.log(employee);
console.log(employee.name, employee.employeeId);

// inline 방식
let user4: { name: string; age: number } = {
  name: "Emma",
  age: 24,
};
