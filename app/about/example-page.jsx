/* eslint-disable react/no-unescaped-entities */


import React from "react";
import Box from "@mui/material/Box";

import Hero from "@/app/ui/about/Hero";
import Mission from "@/app/ui/about/Mission";
import Impact from "@/app/ui/about/Impact";
import Partners from "@/app/ui/about/Partners";

const content = {
  mission: {
    title: "Our Mission",
    subtitle: "Our promise to you",
    description: (
      <>
        <p>
          Here at Cars for Trees, we're taking your old rides and turning them
          into Mother Nature's best friends. Our mission is to convert your
          generous car donations into flourishing trees, vitalizing our
          ecosystems, and protecting our shared future. Think of it as trading
          in your car for a bunch of trees. It's all about giving back to the
          planet and making sure we leave it better than we found it. Cars to
          Trees is committed to reducing global warming and fostering a
          healthier environment. Our founder isn't new to this. With 50,000
          trees planted in the last 3 years, we've already got some green miles
          under our belt!
        </p>
        <p>
          By contributing to our cause, you are not just giving away a car; you
          are planting seeds for a better tomorrow. Our vision is to drive an
          ecological revolution in our community by transforming automotive
          donations into green landscapes, making Southern California a symbol
          of environmental stewardship and sustainability.
        </p>
      </>
    )
  }
};

const Container = ({ children, ...rest }) => (
  <Box
    width={1}
    margin={"0 auto"}
    paddingX={2}
    paddingY={{ xs: 1, sm: 2, md: 3 }}
    maxWidth={900}
    {...rest}
  >
    {children}
  </Box>
);



const About = () => {
  return (
    <>
      <Hero />
      <Mission {...content.mission} />
      <Container>
        <Impact />
      </Container>
      <Container>
        <Partners />
      </Container>
    </>
  );
};

export default About;
