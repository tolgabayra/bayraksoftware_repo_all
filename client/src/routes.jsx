import { useRoutes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login"

export default function Routes(){
    return useRoutes([
        {
            path: "/",
            element: <Dashboard />
        },
        {
            path: "/login",
            element: <Login />
        }
    ])
}