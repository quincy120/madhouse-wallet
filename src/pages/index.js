import Login from "./AuthPages/Login/Index";
import Dashboard from "./SideTabPages/Dashboard";

export const routes = [{ path: "/login", component: <Login /> }];

export const privateRoutes = [{ path: "/dashboard", component: <Dashboard /> }];
