/* eslint-disable react/no-unescaped-entities */

'use client';

import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const mock = {
  description: `Our focus is always on finding the best people to work with. Our
    bar is high, but you look ready to take on the challenge.

    We design and implement creative solutions to everyday business
    problems.


    We are a team of creative consultants who help bridge the digital
    gap between companies and their clients with websites that not
    only serve as marketing platforms but also provide solutions to
    online business problems and digital marketing strategies that
    connect you with the ideal client and help create a loyal
    customer.`,
};

const Story = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={"center"}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          Partnerships
        </Typography>
      </Box>
      <Grid container spacing={4} direction={isMd ? "row" : "column"}>
        <Grid item container alignItems={"center"} xs={12} md={6}>
          <Box>
            <Typography variant={"h4"} gutterBottom sx={{ fontWeight: 700 }}>
              One Tree Planted
            </Typography>
            <Typography component={"p"}>{`${mock.description}`}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box maxWidth={500} width={1}>
            <Box
              component={"img"}
              src={"/assets/trees.jpg"}
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === "dark" ? "brightness(0.8)" : "none",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;
