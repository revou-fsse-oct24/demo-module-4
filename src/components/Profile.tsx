import { useParams, useNavigate, redirect } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const newParams = username;

  const handleClickNavigation = () => {
    const isUserName = username;

    console.log("isUserName", isUserName);
    if (isUserName) {
      navigate("/todo");
    } else {
      navigate("/login");
    }
  };

  // tugas untuk besok, cobain implement 1 buah redirect method dan kapan kita pake redirect dibanding navigate

  return (
    <div>
      {/* menghandle kalau usernamenya kosong, tulis "no username" */}
      {/* ini adalah conditional ternary */}
      {/* kenapa pake ternary bukan pakai if else atau switch? */}
      {newParams ? (
        <h1>User Profile: {newParams}</h1>
      ) : (
        <h1>newParams not found</h1>
      )}

      <button onClick={handleClickNavigation}>Menuju halaman todo</button>
    </div>
  );
};

export default Profile;
