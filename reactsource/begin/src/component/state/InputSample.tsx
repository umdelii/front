import React, { useState } from "react";
import "../../App.css";

function InputSample() {
  const [text, setText] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);
  // enter 이벤트 해본적 없어서 만들어봄
  const enterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      console.log("press enterKey");
      setText("");
    }
  };
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        className="border-2 p-1.5"
        onChange={handleChange}
        onKeyDown={enterKey}
        value={text}
      />
      <button className="bg-cyan-600 p-2" onClick={() => setText("")}>
        초기화
      </button>
      <div>
        <b>현재값 : {text}</b>
      </div>
    </>
  );
}

export default InputSample;
