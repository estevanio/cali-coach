import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import AboutHeroSection from "../ui/about/AboutHeroSection";
import AboutSpecialtySection from "../ui/about/AboutSpecialtySection";
import AboutClientSection from "../ui/about/AboutClientSection";
import AboutAwardsSection from "../ui/about/AboutAwardsSection";
import AboutPartnershipSection from "../ui/about/AboutPartnershipSection";
const Container = ({ children, ...rest }) => (
  <Box
    width={1}
    margin={"0 auto"}
    paddingX={2}
    paddingY={{ xs: 4, sm: 6, md: 8 }}
    maxWidth={900}
    {...rest}
  >
    {children}
  </Box>
);

const content = {
  specialty: {
    header: "Our Specialty",
    items: [
      {
        name: "Freeway Service Patrol",
        description: `The Freeway Service Patrol (FSP) is a joint program provided by
        the California Department of Transportation (Caltrans), the
        California Highway Patrol (CHP) and the local transportation
        agency. The FSP program is a free service of privately owned tow
        trucks that patrol designated routes on congested urban California
        freeways. Typically, FSP operates Monday through Friday during
        peak commute hours, and all day in pre-designated freeway
        construction zones. In heavily congested freeway corridors it is
        becoming more commonplace for FSP to operate during the midday and
        on weekends/holidays in addition to the weekday peak period
        service.`,
      },
      {
        name: "Express Lane Service Patrol",
        description: `freeway service xpress yess`,
      },
    ],
  },
};

const About = () => {
  return (
    <>
      <AboutHeroSection />
      <Container paddingTop={"0 !important"}>
        <AboutSpecialtySection content={content.specialty} />
      </Container>
      <Container paddingY={"0 !important"}>
        <Divider />
      </Container>
      <Container paddingY={"0 !important"}>
        <AboutAwardsSection />
      </Container>
      <Container>
        <AboutClientSection />
      </Container>
      <Container>
        <AboutPartnershipSection />
      </Container>
    </>
  );
};

export default About;
