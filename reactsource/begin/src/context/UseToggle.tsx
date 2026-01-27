import { useContext } from "react";
import { ToggleContext } from "./ToggleContext";

export function UseToggle() {
  // 상태를 보관하고 있는 context 가져오기
  // 따른 파일로 관리하기
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error("ToggleProvider null");
  }

  return context;
}
