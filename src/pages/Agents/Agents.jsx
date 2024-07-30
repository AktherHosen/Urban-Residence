import React from "react";
import { Helmet } from "react-helmet-async";
import Marquee from "react-fast-marquee";
const Agents = () => {
  return (
    <div className="p-4 my-2">
      <Helmet>
        <title>Agents</title>
      </Helmet>
      <div className="text-center my-6">
        <h1 className="text-xl font-exo text-vsecondary font-semibold">
          All Agents
        </h1>
        <p>See Agents Details, You can contact with them.</p>
      </div>

      <Marquee>
        <div className="flex gap-4">
          <div className="border-2 shadow-sm p-2 w-[400px] rounded-md ">
            <img
              src="https://i.ibb.co/8nCSzT9/nowshad-removebg-preview.png"
              className="h-[300px] w-full  rounded-md"
              alt=""
            />
            <div className="mt-3">
              <h2 className="text-vsecondary font-exo font-semibold">
                Akther Hosen
              </h2>
              <p>Seller</p>
            </div>
          </div>
          <div className="border-2 shadow-sm p-2 w-[400px] rounded-md ">
            <img
              src="https://i.ibb.co/S5K4sTp/Agent1.png"
              className="h-[300px]  w-full rounded-md"
              alt=""
            />
            <div className="mt-3">
              <h2 className="text-vsecondary font-exo font-semibold">
                John Doe.
              </h2>
              <p>Owner</p>
            </div>
          </div>
          <div className="border-2 shadow-sm p-2 w-[400px] rounded-md ">
            <img
              src="https://i.ibb.co/W5gLMxW/Agent3.png"
              className="h-[300px] w-full  rounded-md"
              alt=""
            />
            <div className="mt-3">
              <h2 className="text-vsecondary font-exo font-semibold">
                Adam Cole
              </h2>
              <p>Sales Executive</p>
            </div>
          </div>
          <div className="border-2 shadow-sm p-2 w-[400px] rounded-md ">
            <img
              src="https://i.ibb.co/ZcHh7dj/Agent4.png"
              className="h-[300px] w-full  rounded-md"
              alt=""
            />
            <div className="mt-3">
              <h2 className="text-vsecondary font-exo font-semibold">
                Maria Janet
              </h2>
              <p>Selling Agent</p>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Agents;
