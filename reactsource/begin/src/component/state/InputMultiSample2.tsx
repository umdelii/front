import React, { useState } from "react";
import "../../App.css";

function InputMultiSample() {
  const [inputs, setInputs] = useState<{ name: string; nickname: string }>({
    name: "",
    nickname: "",
  });

  // 구조분해
  const { name, nickname } = inputs;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <>
      <input
        type="text"
        name=""
        id=""
        className="border-2 p-1.5"
        onChange={handleChange}
        value={name}
        placeholder="이름"
      />
      <input
        type="text"
        name=""
        id=""
        className="border-2 p-1.5"
        onChange={handleChange}
        value={nickname}
        placeholder="닉네임"
      />
      <button
        className="bg-cyan-600 p-2"
        onClick={() => {
          setName("");
          setNickname("");
        }}
      >
        초기화
      </button>
      <div>
        <b>
          입력값 : {name} : ({nickname})
        </b>
      </div>
    </>
  );
}

export default InputMultiSample;
