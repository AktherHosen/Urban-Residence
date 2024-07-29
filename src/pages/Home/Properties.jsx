import React from "react";
import slider1 from "../../assets/slider1.jpg";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi2";
import { IoBed, IoCarSport } from "react-icons/io5";
import { FaBath, FaMap } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Properties = () => {
  return (
    <div className="p-4">
      <div className="text-center my-6">
        <h1 className="text-xl font-exo text-vsecondary font-semibold">
          Latest Properties
        </h1>
        <p>List and order properties as you wish</p>
      </div>
      <div>
        <div className="w-[350px] border shadow-md ">
          <div>
            <img src={slider1} className="w-full" alt="" />
          </div>
          <div className="p-4 space-y-2">
            <h1 className="text-lg font-semibold">Townhouse for rent</h1>
            <h3 className="flex gap-1 items-center font-semibold text-vsecondary">
              <HiOutlineCurrencyBangladeshi size={20} /> 20,000
              <span className="text-sm">/ month</span>
            </h3>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              dignissimos id consequuntur ad{" "}
              <Link className="hover:underline text-vsecondary">
                Learn more...
              </Link>
            </p>
            <div className="flex gap-x-4 my-4">
              <div className="flex items-center gap-1">
                <IoBed />3
              </div>
              <div className="flex items-center gap-1">
                <FaBath />2
              </div>
              <div className="flex items-center gap-1">
                <IoCarSport /> Yes
              </div>
              <div className="flex items-center gap-1">
                <FaMap />
                250 ft<sup>2</sup>
              </div>
            </div>
          </div>

          <div className="border-t">
            <div className="p-4 flex justify-between">
              <HiOutlineUserCircle size={25} />
              <h1 className="text-md">NowsCode</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
