import React, { useState } from "react";
import "../../App.css";

function InputMultiSample() {
  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNickname(e.target.value);

  return (
    <>
      <input
        type="text"
        name=""
        id=""
        className="border-2 p-1.5"
        onChange={handleNameChange}
        value={name}
        placeholder="이름"
      />
      <input
        type="text"
        name=""
        id=""
        className="border-2 p-1.5"
        onChange={handleNicknameChange}
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
