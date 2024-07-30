import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/agents">Agents</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    userLogOut().then().catch();
  };
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box flex gap-2 z-[3] mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>

        <Link to="/">
          <div className="flex items-center">
            <img src={logo} className="h-12" alt="" />
            <h2 className="uppercase font-bold text-start text-sm font-exo">
              Urban <br />
              <span className="text-vsecondary text-lg ">Residence</span>
            </h2>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-x-2">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown  dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="bg-transparent border-none m-1"
          >
            {user ? (
              <>
                <img src={user.photoURL} className="h-10 rounded-full" alt="" />
              </>
            ) : (
              <FaUserCircle size={25} />
            )}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 space-y-1 rounded-box z-[3] w-52 p-2 shadow"
          >
            {user ? (
              <>
                <li>
                  <button
                    onClick={handleLogOut}
                    className=" hover:bg-red-500 hover:text-white"
                  >
                    Logout
                  </button>
                </li>
                <li className="">
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to={`/updateProfile/${user.uid}`}>Update Profile</Link>
                </li>
              </>
            ) : (
              <>
                <li className="">
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
