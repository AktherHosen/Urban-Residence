import React, { useEffect } from "react";
import { LiaHandshakeSolid } from "react-icons/lia";
import { MdOutlineHomeWork } from "react-icons/md";
import { PiClipboardText } from "react-icons/pi";
import { MdOutlineVilla } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
const Features = () => {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);
  return (
    <div className="p-4 my-6 " data-aos="fade-right">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-fit md:h-[400px]">
        <div className="grid grid-cols-3 gap-3 " data-aos="fade-right">
          <div className="overflow-hidden w-full h-full relative rounded-2xl">
            <img
              src="https://i.ibb.co/XZqqjLW/feature1.jpg"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110 rounded-2xl"
              alt=""
            />
          </div>
          <div className="overflow-hidden w-full h-full relative rounded-2xl">
            <img
              src="https://i.ibb.co/Z8PYXNJ/feature2.jpg"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110 rounded-2xl"
              alt=""
            />
          </div>
          <div className="overflow-hidden w-full h-full relative rounded-2xl">
            <img
              src="https://i.ibb.co/YQtngtV/feature3.jpg"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110 rounded-2xl"
              alt=""
            />
          </div>
        </div>
        <div
          className="flex flex-col justify-center p-4 space-y-3"
          data-aos="fade-left"
        >
          <h1 className=" animate__animated animate__fadeInDown animate__delay-2s font-semibold text-3xl font-exo">
            Find your new home <br /> with us
          </h1>
          <p className="font-exo">
            With over 2 million in sales, our agency is the industry's top
            producer with over 20 year of experience.{" "}
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex gap-3 items-center font-exo">
              <LiaHandshakeSolid size={25} />
              <div>
                <h4 className="font-semibold">Sell your home</h4>
                <p>Free service</p>
              </div>
            </div>
            <div className="flex gap-3 items-center font-exo">
              <MdOutlineHomeWork size={25} />
              <div>
                <h4 className="font-semibold">Buy a home</h4>
                <p>No fees asked</p>
              </div>
            </div>
            <div className="flex gap-3 items-center font-exo">
              <PiClipboardText size={25} />
              <div>
                <h4 className="font-semibold">Free Agreement</h4>
                <p>No fees asked</p>
              </div>
            </div>
            <div className="flex gap-3 items-center font-exo">
              <MdOutlineVilla size={25} />
              <div>
                <h4 className="font-semibold">Rent Apartment</h4>
                <p>Low cost</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
