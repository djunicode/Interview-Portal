import SignupPage from "../src/pages/signupPage";
import Login_signup from "../src/pages/login_signup";
import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Outlet, Navigate } from "react-router-dom";
import TimeLine from "./components/Timeline";
import Time from "./components/Time";
import ApplyForIntreview from "./components/ApplyForIntreview";
import SideNavbar from "./components/SideNavbar";
import DashboardPage from "./pages/DashboardPage";
import TabPanel from "./components/TasksSection";
import Profile from "./pages/Profile";
import ResourcePage from "./pages/ResourcePage";
import ApplicationForm from "./pages/ApplicationForm";
import AdminPanel from "./pages/AdminPanel";
import FaqPage from "./pages/FaqPage";
import PanelName from "./components/PanelName";
import Dialog from "./components/DialogQuestions";

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
          <Route path="/signup" element={<SignupPage />} />

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Login_signup />} />
          </Route>
          <Route path="/ApplicationForm" element={<PrivateRoute />}>
            <Route path="/ApplicationForm" element={<ApplicationForm />} />
          </Route>
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/admin" element={<PrivateRoute />}>
            <Route path="/admin" element={<AdminPanel />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
