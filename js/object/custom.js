// 사용자 객체
const person = {
  name: ["bob", "smith"],
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  greeting: function () {
    console.log(`Hi!! I'm ${this.name[0]}`);
  },
};

console.log(person);
console.log(person.name);
console.log(person.age);
person.greeting();

const tv = new Object();
tv.color = "red";
tv.power = true;
tv.volume = 13;
tv.info = () => {
  console.log("color " + this.color);
  console.log("power " + this.power);
  console.log("volume " + this.volume);
};

console.log(tv);

// 객체 값 변경
person.age = 40;
console.log(person.age);
// 함수 추가
person.farewall = () => {
  console.log("bye");
};
person.farewall();

//  얕은 & 깊은 복사
const person2 = person; // 얕은 복사

// 원본 수정
person.name[0] = "tomato";
console.log(person.name);
console.log(person2.name);

const person3 = {
  ...person,
  name: [...person.name],
  interests: [...person.interests],
}; // 깊은 복사
person.name[0] = "jane";
person.interests[0] = "swimming";
console.log(person.name, person.interests);
console.log(person3.name, person3.interests);
