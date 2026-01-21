import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TaskApp from "./component/reducer/TaskApp.tsx";
import Memo from "./component/memo/Memo.tsx";
import Parent from "./component/memo/Parent.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App />
    <Book></Book> */}
    {/* <MyApp /> */}
    {/* <Parent></Parent> */}
    {/* <CardApp /> */}
    {/* <Products /> */}
    {/* <ParentCardLayout /> */}
    {/* <Counter /> */}
    {/* <InputSample /> */}
    {/* <InputMultiSample /> */}
    {/* <InputMultiSample2 /> */}
    {/* <Say /> */}
    {/* <Poster /> */}
    {/* <MyBtn /> */}
    {/* <CounterRef /> */}
    {/* <InputRef /> */}
    {/* <Button /> */}
    {/* <Button2 /> */}
    {/* <Toolbar /> */}
    {/* <Signup /> */}
    {/* <Signup2 /> */}
    {/* <UserForm /> */}
    {/* <LifeCycle /> */}
    {/* <LifeCycle2 /> */}
    {/* <BookApp /> */}
    {/* <TaskApp /> */}
    {/* <UserApp /> */}
    {/* <UserApp2 /> */}
    {/* <TaskApp /> */}
    {/* <Memo /> */}
    <Parent />
  </StrictMode>,
);
