import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi2";
import { IoBed, IoCarSport } from "react-icons/io5";
import { FaBath, FaMap } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";

const PropertyDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const estates = useLoaderData();
  const estate = estates.find((est) => est.id === idInt);

  const {
    estate_title,
    image,
    segment_name,
    description,
    price,
    area,
    bed,
    bath,
    location,
    facilities,
  } = estate;

  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <div className="p-4 font-exo my-4">
      <Helmet>
        <title>Property Details</title>
      </Helmet>
      <h1 className="animate__animated animate__bounce  animate__delay-2s animate__repeat-2  text-center my-4 text-xl font-exo text-vsecondary font-semibold">
        Property Details
      </h1>
      <div
        className="flex flex-col md:flex-row gap-4 border rounded-md shadow-sm p-2"
        data-aos="zoom-in-right"
      >
        <div className="w-full md:w-1/3">
          <img src={image} className="h-full w-full" alt="" />
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-center space-y-2 p-2">
          <h1 className="text-xl font-exo font-semibold">{estate_title}</h1>
          <small className="text-vsecondary font-bold">{segment_name}</small>
          <p className="text-md text-justify">{description}</p>
          <ul className="flex flex-col md:flex-row gap-2 md:items-center">
            <li className="text-md">Facilities : </li>
            {facilities.map((item, idx) => (
              <li key={idx} className="text-sm">
                <span className="font-bold text-vsecondary">🗸</span> {item}
              </li>
            ))}
          </ul>
          <p className="flex items-center gap-3">
            <FaMapLocationDot />
            {location}
          </p>

          <div className="flex gap-4 my-4 ">
            <div className="flex gap-1 items-center  ">
              <HiOutlineCurrencyBangladeshi size={16} /> {price}
            </div>
            <div className="flex items-center gap-1">
              <IoBed size={16} />
              {bed}
            </div>
            <div className="flex items-center gap-1">
              <FaBath size={16} />
              {bath}
            </div>
            <div className="flex items-center gap-1">
              <IoCarSport size={16} /> Yes
            </div>
            <div className="flex items-center gap-1">
              <FaMap size={16} />
              {area}
              <sup>2</sup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
