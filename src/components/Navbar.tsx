import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the user is logged in (based on the presence of a token)
  // const isLoggedIn = Boolean(localStorage.getItem("token"));

  const handleLogout = () => {
    // localStorage.removeItem("token"); // Remove the token from localStorage
    // navigate("/login"); // Redirect to the login page
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 justify-between">
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`px-4 py-2 rounded-md ${
                location.pathname === "/"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              Home
            </Link>
            <Link
              to="/todos"
              className={`px-4 py-2 rounded-md ${
                location.pathname === "/todo"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              Todo
            </Link>
          </div>

          {/* Login/Logout Button */}
          <div>
            <Link
              to="/login"
              className={`px-4 py-2 rounded-md ${
                location.pathname === "/login"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
