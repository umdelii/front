// 알림창 보여주기 button 클릭 시 알림창 활성화
const box = document.querySelector(".alert-box");
document.querySelector("button").addEventListener("click", () => {
  box.style.display = "block";
});

// x 클릭 시 창 닫기
document.querySelector(".close").addEventListener("click", () => {
  box.style.display = "none";
});
