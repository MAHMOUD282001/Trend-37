import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Container, Typography, useTheme } from "@mui/material";
import Typed from "react-typed";
import { useTranslation } from "react-i18next";

function HeroSlide({ img, heading, body }) {
  let theme = useTheme();
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="slider-overlay"></div>
      <img src={img} loading="lazy" alt="hero img" />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: i18n.language === "ar" ? 0 : "",
          left: i18n.language === "en" ? 0 : "",
          width: "100%",
        }}
      >
        <Container>
          <Box sx={{ display: "flex", alignItems: "start", gap: 2 }}>
            <Box
              sx={{
                width: "100%",
                textAlign: {
                  xs: "center",
                  sm: i18n.language === "ar" ? "right" : "left",
                },
              }}
            >
              <Typography variant="heroHeadText" data-aos="fade-up">
                {t([`hero.heroHeadText`])}
              </Typography>

              <Typography variant="heroSubText" sx={{ mt: { md: 3, xs: 1 }, direction: i18n.dir() }}>
                {t([`hero.heroSubText`])}{" "}
                <Typed
                  strings={[t([`hero.services.${body}`])]}
                  typeSpeed={100}
                  loop
                  showCursor={true}
                  bindInputFocusEvents={false}
                  cursorChar="|"
                  autoInsertCss={true}
                />
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <a href="#about" aria-label="About Link">
          <Box
            sx={{
              width: "30px",
              height: "60px",
              border: `3px solid ${theme.palette.fourtiary.main}`,
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              className="scroll-ball"
              sx={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: theme.palette.fourtiary.main,
              }}
            ></Box>
          </Box>
        </a>
      </Box>
    </>
  );
}

export default HeroSlide;
