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
        <NavLink>Home</NavLink>
      </li>

      <li>
        <NavLink>About</NavLink>
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
        <div className="flex items-center">
          <img src={logo} className="h-12" alt="" />
          <h2 className="uppercase font-bold text-start text-sm font-exo">
            Urban <br />
            <span className="text-vsecondary text-lg ">Residence</span>
          </h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-x-2">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <details className="dropdown dropdown-end ">
          <summary className="btn outline-none border-none bg-transparent m-1">
            {user ? (
              <>
                <img src={user.photoURL} className="h-10 rounded-full" alt="" />
              </>
            ) : (
              <FaUserCircle size={25} />
            )}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[2] flex flex-col gap-1  w-40 p-2 shadow">
            {user ? (
              <>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="bg-red-500 text-white hover:bg-red-500"
                  >
                    Logout
                  </button>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link>Update Profile</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </details>
      </div>
    </div>
  );
};

export default Navbar;
