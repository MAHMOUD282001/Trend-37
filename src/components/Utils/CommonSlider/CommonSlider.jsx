import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import CommonCard from "../CommonCard/CommonCard";
import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

function CommonSlider({ dataName, data, isArrowsDisplay }) {
  let theme = useTheme();

  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  const arrowStyles = {
    display: isArrowsDisplay ? "flex" : "none",
    border: `1px solid ${theme.palette.fourtiary.main}`,
    color: theme.palette.fourtiary.main,
  };
  
  const { t, i18n } = useTranslation();
  
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
            name={t([`${dataName}.${item.title}`])}
            img={item.img}
            dataAosDelay={item.dataAosDelay}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CommonSlider;
