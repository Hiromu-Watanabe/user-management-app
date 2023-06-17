import { memo, FC } from "react";
import { Route, Routes } from "react-router-dom";

import { homeRoutes } from "../router/HomeRoutes";
import { Login } from "../components/pages/Login";
// import { Home } from "../components/pages/Home";
// import { UserManagement } from "../components/pages/UserManagement";
// import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="home/*"
        element={
          <Routes>
            {homeRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element}>
                <HeaderLayout>{route.element}</HeaderLayout>
              </Route>
            ))}
            {/* 下記コードは上記コードと同じことをやっている  */}
            {/* <Route index element={<Home />} />
            <Route path="user_management" element={<UserManagement />} />
            <Route path="setting" element={<Setting />} />
            <Route path="*" element={<Page404 />} /> */}
          </Routes>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});

Router.displayName = "Router";
