// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../../App.css";
const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider slider1 relative">
            <div className=" slider-description hidden md:block md:left-[40%] lg:left-[20%]  text-gray-200">
              <div className="p-10">
                <h2 className="text-3xl  font-bold mb-5 ">
                  Luxurious Beachfront Villa
                </h2>
                <p className="text-xl  font-bold">
                  Location: <span className="">Malibu, California</span>
                </p>
                <p className="font-bold text-xl">Facilities:</p>
                <ul className=" text-xl ">
                  <li>Beach Front</li>
                  <li>Infinity Pool</li>
                  <li>Spa</li>
                </ul>
                <p className="font-bold text-2xl bg-white bg-opacity-50 rounded-full mt-4 p-2 text-center">
                  $5,000,000
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider slider2">
            <div className="slider-description hidden md:block md:left-[40%] lg:left-[20%]  text-gray-200">
              <div className="p-10">
                <h2 className="text-3xl  font-bold mb-5 ">
                  Luxurious Beachfront Villa
                </h2>
                <p className="text-xl  font-bold">
                  Location: <span className="">Malibu, California</span>
                </p>
                <p className="font-bold text-xl">Facilities:</p>
                <ul className=" text-xl ">
                  <li>Beach Front</li>
                  <li>Infinity Pool</li>
                  <li>Spa</li>
                </ul>
                <p className="font-bold text-2xl bg-white bg-opacity-50 rounded-full mt-4 p-2 text-center">
                  $5,000,000
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider slider3">
            <div className="hidden md:block slider-description  md:left-[40%] lg:left-[20%]  text-gray-200">
              <div className="p-10">
                <h2 className="text-3xl  font-bold mb-5 ">
                  Luxurious Beachfront Villa
                </h2>
                <p className="text-xl  font-bold">
                  Location: <span className="">Malibu, California</span>
                </p>
                <p className="font-bold text-xl">Facilities:</p>
                <ul className="text-xl ">
                  <li>Beach Front</li>
                  <li>Infinity Pool</li>
                  <li>Spa</li>
                </ul>
                <p className="font-bold text-2xl bg-white bg-opacity-50 rounded-full mt-4 p-2 text-center">
                  $5,000,000
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
