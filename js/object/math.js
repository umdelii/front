// 내부 객체 : 수학
// Math.random() ==
console.log(Math.PI);
console.log(Math.floor(3.14159)); // 切り下げ
console.log(Math.ceil(3.14159)); // 切り上げ
console.log(Math.abs(-3)); // 絶対値
console.log(Math.max(5, 6, 8, 12, 1, 3));
console.log(Math.min(5, 6, 8, 12, 1, 3));
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 11));
console.log(Math.floor(Math.random() * 31));

// 120 ~ 150 사이의 난수
console.log(Math.floor(Math.random() * 31) + 120);

// 주사위 2개를 굴려서 눈의 합이 5가 나올 때까지 , 함수
function sum(x, y) {
  while (true) {
    x = Math.floor(Math.random() * 6 + 1);
    y = Math.floor(Math.random() * 6 + 1);
    console.log(`${x}, ${y}`);

    if (x + y == 5) {
      break;
    }
  }
}
sum();

// 로또번호 6개 추출 후 배열에 담은 후 출력
const arr = [];
for (let index = 0; arr.length < 6; index++) {
  let num = Math.floor(Math.random() * 45 + 1);

  if (!arr.includes(num)) {
    arr.push(num);
  }
}
console.log(arr.sort());
