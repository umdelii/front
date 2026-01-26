import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-gray-200">
        <nav className="itmes-center flex h-20 p-3">
          <Link to={"/"} className="basis-3xs">
            HOME
          </Link>
          <Link to={"/about"} className="basis-3xs">
            ABOUT
          </Link>
          <Link to={"/contact"} className="basis-3xs">
            CONTACT
          </Link>
        </nav>
      </div>
      <Routes>
        {/* <Route path="/" Component={Home}></Route> */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/contact" Component={Contact}></Route>
        {/* <Route path="/account" Component={Contact}>
          <Route path="login" Component={Contact} />
          <Route path="register" Component={Contact} />
        </Route> */}
      </Routes>
    </>
  );
}

export default Navbar;
