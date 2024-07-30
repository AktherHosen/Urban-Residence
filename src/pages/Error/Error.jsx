import React from "react";
import errorImg from "../../assets/error.jpg";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="h-[500px] md:h-[600px] flex flex-col justify-center items-center">
      <img
        src={errorImg}
        className="flex justify-center items-center h-full"
        alt=""
      />
      <button className="bg-[#4e3482] px-6 text-white  py-2">
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default Error;
