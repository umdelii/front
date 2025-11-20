const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const car = document.querySelector(".carousel");

// transform = translate(-${100}vw) => translate(-${200}vw) => translate(-${300}vw)

let idx = 0;

prev.addEventListener("click", (e) => {
  if (idx === 0) {
    return;
  }

  idx -= 1;

  car.style.transform = `translate(-${100 * idx}vw)`;
});

next.addEventListener("click", (e) => {
  if (idx === 2) {
    return;
  }

  idx += 1;
  car.style.transform = `translate(-${100 * idx}vw)`;
});
