import { memo, FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { homeRoutes } from "../router/HomeRoutes";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="home/*"
        element={
          <Routes>
            {homeRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
            {/* 下記コードは上記コードと同じことをやっている 
            <Route index element={<Home />} />
            <Route path="user_management" element={<UserManagement />} />
            <Route path="setting" element={<Setting />} />
            */}
          </Routes>
        }
      />
    </Routes>
  );
});

Router.displayName = "Router";
