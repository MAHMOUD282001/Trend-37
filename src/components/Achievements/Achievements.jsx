import { Box, Container, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { achievements } from "../../data";
import MainTitle from "../Utils/MainTitle/MainTitle";
import { useTranslation } from "react-i18next";

function Achievements() {
  let [counterOn, setCountOn] = useState(false);
  let theme = useTheme();
  const { t, i18n } = useTranslation();


  return (
    <ScrollTrigger
      onEnter={() => setCountOn(true)}
      onExit={() => setCountOn(false)}
    >
      <Box id="achievements">
        <Container>
          <MainTitle
            title={t([`acheivements.acheivementsHeadText`])}
            subTitle={t([`acheivements.acheivementsdiscText`])}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              flexWrap: "wrap",
              overflowY: "hidden",
            }}
          >
            {achievements.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                data-aos="fade-up"
                data-aos-delay={item.dataAosDelay}
              >
                <Typography
                  variant="sectionSubText"
                  sx={{ color: theme.palette.fourtiary.main }}
                >
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={item.count}
                      duration={5}
                      delay={0}
                    />
                  )}
                  +
                </Typography>
                <Typography
                  variant="sectionSubText"
                  sx={{ color: theme.palette.secondary.main }}
                >
                  {t([`acheivements.${item.title}`])}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </ScrollTrigger>
  );
}

export default Achievements;
