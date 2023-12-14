import { Box, Container, Grid, useTheme } from "@mui/material";
import React from "react";
import MainTitle from "../Utils/MainTitle/MainTitle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import CommonSlider from "../Utils/CommonSlider/CommonSlider";
import { photography } from "../../data";
import { useTranslation } from "react-i18next";

function Photography() {
  const { t, i18n } = useTranslation();
  
  return (
    <Box id="photography" sx={{ overflow: "hidden" }}>
      <Container>
        <MainTitle
          title={t([`photography.photographyHeadText`])}
          subTitle={t([`photography.photographydiscText`])}
        />

        <CommonSlider
          dataName="photography"
          data={photography}
          isArrowsDisplay={true}
        />
      </Container>
    </Box>
  );
}

export default Photography;