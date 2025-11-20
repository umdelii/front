const products = [
  { id: 0, price: 77000, title: "Blossom Dress" },
  { id: 1, price: 55000, title: "SpringField Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];
// 배열 접근
console.log(products[0]);
// 배열의 객체 접근
console.log(products[0].title);
// 객체 배열 전체 접근
products.forEach((item) => {
  console.log(item);
});

// 제품의 정보들을 각 카드에 밀어넣기
// card=title : 제품 title
// card-text : 가격

// div.card 찾기
const divCards = document.querySelectorAll(".card");

divCards.forEach((card, idx) => {
  // .card-title 요소 찾기
  const title = card.querySelector(".card-title");
  // .card-text 찾기 => title 다음 형제요소니까 next~
  const price = title.nextElementSibling;

  title.textContent = products[idx].title;
  price.textContent = products[idx].price;
});
