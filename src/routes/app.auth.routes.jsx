import { Routes, Route } from "react-router-dom";

import { SignIn } from "../pages/LoginPages/SignIn";
import { SignUp } from "../pages/LoginPages/SignUp";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}
