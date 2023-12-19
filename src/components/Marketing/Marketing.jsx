import { Box, Container, Grid, useTheme } from "@mui/material";
import React from "react";
import MainTitle from "../Utils/MainTitle/MainTitle";
import { marketing } from "../../data";
import CommonSlider from "../Utils/CommonSlider/CommonSlider";
import { useTranslation } from "react-i18next";

function Marketing() {
  const { t } = useTranslation();

  return (
    <Box id="marketing" sx={{ overflow: "hidden" }}>
      <Container>
        <MainTitle
          title={t([`marketing.marketingHeadText`])}
          subTitle={t([`marketing.marketingdiscText`])}
        />

        <CommonSlider
          dataName={"marketing"}
          data={marketing}
          isArrowsDisplay={false}
          hasName={true}
        />
      </Container>
    </Box>
  );
}

export default Marketing;
