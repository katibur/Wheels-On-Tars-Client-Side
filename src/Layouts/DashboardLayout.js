import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import useAdmin from '../Hooks/useAdmin/useAdmin';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import useSeller from '../Hooks/isSeller/useSeller';
import useBuyer from '../Hooks/useBuyer/useBuyer';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content bg-slate-700 mx-2">

                        {
                            isBuyer &&
                            <li><Link to='/dashboard'>My Orders</Link></li>
                        }
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/users'>All Users</Link></li>
                                <li><Link to='/dashboard/seller'>All Seller</Link></li>
                                <li><Link to='/dashboard/buyer'>All Buyers</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                                <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;