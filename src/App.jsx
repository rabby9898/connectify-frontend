import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
import Sidebar from "./component/common/Sidebar";
import NotificationPage from "./Pages/notification/NotificationPage";
import ProfilePage from "./Pages/profile/ProfilePage";
import RightPanel from "./component/common/RightPanel";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="flex max-w-6xl mx-auto">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
      </Routes>
      <RightPanel />
      <Toaster />
    </div>
  );
}
export default App;
