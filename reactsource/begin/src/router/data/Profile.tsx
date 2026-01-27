import { useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useAuth } from "./UseAuth";

function Profile() {
  // login context 추가 후 주소에서 가져올 필요 x
  // const location = useLocation();
  // const { id } = useParams();
  // const [searchParams] = useSearchParams();
  const { id } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("current path", location);
    // {pathname: '/account/profile/1', search: '', hash: '', state: null, key: 'default'}
  }, [location]);

  return (
    <>
      <h1 className="text-3xl">User</h1>
      <h1 className="text-3xl">Location : {location.pathname}</h1>
      <h1 className="text-3xl">User id : {id}</h1>
      {/* <h1 className="text-3xl">{location.search}</h1>
      <h1 className="text-3xl">{searchParams.get("name")}</h1> */}
      <button
        type="submit"
        className="m-2 rounded border bg-green-700 p-3"
        onClick={() => navigate("/account/logout")}
      >
        로그아웃
      </button>
    </>
  );
}

export default Profile;
