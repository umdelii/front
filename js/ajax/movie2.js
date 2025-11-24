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
  axios.get(url).then((response) => {
    console.log(response.data);

    // movieCd, movieNm, rank, rankInten 값 보고싶어
    const dailyBoxOfficeList = response.data.boxOfficeResult.dailyBoxOfficeList;
    let contents = "";
    dailyBoxOfficeList.forEach((item) => {
      console.log(item.movieCd, item.movieNm, item.rank, item.rankInten);

      // 1 위키드: 포 굿 (0)
      // 7 세계의 주인 (▲ 1) 이렇게 순위, 영화명, 순위등락 div 태그에 표현하기
      contents += `${item.rank}위 `;
      contents += `<a href = ${item.movieCd}>${item.movieNm}</a>`;
      contents += `(`;

      if (item.rankInten > 0) {
        contents += `▲ ${item.rankInten})`;
      } else if (item.rankInten < 0) {
        contents += `▽ ${item.rankInten})`;
      } else {
        contents += `${item.rankInten})`;
      }

      contents += `<br>`;
    });

    document.querySelector("#msg").innerHTML = contents;
  });
});

// 영화제목 링크 클릭 시
// 영화상세정보 요청
// http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=4cb70ff720190b15c359feb102373232&movieCd=20255381
// movieCd 값 가지고 와서 주소에 넣기
// a태그 기능 중지

// let movie = `${}`;
document.querySelector("#msg").addEventListener("click", (e) => {
  e.preventDefault();

  // 이벤트 대상 확인
  console.log(e.target);
  console.log(e.target.href); // http://121.160.42.72:5500/js/ajax/20255381
  console.log(e.target.getAttribute("href")); // 20255381

  const movieCd = e.target.getAttribute("href");
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=4cb70ff720190b15c359feb102373232&movieCd=${movieCd}`;

  // movieNm, movieNmEn, showTm, genres, directors.peopleNm, actors.peopleNm
  axios.get(url).then((response) => {
    console.log(response.data);
    const movieInfo = response.data.movieInfoResult.movieInfo;
    let content = "";

    content += `<h4>영화정보</h4><ul>`;
    content += `<li>영화이름 : ${movieInfo.movieNm}</li>`;
    content += `<li>영문영화이름 : ${movieInfo.movieNmEn} </li>`;
    content += `<li>런닝타임 : ${movieInfo.showTm}분 </li>`;

    content += `<li>장르 : `;
    movieInfo.genres.forEach((genre) => {
      content += `${genre.genreNm} `;
    });
    content += `</li>`;

    content += `<li>감독 : `;
    movieInfo.directors.forEach((director) => {
      content += `${director.peopleNm}`;
    });
    content += `</li>`;

    content += `<li>출연배우 <ul>`;
    movieInfo.actors.forEach((actor) => {
      content += `<li>${actor.peopleNm}</li>`;
    });
    content += `</ul></li>`;

    document.querySelector("#detail").innerHTML = content;
  });
});
