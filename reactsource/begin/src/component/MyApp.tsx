import type { Topic } from "../types/Topic";
import Article from "./Article";
import Header from "./Header";
import Nav from "./Nav";

const topics: Topic[] = [
  { id: 1, title: "html", body: "htmlとは" },
  { id: 2, title: "css", body: "cssとは" },
  { id: 3, title: "js", body: "javascriptとは" },
];

function MyApp() {
  return (
    <>
      <Header title={"WEB 構成要素"}></Header>
      <Nav topics={topics}></Nav>
      <Article></Article>
    </>
  );
}

export default MyApp;
