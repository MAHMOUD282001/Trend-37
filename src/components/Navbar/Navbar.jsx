import { Container, IconButton, Stack, useTheme } from "@mui/material";
import { Box } from "@mui/material";
import logo from "../../assets/logo-2.webp";
import {
  Close,
  DarkModeOutlined,
  Language,
  LightModeOutlined,
  Menu,
} from "@mui/icons-material";
import { navLinks } from "../../data";
import { Link } from "react-scroll";
import NavbarLogic from "./NavbarLogic";

function Navbar({ setMode }) {
  let [
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
  ] = NavbarLogic();

  return (
    <Box
      sx={{
        py: 3,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 20,
        width: "100%",
        backgroundColor: scrolled ? theme.palette.primary.main : "transparent",
        boxShadow: scrolled ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : "",
      }}
      className="navbar"
    >
      <Container style={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              height: { xs: "70px", sm: "85px", md: "100px" },
              width: { xs: "70px", sm: "85px", md: "100px" },
              cursor: "pointer",
            }}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" />
          </Box>

          <Box sx={{ display: { md: "flex", xs: "none" } }}>
            <ul>
              {navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  style={{
                    color: scrolled ? theme.palette.secondary.main : "#fff",
                    marginRight: lang === "ar" ? "20px" : "0",
                    marginLeft: lang === "en" ? "20px" : "0",
                    fontSize: "18px",
                  }}
                  onClick={() => setActive(navLink.title)}
                >
                  <Link
                    href={navLink.id}
                    to={navLink.id}
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={100}
                    style={{ cursor: "pointer" }}
                  >
                    {t([`nav.${navLink.languageDescription}`])}
                  </Link>
                </li>
              ))}

              <Stack direction={"row"} style={{ marginLeft: "auto" }}>
                {theme.palette.mode === "light" ? (
                  <IconButton
                    onClick={() => {
                      localStorage.setItem(
                        "currentMode",
                        theme.palette.mode === "dark" ? "light" : "dark"
                      );
                      setMode((prevMode) =>
                        prevMode === "light" ? "dark" : "light"
                      );
                    }}
                    sx={{
                      marginRight: lang === "ar" ? "20px" : 0,
                      marginLeft: lang === "en" ? "20px" : 0,
                    }}
                  >
                    <LightModeOutlined
                      sx={{
                        color: scrolled ? theme.palette.secondary.main : "#fff",
                      }}
                    />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() => {
                      localStorage.setItem(
                        "currentMode",
                        theme.palette.mode === "dark" ? "light" : "dark"
                      );

                      setMode((prevMode) =>
                        prevMode === "light" ? "dark" : "light"
                      );
                    }}
                    sx={{
                      marginRight: lang === "ar" ? "20px" : 0,
                      marginLeft: lang === "en" ? "20px" : 0,
                    }}
                  >
                    <DarkModeOutlined
                      sx={{
                        color: scrolled ? theme.palette.secondary.main : "#fff",
                      }}
                    />
                  </IconButton>
                )}
              </Stack>
            </ul>

            <IconButton
              onClick={handleLanguage}
              sx={{
                marginRight: lang === "ar" ? "20px" : 0,
                marginLeft: lang === "en" ? "20px" : 0,
              }}
            >
              <Language
                sx={{
                  color: scrolled ? theme.palette.secondary.main : "#fff",
                }}
              />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: {
                xs: "block",
                md: "none",
                cursor: "pointer",
                zIndex: "5",
              },
            }}
          >
            {toggle ? (
              <Close
                sx={{
                  color: scrolled
                    ? theme.palette.secondary.main
                    : theme.palette.secondary.main,
                  fontSize: "30px",
                }}
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <Menu
                sx={{
                  color: scrolled ? theme.palette.secondary.main : "#fff",
                  fontSize: "30px",
                }}
                onClick={() => setToggle(!toggle)}
              />
            )}
          </Box>

          <Box
            sx={{
              left:
                i18n.language === "ar"
                  ? { xs: toggle ? "0" : "-250px", md: "-250px" }
                  : "",
              right:
                i18n.language === "en"
                  ? { xs: toggle ? "0" : "-250px", md: "-250px" }
                  : "",
              position: "absolute",
              transition: "all .5s",
              top: 0,
              textAlign: "left",
              background: theme.palette.primary.main,
              width: "250px",
              height: "100vh",
              flexDirection: "column",
              alignItems: "center",
              padding: 2,
              paddingTop: 10,
            }}
          >
            <ul
              style={{ flexDirection: "column", alignItems: "center", gap: 2 }}
            >
              {navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  style={{
                    color: theme.palette.secondary.main,
                    fontSize: "18px",
                  }}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <Link
                    href={navLink.id}
                    to={navLink.id}
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={100}
                    style={{ cursor: "pointer" }}
                  >
                    {t([`nav.${navLink.languageDescription}`])}
                  </Link>
                </li>
              ))}

              <Stack direction={"row"}>
                {theme.palette.mode === "light" ? (
                  <IconButton
                    sx={{ color: theme.palette.secondary.main }}
                    onClick={() => {
                      localStorage.setItem(
                        "currentMode",
                        theme.palette.mode === "dark" ? "light" : "dark"
                      );
                      setMode((prevMode) =>
                        prevMode === "light" ? "dark" : "light"
                      );
                    }}
                  >
                    <LightModeOutlined
                      sx={{ color: theme.palette.secondary.main }}
                    />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() => {
                      localStorage.setItem(
                        "currentMode",
                        theme.palette.mode === "dark" ? "light" : "dark"
                      );

                      setMode((prevMode) =>
                        prevMode === "light" ? "dark" : "light"
                      );
                    }}
                  >
                    <DarkModeOutlined
                      sx={{ color: theme.palette.secondary.main }}
                    />
                  </IconButton>
                )}
              </Stack>

              <IconButton onClick={handleLanguage}>
                <Language sx={{ color: theme.palette.secondary.main }} />
              </IconButton>
            </ul>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
