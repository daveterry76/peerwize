import { Route, Routes } from "react-router-dom";

import LogIn from "./pages/Auth/LogIn";
import SignUp from "./pages/Auth/SignUp";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Dashboard/Profile";
import Community from "./pages/Dashboard/Community";
import ChatRoom from "./components/Community/ChatRoom";
import ResourceLibrary, {
  Resources,
  SavedCourses,
} from "./pages/Dashboard/Resources";

import ProtectedRoute from "./components/ProtectedRoute";
import NoRoute from "./pages/404";

import "./styles/main.scss";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard title="Dashboard" />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/community" element={<Community />}>
            <Route path=":roomId" element={<ChatRoom />} />
          </Route>
          <Route path="/resourceLibrary" element={<ResourceLibrary />}>
            <Route path="resource" element={<Resources />} />
            <Route path="saved" element={<SavedCourses />} />
          </Route>

          <Route path="*" element={<NoRoute />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
