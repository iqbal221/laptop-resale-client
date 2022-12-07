import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import logo from "../../../Assets/images/logo.jpg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate;

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  const menuItems = (
    <li className="text-warning">
      <Link to="/">Home</Link>

      <Link to="/blogs">Blogs</Link>

      {user?.uid ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={handleLogout}>
            <Link className="btn  btn-outline btn-warning btn-sm ">
              Sign Out
            </Link>
          </button>
        </>
      ) : (
        <button>
          <Link className="btn btn-warning btn-outline btn-sm" to="/login">
            Login
          </Link>
        </button>
      )}
    </li>
  );

  return (
    <div className="navbar bg-neutral flex justify-between lg:px-24 md:px-10 px-3 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-white md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <div className="flex items-center ">
          <img className="w-8 h-8  mr-2 rounded-full" src={logo} alt="" />
          <Link to="/" className="font-400 text-2xl text-warning w-48">
            AN IT <span className="text-white">BARI</span>
          </Link>
        </div>
      </div>
      <div className="navbar-right hidden md:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <label
        htmlFor="drawer-modal"
        tabIndex={2}
        className="btn btn-white md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
