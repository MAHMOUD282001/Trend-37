export const getDesignTokens = (mode) => ({
  typography: {
    heroHeadText: {
      fontWeight: "600",
      color: "white",
      fontSize: "30px",
      lineHeight: "40px",
      display: "block",
      "@media (min-width: 700px)": {
        fontSize: "40px",
        lineHeight: "65px",
      },
      "@media (min-width: 900px)": {
        fontSize: "50px",
        lineHeight: "65px",
      },
    },
    heroSubText: {
      fontWeight: "500",
      color: "#f3f3f3",
      fontSize: "16px",
      lineHeight: "30px",
      display: "block",
      "@media (min-width: 700px)": {
        fontSize: "18px",
        lineHeight: "40px",
      },
      "@media (min-width: 900px)": {
        fontSize: "22px",
      },
    },
    sectionHeadText: {
      color: "#f3f3f3",
      fontSize: "30px",
      margin: "60px 0 30px 0",
      textAlign: "center",
      display: "block",
      lineHeight: "40px",
      position: "relative",
      
      "@media (min-width: 700px)": {
        fontSize: "35px",
        lineHeight: "40px",
        margin: "100px 0 50px 0",
      },
      "@media (min-width: 900px)": {
        fontSize: "40px",
        lineHeight: "50px",
      },
    },
    sectionSubText: {
      fontWeight: "normal",
      color: "#f3f3f3",
      display: "block",
      fontSize: "20px",
      lineHeight: "40px",
      letterSpacing: "wider",
      "@media (min-width: 700px)": {
        fontSize: "25px",
      },
    },

    sectionSubSubText: {
      fontWeight: "normal",
      color: "#f3f3f3",
      display: "block",
      fontSize: "14px",
      lineHeight: "35px",
      letterSpacing: "wider",
      "@media (min-width: 700px)": {
        fontSize: "16px",
      },
      "@media (min-width: 900px)": {
        fontSize: "18px",
      },
    },

    body1: {
      lineHeight: "30px",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1400,
      xl: 1600,
    },
  },

  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: {
            main: "#1a2035",
          },
          secondary: {
            main: "#fff",
          },
          fourtiary: {
            main: "#f4b517",
          },
        }
      : {
          primary: {
            main: "#fff",
          },
          secondary: {
            main: "#1a2035",
          },
          fourtiary: {
            main: "#2c4999",
          },
        }),
  },
});
