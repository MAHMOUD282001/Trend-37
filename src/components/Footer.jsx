import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  let theme = useTheme();
  const { t, i18n } = useTranslation();


  return (
    <Box sx={{ mt: 3 }}>
      <Container>
        <Box
          sx={{
            textAlign: "center",
            padding: "20px 0",
            mt: 3,
          }}
        >
          <Typography
            variant="sectionSubSubText"
            sx={{ color: theme.palette.secondary.main }}
          >
            {t([`footer.websiteCreatedSentence`])}{" "}
            <a
              href="https://mahmoud282001.github.io/my-new-portfolio/"
              target="_blank"
            >
              Mahmoud Khallaf
            </a>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
