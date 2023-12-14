import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeroSlider.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import HeroSlide from "./HeroSlide";
import { Box } from "@mui/material";
import { slides } from "../../data";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";

function HeroSlider() {
  let theme = useTheme();

  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  const arrowStyles = {
    border: `1px solid ${theme.palette.fourtiary.main}`,
    color: theme.palette.fourtiary.main,
    ":hover": {
      backgroundColor: theme.palette.fourtiary.main,
      color: "#fff",
    },
  };

  const { t, i18n } = useTranslation();

  return (
    <Box className="slider">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        speed={1000}
        effect="slide" // Choose a slide effect (e.g., "slide", "fade", "coverflow")
        grabCursor={true}
        modules={[Autoplay, Navigation]}
        {...params}
        className="mySwiper"
        style={{ direction:  "rtl" }}
      >
        <div className="swiper-button-prev" style={arrowStyles}></div>
        <div className="swiper-button-next" style={arrowStyles}></div>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <HeroSlide
              img={slide.img}
              heading={slide.heading}
              body={slide.body}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default HeroSlider;
