import { Box, Container, Grid, useTheme } from "@mui/material";
import React from "react";
import MainTitle from "../Utils/MainTitle/MainTitle";
import { printing } from "../../data";
import CommonSlider from "../Utils/CommonSlider/CommonSlider";
import { useTranslation } from "react-i18next";

function Printing() {
  const { t, i18n } = useTranslation();
  
  return (
    <Box id="printing" sx={{ overflow: "hidden" }}>
      <Container>
        <MainTitle title={t([`printing.printingHeadText`])}
          subTitle={t([`printing.printingdiscText`])} />

        <CommonSlider dataName={"printing"} data={printing} isArrowsDisplay={false}/>
      </Container>
    </Box>
  );
}

export default Printing;
