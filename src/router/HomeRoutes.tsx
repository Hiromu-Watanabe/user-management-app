import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";

export const homeRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user_management",
    element: <UserManagement />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
];
