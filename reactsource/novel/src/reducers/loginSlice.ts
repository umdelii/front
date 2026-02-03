import { createSlice } from "@reduxjs/toolkit";
import type { LoginResponse } from "../types/user";

// useState << useContext , react-redux 라이브러리로 편하게 괸리

// 초기값 설정
const initialState: LoginResponse = {
  email: "",
  password: "",
  nickname: "",
  social: false,
  roles: [],
  accessToken: "",
};

export const loginSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      console.log("login");
      // loginParam
      const { email, password } = action.payload;
      state.email = email;
    },
    logout: (state) => {
      console.log("logout");
      state.email = "";
    },
  },
});

// 외부에서 사용할 수 있도록 함수(action) 내보내기
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
