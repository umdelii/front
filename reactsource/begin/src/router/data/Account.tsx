import { NavLink, Outlet } from "react-router-dom";
import BasicLayout from "./BasicLayout";

function Account() {
  return (
    <>
      <BasicLayout>
        <nav className="itmes-center flex h-20 p-3">
          {/* 메뉴 선택 시 active => 자동으로 판별(현재 url과 일치여부)*/}
          <NavLink to={"login"} className="basis-3xs">
            {({ isActive }) => (
              <span
                className={
                  isActive
                    ? "border-b-2 px-4 py-2 font-semibold text-blue-600"
                    : ""
                }
              >
                LOGIN
              </span>
            )}
          </NavLink>
          <NavLink to={"register"} className="basis-3xs">
            {({ isActive }) => (
              <span
                className={
                  isActive
                    ? "border-b-2 px-4 py-2 font-semibold text-blue-600"
                    : ""
                }
              >
                REGISTER
              </span>
            )}
          </NavLink>
          {/* 자식 컴포넌트 자리 */}
        </nav>
        <Outlet />
      </BasicLayout>
    </>
  );
}

export default Account;
