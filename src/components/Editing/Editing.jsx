import { Box, Container, Grid, useTheme } from "@mui/material";
import React from "react";
import MainTitle from "../Utils/MainTitle/MainTitle";
import { editing } from "../../data";
import CommonCard from "../Utils/CommonCard/CommonCard";
import CommonSlider from "../Utils/CommonSlider/CommonSlider";
import { useTranslation } from "react-i18next";

function Editing() {
  const { t, i18n } = useTranslation();
  
  return (
    <Box id="editing" sx={{ overflow: "hidden" }}>
      <Container>
        <MainTitle
          title={t([`editing.editingHeadText`])}
          subTitle={t([`editing.editingdiscText`])}
        />

        <CommonSlider dataName={"editing"} data={editing} isArrowsDisplay={false} />
      </Container>
    </Box>
  );
}

export default Editing;
