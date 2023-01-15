import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import useAdmin from "../Hooks/useAdmin/useAdmin";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import useSeller from "../Hooks/isSeller/useSeller";
import useBuyer from "../Hooks/useBuyer/useBuyer";
import { IoAddCircle } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { ImUsers } from "react-icons/im";
import { ImManWoman } from "react-icons/im";
import { TbJewishStar } from "react-icons/tb";
import { VscReport } from "react-icons/vsc";
import Footer from "../Pages/Shared/Footer/Footer";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content overflow-hidden">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content bg-slate-700 mx-2">
            {isBuyer && (
              <>
                <li>
                  <Link to="/dashboard/myorders">
                    <RiShoppingCartFill></RiShoppingCartFill>My Orders
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/wishlist">
                    <TbJewishStar></TbJewishStar>WishList
                  </Link>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/users">
                    <HiUserGroup></HiUserGroup>All Users
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/sellers">
                    <ImUsers></ImUsers>All Seller
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/buyers">
                    <ImManWoman></ImManWoman>All Buyers
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/reportedItems">
                    <VscReport></VscReport>Reported Items
                  </Link>
                </li>
              </>
            )}
            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addProduct">
                    <IoAddCircle></IoAddCircle>Add Product
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/myProducts">
                    <FaStore></FaStore>My Products
                  </Link>
                </li>
              </>
            )}
            <div className="flex gap-3 mt-20">
              <div className="avatar pt-6">
                <div className="w-7 h-7 rounded">
                  <img src={user?.photoURL ? user.photoURL : ""} alt="" />
                </div>
              </div>
              <div>
                <Link className="text-center">View Profile</Link>
                <p>{user?.displayName ? user.displayName : "No Name"}</p>
                <p>{user?.email ? user.email : "No Email"}</p>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
