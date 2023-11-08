import { BrowserRouter } from "react-router-dom";
import { ScrollRestoration } from "../components/ScrollRestoration";
import { useAuth } from "../hooks/auth";

import { UserAppRoutes } from "./app.user.routes";
import { AdminAppRoutes } from "./app.admin.routes";
import { AuthRoutes } from "./app.auth.routes";

export function Routes() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <ScrollRestoration />
      {user ? (
        user.isAdmin === 1 ? (
          <AdminAppRoutes />
        ) : (
          <UserAppRoutes />
        )
      ) : (
        <AuthRoutes />
      )}
    </BrowserRouter>
  );
}
