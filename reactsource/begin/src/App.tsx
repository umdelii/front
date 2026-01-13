// import "./App.css";
import Array from "./component/Array";
import Hello from "./component/Hello";
import MyComponent from "./component/MyComponent";

function App() {
  const name = "react";

  // inline styling
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  const getGretting = (name: string): string => `Hello! ${name}`;
  const formDate = (date: Date): string => {
    return new Date(date).toLocaleDateString();
  };

  // <></> : react fragment
  //         いくつかの要素を一つにまとめる
  return (
    <>
      <label htmlFor=""></label>
      <input type="text" readOnly maxLength={4} />
      <p>{getGretting("Ian")}</p>
      <p>Today : {formDate(new Date())}</p>
      <p>
        Good
        {(() => {
          const hours = new Date().getHours();
          return hours < 12 ? " morning" : " afternoon";
        })()}
        {/* const init = () => {}() : 뒤()는 즉시실행함수 */}
      </p>
      <Hello></Hello>
      {/* 주석 */}
      <MyComponent />
      <div style={{ color: "red", fontSize: 25 }}>{name}</div>
      {/* if~else : 삼항연산자 */}
      {name === "react" ? <h1>reactです</h1> : <h1>reactではありません</h1>}
      {/* else가 없을 경우 : && */}
      {name === "react" && <h1>reactです</h1>}
      {/* ??, || : null,undefined인 경우 기본값을 제공하는 용도로 사용 */}
      {/* || : 공백(빈값)인 경우에도 기본값을 제공 */}
      <p style={style}>name : {name ?? <em>No Name</em>}</p>
      <p>name : {name || <em>Empty</em>}</p>
      <Array></Array>
    </>
  );
}

export default App;
