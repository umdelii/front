import { useRef, useState } from "react";
import "../../App.css";

function CounterRef() {
  // 컴포넌트가 기억해야 될 값을 만들고 관리
  // 초기값이 0인 상태 생성, 그 상태값을 저장하는 변수 == count
  // 값을 변경하는 함수는 setCount
  const [count, setCount] = useState(0);

  let num = useRef(0);
  const increament = () => {
    num.current += 1;
    console.log(num.current);
  };

  return (
    <>
      <div>
        <h1 className="text-3xl">{count}</h1>
        <button
          className="bg-orange-500 p-4"
          onClick={() => setCount(count + 1)}
        >
          useState
        </button>
        <h2>{num.current}</h2>
        <button className="bg-green-500 p-4" onClick={increament}>
          useRef
        </button>
      </div>
    </>
  );
}

export default CounterRef;
