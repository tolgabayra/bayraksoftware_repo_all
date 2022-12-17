import { useRoutes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notfound from "./pages/Notfound";
import Dasboardlayout from "./layouts/Dasboardlayout";
import { Children } from "react";
import Settings from "./pages/Settings";

export default function Routes(){
    return useRoutes([
        {
            path: "/dashboard",
            element: <Dasboardlayout />,
            children: [
                {path: "", element: <Dashboard />},
                {path: "settings", element: <Settings />}
            ]
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "*",
            element: <Notfound />
        }
    ])
}