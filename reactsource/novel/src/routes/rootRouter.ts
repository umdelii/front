import { createBrowserRouter } from "react-router-dom";
import Home from "../components/novels/Home";
import { novelRouter } from "./novelRouter";

// http:localhost:5173/ => Home
// http:localhost:5173/novels/add => Add
// http:localhost:5173/novels/edit/{id} => Edit
// http:localhost:5173/novels/{id} => Detail

const rootRouter = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/novels",
    children: novelRouter(),
  },
]);

export default rootRouter;
