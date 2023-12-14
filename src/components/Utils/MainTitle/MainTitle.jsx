import React from "react";
import "./MainTitle.css";
import { Box, Typography, useTheme } from "@mui/material";

function MainTitle({ title, subTitle }) {
  let theme = useTheme();

  return (
    <Box sx={{ maxWidth: "350px", margin: "0 auto" }}>
      <Typography
        variant="sectionHeadText"
        sx={{ color: theme.palette.secondary.main }}
        className="main-text"
        data-aos = "zoom-in"
      >
        {title}
        <Typography
          variant="sectionSubSubText"
          sx={{
            color: theme.palette.secondary.main,
            "&::after": {
                borderBottom: `1px solid ${theme.palette.fourtiary.main}`, 
                borderTop: `1px solid ${theme.palette.fourtiary.main}` 
            },
            "&::before": {
                borderBottom: `1px solid ${theme.palette.fourtiary.main}`, 
                borderTop: `1px solid ${theme.palette.fourtiary.main}` 
            },
          }}
        >
          {subTitle}
        </Typography>
      </Typography>
    </Box>
  );
}

export default MainTitle;
