// fetch

// 페이지가 로드되면
const txtYear = document.getElementById("txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.getElementById("selDay");

const init = () => {
  // 1. 어제 날짜 보여주기
  const now = new Date();
  console.log(now);
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 월은 0부터 시작해서 1이 부족함
  const day = now.getDate() - 1; // 어제 날짜
  console.log(year, month, day);

  // 구한 날짜를 input박스에 집어넣기 -> default 설정? no, select 구문이니니까 value에 넣으면 되잖아
  txtYear.value = year;
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day;
};
init();

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  // 사용자가 입력한 날짜 가져오기
  const date = txtYear.value + selMon.value + selDay.value;
  console.log(date);
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=4cb70ff720190b15c359feb102373232&targetDt=${date}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      // movieCd, movieNm, rank, rankInten 값 보고싶어
      const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
      dailyBoxOfficeList.forEach((item) => {
        console.log(item.movieCd, item.movieNm, item.rank, item.rankInten);
      });
    });
});
