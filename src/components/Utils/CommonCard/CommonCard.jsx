import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./CommonCard.css";
import { Box, useTheme } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";

function CommonCard({ img, name, hasName }) {
  let theme = useTheme();

  return (
    <Card
      sx={{
        width: 250,
        height: hasName ? 350 : 280,
        border: `2px solid ${theme.palette.fourtiary.main}`,
      }}
      className="card"
      data-aos="zoom-in"
    >
      {hasName ? (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: "-45px",
            zIndex: 2,
            transition: "all .5s",
          }}
          className="whatsapp-icon"
        >
          <a aria-label="Chat on WhatsApp" href="https://wa.me/+201010610356">
            <Box
              sx={{
                width: "45px",
                height: "45px",
                background: theme.palette.fourtiary.main,
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <WhatsApp
                sx={{
                  fontSize: "30px",
                  color: "#fff",
                }}
              />
            </Box>
          </a>
        </Box>
      ) : (
        ""
      )}
      <Box className="card-img" sx={{ height: "280px" }}>
        <CardMedia component="img" height="100%" image={img} alt="service" />
      </Box>
      {hasName ? (
        <CardContent
          sx={{
            background: theme.palette.fourtiary.main,
            height: "70px",
          }}
          className="card-content"
        >
          <Typography
            sx={{
              textAlign: "center",
              color: theme.palette.mode === "light" ? "#fff" : "#1a2035",
            }}
            variant="sectionSubSubText"
          >
            {name}
          </Typography>
        </CardContent>
      ) : (
        ""
      )}
    </Card>
  );
}

export default CommonCard;
