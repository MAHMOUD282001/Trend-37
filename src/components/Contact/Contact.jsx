import { Box, Container, Grid, Typography, TextField } from "@mui/material";

import MainTitle from "../Utils/MainTitle/MainTitle";
import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  People,
  Phone,
  YouTube,
} from "@mui/icons-material";
import ContactLogic from "./ContactLogic";

function Contact() {
  
  let [
    theme,
    formRef,
    form,
    loading,
    handleInputChange,
    handleFormSubmit,
    buttonStyles,
    beforeStyles,
    handleMouseEnter,
    handleMouseLeave,
    t,
    i18n,
  ] = ContactLogic()

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
                      {t([`contact.companyEmail`])}
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
              
              <Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 3, mt: 3 }}
                >
                  <Box>
                    <Phone
                      sx={{ fontSize: 30, color: theme.palette.fourtiary.main }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="sectionSubText"
                      sx={{ color: theme.palette.secondary.main }}
                    >
                      {t([`contact.companyPhones`])}
                    </Typography>
                    <Typography
                      variant="sectionSubSubText"
                      sx={{ color: theme.palette.secondary.main }}
                    >
                      01010610356 - 01015815302
                    </Typography>
                    
                    <Typography
                      variant="sectionSubSubText"
                      sx={{ color: theme.palette.secondary.main }}
                    >
                      
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
                  href="https://www.facebook.com/trendx37/"
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
                  href="https://www.instagram.com/trendx37/"
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
                  href="https://www.youtube.com/channel/UClzYSxhHAY7kBcve1k8zNJg"
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
                    <YouTube
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
            <form onSubmit={handleFormSubmit} ref={formRef}>
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
