import { createBrowserRouter } from "react-router-dom";

import Home from "../../Pages/Home/Home";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import Main from "../../Layouts/Main/Main";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Blogs from "../../Pages/Blogs/Blogs";
import Products from "../../Pages/Products/Products";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/categories/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`),
                element: <Products></Products>
            }
        ]
    }
]);