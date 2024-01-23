'use client';

import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ContactFormSection from "@/app/ui/contact/FormSection";
import ContactHeroSection from "@/app/ui/contact/HeroSection";
import ContactJoinSection from "@/app/ui/contact/JoinSection";

const Container = ({ children, ...rest }) => (
  <Box
    maxWidth={{ sm: 720, md: 900 }}
    width={1}
    margin={"0 auto"}
    paddingY={{ xs: 4, sm: 6, md: 8 }}
    {...rest}
  >
    {children}
  </Box>
);

const Contact = () => {
  const theme = useTheme();
  const content = {
    hero: {
      header: "Contact Us",
      subHeader: "Proudly Serving Southern California Since 2000!",
    },
    join: {
      header: "Interested in joining our team?",
      subHeader: "E-mail an application form to jobs@californiacoach.com.",
    },
    form: {
      header: "Can't find the answer you need?",
      subHeader:
        "Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.",
    },
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundColor: theme.palette.alternate.main,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.alternate.dark} 0%, ${theme.palette.background.paper} 100%)`,
          marginTop: -13,
          paddingTop: 13,
        }}
      >
        <ContactHeroSection content={content.hero} />
      </Box>
      <Box bgcolor={"alternate.main"}>
        <Container>
          <ContactFormSection content={content.form} />
        </Container>
      </Box>
      <Box bgcolor={"alternate.main"}>
        <Container>
          <ContactJoinSection content={content.join} />
        </Container>
      </Box>
    </>
  );
};

export default Contact;
