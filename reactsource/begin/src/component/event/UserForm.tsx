import React, { useState } from "react";

const initUser = {
  username: "",
  isSubscribed: false,
  role: "user",
};

function UserForm() {
  const roles = ["user", "admin", "guest"];

  // name, role, subscribe => 상태관리 => 개별 or 통합
  const [formData, setFormData] = useState(initUser);
  const { username, role, isSubscribed } = formData;
  // input에 변화가 일어나는 것을 감지
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    // const { value, name, type, checked } = e.target;
    const target = e.target;
    const { name } = target;
    const nextForm = {
      ...formData,
      [name]:
        target instanceof HTMLInputElement && target.type === "checkbox"
          ? target.checked
          : target.value,
    };
    setFormData(nextForm);
  };

  return (
    <>
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-2xl space-y-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-center text-2xl font-semibold">USER</h2>
          <form action="">
            <div>
              Name : {username} {isSubscribed && "(Subscribed)"}
            </div>
            <div>Role : {role}</div>
            <div>
              <input
                type="text"
                name="username"
                id=""
                className="flex-1 rounded border px-3 py-2"
                placeholder="Name"
                onChange={handleChange}
                value={username}
              />
            </div>
            <div>
              <input
                type="checkbox"
                name="isSubscribed"
                id=""
                checked={isSubscribed}
                onChange={handleChange}
              />
              <label htmlFor="">Subscribe</label>
            </div>
            <div>
              <select name="role" id="" value={role} onChange={handleChange}>
                {roles.map((role, idx) => (
                  <option value={role} key={idx}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserForm;
