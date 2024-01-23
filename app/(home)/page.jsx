"use client";

import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import Container from "@/app/ui/Container";
import Hero from "@/app/ui/home/HeroSection";
import ContactSection from "@/app/ui/home/LocationSection";
import ProductCategories from "@/app/ui/home/ServicesSection";

const HomePage = () => {
  const theme = useTheme();

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
        <Container>
          <Hero />
        </Container>
      </Box>
      <ProductCategories />
      <ContactSection />
    </>
  );
};

export default HomePage;
