import { useRoutes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login"
import Register from "./pages/Register";

export default function Routes(){
    return useRoutes([
        {
            path: "/",
            element: <Dashboard />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        }
    ])
}