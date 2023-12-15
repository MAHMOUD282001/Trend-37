import { bigScreenSlides, smallScreenSlides } from "../../../data";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";

function HeroSliderLogic() {
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

  let [updatedSlides, setUpdatedSlides] = useState(bigScreenSlides);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setUpdatedSlides(smallScreenSlides);
      } else {
        setUpdatedSlides(bigScreenSlides);
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Initial check on mount
    handleResize();

    // Cleanup: Remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [theme, params, arrowStyles, updatedSlides];
}

export default HeroSliderLogic;
