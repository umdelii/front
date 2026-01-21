import React, { useState } from "react";

type UserType = {
  name: string;
  year: number;
  warning: string;
};

const initalUser: UserType = {
  name: "",
  year: 0,
  warning: "",
};

function UserApp() {
  const [user, setUser] = useState<UserType>(initalUser);
  const { name, year, warning } = user;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // 기본적인 코드(수업때 들었던)
    // const changeUser = {
    //   ...user,
    //   [name]: value,
    // };
    // setUser(changeUser);

    // 나이(성인 여부 판별, 미성년이면 warning 메세지)
    if (name === "name") {
      setUser({
        ...user,
        name: value.trim().toLowerCase(),
      });
    } else {
      const age = new Date().getFullYear() - Number(value);
      setUser({
        ...user,
        year: Number(value),
        warning:
          Number(value) !== 0 && age < 18 ? "未成年は閲覧できません" : "",
      });
    }
  };

  const onReset = () => {
    setUser(initalUser);
  };

  return (
    <>
      <div className="flex flex-col items-center px-3 py-2">
        <div className="flex w-full items-center gap-3">
          <div>
            <input
              type="text"
              name="name"
              className="flex-1 rounded border px-3 py-2"
              placeholder="Enter name"
              onChange={handleChange}
              value={name}
            />
          </div>
          <div>
            <input
              type="number"
              name="year"
              className="flex-1 rounded border px-3 py-2"
              placeholder="Enter birth year"
              onChange={handleChange}
              value={year}
            />
          </div>
          <button
            type="button"
            className="py-w rounded bg-teal-600 px-4 text-white"
            onClick={onReset}
          >
            reset
          </button>
          <div>
            <ul>
              <li>Name : {name}</li>
              <li>
                Year : {year}{" "}
                {warning && <span className="text-red-500">{warning}</span>}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserApp;
