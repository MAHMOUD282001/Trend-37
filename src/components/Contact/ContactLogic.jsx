import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";

function ContactLogic() {
  let theme = useTheme();
  const formRef = useRef();
  const { t, i18n } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  //   Handle Input Change
  const handleInputChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  //Handle Submit Message
  const handleFormSubmit = (e) => {
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
          toast.success(
            i18n.language === "ar"
              ? "تم ارسال الرساله بنجاح"
              : "Message Sent Successfully"
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          toast.error(
            i18n.language === "ar"
              ? "حدث خطأ اثناء ارسال الرساله"
              : "An Error Occurred While Sending The Message"
          );
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

  return [
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
  ];
}

export default ContactLogic;
