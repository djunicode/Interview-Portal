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
import { useNavigate } from "react-router";
import PanelName from "./components/PanelName";

function App() {

  const PrivateRoute = () => {
    const token = localStorage.getItem("token");
    const is_interviewer = localStorage.getItem("is_interviewer");

    return token ? <Outlet /> : <Navigate to="/login" />;
  };
  return (
    <Router>

      <div className="App">
        <Routes>
          // open routes


          <Route path="/login" element={<Login_signup />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/timeline" element={<TimeLine />} />
          <Route path="/time" element={<Time />} />
          <Route path="/sidenavbar" element={<SideNavbar />} />
          <Route path="/tasks" element={<TabPanel />} />
          <Route path="/resources" element={<ResourcePage />} />
          <Route path="/apply" element={<ApplyForIntreview />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/pn" element={<PanelName />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Login_signup />} />
          </Route>
          {/* <Route path="/signup" element={<PrivateRoute />}>
						<Route path="/signup" element={<SignupPage />} />
					</Route> */}

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
