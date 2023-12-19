import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import CommonCard from "../CommonCard/CommonCard";
import CommonSliderLogic from "./CommonSliderLogic";


function CommonSlider({ dataName, data, isArrowsDisplay, hasName }) {
  let [theme, params, arrowStyles, t] = CommonSliderLogic(isArrowsDisplay)
  
  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      speed={1000}
      effect="slide" // Choose a slide effect (e.g., "slide", "fade", "coverflow")
      grabCursor={true}
      modules={[Autoplay, Navigation]}
      breakpoints={{
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1300: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
      {...params}
      className="mySwiper"
      style={{ direction: "rtl" }}
    >
      <div className="swiper-button-prev" style={arrowStyles}></div>
      <div className="swiper-button-next" style={arrowStyles}></div>

      {data.map((item, index) => (
        <SwiperSlide
          key={index}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CommonCard
            name={t([`${dataName}.${item.languageDescription}`])}
            img={item.img}
            hasName={hasName}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CommonSlider;
