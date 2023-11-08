import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/UserPages/Home";
import { Details } from "../pages/UserPages/Details";

export function UserAppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}
