import { initalUser, type UserType } from "./UserApp2";
// useReducer()
// set~~ 작업 : action 선언

type UserAction =
  | {
      type: "SET_NAME";
      name: string;
    }
  | { type: "SET_YEAR"; year: number }
  | { type: "RESET" };

export function userReducer(state: UserType, action: UserAction) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.name.trim().toLowerCase(),
      };
    case "SET_YEAR":
      const age = new Date().getFullYear() - action.year;
      if (age < 18) {
        return {
          ...state,
          year: action.year,
          warning: "未成年は閲覧できません",
        };
      } else {
        return { ...state, year: action.year, warning: "" };
      }
    case "RESET":
      return initalUser;
    default:
      throw new Error("Unknown action type");
  }
}
