import React from "react";
import slider1 from "../../assets/slider1.jpg";
const Features = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-2 h-[400px]">
        <div className="grid grid-cols-3 gap-3">
          <div className="overflow-hidden w-full h-full relative rounded-2xl">
            <img
              src={slider1}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110 rounded-2xl"
              alt=""
            />
          </div>
          <div className="overflow-hidden w-full h-full relative rounded-2xl">
            <img
              src={slider1}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110 rounded-2xl"
              alt=""
            />
          </div>
          <div className="overflow-hidden w-full h-full relative rounded-2xl">
            <img
              src={slider1}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110 rounded-2xl"
              alt=""
            />
          </div>
        </div>
        <div>
          <h1>Right Side</h1>
        </div>
      </div>
    </div>
  );
};

export default Features;
