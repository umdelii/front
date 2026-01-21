import React, { useReducer } from "react";
import { userReducer } from "./userReducer";

export type UserType = {
  name: string;
  year: number;
  warning: string;
};

export const initalUser: UserType = {
  name: "",
  year: 0,
  warning: "",
};

function UserApp2() {
  // const [user, setUser] = useState<UserType>(initalUser);
  // useReducer(reducer함수명,초기화값);
  const [user, dispatch] = useReducer(userReducer, initalUser);
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
      dispatch({
        type: "SET_NAME",
        name: value,
      });
    } else {
      dispatch({
        type: "SET_YEAR",
        year: Number(value),
      });
    }
  };

  const onReset = () => {
    dispatch({
      type: "RESET",
    });
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

export default UserApp2;
