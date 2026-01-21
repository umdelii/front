import { useState } from 'react';
import type { SquareProps } from './types/types';

function Square({ value, handleClick }: SquareProps) {
  //   const [input, setInput] = useState();
  //   // click 시 해당하는 숫자를 alert창으로 띄우기
  //   const handleClick = () => {
  //     setInput('X');
  //   };

  return (
    <>
      <div>
        <button className="square" onClick={handleClick}>
          {value}
        </button>
      </div>
    </>
  );
}

export default Square;
