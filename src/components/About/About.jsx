import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import aboutDarkImg from "../../assets/about-dark.svg";
import aboutLightImg from "../../assets/about-light.svg";

import {
  ChatBubbleOutlineOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import MainTitle from "../Utils/MainTitle/MainTitle";
import { useTranslation } from "react-i18next";

function About() {
  let theme = useTheme();

  const { t, i18n } = useTranslation();

  return (
    <Box id="about" sx={{ overflow: "hidden" }}>
      <Container>
        <MainTitle
          title={t([`about.aboutHeadText`])}
          subTitle={t([`about.aboutdiscText`])}
        />
        <Grid container spacing={3} sx={{ alignItems: "center" }}>
          <Grid item xs={12} md={6} data-aos="fade-left">
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Box>
                  <VisibilityOutlined
                    sx={{ fontSize: 30, color: theme.palette.fourtiary.main }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="sectionSubText"
                    sx={{ color: theme.palette.secondary.main }}
                  >
                    {t([`about.aboutBody.firstAboutBody.firstAboutBodyHead`])}
                  </Typography>
                  <Typography
                    variant="sectionSubSubText"
                    sx={{ color: theme.palette.secondary.main }}
                  >
                    {t([`about.aboutBody.firstAboutBody.firstAboutBodyBody`])}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{ display: "flex", alignItems: "center", gap: 3, mt: 3 }}
              >
                <Box>
                  <ChatBubbleOutlineOutlined
                    sx={{ fontSize: 30, color: theme.palette.fourtiary.main }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="sectionSubText"
                    sx={{ color: theme.palette.secondary.main }}
                  >
                    {t([`about.aboutBody.secondAboutBody.secondAboutBodyHead`])}{" "}
                  </Typography>
                  <Typography
                    variant="sectionSubSubText"
                    sx={{ color: theme.palette.secondary.main }}
                  >
                    {t([`about.aboutBody.secondAboutBody.secondAboutBodyBody`])}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            data-aos="fade-right"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 500,
                height: { sm: 500, xs: 300 },
                mt: { xs: 3, md: 0 },
              }}
            >
              <img
                src={
                  theme.palette.mode === "dark" ? aboutDarkImg : aboutLightImg
                }
                alt="About Us"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
