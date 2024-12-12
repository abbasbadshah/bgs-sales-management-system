import Login from "./pages/auth/login";
import { Dashboard } from "./pages/dashboard";
import { AddStores } from "./pages/dashboard/admin/stores";

export const routes = [
  {
    path: "login",
    component: Login,
    exact: true,
  },
  {
    path: "/",
    component: Dashboard,
    exact: true,
  },
  {
    path: "dashboard/add-store",
    component: AddStores,
    exact: true,
  },
];
