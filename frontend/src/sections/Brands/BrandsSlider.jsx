import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import brandsData from "./brandsData";
import BrandCard from "./BrandCard";

const BrandsSlider = () => {
  return (
    <div className="relative mt-20">

      {/* Left Fade */}

      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#050505] to-transparent"></div>

      {/* Right Fade */}

      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#050505] to-transparent"></div>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={4500}
        spaceBetween={40}
        grabCursor={true}
        allowTouchMove={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          640: {
            slidesPerView: 3,
            spaceBetween: 25,
          },

          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },

          1024: {
            slidesPerView: 5,
            spaceBetween: 35,
          },

          1440: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
      >
        {brandsData.map((brand) => (
          <SwiperSlide key={brand.id}>
            <BrandCard brand={brand} />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default BrandsSlider;