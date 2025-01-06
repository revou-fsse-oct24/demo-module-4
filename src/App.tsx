import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TodoList from "./components/TodoList";
import Login from "./components/Login";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />

          {/* <Outlet /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
