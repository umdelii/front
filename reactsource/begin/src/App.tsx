import "./App.css";
import Hello from "./component/Hello";
import MyComponent from "./component/MyComponent";

function App() {

  const name = 'react';

  // <></> : react fragment 
  //         いくつかの要素を一つにまとめる
  return (
    <>
      <Hello></Hello>
      {/* 주석 */}
      <MyComponent/>
      <div>{name}</div>
      {/* if~else : 삼항연산자 */}
      {name === 'react' ? <h1>reactです</h1> : <h1>reactではありません</h1>}
      {/* else가 없을 경우 : && */}
      {name === 'react' && <h1>reactです</h1>}
    </>
  );
}

export default App;
