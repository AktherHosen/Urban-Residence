import React, { useContext, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    if (password.length < 6) {
      toast.error("Your password must contains at least 6 character");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Your password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Your password must contain at least one lowercase letter");
      return;
    }
    createUser(email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => toast.success("profile updated"))
          .catch((error) => toast.error(error));
        e.target.reset();
      })
      .catch((error) => toast.error(error));
  };
  return (
    <div className="p-4">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <h1 className="text-center my-4 text-xl font-exo text-vsecondary font-semibold">
        Please Register
      </h1>
      <div className="flex justify-center">
        <form
          onSubmit={handleRegister}
          className="w-full md:w-[450px] border shadow-sm p-4"
        >
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="block border rounded-sm px-3 py-2 my-1 w-full"
            placeholder="Enter your name"
          />
          <label className="label">Photo Url</label>
          <input
            type="text"
            name="photo"
            className="block border rounded-sm px-3 py-2 my-1 w-full"
            placeholder="Enter your photo url"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="block border rounded-sm px-3 py-2 my-1 w-full"
            placeholder="Enter your email"
          />
          <div className="relative">
            <label className="label">Password</label>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="border rounded-sm px-3 py-2 my-1 w-full"
              placeholder="Enter your password"
            />

            <span
              className="absolute right-3 top-[75%] transform -translate-y-1/2 cursor-pointer"
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
