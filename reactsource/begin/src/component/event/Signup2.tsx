import { useState } from "react";
import type React from "react";

function Signup2() {
  // const [message, setMessage] = useState("");
  // const [username, setUsername] = useState("");

  // 위처럼 나눠쓰는거는 좋지않아 : 구조가 비슷하잖아
  const [form, setForm] = useState({
    message: "",
    username: "",
  });
  // 분해
  const { message, username } = form;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  return (
    <>
      <form action="" method="post">
        <input
          type="text"
          name="message"
          id=""
          placeholder="message"
          className="border p-2"
          // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          //   console.log("message :", e.target.value);
          //   onChange;
          // }}
          onChange={onChange}
        />
        <input
          type="text"
          name="username"
          id=""
          placeholder="username"
          className="m-1 border p-2"
          // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          //   console.log("username :", e.target.value);
          //   onChange;
          // }}
          onChange={onChange}
        />
      </form>
      <h3 className="text-2xl">
        {username} : {message}
      </h3>
    </>
  );
}

export default Signup2;
