import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-gray-200">
        <nav className="itmes-center flex h-20 p-3">
          {/* 고정된 네비게이션 == a태그 */}
          <Link to={"/"} className="basis-3xs">
            HOME
          </Link>
          <Link to={"/about"} className="basis-3xs">
            ABOUT
          </Link>
          <Link to={"/contact"} className="basis-3xs">
            CONTACT
          </Link>
          <Link to={"/account"} className="basis-3xs">
            ACCOUNT
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
