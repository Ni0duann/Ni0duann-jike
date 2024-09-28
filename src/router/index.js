//路由配置
import { AuthRoute } from "@/components/AuthRoute";
import Article from "@/pages/Article";
import Home from "@/pages/Home";
import Layout from "@/pages/Layout";
import Login from  "@/pages/Login"
import Pubish from "@/pages/Publish";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <AuthRoute> <Layout /></AuthRoute>,
        children: [
            {
                index:'true',
                element: <Home />
            },
            {
                path:'article',
                element:<Article />
            },
            {
                path:'publish',
                element:<Pubish />
            }
        ]
    },
    {
        path:"/login",
        element: <Login />
    }
])

export default router