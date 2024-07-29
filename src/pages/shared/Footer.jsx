import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdPhoneMissed, MdMarkEmailUnread } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-6 p-4">
        <div className="space-y-2 col-span-4 md:col-span-2">
          <h3 className="text-lg font-semibold">About</h3>
          <p>
            Our Urban Residence company is committed to delivering a high level
            of expertise, customer service, and attention to detail to the
            marketing and sales of luxury real estate, and rental properties.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-square">
              <ImFacebook2 size={20} />
            </button>
            <button className="btn btn-square">
              <BsInstagram size={20} />
            </button>
            <button className="btn btn-square">
              <RiTwitterXLine size={20} />
            </button>
            <button className="btn btn-square">
              <FaWhatsapp size={20} />
            </button>
          </div>
        </div>
        <div className="space-y-2 col-span-2 md:col-span-1">
          <h3 className="text-lg font-semibold">Listings by Category</h3>
          <ul className="space-y-2">
            <li>Single-family homes</li>
            <li>Townhouses</li>
            <li>Apartments</li>
            <li>Student housing</li>
            <li>Vacation rentals</li>
          </ul>
        </div>
        <div className="space-y-2  col-span-2 md:col-span-1">
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="space-y-2">
            <li className="flex gap-2 items-center">
              <FaMapLocationDot size={20} /> 3755 Commercial St SE Salem
            </li>
            <li className="flex gap-2 items-center">
              <MdPhoneMissed size={20} />
              (305) 555-4446
            </li>
            <li className="flex gap-2 items-center">
              <MdMarkEmailUnread size={20} />
              urban@residence.com
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center my-4">
        <p className=" font-semibold text-sm">
          Copyright | URBAN RESIDENCE, All Rights Reserved.
          <span className="font-exo text-vsecondary"> @NowsCode</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
