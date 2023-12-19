import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeroSlider.css";
import { Autoplay, Navigation } from "swiper/modules";
import HeroSlide from "../HeroSlide";
import { Box } from "@mui/material";
import HeroSliderLogic from "./HeroSliderLogic";

function HeroSlider() {
  let [theme, params, arrowStyles, updatedSlides] = HeroSliderLogic();

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
        effect="slide"
        grabCursor={true}
        modules={[Autoplay, Navigation]}
        {...params}
        className="mySwiper"
        style={{ direction: "rtl" }}
      >
        <div className="swiper-button-prev" style={arrowStyles}></div>
        <div className="swiper-button-next" style={arrowStyles}></div>
        {updatedSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <HeroSlide
              img={slide.img}
              heading={slide.heading}
              body={slide.languageDescription}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default HeroSlider;
