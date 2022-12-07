import React, { useContext } from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../Hooks/useAdmin";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, isUser, isSeller] = useAdmin(user?.email);

  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer drawer-mobile lg:px-24 md:px-6 px-3 py-10 ">
        <input id="drawer-modal" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side  rounded lg:mr-10 mr-0 mt-12">
          <label htmlFor="drawer-modal" className="drawer-overlay"></label>
          <ul className="menu p-4 md:w-72 w-full bg-base-100 text-base-content">
            {isUser && (
              <li className="border border-warning mb-1">
                <Link to="/dashboard/myOrder">My Order</Link>
              </li>
            )}

            {isAdmin && (
              <li className="border border-warning mb-1">
                <Link to="/dashboard/buyerAndSeller">Buyer and Seller</Link>
              </li>
            )}

            {isSeller && (
              <>
                <li className="border border-warning mb-1">
                  <Link to="/dashboard/myProduct">My Products</Link>
                </li>
                <li className="border border-warning mb-1">
                  <Link to="/dashboard/addProduct">Add Product</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
