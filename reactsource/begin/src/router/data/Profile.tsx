import { useEffect } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log("current path", location);
    // {pathname: '/account/profile/1', search: '', hash: '', state: null, key: 'default'}
  }, [location]);

  return (
    <>
      <h1 className="text-3xl">User</h1>
      <h1 className="text-3xl">Location : {location.pathname}</h1>
      <h1 className="text-3xl">User id : {id}</h1>
      <h1 className="text-3xl">{location.search}</h1>
      <h1 className="text-3xl">{searchParams.get("name")}</h1>
    </>
  );
}

export default Profile;
