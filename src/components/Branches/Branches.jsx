import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import MainTitle from "../Utils/MainTitle/MainTitle";
import { useTranslation } from "react-i18next";

function Branches() {
  let theme = useTheme();
  const { t, i18n } = useTranslation();

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Container>
        <MainTitle
          title={t([`addresses.addressesHeadText`])}
          subTitle={t([`addresses.addressesdiscText`])}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="sectionSubSubText"
            sx={{ color: theme.palette.secondary.main, mb: 2 }}
            data-aos={"zoom-in"}
            data-aos-delay="0"
          >
            {t([`addresses.alexBranch`])}
          </Typography>

          <Typography
            variant="sectionSubSubText"
            sx={{ color: theme.palette.secondary.main }}
            data-aos={"zoom-in"}
            data-aos-delay="200"
          >
            {t([`addresses.menofiaBranch`])}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Branches;
