import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";

function App() {
  return (
    <div className="flex max-w-6xl mx-auto">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
