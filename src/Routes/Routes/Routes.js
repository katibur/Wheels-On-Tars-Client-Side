import { createBrowserRouter } from "react-router-dom";

import Home from "../../Pages/Home/Home";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import Main from "../../Layouts/Main/Main";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Blogs from "../../Pages/Blogs/Blogs";
import Products from "../../Pages/Products/Products";
import errorPhoto from "../../assets/errorPhoto.png";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import PrivateRouter from "../PrivateRoutes/PrivateRouter";
import DashboardLayout from "../../Layouts/DashboardLayout";
import BookedProducts from "../../Pages/Dashboard/BookedProducts/BookedProducts";
import AdminRoute from "../PrivateRoutes/AdminRoute";
import AllUsers from "../../Pages/Allusers/Allusers";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import AllSellers from "../../Pages/AllSellers/AllSellers";
import AllBuyers from "../../Pages/AllBuyers/AllBuyers";
import WishList from "../../Pages/Dashboard/WishList/WishList";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/categories/:id",
        loader: ({ params }) =>
          fetch(
            `https://wheels-on-tars-server-katibur.vercel.app/categories/${params.id}`
          ),
        element: <Products></Products>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/myorders",
        element: <BookedProducts></BookedProducts>,
      },
      {
        path: "/dashboard/wishlist",
        element: <WishList></WishList>,
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/sellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/buyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reportedItems",
        element: (
          <AdminRoute>
            <ReportedItems></ReportedItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/myProducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://wheels-on-tars-server-katibur.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="max-w-screen-2xl mx-auto my-10">
        <img className="mx-auto" src={errorPhoto} alt="" />
      </div>
    ),
  },
]);
