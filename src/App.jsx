import { Box, Button, createTheme } from "@mui/material";
import "./App.css";
import { getDesignTokens } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import Aos from "aos";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Achievements from "./components/Achievements/Achievements";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";
import HeroSlider from "./components/Hero/HeroSlider";
import Photography from "./components/Photography/Photography";
import Printing from "./components/Printing/Printing";
import Designing from "./components/Designing/Designing";
import Editing from "./components/Editing/Editing";
import Marketing from "./components/Marketing/Marketing";
import Branches from "./components/Branches/Branches";
import Location from "./components/Location/Location";
import { useTranslation } from "react-i18next";

function App() {
  //Initialize Aos
  useLayoutEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  //Inaitialize Dark & Light Mode
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") || "light"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  
  //Inaitialize Translation
  const { t, i18n } = useTranslation();
  
  document.body.dir = i18n.dir();
  
  const language = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "ar";
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);
  
  
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: theme.palette.primary.main }}>
        <Navbar setMode={setMode} />
        <HeroSlider />
        <About />
        <Photography />
        <Printing />
        <Designing />
        <Editing />
        <Marketing />
        <Achievements />
        <Branches />
        <Contact />
        <Location />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
