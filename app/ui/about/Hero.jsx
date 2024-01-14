"use client";

import React, { useEffect } from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Container = ({ children, ...rest }) => (
  <Box
    maxWidth={{ sm: 720, md: 1236 }}
    width={1}
    margin={"0 auto"}
    paddingX={2}
    paddingY={{ xs: 4, sm: 6, md: 8 }}
    {...rest}
  >
    {children}
  </Box>
);

const Hero = () => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll(".jarallax");
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import("jarallax");
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  return (
    <Box
      className={"jarallax"}
      data-jarallax
      data-speed="0.2"
      position={"relative"}
      minHeight={{ xs: 200, sm: 250, md: 350 }}
      display={"flex"}
      alignItems={"center"}
      marginTop={-13}
      paddingTop={13}
      id="agency__portfolio-item--js-scroll"
    >
      <Box
        className={"jarallax-img"}
        sx={{
          position: "absolute",
          objectFit: "cover",
          /* support for plugin https://github.com/bfred-it/object-fit-images */
          fontFamily: "object-fit: cover;",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundImage: "url(/images/burnedforest.jpg)"
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: alpha("#161c2d", 0.4),
          zIndex: 1
        }}
      />
      <Container position={"relative"} zIndex={2}>
        <Box>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 900,
              color: "brand.beige",
              textTransform: "uppercase",
              textShadow: "1px 1px 2px #0F0F0F"
            }}
          >
            About Cars2Trees
          </Typography>
          {/* <Typography
            variant="h6"
            component="p"
            color="text.primary"
            sx={{
              color: "common.white"
            }}
          >
            Proudly Serving Southern California Since 2000!
          </Typography> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
