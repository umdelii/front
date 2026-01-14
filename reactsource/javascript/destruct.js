const arr = [10, 11, 12];

let arr1 = arr[0],
  arr2 = arr[1],
  arr3 = arr[2];

console.log(arr1, arr2, arr3);
console.log(...arr);

const [arr4, arr5] = arr;
console.log(arr4, arr5);

const [arr6, ...arr7] = arr;
console.log(arr6);
console.log(arr7);

// 복제
// 얕은 복제 vs 깊은 복제
const array = arr;
console.log(array);

array[0] = 99;
console.log("값 변경 후 복제배열", array);
console.log("값 변경 후 원본배열", arr);

// 깊은
const array2 = [...arr];
array2[0] = 153;
console.log("값 변경 후 복제배열", array2);
console.log("값 변경 후 원본배열", arr);

// 객체 분해
const person = {
  name: "wef",
  age: 30,
  job: "awef",
};
const { name, age } = person;
console.log(name, age);

const person1 = person;
person1.name = "jane";

const person2 = { ...person };
person2.name = "andeo";
console.log(person, person1, person2);
