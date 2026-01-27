import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TaskApp from "./component/reducer/TaskApp.tsx";
import Memo from "./component/memo/Memo.tsx";
import Parent from "./component/memo/Parent.tsx";
import LifeCycle2 from "./component/effect/LifeCycle2.tsx";
import Navbar from "./router/declarative/Navbar.tsx";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./router/data/routes.ts";
import Consumer from "./context/Consumer.tsx";
import { AuthProvider } from "./router/data/AuthContext.tsx";
import { Provider } from "react-redux";
import App from "./App.tsx";
import MyTodo from "./redux/component/MyTodo.tsx";
import { configureStore } from "@reduxjs/toolkit";
import rootReduer from "./redux/modules/index.ts";

const store = configureStore({ reducer: rootReduer });

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
    {/* <Parent /> */}
    {/* <BrowserRouter>
      <Navbar />
    </BrowserRouter> */}
    {/* <Provider>
      <RouterProvider router={router} />
    </Provider> */}
    <Provider store={store}>
      <MyTodo />
    </Provider>
    {/* <Consumer /> */}
  </StrictMode>,
);
