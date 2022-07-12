import SignupPage from "../src/pages/signupPage";
import LoginSignup from "../src/pages/login_signup";
import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Outlet, Navigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import Profile from "./pages/Profile";
import ResourcePage from "./pages/ResourcePage";
import ApplicationForm from "./pages/ApplicationForm";
import AdminPanel from "./pages/AdminPanel";
import FaqPage from "./pages/FaqPage";
import ScorePage from "./pages/ScorePage";
function App() {
  const PrivateRoute = () => {
    const token = localStorage.getItem("token");
    return token ? <Outlet /> : <Navigate to="/login" />;
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<LoginSignup />} />

          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/faq" element={<PrivateRoute />}>
            <Route path="/faq" element={<FaqPage />} />
          </Route>
          <Route path="/ApplicationForm" element={<PrivateRoute />}>
            <Route path="/ApplicationForm" element={<ApplicationForm />} />
          </Route>
          <Route path="/resources" element={<PrivateRoute />}>
            <Route path="/resources" element={<ResourcePage />} />
          </Route>
          <Route path="/admin" element={<PrivateRoute />}>
            <Route path="/admin" element={<AdminPanel />} />
          </Route>
          <Route path="/admin/scorecard/:id" element={<PrivateRoute />}>
            <Route path="/admin/scorecard/:id" element={<ScorePage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
