import React from "react";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi2";
import { IoBed, IoCarSport } from "react-icons/io5";
import { FaBath, FaMap } from "react-icons/fa";

import { Link } from "react-router-dom";
const PropertiesCard = ({ estate }) => {
  const {
    id,
    estate_title,
    image,
    description,
    price,
    status,
    area,
    bed,
    bath,
  } = estate;
  return (
    <div>
      <p>{estate.length}</p>
      <div className="w-full md:w-auto border shadow-md ">
        <div className="overflow-hidden w-full h-64 relative">
          <img
            src={image}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
            alt="Zoomable"
          />
        </div>
        <div className="p-4 space-y-2 ">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">{estate_title}</h1>
            <h1 className="bg-[#4e3482] text-white px-3  rounded-full ">
              {status}
            </h1>
          </div>
          <h3 className="flex gap-1 items-center font-semibold text-vsecondary">
            <HiOutlineCurrencyBangladeshi size={20} /> {price}
          </h3>

          {description.length > 100 ? (
            <p className="text-md text-start text-[#5a5a5a]">
              {description.slice(0, 100)}{" "}
              <Link
                to={`/property/${id}`}
                className="hover:underline hover:text-vsecondary"
              >
                Learn More..
              </Link>
            </p>
          ) : (
            <p className="text-md text-[#737373]">{description}</p>
          )}
          <div className="flex gap-x-4 my-4 text-vprimary">
            <div className="flex items-center gap-1">
              <IoBed />
              {bed}
            </div>
            <div className="flex items-center gap-1">
              <FaBath />
              {bath}
            </div>
            <div className="flex items-center gap-1">
              <IoCarSport /> Yes
            </div>
            <div className="flex items-center gap-1">
              <FaMap />
              {area}
              <sup>2</sup>
            </div>
          </div>
        </div>

        <div className="p-4  border-t">
          {/* <div className="p-4 flex justify-between">
            <HiOutlineUserCircle size={25} />
            <h1 className="text-md">NowsCode</h1>
          </div> */}

          <button className="bg-[#4e3482] w-full text-white  py-3">
            <Link to={`/property/${id}`}>View Property</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCard;
