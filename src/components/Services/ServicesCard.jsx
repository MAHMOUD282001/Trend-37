import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

function ServicesCard({ experience }) {
  let theme = useTheme();

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: theme.palette.tertiary.main,
        color: theme.palette.secondary.main,
      }}
      contentArrowStyle={{
        borderRight: `7px solid  ${theme.palette.tertiary.main}`,
      }}
      iconStyle={{
        background: theme.palette.fourtiary.main,
      }}
      icon={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <img
            src={experience.icon}
            alt={experience.title}
            style={{ width: "60%", height: "60%" }}
          />
        </Box>
      }
    >
      <div>
        <Typography variant="sectionSubText" sx={{ mb: 2 }}>
          {experience.title}
        </Typography>
        <Typography variant="sectionSubSubText">
          {experience.description}
        </Typography>
      </div>
    </VerticalTimelineElement>
  );
}

export default ServicesCard;
