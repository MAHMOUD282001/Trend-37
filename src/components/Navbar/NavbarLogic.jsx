import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";

function NavbarLogic() {
  let [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  let theme = useTheme();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Language

  const language = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "ar";

  const [lang, setLang] = useState(language);

  let handleLanguage = () => {
    if (lang === "ar") {
      setLang("en");
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    } else {
      setLang("ar");
      i18n.changeLanguage("ar");
      localStorage.setItem("language", "ar");
    }
  };

  return [
    theme,
    active,
    setActive,
    toggle,
    setToggle,
    scrolled,
    t,
    i18n,
    lang,
    handleLanguage,
  ];
}

export default NavbarLogic;
