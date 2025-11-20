const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const wrap = document.querySelector(".wrap");

next.addEventListener("click", (e) => {
  wrap.style.transform = `translate(-${300 * 1}px)`;
});

prev.addEventListener("click", (e) => {
  wrap.style.transform = `translate(-${300 * 0}px)`;
});
