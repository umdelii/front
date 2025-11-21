// Promise(자바스크립트에서 비동기 작업 처리 객체)
// 상태
// 1. pending(대기)
// 2. fulfilled(이행)
// 3. rejected(실패)
// new Promise(); // 대기

// 성공 : resolve()
// 실패 : reject()
// new Promise((resolve, reject) => {});
// // 성공
// resolve();
// // 실패
// reject();

const p1 = new Promise((resolve, reject) => {
  console.log("시작");
  setTimeout(() => {
    const isSuccess = true;

    if (isSuccess) {
      resolve("요청 성공");
    } else {
      reject(new Error("실패"));
    }
  }, 3000);
});

p1.then((result) => console.log("성공적으로 처리 됨", result))
  .catch((error) => {
    console.log("오류 발생");
  })
  .finally(() => {
    console.log("무조건 실행");
  });

const p2 = fetch("https://jsonplaceholder.typicode.com/todos/1");
p2.then((response) => response.json()).then((data) => console.log(data));
