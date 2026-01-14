import { useState } from "react";
import "../../App.css";

function Counter() {
  // 컴포넌트가 기억해야 될 값을 만들고 관리
  // 초기값이 0인 상태 생성, 그 상태값을 저장하는 변수 == count
  // 값을 변경하는 함수는 setCount
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <>
      <div>
        <h1 className="text-3xl">{count}</h1>
        <button className="bg-orange-500 p-4" onClick={increase}>
          +1
        </button>
        <button className="bg-red-500 p-4" onClick={decrease}>
          -1
        </button>
      </div>
    </>
  );
}

export default Counter;
