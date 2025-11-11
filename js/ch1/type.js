let a, b, c, d, e, f, g;
// 선언만 한 경우 : undefined
console.log("a 타입 ?", typeof a);

// 값 할당
a = true;
b = "hello";
c = 3.14;
d = 5;
e = new Date();
f = null;
g = {};

console.log("a 타입 ?", typeof a); //boolean
console.log("b 타입 ?", typeof b); //string 
console.log("c 타입 ?", typeof c); //number
console.log("d 타입 ?", typeof d); //number
console.log("e 타입 ?", typeof e); //object
console.log("f 타입 ?", typeof f); //object
console.log("g 타입 ?", typeof g); //object
