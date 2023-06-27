import { memo, FC } from "react";
import { Route, Routes } from "react-router-dom";

import { homeRoutes } from "../router/HomeRoutes";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { Page404 } from "../components/pages/Page404";
import { Login } from "../components/pages/Login";
import { LoginUserProvider } from "../providers/LoginUserProvider";
// import { Home } from "../components/pages/Home";
// import { UserManagement } from "../components/pages/UserManagement";
// import { Setting } from "../components/pages/Setting";

export const Router: FC = memo(() => {
  return (
    <LoginUserProvider>
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
                  element={<HeaderLayout>{route.element}</HeaderLayout>}
                ></Route>
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
    </LoginUserProvider>
  );
});

Router.displayName = "Router";
