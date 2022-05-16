import SignupPage from "../src/pages/signupPage";
import Login_signup from "../src/pages/login_signup";
import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Outlet, Navigate } from "react-router-dom";
import Details from "./pages/Details";
import Dashboard from "./pages/Dashboard";
import TimeLine from "./components/Timeline";
import Time from "./components/Time";
import ApplyForIntreview from "./components/ApplyForIntreview";
import SideNavbar from "./components/SideNavbar";
import DashboardPage from "./pages/DashboardPage";
import TabPanel from "./components/TasksSection";
import Resources from "./components/ResourcesSection";

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
          <Route path="/timeline" element={<TimeLine />} />
          <Route path="/time" element={<Time />} />
          <Route path="/sidenavbar" element={<SideNavbar />} />
          <Route path="/tasks" element={< TabPanel />} />
          <Route path="/resources" element={< Resources />} />
          <Route path="/apply" element={<ApplyForIntreview />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Login_signup />} />
          </Route>
          {/* <Route path="/signup" element={<PrivateRoute />}>
						<Route path="/signup" element={<SignupPage />} />
					</Route> */}
          <Route path="/details" element={<PrivateRoute />}>
            <Route path="/details" element={<Details />} />
          </Route>
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
