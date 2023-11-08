import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/AdminPages/Home";
import { Details } from "../pages/AdminPages/Details";
import { New } from "../pages/AdminPages/New";
import { Edit } from "../pages/AdminPages/Edit";

export function AdminAppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}
