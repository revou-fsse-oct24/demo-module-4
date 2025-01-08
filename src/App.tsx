import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TodoList from "./components/TodoList";
import Login from "./components/Login";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <div className="container">
            <div className="container mx-auto px-4">
              <Routes>
                <Route path="/" element={<Home />} />

                {/* Protected Routes */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/todos" element={<TodoList />} />
                  <Route path="/profile" element={<Profile />} />
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
