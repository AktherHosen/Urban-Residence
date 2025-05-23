import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../index.css";
import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center items-center md:items-start space-y-3">
          <h1 className="animate__animated animate__bounceInDown animate__delay-1s  text-4xl font-semibold text-center md:text-start font-exo">
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
              <img
                src="https://i.ibb.co/p2G0z0r/slider1-min.jpg"
                className="h-full"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/r0ptCws/slider2-min.jpg"
                className="h-full"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/cYbGZcV/slider3-min.jpg"
                className="h-full"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/H4XN3DC/slider4-min.jpg"
                className="h-full"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
