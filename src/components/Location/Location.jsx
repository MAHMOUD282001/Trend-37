import { Box, Container } from "@mui/material";
import React from "react";
import MainTitle from "../Utils/MainTitle/MainTitle";
import { useTranslation } from "react-i18next";

function Location() {
  const { t, i18n } = useTranslation();
  
  return (
    <Box>
      <Container>
        <MainTitle
          title={t([`location.locationHeadText`])}
          subTitle={t([`location.locationDescText`])}
        />

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.3233056999256!2d31.040364575406148!3d30.42693557473326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14587963043cbfbd%3A0xf6ee37a65d240029!2sTREND%2037!5e0!3m2!1sen!2seg!4v1702206818401!5m2!1sen!2seg"
          title="Location"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "4px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </Box>
  );
}

export default Location;
