import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page
import Home from "./page/Home";
import Login from "./page/Login";
import Profile from "./page/Profile";
import TodoList from "./page/TodoList";
import NotFound from "./page/NotFound";
import ExampleRef from "./page/ExampleRef";
import CustomHooks from "./page/CustomHooks";
import ExampleMemo from "./page/ExampleMemo";
import ExampleCallback from "./page/ExampleCallback";
import StateVsRefExample from "./page/StateVsRef";

// Component
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// Context
import { UserProvider } from "./context/UserContext";
import { TodoProvider } from "./context/TodoContext";

const App = () => {
  return (
    <UserProvider>
      <TodoProvider>
        <Router>
          <div className="min-h-screen">
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />

              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/todos" element={<TodoList />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/exampleref" element={<ExampleRef />} />
                <Route path="/statevsref" element={<StateVsRefExample />} />
                <Route path="/examplememo" element={<ExampleMemo />} />
                <Route path="/examplecallback" element={<ExampleCallback />} />
                <Route path="/examplecustomhooks" element={<CustomHooks />} />
              </Route>

              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </TodoProvider>
    </UserProvider>
  );
};

export default App;
