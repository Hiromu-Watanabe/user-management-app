import { memo, FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";

//
export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/">
        <Login />
      </Route>
    </Routes>
  );
});

Router.displayName = "Router";
