import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="p-4">
      <h1 className="text-center my-4 text-xl font-exo text-vsecondary font-semibold">
        Please Login
      </h1>
      <div className="flex justify-center">
        <div className="w-full md:w-[450px]  flex flex-col justify-center border shadow-sm p-4">
          <form action="" className="">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="block border rounded-sm px-3 py-2 my-1 w-full"
              placeholder="Enter your email"
            />
            <div className="relative">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="border rounded-sm px-3 py-2 my-1 w-full"
                placeholder="Enter your password"
              />
              <span
                className="absolute right-3 top-[65%] transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <IoMdEyeOff /> : <IoEye />}
              </span>
            </div>
            <button className="w-full px-3 py-2 rounded-sm bg-black font-semibold text-white my-2 cursor-pointer">
              Login
            </button>
            <h3>
              New here? Please
              <Link to="/register" className="text-vsecondary hover:underline">
                <span> </span> Register
              </Link>
            </h3>
          </form>
          <div className="mt-2">
            <p className="text-center font-exo">Sign in with</p>
            <div className="flex justify-center gap-4">
              <button className="border bg-orange-500 text-white rounded-sm p-1">
                <FaGoogle size={25} />
              </button>
              <button className="border bg-black text-white rounded-sm p-1">
                <FaGithub size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
