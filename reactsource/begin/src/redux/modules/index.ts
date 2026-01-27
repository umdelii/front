import { combineReducers } from "@reduxjs/toolkit";
import { counter } from "./counter";
import { todos } from "./todos";

export const rootReduer = combineReducers({
  counter,
  todos,
});

export type RootState = ReturnType<typeof rootReduer>;
export default rootReduer;
