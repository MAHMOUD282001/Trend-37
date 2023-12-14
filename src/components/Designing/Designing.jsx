import { Box, Container } from "@mui/material";
import React from "react";
import MainTitle from "../Utils/MainTitle/MainTitle";
import { designing } from "../../data";
import CommonSlider from "../Utils/CommonSlider/CommonSlider";
import { useTranslation } from "react-i18next";

function Designing() {
  const { t, i18n } = useTranslation();

  return (
    <Box id="designing" sx={{ overflow: "hidden" }}>
      <Container>
        <MainTitle
          title={t([`designing.designingHeadText`])}
          subTitle={t([`designing.designingdiscText`])}
        />

        <CommonSlider dataName={"designing"} data={designing} isArrowsDisplay={false} />
      </Container>
    </Box>
  );
}

export default Designing;
