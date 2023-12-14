import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import MainTitle from "../Utils/MainTitle/MainTitle";
import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  People,
  VisibilityOutlined,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

function Contact() {
  let theme = useTheme();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_wb3gfsj",
        "template_cbkk7mq",
        {
          from_name: form.name,
          to_name: "Trend 37",
          from_email: form.email,
          to_email: "trendx37@gmail.com",
          message: form.message,
        },
        "BA3_-0MFDiY926h_W"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("شكرًا لك. سأعود إليك في أقرب وقت ممكن.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          toast.error("آه، حدث خطأ ما. يرجى المحاولة مرة أخرى.");
        }
      );
  };

  //Button Style

  const [isHovered, setIsHovered] = useState(false);

  const buttonStyles = {
    fontFamily: "inherit",
    display: "inline-block",
    padding: "10px 50px",
    position: "relative",
    overflow: "hidden",
    border: "2px solid var(--color)",
    transition: "color 0.5s",
    zIndex: 1,
    fontSize: "17px",
    borderRadius: "6px",
    fontWeight: 500,
    color: isHovered ? "#fff" : theme.palette.fourtiary.main,
    backgroundColor: "#fff",
    border: `1px solid ${theme.palette.fourtiary.main}`,
    cursor: "pointer",
    position: "relative",
  };

  const beforeStyles = {
    content: "",
    position: "absolute",
    zIndex: -1,
    background: theme.palette.fourtiary.main,
    height: "150px",
    width: "500px",
    borderRadius: "50%",
    top: isHovered ? "-30px" : "100%",
    left: isHovered ? "-30px" : "100%",
    transition: "all 0.7s",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const { t, i18n } = useTranslation();

  return (
    <Box id="contact" sx={{ overflow: "hidden" }}>
      <Container>
        <MainTitle
          title={t([`contact.contactHeadText`])}
          subTitle={t([`contact.contactdiscText`])}
        >
          تواصل معنا
        </MainTitle>
        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
            flexDirection: { md: "row", xs: "column-reverse" },
          }}
          spacing={5}
        >
          <Grid item xs={12} md={6} data-aos="fade-left" sx={{ width: "100%" }}>
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="sectionSubText"
                sx={{ color: theme.palette.secondary.main, mb: 5 }}
              >
                {t([`contact.alwaysStayInTouch`])}
              </Typography>

              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <Box>
                    <People
                      sx={{ fontSize: 30, color: theme.palette.fourtiary.main }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="sectionSubText"
                      sx={{ color: theme.palette.secondary.main }}
                    >
                      {t([`contact.companyName`])}
                    </Typography>
                    <Typography
                      variant="sectionSubSubText"
                      sx={{ color: theme.palette.secondary.main }}
                    >
                      Trend 37
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 3, mt: 3 }}
                >
                  <Box>
                    <Email
                      sx={{ fontSize: 30, color: theme.palette.fourtiary.main }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="sectionSubText"
                      sx={{ color: theme.palette.secondary.main }}
                    >
                      {t([`contact.CompanyEmail`])}
                    </Typography>
                    <Typography
                      variant="sectionSubSubText"
                      sx={{ color: theme.palette.secondary.main }}
                    >
                      trendx37@gmail.com
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  mt: 3,
                }}
              >
                <a
                  href="https://www.facebook.com/growthhackers9"
                  aria-label="Facebook Link"
                >
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
                    <Facebook
                      sx={{
                        fontSize: "30px",
                        color: "#fff",
                      }}
                    />
                  </Box>
                </a>

                <a
                  href="https://www.instagram.com/growthhackers9/"
                  aria-label="Instagram Link"
                >
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
                    <Instagram
                      sx={{
                        fontSize: "30px",
                        color: "#fff",
                      }}
                    />
                  </Box>
                </a>

                <a
                  href="https://www.linkedin.com/company/growth-hackers9/"
                  aria-label="Linkedin Link"
                >
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
                    <LinkedIn
                      sx={{
                        fontSize: "30px",
                        color: "#fff",
                      }}
                    />
                  </Box>
                </a>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            data-aos="fade-right"
            sx={{ width: "100%" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography
                variant="sectionSubText"
                sx={{ color: theme.palette.secondary.main, mb: 2 }}
              >
                {t([`contact.sendMsg`])}
              </Typography>
            </Box>
            <form onSubmit={handleSubmit} ref={formRef}>
              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                id="name"
                label={t([`contact.name`])}
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                InputLabelProps={{
                  style: {
                    color: theme.palette.secondary.main,
                  },
                }}
                InputProps={{
                  style: {
                    color: theme.palette.secondary.main,
                  },
                }}
              />
              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                id="email"
                label={t([`contact.companyEmail`])}
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                InputLabelProps={{
                  style: {
                    color: theme.palette.secondary.main,
                  },
                }}
                InputProps={{
                  style: {
                    color: theme.palette.secondary.main,
                  },
                }}
              />
              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                id="message"
                label={t([`contact.msg`])}
                name="message"
                autoComplete="msg"
                multiline
                rows={4}
                value={form.message}
                onChange={handleChange}
                InputLabelProps={{
                  style: {
                    color: theme.palette.secondary.main,
                  },
                }}
                InputProps={{
                  style: {
                    color: theme.palette.secondary.main,
                  },
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "row-reverse",
                  mt: 3,
                }}
              >
                <button
                  style={buttonStyles}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span style={beforeStyles}></span>
                  {loading ? t([`contact.sending`]) : t([`contact.send`])}{" "}
                </button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
