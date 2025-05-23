import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/homelayout/pages/Home";
import CategoryNews from "../components/homelayout/pages/CategoryNews";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element:<HomeLayout></HomeLayout>,
            children: [
                {
                    path: "",
                    element: <Home></Home>
                },
                {
                    path: "/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: ()=>fetch("/news.json")
                }
            ]
        },
        {
            path: '/auth',
            element: <h2>Authentication Layout</h2>
        },
        {
            path: '/news',
            element: <h2>News Layout</h2>
        },
        {
            path: '/*',
            element: <h2>Error404</h2>
        },
    ]
)

export default router;