import { createBrowserRouter } from "react-router-dom";

import Home from "../../Pages/Home/Home";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import Main from "../../Layouts/Main/Main";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Blogs from "../../Pages/Blogs/Blogs";
import Products from "../../Pages/Products/Products";
import errorPhoto from '../../assets/errorPhoto.png';
import Payment from "../../Pages/Dashboard/Payment/Payment";
import PrivateRouter from "../PrivateRoutes/PrivateRouter";
import DashboardLayout from "../../Layouts/DashboardLayout";
import BookedProducts from "../../Pages/Dashboard/BookedProducts/BookedProducts";
import AdminRoute from "../PrivateRoutes/AdminRoute";
import AllUsers from "../../Pages/Allusers/Allusers";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Dashboard from '../../Pages/Dashboard/Dashboard';
import AllSellers from "../../Pages/AllSellers/AllSellers";
import AllBuyers from "../../Pages/AllBuyers/AllBuyers";
import WishList from "../../Pages/Dashboard/WishList/WishList";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";

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
    },
    {
        path: '/dashboard',
        element: <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>
            },
            {
                path: '/dashboard/myorders',
                element: <PrivateRouter><BookedProducts></BookedProducts></PrivateRouter>
            },
            {
                path: '/dashboard/wishlist',
                element: <PrivateRouter><WishList></WishList></PrivateRouter>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/sellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/buyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/reportedItems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>
            },
            {
                path: '/dashboard/myProducts',
                element: <PrivateRouter><MyProducts></MyProducts></PrivateRouter>
            },
            {
                path: '/dashboard/payment/:id',
                element: <PrivateRouter> <Payment></Payment></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <div className="max-w-screen-2xl mx-auto my-10"><img className="mx-auto" src={errorPhoto} alt="" /></div>
    }
]);