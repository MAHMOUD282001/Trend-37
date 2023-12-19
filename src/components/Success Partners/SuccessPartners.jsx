import { Box, Container, Grid, useTheme } from "@mui/material";
import React from "react";
import MainTitle from "../Utils/MainTitle/MainTitle";
import { partners } from "../../data";
import CommonSlider from "../Utils/CommonSlider/CommonSlider";
import { useTranslation } from "react-i18next";

function SuccessPartners() {
  const { t } = useTranslation();

  return (
    <Box id="succeess-partners" sx={{ overflow: "hidden" }}>
      <Container>
        <MainTitle
          title={t([`successPartners.successPartnersHeadText`])}
          subTitle={t([`successPartners.successPartnersdiscText`])}
        />

        <CommonSlider
          data={partners}
          isArrowsDisplay={false}
          hasName={false}
        />
      </Container>
    </Box>
  );
}

export default SuccessPartners;
