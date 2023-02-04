import { useRoutes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notfound from "./pages/Notfound";
import Dasboardlayout from "./layouts/Dasboardlayout";
import { Children } from "react";
import Settings from "./pages/Settings";
import Customers from "./pages/dashboard/Customers";
import Products from "./pages/dashboard/Products";

export default function Routes(){
    return useRoutes([
        {
            path: "/dashboard",
            element: <Dasboardlayout />,
            children: [
                {path: "", element: <Dashboard />},
                {path: "products", element: <Products />},
                {path: "customers", element: <Customers />},
                {path: "settings", element: <Settings />}
            ]
        },
        {
            path: "/",
            element: <Login />
            
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