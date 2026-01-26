import type { ReactNode } from "react";
import Navbar from "./Navbar";

function BasicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </>
  );
}

export default BasicLayout;
