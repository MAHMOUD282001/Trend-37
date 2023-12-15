import React from "react";
import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

function CommonSliderLogic(isArrowsDisplay) {
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

  const { t } = useTranslation();

  return [theme, params, arrowStyles, t];
}

export default CommonSliderLogic;
