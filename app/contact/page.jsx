"use client";


import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Hero from "@/app/ui/contact/Hero";
import Form from "@/app/ui/contact//Form";
import ContactDetails from "@/app/ui/contact/ContactDetails";

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
      subHeader: "Ready to turn your old car into trees?"
    },
    join: {
      header: "Interested in joining our team?",
      subHeader: "E-mail an application form to jobs@californiacoach.com."
    },
    form: {
      header: "Let's connect!",
      subHeader:
        "At Cars 2 Trees, your thoughts, questions, and feedback are essential to us. Whether you want to know more about our mission, have a specific request regarding your donation, or simply want to share your thoughts, we're here to listen."
    }
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundColor: theme.palette.alternate.main,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.alternate.dark} 0%, ${theme.palette.background.paper} 100%)`,
          marginTop: -13,
          paddingTop: 13
        }}
      >
        <Hero content={content.hero} />
      </Box>
      <Box bgcolor={"alternate.main"}>
        <Container>
          <Form content={content.form} />
        </Container>
      </Box>
      <Container>
      <ContactDetails/>
      </Container>
    </>
  );
};

export default Contact;
