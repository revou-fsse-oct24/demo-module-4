import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/login">Login Page</Link>
    </div>
  );
};

export default Navbar;
