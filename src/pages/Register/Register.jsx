import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="p-4">
      <h1 className="text-center my-4 text-xl font-exo text-vsecondary font-semibold">
        Please Register
      </h1>
      <div className="flex justify-center">
        <form action="" className="w-full md:w-[450px] border shadow-sm p-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="block border rounded-sm px-3 py-2 my-1 w-full"
            placeholder="Enter your name"
          />
          <label htmlFor="photo">Photo Url</label>
          <input
            type="text"
            name="photo"
            className="block border rounded-sm px-3 py-2 my-1 w-full"
            placeholder="Enter your photo url"
          />
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
          <button className="w-full px-3 py-2 rounded-sm bg-[#4e3482] font-semibold text-white my-2 cursor-pointer">
            Register
          </button>
          <h3>
            Already have an account? Please
            <Link to="/login" className="text-vsecondary hover:underline">
              <span> </span> Login
            </Link>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Register;
