import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../index.css";
import { Autoplay, Pagination } from "swiper/modules";

import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import slider4 from "../../assets/slider4.jpg";

const Banner = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center space-y-3">
          <h1 className="text-4xl font-semibold font-exo">
            The <br />
            <span className="text-vsecondary">Urban Residence</span> <br /> Real
            Estate Ltd.
          </h1>
          <p className="">
            We are recognized for exceeding client expectations and delivering
            great results through dedication, ease of process, and extraordinary
            services to our worldwide client
          </p>
        </div>
        <div className="h-[400px]">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={slider1} className="h-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider2} className="h-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider3} className="h-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider4} className="h-full" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
