import logo from "./logo.svg";
import SignupPage from "../src/pages/signupPage";
import Login_signup from "../src/pages/login_signup";
import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Outlet, Navigate } from "react-router-dom";
import Details from "./pages/Details";
import ProfileProgress from "./components/ProfileProgress";
import InterviewScheduleCard from "./components/InterviewScheduleCard";
function App() {
  const PrivateRoute = () => {
    const token = localStorage.getItem("token");
    return token ? <Outlet /> : <Navigate to="/login" />;
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          // open routes
          <Route path="/login" element={<Login_signup />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Login_signup />} />
          </Route>
          <Route path="/signup" element={<PrivateRoute />}>
            <Route path="/signup" element={<SignupPage />} />
          </Route>
          <Route path="/details" element={<PrivateRoute />}>
            <Route path="/details" element={<Details />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
