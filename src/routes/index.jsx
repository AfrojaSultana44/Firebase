import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/Homepage";
import LoginPage from "../Pages/LoginPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Homepage/>
            },
            {
                path: "/login",
                element: <LoginPage/>
            }
        ]
    }

])
